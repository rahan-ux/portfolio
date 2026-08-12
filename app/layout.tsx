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
  title: "FUNDAUX | Achieve Your Financial Goals",
  description:
    "FUNDAUX provides structured financial strategies designed to help individuals and organizations pursue their financial goals with clarity and discipline.",
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
    title: "FUNDAUX | Achieve Your Financial Goals",
    description:
      "FUNDAUX provides structured financial strategies designed to help individuals and organizations pursue their financial goals with clarity and discipline.",
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
    title: "FUNDAUX | Achieve Your Financial Goals",
    description:
      "FUNDAUX provides structured financial strategies designed to help individuals and organizations pursue their financial goals with clarity and discipline.",
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
