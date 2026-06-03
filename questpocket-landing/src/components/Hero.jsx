import { motion } from 'framer-motion';
import Countdown from './Countdown';
import PhoneMockup from './PhoneMockup';

export default function Hero({ t }) {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            {/* Beta badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-yellow/30 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-pastel-green" />
              <span className="text-sm font-medium text-gray-600">{t.hero.badge}</span>
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-gray-900 mb-6">
              {t.hero.title.split(' ').map((word, i) => (
                <span key={i}>
                  {i === 1 ? (
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                      className="inline-block bg-gradient-to-r from-pastel-blue via-pastel-green to-pastel-yellow bg-clip-text text-transparent"
                    >
                      {word}
                    </motion.span>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                      className="inline-block"
                    >
                      {word}{' '}
                    </motion.span>
                  )}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-md"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <button type="button"
                data-cta
                onClick={() =>
                  document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group relative px-8 py-4 bg-gray-900 text-white font-semibold text-lg rounded-2xl hover:shadow-2xl hover:shadow-pastel-blue/20 hover:-translate-y-1 transition-all duration-300 active:translate-y-0"
              >
                {t.hero.cta}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pastel-blue/20 to-pastel-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12"
            >
              <Countdown t={t} />
            </motion.div>
          </motion.div>

          {/* RIGHT: Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center items-center"
          >
            {/* Background blob */}
            <div
              className="absolute w-[500px] h-[500px] rounded-full opacity-30"
              style={{
                background:
                  'radial-gradient(circle, rgba(160,196,255,0.3) 0%, rgba(168,230,207,0.2) 50%, transparent 70%)',
              }}
            />

            {/* iOS Phone */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <PhoneMockup variant="ios" screen="home" t={t} />
            </motion.div>

            {/* Android Phone (behind, offset) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -left-12 top-12 z-0 opacity-60 hidden lg:block"
              style={{ transform: 'scale(0.85) rotate(-8deg)' }}
            >
              <PhoneMockup variant="android" screen="quests" t={t} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
