"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with prefilled subject & body
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get In Touch
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            I'm currently seeking software engineering roles where I can contribute to meaningful products and collaborate with exceptional teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Direct Connect Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-slate-900/40 border border-slate-800/80 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for new roles
                </div>
                <h3 className="text-xl font-bold text-white">
                  Open for opportunities
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Whether you have an open position, an engineering query, or just want to discuss software systems, my inbox is always open.
                </p>
              </div>

              {/* Direct Email Pill with Copy */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3 truncate mr-2">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] text-slate-400 font-mono">
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-cyan-400 transition-colors truncate block"
                    >
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all shrink-0 cursor-pointer"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Social links */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-semibold">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-semibold">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Fast Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-7 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 space-y-4 shadow-xl"
            >
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Send className="w-4 h-4 text-cyan-400" />
                Send a Direct Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-mono text-slate-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-mono text-slate-300"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-mono text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Hi Himanshu, I checked out your portfolio and wanted to discuss an opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Launch Message Client</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
