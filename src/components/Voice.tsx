import { ArrowUpRight, Code, Network } from "lucide-react";

export default function Voice() {
  return (
    <section className="voice chapter solid-section" id="speaking">
      <div className="section-label">
        <span>06 / TECHNICAL DEPTH</span>
        <span>ENGINEERING PRACTICES &amp; ARCHITECTURE</span>
      </div>

      <div className="stage-image blank-screen-stage" data-reveal="true">
        <div className="stage-copy">
          <span className="eyebrow">PRACTICAL ENGINEERING</span>
          <h2>
            Write clean code.
            <br />
            Make it <em>count.</em>
          </h2>
          <a
            className="pill-link"
            href="https://github.com/Jha0987"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore GitHub Codebase <ArrowUpRight size={16} />
          </a>
        </div>
        <span className="stage-footnote">
          RELIABLE APIS. STRUCTURED DATA. CLEAN FLOWS.
        </span>
      </div>

      <div className="voice-grid">
        <div>
          <h3>
            Architecture that scales.
            <br />
            Code that explains itself.
          </h3>
          <p>
            Focused on writing maintainable TypeScript, structured REST APIs, predictable
            WebSocket event streaming, and performant React applications with clean data flows.
          </p>
          <div className="speaking-topics">
            <span>Full-Stack Architecture</span>
            <span>Next.js &amp; React</span>
            <span>Socket.IO Streams</span>
            <span>PostgreSQL &amp; Drizzle</span>
          </div>
        </div>

        <div className="content-list">
          <a
            href="https://github.com/Jha0987/AI-Mock-Interviewer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code size={18} />
            <span>
              <small>FULL-STACK SYSTEM</small>
              AI Mock Interviewer Architecture
            </span>
            <ArrowUpRight size={20} />
          </a>

          <a
            href="https://github.com/Jha0987/Kanad-Network"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Network size={18} />
            <span>
              <small>REAL-TIME NOC</small>
              Telecom Operations &amp; Socket Telemetry
            </span>
            <ArrowUpRight size={20} />
          </a>

          <p className="content-context">
            Engineered with modular separation of concerns, JWT authorization middleware,
            relational database constraints, and automated error boundaries.
          </p>

          <a
            className="text-link"
            href="https://github.com/Jha0987"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all repositories on GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
