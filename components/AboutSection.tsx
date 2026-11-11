"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Heart,
} from "lucide-react";
import { data } from "@/assets/personalDetails";

const container =
  "mx-auto w-[min(100%_-_56px,1160px)] max-md:w-[min(100%_-_38px,1160px)]";
const sectionPad = "relative py-[clamp(88px,10vw,148px)] max-md:py-[84px]";
const kicker =
  "inline-flex items-center gap-2.5 font-mono text-[.66rem] leading-[1.2] font-[650] tracking-[.16em] uppercase text-accent [&>span]:text-subtle";
const heading =
  "mt-[22px] text-[clamp(3.25rem,7.5vw,6.9rem)] leading-[.91] font-[650] tracking-[-.085em] text-ink max-md:mt-[17px] max-md:text-[clamp(3.3rem,15vw,5.2rem)]";
const sideNote =
  "max-w-[310px] pb-[7px] text-[.94rem] leading-[1.8] text-body max-md:mt-5 max-md:max-w-[400px] max-md:text-[.84rem]";
const timelineHeading =
  "flex items-center gap-2.5 border-b border-line pb-[17px] font-mono text-[.64rem] font-[650] tracking-[.15em] text-accent";
const timelineEntry =
  "relative mt-5 ml-2 border-l border-line pl-5 before:absolute before:-left-1 before:top-1 before:size-[7px] before:rounded-full before:bg-accent before:content-['']";

export default function AboutSection() {
  const { description, education, experience, hobbies } = data.aboutPage;
  return (
    <section id="about" className={`${sectionPad} bg-surface`}>
      <div className={container}>
        <div className="mb-16.5 flex items-end justify-between gap-10 max-md:mb-10.5 max-md:block">
          <div>
            <span className={kicker}>
              A LITTLE CONTEXT <span>/ 03</span>
            </span>
            <h2 className={heading}>
              More than
              <br />
              <em className="not-italic text-subtle">the work.</em>
            </h2>
          </div>
          <p className={sideNote}>
            A little about the person behind the pixels, pull requests and
            late-night debugging sessions.
          </p>
        </div>

        <div className="grid grid-cols-[1fr_.82fr] items-start gap-[clamp(40px,8vw,110px)] max-md:grid-cols-1 max-md:gap-9.5">
          <motion.div
            className="relative border border-line bg-card px-9 pt-9.25 pb-8 max-md:px-5.5 max-md:py-6.5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="block text-[6rem] leading-[.7] text-accent font-[Georgia,serif]">
              “
            </span>
            <p className="mt-5 text-[clamp(1.15rem,2vw,1.55rem)] leading-[1.65] tracking-tight text-ink max-md:text-[1.1rem]">
              {description}
            </p>
            <div className="mt-9.5 flex items-center gap-3.25 border-t border-line pt-5.5 text-[.78rem] font-semibold text-ink">
              <span className="grid size-9.5 place-items-center rounded-full bg-accent text-base text-on-accent">
                {data.name.firstName.charAt(0)}.
              </span>
              <span>
                {data.name.firstName} {data.name.lastName}
                <small className="mt-0.75 block font-mono text-[.55rem] font-semibold tracking-[.12em] text-subtle">
                  SOFTWARE ENGINEER
                </small>
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col gap-10">
            <motion.div
              className="pt-0.75"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className={timelineHeading}>
                <BriefcaseBusiness size={17} />
                <span>EXPERIENCE</span>
              </div>
              {experience.role.map((job, index) => (
                <div className={timelineEntry} key={`${job.company}-${index}`}>
                  <span className="font-mono text-[.62rem] font-semibold text-accent">
                    {job.duration}
                  </span>
                  <h3 className="mt-1.5 text-[.95rem] font-[650] text-ink capitalize">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-[.75rem] text-subtle">
                    {job.company}
                  </p>
                </div>
              ))}
            </motion.div>
            <motion.div
              className="pt-0.75"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={timelineHeading}>
                <GraduationCap size={18} />
                <span>EDUCATION</span>
              </div>
              {education.degree.map((degree, index) => (
                <div
                  className={timelineEntry}
                  key={`${degree.degree}-${index}`}
                >
                  <span className="font-mono text-[.62rem] font-semibold text-accent">
                    {degree.year}
                  </span>
                  <h3 className="mt-1.5 text-[.95rem] font-[650] text-ink capitalize">
                    {degree.degree}
                  </h3>
                  <p className="mt-1 text-[.75rem] text-subtle">
                    {degree.institution}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-17.5 flex items-center gap-6 border-y border-line py-5 max-md:mt-11.5 max-md:flex-wrap max-md:items-start max-md:gap-3.25">
          <div className="flex items-center gap-2 font-mono text-[.6rem] font-[650] tracking-[.12em] whitespace-nowrap text-accent max-md:w-full">
            <Heart size={16} /> OFF THE CLOCK
          </div>
          <div className="flex flex-wrap gap-1.25 text-[.76rem] text-body">
            {hobbies.map((hobby, index) => (
              <span key={hobby}>
                {hobby}
                {index < hobbies.length - 1 && (
                  <i className="px-1.25 not-italic text-subtle"> / </i>
                )}
              </span>
            ))}
          </div>
          <a
            href="#contact"
            className="ml-auto flex items-center gap-1.5 text-[.72rem] whitespace-nowrap text-ink hover:text-accent max-md:ml-0"
          >
            Say hello <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
