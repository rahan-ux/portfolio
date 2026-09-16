"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Performance", href: "/performance" },
  { label: "FAQ", href: "/faq" },
];

// Founder profile link — separate from main nav
const FOUNDER_LINK = { label: "Leadership", href: "/Rahan" };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.toLowerCase().startsWith(href.toLowerCase());

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        background: scrolled
          ? "rgba(var(--navbar-rgb, 255, 255, 255), 0.98)"
          : "rgba(var(--navbar-rgb, 255, 255, 255), 0.90)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: scrolled ? "var(--shadow-nav)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "4rem",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
            <Image
              src="/logo.png"
              alt="FUNDAUX"
              width={34}
              height={34}
              style={{ objectFit: "contain" }}
              priority
            />
            <span style={{
              fontFamily: "var(--font-inter, 'Inter', sans-serif)",
              fontSize: "1.3rem",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              letterSpacing: "0.05em",
            }}>
              FUND<span style={{ color: "var(--color-accent-mid)" }}>AUX</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
            aria-label="Main navigation"
            className="hidden-mobile"
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${active ? "active" : ""}`}
                  style={{
                    position: "relative",
                    padding: "0.45rem 0.8rem",
                    borderRadius: "0.4rem",
                    background: active ? "var(--color-accent-light)" : "transparent",
                    fontWeight: active ? 600 : 500,
                    fontSize: "0.88rem",
                    color: active ? "var(--color-accent)" : "var(--color-text-secondary)",
                    transition: "background 0.2s ease, color 0.2s ease",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Leadership / Founder Profile Link */}
          <Link
            href={FOUNDER_LINK.href}
            className="hidden-mobile"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0.4rem 0.9rem",
              borderRadius: "9999px",
              border: `1px solid ${isActive(FOUNDER_LINK.href) ? "var(--color-accent)" : "var(--color-border-strong)"}`,
              background: isActive(FOUNDER_LINK.href) ? "var(--color-accent-light)" : "transparent",
              fontSize: "0.82rem",
              fontWeight: 600,
              color: isActive(FOUNDER_LINK.href) ? "var(--color-accent)" : "var(--color-text-secondary)",
              textDecoration: "none",
              transition: "background 0.2s ease, border-color 0.2s ease, color 0.2s ease",
              whiteSpace: "nowrap",
            }}
          >
            <User size={13} /> {FOUNDER_LINK.label}
          </Link>

          {/* Right: CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Link
              href="/contact"
              className="btn-primary hidden-mobile"
              style={{ fontSize: "0.82rem", padding: "0.5rem 1.25rem" }}
            >
              Contact Us
            </Link>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
              className="show-mobile"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "none",
                border: "1px solid var(--color-border-strong)",
                color: "var(--color-text-primary)",
                cursor: "pointer",
                padding: "0.45rem",
                borderRadius: "0.5rem",
                transition: "background 0.2s ease",
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            style={{
              background: "var(--color-surface)",
              borderTop: "1px solid var(--color-border)",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
              overflow: "hidden",
            }}
          >
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
                padding: "1rem 1.25rem 1.25rem",
              }}
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-inter, 'Inter', sans-serif)",
                      fontSize: "0.95rem",
                      fontWeight: active ? 600 : 500,
                      color: active ? "var(--color-accent)" : "var(--color-text-primary)",
                      textDecoration: "none",
                      padding: "0.65rem 0.9rem",
                      borderRadius: "0.5rem",
                      background: active ? "var(--color-accent-light)" : "transparent",
                      transition: "background 0.2s ease, color 0.2s ease",
                      display: "block",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Founder Profile in mobile menu */}
              <Link
                href={FOUNDER_LINK.href}
                style={{
                  fontFamily: "var(--font-inter, 'Inter', sans-serif)",
                  fontSize: "0.95rem",
                  fontWeight: isActive(FOUNDER_LINK.href) ? 600 : 500,
                  color: isActive(FOUNDER_LINK.href) ? "var(--color-accent)" : "var(--color-text-primary)",
                  textDecoration: "none",
                  padding: "0.65rem 0.9rem",
                  borderRadius: "0.5rem",
                  background: isActive(FOUNDER_LINK.href) ? "var(--color-accent-light)" : "rgba(0,0,0,0.03)",
                  border: "1px solid var(--color-border)",
                  transition: "background 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.45rem",
                }}
              >
                <User size={15} /> Leadership — Rahan Santhosh
              </Link>

              <Link
                href="/contact"
                className="btn-primary"
                style={{ textAlign: "center", marginTop: "0.5rem" }}
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 1023px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </motion.header>
  );
}
