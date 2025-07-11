// app/api/webhooks/clerk/route.ts

import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import prisma from "@/lib/db"; // Your Prisma client instance
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("🔥 Webhook received!");

  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error("❌ WEBHOOK_SECRET is missing!");
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
    console.error("❌ Missing svix headers");
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
    console.log("✅ Webhook verification successful");
  } catch (err) {
    console.error("❌ Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Get the type of event
  const { id } = evt.data;
  const eventType = evt.type;

  console.log(`Webhook with an ID of ${id} and type of ${eventType}`);

  // Handle the event
  if (eventType === "user.created") {
    console.log("👤 Handling user.created event");

    const {
      id,
      email_addresses,
      image_url,
      first_name,
      last_name,
      phone_numbers,
    } = evt.data;

    console.log("📝 User data:", {
      id,
      email_addresses,
      image_url,
      first_name,
      last_name,
      phone_numbers,
    });

    try {
      const result = await prisma.user.create({
        data: {
          clerkId: id,
          email: email_addresses[0].email_address,
          name: `${first_name} ${last_name}`.trim(), // Combine first and last name, fallback to username
          imageUrl: image_url,
          phoneNumber: phone_numbers[0].phone_number,
        },
      });
      console.log("✅ User created successfully in database:", result);
      return NextResponse.json({ message: "User created" }, { status: 201 });
    } catch (error) {
      console.error("❌ Failed to create user in database:", error);
      return NextResponse.json(
        { error: "Failed to create user" },
        { status: 500 }
      );
    }
  }

  if (eventType === "user.updated") {
    console.log("✏️ Handling user.updated event");

    const {
      id,
      email_addresses,
      image_url,
      first_name,
      last_name,
      phone_numbers,
    } = evt.data;

    console.log("📝 User update data:", {
      id,
      email_addresses,
      image_url,
      first_name,
      last_name,
      phone_numbers,
    });

    try {
      const result = await prisma.user.update({
        where: {
          clerkId: id,
        },
        data: {
          email: email_addresses[0].email_address,
          name: `${first_name} ${last_name}`.trim(), // Combine first and last name, fallback to username
          imageUrl: image_url,
          phoneNumber: phone_numbers[0].phone_number,
        },
      });
      console.log("✅ User updated successfully in database:", result);
      return NextResponse.json({ message: "User updated" }, { status: 200 });
    } catch (error) {
      console.error("❌ Failed to update user in database:", error);
      return NextResponse.json(
        { error: "Failed to update user" },
        { status: 500 }
      );
    }
  }

  if (eventType === "user.deleted") {
    console.log("🗑️ Handling user.deleted event");

    try {
      const result = await prisma.user.delete({
        where: {
          clerkId: evt.data.id,
        },
      });
      console.log("✅ User deleted successfully from database:", result);
      return NextResponse.json({ message: "User deleted" }, { status: 200 });
    } catch (error) {
      console.error("❌ Failed to delete user from database:", error);
      return NextResponse.json(
        { error: "Failed to delete user" },
        { status: 500 }
      );
    }
  }

  console.log("ℹ️ Unhandled event type:", eventType);
  return new Response("", { status: 200 });
}
