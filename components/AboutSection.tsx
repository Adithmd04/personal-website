"use client";

import { motion } from "framer-motion";
import { User, Briefcase, GraduationCap, Quote, Code } from "lucide-react";
import { data } from "@/assets/personalDetails";

export default function AboutSection() {
  const { description, education, experience, hobbies } = data.aboutPage;

  return (
    <section
      id="about"
      className="relative grid-bg"
      style={{ padding: "112px 0" }}
    >
      <div
        className="section-container"
        style={{ position: "relative", zIndex: 10 }}
      >
        {/* Header */}
        <motion.div
          style={{ marginBottom: "56px" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <User size={12} />
            Background
          </span>
          <h2
            className="section-heading"
            style={{ marginTop: "16px", color: "#fff" }}
          >
            About Me
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              marginTop: "8px",
              maxWidth: "480px",
            }}
          >
            Get to know the person behind the code.
          </p>
        </motion.div>

        {/* Two-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "40px",
          }}
        >
          {/* Left Column */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            <motion.p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                fontSize: "0.95rem",
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="glass-card"
              style={{ padding: "24px" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Experience */}
              <div style={{ marginBottom: "32px" }}>
                <h3
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Briefcase size={16} style={{ color: "#a78bfa" }} />{" "}
                  Experience
                </h3>
                <div
                  style={{
                    position: "relative",
                    borderLeft: "1px solid rgba(255,255,255,0.08)",
                    marginLeft: "8px",
                  }}
                >
                  {experience.role.map((job, idx) => (
                    <div
                      key={idx}
                      style={{
                        position: "relative",
                        paddingLeft: "24px",
                        marginBottom: "24px",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: -5,
                          top: 4,
                          width: 9,
                          height: 9,
                          borderRadius: "50%",
                          background: "#7c3aed",
                          boxShadow: "0 0 8px rgba(124,58,237,0.6)",
                          display: "inline-block",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#a78bfa",
                        }}
                      >
                        {job.duration}
                      </span>
                      <h4
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 700,
                          color: "#fff",
                          marginTop: "2px",
                        }}
                      >
                        {job.role}
                      </h4>
                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-secondary)",
                          marginTop: "2px",
                        }}
                      >
                        {job.company}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <GraduationCap size={16} style={{ color: "#60a5fa" }} />{" "}
                  Education
                </h3>
                <div
                  style={{
                    position: "relative",
                    borderLeft: "1px solid rgba(255,255,255,0.08)",
                    marginLeft: "8px",
                  }}
                >
                  {education.degree.map((deg, idx) => (
                    <div
                      key={idx}
                      style={{
                        position: "relative",
                        paddingLeft: "24px",
                        marginBottom: "16px",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: -5,
                          top: 4,
                          width: 9,
                          height: 9,
                          borderRadius: "50%",
                          background: "#3b82f6",
                          boxShadow: "0 0 8px rgba(59,130,246,0.6)",
                          display: "inline-block",
                        }}
                      />
                      <h4
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: "#fff",
                          textTransform: "capitalize",
                        }}
                      >
                        {deg}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {/* What I Believe */}
            <motion.div
              className="glass-card"
              style={{ padding: "24px" }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Code size={16} style={{ color: "#22d3ee" }} /> What I Believe
              </h3>
              <div
                className="code-block"
                style={{
                  padding: "16px",
                  borderRadius: "10px",
                  background: "rgba(0,0,0,0.4)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div>
                  <span className="code-key">const</span>{" "}
                  <span style={{ color: "#93c5fd" }}> mindset</span>{" "}
                  <span style={{ color: "#94a3b8" }}> = {"{"}</span>
                </div>
                {[
                  ["cleanCode", "true"],
                  ["scalableSystems", "true"],
                  ["userFirst", "true"],
                  ["alwaysLearning", "true"],
                  ["teamwork", "true"],
                ].map(([k, v]) => (
                  <div key={k} style={{ paddingLeft: "16px" }}>
                    <span style={{ color: "#e2e8f0" }}>{k}:</span>{" "}
                    <span style={{ color: "#fb923c" }}>{v}</span>
                    <span style={{ color: "#94a3b8" }}>,</span>
                  </div>
                ))}
                <div>
                  <span style={{ color: "#94a3b8" }}>{"}"}</span>
                </div>
              </div>
            </motion.div>

            {/* Beyond Code */}
            <motion.div
              className="glass-card"
              style={{ padding: "24px" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "16px",
                }}
              >
                Beyond Code
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "12px",
                }}
              >
                {hobbies.map((hobby, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "16px 8px",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      gap: "8px",
                      transition: "all 0.2s",
                    }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>
                      {hobby.toLowerCase().includes("bike")
                        ? "🏍️"
                        : hobby.toLowerCase().includes("football")
                          ? "⚽"
                          : hobby.toLowerCase().includes("gaming")
                            ? "🎮"
                            : hobby.toLowerCase().includes("travel")
                              ? "✈️"
                              : "✨"}
                    </span>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        textTransform: "capitalize",
                        color: "#94a3b8",
                        textAlign: "center",
                      }}
                    >
                      {hobby}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              className="glass-card"
              style={{ padding: "24px", borderLeft: "3px solid #7c3aed" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <Quote
                  size={24}
                  style={{
                    color: "rgba(124,58,237,0.5)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                />
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontStyle: "italic",
                    color: "#cbd5e1",
                    lineHeight: 1.7,
                  }}
                >
                  {
                    '"Code is not just what I write, it\'s how I solve problems and create experiences that matter."'
                  }
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
