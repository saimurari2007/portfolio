import { useState, useCallback, useEffect } from 'react';

export function useMode() {
  const [mode, setMode] = useState('engineer');
  const [glitching, setGlitching] = useState(false);

  const toggleMode = useCallback(() => {
    setGlitching(true);
    setTimeout(() => {
      setMode(prev => prev === 'engineer' ? 'designer' : 'engineer');
      setTimeout(() => setGlitching(false), 100);
    }, 400);
  }, []);

  const setModeDirect = useCallback((m) => {
    if (m === mode) return;
    setGlitching(true);
    setTimeout(() => {
      setMode(m);
      setTimeout(() => setGlitching(false), 100);
    }, 400);
  }, [mode]);

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
  }, [mode]);

  return { mode, glitching, toggleMode, setMode: setModeDirect };
}
