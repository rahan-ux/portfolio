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
    <section id="faq" style={{ padding: "8rem 0", background: "var(--color-surface-2)" }}>
      <div className="section-container" style={{ maxWidth: "800px" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <AnimatedSection>
            <span className="section-label">Questions</span>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--color-text-primary)" }}>
              FREQUENTLY ASKED <span style={{ color: "var(--color-accent)" }}>QUESTIONS</span>
            </h2>
          </AnimatedSection>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div 
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "0.75rem",
                    overflow: "hidden",
                    transition: "border-color 0.3s ease",
                    borderColor: isOpen ? "var(--color-accent)" : "var(--color-border)"
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
                      padding: "1.5rem",
                      background: "none",
                      border: "none",
                      color: "var(--color-text-primary)",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontSize: "1.05rem", fontWeight: 600 }}>{faq.question}</span>
                    <span style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      width: "24px", 
                      height: "24px", 
                      color: isOpen ? "var(--color-accent)" : "var(--color-text-secondary)",
                      transition: "color 0.3s ease"
                    }}>
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
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
                          <div style={{ width: "100%", height: "1px", background: "var(--color-border)", marginBottom: "1.5rem" }} />
                          <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>
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
