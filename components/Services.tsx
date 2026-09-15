"use client";

import { LineChart, Compass, Landmark, Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const SERVICES = [
  {
    icon: Compass,
    title: "Financial Planning",
    description: "Structured planning designed around your financial goals and life priorities.",
  },
  {
    icon: Landmark,
    title: "Wealth Strategy",
    description: "Long-term strategies focused on responsible wealth creation and preservation.",
  },
  {
    icon: LineChart,
    title: "Investment Guidance",
    description: "Research-driven approaches to investment decision-making.",
  },
  {
    icon: Briefcase,
    title: "Goal-Based Planning",
    description: "Financial strategies aligned with specific personal or business objectives.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{ padding: "4.5rem 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}
    >
      <div className="section-container">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "3.5rem" }}>
          <AnimatedSection>
            <span className="section-label">Expertise</span>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)", fontWeight: 800, color: "var(--color-text-primary)", marginTop: "0.5rem" }}>
              WHAT WE <span style={{ color: "var(--color-accent-mid)" }}>DO</span>
            </h2>
            <p style={{ fontSize: "1rem", color: "var(--color-text-secondary)", maxWidth: "500px", marginTop: "1rem", lineHeight: 1.7 }}>
              Comprehensive financial services built on discipline, transparency and long-term thinking.
            </p>
          </AnimatedSection>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div
                className="service-card"
                style={{
                  padding: "2.5rem 2rem",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  textAlign: "left",
                  height: "100%",
                  transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                }}
              >
                <div
                  className="service-icon-wrapper"
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "0.75rem",
                    background: "var(--color-accent-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    transition: "background 0.3s ease, transform 0.3s ease",
                    border: "1px solid rgba(30,58,138,0.12)",
                  }}
                >
                  <service.icon size={22} className="service-icon" style={{ color: "var(--color-accent)", transition: "color 0.3s ease" }} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
                  {service.title}
                </h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.92rem", lineHeight: 1.65 }}>
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 640px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .services-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .service-card:hover {
          transform: translateY(-4px);
          border-color: rgba(30,58,138,0.25);
          box-shadow: 0 12px 40px rgba(30,58,138,0.10);
        }
        .service-card:hover .service-icon-wrapper {
          background: rgba(30,58,138,0.14);
          transform: scale(1.08);
        }
        .service-card:hover .service-icon {
          color: var(--color-accent-mid) !important;
        }
      `}</style>
    </section>
  );
}
