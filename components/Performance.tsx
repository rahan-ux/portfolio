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

            {/* Dashboard Content */}
            <div className="dashboard-grid" style={{ display: "grid", gridTemplateColumns: "1fr", borderBottom: "1px solid var(--color-border)" }}>
              {/* Chart Area */}
              <div
                style={{
                  padding: "2.5rem 2rem",
                  position: "relative",
                  minHeight: "300px",
                  display: "flex",
                  flexDirection: "column",
                  borderRight: "1px solid var(--color-border)",
                }}
                className="chart-area"
              >
                <div style={{ marginBottom: "2rem" }}>
                  <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "0.4rem", fontWeight: 500 }}>
                    Value Tracked
                  </div>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 800,
                      color: "var(--color-text-primary)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Data will be updated
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div
                  style={{
                    flex: 1,
                    position: "relative",
                    borderLeft: "1px solid var(--color-border)",
                    borderBottom: "1px solid var(--color-border)",
                    background: "var(--color-surface-2)",
                    borderRadius: "0 0 0 4px",
                  }}
                >
                  <div style={{ position: "absolute", top: "25%", left: 0, right: 0, borderTop: "1px dashed var(--color-border)" }} />
                  <div style={{ position: "absolute", top: "50%", left: 0, right: 0, borderTop: "1px dashed var(--color-border)" }} />
                  <div style={{ position: "absolute", top: "75%", left: 0, right: 0, borderTop: "1px dashed var(--color-border)" }} />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-text-muted)",
                      fontSize: "0.88rem",
                      fontStyle: "italic",
                    }}
                  >
                    Performance visualization will appear here
                  </div>
                </div>
              </div>

              {/* Sidebar Stats */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  { label: "Performance", value: "Pending" },
                  { label: "Growth", value: "Pending" },
                  { label: "Risk", value: "Assessing" },
                  { label: "Strategy", value: "Active" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "1.75rem 2rem",
                      borderBottom: i < 3 ? "1px solid var(--color-border)" : "none",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", marginBottom: "0.4rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--color-text-primary)" }}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div
              style={{
                padding: "0.9rem 2rem",
                background: "var(--color-surface-2)",
                fontSize: "0.75rem",
                color: "var(--color-text-muted)",
                textAlign: "center",
                borderTop: "1px solid var(--color-border)",
              }}
            >
              * Data is currently being updated. Real performance metrics will be populated securely.
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .dashboard-grid { grid-template-columns: 3fr 1fr !important; }
        }
        @media (max-width: 1023px) {
          .chart-area { border-right: none !important; border-bottom: 1px solid var(--color-border); }
        }
      `}</style>
    </section>
  );
}
