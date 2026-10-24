"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Projects() {
  const { projects, moreWork } = PORTFOLIO_DATA;
  const [activeScreenIndex, setActiveScreenIndex] = useState<{ [key: string]: number }>({
    "ai-mock-interviewer": 0,
    "kanad-telecom-noc": 0,
  });

  const handleNextImage = (projectId: string, max: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveScreenIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % max,
    }));
  };

  return (
    <section id="work" className="selected-work chapter solid-section">
      <div className="section-label">
        <span>
          <span className="signal-text">
            <span className="sr-only">02 / SELECTED WORK</span>
            <span aria-hidden="true" className="signal-text-size">
              02 / SELECTED WORK
            </span>
            <span aria-hidden="true" className="signal-text-live">
              02 / SELECTED WORK
            </span>
          </span>
        </span>
        <span>BUILT. TESTED. DEPLOYED.</span>
      </div>

      <div className="selected-heading" data-editorial-reveal="true">
        <h2>
          Ideas are a start.
          <br />
          <em>This is the work.</em>
        </h2>
        <p>
          From real-time operations dashboards to AI-driven interview evaluation platforms.
          <br />
          A few things I’ve helped bring to life.
        </p>
      </div>

      <div className="work-gallery">
        {/* Project 1: AI Mock Interviewer */}
        {projects[0] && (
          <article className="work-piece work-piece-lms" data-editorial-reveal="true">
            <a
              className="work-artwork"
              aria-label={`Explore ${projects[0].title}`}
              href={projects[0].demoUrl || projects[0].githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-visual real-work-visual platform-art">
                <div className="work-browser-bar">
                  <span>
                    <i></i>
                    <i></i>
                    <i></i>
                  </span>
                  <span>{projects[0].domain}</span>
                  <span>↗</span>
                </div>

                <div className="project-image-container" style={{ position: "relative", width: "100%", height: "100%", minHeight: "360px" }}>
                  <Image
                    src={projects[0].images[activeScreenIndex["ai-mock-interviewer"] || 0] || "/images/ai-home.png"}
                    alt={projects[0].title}
                    fill
                    sizes="(max-width: 700px) 90vw, (max-width: 1100px) 85vw, 80vw"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    priority
                  />
                  {projects[0].images.length > 1 && (
                    <button
                      type="button"
                      className="screenshot-toggle-pill"
                      onClick={(e) => handleNextImage("ai-mock-interviewer", projects[0].images.length, e)}
                      style={{
                        position: "absolute",
                        bottom: "16px",
                        right: "16px",
                        background: "rgba(10, 10, 10, 0.85)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "var(--ink)",
                        borderRadius: "20px",
                        padding: "6px 14px",
                        fontSize: "11px",
                        backdropFilter: "blur(8px)",
                        cursor: "pointer",
                        zIndex: 10,
                      }}
                    >
                      View screen {(activeScreenIndex["ai-mock-interviewer"] || 0) + 1}/{projects[0].images.length} ↻
                    </button>
                  )}
                </div>

                <div className="work-artifact-label">
                  <span>{projects[0].category.toUpperCase()}</span>
                  <span>{projects[0].badge}</span>
                </div>
              </div>
              <span className="work-artwork-arrow">
                <ArrowUpRight size={24} />
              </span>
            </a>

            <div className="work-caption">
              <span className="work-number">{projects[0].number}</span>
              <div>
                <span className="eyebrow">{projects[0].category}</span>
                <h3>
                  <a href={projects[0].demoUrl || projects[0].githubUrl} target="_blank" rel="noopener noreferrer">
                    {projects[0].title}
                  </a>
                </h3>
                <p>{projects[0].description}</p>
                <div style={{ marginTop: "12px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {projects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "11px",
                        fontFamily: "var(--font-mono)",
                        color: "var(--muted)",
                        background: "rgba(255,255,255,0.05)",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        border: "1px solid var(--line)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                {projects[0].demoUrl && (
                  <a className="text-link" href={projects[0].demoUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                )}
                {projects[0].githubUrl && (
                  <a className="text-link" href={projects[0].githubUrl} target="_blank" rel="noopener noreferrer">
                    Source Code <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </article>
        )}

        {/* Project 2: Telecom Deployment & NOC Management System */}
        {projects[1] && (
          <article className="work-piece work-piece-kodr" data-editorial-reveal="true">
            <a
              className="work-artwork"
              aria-label={`Explore ${projects[1].title}`}
              href={projects[1].demoUrl || projects[1].githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-visual real-work-visual bootcamp-art">
                <div className="work-browser-bar">
                  <span>
                    <i></i>
                    <i></i>
                    <i></i>
                  </span>
                  <span>{projects[1].domain}</span>
                  <span>↗</span>
                </div>

                <div className="project-image-container" style={{ position: "relative", width: "100%", height: "100%", minHeight: "360px" }}>
                  <Image
                    src={projects[1].images[activeScreenIndex["kanad-telecom-noc"] || 0] || "/images/kanad-dashboard.png"}
                    alt={projects[1].title}
                    fill
                    sizes="(max-width: 700px) 90vw, (max-width: 1100px) 85vw, 80vw"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                  {projects[1].images.length > 1 && (
                    <button
                      type="button"
                      className="screenshot-toggle-pill"
                      onClick={(e) => handleNextImage("kanad-telecom-noc", projects[1].images.length, e)}
                      style={{
                        position: "absolute",
                        bottom: "16px",
                        right: "16px",
                        background: "rgba(10, 10, 10, 0.85)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "var(--ink)",
                        borderRadius: "20px",
                        padding: "6px 14px",
                        fontSize: "11px",
                        backdropFilter: "blur(8px)",
                        cursor: "pointer",
                        zIndex: 10,
                      }}
                    >
                      View screen {(activeScreenIndex["kanad-telecom-noc"] || 0) + 1}/{projects[1].images.length} ↻
                    </button>
                  )}
                </div>

                <div className="work-artifact-label">
                  <span>{projects[1].category.toUpperCase()}</span>
                  <span>{projects[1].badge}</span>
                </div>
              </div>
              <span className="work-artwork-arrow">
                <ArrowUpRight size={24} />
              </span>
            </a>

            <div className="work-caption">
              <span className="work-number">{projects[1].number}</span>
              <div>
                <span className="eyebrow">{projects[1].category}</span>
                <h3>
                  <a href={projects[1].demoUrl || projects[1].githubUrl} target="_blank" rel="noopener noreferrer">
                    {projects[1].title}
                  </a>
                </h3>
                <p>{projects[1].description}</p>
                <div style={{ marginTop: "12px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {projects[1].tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "11px",
                        fontFamily: "var(--font-mono)",
                        color: "var(--muted)",
                        background: "rgba(255,255,255,0.05)",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        border: "1px solid var(--line)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                {projects[1].demoUrl && (
                  <a className="text-link" href={projects[1].demoUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                )}
                {projects[1].githubUrl && (
                  <a className="text-link" href={projects[1].githubUrl} target="_blank" rel="noopener noreferrer">
                    Source Code <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </article>
        )}

        {/* Project 3: Job Search Portal */}
        {projects[2] && (
          <article className="work-piece work-piece-javascript" data-editorial-reveal="true">
            <a
              className="work-artwork"
              aria-label={`Explore ${projects[2].title}`}
              href={projects[2].githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-visual course-art" style={{ background: "linear-gradient(135deg, #121316 0%, #08090a 100%)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "40px", textAlign: "center" }}>
                <div className="work-browser-bar" style={{ width: "100%", position: "absolute", top: 0, left: 0 }}>
                  <span>
                    <i></i>
                    <i></i>
                    <i></i>
                  </span>
                  <span>{projects[2].domain}</span>
                  <span>↗</span>
                </div>
                <div style={{ marginTop: "30px" }}>
                  <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--blue)", letterSpacing: "2px" }}>
                    CAREER PLATFORM &amp; WORKFLOWS
                  </span>
                  <h3 style={{ fontSize: "28px", margin: "14px 0", color: "var(--ink)", fontWeight: "500" }}>
                    Job Search Portal
                  </h3>
                  <p style={{ maxWidth: "440px", margin: "0 auto", color: "var(--muted)", fontSize: "14px" }}>
                    React · Vite · Tailwind CSS · REST APIs · Responsive Filtering
                  </p>
                </div>
                <div className="work-artifact-label">
                  <span>{projects[2].category.toUpperCase()}</span>
                  <span>{projects[2].badge}</span>
                </div>
              </div>
              <span className="work-artwork-arrow">
                <ArrowUpRight size={24} />
              </span>
            </a>

            <div className="work-caption">
              <span className="work-number">{projects[2].number}</span>
              <div>
                <span className="eyebrow">{projects[2].category}</span>
                <h3>
                  <a href={projects[2].githubUrl} target="_blank" rel="noopener noreferrer">
                    {projects[2].title}
                  </a>
                </h3>
                <p>{projects[2].description}</p>
                <div style={{ marginTop: "12px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {projects[2].tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "11px",
                        fontFamily: "var(--font-mono)",
                        color: "var(--muted)",
                        background: "rgba(255,255,255,0.05)",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        border: "1px solid var(--line)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                {projects[2].githubUrl && (
                  <a className="text-link" href={projects[2].githubUrl} target="_blank" rel="noopener noreferrer">
                    Source Code <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </article>
        )}
      </div>

      {/* More ways I build */}
      <div className="work-more" data-editorial-reveal="true">
        <span className="eyebrow">MORE WAYS I BUILD</span>

        {moreWork.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <small>{item.number} / {item.category}</small>
              {item.title} <em>{item.emphasis}</em>
            </span>
            <ArrowUpRight size={24} />
          </a>
        ))}

        <details>
          <summary>
            <span>Inside the architecture</span>
            <span aria-hidden="true">+</span>
          </summary>
          <div className="workbench-detail">
            <p>
              Architected with Next.js, Node.js, Express, Socket.IO, PostgreSQL, MongoDB, and Docker.
              Emphasizing clean data contracts, reliable state transitions, relational integrity with
              Drizzle ORM, and responsive user interfaces.
            </p>
            <a
              className="text-link"
              href="https://github.com/Jha0987"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inspect all repositories on GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </details>

        <a
          className="all-work-link"
          href="https://github.com/Jha0987"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore all repositories on GitHub <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
