import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  Code,
  Layout,
  Server,
  Database,
  Wrench,
  Bot,
  Terminal,
} from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return Code;
      case "Frontend":
        return Layout;
      case "Backend & Cloud":
        return Server;
      case "Databases & ORM":
        return Database;
      case "Tools & Ecosystem":
        return Wrench;
      case "AI & Integrations":
        return Bot;
      default:
        return Terminal;
    }
  };

  return (
    <section id="skills" className="py-24 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            Technical Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            The core tools, languages, and frameworks I use to engineer robust full-stack applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skills.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.category);

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700/60 hover:border-cyan-500/40 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
