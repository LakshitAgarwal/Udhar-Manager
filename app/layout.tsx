import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vouchly - Turn Happy Customers Into 5-Star Reviews",
  description:
    "Automatically ask customers for Google reviews via WhatsApp, SMS & email. Get more positive reviews and attract new customers effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      signInFallbackRedirectUrl="/dashboard"
      signUpFallbackRedirectUrl="/dashboard"
    >
      <html lang="en" suppressHydrationWarning>
        <body
          suppressHydrationWarning
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="relative min-h-screen w-full bg-black">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
            <div className="relative z-10">{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
