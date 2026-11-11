"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Mail, MessageCircle } from "lucide-react";
import { data } from "@/assets/personalDetails";

const container =
  "mx-auto w-[min(100%_-_56px,1160px)] max-md:w-[min(100%_-_38px,1160px)]";
const sectionPad = "relative py-[clamp(88px,10vw,148px)] max-md:py-[84px]";
const kicker =
  "inline-flex items-center gap-2.5 font-mono text-[.66rem] leading-[1.2] font-[650] tracking-[.16em] uppercase text-accent [&>span]:text-subtle";
const statusDot =
  "size-[7px] rounded-full bg-[#a9e66a] shadow-[0_0_0_4px_rgba(169,230,106,.11)]";

export default function ContactSection() {
  const { email, linkedIn, github, phone } = data.name;
  const [copied, setCopied] = useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch (error) {
      console.error("Failed to copy email", error);
    }
  };
  const socials = [
    { label: "GitHub", href: `https://${github}`, icon: Mail },
    { label: "LinkedIn", href: `https://${linkedIn}`, icon: Mail },
    {
      label: "WhatsApp",
      href: `https://wa.me/${phone}?text=Hi, I came across your portfolio and would like to connect.`,
      icon: MessageCircle,
    },
  ];
  return (
    <section id="contact" className={`${sectionPad} bg-page`}>
      <div className={container}>
        <motion.div
          className="relative isolate overflow-hidden border border-accent/25 bg-[linear-gradient(125deg,var(--bg-card),color-mix(in_srgb,var(--primary-color)_7%,var(--bg-card)))] 
          p-[clamp(30px,6vw,75px)] max-md:px-5.25 max-md:py-6.75 after:absolute after:-right-22.5 after:-bottom-65 after:z-[-1] after:size-117.5 after:rounded-full after:border 
          after:border-accent/20 after:content-[''] after:shadow-[0_0_0_40px_color-mix(in_srgb,var(--primary-color)_3%,transparent),0_0_0_80px_color-mix(in_srgb,var(--primary-color)_2%,transparent)]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between gap-5 max-md:flex-col max-md:items-start max-md:gap-4">
            <span className={kicker}>
              HAVE A GOOD ONE IN MIND? <span>/ 04</span>
            </span>
            <span className="flex items-center gap-2.25 font-mono text-[.59rem] font-semibold tracking-widest text-body">
              <i className={statusDot} /> OPEN TO CONVERSATIONS
            </span>
          </div>

          <h2 className="relative mt-16 text-[clamp(3.8rem,8.5vw,8rem)] leading-[.88] font-[650] tracking-[-.09em] text-ink max-md:mt-13 max-md:text-[clamp(3.35rem,15vw,5.4rem)]">
            Let&apos;s make
            <br />
            <em className="not-italic text-accent">something matter.</em>
          </h2>

          <p className="mt-6.75 max-w-117.5 text-[.91rem] leading-[1.8] text-body max-md:text-[.84rem]">
            Have a project, an opportunity, or just want to exchange ideas? My
            inbox is always open.
          </p>

          <div className="mt-8.5 flex items-center gap-3 max-md:flex-col max-md:items-stretch">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-3.25 rounded-[7px] bg-accent px-4.25 py-3.5 text-[.81rem] font-[750] text-on-accent transition-colors hover:bg-cta-hover [&>svg:last-child]:ml-3 max-md:justify-between max-md:gap-2 max-md:text-[.72rem] max-md:[&>svg:last-child]:ml-auto"
            >
              <Mail size={18} /> {email} <ArrowUpRight size={19} />
            </a>
            <button
              className="inline-flex cursor-pointer items-center gap-2 rounded-[7px] border border-line bg-transparent px-3.75 py-3.25 text-[.75rem] text-body transition-colors hover:border-accent hover:text-accent max-md:justify-center"
              onClick={copyToClipboard}
              aria-label="Copy email address"
            >
              {copied ? <Check size={17} /> : <Copy size={17} />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="mt-20 flex items-center justify-between gap-5 border-t border-line pt-5 max-md:mt-12.5 max-md:flex-col max-md:items-start">
            <span className="font-mono text-[.58rem] font-semibold tracking-[.13em] text-subtle">
              FIND ME ELSEWHERE
            </span>
            <div className="flex flex-wrap gap-5.5 max-md:gap-3.75">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.75 text-[.72rem] text-body hover:text-accent"
                >
                  <Icon size={16} /> {label} <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </div>
          <span
            className="absolute top-[38%] right-5 z-[-1] text-[clamp(8rem,19vw,18rem)] 
          leading-none font-extrabold tracking-[-.12em] text-ink/3 max-md:top-[42%] max-md:right-0 max-md:text-[8rem]"
          >
            HELLO.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
