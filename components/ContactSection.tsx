"use client";

import { motion, Variants } from "framer-motion";
import {
  Mail,
  Phone,
  MessageSquare,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { data } from "@/assets/personalDetails";
import GitHubLogo from "@/assets/icons/github.svg";
import LinkedInLogo from "@/assets/icons/linkedin.svg";
import InstagramLogo from "@/assets/icons/instagram.svg";
import WhatsAppLogo from "@/assets/icons/whatsapp.svg";
import Image from "next/image";
import { useState } from "react";

export default function ContactSection() {
  const { email, phone, linkedIn, github } = data.name;
  const [copied, setCopied] = useState(false);
  const socialIcons = [
    {
      logo: GitHubLogo,
      href: `https://${github}`,
      name: "GitHub",
      hoverColor: "rgba(124,58,237,0.4)",
      activeColor: "#a78bfa",
    },
    {
      logo: LinkedInLogo,
      href: `https://${linkedIn}`,
      name: "LinkedIn",
      hoverColor: "rgba(59,130,246,0.4)",
      activeColor: "#60a5fa",
    },
    {
      logo: InstagramLogo,
      href: `https://instagram.com`,
      name: "Instagram",
      hoverColor: "rgba(236,72,153,0.4)",
      activeColor: "#f472b6",
    },
    {
      logo: WhatsAppLogo,
      href: `https://wa.me/+91`,
      name: "WhatsApp",
      hoverColor: "rgba(16,185,129,0.4)",
      activeColor: "#34d399",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Animation variants for the Bento Box grid items
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  };

  return (
    <section
      id="contact"
      className="relative grid-bg"
      style={{padding: "10px 50px"}}
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
          style={{ marginBottom: "20px" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="section-tag inline-flex items-center gap-2 text-xs uppercase"
            style={{ color: "#a78bfa" }}
          >
            <MessageSquare size={14} />
            LET'S GET IN TOUCH
          </span>
          <h2
            className="section-heading"
            style={{
              marginTop: "12px",
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Let's build something{" "}
            <span style={{ color: "#a78bfa" }}>together</span>.
          </h2>
        </motion.div>

          {/* Bento Box Asymmetric Grid */}
          <motion.div
            className="bento-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gridAutoRows: "minmax(160px, auto)",
              gap: "20px",
            }}
          >
            {/* Card 1: Availability Status (Large Accent Card) */}
            <motion.div
              className="glass-card"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              style={{
                gridColumn: "span 2",
                padding: "32px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  color: "rgba(124,58,237,0.4)",
                }}
              >
                <Sparkles size={40} />
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#10b981",
                      boxShadow: "0 0 12px #10b981",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "#10b981",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                    }}
                  >
                    AVAILABLE FOR NEW PROJECTS
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.6rem",
                    color: "#fff",
                    fontWeight: 600,
                    lineHeight: 1.3,
                    maxWidth: "80%",
                  }}
                >
                 Have an idea? Drop a message and let’s connect.
                </h3>
              </div>
              <a
                href={`mailto:${email}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#a78bfa",
                  textDecoration: "none",
                  marginTop: "24px",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                Start a conversation <ArrowUpRight size={16} />
              </a>
            </motion.div>

            {/* Card 2: Interactive Email Copy Box */}
            <motion.div
              className="glass-card"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              style={{
                padding: "28px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "16px",
                  background: "rgba(124,58,237,0.1)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Mail size={20} style={{ color: "#a78bfa" }} />
              </div>
              <div style={{ marginTop: "20px" }}>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "6px",
                  }}
                >
                  Drop an Email
                </p>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#cbd5e1",
                    wordBreak: "break-all",
                    fontWeight: 500,
                    marginBottom: "14px",
                  }}
                >
                  {email}
                </p>
                <button
                  onClick={copyToClipboard}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "12px",
                    background: copied
                      ? "rgba(16,185,129,0.1)"
                      : "rgba(255,255,255,0.04)",
                    border: copied
                      ? "1px solid rgba(16,185,129,0.3)"
                      : "1px solid rgba(255,255,255,0.08)",
                    color: copied ? "#10b981" : "#94a3b8",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "all 0.2s",
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? "Copied!" : "Copy Address"}
                </button>
              </div>
            </motion.div>

            {/* Card 3: Direct Call Box */}
            <motion.div
              className="glass-card"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              style={{
                padding: "28px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "16px",
                  background: "rgba(124,58,237,0.1)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Phone size={20} style={{ color: "#a78bfa" }} />
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "6px",
                  }}
                >
                  Call / Text Direct
                </p>
                <a
                  href={`tel:${phone}`}
                  style={{
                    fontSize: "1.1rem",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {phone}
                </a>
              </div>
            </motion.div>

            {/* Card 4: Asymmetric Social Grid Matrix */}
            <motion.div
              className="glass-card"
              variants={itemVariants}
              style={{
                gridColumn: "span 2",
                padding: "28px",
                background: "rgba(255,255,255,0.01)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "16px",
                }}
              >
                Socials
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "12px",
                }}
              >
                {socialIcons?.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      height: "70px",
                      borderRadius: "16px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      textDecoration: "none",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = social.hoverColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.06)";
                    }}
                  >
                    <Image
                      src={social.logo}
                      alt={social.name}
                      width={20}
                      height={20}
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                    <span style={{ fontSize: "0.65rem", color: "#94a3b8" }}>
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
    </section>
  );
}
