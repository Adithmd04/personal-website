"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Download, Sparkles } from "lucide-react";
import { data } from "@/assets/personalDetails";

const container =
  "mx-auto w-[min(100%_-_56px,1160px)] max-md:w-[min(100%_-_38px,1160px)]";
const microLabel =
  "inline-flex items-center gap-2.5 font-mono text-[.66rem] leading-[1.2] font-[650] tracking-[.16em] uppercase text-accent";
const statusDot =
  "size-[7px] rounded-full bg-[#a9e66a] shadow-[0_0_0_4px_rgba(169,230,106,.11)]";

export default function HeroSection() {
  const startYear = 2024;
  const experienceYearCount = Math.max(1, new Date().getFullYear() - startYear);
  const tech = data.homePage.techStack;

  return (
    <section
      id="home"
      className="relative isolate flex min-h-svh flex-col justify-center pt-36.25 pb-17.5 before:absolute before:inset-0 before:z-[-2]
       before:content-[''] before:bg-[radial-gradient(ellipse_at_78%_44%,color-mix(in_srgb,var(--primary-color)_9%,transparent),transparent_37%),linear-gradient(115deg,transparent_54%,color-mix(in_srgb,var(--secondary-color)_4%,transparent))] max-md:min-h-0 max-md:pt-32.5 max-md:pb-11.25"
    >
      <div className="pointer-events-none absolute z-[-1] top-[14%] right-[3%] size-145 rounded-full border border-accent/13" />
      <div className="pointer-events-none absolute z-[-1] right-[-2%] top-[5%] size-190 rounded-full border border-accent/[.07]" />

      <div
        className={`${container} grid min-h-[min(850px,100vh)] grid-cols-[minmax(0,1.1fr)_minmax(360px,.9fr)] items-center gap-[clamp(50px,8vw,112px)] max-md:flex max-md:min-h-0 max-md:flex-col max-md:items-stretch max-md:gap-12.5 max-md:pt-30 max-md:pb-25`}
      >
        <div className="relative z-2">
          <motion.div
            className="mb-7.5 flex items-center gap-2.5 font-mono text-[.67rem] leading-[1.2] font-semibold tracking-[.15em] text-body max-md:mb-6 max-md:text-[.58rem]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={statusDot} /> SOFTWARE ENGINEER{" "}
            <span className="text-subtle">/</span> INDIA
          </motion.div>

          <motion.h1
            className="max-w-190 text-[clamp(4rem,7.7vw,7.7rem)] leading-[.89] font-[650] tracking-[-.09em] text-ink max-md:text-[clamp(3.75rem,15vw,6.1rem)]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Building digital
            <span className="block text-accent">
              {" "}
              experiences<span className="text-ink">.</span>
            </span>
            <span className="mt-6.25 block text-[clamp(.9rem,1.35vw,1.15rem)] leading-[1.3] font-medium tracking-wide text-subtle max-md:mt-5 max-md:text-[.92rem]">
              I&apos;m {data.name.firstName} {data.name.lastName}.
            </span>
          </motion.h1>

          <motion.p
            className="mt-7.5 max-w-137.5 text-[.96rem] leading-[1.85] text-body max-md:mt-5.5 max-md:text-[.88rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            {data.aboutPage.description}
          </motion.p>

          <motion.div
            className="mt-8.5 flex flex-wrap items-center gap-5.75 max-md:mt-6.5 max-md:gap-4.5"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-4.25 rounded-[10px] bg-accent px-4.75 py-3.75 text-[.82rem] font-bold text-on-accent transition-[transform,background-color] duration-200 hover:-translate-y-0.75 hover:bg-cta-hover max-md:px-3.75 max-md:py-3.5"
            >
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-4.25 text-[.82rem] font-bold text-ink transition-[transform,color] duration-200 hover:translate-x-0.75 hover:text-accent"
            >
              Let&apos;s talk <ArrowDownRight size={16} />
            </a>
            <button
              className="inline-flex cursor-pointer items-center gap-2 py-2 text-[.72rem] text-subtle transition-colors hover:text-accent"
              id="hero-download-cv-btn"
              type="button"
            >
              <Download size={15} /> {data.aboutPage.downloadBtnLabel}
            </button>
          </motion.div>

          <motion.div
            className="mt-16 border-t border-line pt-5 max-md:mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className={microLabel}>MY EVERYDAY TOOLKIT</span>
            <div className="mt-3.75 flex flex-wrap gap-2.25">
              {tech.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-line px-2.75 py-1.75 text-[.7rem] text-body"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative flex min-h-122.5 flex-col justify-between overflow-hidden rounded-sm border border-accent/22 bg-[linear-gradient(145deg,color-mix(in_srgb,var(--bg-card)_96%,var(--primary-color)),var(--bg-secondary)_72%)] p-6.75 shadow-[25px_35px_100px_rgba(0,0,0,.25)] before:absolute before:top-[13%] before:left-[12%] before:size-90 before:content-[''] before:rounded-full before:border before:border-accent/22 before:shadow-[0_0_0_36px_color-mix(in_srgb,var(--primary-color)_3%,transparent),0_0_0_72px_color-mix(in_srgb,var(--primary-color)_2%,transparent)] max-md:min-h-96.25 max-md:p-5 max-md:before:size-67.5"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2 }}
        >
          <div className="relative z-1 flex justify-between gap-3 font-mono text-[.59rem] leading-[1.3] font-semibold tracking-[.12em] text-subtle">
            <span>PROFILE / 001</span>
            <span className="flex items-center gap-2">
              AVAILABLE TO CONNECT{" "}
              <i className="size-1.5 rounded-full bg-accent" />
            </span>
          </div>

          <div className="relative z-1 my-auto text-[clamp(9rem,18vw,16rem)] leading-[.8] font-[650] tracking-[-.13em] text-ink max-md:text-[clamp(9rem,40vw,13rem)]">
            {data.name.firstName.charAt(0)}
            <span className="text-accent">
              {data.name.lastName.trim().charAt(0)}
            </span>
          </div>

          <div className="relative z-1 flex items-center justify-between font-mono text-[.7rem] leading-[1.6] font-semibold tracking-widest text-body [&_svg]:text-accent">
            <span>
              FRONTEND-FOCUSED
              <br />
              SOFTWARE ENGINEER
            </span>
            <Sparkles size={19} />
          </div>

          <div className="my-5.25 h-px bg-line" />

          <div className="relative z-1 grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-1.75">
              <strong className="text-[1.8rem] font-[550] tracking-[-.06em] text-ink max-md:text-[1.45rem]">
                {experienceYearCount}+
              </strong>
              <span className="font-mono text-[.54rem] leading-[1.4] font-semibold tracking-widest text-subtle">
                YEARS BUILDING
              </span>
            </div>
            <div className="flex flex-col gap-1.75">
              <strong className="text-[1.8rem] font-[550] tracking-[-.06em] text-ink max-md:text-[1.45rem]">
                {tech.length.toString().padStart(2, "0")}
              </strong>
              <span className="font-mono text-[.54rem] leading-[1.4] font-semibold tracking-widest text-subtle">
                CORE TECHNOLOGIES
              </span>
            </div>
            <div className="flex flex-col gap-1.75">
              <strong className="text-[1.8rem] font-[550] tracking-[-.06em] text-ink max-md:text-[1.45rem]">
                ∞
              </strong>
              <span className="font-mono text-[.54rem] leading-[1.4] font-semibold tracking-widest text-subtle">
                IDEAS TO EXPLORE
              </span>
            </div>
          </div>
          <span className="relative z-1 mt-6 block font-mono text-[.54rem] leading-[1.4] font-semibold tracking-widest text-subtle">
            ADITH M D — PORTFOLIO 2026
          </span>
        </motion.div>
      </div>

      <div
        className={`${container} mt-16.25 flex min-h-[min(850px,100vh)] justify-between font-mono text-[.58rem] leading-none font-semibold tracking-[.16em] text-subtle max-md:mt-8.5 max-md:min-h-0 max-md:pt-30 max-md:pb-25`}
      >
        <span>SCROLL TO EXPLORE</span>
        <span>01 — 05</span>
      </div>
    </section>
  );
}
