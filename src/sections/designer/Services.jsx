import { designerData } from '../../data/designer';
import useReveal from '../../hooks/useReveal';

export default function DesignerServices() {
  const labelRef = useReveal('up', 0);
  const titleRef = useReveal('up', 0.1);
  const subRef = useReveal('up', 0.2);
  const gridRef = useReveal('up', 0.3);

  return (
    <section id="designer-services" className="section designer-services">
      <p ref={labelRef} className="section-label">Services</p>
      <h2 ref={titleRef} className="section-title">What I Offer</h2>
      <p ref={subRef} className="section-subtitle">Strategic visual design that helps brands and individuals actually communicate.</p>
      <div ref={gridRef} className="services-grid">
        {designerData.services.map((service, i) => (
          <div key={i} className="service-card">
            <span className="service-number">0{i + 1}</span>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
      </div>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }
        .service-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s;
        }
        .service-card:hover {
          border-color: var(--accent);
          transform: translateY(-4px);
        }
        .service-number {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent);
          margin-bottom: 0.75rem;
          display: block;
        }
        .service-title {
          font-size: 1.15rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        .service-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
