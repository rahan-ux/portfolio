import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | FUNDAUX",
  description: "Get in touch with FUNDAUX to start building your financial roadmap today.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Page Hero */}
        <div className="page-hero" style={{ paddingTop: "7rem", paddingBottom: "4rem" }}>
          <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
            <span className="page-hero-label">Get In Touch</span>
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
              Start Your<br />
              <span style={{ color: "#93C5FD" }}>Financial Journey.</span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "1.05rem",
                maxWidth: "420px",
                lineHeight: 1.7,
                marginTop: "1.25rem",
              }}
            >
              Reach out today and we&apos;ll schedule a consultation to understand your goals.
            </p>
          </div>
        </div>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
