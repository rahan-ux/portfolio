"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const INPUT_STYLE = {
  width: "100%",
  padding: "0.9rem 1.1rem",
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: "0.5rem",
  color: "var(--color-text-primary)",
  outline: "none",
  transition: "border-color 0.25s ease, box-shadow 0.25s ease",
  fontSize: "0.95rem",
  fontFamily: "var(--font-inter), sans-serif",
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    try {
      const data = new FormData();
      data.append("access_key", "0e1f2bf4-5205-44a7-84e9-8ace61976b96");
      data.append("name", formData.name.trim());
      data.append("email", formData.email.trim());
      data.append("phone", formData.phone.trim());
      data.append("subject", formData.subject.trim() || "New Enquiry from FUNDAUX Website");
      data.append("message", formData.message.trim());
      data.append("from_name", "FUNDAUX Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        console.error("Web3Forms error:", result);
        setStatus("error");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const getInputStyle = (fieldError?: string) => ({
    ...INPUT_STYLE,
    border: `1px solid ${fieldError ? "#DC2626" : "var(--color-border)"}`,
  });

  return (
    <section
      id="contact"
      style={{ padding: "6rem 0", background: "var(--color-surface-2)", borderTop: "1px solid var(--color-border)" }}
    >
      <div className="section-container">
        <div className="contact-grid">
          {/* Left Text */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <AnimatedSection>
              <span className="section-label">Contact Us</span>
              <h2
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                  fontWeight: 800,
                  color: "var(--color-text-primary)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.1,
                  marginTop: "0.5rem",
                }}
              >
                LET&apos;S BUILD YOUR <br />
                <span style={{ color: "var(--color-accent-mid)" }}>FINANCIAL ROADMAP.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.75,
                  maxWidth: "440px",
                  marginBottom: "2.5rem",
                }}
              >
                Start a conversation about your financial goals and discover a structured path forward.
              </p>

              <div
                style={{
                  padding: "1.5rem",
                  background: "var(--color-surface)",
                  borderRadius: "0.75rem",
                  border: "1px solid var(--color-border)",
                  display: "inline-block",
                }}
              >
                <div
                  style={{
                    fontSize: "0.72rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-text-muted)",
                    fontWeight: 700,
                    marginBottom: "0.35rem",
                  }}
                >
                  Email Us
                </div>
                <a
                  href="mailto:rahansanthosh765@gmail.com"
                  style={{ fontSize: "1rem", color: "var(--color-accent)", textDecoration: "none", fontWeight: 600 }}
                >
                  rahansanthosh765@gmail.com
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Form */}
          <div>
            <AnimatedSection delay={0.3} direction="left">
              <div
                style={{
                  padding: "2.5rem",
                  background: "var(--color-surface)",
                  borderRadius: "1rem",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "3rem 0",
                    }}
                  >
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "50%",
                        background: "rgba(29,78,216,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <CheckCircle size={30} style={{ color: "var(--color-accent-mid)" }} />
                    </div>
                    <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>
                      Message Received!
                    </h3>
                    <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>
                      Thank you for reaching out. We will get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }} noValidate>
                    {/* Name */}
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name *"
                        disabled={status === "loading"}
                        className="form-input"
                        style={getInputStyle(errors.name)}
                      />
                      {errors.name && (
                        <div style={{ color: "#DC2626", fontSize: "0.78rem", marginTop: "0.3rem" }}>{errors.name}</div>
                      )}
                    </div>

                    {/* Email + Phone */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address *"
                          disabled={status === "loading"}
                          className="form-input"
                          style={getInputStyle(errors.email)}
                        />
                        {errors.email && (
                          <div style={{ color: "#DC2626", fontSize: "0.78rem", marginTop: "0.3rem" }}>{errors.email}</div>
                        )}
                      </div>
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          disabled={status === "loading"}
                          className="form-input"
                          style={getInputStyle()}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        disabled={status === "loading"}
                        className="form-input"
                        style={getInputStyle()}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message *"
                        rows={4}
                        disabled={status === "loading"}
                        className="form-input"
                        style={{ ...getInputStyle(errors.message), resize: "vertical" }}
                      />
                      {errors.message && (
                        <div style={{ color: "#DC2626", fontSize: "0.78rem", marginTop: "0.3rem" }}>{errors.message}</div>
                      )}
                    </div>

                    {/* Error */}
                    {status === "error" && (
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#DC2626", fontSize: "0.88rem" }}>
                        <AlertCircle size={16} />
                        Something went wrong. Please try again or email us directly.
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-primary"
                      style={{
                        width: "100%",
                        opacity: status === "loading" ? 0.7 : 1,
                        cursor: status === "loading" ? "not-allowed" : "pointer",
                      }}
                    >
                      {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
                      {status !== "loading" && <Send size={17} />}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
        }
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
            align-items: center;
          }
        }
        .form-input:focus {
          border-color: rgba(29,78,216,0.5) !important;
          box-shadow: 0 0 0 3px rgba(29,78,216,0.08) !important;
          outline: none !important;
        }
      `}</style>
    </section>
  );
}
