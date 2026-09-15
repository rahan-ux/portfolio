import AnimatedSection from "./AnimatedSection";

export default function Founder() {
  return (
    <section
      id="founder"
      style={{ padding: "4.5rem 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}
    >
      <div className="section-container">
        <div className="founder-grid">
          {/* Left: Photo */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <AnimatedSection direction="left">
              <div
                className="founder-photo-container"
                style={{
                  width: "100%",
                  maxWidth: "340px",
                  borderRadius: "1.25rem",
                  border: "1px solid var(--color-border)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-card)",
                  lineHeight: 0,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/founder.jpg"
                  alt="Rahan Santhosh – Founder of FUNDAUX"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Content */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <AnimatedSection>
              <span className="section-label">Leadership</span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: "var(--color-text-primary)",
                  marginBottom: "0.4rem",
                  lineHeight: 1.1,
                  marginTop: "0.5rem",
                }}
              >
                MEET THE FOUNDER
              </h2>
              <h3 style={{ fontSize: "1.4rem", color: "var(--color-accent-mid)", fontWeight: 600, marginBottom: "2rem" }}>
                Rahan Santhosh
              </h3>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <blockquote
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 500,
                  color: "var(--color-text-primary)",
                  fontStyle: "italic",
                  lineHeight: 1.65,
                  paddingLeft: "1.5rem",
                  borderLeft: "3px solid var(--color-accent-mid)",
                  marginBottom: "2.5rem",
                  position: "relative",
                }}
              >
                "Financial progress begins with clarity, discipline and the right strategy."
              </blockquote>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                <div
                  style={{
                    padding: "1.5rem",
                    background: "var(--color-surface-2)",
                    borderRadius: "0.75rem",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Vision
                  </h4>
                  <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7, fontSize: "0.92rem" }}>
                    To create a robust financial ecosystem where structured strategies lead to
                    sustainable and long-term financial independence.
                  </p>
                </div>

                <div
                  style={{
                    padding: "1.5rem",
                    background: "var(--color-surface-2)",
                    borderRadius: "0.75rem",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Leadership Philosophy
                  </h4>
                  <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7, fontSize: "0.92rem" }}>
                    Believing in data-driven decisions, complete transparency, and a disciplined approach
                    to managing risk and identifying opportunities.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <style>{`
        .founder-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
        }
        @media (min-width: 1024px) {
          .founder-grid {
            grid-template-columns: 0.75fr 1.25fr;
            gap: 5rem;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
