import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Award, ShieldCheck, Trophy, Sparkles } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            Accreditation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Certifications & Recognitions
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Rigorous coursework, hackathons, and certifications verifying computer science and networking fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-0.5 group flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-cyan-400 text-sm shrink-0 group-hover:scale-105 transition-transform">
                {cert.initial}
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-slate-400">
                  {cert.issuer}
                </p>
                <p className="text-[11px] font-mono text-cyan-400/90 pt-0.5">
                  {cert.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
