"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? currentScrollY / docHeight : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));

      if (currentScrollY > 150 && currentScrollY > lastScrollY && !menuOpen) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const navItems = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Impact", href: "#impact" },
    { label: "Journey", href: "#journey" },
  ];

  return (
    <>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      <header
        className={`navigation refined-navigation glass-navigation ${menuOpen ? "menu-open" : ""}`}
        data-hidden={hidden ? "true" : "false"}
      >
        <a className="wordmark" href="#top" aria-label={PORTFOLIO_DATA.personal.name}>
          <span className="nav-identity">
            <span>{PORTFOLIO_DATA.personal.name}</span>
          </span>
        </a>

        <nav
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
          id="main-nav"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              className="nav-destination"
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              <span className="signal-text">
                <span className="sr-only">{item.label}</span>
                <span aria-hidden="true" className="signal-text-size">
                  {item.label}
                </span>
                <span aria-hidden="true" className="signal-text-live">
                  {item.label}
                </span>
              </span>
              <span className="nav-mobile-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}

          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            <span className="signal-text">
              <span className="sr-only">Let’s talk</span>
              <span aria-hidden="true" className="signal-text-size">
                Let’s talk
              </span>
              <span aria-hidden="true" className="signal-text-live">
                Let’s talk
              </span>
            </span>
            <ArrowUpRight size={16} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>
    </>
  );
}
