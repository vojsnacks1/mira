import type { NextConfig } from "next";

const vercelUrl = process.env.VERCEL_URL;

const nextConfig: NextConfig = {
  env: {
    // Bake the proxy URL into the client bundle on Vercel (required for pk_test_ keys).
    ...(process.env.VERCEL === "1" && vercelUrl
      ? { NEXT_PUBLIC_CLERK_PROXY_URL: `https://${vercelUrl}/__clerk` }
      : {}),
  },
};

export default nextConfig;
