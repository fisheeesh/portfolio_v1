import type { NextConfig } from "next";

// Content Security Policy
// https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-src 'self' https://vercel.live;
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {},
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, "").replace(/\s+/g, " ")
          },
        ],
      },
    ];
  },
};

export default nextConfig;