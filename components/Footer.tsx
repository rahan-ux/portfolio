"use client";

import { motion } from "framer-motion";

const FOOTER_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Mission", href: "#mission" },
  { label: "Commitments", href: "#commitments" },
  { label: "Services", href: "#services" },
  { label: "Performance", href: "#performance" },
  { label: "Framework", href: "#framework" },
  { label: "About", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer style={{ background: "var(--color-bg)", borderTop: "1px solid var(--color-border)", paddingTop: "4rem", paddingBottom: "2rem" }}>
      <div className="section-container">
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          
          {/* Top Section */}
          <div className="footer-top">
            <div style={{ flex: 1 }}>
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, "#hero")}
                style={{
                  fontFamily: "var(--font-inter, 'Inter', sans-serif)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  display: "inline-block",
                  marginBottom: "0.5rem"
                }}
              >
                FUND<span style={{ color: "var(--color-accent)" }}>AUX</span>
              </a>
              <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem", marginBottom: "1rem" }}>
                Achieve Your Financial Goals Through Us
              </p>
              <a href="mailto:rahansanthosh765@gmail.com" style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", textDecoration: "none", transition: "color 0.2s ease", display: "inline-block" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-text-primary)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-text-secondary)"}>
                rahansanthosh765@gmail.com
              </a>
            </div>

            <div>
              <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-text-primary)", marginBottom: "1rem" }}>Navigation</h4>
              <nav className="footer-nav">
                {FOOTER_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{
                      color: "var(--color-text-secondary)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "color 0.2s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-text-primary)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-text-secondary)"}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div style={{ width: "100%", height: "1px", background: "var(--color-border)" }} />

          {/* Bottom Section */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", lineHeight: 1.6, textAlign: "justify" }}>
              <strong>Disclaimer:</strong> Financial markets involve risk, including the possible loss of principal. Past performance is not indicative of future results. Information provided on this website is for informational purposes only and should not be construed as investment, tax, or legal advice. Please consult with a qualified professional before making any financial decisions. FUNDAUX does not guarantee specific investment returns.
            </p>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
                &copy; 2026 FUNDAUX. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-top {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .footer-nav {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem 2rem;
        }
        @media (min-width: 768px) {
          .footer-top {
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-nav {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </footer>
  );
}
