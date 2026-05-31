"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, GraduationCap, Quote, Code } from "lucide-react";
import { data } from "@/assets/personalDetails";
import { useState } from "react";

export default function AboutSection() {
  const { description, education, experience, hobbies } = data.aboutPage;
  const [hoveredEducation, setHoveredEducation] = useState<number | null>(null);
  return (
    <section
      id="about"
      className="relative grid-bg"
      style={{ padding: "20px 50px" }}
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
            style={{ display: "flex", flexDirection: "column", gap: "25px" }}
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
              <div style={{ marginBottom: "5px" }}>
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
                  {education.degree.map((deg, id) => (
                    <div
                      key={id}
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
                        className="cursor-pointer"
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: "#fff",
                          textTransform: "capitalize",
                        }}
                        onMouseEnter={() => setHoveredEducation(id)}
                        onMouseLeave={() => setHoveredEducation(null)}
                      >
                        {deg.degree}
                      </h4>
                      <AnimatePresence>
                        {hoveredEducation === id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, y: -5 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -5 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden text-[0.8rem] text-[#94a3b8]"
                          >
                            <p>{deg.institution}</p>
                            <p>{deg.year}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
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
              style={{
                padding: "24px",
                borderRadius: "24px",
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
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
                  marginBottom: "20px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  opacity: 0.8,
                }}
              >
                Beyond Code
              </h3>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {hobbies.map((hobby, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      borderColor: "rgba(255, 255, 255, 0.25)",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px 20px",
                      borderRadius: "100px",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                      cursor: "pointer",
                      transition: "border-color 0.2s, background-color 0.2s",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        textTransform: "capitalize",
                        color: "#cbd5e1",
                        letterSpacing: "0.03em",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {hobby}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
