"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { data } from "@/assets/personalDetails";

const filters = ["All", "personal", "company"];
const palettes = [
  "bg-[#283b1d]",
  "bg-[#1b2b42]",
  "bg-[#4b3024]",
  "bg-[#342844]",
];

const container =
  "mx-auto w-[min(100%_-_56px,1160px)] max-md:w-[min(100%_-_38px,1160px)]";
const sectionPad = "relative py-[clamp(88px,10vw,148px)] max-md:py-[84px]";
const kicker =
  "inline-flex items-center gap-2.5 font-mono text-[.66rem] leading-[1.2] font-[650] tracking-[.16em] uppercase text-accent [&>span]:text-subtle";
const heading =
  "mt-[22px] text-[clamp(3.25rem,7.5vw,6.9rem)] leading-[.91] font-[650] tracking-[-.085em] text-ink max-md:mt-[17px] max-md:text-[clamp(3.3rem,15vw,5.2rem)]";
const sideNote =
  "max-w-[310px] pb-[7px] text-[.94rem] leading-[1.8] text-body max-md:mt-5 max-md:max-w-[400px] max-md:text-[.84rem]";
const microLabel =
  "inline-flex items-center gap-2.5 font-mono text-[.66rem] leading-[1.2] font-[650] tracking-[.16em] uppercase text-accent";
const metaText =
  "font-mono text-[.59rem] leading-[1.3] font-semibold tracking-[.13em] uppercase text-subtle";
const windowLine = "block h-1 rounded bg-white/[.24]";
const windowPanel =
  "h-[22px] flex-1 rounded-[3px] border border-white/[.13] bg-white/[.06]";
const artLabel =
  "absolute font-mono text-[.57rem] leading-none font-semibold tracking-[.13em] text-white/[.58]";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const projects = data.projectPage.projects;
  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <section id="projects" className={`${sectionPad} bg-surface`}>
      <div className={container}>
        <div className="mb-16.5 flex items-end justify-between gap-10 max-md:mb-10.5 max-md:block">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={kicker}>
              SELECTED WORK <span> / 01</span>
            </span>
            <h2 className={heading}>
              Things I&apos;ve
              <br />
              <em className="not-italic text-subtle">put into the world.</em>
            </h2>
          </motion.div>
          <p className={sideNote}>
            A selection of projects, experiments and products shaped by
            curiosity and a love for thoughtful interfaces.
          </p>
        </div>

        <div className="mb-4.25 flex items-center justify-between gap-5 border-b border-line pb-4.25 max-md:flex-col max-md:items-start">
          <span className={microLabel}>
            {filtered.length.toString().padStart(2, "0")} PROJECTS
          </span>
          <div className="flex flex-wrap gap-1.75" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`cursor-pointer rounded-md border px-3.25 py-2 text-[.72rem] transition-all duration-200 ${
                  activeFilter === filter
                    ? "border-accent/35 bg-card text-ink"
                    : "border-transparent text-subtle hover:border-line hover:bg-card hover:text-ink"
                }`}
              >
                {filter === "All"
                  ? "All work"
                  : filter === "personal"
                    ? "Personal"
                    : "Company"}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="border-t border-line">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.article
                layout
                key={project.heading}
                className="group relative grid grid-cols-[minmax(260px,.82fr)_minmax(0,1fr)_30px] items-center gap-[clamp(25px,5vw,66px)] border-b border-line py-7.5 max-md:grid-cols-[1fr_20px] max-md:gap-4.25 max-md:py-5.5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <div
                  className={`relative isolate grid min-h-65 place-items-center overflow-hidden max-md:col-span-full max-md:min-h-55 ${palettes[projects.indexOf(project) % palettes.length]}`}
                >
                  <div className="absolute inset-0 opacity-[.22] bg-[linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] bg-size-[26px_26px] mask-[linear-gradient(135deg,black,transparent_85%)]" />
                  <div className="relative min-h-37 w-[66%] max-w-62.5 rotate-[-5deg] rounded-lg border border-white/20 bg-[rgba(12,17,15,.83)] p-3.5 shadow-[0_20px_45px_rgba(0,0,0,.3)] transition-transform duration-450 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:rotate-0 group-hover:scale-[1.04]">
                    <div className="flex gap-1">
                      <i className="block size-1.25 rounded-full bg-white/35" />
                      <i className="block size-1.25 rounded-full bg-white/35" />
                      <i className="block size-1.25 rounded-full bg-white/35" />
                    </div>
                    <div className="mt-4.25 flex flex-col gap-1.5">
                      <b className={`${windowLine} w-[75%]`} />
                      <b className={`${windowLine} w-[48%] bg-[#c7f36b]`} />
                      <b className={`${windowLine} w-[88%]`} />
                      <b className={`${windowLine} w-[60%]`} />
                    </div>
                    <div className="mt-3.75 flex gap-1.5">
                      <span className={windowPanel} />
                      <span className={windowPanel} />
                      <span className={windowPanel} />
                    </div>
                  </div>
                  <span className={`${artLabel} top-4.25 left-4.5`}>
                    0{projects.indexOf(project) + 1}
                  </span>
                  <span className={`${artLabel} right-4.25 bottom-4.25`}>
                    {project.type === "company"
                      ? "IN-HOUSE PRODUCT"
                      : "INDEPENDENT PROJECT"}
                  </span>
                </div>

                <div className="max-md:col-start-1">
                  <div
                    className={`flex gap-3.75 ${metaText} [&>span:first-child]:text-accent`}
                  >
                    <span>
                      {project.type === "company" ? "COMPANY" : "PERSONAL"}
                    </span>
                    <span>
                      {project.tag?.[0]?.replace(/-/g, " ") || "SELECTED WORK"}
                    </span>
                  </div>
                  <h3 className="mt-4.25 text-[clamp(1.55rem,2.7vw,2.35rem)] leading-[1.08] font-semibold tracking-[-.055em] text-ink capitalize max-md:text-[1.65rem]">
                    {project.heading}
                  </h3>
                  <p className="mt-3.25 max-w-140 text-[.84rem] leading-[1.8] text-body">
                    {project.description ||
                      "A personal space to explore ideas, build useful experiences and put modern frontend technologies into practice."}
                  </p>
                  <div className="mt-4.75 flex flex-wrap gap-1.75">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-sm border border-line px-2.25 py-1.5 text-[.64rem] text-subtle"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5.75 flex items-center gap-4.5">
                    {project.links
                      .filter((link) => Boolean(link.url))
                      .map((link) => (
                        <a
                          key={link.type}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.75 text-[.72rem] font-[650] text-ink hover:text-accent"
                        >
                          {link.type === "Github" ? (
                            <Layers3 size={15} />
                          ) : (
                            <ArrowUpRight size={15} />
                          )}
                          {link.type}
                        </a>
                      ))}
                    {project.links.every((link) => !link.url) && (
                      <span className="inline-flex items-center gap-1.75 text-[.72rem] font-medium text-subtle">
                        <Layers3 size={14} />{" "}
                        {project.description === "Corporate Project"
                          ? "Private company project"
                          : "In progress"}
                      </span>
                    )}
                  </div>
                </div>
                <span className="self-start pt-1.75 font-mono text-[.64rem] leading-none font-semibold text-subtle max-md:col-start-2 max-md:row-start-2">
                  {String(projects.indexOf(project) + 1).padStart(2, "0")}
                </span>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
