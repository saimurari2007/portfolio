import { useState, useEffect, useRef } from 'react';
import InfiniteMenu from '../../components/InfiniteMenu/InfiniteMenu';
import '../../components/InfiniteMenu/InfiniteMenu.css';
import portfolioImages from '../../data/portfolioImages.json';
import useReveal from '../../hooks/useReveal';

const FALLBACK_COUNT = 16;
const fallbackImages = Array.from({ length: FALLBACK_COUNT }, (_, i) => ({
  image: `https://picsum.photos/seed/murari${i + 1}/900/900`,
  title: `Portfolio ${i + 1}`,
  description: 'Portfolio image',
  link: '#',
}));

function StaticGridFallback({ images }) {
  return (
    <div className="gallery-fallback">
      <div className="fallback-grid">
        {images.map((item, i) => (
          <div key={i} className="fallback-item">
            <img src={item.image} alt={item.title || `Portfolio ${i}`} loading="lazy" />
            {item.title && (
              <div className="fallback-info">
                <h4>{item.title}</h4>
                {item.description && <p>{item.description}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DesignerGallery() {
  const [webgl, setWebgl] = useState(true);
  const checkedRef = useRef(false);
  const images = portfolioImages.length > 0 ? portfolioImages : fallbackImages;
  const labelRef = useReveal('up', 0);
  const titleRef = useReveal('up', 0.1);
  const subRef = useReveal('up', 0.2);

  useEffect(() => {
    if (checkedRef.current) return;
    checkedRef.current = true;
    const testCanvas = document.createElement('canvas');
    const gl = testCanvas.getContext('webgl2');
    if (!gl) setWebgl(false);
  }, []);

  return (
    <section id="designer-gallery" className="section designer-gallery">
      <p ref={labelRef} className="section-label">Portfolio</p>
      <h2 ref={titleRef} className="section-title">Visual Work</h2>
      <p ref={subRef} className="section-subtitle">Posters, apparel, branding, and product redesigns — dragged into view.</p>
      <div className="gallery-container">
        {webgl && images.length > 0 ? (
          <InfiniteMenu items={images} scale={1.0} />
        ) : images.length > 0 ? (
          <StaticGridFallback images={images} />
        ) : (
          <p className="gallery-loading">No portfolio images loaded.</p>
        )}
      </div>
      <style>{`
        .designer-gallery { min-height: 100vh; }
        .gallery-container {
          width: 100%;
          height: 70vh;
          border-radius: 24px;
          overflow: hidden;
          background: var(--card-bg);
          border: 1px solid var(--border);
          position: relative;
        }
        .gallery-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.85rem;
        }
        .gallery-fallback {
          width: 100%;
          height: 100%;
          overflow-y: auto;
          padding: 1.5rem;
        }
        .fallback-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
        }
        .fallback-item {
          border-radius: 12px;
          overflow: hidden;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          transition: transform 0.3s;
        }
        .fallback-item:hover { transform: scale(1.02); }
        .fallback-item img {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
        }
        .fallback-info {
          padding: 0.75rem;
        }
        .fallback-info h4 {
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        .fallback-info p {
          font-size: 0.7rem;
          color: var(--text-secondary);
        }
        @media (max-width: 768px) {
          .gallery-container { height: 50vh; }
          .fallback-grid { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); }
        }
      `}</style>
    </section>
  );
}
