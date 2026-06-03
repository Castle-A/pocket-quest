import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import PhoneMockup from './PhoneMockup';

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function AppPreview({ t }) {
  const { ref, inView } = useInView();
  const [activeScreen, setActiveScreen] = useState(0);
  const screenKeys = ['home', 'quests'];

  return (
    <section className="py-24 md:py-32 bg-gray-50/50 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-pastel-green uppercase tracking-widest mb-3">
            App Preview
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">See it in action</h2>
          <p className="text-lg text-gray-500 max-w-lg mx-auto">
            A glimpse into your future focus companion.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Screen selector */}
          <div className="flex lg:flex-col gap-3">
            {['Home', 'Quests'].map((label, i) => (
              <button type="button"
                key={i}
                onClick={() => setActiveScreen(i)}
                className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeScreen === i
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Phone */}
          <motion.div
            key={activeScreen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <PhoneMockup variant="ios" screen={screenKeys[activeScreen]} t={t} />
            </motion.div>
          </motion.div>

          {/* Feature list */}
          <div className="flex-1 space-y-6">
            {activeScreen === 0
              ? [
                  {
                    title: 'Streak System',
                    desc: 'Build momentum with daily streaks. The longer you focus, the more you earn.',
                    color: '#A8E6CF',
                  },
                  {
                    title: 'Live Progress',
                    desc: 'See your quests update in real-time as you complete activities.',
                    color: '#A0C4FF',
                  },
                  {
                    title: 'Pixel Companion',
                    desc: 'Your avatar evolves with your habits. Take care of it by staying focused.',
                    color: '#FFF3B0',
                  },
                ].map((feat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="flex gap-4"
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ background: feat.color }}
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{feat.title}</h4>
                      <p className="text-sm text-gray-500">{feat.desc}</p>
                    </div>
                  </motion.div>
                ))
              : [
                  {
                    title: 'Daily Quests',
                    desc: 'Walk, read, meditate — every healthy action earns Quest Points.',
                    color: '#A8E6CF',
                  },
                  {
                    title: 'Smart Difficulty',
                    desc: 'Quests adapt to your level. Start small, grow big.',
                    color: '#A0C4FF',
                  },
                  {
                    title: 'Social Challenges',
                    desc: 'Compete with friends. Accountability is the best motivator.',
                    color: '#FFF3B0',
                  },
                ].map((feat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-4"
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ background: feat.color }}
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{feat.title}</h4>
                      <p className="text-sm text-gray-500">{feat.desc}</p>
                    </div>
                  </motion.div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
