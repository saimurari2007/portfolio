import { designerData } from '../../data/designer';
import useReveal from '../../hooks/useReveal';

export default function DesignerHero() {
  const { name, tagline, subtitle } = designerData.hero;
  const titleRef = useReveal('up', 0);
  const tagRef = useReveal('up', 0.1);
  const subRef = useReveal('up', 0.2);
  const actionsRef = useReveal('up', 0.3);

  return (
    <section id="designer-hero" className="section designer-hero">
      <div className="hero-content">
        <h1 ref={titleRef} className="hero-name">{name}</h1>
        <h2 ref={tagRef} className="hero-tagline">{tagline}</h2>
        <p ref={subRef} className="hero-subtitle">{subtitle}</p>
        <div ref={actionsRef} className="hero-actions">
          <a href="#designer-services" className="btn-primary" data-magnetic>View Services</a>
          <a href="#contact" className="btn-secondary" data-magnetic>Get in Touch</a>
        </div>
      </div>
      <style>{`
        .designer-hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 120px;
        }
        .designer-hero .hero-name {
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
        .designer-hero .hero-tagline {
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          color: var(--accent-secondary);
          font-weight: 500;
          margin-bottom: 1.5rem;
        }
        .designer-hero .hero-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 600px;
          margin-bottom: 2.5rem;
        }
        .designer-hero .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .designer-hero .btn-primary, .designer-hero .btn-secondary {
          padding: 0.85rem 2rem;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
        }
        .designer-hero .btn-primary {
          background: var(--accent);
          color: #fff;
          border: none;
        }
        .designer-hero .btn-primary:hover {
          box-shadow: 0 0 30px var(--accent-glow);
          transform: translateY(-2px);
        }
        .designer-hero .btn-secondary {
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border);
        }
        .designer-hero .btn-secondary:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
      `}</style>
    </section>
  );
}
