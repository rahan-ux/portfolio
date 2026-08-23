"use client";

import AnimatedSection from "./AnimatedSection";

export default function Performance() {
  return (
    <section
      id="performance"
      style={{ padding: "6rem 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}
    >
      <div className="section-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-label">Metrics</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3vw, 2.6rem)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                marginBottom: "1rem",
                marginTop: "0.5rem",
              }}
            >
              PERFORMANCE
            </h2>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "1rem", maxWidth: "460px", margin: "0 auto" }}>
              Track progress. Understand performance. Make informed decisions.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="perf-stats-grid">
            {[
              { label: "Performance", value: "Pending" },
              { label: "Growth", value: "+30%" },
              { label: "Risk", value: "Assessing" },
              { label: "Strategy", value: "Active" },
            ].map((stat, i) => (
              <div
                key={i}
                className="perf-stat-item"
                style={{
                  padding: "2.5rem 2rem",
                  borderRight: i < 3 ? "1px solid var(--color-border)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "1rem",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-text-muted)",
                    marginBottom: "0.6rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: stat.label === "Growth" ? "var(--color-accent-mid)" : "var(--color-text-primary)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        .perf-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .perf-stats-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .perf-stat-item {
          border-right: none !important;
        }
      `}</style>
    </section>
  );
}
