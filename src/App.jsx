import { useMemo, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useMode } from './hooks/useMode';
import FaultyTerminal from './components/FaultyTerminal/FaultyTerminal';
import BubbleMenu from './components/BubbleMenu/BubbleMenu';
import './components/BubbleMenu/BubbleMenu.css';
import EngineerHero from './sections/engineer/Hero';
import EngineerProjects from './sections/engineer/Projects';
import Hackathons from './sections/engineer/Hackathons';
import Community from './sections/engineer/Community';
import EngineerSkills from './sections/engineer/Skills';
import DesignerHero from './sections/designer/Hero';
import DesignerServices from './sections/designer/Services';
import DesignerGallery from './sections/designer/Gallery';
import DesignerSkills from './sections/designer/Skills';
import Contact from './sections/Contact';
import { engineerData } from './data/engineer';
import { designerData } from './data/designer';

export default function App() {
  const { mode, glitching, toggleMode } = useMode();
  const isEngineer = mode === 'engineer';
  const cursorRef = useRef(null);

  const [glitchIntensity, setGlitchIntensity] = useState(0);
  const gsapProxy = useRef({ value: 0 }).current;

  useEffect(() => {
    if (glitching) {
      gsap.to(gsapProxy, {
        value: 1,
        duration: 0.35,
        ease: 'power2.in',
        overwrite: 'auto',
        onUpdate: () => setGlitchIntensity(gsapProxy.value)
      });
    } else if (gsapProxy.value > 0) {
      gsap.to(gsapProxy, {
        value: 0,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto',
        onUpdate: () => setGlitchIntensity(gsapProxy.value)
      });
    }
  }, [glitching, gsapProxy]);

  const terminalGlitchAmount = 1 + glitchIntensity * 4;
  const terminalChromaticAberration = glitchIntensity * 0.05;
  const terminalFlickerAmount = 1 + glitchIntensity * 3;
  const terminalTint = isEngineer ? '#aabbdd' : '#ddaadd';

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleMagnetic = (e) => {
      const btn = e.target.closest('[data-magnetic]');
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };
    const handleMagneticLeave = (e) => {
      const btn = e.target.closest('[data-magnetic]');
      if (!btn) return;
      btn.style.transform = '';
    };
    document.addEventListener('mousemove', handleMagnetic);
    document.addEventListener('mouseleave', handleMagneticLeave);
    return () => {
      document.removeEventListener('mousemove', handleMagnetic);
      document.removeEventListener('mouseleave', handleMagneticLeave);
    };
  }, []);

  const navItems = useMemo(() => {
    if (isEngineer) {
      return [
        { label: 'Home', href: '#engineer-hero', ariaLabel: 'Home', rotation: -6, hoverStyles: { bgColor: '#3b82f6', textColor: '#fff' } },
        { label: 'Projects', href: '#engineer-projects', ariaLabel: 'Projects', rotation: 4, hoverStyles: { bgColor: '#06b6d4', textColor: '#fff' } },
        { label: 'Hackathons', href: '#engineer-hackathons', ariaLabel: 'Hackathons', rotation: -2, hoverStyles: { bgColor: '#8b5cf6', textColor: '#fff' } },
        { label: 'Community', href: '#engineer-community', ariaLabel: 'Community', rotation: 6, hoverStyles: { bgColor: '#10b981', textColor: '#fff' } },
        { label: 'Skills', href: '#engineer-skills', ariaLabel: 'Skills', rotation: -4, hoverStyles: { bgColor: '#f59e0b', textColor: '#fff' } },
        { label: 'Contact', href: '#contact', ariaLabel: 'Contact', rotation: 2, hoverStyles: { bgColor: '#ef4444', textColor: '#fff' } },
      ];
    }
    return [
      { label: 'Home', href: '#designer-hero', ariaLabel: 'Home', rotation: -6, hoverStyles: { bgColor: '#d946ef', textColor: '#fff' } },
      { label: 'Services', href: '#designer-services', ariaLabel: 'Services', rotation: 4, hoverStyles: { bgColor: '#f472b6', textColor: '#fff' } },
      { label: 'Portfolio', href: '#designer-gallery', ariaLabel: 'Portfolio', rotation: -2, hoverStyles: { bgColor: '#a855f7', textColor: '#fff' } },
      { label: 'Skills', href: '#designer-skills', ariaLabel: 'Skills', rotation: 6, hoverStyles: { bgColor: '#ec4899', textColor: '#fff' } },
      { label: 'Contact', href: '#contact', ariaLabel: 'Contact', rotation: 2, hoverStyles: { bgColor: '#ef4444', textColor: '#fff' } },
    ];
  }, [isEngineer]);

  const modeLogo = (
    <button
      onClick={toggleMode}
      className="mode-toggle-btn"
      aria-label={`Switch to ${isEngineer ? 'Designer' : 'Engineer'} mode`}
      title={`Switch to ${isEngineer ? 'Designer' : 'Engineer'} mode`}
    >
      <span className="mode-indicator" />
      <span className="mode-label">{isEngineer ? 'ENG' : 'DSN'}</span>
    </button>
  );

  return (
    <>
      <FaultyTerminal
        glitchAmount={terminalGlitchAmount}
        chromaticAberration={terminalChromaticAberration}
        flickerAmount={terminalFlickerAmount}
        tint={terminalTint}
        mouseReact={true}
        pageLoadAnimation={false}
        brightness={0.6}
      />

      {glitching && (
        <div className="glitch-overlay active">
          <div className="glitch-scanlines" />
          <div className="glitch-block" />
          <div className="glitch-rgb" />
        </div>
      )}

      <div ref={cursorRef} className="cursor-glow" />

      <BubbleMenu
        logo={modeLogo}
        items={navItems}
        menuBg={isEngineer ? '#1a1a2e' : '#2e1a2e'}
        menuContentColor="#e8e8ed"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.4}
        staggerDelay={0.08}
      />

      <main className={`app-main mode-${mode}`}>
        {isEngineer ? (
          <>
            <EngineerHero />
            <EngineerProjects />
            <Hackathons />
            <Community />
            <EngineerSkills />
            <Contact data={engineerData.contact} />
          </>
        ) : (
          <>
            <DesignerHero />
            <DesignerServices />
            <DesignerGallery />
            <DesignerSkills />
            <Contact data={designerData.contact} />
          </>
        )}
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} K Sai Murari. Built with React + GSAP + WebGL.</p>
      </footer>

      <style>{`
        .cursor-glow {
          position: fixed;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          pointer-events: none;
          z-index: -1;
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          transition: opacity 0.3s;
          opacity: 0.5;
        }

        .app-main {
          min-height: 100vh;
          transition: opacity 0.3s ease;
        }
        .app-footer {
          text-align: center;
          padding: 2rem;
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          border-top: 1px solid var(--border);
        }
        .app-footer:hover {
          border-color: var(--accent);
        }

        .section-title {
          font-family: var(--font-display);
        }
        .section-label {
          letter-spacing: 0.2em;
        }

        .mode-toggle-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          padding: 0;
          transition: color 0.3s;
        }
        .mode-toggle-btn:hover {
          color: var(--accent);
        }
        .mode-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 8px var(--accent-glow);
          transition: all 0.3s;
        }
        .mode-label {
          white-space: nowrap;
        }
        .bubble-menu .logo-content {
          width: auto !important;
          padding: 0 8px;
        }
      `}</style>
    </>
  );
}
