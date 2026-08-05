import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for deployability (Vercel, Netlify, GitHub Pages, etc.)
  output: "export",

  // Required for static export — Next.js Image Optimization runs server-side
  // and is not available in static mode. Use a CDN optimizer (Cloudinary, Imgix)
  // in production if image optimization is needed.
  images: {
    unoptimized: true,
  },

  // Security headers applied to all routes
  // NOTE: headers() is used for dev server; for static export these should be
  // configured at the hosting/CDN layer (e.g., Vercel headers in vercel.json).
  // TODO(security): Configure equivalent headers in vercel.json or your CDN config
  //                 before deploying to production.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "DENY" },
          // Prevent MIME type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Strict referrer policy
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Disable unused browser features
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Content Security Policy — allows self + Google Fonts only
          // TODO(security): Tighten nonce-based CSP if inline scripts are added
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'", // Next.js hydration requires this; use nonces in prod if possible
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob:",
              "connect-src 'self'",
              "frame-ancestors 'none'",
              "object-src 'none'",
              "base-uri 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
