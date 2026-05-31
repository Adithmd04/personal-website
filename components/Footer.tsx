"use client";

import { useEffect, useState } from "react";
import { Code, Code2 } from "lucide-react";
import { data } from "@/assets/personalDetails";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const navItems = ["Email", "Phone"];

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(12px)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        className="section-container"
        style={{
          padding: "32px 24px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >

         <Code size={24} />

        <p
          style={{
            fontSize: "0.75rem",
            color: "#475569",
            fontWeight: 500,
          }}
          suppressHydrationWarning
        >
          &copy; {year ?? ""} {data.name.firstName} {data.name.lastName}. All rights reserved.
        </p>

        <div style={{ display: "flex", gap: "16px" }}>
          {navItems?.map((label) => (
            <a
              key={label}
              href="#"
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "#475569",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#a78bfa")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#475569")}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
