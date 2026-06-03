import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/* ---- Pixel Art Character (16x16 grid) ---- */
const PIXEL_SIZE = 4;

// Character states: idle, happy, excited, sleeping
const CHARACTERS = {
  idle: {
    pixels: [
      // Head
      [4, 2, 8],
      [3, 3, 10],
      [2, 4, 12],
      [2, 5, 4],
      [7, 5, 2],
      [10, 5, 4],
      [2, 6, 4],
      [7, 6, 2],
      [10, 6, 4],
      [2, 7, 12],
      [3, 8, 10],
      [4, 9, 8],
      // Body
      [5, 10, 6],
      [4, 11, 8],
      [4, 12, 8],
      [5, 13, 6],
      // Legs
      [4, 14, 3],
      [9, 14, 3],
      [4, 15, 3],
      [9, 15, 3],
    ],
    blinkAt: 3000,
  },
  happy: {
    pixels: [
      [4, 2, 8],
      [3, 3, 10],
      [2, 4, 12],
      [2, 5, 4],
      [8, 5, 2],
      [10, 5, 4],
      [2, 6, 4],
      [8, 6, 2],
      [10, 6, 4],
      [2, 7, 12],
      [3, 8, 10],
      [4, 9, 8],
      [5, 10, 6],
      [4, 11, 8],
      [4, 12, 8],
      [5, 13, 6],
      [4, 14, 3],
      [9, 14, 3],
      [4, 15, 3],
      [9, 15, 3],
    ],
    blinkAt: null,
  },
  excited: {
    pixels: [
      [4, 1, 8],
      [3, 2, 10],
      [2, 3, 12],
      [2, 4, 4],
      [8, 4, 2],
      [10, 4, 4],
      [2, 5, 4],
      [7, 5, 1],
      [9, 5, 1],
      [10, 5, 4],
      [2, 6, 12],
      [3, 7, 10],
      [4, 8, 8],
      [5, 9, 6],
      [4, 10, 8],
      [3, 11, 10],
      [3, 12, 10],
      [4, 13, 8],
      [3, 14, 3],
      [10, 14, 3],
      [3, 15, 3],
      [10, 15, 3],
      // Arms up
      [1, 8, 2],
      [1, 9, 2],
      [12, 8, 2],
      [13, 9, 2],
    ],
    blinkAt: null,
  },
  level2: {
    // Bigger, more detailed
    pixels: [
      [4, 2, 8],
      [3, 3, 10],
      [2, 4, 12],
      [2, 5, 4],
      [7, 5, 2],
      [10, 5, 4],
      [2, 6, 4],
      [7, 6, 2],
      [10, 6, 4],
      [2, 7, 12],
      [3, 8, 10],
      [4, 9, 8],
      [5, 10, 6],
      [4, 11, 8],
      [4, 12, 8],
      [5, 13, 6],
      [4, 14, 3],
      [9, 14, 3],
      [4, 15, 3],
      [9, 15, 3],
      // Crown
      [5, 0, 6],
      [4, 1, 1],
      [6, 1, 1],
      [8, 1, 1],
      [10, 1, 1],
    ],
    blinkAt: 4000,
  },
};

function PixelArt({ state = 'idle', color = '#A8E6CF', size = 1 }) {
  const char = CHARACTERS[state] || CHARACTERS.idle;

  return (
    <svg
      aria-hidden="true"
      role="presentation"
      width={16 * PIXEL_SIZE * size}
      height={16 * PIXEL_SIZE * size}
      viewBox={`0 0 ${16 * PIXEL_SIZE} ${16 * PIXEL_SIZE}`}
      style={{ imageRendering: 'pixelated' }}
    >
      {char.pixels.map(([x, y, w]) => (
        <rect
          key={`pixel-${x}-${y}`}
          x={x * PIXEL_SIZE}
          y={y * PIXEL_SIZE}
          width={w * PIXEL_SIZE}
          height={PIXEL_SIZE}
          fill={color}
          rx={0}
        />
      ))}
    </svg>
  );
}

export default function PixelCharacter() {
  const [state, setState] = useState('idle');
  const [level, setLevel] = useState(1);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringCta, setIsHoveringCta] = useState(false);
  const charRef = useRef(null);

  // Track mouse for character gaze
  useEffect(() => {
    const handleMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Scroll-based evolution
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);

      if (scrollPercent > 0.7) {
        setState('excited');
        setLevel(3);
      } else if (scrollPercent > 0.35) {
        setState('happy');
        setLevel(2);
      } else {
        setState('idle');
        setLevel(1);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // CTA hover reaction
  useEffect(() => {
    const handleCtaEnter = () => {
      setIsHoveringCta(true);
      setState('excited');
    };
    const handleCtaLeave = () => {
      setIsHoveringCta(false);
    };
    document.querySelectorAll('[data-cta]').forEach((el) => {
      el.addEventListener('mouseenter', handleCtaEnter);
      el.addEventListener('mouseleave', handleCtaLeave);
    });
    return () =>
      document.querySelectorAll('[data-cta]').forEach((el) => {
        el.removeEventListener('mouseenter', handleCtaEnter);
        el.removeEventListener('mouseleave', handleCtaLeave);
      });
  }, []);

  // Blink timer
  useEffect(() => {
    const char = CHARACTERS[state];
    if (!char.blinkAt) return;
    const timer = setTimeout(() => {
      setState('idle');
    }, char.blinkAt);
    return () => clearTimeout(timer);
  }, [state]);

  // Calculate gaze direction
  const getGazeOffset = () => {
    if (!charRef.current) return { x: 0, y: 0 };
    const rect = charRef.current.getBoundingClientRect();
    const charCenterX = rect.left + rect.width / 2;
    const charCenterY = rect.top + rect.height / 2;
    const dx = mousePos.x - charCenterX;
    const dy = mousePos.y - charCenterY;
    const maxOffset = 3;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist === 0) return { x: 0, y: 0 };
    return {
      x: (dx / dist) * Math.min(maxOffset, dist * 0.01),
      y: (dy / dist) * Math.min(maxOffset, dist * 0.01),
    };
  };

  const gaze = getGazeOffset();
  const charState = level >= 3 ? 'level2' : state;

  return (
    <motion.div
      ref={charRef}
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 1 }}
    >
      <motion.div
        className="relative"
        animate={{
          y: [0, -4, 0],
          rotate: isHoveringCta ? [0, -5, 5, -5, 0] : 0,
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 0.5 },
        }}
      >
        <motion.div
          animate={{ x: gaze.x, y: gaze.y }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <PixelArt
            state={charState}
            color={level >= 3 ? '#A0C4FF' : '#A8E6CF'}
            size={level >= 2 ? 3 : 2.5}
          />
        </motion.div>

        {/* Level badge */}
        <AnimatePresence>
          {level >= 2 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
              style={{
                background: level >= 3 ? 'linear-gradient(135deg, #A0C4FF, #A8E6CF)' : '#A8E6CF',
              }}
            >
              {level}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Speech bubble on CTA hover */}
        <AnimatePresence>
          {isHoveringCta && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-4 py-2 shadow-lg border border-gray-100 whitespace-nowrap"
            >
              <span className="text-sm font-semibold text-gray-800">Let&apos;s go! ✨</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
