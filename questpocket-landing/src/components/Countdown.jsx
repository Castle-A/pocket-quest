import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TARGET_DATE = new Date();
TARGET_DATE.setMonth(TARGET_DATE.getMonth() + 1);

function getTimeLeft() {
  const diff = TARGET_DATE - new Date();
  if (diff <= 0) return { mo: 0, w: 0, d: 0, h: 0, m: 0, s: 0 };
  return {
    mo: Math.floor(diff / (1000 * 60 * 60 * 24 * 30)),
    w: Math.floor((diff / (1000 * 60 * 60 * 24 * 7)) % 4),
    d: Math.floor((diff / (1000 * 60 * 60 * 24)) % 7),
    h: Math.floor((diff / (1000 * 60 * 60)) % 24),
    m: Math.floor((diff / (1000 * 60)) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

function AnimatedNumber({ value, label, color }) {
  return (
    <motion.div
      className="flex flex-col items-center group cursor-default"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative">
        {/* Glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle, ${color}30 0%, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />
        <div className="relative bg-gray-50 rounded-2xl px-4 py-3 min-w-[60px] text-center group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
          <motion.span
            key={value}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-black text-gray-900"
          >
            {String(value).padStart(2, '0')}
          </motion.span>
        </div>
      </div>
      <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mt-2">
        {label}
      </span>
    </motion.div>
  );
}

export default function Countdown({ t }) {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: time.mo, label: 'MO', color: '#A0C4FF' },
    { value: time.w, label: 'W', color: '#A8E6CF' },
    { value: time.d, label: 'D', color: '#FFF3B0' },
    { value: time.h, label: 'H', color: '#A0C4FF' },
    { value: time.m, label: 'M', color: '#A8E6CF' },
    { value: time.s, label: 'S', color: '#FFF3B0' },
  ];

  return (
    <div id="countdown" className="flex flex-col items-start gap-6">
      <div className="flex gap-3">
        {units.map((unit, _i) => (
          <AnimatedNumber key={unit.label} {...unit} />
        ))}
      </div>
      <p className="text-xs text-gray-400">
        {t.countdown?.subtitle || 'Early users get exclusive rewards'}
      </p>
      <button
        data-cta
        className="px-6 py-3 bg-gradient-to-r from-pastel-blue/20 to-pastel-green/20 text-gray-700 font-semibold rounded-xl hover:shadow-lg hover:shadow-pastel-blue/10 hover:-translate-y-0.5 transition-all duration-300 text-sm border border-white/50"
      >
        {t.countdown?.cta || '✨ Reserve my spot'}
      </button>
    </div>
  );
}
