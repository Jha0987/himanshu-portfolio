"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function About() {
  const [activeTab, setActiveTab] = useState(0);
  const { disciplines } = PORTFOLIO_DATA;
  const current = disciplines[activeTab];

  return (
    <section id="about" className="about chapter solid-section">
      <div className="section-label">
        <span>01 / THE ENGINEER BEHIND THE WORK</span>
        <span>PRACTICAL &amp; MEASURED APPROACH</span>
      </div>

      <div className="about-grid">
        <div className="signal-explorer signal-about">
          <div className="signal-topline">
            <span className="eyebrow">THREE DISCIPLINES. ONE PERSPECTIVE.</span>
            <span aria-hidden="true">0{activeTab + 1} / 03</span>
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
                <span className="sr-only">{current.centerLabel}</span>
                <span aria-hidden="true" className="signal-text-size">
                  {current.centerLabel}
                </span>
                <span aria-hidden="true" className="signal-text-live">
                  {current.centerLabel}
                </span>
              </span>
            </span>
          </div>

          <div className="signal-options" role="group" aria-label="Explore my disciplines">
            {disciplines.map((disc, idx) => (
              <button
                key={disc.id}
                aria-pressed={activeTab === idx}
                onClick={() => setActiveTab(idx)}
              >
                {disc.label}
                <span aria-hidden="true">↗</span>
              </button>
            ))}
          </div>

          <div className="signal-story" aria-live="polite">
            <h3>{current.heading}</h3>
            <p>{current.description}</p>
            <a className="text-link" href={current.linkHref}>
              {current.linkText}
            </a>
          </div>

          <p className="signal-hint">Choose a perspective.</p>
        </div>

        <div className="about-copy">
          <h2>
            Clean systems are
            <br />
            the starting point.
            <br />
            <em>Users are the point.</em>
          </h2>

          <p className="lead">
            I connect frontend experiences, backend services, and clean architecture.
          </p>

          <p>
            I build practical web applications, reliable backend APIs, and useful digital
            experiences using{" "}
            <strong className="copy-highlight">
              React, Next.js, Node.js, Express.js, PostgreSQL, and MongoDB.
            </strong>{" "}
            Experienced in real-time streaming with Socket.IO, JWT authentication, and generative AI
            integrations.
          </p>

          <a className="text-link" href="#journey">
            Read my experience <ArrowUpRight size={16} />
          </a>

          <div className="identity-notes">
            <span>ENGINEERING MIND.</span>
            <span>API ARCHITECT.</span>
            <span>PROBLEM SOLVER.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
