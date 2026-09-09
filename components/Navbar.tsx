"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Performance", href: "/performance" },
  { label: "FAQ", href: "/faq" },
  { label: "Rahan Santhosh", href: "/rahan-santhosh" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        background: scrolled
          ? "rgba(var(--navbar-rgb, 255, 255, 255), 0.97)"
          : "rgba(var(--navbar-rgb, 255, 255, 255), 0.87)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
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
            height: "4.5rem",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-inter, 'Inter', sans-serif)",
              fontSize: "1.35rem",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              textDecoration: "none",
              letterSpacing: "0.06em",
            }}
          >
            FUND<span style={{ color: "var(--color-accent-mid)" }}>AUX</span>
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
                    padding: "0.5rem 0.85rem",
                    borderRadius: "0.4rem",
                    background: active ? "var(--color-accent-light)" : "transparent",
                    fontWeight: active ? 600 : 500,
                    color: active ? "var(--color-accent)" : "var(--color-text-secondary)",
                    transition: "background 0.2s ease, color 0.2s ease",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Theme Toggle + CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* Theme Toggle — desktop */}
            <button
              id="theme-toggle-desktop"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="theme-toggle hidden-mobile"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.span
                    key="sun"
                    initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "flex" }}
                  >
                    <Sun size={17} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "flex" }}
                  >
                    <Moon size={17} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <Link
              href="/contact"
              className="btn-primary hidden-mobile"
              style={{ fontSize: "0.85rem", padding: "0.55rem 1.4rem" }}
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
                padding: "0.5rem",
                borderRadius: "0.5rem",
                transition: "background 0.2s ease",
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
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
            transition={{ duration: 0.25 }}
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
                gap: "0.25rem",
                padding: "1.25rem 1.5rem",
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
                      fontSize: "1rem",
                      fontWeight: active ? 600 : 500,
                      color: active ? "var(--color-accent)" : "var(--color-text-secondary)",
                      textDecoration: "none",
                      padding: "0.75rem 1rem",
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

              {/* Theme Toggle — mobile */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.5rem 1rem" }}>
                <button
                  id="theme-toggle-mobile"
                  onClick={toggleTheme}
                  aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                  className="theme-toggle"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {theme === "dark" ? (
                      <motion.span
                        key="sun-m"
                        initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                        transition={{ duration: 0.2 }}
                        style={{ display: "flex" }}
                      >
                        <Sun size={18} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="moon-m"
                        initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
                        transition={{ duration: 0.2 }}
                        style={{ display: "flex" }}
                      >
                        <Moon size={18} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
                <span style={{ fontSize: "0.88rem", color: "var(--color-text-secondary)", fontWeight: 500 }}>
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
              </div>

              <Link
                href="/contact"
                className="btn-primary"
                style={{ textAlign: "center", marginTop: "0.75rem" }}
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
