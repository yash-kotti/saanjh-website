import { useState, useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

/**
 * Returns a scrambled version of text that resolves to the final string.
 * Trigger by calling `scramble()`.
 */
export function useTextScramble(finalText: string, duration = 1200) {
  const [display, setDisplay] = useState(finalText);
  const frameRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  function scramble() {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    startRef.current = performance.now();

    function step(now: number) {
      const elapsed = now - (startRef.current ?? now);
      const progress = Math.min(elapsed / duration, 1);

      // Progressively reveal characters left-to-right
      const revealed = Math.floor(progress * finalText.length);
      const scrambled = finalText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (i < revealed) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');

      setDisplay(scrambled);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(finalText);
      }
    }

    frameRef.current = requestAnimationFrame(step);
  }

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return { display, scramble };
}
