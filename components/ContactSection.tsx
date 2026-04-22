"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageSquare,
  ArrowUpRight,
  GitBranch,
  WifiIcon,
} from "lucide-react";
import { data } from "@/assets/personalDetails";

export default function ContactSection() {
  const { heading, btnLabel } = data.contactPage;
  const { email, phone, linkedIn, github } = data.name;

  return (
    <section
      id="contact"
      className="relative grid-bg"
      style={{ padding: "112px 0" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "400px",
            height: "300px",
            background: "rgba(124,58,237,0.08)",
            filter: "blur(100px)",
            borderRadius: "50%",
          }}
        />
      </div>

      <div
        className="section-container"
        style={{ position: "relative", zIndex: 10 }}
      >
        {/* Header */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "64px" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag" style={{ justifyContent: "center" }}>
            <MessageSquare size={12} />
            {heading.fieldOne}
          </span>
          <h2
            className="section-heading"
            style={{ marginTop: "16px", color: "#fff" }}
          >
            {heading.fieldTwo}
          </h2>
        </motion.div>

        {/* Content grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "32px",
          }}
        >
          {/* Contact Info */}
          <motion.div
            className="glass-card"
            style={{
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff" }}>
              Connect Info
            </h3>

            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Mail size={16} style={{ color: "#a78bfa" }} />
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "4px",
                  }}
                >
                  Email
                </p>
                <a
                  href={`mailto:${email}`}
                  style={{
                    fontSize: "0.85rem",
                    color: "#cbd5e1",
                    textDecoration: "none",
                  }}
                >
                  {email}
                </a>
              </div>
            </div>

            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Phone size={16} style={{ color: "#60a5fa" }} />
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "4px",
                  }}
                >
                  Phone
                </p>
                <a
                  href={`tel:${phone}`}
                  style={{
                    fontSize: "0.85rem",
                    color: "#cbd5e1",
                    textDecoration: "none",
                  }}
                >
                  {phone}
                </a>
              </div>
            </div>

            <div
              style={{
                marginTop: "auto",
                paddingTop: "24px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "16px",
                }}
              >
                Socials
              </p>
              <div style={{ display: "flex", gap: "12px" }}>
                <a
                  href={`https://${github}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94a3b8",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(124,58,237,0.4)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#a78bfa";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#94a3b8";
                  }}
                >
                  <GitBranch size={18} />
                </a>
                <a
                  href={`https://${linkedIn}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94a3b8",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(59,130,246,0.4)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#60a5fa";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#94a3b8";
                  }}
                >
                  <WifiIcon size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass-card"
            style={{ padding: "28px 32px" }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >
                {[
                  {
                    id: "contact-name",
                    label: "Your Name",
                    type: "text",
                    placeholder: "John Doe",
                  },
                  {
                    id: "contact-email",
                    label: "Your Email",
                    type: "email",
                    placeholder: "john@example.com",
                  },
                ].map((field) => (
                  <div
                    key={field.id}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <label
                      htmlFor={field.id}
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        color: "var(--text-secondary)",
                        marginLeft: "2px",
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      placeholder={field.placeholder}
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "10px",
                        padding: "12px 16px",
                        fontSize: "0.875rem",
                        color: "#fff",
                        outline: "none",
                        transition: "border 0.2s",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "rgba(124,58,237,0.5)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(255,255,255,0.08)")
                      }
                    />
                  </div>
                ))}
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <label
                  htmlFor="contact-subject"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    marginLeft: "2px",
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  placeholder="How can I help you?"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    fontSize: "0.875rem",
                    color: "#fff",
                    outline: "none",
                    transition: "border 0.2s",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(124,58,237,0.5)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.08)")
                  }
                />
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <label
                  htmlFor="contact-message"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    marginLeft: "2px",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Your message here..."
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    fontSize: "0.875rem",
                    color: "#fff",
                    outline: "none",
                    resize: "none",
                    transition: "border 0.2s",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(124,58,237,0.5)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.08)")
                  }
                />
              </div>

              <button
                type="submit"
                className="btn-gradient"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "14px 24px",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  marginTop: "4px",
                }}
                id="contact-submit-btn"
              >
                {btnLabel}
                <ArrowUpRight size={16} style={{ marginLeft: "8px" }} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
