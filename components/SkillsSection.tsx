"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Braces,
  Database,
  GitBranch,
  PanelsTopLeft,
  Terminal,
} from "lucide-react";
import { data } from "@/assets/personalDetails";

const groups = [
  {
    title: "Frontend",
    note: "Interfaces & experiences",
    icon: PanelsTopLeft,
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "HTML / CSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    note: "Logic & integrations",
    icon: Braces,
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Data",
    note: "Storage & services",
    icon: Database,
    items: ["Supabase", "Firebase"],
  },
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
const indexText = "font-mono text-[.61rem] font-semibold text-subtle";

export default function SkillsSection() {
  const { tools, currentlyLearning } = data.skillPage;
  return (
    <section id="skills" className={`${sectionPad} bg-page`}>
      <div className={container}>
        <div className="mb-16.5 flex items-end justify-between gap-10 max-md:mb-10.5 max-md:block">
          <div>
            <span className={kicker}>
              THE TOOLBOX <span>/ 02</span>
            </span>
            <h2 className={heading}>
              Good tools.
              <br />
              <em className="not-italic text-subtle">Better ideas.</em>
            </h2>
          </div>
          <p className={sideNote}>
            The technologies I use to turn complex problems into simple,
            intuitive digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-[1fr_.82fr] items-start gap-[clamp(35px,7vw,90px)] max-md:grid-cols-1 max-md:gap-9.5">
          <div className="border-t border-line">
            {groups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  className="border-b border-line pt-6.5 pb-7.25"
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="grid size-10.5 place-items-center rounded-[10px] border border-line bg-card text-accent">
                      <Icon size={18} />
                    </span>
                    <div>
                      <h3 className="text-base font-[650] text-ink">
                        {group.title}
                      </h3>
                      <p className="mt-0.5 text-[.7rem] text-subtle">
                        {group.note}
                      </p>
                    </div>
                    <span className="ml-auto font-mono text-[.65rem] font-semibold text-subtle">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-5 ml-14 flex flex-wrap gap-2 max-md:ml-0">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-[5px] border border-line px-2.75 py-2 text-[.72rem] text-body transition-colors duration-200 hover:border-accent hover:text-ink"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.aside
            className="border border-line bg-card p-6.75 max-md:p-5.25"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start justify-between border-b border-line pb-5.5">
              <div>
                <span className={microLabel}>BEYOND THE CODE</span>
                <h3 className="mt-2.25 text-[1.4rem] tracking-[-.04em] text-ink">
                  Tools I work with
                </h3>
              </div>
              <Terminal size={21} className="text-accent" />
            </div>
            <div>
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className="grid grid-cols-[30px_1fr_auto] items-center gap-3 border-b border-line py-3 text-[.77rem] text-body"
                >
                  <span className={indexText}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{tool.name}</span>
                  <span className={indexText}>{tool.level}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-line pt-5">
              <div className="flex items-center gap-2 font-mono text-[.61rem] font-[650] tracking-[.12em] text-accent [&>svg:last-child]:ml-auto">
                <BookOpen size={16} />
                <span>ALWAYS LEARNING</span>
                <ArrowUpRight size={15} />
              </div>
              <div className="mt-3.5 flex flex-wrap gap-1.75">
                {currentlyLearning.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm bg-accent/9 px-2.25 py-1.75 text-[.67rem] text-body capitalize"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>

        <div className="mt-10.5 flex items-center gap-2.5 text-[.75rem] text-subtle max-md:items-start max-md:leading-[1.6] [&>svg]:text-accent">
          <GitBranch size={16} />
          <span>
            Curiosity is part of the stack. I&apos;m always exploring
            what&apos;s next.
          </span>
        </div>
      </div>
    </section>
  );
}
