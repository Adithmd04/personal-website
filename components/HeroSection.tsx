"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { data } from "@/assets/personalDetails";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Git",
  "Figma",
];

const codeLines = [
  { key: "const", mid: " developer", rest: " = {" },
  {
    key: "  name:",
    mid: "",
    rest: ` "${data.name.firstName} ${data.name.lastName}",`,
  },
  { key: "  role:", mid: "", rest: ` "Software Engineer",` },
  { key: "  experience:", mid: "", rest: ` "2+ years",` },
  { key: "  focus:", mid: "", rest: ` ["Web Apps", "API"],` },
  { key: "  passion:", mid: "", rest: ` "Clean Code",` },
  { key: "}", mid: "", rest: "" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen grid-bg"
      style={{ paddingTop: "64px" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(124,58,237,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Centered section container */}
      <div
        className="section-container relative z-10"
        style={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "center",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        {/* Two-column flex */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "64px",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {/* LEFT — Text */}
          <div
            style={{
              flex: "1 1 380px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <motion.div
              custom={0}
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              <span className="section-tag">
                <Sparkles size={12} />
                Hi, I&apos;m
              </span>
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              <h1 className="section-heading text-white">
                {data.name.firstName}{" "}
                <span className="gradient-text">{data.name.lastName}</span>
              </h1>
            </motion.div>

            <motion.div
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              <p
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#60a5fa",
                  letterSpacing: "0.04em",
                }}
              >
                {data.homePage.role.fieldOne} {data.homePage.role.fieldTwo}
              </p>
            </motion.div>

            <motion.p
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                maxWidth: "480px",
              }}
            >
              {data.aboutPage.description}
            </motion.p>

            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}
            >
              <button
                id="hero-contact-btn"
                onClick={scrollToContact}
                className="btn-gradient"
              >
                {data.homePage.btnLabel}
                <ArrowRight size={16} />
              </button>
              <button className="btn-outline" id="hero-download-cv-btn">
                {data.aboutPage.downloadBtnLabel}
                <Download size={16} />
              </button>
            </motion.div>

            <motion.div
              custom={5}
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                Tech Stack
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {techStack.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Code block */}
          <motion.div
            style={{
              flex: "1 1 340px",
              display: "flex",
              justifyContent: "center",
            }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              style={{ position: "relative", width: "100%", maxWidth: "440px" }}
            >
              {/* Glow */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "16px",
                  background: "var(--accent-gradient)",
                  filter: "blur(40px)",
                  opacity: 0.18,
                  transform: "scale(0.9) translateY(10px)",
                }}
              />
              {/* Card */}
              <div
                className="glass-card"
                style={{ position: "relative", overflow: "hidden" }}
              >
                {/* Mac bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 16px",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "rgba(239,68,68,0.8)",
                    }}
                  />
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "rgba(234,179,8,0.8)",
                    }}
                  />
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "rgba(34,197,94,0.8)",
                    }}
                  />
                  <span
                    style={{
                      marginLeft: "12px",
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono, monospace)",
                      color: "#475569",
                    }}
                  >
                    developer.ts
                  </span>
                </div>
                {/* Code */}
                <div
                  className="code-block"
                  style={{ borderRadius: 0, border: "none" }}
                >
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      style={{ display: "flex" }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
                    >
                      <span className="code-key">{line.key}</span>
                      <span style={{ color: "#93c5fd" }}>{line.mid}</span>
                      <span className="code-string">{line.rest}</span>
                    </motion.div>
                  ))}
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 16,
                      background: "#a855f7",
                      marginTop: 4,
                    }}
                    className="cursor-blink"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            color: "var(--text-muted)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          scroll
        </span>
        <motion.div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, #7c3aed, transparent)",
          }}
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
