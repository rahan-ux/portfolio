"use client";

import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Performance", href: "/performance" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-text-primary)",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="section-container">
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

          {/* Top Section */}
          <div className="footer-top">
            <div style={{ flex: 1 }}>
              <Link href="/" style={{ display: "inline-flex", alignItems: "center", marginBottom: "0.75rem" }}>
                <Image
                  src="/logo.png"
                  alt="FUNDAUX"
                  width={48}
                  height={48}
                  style={{ objectFit: "contain", filter: "invert(1)" }}
                />
              </Link>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.92rem", marginBottom: "1rem", maxWidth: "280px", lineHeight: 1.65 }}>
                Achieve Your Financial Goals Through Strategic, Disciplined Management.
              </p>
              <a
                href="mailto:fundauxin@gmail.com"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#60A5FA")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >
                fundauxin@gmail.com
              </a>
            </div>

            <div>
              <h4 style={{ fontSize: "0.8rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Navigation
              </h4>
              <nav className="footer-nav">
                {FOOTER_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "color 0.2s ease",
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.08)" }} />

          {/* Bottom Section */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.65, textAlign: "justify" }}>
              <strong style={{ color: "rgba(255,255,255,0.5)" }}>Disclaimer:</strong> Financial markets involve risk, including the possible loss of principal.
              Past performance is not indicative of future results. Information provided on this website is for informational purposes
              only and should not be construed as investment, tax, or legal advice. Please consult with a qualified professional
              before making any financial decisions. FUNDAUX does not guarantee specific investment returns.
            </p>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)" }}>
                &copy; 2026 FUNDAUX. All rights reserved.
              </p>
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.3)" }}>
                Built with precision & discipline.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-top {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .footer-nav {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.65rem 2.5rem;
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
