import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Brain, Cpu, Rocket, ShieldCheck, Layers, GitBranch } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Brain,
      title: "Problem Solver & Architect",
      desc: "Skilled in analyzing intricate business requirements, decomposing them into reliable database schemas, and building clean RESTful API contracts.",
    },
    {
      icon: Layers,
      title: "Full-Stack Proficiency",
      desc: "Comfortable across the entire web stack: modern React/Next.js client experiences, robust Node.js backends, real-time Socket.io channels, and relational/document databases.",
    },
    {
      icon: Rocket,
      title: "Production Focused",
      desc: "Practical experience with RBAC, JWT tokens, containerized Docker deployment, and real-time dashboard telemetry under live network conditions.",
    },
  ];

  return (
    <section id="about" className="py-20 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            Background & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            I believe software should be fast, intuitive, and built with maintainable architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Bio Card */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-5 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Software Engineering with Real-World Focus
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I'm a Computer Science graduate dedicated to building practical,
              production-grade software systems. During my internships at{" "}
              <span className="text-cyan-400 font-medium">DoorPay</span> and{" "}
              <span className="text-cyan-400 font-medium">Kanad Networks</span>,
              I worked directly on critical dashboards, telemetry feeds, and API
              integrations that users depend on every day.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              My engineering work spans the entire lifecycle: from database design
              with PostgreSQL & MongoDB to stateful client experiences in Next.js
              and React, to real-time pipelines using Socket.io and AI APIs.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              {["Clean Architecture", "REST API Design", "Real-Time Telemetry", "Role-Based Access", "AI Pipelines"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Core Pillars */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-0.5 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
