"use client";

import AnimatedSection from "./AnimatedSection";

export default function Performance() {
  const benchmarks = [
    { label: "Savings Account", value: 0.3, width: "12%" },
    { label: "Fixed Deposit", value: 0.6, width: "24%" },
    { label: "Mutual Funds (Avg)", value: 1.2, width: "48%" },
    { label: "FUNDAUX", value: 2.5, width: "100%", isAccent: true },
  ];

  return (
    <section id="performance" style={{ padding: "6rem 0" }}>
      <div className="section-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">Performance</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                marginTop: "1rem",
                color: "var(--color-text-primary)",
              }}
            >
              Unmatched Performance
            </h2>
            <div className="gold-divider" style={{ margin: "1.5rem auto 0" }} />
          </div>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "4rem",
          }}
        >
          {/* Consistency Section */}
          <AnimatedSection delay={0.2}>
            <div
              className="glass-card"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
                padding: "3rem",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "clamp(4rem, 10vw, 6rem)",
                    fontWeight: 800,
                    color: "var(--color-accent)",
                    lineHeight: 1,
                    marginBottom: "1rem",
                  }}
                >
                  2.5%
                </div>
                <div style={{ fontSize: "1.25rem", color: "var(--color-text-primary)" }}>
                  Fixed Monthly Return
                </div>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "1.75rem",
                    color: "var(--color-accent)",
                    marginBottom: "1rem",
                  }}
                >
                  Consistency is Key
                </h3>
                <p
                  style={{
                    color: "var(--color-text-secondary)",
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                  }}
                >
                  At Fundaux, we don't just trade; we manage. Our systems are
                  designed to extract consistent value from the markets, ensuring
                  you receive 5,000 INR monthly for every 2L invested.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Benchmark Section */}
          <AnimatedSection delay={0.4}>
            <div>
              <h3
                style={{
                  fontSize: "1.75rem",
                  color: "var(--color-text-primary)",
                  marginBottom: "2rem",
                  textAlign: "center",
                }}
              >
                Monthly Return Benchmark
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  maxWidth: "800px",
                  margin: "0 auto",
                }}
              >
                {benchmarks.map((bm, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "150px 1fr",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        textAlign: "right",
                        fontSize: "0.9rem",
                        color: "var(--color-text-secondary)",
                        fontWeight: 500,
                      }}
                    >
                      {bm.label}
                    </div>
                    <div
                      style={{
                        width: "100%",
                        background: "var(--color-surface-2)",
                        borderRadius: "999px",
                        height: "2.5rem",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          width: bm.width,
                          background: bm.isAccent
                            ? "var(--color-accent)"
                            : "var(--color-border)",
                          height: "100%",
                          borderRadius: "999px",
                          display: "flex",
                          alignItems: "center",
                          paddingLeft: "1rem",
                          color: bm.isAccent ? "#000" : "var(--color-text-primary)",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                        }}
                      >
                        {bm.value}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "3rem",
                  color: "var(--color-text-muted)",
                  fontSize: "0.95rem",
                  maxWidth: "800px",
                  margin: "3rem auto 0",
                  fontStyle: "italic",
                }}
              >
                Fundaux provides up to 4x the typical returns of traditional
                bank-based savings products through active market management.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
