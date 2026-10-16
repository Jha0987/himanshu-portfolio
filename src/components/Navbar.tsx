"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Research", href: "#research" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#home"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            {PORTFOLIO_DATA.personal.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-slate-100 text-sm tracking-tight group-hover:text-cyan-400 transition-colors">
              {PORTFOLIO_DATA.personal.shortName}
            </span>
            <span className="text-[11px] text-slate-400 font-mono leading-none">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-4 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-cyan-400 px-3 py-1.5 rounded-full hover:bg-slate-800/50 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button: Resume */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all hover:-translate-y-0.5"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
            <ArrowUpRight className="w-3 h-3 opacity-80" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-slate-900/95 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-800">
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-xs font-semibold py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium transition-colors"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
