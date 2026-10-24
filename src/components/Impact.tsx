"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Impact() {
  const { impactStats } = PORTFOLIO_DATA;
  const [impactMode, setImpactMode] = useState<"scale" | "reliability" | "performance">(
    "reliability"
  );

  const stories = {
    scale: {
      label: "SCALE",
      shape: "shape-structure",
      title: "Engineered for predictable throughput.",
      description:
        "Modular full-stack architectures, relational indexing, containerized Docker deployment, and clean separation of concerns.",
      link: "#work",
    },
    reliability: {
      label: "RELIABILITY",
      shape: "shape-ripples",
      title: "Building software that works under real conditions.",
      description:
        "Handling concurrent WebSocket events, role-based access control, secure JWT refresh cycles, and resilient error recovery.",
      link: "#work",
    },
    performance: {
      label: "PERFORMANCE",
      shape: "shape-connected",
      title: "Responsive interfaces and lean API payloads.",
      description:
        "Client-side caching, Next.js server components, optimized asset delivery, and sub-second endpoint responses.",
      link: "#work",
    },
  };

  const current = stories[impactMode];

  return (
    <section id="impact" className="impact-stage chapter">
      <div className="impact-stage-content">
        <div className="section-label">
          <span>
            <span className="signal-text">
              <span className="sr-only">04 / THE WORK, MULTIPLIED</span>
              <span aria-hidden="true" className="signal-text-size">
                04 / THE WORK, MULTIPLIED
              </span>
              <span aria-hidden="true" className="signal-text-live">
                04 / THE WORK, MULTIPLIED
              </span>
            </span>
          </span>
          <span>SYSTEMS. ACCURACY. DELIVERY.</span>
        </div>

        <div className="impact-title" data-editorial-reveal="true">
          <h2>
            Code is the tool.
            <br />
            <em>Reliability is the outcome.</em>
          </h2>
          <p>
            Every API contract, database schema, and interface
            <br />
            is a chance to build something people rely on.
          </p>
        </div>

        <div className="impact-lead" data-editorial-reveal="true">
          <div className="impact-value">
            <span>100</span>
            <em>%</em>
          </div>
          <div className="impact-context">
            <h3>{impactStats.leadTitle}</h3>
            <p>{impactStats.leadDescription}</p>
            <a className="text-link" href="#work">
              The engineering behind the numbers <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="impact-pair">
          {impactStats.pairs.map((p, i) => (
            <div key={i} data-editorial-reveal="true">
              <strong>
                {p.value}
                <em>{p.unit}</em>
              </strong>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}

          <div className="impact-principle" data-editorial-reveal="true">
            <span className="eyebrow">{impactStats.principle.eyebrow}</span>
            <p>
              {impactStats.principle.line1}
              <br />
              {impactStats.principle.line2}
              <br />
              <em>{impactStats.principle.line3}</em>
            </p>
          </div>
        </div>

        <div className="brand-story" data-editorial-reveal="true">
          <div className="brand-story-heading">
            <span className="eyebrow">ENGINEERING JOURNEY / CONTINUOUS EVOLUTION</span>
            <h3>
              From foundational code.
              <br />
              <em>To production systems.</em>
            </h3>
            <p>
              Over the course of my projects and internships, I’ve engineered telecom operations
              management tools with Socket.IO and JWT, built generative AI mock interview
              platforms backed by PostgreSQL and Drizzle ORM, authored an academic research
              paper on adaptive interview systems, and developed administrative dashboards in
              Next.js.
            </p>
            <a className="text-link" href="#journey">
              My experience &amp; timeline <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="brand-milestones">
            {impactStats.milestones.map((m, idx) => (
              <div key={idx}>
                <span>{m.year}</span>
                <p>
                  <b>{m.bold}</b> {m.text}
                </p>
                {m.link && (
                  <a href={m.link} target="_blank" rel="noopener noreferrer">
                    {m.linkText} <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="signal-explorer signal-impact">
          <div className="signal-topline">
            <span className="eyebrow">HOW THE IMPACT TRAVELS</span>
            <span aria-hidden="true">
              {impactMode === "scale" ? "01" : impactMode === "reliability" ? "02" : "03"} / 03
            </span>
          </div>

          <div className="signal-visual" aria-hidden="true">
            <div className={`signal-fallback ${current.shape}`}>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <span className="signal-center-label">
              <span className="signal-text">
                <span className="sr-only">{current.label}</span>
                <span aria-hidden="true" className="signal-text-size">
                  {current.label}
                </span>
                <span aria-hidden="true" className="signal-text-live">
                  {current.label}
                </span>
              </span>
            </span>
          </div>

          <div className="signal-options" role="group" aria-label="Explore how impact travels">
            <button
              aria-pressed={impactMode === "scale"}
              onClick={() => setImpactMode("scale")}
            >
              Scale<span aria-hidden="true">↗</span>
            </button>
            <button
              aria-pressed={impactMode === "reliability"}
              onClick={() => setImpactMode("reliability")}
            >
              Reliability<span aria-hidden="true">↗</span>
            </button>
            <button
              aria-pressed={impactMode === "performance"}
              onClick={() => setImpactMode("performance")}
            >
              Performance<span aria-hidden="true">↗</span>
            </button>
          </div>

          <div className="signal-story" aria-live="polite">
            <h3>{current.title}</h3>
            <p>{current.description}</p>
            <a className="text-link" href={current.link}>
              See the work ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
