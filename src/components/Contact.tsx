"use client";

import { useState } from "react";
import { ArrowUpRight, Copy, Check, Send, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botcheck: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setFeedbackMessage("Please fill in your name, email, and message.");
      return;
    }

    setStatus("submitting");
    setFeedbackMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFeedbackMessage(data.message || "Thank you! Your message has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          botcheck: "",
        });
      } else {
        setStatus("error");
        setFeedbackMessage(
          data.error || "Failed to deliver message automatically. Please try again or email directly."
        );
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setFeedbackMessage(
        `A network connection error occurred. Please feel free to email me directly at ${personal.email}.`
      );
    }
  };

  return (
    <section id="contact" className="contact chapter">
      <div className="section-label">
        <span>08 / THE NEXT CHAPTER</span>
        <span>LET’S MAKE IT MATTER</span>
      </div>

      <div className="contact-inner" data-reveal="true">
        <span className="availability">
          <i></i> OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES
        </span>

        <h2>
          Something great
          <br />
          starts with <em>a hello.</em>
        </h2>

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "24px 0",
          }}
        >
          <a
            className="contact-cta"
            href={`mailto:${personal.email}?subject=Software%20Engineering%20Opportunity`}
          >
            Send Email Directly <ArrowUpRight size={24} />
          </a>

          <button
            type="button"
            className="pill-link"
            onClick={handleCopyEmail}
            style={{ cursor: "pointer", background: "rgba(20,20,20,0.8)" }}
          >
            {copied ? (
              <>
                <Check size={16} color="var(--blue)" /> Email Copied!
              </>
            ) : (
              <>
                <Copy size={16} /> Copy {personal.email}
              </>
            )}
          </button>
        </div>

        <p>
          Full-stack development, backend APIs, or software engineering roles.
          <br />
          If you have an opportunity or want to collaborate, I’d love to hear from you.
        </p>

        {/* Real Functional Contact Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "620px",
            margin: "40px auto 0",
            textAlign: "left",
            background: "rgba(18, 18, 18, 0.65)",
            border: "1px solid var(--line)",
            borderRadius: "16px",
            padding: "36px 32px",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 20px 48px rgba(0,0,0,0.4)",
          }}
        >
          {/* Honeypot field for bot protection */}
          <input
            type="text"
            name="botcheck"
            value={formData.botcheck}
            onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "18px",
              marginBottom: "18px",
            }}
          >
            <div>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  fontSize: "11px",
                  fontFamily: "var(--font-mono)",
                  color: "var(--muted)",
                  marginBottom: "8px",
                  letterSpacing: "1.2px",
                }}
              >
                YOUR NAME *
              </label>
              <input
                id="name"
                type="text"
                required
                disabled={status === "submitting"}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe"
                style={{
                  width: "100%",
                  background: "rgba(10, 10, 10, 0.85)",
                  border: "1px solid var(--line)",
                  borderRadius: "8px",
                  padding: "13px 15px",
                  color: "var(--ink)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "11px",
                  fontFamily: "var(--font-mono)",
                  color: "var(--muted)",
                  marginBottom: "8px",
                  letterSpacing: "1.2px",
                }}
              >
                YOUR EMAIL *
              </label>
              <input
                id="email"
                type="email"
                required
                disabled={status === "submitting"}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@company.com"
                style={{
                  width: "100%",
                  background: "rgba(10, 10, 10, 0.85)",
                  border: "1px solid var(--line)",
                  borderRadius: "8px",
                  padding: "13px 15px",
                  color: "var(--ink)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "18px" }}>
            <label
              htmlFor="subject"
              style={{
                display: "block",
                fontSize: "11px",
                fontFamily: "var(--font-mono)",
                color: "var(--muted)",
                marginBottom: "8px",
                letterSpacing: "1.2px",
              }}
            >
              SUBJECT
            </label>
            <input
              id="subject"
              type="text"
              disabled={status === "submitting"}
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Software Engineer Role / Project Collaboration"
              style={{
                width: "100%",
                background: "rgba(10, 10, 10, 0.85)",
                border: "1px solid var(--line)",
                borderRadius: "8px",
                padding: "13px 15px",
                color: "var(--ink)",
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                outline: "none",
                transition: "border-color 0.2s",
              }}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label
              htmlFor="message"
              style={{
                display: "block",
                fontSize: "11px",
                fontFamily: "var(--font-mono)",
                color: "var(--muted)",
                marginBottom: "8px",
                letterSpacing: "1.2px",
              }}
            >
              MESSAGE *
            </label>
            <textarea
              id="message"
              required
              rows={5}
              disabled={status === "submitting"}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Hi Himanshu, I came across your portfolio and would like to discuss..."
              style={{
                width: "100%",
                background: "rgba(10, 10, 10, 0.85)",
                border: "1px solid var(--line)",
                borderRadius: "8px",
                padding: "13px 15px",
                color: "var(--ink)",
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                outline: "none",
                resize: "vertical",
                transition: "border-color 0.2s",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            <button
              type="submit"
              disabled={status === "submitting"}
              className="pill-link"
              style={{
                cursor: status === "submitting" ? "not-allowed" : "pointer",
                background: status === "submitting" ? "rgba(255, 140, 89, 0.2)" : "rgba(14, 14, 14, 0.9)",
                borderColor: "var(--blue)",
                color: "var(--ink)",
                opacity: status === "submitting" ? 0.8 : 1,
                padding: "14px 26px",
              }}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending message...
                </>
              ) : (
                <>
                  <Send size={15} /> Send Message Directly
                </>
              )}
            </button>

            <span
              style={{
                fontSize: "11px",
                color: "var(--muted)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.5px",
              }}
            >
              Delivered straight to {personal.email}
            </span>
          </div>

          {/* Feedback Banners */}
          {status === "success" && (
            <div
              style={{
                marginTop: "20px",
                padding: "16px 20px",
                borderRadius: "10px",
                background: "rgba(40, 167, 69, 0.15)",
                border: "1px solid rgba(40, 167, 69, 0.4)",
                color: "#75f08a",
                fontSize: "13.5px",
                lineHeight: "1.6",
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
              }}
            >
              <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Message Dispatched Successfully!</strong>
                <p style={{ margin: "4px 0 0", color: "#d2ffd9" }}>{feedbackMessage}</p>
              </div>
            </div>
          )}

          {status === "error" && (
            <div
              style={{
                marginTop: "20px",
                padding: "16px 20px",
                borderRadius: "10px",
                background: "rgba(220, 53, 69, 0.15)",
                border: "1px solid rgba(220, 53, 69, 0.4)",
                color: "#ff8787",
                fontSize: "13.5px",
                lineHeight: "1.6",
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
              }}
            >
              <AlertCircle size={20} style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong>Delivery Notice</strong>
                <p style={{ margin: "4px 0 0", color: "#ffd0d0" }}>{feedbackMessage}</p>
                <a
                  href={`mailto:${personal.email}?subject=${encodeURIComponent(
                    formData.subject || "Portfolio Contact"
                  )}&body=${encodeURIComponent(formData.message)}`}
                  style={{
                    display: "inline-block",
                    marginTop: "8px",
                    color: "var(--blue)",
                    textDecoration: "underline",
                    fontSize: "12px",
                  }}
                >
                  Click to send via your mail client instead ↗
                </a>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
