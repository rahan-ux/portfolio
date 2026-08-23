import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | FUNDAUX",
  description: "Learn about FUNDAUX, our mission, and the leadership driving our structured financial strategies.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Page Hero */}
        <div className="page-hero" style={{ paddingTop: "7rem", paddingBottom: "4rem" }}>
          <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
            <span className="page-hero-label">About Us</span>
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
              Building Better<br />
              <span style={{ color: "#93C5FD" }}>Financial Futures</span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "1.05rem",
                maxWidth: "480px",
                lineHeight: 1.7,
                marginTop: "1.25rem",
              }}
            >
              Structured strategies. Disciplined execution. Transparent results.
            </p>
          </div>
        </div>

        <About />
        <Founder />
      </main>
      <Footer />
    </>
  );
}
