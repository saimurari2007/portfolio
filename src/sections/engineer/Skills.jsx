import { engineerData } from '../../data/engineer';
import useReveal from '../../hooks/useReveal';

export default function EngineerSkills() {
  const labelRef = useReveal('up', 0);
  const titleRef = useReveal('up', 0.1);
  const cloudRef = useReveal('up', 0.2);

  return (
    <section id="engineer-skills" className="section engineer-skills">
      <p ref={labelRef} className="section-label">Skills</p>
      <h2 ref={titleRef} className="section-title">Toolkit & Expertise</h2>
      <div ref={cloudRef} className="skills-cloud">
        {engineerData.skills.map((skill, i) => (
          <span key={i} className="skill-pill">{skill}</span>
        ))}
      </div>
      <style>{`
        .skills-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .skill-pill {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          background: var(--card-bg);
          border: 1px solid var(--border);
          color: var(--text);
          transition: all 0.3s;
        }
        .skill-pill:hover {
          border-color: var(--accent);
          background: var(--accent-glow);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
