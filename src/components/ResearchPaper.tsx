import { PORTFOLIO_DATA } from "@/data/portfolio";
import { BookOpen, ExternalLink, Sparkles, FileCheck2 } from "lucide-react";

export default function ResearchPaper() {
  const { research } = PORTFOLIO_DATA;

  return (
    <section id="research" className="py-20 relative border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-blue-950/30 border border-slate-800/80 p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Subtle glow effect */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium">
                  <FileCheck2 className="w-3.5 h-3.5" />
                  Academic Research & Publication
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {research.venue}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                {research.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {research.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Natural Language Processing", "Adaptive Feedback Loops", "Real-Time Scoring", "AI System Evaluation"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/50 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
              <a
                href={research.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all hover:-translate-y-0.5"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Published Paper</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>

              <p className="text-[11px] font-mono text-slate-400 text-left lg:text-right">
                Peer-reviewed publication • Open Access PDF
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
