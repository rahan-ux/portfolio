"use client";

import { motion } from "framer-motion";
import { LineChart, Compass, Landmark, Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const SERVICES = [
  {
    icon: Compass,
    title: "Financial Planning",
    description: "Structured planning designed around financial goals.",
  },
  {
    icon: Landmark,
    title: "Wealth Strategy",
    description: "Long-term strategies focused on responsible wealth creation.",
  },
  {
    icon: LineChart,
    title: "Investment Guidance",
    description: "Research-driven approaches to investment decision-making.",
  },
  {
    icon: Briefcase,
    title: "Goal-Based Planning",
    description: "Financial strategies aligned with specific personal or business goals.",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "8rem 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}>
      <div className="section-container">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "4rem" }}>
          <AnimatedSection>
            <span className="section-label">Expertise</span>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--color-text-primary)" }}>
              WHAT WE <span style={{ color: "var(--color-accent)" }}>DO</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div 
                className="service-card"
                style={{ 
                  padding: "3rem 2rem", 
                  background: "var(--color-surface-2)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  height: "100%",
                  transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default"
                }}
              >
                <div 
                  className="service-icon-wrapper"
                  style={{
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.03)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    transition: "background 0.3s ease, transform 0.3s ease"
                  }}
                >
                  <service.icon size={28} className="service-icon" style={{ color: "var(--color-text-primary)", transition: "color 0.3s ease" }} />
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "1rem" }}>
                  {service.title}
                </h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
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
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .service-card:hover {
          transform: translateY(-5px);
          border-color: rgba(245, 229, 0, 0.3);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .service-card:hover .service-icon-wrapper {
          background: rgba(245, 229, 0, 0.1);
          transform: scale(1.1);
        }
        .service-card:hover .service-icon {
          color: var(--color-accent) !important;
        }
      `}</style>
    </section>
  );
}
