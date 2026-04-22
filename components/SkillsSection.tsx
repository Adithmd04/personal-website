"use client";

import { motion } from "framer-motion";
import { Wrench, BookOpen, TrendingUp, Layers } from "lucide-react";
import { data } from "@/assets/personalDetails";

const toolIcons: Record<string, string> = {
  Git: "🔀", Github: "🐙", Jira: "📋", vscode: "💻", postman: "📬", figma: "🎨",
};

export default function SkillsSection() {
  const { skills, tools, currentlyLearning } = data.skillPage;

  // Defined inside component so JSX icons are created during React's render cycle
  const skillCategories = [
    { label: "Frontend", icon: <Layers size={15} />, items: ["React.js", "Next.js", "TypeScript", "HTML/CSS", "Tailwind CSS", "Bootstrap"] },
    { label: "Backend", icon: <Wrench size={15} />, items: ["Node.js", "Express", "REST APIs"] },
    { label: "Database", icon: <Layers size={15} />, items: ["Supabase", "Firebase"] },
    { label: "Tools & Others", icon: <Wrench size={15} />, items: ["Git", "Docker", "VS Code", "Figma", "Postman"] },
  ];

  return (
    <section id="skills" className="relative grid-bg" style={{ padding: "112px 0" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 30% 60%, rgba(59,130,246,0.08) 0%, transparent 70%)" }}
      />

      <div className="section-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <motion.div
          style={{ marginBottom: "56px" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <TrendingUp size={12} />
            Expertise
          </span>
          <h2 className="section-heading" style={{ marginTop: "16px", color: "#fff" }}>Skills</h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "8px", maxWidth: "480px" }}>
            Technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Two-column grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px" }}>
          {/* Left — Skills overview */}
          <motion.div
            className="glass-card"
            style={{ padding: "24px" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#fff", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
              <Layers size={16} style={{ color: "#a78bfa" }} /> Skills Overview
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {skillCategories.map((cat) => (
                <div
                  key={cat.label}
                  style={{ padding: "12px", borderRadius: "12px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <span style={{ color: "#a78bfa" }}>{cat.icon}</span>
                    <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#fff" }}>{cat.label}</span>
                  </div>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                    {cat.items.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Proficiency */}
            <motion.div
              className="glass-card"
              style={{ padding: "24px" }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#fff", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                <TrendingUp size={16} style={{ color: "#60a5fa" }} /> Proficiency
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <span style={{ fontSize: "0.8rem", fontWeight: 500, color: "#cbd5e1" }}>{skill.name}</span>
                      <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#a78bfa" }}>{skill.level}</span>
                    </div>
                    <div className="progress-bar-track">
                      <motion.div
                        className="progress-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              className="glass-card"
              style={{ padding: "24px" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#fff", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
                <Wrench size={16} style={{ color: "#22d3ee" }} /> Tools I Use
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(64px, 1fr))", gap: "12px" }}>
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    style={{
                      display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
                      padding: "12px 8px", borderRadius: "12px",
                      background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
                      transition: "all 0.2s", cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(124,58,237,0.3)";
                      (e.currentTarget as HTMLDivElement).style.background = "rgba(124,58,237,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.05)";
                      (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.02)";
                    }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>{toolIcons[tool.name] || "🛠️"}</span>
                    <span style={{ fontSize: "0.65rem", fontWeight: 500, color: "var(--text-secondary)", textTransform: "capitalize", textAlign: "center" }}>{tool.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Currently learning */}
            <motion.div
              className="glass-card"
              style={{ padding: "24px" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#fff", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <BookOpen size={16} style={{ color: "#4ade80" }} /> Currently Learning
              </h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {currentlyLearning.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    <span className="glow-dot" />
                    <span style={{ textTransform: "capitalize" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
