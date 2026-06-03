import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.3) {
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

function StepCard({ step, index, inView }) {
  const colors = ['#A0C4FF', '#A8E6CF', '#FFF3B0'];
  const icons = ['🎯', '📱', '🎁'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="flex flex-col items-center text-center max-w-xs"
    >
      <motion.div
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-5"
        style={{ background: `${colors[index]}30` }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        animate={inView ? { y: [0, -4, 0] } : {}}
        transition={{ y: { duration: 3, repeat: Infinity, delay: index * 0.5 } }}
      >
        {icons[index]}
      </motion.div>
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white mb-3"
        style={{ background: colors[index] }}
      >
        {index + 1}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
    </motion.div>
  );
}

export default function HowItWorks({ t }) {
  const { ref, inView } = useInView();

  const steps = [
    {
      title: t.howItWorks?.step1 || 'Set your focus goals',
      desc: t.howItWorks?.step1Desc || 'Choose your daily targets',
    },
    {
      title: t.howItWorks?.step2 || 'Stay off your phone',
      desc: t.howItWorks?.step2Desc || 'Complete quests to earn QP',
    },
    {
      title: t.howItWorks?.step3 || 'Earn rewards',
      desc: t.howItWorks?.step3Desc || 'Redeem points for real rewards',
    },
  ];

  return (
    <section className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-pastel-blue uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">Simple. Effective. Fun.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <StepCard key={step.title} step={step} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
