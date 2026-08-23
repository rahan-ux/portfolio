import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Commitments from "@/components/Commitments";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | FUNDAUX",
  description: "Explore FUNDAUX's financial planning, wealth strategy, investment guidance, and goal-based planning services.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Page Hero */}
        <div className="page-hero" style={{ paddingTop: "7rem", paddingBottom: "4rem" }}>
          <div className="section-container" style={{ position: "relative", zIndex: 1 }}>
            <span className="page-hero-label">Our Services</span>
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
              What We<br />
              <span style={{ color: "#93C5FD" }}>Offer</span>
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
              Comprehensive financial services built on discipline, transparency and long-term thinking.
            </p>
          </div>
        </div>

        <Services />
        <Commitments />
      </main>
      <Footer />
    </>
  );
}
