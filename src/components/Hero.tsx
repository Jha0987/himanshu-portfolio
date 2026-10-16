"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  ArrowRight,
  Mail,
  Check,
  Copy,
  Terminal,
  Code2,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "spec">("code");

  const codeSnippet = `const engineer: SoftwareEngineer = {
  name: "${PORTFOLIO_DATA.personal.shortName}",
  role: "Full-Stack Software Engineer",
  primaryStack: ["Next.js", "React", "Node.js", "PostgreSQL"],
  architecture: ["REST APIs", "Socket.io", "RBAC", "Docker"],
  focus: "Real-world reliability & AI-integrated tooling",
  currentStatus: "Open to full-time roles & engineering teams"
};`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-12 right-10 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{PORTFOLIO_DATA.personal.statusBadge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Engineering robust systems that{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                  solve real problems.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed pt-2">
                Hi, I'm{" "}
                <span className="text-white font-semibold">
                  {PORTFOLIO_DATA.personal.shortName}
                </span>
                . Computer Science graduate and full-stack software engineer with
                practical experience delivering production features across React,
                Next.js, Node.js, and relational/NoSQL databases.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all hover:-translate-y-0.5"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={copyToClipboard}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 text-sm font-medium hover:bg-slate-800/80 transition-all cursor-pointer"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">
                      Email Copied!
                    </span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>{PORTFOLIO_DATA.personal.email}</span>
                    <Copy className="w-3.5 h-3.5 text-slate-400 ml-1" />
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 ml-1">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Metrics / Highlights Pills */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-xl font-bold text-white font-mono">2+</div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Internships
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-xl font-bold text-cyan-400 font-mono">1</div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Research Paper
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-xl font-bold text-blue-400 font-mono">3+</div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Full-Stack Apps
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Spec Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Card Window Top Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/60 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    himanshu.spec.ts
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab("code")}
                    className={`text-[11px] px-2.5 py-1 rounded-md font-mono transition-colors ${
                      activeTab === "code"
                        ? "bg-slate-800 text-cyan-400 font-medium"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    code
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("spec")}
                    className={`text-[11px] px-2.5 py-1 rounded-md font-mono transition-colors ${
                      activeTab === "spec"
                        ? "bg-slate-800 text-cyan-400 font-medium"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    stack
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto min-h-[290px] flex flex-col justify-between">
                {activeTab === "code" ? (
                  <pre className="text-slate-300">
                    <code>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-blue-300">engineer</span>:{" "}
                      <span className="text-amber-300">SoftwareEngineer</span> = {"{\n"}
                      {"  "}name:{" "}
                      <span className="text-emerald-300">
                        "{PORTFOLIO_DATA.personal.shortName}"
                      </span>
                      ,{"\n"}
                      {"  "}role:{" "}
                      <span className="text-emerald-300">
                        "Full-Stack Software Engineer"
                      </span>
                      ,{"\n"}
                      {"  "}coreStack: [
                      <span className="text-cyan-300">"Next.js"</span>,{" "}
                      <span className="text-cyan-300">"React"</span>,{" "}
                      <span className="text-cyan-300">"Node.js"</span>],{"\n"}
                      {"  "}databases: [
                      <span className="text-blue-300">"PostgreSQL"</span>,{" "}
                      <span className="text-blue-300">"MongoDB"</span>],{"\n"}
                      {"  "}integrations: [
                      <span className="text-amber-300">"Socket.io"</span>,{" "}
                      <span className="text-amber-300">"Gemini API"</span>],{"\n"}
                      {"  "}status:{" "}
                      <span className="text-emerald-400">
                        "Open to opportunities"
                      </span>
                      {"\n"}
                      {"}"};
                    </code>
                  </pre>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                        Production Capabilities
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "Next.js App Router",
                          "React 19",
                          "RESTful APIs",
                          "PostgreSQL & Drizzle",
                          "MongoDB & Mongoose",
                          "Socket.io Real-time",
                          "Clerk Auth & JWT",
                          "Docker Containerization",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-200 text-[11px]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80">
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        Engineering Mindset
                      </div>
                      <p className="text-[11px] text-slate-300 font-sans leading-normal">
                        Focusing on practical system performance, clean REST API
                        contracts, and production-tested error boundaries over superficial hype.
                      </p>
                    </div>
                  </div>
                )}

                {/* Bottom Status line */}
                <div className="pt-3 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>clean-code / responsive / modular</span>
                  </div>
                  <span className="text-slate-400 font-mono">UTF-8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
