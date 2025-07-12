// app/api/webhooks/clerk/route.ts

import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import prisma from "@/lib/db"; // Your Prisma client instance
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const timestamp = new Date().toISOString();
  console.log(`🔥 [${timestamp}] Webhook received!`);

  // Log request details
  const url = new URL(req.url);
  const userAgent = req.headers.get("user-agent");
  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");

  console.log(`📡 [${timestamp}] Request details:`, {
    url: url.pathname,
    userAgent,
    origin,
    referer,
    method: req.method,
  });

  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error(`❌ [${timestamp}] WEBHOOK_SECRET is missing!`);
    throw new Error(
      "Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = req.headers;
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error(`❌ [${timestamp}] Missing svix headers`);
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
    console.log(`✅ [${timestamp}] Webhook verification successful`);
  } catch (err) {
    console.error(`❌ [${timestamp}] Error verifying webhook:`, err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Get the type of event
  const { id } = evt.data;
  const eventType = evt.type;

  console.log(
    `🎯 [${timestamp}] Webhook with an ID of ${id} and type of ${eventType}`
  );
  console.log(`📊 [${timestamp}] Event metadata:`, {
    eventType,
    eventId: id,
    svixId: svix_id,
    svixTimestamp: svix_timestamp,
    instanceId: payload.instance_id,
    objectType: payload.object,
  });
  console.log(
    `📋 [${timestamp}] Full event data:`,
    JSON.stringify(evt.data, null, 2)
  );

  // Handle the event
  if (eventType === "user.created") {
    console.log(`👤 [${timestamp}] Handling user.created event`);

    const { id, email_addresses, image_url, first_name, last_name } = evt.data;

    if (!email_addresses || email_addresses.length === 0) {
      console.error(
        `❌ [${timestamp}] User has no email address. Cannot create user in DB.`,
        {
          clerkId: id,
        }
      );
      return NextResponse.json(
        { error: "User has no email address" },
        { status: 400 }
      );
    }

    console.log(`📝 [${timestamp}] User data:`, {
      id,
      email_addresses,
      image_url,
      first_name,
      last_name,
    });

    try {
      const name = [first_name, last_name].filter(Boolean).join(" ").trim();
      const result = await prisma.user.upsert({
        where: { clerkId: id },
        update: {
          email: email_addresses[0].email_address,
          name: name,
          imageUrl: image_url,
        },
        create: {
          clerkId: id,
          email: email_addresses[0].email_address,
          name: name,
          imageUrl: image_url,
        },
      });
      console.log(
        `✅ [${timestamp}] User created/updated successfully in database:`,
        result
      );
      return NextResponse.json(
        { message: "User created or updated" },
        { status: 201 }
      );
    } catch (error) {
      console.error(
        `❌ [${timestamp}] Failed to create user in database:`,
        error
      );
      return NextResponse.json(
        { error: "Failed to create user" },
        { status: 500 }
      );
    }
  }

  if (eventType === "user.updated") {
    console.log(`✏️ [${timestamp}] Handling user.updated event`);

    const { id, email_addresses, image_url, first_name, last_name } = evt.data;

    if (!email_addresses || email_addresses.length === 0) {
      console.error(
        `❌ [${timestamp}] User has no email address. Cannot update user in DB.`,
        {
          clerkId: id,
        }
      );
      return NextResponse.json(
        { error: "User has no email address" },
        { status: 400 }
      );
    }

    console.log(`📝 [${timestamp}] User update data:`, {
      id,
      email_addresses,
      image_url,
      first_name,
      last_name,
    });

    try {
      const name = [first_name, last_name].filter(Boolean).join(" ").trim();
      const result = await prisma.user.upsert({
        where: { clerkId: id },
        update: {
          email: email_addresses[0].email_address,
          name: name,
          imageUrl: image_url,
        },
        create: {
          clerkId: id,
          email: email_addresses[0].email_address,
          name: name,
          imageUrl: image_url,
        },
      });
      console.log(
        `✅ [${timestamp}] User updated successfully in database:`,
        result
      );
      return NextResponse.json({ message: "User updated" }, { status: 200 });
    } catch (error) {
      console.error(
        `❌ [${timestamp}] Failed to update user in database:`,
        error
      );
      return NextResponse.json(
        { error: "Failed to update user" },
        { status: 500 }
      );
    }
  }

  if (eventType === "user.deleted") {
    console.log(`🗑️ [${timestamp}] Handling user.deleted event`);

    try {
      const result = await prisma.user.delete({
        where: {
          clerkId: evt.data.id,
        },
      });
      console.log(
        `✅ [${timestamp}] User deleted successfully from database:`,
        result
      );
      return NextResponse.json({ message: "User deleted" }, { status: 200 });
    } catch (error) {
      console.error(
        `❌ [${timestamp}] Failed to delete user from database:`,
        error
      );
      return NextResponse.json(
        { error: "Failed to delete user" },
        { status: 500 }
      );
    }
  }

  console.log(`ℹ️ [${timestamp}] Unhandled event type:`, eventType);
  return new Response("", { status: 200 });
}
