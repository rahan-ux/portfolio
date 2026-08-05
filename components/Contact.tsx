"use client";

import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "7rem 0",
        background: "var(--color-bg)",
      }}
    >
      <div className="section-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">Get In Touch</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                marginTop: "1rem",
                color: "var(--color-text-primary)",
              }}
            >
              Ready to grow your capital with Fundaux?
            </h2>
            <div className="gold-divider" style={{ margin: "1.5rem auto 0" }} />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div
            className="glass-card"
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              padding: "3rem",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "var(--color-surface-2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.5rem",
                color: "var(--color-accent)",
              }}
            >
              👤
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.75rem",
                  color: "var(--color-accent)",
                  marginBottom: "0.5rem",
                }}
              >
                Rahan Santhosh
              </h3>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "1.1rem",
                }}
              >
                NISM Certified Trader | Founder of Fundaux
              </p>
            </div>
            
            <a
              href="mailto:contact@fundaux.com"
              className="btn-primary"
              style={{
                marginTop: "1rem",
                padding: "1rem 2.5rem",
                fontSize: "1.1rem",
              }}
            >
              Contact Us
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
