"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "4.5rem",
        overflow: "hidden",
      }}
    >
      <div
        className="section-container"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "2rem",
          width: "100%",
        }}
      >
        <AnimatedSection>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "0.05em",
              color: "var(--color-text-primary)",
              marginBottom: "0.5rem",
            }}
          >
            FUND<span style={{ color: "var(--color-accent)" }}>AUX</span>
          </motion.h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <h2
            style={{
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              fontWeight: 400,
              color: "var(--color-text-secondary)",
              maxWidth: "800px",
              margin: "0 auto",
              letterSpacing: "0.02em",
            }}
          >
            ACHIEVE YOUR FINANCIAL GOALS THROUGH US
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem" }}>
              Founder: Rahan Santhosh
            </p>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Background ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(circle, rgba(191,252,92,0.08) 0%, rgba(0,0,0,0) 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
    </section>
  );
}
