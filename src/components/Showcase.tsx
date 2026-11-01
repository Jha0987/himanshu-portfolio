"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, FileText, Award, Network, Cpu, Shield, Code, Maximize2, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Showcase() {
  const { credentials } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<"all" | "research" | "certifications">("all");
  const [activeModalItem, setActiveModalItem] = useState<(typeof credentials)[number] | null>(null);

  const filteredItems = credentials.filter((c) => {
    if (filter === "all") return true;
    return c.category === filter;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case "file":
        return <FileText size={22} />;
      case "network":
        return <Network size={22} />;
      case "cpu":
        return <Cpu size={22} />;
      case "shield":
        return <Shield size={22} />;
      case "code":
        return <Code size={22} />;
      default:
        return <Award size={22} />;
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
              {item.imageUrl ? (
                <button
                  type="button"
                  className="film-play"
                  onClick={() => setActiveModalItem(item)}
                  aria-label={`Enlarge ${item.title}`}
                  style={{
                    position: "relative",
                    cursor: "pointer",
                    textAlign: "left",
                    border: "none",
                    padding: 0,
                    width: "100%",
                    height: "100%",
                    display: "block",
                    background: "#080706",
                  }}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      objectFit: "contain",
                      padding: "8px",
                      background: "#0d0b09",
                    }}
                  />
                  <span
                    className="film-play-icon"
                    title="Click to view full certificate"
                    style={{ zIndex: 3 }}
                  >
                    <Maximize2 size={20} />
                  </span>
                  <span className="film-channel" style={{ zIndex: 3 }}>
                    {item.issuer}
                  </span>
                </button>
              ) : item.credentialUrl ? (
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
                    <span className="film-channel">
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
                    <span className="film-channel">
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
                {item.imageUrl ? (
                  <button
                    type="button"
                    onClick={() => setActiveModalItem(item)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      color: "inherit",
                      font: "inherit",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "block",
                      width: "100%",
                    }}
                  >
                    {item.title}
                  </button>
                ) : item.credentialUrl ? (
                  <a href={item.credentialUrl} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                ) : (
                  <span>{item.title}</span>
                )}
              </h3>
              <p>{item.details}</p>
              {item.imageUrl && (
                <button
                  type="button"
                  onClick={() => setActiveModalItem(item)}
                  className="text-link"
                  style={{
                    marginTop: "12px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "var(--blue)",
                    cursor: "pointer",
                  }}
                >
                  View full certificate <Maximize2 size={13} />
                </button>
              )}
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

      {/* Interactive Lightbox Modal for Certificate Preview */}
      {activeModalItem && activeModalItem.imageUrl && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeModalItem.title}
          onClick={() => setActiveModalItem(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(5, 5, 5, 0.88)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            animation: "fadeIn 0.25s ease-out",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "960px",
              width: "100%",
              maxHeight: "92vh",
              background: "#0c0b09",
              border: "1px solid rgba(238, 227, 203, 0.22)",
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8)",
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 22px",
                borderBottom: "1px solid rgba(238, 227, 203, 0.12)",
                background: "rgba(18, 16, 13, 0.8)",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    color: "var(--blue)",
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    display: "block",
                  }}
                >
                  {activeModalItem.issuer}
                </span>
                <h4
                  style={{
                    margin: "4px 0 0",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "var(--ink)",
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {activeModalItem.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                aria-label="Close certificate modal"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "var(--ink)",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image Display */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "64vh",
                background: "#050505",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px",
              }}
            >
              <Image
                src={activeModalItem.imageUrl}
                alt={activeModalItem.title}
                fill
                sizes="100vw"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Modal Footer */}
            <div
              style={{
                padding: "14px 22px",
                borderTop: "1px solid rgba(238, 227, 203, 0.12)",
                background: "rgba(18, 16, 13, 0.8)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "12.5px",
                  color: "var(--muted)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {activeModalItem.details}
              </p>
              <a
                href={activeModalItem.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="pill-link"
                style={{
                  fontSize: "11px",
                  padding: "8px 16px",
                  background: "rgba(255, 140, 89, 0.12)",
                  borderColor: "var(--blue)",
                  color: "var(--ink)",
                }}
              >
                Open Original in New Tab <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
