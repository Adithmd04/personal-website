import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://adithmd.dev",
  ),
  title: {
    default: "Adith M D | Software Engineer & Frontend Developer",
    template: "%s | Adith M D",
  },
  description:
    "Adith M D is a Software Engineer specialising in React, Next.js, TypeScript and building thoughtful, high-performance web experiences.",
  applicationName: "Adith M D Portfolio",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Adith M D — Portfolio",
    title: "Adith M D | Software Engineer & Frontend Developer",
    description:
      "Explore selected projects, technical skills and experience of Adith M D.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adith M D | Software Engineer & Frontend Developer",
    description:
      "Explore selected projects, technical skills and experience of Adith M D.",
  },
  robots: { index: true, follow: true },
  keywords: [
    "Adith M D",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;}else if(window.matchMedia('(prefers-color-scheme: light)').matches){document.documentElement.dataset.theme='light';}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Adith M D",
              jobTitle: "Software Engineer",
              email: "adithdijikumar@gmail.com",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://adithmd.dev",
              sameAs: [
                "https://www.linkedin.com/in/adithmd04",
                "https://github.com/Adithmd04",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Frontend Development",
                "Web Development",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
