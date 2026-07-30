import useReveal from '../hooks/useReveal';

export default function Contact({ data }) {
  const labelRef = useReveal('up', 0);
  const titleRef = useReveal('up', 0.1);
  const subRef = useReveal('up', 0.2);
  const linksRef = useReveal('up', 0.3);

  return (
    <section id="contact" className="section contact-section">
      <p ref={labelRef} className="section-label">Contact</p>
      <h2 ref={titleRef} className="section-title">Let's Connect</h2>
      <p ref={subRef} className="section-subtitle">
        Whether you have a project idea, freelance opportunity, or just want to say hi — reach out.
      </p>
      <div ref={linksRef} className="contact-links">
        <a href={`mailto:${data.email1}`} className="contact-card">
          <span className="contact-icon">✉</span>
          <span className="contact-label">{data.email1}</span>
        </a>
        <a href={`mailto:${data.email2}`} className="contact-card">
          <span className="contact-icon">✉</span>
          <span className="contact-label">{data.email2}</span>
        </a>
        <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
          <span className="contact-icon">in</span>
          <span className="contact-label">linkedin.com/in/k-sai-murari</span>
        </a>
      </div>
      <style>{`
        .contact-section { padding-bottom: 5rem; }
        .contact-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .contact-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          background: var(--card-bg);
          border: 1px solid var(--border);
          color: var(--text);
          font-size: 0.9rem;
          transition: all 0.3s;
          text-decoration: none;
        }
        .contact-card:hover {
          border-color: var(--accent);
          background: var(--accent-glow);
          transform: translateY(-2px);
        }
        .contact-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--accent);
          flex-shrink: 0;
        }
        .contact-label {
          font-family: var(--font-mono);
          font-size: 0.85rem;
        }
        @media (max-width: 768px) {
          .contact-links { flex-direction: column; }
          .contact-card { width: 100%; }
        }
      `}</style>
    </section>
  );
}
