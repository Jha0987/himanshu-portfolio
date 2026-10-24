"use client";

import { useState } from "react";
import { ArrowUpRight, FileText, Award, Network, Cpu, Shield, Code } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Showcase() {
  const { credentials } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<"all" | "research" | "certifications">("all");

  const filteredItems = credentials.filter((c) => {
    if (filter === "all") return true;
    return c.category === filter;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case "file":
        return <FileText size={24} />;
      case "network":
        return <Network size={24} />;
      case "cpu":
        return <Cpu size={24} />;
      case "shield":
        return <Shield size={24} />;
      case "code":
        return <Code size={24} />;
      default:
        return <Award size={24} />;
    }
  };

  return (
    <section id="content" className="media-showcase chapter solid-section">
      <div className="section-label">
        <span>
          <span className="signal-text">
            <span className="sr-only">05 / RESEARCH &amp; VERIFIED CREDENTIALS</span>
            <span aria-hidden="true" className="signal-text-size">
              05 / RESEARCH &amp; VERIFIED CREDENTIALS
            </span>
            <span aria-hidden="true" className="signal-text-live">
              05 / RESEARCH &amp; VERIFIED CREDENTIALS
            </span>
          </span>
        </span>
        <span>PEER REVIEW &amp; FOUNDATIONAL DEPTH</span>
      </div>

      <div className="media-heading">
        <h2>
          Published research.
          <br />
          <em>Continuous learning.</em>
        </h2>
        <div>
          <p>
            Peer-reviewed scientific publication, elite networking certificates,
            <br />
            and validated cybersecurity and software achievements.
          </p>
          <a
            className="text-link"
            href="https://www.ijset.in/wp-content/uploads/IJSRET_V12_issue2_471.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read research paper <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="media-controls">
        <div className="media-filters">
          <button
            type="button"
            aria-pressed={filter === "all"}
            onClick={() => setFilter("all")}
          >
            All credentials
          </button>
          <button
            type="button"
            aria-pressed={filter === "research"}
            onClick={() => setFilter("research")}
          >
            Research paper
          </button>
          <button
            type="button"
            aria-pressed={filter === "certifications"}
            onClick={() => setFilter("certifications")}
          >
            Certifications
          </button>
        </div>
        <span className="eyebrow">VERIFIED CREDENTIALS</span>
      </div>

      <div className="film-grid">
        {filteredItems.map((item) => (
          <article key={item.id} className="film-card">
            <div className="film-screen">
              {item.credentialUrl ? (
                <a
                  className="film-play"
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${item.title}`}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        item.category === "research"
                          ? "linear-gradient(135deg, #1b1612 0%, #0d0c0a 100%)"
                          : "linear-gradient(135deg, #121418 0%, #0a0a0c 100%)",
                      padding: "24px",
                      textAlign: "center",
                    }}
                  >
                    <span className="film-play-icon">
                      {getIcon(item.iconType)}
                    </span>
                    <span
                      className="film-channel"
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "12px",
                        color: "var(--muted)",
                        fontSize: "9px",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {item.issuer}
                    </span>
                  </div>
                </a>
              ) : (
                <div
                  className="film-play"
                  style={{ cursor: "default" }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        item.category === "research"
                          ? "linear-gradient(135deg, #1b1612 0%, #0d0c0a 100%)"
                          : "linear-gradient(135deg, #121418 0%, #0a0a0c 100%)",
                      padding: "24px",
                      textAlign: "center",
                    }}
                  >
                    <span className="film-play-icon">
                      {getIcon(item.iconType)}
                    </span>
                    <span
                      className="film-channel"
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "12px",
                        color: "var(--muted)",
                        fontSize: "9px",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {item.issuer}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="film-caption">
              <span className="eyebrow">
                {item.category === "research" ? "ACADEMIC PUBLICATION" : "PROFESSIONAL CREDENTIAL"}
              </span>
              <h3>
                {item.credentialUrl ? (
                  <a href={item.credentialUrl} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                ) : (
                  <span>{item.title}</span>
                )}
              </h3>
              <p>{item.details}</p>
              {item.credentialUrl && (
                <a
                  className="text-link"
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: "12px", display: "inline-flex" }}
                >
                  View publication <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
