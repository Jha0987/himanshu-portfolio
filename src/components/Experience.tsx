import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            Career Path
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Work Experience
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Engineering internships where I designed, integrated, and deployed real production features.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-slate-800" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.experience.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Central Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center z-10 shadow-lg shadow-cyan-500/20">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  </div>

                  {/* Spacer for alternate layout on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Experience Card */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-1/2 ${
                      isEven ? "sm:pr-10" : "sm:pl-10"
                    } w-full`}
                  >
                    <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1 group">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-semibold text-cyan-400 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        {exp.type && (
                          <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">
                            {exp.type}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-medium text-slate-300 mt-0.5 mb-4">
                        {exp.role}
                      </p>

                      <ul className="space-y-2.5">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
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
