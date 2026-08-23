import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ | FUNDAUX",
  description: "Frequently asked questions about FUNDAUX's financial services, process, and approach.",
};

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Page Hero */}
        <div className="page-hero" style={{ paddingTop: "7rem", paddingBottom: "4rem" }}>
          <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
            <span className="page-hero-label">FAQs</span>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginTop: "0.75rem",
                letterSpacing: "-0.02em",
              }}
            >
              Got Questions?<br />
              <span style={{ color: "#93C5FD" }}>We Have Answers.</span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "1.05rem",
                maxWidth: "440px",
                lineHeight: 1.7,
                marginTop: "1.25rem",
              }}
            >
              Everything you need to know about working with FUNDAUX.
            </p>
          </div>
        </div>

        <Faq />
      </main>
      <Footer />
    </>
  );
}
