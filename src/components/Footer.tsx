import { ArrowUp, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <footer>
      <a className="footer-name" href="#top">
        {personal.name}
        <span>.</span>
      </a>

      <div className="socials">
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <ArrowUpRight size={12} />
        </a>

        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <ArrowUpRight size={12} />
        </a>

        <a href={`mailto:${personal.email}`}>
          Email <ArrowUpRight size={12} />
        </a>

        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume <ArrowUpRight size={12} />
        </a>
      </div>

      <a href="#top" className="back-top" aria-label="Back to top">
        <ArrowUp size={19} />
      </a>

      <div className="footer-bottom">
        <span>© 2026 {personal.name.toUpperCase()}</span>
        <span>BUILT WITH INTENT. ALWAYS EVOLVING.</span>
        <span>INDIA ↗ GLOBAL</span>
      </div>
    </footer>
  );
}
