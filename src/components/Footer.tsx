import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Footer() {
  const currentYear = 2026;

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Research", href: "#research" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-slate-900 bg-slate-950/80 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-xs">
              {PORTFOLIO_DATA.personal.initials}
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                {PORTFOLIO_DATA.personal.name}
              </div>
              <div className="text-xs font-mono text-slate-400">
                {PORTFOLIO_DATA.personal.headline}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3 text-slate-400">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono">
          <div>
            © {currentYear} {PORTFOLIO_DATA.personal.shortName}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with Next.js 16, React 19 & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
