import { useEffect, useRef } from 'react';

export default function useReveal(direction = 'up', delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = '0';
    el.style.transform = direction === 'up'
      ? 'translateY(60px)'
      : direction === 'left'
      ? 'translateX(-60px)'
      : direction === 'right'
      ? 'translateX(60px)'
      : 'scale(0.9)';
    el.style.transition = `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)`;
    el.style.transitionDelay = `${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0) translateX(0) scale(1)';
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay]);

  return ref;
}
