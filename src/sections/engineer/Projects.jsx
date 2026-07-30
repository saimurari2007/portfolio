import { engineerData } from '../../data/engineer';
import ScrollStack, { ScrollStackItem } from '../../components/ScrollStack/ScrollStack';
import '../../components/ScrollStack/ScrollStack.css';
import useReveal from '../../hooks/useReveal';

export default function EngineerProjects() {
  const labelRef = useReveal('up', 0);
  const titleRef = useReveal('up', 0.1);
  const subRef = useReveal('up', 0.2);

  return (
    <section id="engineer-projects" className="section engineer-projects">
      <p ref={labelRef} className="section-label">Projects</p>
      <h2 ref={titleRef} className="section-title">What I've Built</h2>
      <p ref={subRef} className="section-subtitle">Projects that sit at the intersection of AI, engineering, and design.</p>
      <ScrollStack useWindowScroll={true} itemDistance={120} baseScale={0.82} stackPosition="25%">
        {engineerData.projects.map((project, i) => (
          <ScrollStackItem key={project.id}>
            <div className="project-card">
              <div className="project-number">0{i + 1}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-highlights">
                {project.highlights.map((h, j) => (
                  <span key={j} className="project-tag">{h}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Live Demo →
              </a>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
      <style>{`
        .engineer-projects {
          min-height: 200vh;
        }
        .project-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 3rem;
          height: auto;
          min-height: 350px;
          backdrop-filter: blur(10px);
        }
        .project-number {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent);
          margin-bottom: 1rem;
        }
        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text);
        }
        .project-desc {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }
        .project-highlights {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .project-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          color: var(--accent-secondary);
        }
        .project-link {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent);
          font-weight: 600;
          transition: gap 0.3s;
        }
        .project-link:hover {
          gap: 0.25rem;
        }
        .scroll-stack-card {
          background: transparent !important;
          box-shadow: none !important;
          border-radius: 24px !important;
          height: auto !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        .scroll-stack-inner {
          padding: 20vh 5rem 100rem !important;
        }
        @media (max-width: 768px) {
          .project-card { padding: 1.5rem; }
          .scroll-stack-inner { padding: 20vh 1.5rem 100rem !important; }
        }
      `}</style>
    </section>
  );
}
