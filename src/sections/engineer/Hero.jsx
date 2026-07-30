import { engineerData } from '../../data/engineer';
import useReveal from '../../hooks/useReveal';

export default function EngineerHero() {
  const { name, tagline, subtitle } = engineerData.hero;
  const titleRef = useReveal('up', 0.1);
  const gsaRef = useReveal('up', 0);
  const tagRef = useReveal('up', 0.2);
  const subRef = useReveal('up', 0.3);
  const actionsRef = useReveal('up', 0.4);

  return (
    <section id="engineer-hero" className="section engineer-hero">
      <div className="hero-grid-bg" />
      <div className="hero-content">
        <p ref={gsaRef} className="hero-gsa">Google Gemini Student Ambassador (GID: 4215)</p>
        <h1 ref={titleRef} className="hero-name">{name}</h1>
        <h2 ref={tagRef} className="hero-tagline">{tagline}</h2>
        <p ref={subRef} className="hero-subtitle">{subtitle}</p>
        <div ref={actionsRef} className="hero-actions">
          <a href="#engineer-projects" className="btn-primary" data-magnetic>View Projects</a>
          <a href="#contact" className="btn-secondary" data-magnetic>Get in Touch</a>
        </div>
      </div>
      <style>{`
        .engineer-hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 120px;
          position: relative;
          overflow: hidden;
        }
        .hero-grid-bg {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image:
            linear-gradient(var(--accent) 1px, transparent 1px),
            linear-gradient(90deg, var(--accent) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .hero-content { max-width: 800px; position: relative; z-index: 1; }
        .hero-gsa {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent);
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }
        .hero-name {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 7vw, 5rem);
          font-weight: 700;
          line-height: 1.05;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, var(--text) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-tagline {
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          color: var(--accent-secondary);
          font-weight: 500;
          margin-bottom: 1.5rem;
        }
        .hero-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 600px;
          margin-bottom: 2.5rem;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .btn-primary, .btn-secondary {
          padding: 0.85rem 2rem;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
        }
        .btn-primary {
          background: var(--accent);
          color: #fff;
          border: none;
        }
        .btn-primary:hover {
          box-shadow: 0 0 30px var(--accent-glow);
          transform: translateY(-2px);
        }
        .btn-secondary {
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border);
        }
        .btn-secondary:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        @media (max-width: 768px) {
          .hero-grid-bg { background-size: 30px 30px; }
        }
      `}</style>
    </section>
  );
}
