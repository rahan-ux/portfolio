import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

/* ─── Fonts ──────────────────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

/* ─── SEO Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Fundaux | Achieve Your Financial Goals",
  description:
    "Professional fund management designed for consistent monthly growth and financial independence.",
  keywords: [
    "fundaux",
    "financial goals",
    "fund management",
    "investment strategy",
    "capital protection",
    "derivatives",
    "monthly returns",
    "NISM certified",
  ],
  authors: [{ name: "Rahan Santhosh" }],
  openGraph: {
    type: "website",
    url: "https://fundaux.finance",
    title: "Fundaux | Achieve Your Financial Goals",
    description:
      "Empowering your future with consistent 2.5% fixed monthly returns.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fundaux – Professional Fund Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundaux | Achieve Your Financial Goals",
    description:
      "Empowering your future with consistent 2.5% fixed monthly returns.",
    creator: "@fundaux",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} dark`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
