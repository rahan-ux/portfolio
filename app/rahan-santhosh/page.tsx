import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import RahanProfile from "@/components/RahanProfile";
import Footer from "@/components/Footer";

/* ─── SEO Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://fundaux.finance"),
  title: "Rahan Santhosh | Founder of FUNDAUX | Financial Strategist India",
  description:
    "Rahan Santhosh is the Founder and Chief Strategist of FUNDAUX, an NISM-certified financial analyst and derivatives expert helping individuals and organisations achieve their financial goals through structured, disciplined strategies.",
  keywords: [
    "Rahan Santhosh",
    "Rahan Santhosh FUNDAUX",
    "Rahan Santhosh financial strategist",
    "Rahan Santhosh founder",
    "FUNDAUX founder",
    "NISM certified analyst India",
    "financial strategist India",
    "derivatives strategist",
    "fund management India",
    "rahansanthosh",
    "Rahan Santhosh investor",
    "Rahan Santhosh portfolio manager",
  ],
  authors: [{ name: "Rahan Santhosh", url: "https://fundaux.finance/rahan-santhosh" }],
  creator: "Rahan Santhosh",
  publisher: "FUNDAUX",
  alternates: {
    canonical: "https://fundaux.finance/rahan-santhosh",
  },
  openGraph: {
    type: "profile",
    url: "https://fundaux.finance/rahan-santhosh",
    title: "Rahan Santhosh | Founder of FUNDAUX | Financial Strategist India",
    description:
      "NISM-certified financial analyst and Founder of FUNDAUX. Structured strategies, disciplined execution, transparent results.",
    firstName: "Rahan",
    lastName: "Santhosh",
    username: "rahansanthosh",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Rahan Santhosh — Founder of FUNDAUX",
      },
    ],
    siteName: "FUNDAUX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahan Santhosh | Founder of FUNDAUX",
    description:
      "NISM-certified Financial Strategist. Founder of FUNDAUX — structured fund management for real financial goals.",
    creator: "@rahansanthosh",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

/* ─── JSON-LD Person Schema ───────────────────────────────────────────────────── */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rahan Santhosh",
  givenName: "Rahan",
  familyName: "Santhosh",
  jobTitle: "Founder & Chief Financial Strategist",
  description:
    "Rahan Santhosh is an NISM-certified financial analyst and the Founder of FUNDAUX, a structured fund management firm in India. He specialises in derivatives, options strategies, and systematic portfolio management.",
  url: "https://fundaux.finance/rahan-santhosh",
  email: "fundauxin@gmail.com",
  knowsAbout: [
    "Derivatives Trading",
    "Options Strategies",
    "Portfolio Management",
    "Financial Planning",
    "Fund Management",
    "NISM Certification",
    "Systematic Investing",
    "Capital Protection",
  ],
  sameAs: [
    "https://linkedin.com/in/rahansanthosh",
    "https://x.com/rahansanthosh",
  ],
  worksFor: {
    "@type": "Organization",
    name: "FUNDAUX",
    url: "https://fundaux.finance",
    description:
      "Structured financial management firm helping individuals and organisations pursue their financial goals.",
    foundingDate: "2021",
    founder: {
      "@type": "Person",
      name: "Rahan Santhosh",
    },
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "NISM Certified Research Analyst",
    credentialCategory: "Professional Certification",
    recognizedBy: {
      "@type": "Organization",
      name: "National Institute of Securities Markets (NISM)",
      url: "https://www.nism.ac.in",
    },
  },
};

/* ─── Page ───────────────────────────────────────────────────────────────────── */
export default function RahanSanthoshPage() {
  return (
    <>
      {/* JSON-LD structured data — Person schema for Google Knowledge Panel */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Navbar />
      <main id="main-content">
        <RahanProfile />
      </main>
      <Footer />
    </>
  );
}
