"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sun, Code2 } from "lucide-react";
import { data } from "@/assets/personalDetails";

const navLinks = [
  { label: data.navbar.home, href: "#home" },
  { label: data.navbar.projects, href: "#projects" },
  { label: data.navbar.skills, href: "#skills" },
  { label: data.navbar.about, href: "#about" },
];

const sections = ["home", "projects", "skills", "about", "contact"];

function getActiveSection() {
  for (const id of [...sections].reverse()) {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 100) {
      return id.charAt(0).toUpperCase() + id.slice(1);
    }
  }
  return "Home";
}

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isNavigating = useRef(false);
  const scrollEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const endNavigation = () => {
      isNavigating.current = false;
      setActive(getActiveSection());
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (!isNavigating.current) {
        setActive(getActiveSection());
      }
    };

    const handleScrollEnd = () => {
      if (scrollEndTimer.current) {
        clearTimeout(scrollEndTimer.current);
        scrollEndTimer.current = null;
      }
      endNavigation();
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
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      // Fallback for browsers without scrollend
      scrollEndTimer.current = setTimeout(() => {
        scrollEndTimer.current = null;
        isNavigating.current = false;
        setActive(getActiveSection());
      }, 1000);
    } else {
      isNavigating.current = false;
    }
  };

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none" }}
      >
        {/* Centered inner wrapper */}
        <div className="navbar-inner">
          {/* Logo */}
          <button
            className="flex items-center gap-2 cursor-pointer shrink-0"
            onClick={() => handleNav("#home", "Home")}
          >
            <div
              className="flex items-center justify-center w-8 h-8 rounded-lg"
              style={{ background: "var(--accent-gradient)" }}
            >
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-mono text-sm font-bold text-white tracking-wider">
              &lt;/&gt;
            </span>
          </button>

          {/* Desktop nav links — centered */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href, link.label)}
                className={`nav-link ${active === link.label ? "active" : ""}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Theme Toggle — right */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={() => handleNav("#contact", "Contact")}
              className="btn-gradient text-xs text-white"
              id="navbar-lets-talk-btn"
            >
              Let&apos;s Talk
              <ArrowUpRight size={14} />
            </button>
            {/* <button className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
              <Sun size={16} />
            </button> */}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            id="navbar-mobile-menu-btn"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-lg"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="relative glass-card m-4 p-6 flex flex-col gap-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.05 }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href, link.label)}
                  className={`text-left py-2 text-base font-medium transition-colors ${
                    active === link.label ? "text-white" : "text-slate-400"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#contact", "Contact")}
                className="btn-outline mt-2 justify-center text-white"
              >
                Let&apos;s Talk <ArrowUpRight size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
