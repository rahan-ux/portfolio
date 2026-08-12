"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Mission", href: "#mission" },
  { label: "Commitments", href: "#commitments" },
  { label: "Services", href: "#services" },
  { label: "Performance", href: "#performance" },
  { label: "Framework", href: "#framework" },
  { label: "About", href: "#founder" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detect scroll to apply backdrop-blur background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section highlighting
  useEffect(() => {
    const sectionIds = [...NAV_LINKS.map((l) => l.href.replace("#", "")), "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setMobileOpen(false);
    },
    []
  );

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s ease, border-color 0.3s ease",
        background: scrolled ? "rgba(5, 7, 10, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      }}
    >
      <div className="section-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "5rem",
          }}
        >
          {/* Logo / Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            style={{
              fontFamily: "var(--font-inter, 'Inter', sans-serif)",
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              textDecoration: "none",
              letterSpacing: "0.08em",
            }}
          >
            FUND<span style={{ color: "var(--color-accent)" }}>AUX</span>
          </a>

          {/* Desktop Nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
            aria-label="Main navigation"
            className="hidden-mobile"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`nav-link ${activeSection === link.href.replace("#", "") ? "active" : ""}`}
                style={{
                  position: "relative",
                  padding: "0.5rem 0",
                }}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "var(--color-accent)",
                      borderRadius: "2px",
                    }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right side: CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-primary hidden-mobile"
              style={{ fontSize: "0.85rem", padding: "0.6rem 1.5rem" }}
            >
              Get Started
            </a>

            {/* Mobile Hamburger */}
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
                border: "none",
                color: "var(--color-text-primary)",
                cursor: "pointer",
                padding: "0.5rem",
              }}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
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
            transition={{ duration: 0.3 }}
            style={{
              background: "var(--color-surface)",
              borderTop: "1px solid var(--color-border)",
              overflow: "hidden",
            }}
          >
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                padding: "2rem 1.5rem",
              }}
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontFamily: "var(--font-inter, 'Inter', sans-serif)",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    color:
                      activeSection === link.href.replace("#", "")
                        ? "var(--color-accent)"
                        : "var(--color-text-primary)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="btn-primary"
                style={{ textAlign: "center", marginTop: "1rem" }}
              >
                Get Started
              </a>
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
