"use client";

import AnimatedSection from "./AnimatedSection";

export default function Commitments() {
  const commitments = [
    {
      title: "Capital Protection",
      description:
        "Minimizing downside risk through advanced hedging strategies in the derivatives market.",
      icon: "🛡️",
    },
    {
      title: "Monthly Returns",
      description:
        "Providing a consistent 2.5% return on your invested capital, month after month.",
      icon: "📈",
    },
    {
      title: "Expertise",
      description:
        "Backed by over 6 years of professional market experience and NISM certification.",
      icon: "🤝",
    },
  ];

  return (
    <section
      id="commitments"
      style={{ padding: "6rem 0", background: "var(--color-surface-2)" }}
    >
      <div className="section-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">What We Deliver</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                marginTop: "1rem",
                color: "var(--color-text-primary)",
              }}
            >
              Our Core Commitments
            </h2>
            <div className="gold-divider" style={{ margin: "1.5rem auto 0" }} />
          </div>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {commitments.map((item, idx) => (
            <AnimatedSection key={idx} delay={0.2 * (idx + 1)}>
              <div
                className="glass-card"
                style={{
                  padding: "2.5rem 2rem",
                  height: "100%",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--color-accent)",
                    marginBottom: "1rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
