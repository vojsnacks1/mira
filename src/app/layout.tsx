import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
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
  title: "Mira — Your AI Assistant",
  description: "A personal AI assistant that remembers you and grows with every conversation.",
};

const clerkProxyUrl =
  process.env.NEXT_PUBLIC_CLERK_PROXY_URL ||
  (process.env.VERCEL === "1" ? "/__clerk" : undefined);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClerkProvider proxyUrl={clerkProxyUrl}>{children}</ClerkProvider>
      </body>
    </html>
  );
}
