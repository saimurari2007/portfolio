import { engineerData } from '../../data/engineer';
import useReveal from '../../hooks/useReveal';

export default function Hackathons() {
  const labelRef = useReveal('up', 0);
  const titleRef = useReveal('up', 0.1);
  const subRef = useReveal('up', 0.2);
  const listRef = useReveal('up', 0.3);

  return (
    <section id="engineer-hackathons" className="section engineer-hackathons">
      <p ref={labelRef} className="section-label">Hackathons</p>
      <h2 ref={titleRef} className="section-title">Competition History</h2>
      <p ref={subRef} className="section-subtitle">From first-timer to finalist — each sprint sharpened the craft.</p>
      <div ref={listRef} className="hackathon-list">
        {engineerData.hackathons.map((h, i) => (
          <div key={i} className={`hackathon-card ${h.highlight ? 'highlight' : ''}`}>
            <div className="hackathon-left">
              <span className="hackathon-index">0{i + 1}</span>
            </div>
            <div className="hackathon-body">
              <h3 className="hackathon-event">{h.event}</h3>
              <p className="hackathon-date">{h.date}</p>
              {h.team && <p className="hackathon-team">Team: {h.team}</p>}
              <p className="hackathon-desc">{h.description}</p>
              {h.result && (
                <span className="hackathon-result">
                  {h.highlight ? '★ ' : ''}{h.result}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .engineer-hackathons { padding-top: 2rem; }
        .hackathon-list {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: var(--border);
          border-radius: 16px;
          overflow: hidden;
        }
        .hackathon-card {
          display: flex;
          gap: 1.5rem;
          padding: 1.5rem 2rem;
          background: var(--card-bg);
          transition: background 0.3s;
        }
        .hackathon-card.highlight {
          border-left: 3px solid var(--accent);
          background: rgba(255,255,255,0.04);
        }
        .hackathon-card:hover { background: rgba(255,255,255,0.06); }
        .hackathon-left {
          min-width: 3rem;
          display: flex;
          align-items: flex-start;
          padding-top: 0.2rem;
        }
        .hackathon-index {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .hackathon-body { flex: 1; }
        .hackathon-event {
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        .hackathon-date {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }
        .hackathon-team {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }
        .hackathon-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }
        .hackathon-result {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          padding: 0.3rem 0.75rem;
          border-radius: 6px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          color: var(--accent-secondary);
        }
        @media (max-width: 768px) {
          .hackathon-card { flex-direction: column; gap: 0.5rem; padding: 1.25rem; }
          .hackathon-left { min-width: auto; }
        }
      `}</style>
    </section>
  );
}
