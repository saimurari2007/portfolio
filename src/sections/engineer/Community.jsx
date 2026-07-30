import { engineerData } from '../../data/engineer';
import useReveal from '../../hooks/useReveal';

export default function Community() {
  const labelRef = useReveal('up', 0);
  const titleRef = useReveal('up', 0.1);
  const subRef = useReveal('up', 0.2);
  const gridRef = useReveal('up', 0.3);

  return (
    <section id="engineer-community" className="section engineer-community">
      <p ref={labelRef} className="section-label">Community & Learning</p>
      <h2 ref={titleRef} className="section-title">Beyond the Code</h2>
      <p ref={subRef} className="section-subtitle">AI advocacy, conferences, and continuous learning.</p>
      <div ref={gridRef} className="community-grid">
        {engineerData.community.map((item, i) => (
          <div key={i} className={`community-card ${i === 0 ? 'featured' : ''}`}>
            <div className="community-header">
              <h3 className="community-title">{item.title}</h3>
              {item.org && <p className="community-org">{item.org}</p>}
              <p className="community-date">{item.date}</p>
            </div>
            <ul className="community-details">
              {item.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <style>{`
        .community-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1rem;
        }
        .community-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s;
        }
        .community-card.featured {
          border-color: var(--accent);
          background: rgba(255,255,255,0.04);
          grid-column: 1 / -1;
        }
        .community-card:hover { border-color: var(--accent); }
        .community-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        .community-org {
          font-size: 0.85rem;
          color: var(--accent-secondary);
          margin-bottom: 0.15rem;
        }
        .community-date {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }
        .community-details {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .community-details li {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          padding-left: 1rem;
          position: relative;
        }
        .community-details li::before {
          content: '›';
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: 700;
        }
        @media (max-width: 768px) {
          .community-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
