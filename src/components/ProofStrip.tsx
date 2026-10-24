import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function ProofStrip() {
  const { proofStrip } = PORTFOLIO_DATA;

  return (
    <section className="proof-strip" aria-label="Career highlights">
      {proofStrip.map((item, idx) => (
        <div key={idx}>
          <strong>
            {item.stat.replace("+", "")}
            {item.unit && <span>{item.unit}</span>}
          </strong>
          <p>{item.label}</p>
        </div>
      ))}
      <a href="#work">
        THE WORK.
        <br />
        THE REAL-WORLD IMPACT.
        <ArrowUpRight size={22} />
      </a>
    </section>
  );
}
