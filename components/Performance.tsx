"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const TIME_FILTERS = ["1M", "6M", "1Y", "3Y", "5Y"];

export default function Performance() {
  const [activeFilter, setActiveFilter] = useState("1Y");

  return (
    <section
      id="performance"
      style={{ padding: "6rem 0", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}
    >
      <div className="section-container">
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-label">Metrics</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3vw, 2.6rem)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                marginBottom: "1rem",
                marginTop: "0.5rem",
              }}
            >
              PERFORMANCE
            </h2>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "1rem", maxWidth: "460px", margin: "0 auto" }}>
              Track progress. Understand performance. Make informed decisions.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow: "var(--shadow-card)",
            }}
          >
            {/* Dashboard Header */}
            <div
              style={{
                padding: "1.25rem 2rem",
                borderBottom: "1px solid var(--color-border)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
                background: "var(--color-surface-2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "var(--color-accent-mid)",
                    boxShadow: "0 0 8px rgba(29,78,216,0.4)",
                  }}
                />
                <span style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: "0.95rem" }}>
                  Global Portfolio Overview
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  background: "var(--color-surface)",
                  borderRadius: "0.5rem",
                  padding: "0.2rem",
                  border: "1px solid var(--color-border)",
                }}
              >
                {TIME_FILTERS.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    style={{
                      padding: "0.35rem 0.85rem",
                      background: activeFilter === filter ? "var(--color-accent)" : "transparent",
                      color: activeFilter === filter ? "#fff" : "var(--color-text-secondary)",
                      border: "none",
                      borderRadius: "0.3rem",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>



            {/* Stats Grid */}
            <div className="perf-stats-grid" style={{ borderBottom: "1px solid var(--color-border)" }}>
              {[
                { label: "Performance", value: "Pending" },
                { label: "Growth", value: "+30%" },
                { label: "Risk", value: "Assessing" },
                { label: "Strategy", value: "Active" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    padding: "2rem",
                    borderRight: i < 3 ? "1px solid var(--color-border)" : "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  className="perf-stat-item"
                >
                  <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", marginBottom: "0.5rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: stat.label === "Growth" ? "var(--color-accent-mid)" : "var(--color-text-primary)", letterSpacing: "-0.01em" }}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        .perf-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 768px) {
          .perf-stats-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 767px) {
          .perf-stat-item { border-right: none !important; border-bottom: 1px solid var(--color-border); }
          .perf-stat-item:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  );
}
