"use client";

import AnimatedSection from "./AnimatedSection";

export default function Founder() {
  const credentials = [
    "NISM Series VIII: Equity Derivatives",
    "Equity Market Operations",
  ];

  return (
    <section id="founder" style={{ padding: "6rem 0" }}>
      <div className="section-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">Meet the Founder</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                marginTop: "1rem",
                color: "var(--color-text-primary)",
              }}
            >
              Rahan Santhosh
            </h2>
            <div className="gold-divider" style={{ margin: "1.5rem auto 0" }} />
          </div>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Founder Info */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card" style={{ padding: "3rem" }}>
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "var(--color-accent)",
                  marginBottom: "0.5rem",
                }}
              >
                Founder & Lead Strategist
              </h3>
              <div
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.9rem",
                  marginBottom: "2rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                6+ Years Experience
              </div>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                }}
              >
                A seasoned professional trader with over 6 years of experience
                in the Indian stock market. Rahan specializes in complex
                derivatives strategies and technical analysis.
              </p>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                His vision for Fundaux is to democratize professional trading
                expertise, allowing every investor to benefit from market
                volatility with reduced risk.
              </p>
            </div>
          </AnimatedSection>

          {/* Credentials */}
          <AnimatedSection delay={0.4}>
            <div>
              <h3
                style={{
                  fontSize: "1.75rem",
                  color: "var(--color-text-primary)",
                  marginBottom: "2rem",
                }}
              >
                Professional Credentials
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  marginBottom: "2rem",
                  fontSize: "1.1rem",
                }}
              >
                Rahan Santhosh is an NISM Certified Trader, holding credentials
                in:
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                {credentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="glass-card"
                    style={{
                      padding: "1.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      background: "var(--color-surface-2)",
                    }}
                  >
                    <div
                      style={{
                        color: "var(--color-accent)",
                        fontSize: "1.25rem",
                      }}
                    >
                      🏆
                    </div>
                    <div
                      style={{
                        color: "var(--color-text-primary)",
                        fontWeight: 500,
                      }}
                    >
                      {cred}
                    </div>
                  </div>
                ))}
              </div>

              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.95rem",
                  fontStyle: "italic",
                }}
              >
                These certifications ensure that our trading practices adhere to
                the highest regulatory and technical standards mandated by SEBI.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
