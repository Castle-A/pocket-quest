import { useEffect, useRef, useState } from 'react';

export default function CursorAura() {
  const auraRef = useRef(null);
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [isIdle, setIsIdle] = useState(true);
  const [ctaHover, setCtaHover] = useState(false);
  const rafRef = useRef(null);
  const targetRef = useRef({ x: -500, y: -500 });
  const idleTimer = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setIsIdle(false);

      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setIsIdle(true), 2000);
    };

    const handleCtaEnter = () => setCtaHover(true);
    const handleCtaLeave = () => setCtaHover(false);

    // Smooth follow with lerp
    const animate = () => {
      setPos(prev => ({
        x: prev.x + (targetRef.current.x - prev.x) * 0.08,
        y: prev.y + (targetRef.current.y - prev.y) * 0.08,
      }));
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.querySelectorAll('[data-cta]').forEach(el => {
      el.addEventListener('mouseenter', handleCtaEnter);
      el.addEventListener('mouseleave', handleCtaLeave);
    });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(rafRef.current);
      clearTimeout(idleTimer.current);
    };
  }, []);

  return (
    <div
      ref={auraRef}
      className={`cursor-aura ${ctaHover ? 'cta-hover' : ''}`}
      style={{
        left: pos.x,
        top: pos.y,
        opacity: isIdle ? 0 : 1,
      }}
    />
  );
}
