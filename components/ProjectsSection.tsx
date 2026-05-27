"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Folder, GitFork } from "lucide-react";
import { data } from "@/assets/personalDetails";

const filters = ["All", "personal", "company"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const projects = data.projectPage.projects;

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <section
      id="projects"
      className="relative grid-bg"
      style={{padding: "10px 50px"}}
    >
      <div className="section-container">
        {/* Section header */}
        <motion.div
          style={{ marginBottom: "48px" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <Folder size={12} />
            Portfolio
          </span>
          <h2
            className="section-heading"
            style={{ marginTop: "16px", color: "#fff" }}
          >
            Projects
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              marginTop: "8px",
              maxWidth: "480px",
            }}
          >
            Things I&apos;ve built with passion and purpose.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "40px",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              id={`filter-${f}`}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: "8px 20px",
                borderRadius: "100px",
                fontSize: "0.875rem",
                fontWeight: 500,
                transition: "all 0.2s",
                cursor: "pointer",
                border:
                  activeFilter === f
                    ? "none"
                    : "1px solid rgba(255,255,255,0.1)",
                background:
                  activeFilter === f
                    ? "linear-gradient(135deg, #7c3aed, #3b82f6)"
                    : "rgba(255,255,255,0.04)",
                color: activeFilter === f ? "#fff" : "var(--text-secondary)",
                boxShadow:
                  activeFilter === f
                    ? "0 4px 20px rgba(124,58,237,0.25)"
                    : "none",
              }}
            >
              {f === "All" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.heading}
              className="glass-card"
              style={{ overflow: "hidden" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Gradient image placeholder */}
              <div
                style={{
                  position: "relative",
                  height: "176px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    transition: "transform 0.5s",
                    background: `linear-gradient(135deg, hsl(${260 + i * 30}, 60%, 20%) 0%, hsl(${220 + i * 30}, 70%, 15%) 100%)`,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.15,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <pre
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.7rem",
                      color: "rgba(255,255,255,0.5)",
                      padding: "16px",
                    }}
                  >
                    {`<div className="app">\n  <Header />\n  <Main />\n  <Footer />\n</div>`}
                  </pre>
                </div>
                {project.tag && project.tag.length > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      padding: "3px 8px",
                      borderRadius: "100px",
                      background: "rgba(34,197,94,0.15)",
                      color: "#4ade80",
                      border: "1px solid rgba(74,222,128,0.25)",
                    }}
                  >
                    {project.tag[0]}
                  </span>
                )}
              </div>

              {/* Card body */}
              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "8px",
                    textTransform: "capitalize",
                  }}
                >
                  {project.heading}
                </h3>
                {project.description && (
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      marginBottom: "16px",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {project.description}
                  </p>
                )}

                {/* Tech pills */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "16px",
                  }}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 500,
                        padding: "2px 8px",
                        borderRadius: "6px",
                        background: "rgba(124,58,237,0.1)",
                        color: "#c4b5fd",
                        border: "1px solid rgba(124,58,237,0.2)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    paddingTop: "12px",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {project.links.map((link) => (
                    <a
                      key={link.type}
                      href={link.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        transition: "color 0.2s",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#a78bfa")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-muted)")
                      }
                    >
                      {link.type === "Github" ? (
                        <GitFork size={14} />
                      ) : (
                        <ExternalLink size={14} />
                      )}
                      {link.type}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
