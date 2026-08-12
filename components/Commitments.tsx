"use client";

import { motion } from "framer-motion";
import { Eye, ShieldCheck, Gem, Target } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const COMMITMENTS = [
  {
    num: "01",
    icon: Eye,
    title: "Transparency",
    description: "Clear communication and full visibility into our strategies, ensuring you always know where you stand.",
  },
  {
    num: "02",
    icon: Target,
    title: "Discipline",
    description: "Rigorous adherence to structured financial frameworks designed to weather market volatility.",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Integrity",
    description: "Unwavering commitment to ethical decision-making, putting your financial well-being first.",
  },
  {
    num: "04",
    icon: Gem,
    title: "Long-Term Value",
    description: "Sustainable approaches focused on enduring wealth creation rather than short-term gains.",
  },
];

export default function Commitments() {
  return (
    <section id="commitments" style={{ padding: "8rem 0", background: "var(--color-bg)", position: "relative" }}>
      {/* Background decoration */}
      <div style={{ position: "absolute", top: "10%", right: "0", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(245, 229, 0, 0.02) 0%, transparent 70%)", pointerEvents: "none" }} />
      
      <div className="section-container" style={{ position: "relative", zIndex: 10 }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">Our Principles</span>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--color-text-primary)" }}>
              OUR <span style={{ color: "var(--color-accent)" }}>COMMITMENTS</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="commitments-grid">
          {COMMITMENTS.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div 
                className="glass-card commitment-card"
                style={{ 
                  padding: "2.5rem", 
                  position: "relative", 
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
                  <div style={{ 
                    width: "3rem", 
                    height: "3rem", 
                    borderRadius: "0.75rem", 
                    background: "rgba(255,255,255,0.05)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    border: "1px solid rgba(255,255,255,0.05)"
                  }}>
                    <item.icon size={24} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <span style={{ fontSize: "3rem", fontWeight: 700, color: "rgba(255,255,255,0.03)", lineHeight: 1 }}>
                    {item.num}
                  </span>
                </div>
                
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "1rem" }}>
                  {item.title}
                </h3>
                
                <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style>{`
        .commitments-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .commitments-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .commitments-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .commitment-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .commitment-card:hover::before {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
