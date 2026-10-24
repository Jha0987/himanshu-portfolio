import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Experience() {
  const { journeyTimeline } = PORTFOLIO_DATA;

  return (
    <section id="journey" className="journey chapter solid-section">
      <div className="section-label">
        <span>07 / CAREER &amp; EXPERIENCE</span>
        <span>A JOURNEY IN MOTION</span>
      </div>

      <div className="journey-grid">
        <h2 data-reveal="true">
          Started with curiosity.
          <br />
          <em>Kept building forward.</em>
        </h2>

        <div className="timeline">
          {journeyTimeline.map((item, idx) => (
            <article key={idx} data-reveal="true">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
