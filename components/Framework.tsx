"use client";

import AnimatedSection from "./AnimatedSection";

export default function Framework() {
  const tableData = [
    { feature: "Minimum Capital Requirement", specs: "₹ 2,00,000 (2L)" },
    { feature: "Guaranteed Monthly Payout", specs: "₹ 5,000" },
    { feature: "Monthly Return Rate", specs: "2.5% on Capital" },
    { feature: "Commitment Period", specs: "Minimum 1 Year" },
  ];

  const whyUs = [
    {
      title: "Passive Income",
      desc: "Earn regular income without the stress of daily market monitoring.",
    },
    {
      title: "Risk Mitigation",
      desc: "Diversified trading in equity and derivatives to ensure capital safety.",
    },
    {
      title: "Time Efficiency",
      desc: "Professional management allows you to focus on your career while your money works.",
    },
    {
      title: "Transparency",
      desc: "Regular reporting and professional accountability for all managed funds.",
    },
  ];

  return (
    <section
      id="framework"
      style={{ padding: "6rem 0", background: "var(--color-surface-2)" }}
    >
      <div className="section-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">Investment</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                marginTop: "1rem",
                color: "var(--color-text-primary)",
              }}
            >
              Investment Framework
            </h2>
            <div className="gold-divider" style={{ margin: "1.5rem auto 0" }} />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div
            className="glass-card"
            style={{
              overflow: "hidden",
              marginBottom: "4rem",
              maxWidth: "900px",
              margin: "0 auto 4rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                background: "var(--color-surface)",
                padding: "1.5rem 2rem",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <div
                style={{
                  color: "var(--color-accent)",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                }}
              >
                Investment Feature
              </div>
              <div
                style={{
                  color: "var(--color-accent)",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                }}
              >
                Specifications
              </div>
            </div>
            {tableData.map((row, idx) => (
              <div
                key={idx}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  padding: "1.5rem 2rem",
                  background:
                    idx % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                  borderBottom:
                    idx < tableData.length - 1
                      ? "1px solid var(--color-border)"
                      : "none",
                }}
              >
                <div style={{ color: "var(--color-text-primary)" }}>
                  {row.feature}
                </div>
                <div style={{ color: "var(--color-text-secondary)" }}>
                  {row.specs}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <h3
            style={{
              fontSize: "1.75rem",
              color: "var(--color-text-primary)",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Why Invest with <span style={{ color: "var(--color-accent)" }}>Fundaux</span>?
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {whyUs.map((item, idx) => (
              <div key={idx} style={{ display: "flex", gap: "1rem" }}>
                <div
                  style={{
                    color: "var(--color-accent)",
                    fontSize: "1.25rem",
                  }}
                >
                  ✓
                </div>
                <div>
                  <h4
                    style={{
                      color: "var(--color-text-primary)",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
