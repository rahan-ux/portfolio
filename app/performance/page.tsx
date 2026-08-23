import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Performance from "@/components/Performance";
import Framework from "@/components/Framework";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Performance | FUNDAUX",
  description: "Track FUNDAUX's portfolio performance metrics and understand our structured 4-step investment framework.",
};

export default function PerformancePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Page Hero */}
        <div className="page-hero" style={{ paddingTop: "7rem", paddingBottom: "4rem" }}>
          <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
            <span className="page-hero-label">Performance & Framework</span>
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
              Track Progress.<br />
              <span style={{ color: "#93C5FD" }}>Make Better Decisions.</span>
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
              Transparent performance metrics backed by a disciplined 4-step framework.
            </p>
          </div>
        </div>

        <Performance />
        <Framework />
      </main>
      <Footer />
    </>
  );
}
