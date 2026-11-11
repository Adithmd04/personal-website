"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Home, FolderCode, UserRound, Code2, Mail, Zap } from "lucide-react";
import { data } from "@/assets/personalDetails";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: data.navbar.home, href: "#home", icon: Home },
  { label: data.navbar.projects, href: "#projects", icon: FolderCode },
  { label: data.navbar.skills, href: "#skills", icon: Zap },
  { label: data.navbar.about, href: "#about", icon: UserRound },
  { label: "Contact", href: "#contact", icon: Mail },
];
const sections = ["home", "projects", "skills", "about", "contact"];
function getActiveSection() {
  for (const id of [...sections].reverse()) {
    const element = document.getElementById(id);
    if (element && window.scrollY >= element.offsetTop - 180)
      return id.charAt(0).toUpperCase() + id.slice(1);
  }
  return "Home";
}

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const isNavigating = useRef(false);
  const scrollEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      if (!isNavigating.current) setActive(getActiveSection());
    };
    const handleScrollEnd = () => {
      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
      isNavigating.current = false;
      setActive(getActiveSection());
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scrollend", handleScrollEnd);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
    };
  }, []);
  const handleNav = (href: string, label: string) => {
    if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
    isNavigating.current = true;
    setActive(label);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    scrollEndTimer.current = setTimeout(() => {
      isNavigating.current = false;
      setActive(getActiveSection());
    }, 1100);
  };
  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-4.5 z-100 hidden justify-center px-6 md:flex">
        <motion.nav
          className={`pointer-events-auto flex min-h-16.5 w-[min(100%,1050px)] items-center justify-between gap-6 rounded-2xl border border-line bg-page/88 py-0 pr-4.5 pl-5.5 backdrop-blur-[22px] transition-[background-color,box-shadow] duration-300 ${scrolled ? "shadow-[0_18px_60px_rgba(0,0,0,.24)]" : "shadow-[0_10px_50px_rgba(0,0,0,.12)]"}`}
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <button
            className="inline-flex cursor-pointer items-center gap-2.5 bg-transparent text-ink"
            onClick={() => handleNav("#home", "Home")}
            aria-label="Go to home"
          >
            <span className="grid size-8.5 place-items-center rounded-[10px] bg-accent text-on-accent">
              <Code2 size={19} />
            </span>
            <b className="text-[.85rem] tracking-[.08em]">
              {data.name.firstName}
              <i className="not-italic text-accent">.</i>
            </b>
          </button>
          <div className="flex items-center gap-[clamp(16px,3vw,34px)]">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href, link.label)}
                className={`relative cursor-pointer py-2.5 text-[.78rem] font-[550] transition-colors duration-200 ${active === link.label ? "text-ink after:absolute after:inset-x-0 after:bottom-0.5 after:h-0.5 after:rounded-sm after:bg-accent after:content-['']" : "text-subtle hover:text-ink"}`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              id="navbar-lets-talk-btn"
              className="flex cursor-pointer items-center gap-4 rounded-[10px] bg-accent px-4 py-2.75 text-[.78rem] font-[750] text-on-accent transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-cta-hover"
              onClick={() => handleNav("#contact", "Contact")}
            >
              Let&apos;s talk <span className="text-base">↗</span>
            </button>
          </div>
        </motion.nav>
      </div>
      <div className="fixed inset-x-0 bottom-[max(12px,env(safe-area-inset-bottom))] z-100 flex justify-center px-3 md:hidden">
        <motion.nav
          className="flex min-h-16.5 w-[min(100%,430px)] items-center justify-around gap-0.5 rounded-[15px] border border-line bg-page/91 p-1.75 shadow-[0_12px_45px_rgba(0,0,0,.25)] backdrop-blur-[22px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {navLinks.map(({ label, href, icon: Icon }) => (
            <button
              key={label}
              onClick={() => handleNav(href, label)}
              className={`flex min-h-12 min-w-11.5 cursor-pointer flex-col items-center justify-center gap-1 rounded-[9px] ${active === label ? "bg-accent/12 text-accent" : "text-subtle"}`}
              aria-label={label}
            >
              <Icon size={19} />
              <span className="text-[.53rem]">{label}</span>
            </button>
          ))}
          <ThemeToggle />
        </motion.nav>
      </div>
    </>
  );
}
