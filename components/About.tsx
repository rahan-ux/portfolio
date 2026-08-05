"use client";

import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="mission" style={{ padding: "6rem 0" }}>
      <div className="section-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">What is Fundaux?</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                marginTop: "1rem",
                color: "var(--color-text-primary)",
              }}
            >
              Empowering Your Future
            </h2>
            <div className="gold-divider" style={{ margin: "1.5rem auto 0" }} />
          </div>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginTop: "3rem",
          }}
        >
          <AnimatedSection delay={0.2}>
            <div
              className="glass-card"
              style={{ padding: "2.5rem", height: "100%" }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "var(--color-accent)",
                  marginBottom: "1rem",
                }}
              >
                Our Mission
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                We are committed to helping individuals navigate the complexities
                of the stock market to achieve their unique financial milestones
                through disciplined capital management.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div
              className="glass-card"
              style={{ padding: "2.5rem", height: "100%" }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "var(--color-accent)",
                  marginBottom: "1rem",
                }}
              >
                Our Strategy
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                By leveraging expert trading techniques and rigorous risk
                assessment, we focus on generating steady cash flow while
                prioritizing the safety of your principal capital.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
