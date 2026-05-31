"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Home, FolderCode, User, Code, Mail, Zap } from "lucide-react";
import { data } from "@/assets/personalDetails";

const navLinks = [
  { label: data.navbar.home, href: "#home", icon: Home },
  { label: data.navbar.projects, href: "#projects", icon: FolderCode },
  { label: data.navbar.skills, href: "#skills", icon: Zap },
  { label: data.navbar.about, href: "#about", icon: User },
  { label: "Contact", href: "#contact", icon: Mail },
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
      {/* Desktop & Tablet Navbar */}
      <div className="hidden md:flex fixed top-3 left-0 right-0 z-50 justify-center w-full">
        <motion.nav
          className="navbar md:w-[75%] lg:w-[60%] h-12 flex justify-center items-center"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: "9999px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="navbar-inner">
            {/* Logo */}
            <button
              className="flex items-center gap-2 cursor-pointer shrink-0"
              onClick={() => handleNav("#home", "Home")}
            >
              <span className="font-mono text-sm font-bold text-white tracking-wider">
                <Code size={24} />
              </span>
            </button>

            {/* Desktop nav links */}
            <div className="flex flex-1 justify-center items-center gap-8">
              {navLinks
                .filter((link) => link.label !== "Contact")
                .map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNav(link.href, link.label)}
                    className={`nav-link ${active === link.label ? "active" : ""}`}
                  >
                    {link.label}
                  </button>
                ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={() => handleNav("#contact", "Contact")}
                className="btn-gradient text-xs text-white"
                id="navbar-lets-talk-btn"
              >
                Let&apos;s Talk
              </button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Floating Glassmorphic Dock */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
        <motion.nav
          className="w-full max-w-sm h-16 flex items-center justify-around px-2 relative"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            borderRadius: "9999px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            const isActive = active === link.label;

            return (
              <button
                key={link.label}
                onClick={() => handleNav(link.href, link.label)}
                className="relative flex items-center justify-center w-12 h-12 rounded-full focus:outline-none transition-colors duration-300 group z-10"
              >
                {/* Active Indicator Slide Overlay */}
                {isActive && (
                  <motion.div
                    layoutId="mobileActivePill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.12)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Navigation Icon */}
                <IconComponent
                  size={22}
                  strokeWidth={isActive ? 2.5 : 1.75}
                  className={`transition-all duration-300 ${
                    isActive
                      ? "text-white scale-105"
                      : "text-white/50 group-hover:text-white/80"
                  }`}
                />
              </button>
            );
          })}
        </motion.nav>
      </div>
    </>
  );
}
