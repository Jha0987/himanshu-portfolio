"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Skills() {
  const { expertise } = PORTFOLIO_DATA;
  const [expandedIndex, setExpandedIndex] = useState(0);

  const activeExpertise = expertise[expandedIndex] || expertise[0];

  return (
    <section className="expertise chapter solid-section" id="expertise">
      <div className="section-label">
        <span>03 / HOW I THINK &amp; WORK</span>
        <span>DEPTH MEETS EXECUTION</span>
      </div>

      <div className="expertise-grid expertise-studio">
        <div className="expertise-intro">
          <h2>
            How I work.
            <br />
            <em>From requirement to reliable code.</em>
          </h2>
          <p className="muted">Select a discipline. Follow the architectural thinking.</p>

          <div className="thinking-path" aria-live="polite">
            <span className="eyebrow">
              <span className="signal-text">
                <span className="sr-only">{activeExpertise.title}</span>
                <span aria-hidden="true" className="signal-text-size">
                  {activeExpertise.title}
                </span>
                <span aria-hidden="true" className="signal-text-live">
                  {activeExpertise.title}
                </span>
              </span>
            </span>

            <ol key={activeExpertise.id}>
              {activeExpertise.steps.map((st, i) => (
                <li key={i} style={{ animationDelay: `${i * 70}ms` }}>
                  <span>{st.step}</span>
                  {st.text}
                </li>
              ))}
            </ol>

            <a href="#work" className="text-link">
              Explore the engineering ↗
            </a>
          </div>
        </div>

        <div className="expertise-list">
          {expertise.map((item, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <article
                key={item.id}
                className={`expertise-item ${isExpanded ? "expanded" : ""}`}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={`expertise-${idx}`}
                    onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                  >
                    <span>
                      <small className="eyebrow">
                        <span className="signal-text">
                          <span className="sr-only">
                            {item.number} / {item.title.toUpperCase()}
                          </span>
                          <span aria-hidden="true" className="signal-text-size">
                            {item.number} / {item.title.toUpperCase()}
                          </span>
                          <span aria-hidden="true" className="signal-text-live">
                            {item.number} / {item.title.toUpperCase()}
                          </span>
                        </span>
                      </small>
                      {item.lead}
                    </span>
                    {isExpanded ? <Minus size={24} /> : <Plus size={24} />}
                  </button>
                </h3>

                <div
                  id={`expertise-${idx}`}
                  className="expertise-body"
                  hidden={!isExpanded}
                >
                  <p>{item.description}</p>
                  <p className="strengths">{item.strengths}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
