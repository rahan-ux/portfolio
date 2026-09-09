"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const FAQS = [
  {
    question: "What does FUNDAUX do?",
    answer: "FUNDAUX provides structured financial strategies and guidance to help individuals and organizations navigate their financial journeys, focusing on discipline and long-term value creation.",
  },
  {
    question: "Who can work with FUNDAUX?",
    answer: "We work with individuals, professionals, and organizations looking for a structured, goal-oriented approach to building and managing their financial future.",
  },
  {
    question: "How does the financial planning process work?",
    answer: "Our framework involves four key steps: understanding your current position and goals, developing a structured strategy, executing it with discipline, and regularly reviewing progress to make informed adjustments.",
  },
  {
    question: "What information is required to get started?",
    answer: "Initially, we only need basic contact information and a brief overview of your primary financial goals. During our first consultation, we will guide you on the specific details required.",
  },
  {
    question: "How do I contact FUNDAUX?",
    answer: "You can reach us through the contact form on this website. Our team will review your inquiry and respond promptly to schedule an initial discussion.",
  },
  {
    question: "Does FUNDAUX guarantee investment returns?",
    answer: "No. Financial markets inherently involve risk, and past performance is not indicative of future results. We do not guarantee specific returns, but rather focus on structured strategies and disciplined risk management.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      style={{ padding: "6rem 0", background: "var(--color-surface-2)", borderTop: "1px solid var(--color-border)" }}
    >
      <div className="section-container" style={{ maxWidth: "780px" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <AnimatedSection>
            <span className="section-label">Questions</span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3vw, 2.6rem)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                marginTop: "0.5rem",
              }}
            >
              FREQUENTLY ASKED{" "}
              <span style={{ color: "var(--color-accent-mid)" }}>QUESTIONS</span>
            </h2>
          </AnimatedSection>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedSection key={index} delay={index * 0.07}>
                <div
                  style={{
                    background: "var(--color-surface)",
                    border: `1px solid ${isOpen ? "var(--color-accent-mid)" : "var(--color-border)"}`,
                    borderRadius: "0.75rem",
                    overflow: "hidden",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                    boxShadow: isOpen ? "0 4px 20px var(--color-accent-glow)" : "var(--shadow-sm)",
                  }}
                >
                  <button
                    onClick={() => toggleOpen(index)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1.35rem 1.5rem",
                      background: "none",
                      border: "none",
                      color: "var(--color-text-primary)",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: "1rem",
                    }}
                  >
                    <span style={{ fontSize: "0.98rem", fontWeight: 600, lineHeight: 1.4 }}>
                      {faq.question}
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: isOpen ? "var(--color-accent)" : "var(--color-accent-light)",
                        color: isOpen ? "#fff" : "var(--color-accent)",
                        transition: "all 0.3s ease",
                        flexShrink: 0,
                      }}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div style={{ padding: "0 1.5rem 1.5rem 1.5rem" }}>
                          <div
                            style={{
                              width: "100%",
                              height: "1px",
                              background: "var(--color-border)",
                              marginBottom: "1.25rem",
                            }}
                          />
                          <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7, fontSize: "0.92rem" }}>
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
