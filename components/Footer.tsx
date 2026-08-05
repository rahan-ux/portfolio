"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        padding: "3.5rem 0 2rem",
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          {/* Top row: Brand + Nav */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            {/* Brand */}
            <div style={{ maxWidth: "280px" }}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                style={{
                  fontFamily: "var(--font-inter, 'Inter', sans-serif)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                FUND<span style={{ color: "var(--color-accent)" }}>AUX</span>
              </a>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                ACHIEVE YOUR FINANCIAL GOALS THROUGH US.
              </p>
              <div style={{ marginTop: "1rem" }}>
                <p style={{ color: "var(--color-accent)", fontSize: "0.9rem", fontWeight: 600 }}>Founder: Rahan Santhosh</p>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.8rem" }}>NISM Certified Trader</p>
              </div>
            </div>

            {/* Quick Links */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <h4
                style={{
                  color: "var(--color-text-primary)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: "0.25rem",
                }}
              >
                Quick Links
              </h4>
              {[
                { label: "Mission", href: "#mission" },
                { label: "Commitments", href: "#commitments" },
                { label: "Performance", href: "#performance" },
                { label: "Framework", href: "#framework" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link"
                  style={{ fontSize: "0.9rem" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom row: Copyright */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--color-border)",
              color: "var(--color-text-muted)",
              fontSize: "0.8rem",
            }}
          >
            <p>© {currentYear} Fundaux. All rights reserved.</p>
            <p>
              Designed for consistent growth.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
