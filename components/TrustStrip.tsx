"use client";

import { motion } from "framer-motion";
import { Brain, Eye, Target, Users } from "lucide-react";

const TRUST_ITEMS = [
  { icon: Brain, label: "Strategic Thinking" },
  { icon: Target, label: "Long-Term Focus" },
  { icon: Eye, label: "Transparency" },
  { icon: Users, label: "Client-Centric" },
];

export default function TrustStrip() {
  return (
    <section style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", background: "var(--color-surface)" }}>
      <div className="section-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
            padding: "2rem 0",
          }}
          className="trust-grid"
        >
          {TRUST_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
              }}
            >
              <item.icon size={20} style={{ color: "var(--color-accent)" }} />
              <span style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--color-text-secondary)" }}>
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .trust-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
