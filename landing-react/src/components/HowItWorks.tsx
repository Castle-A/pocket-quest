'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.3) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

const steps = [
  { icon: '🎯', title: 'Set your focus goals', desc: 'Choose your daily targets', color: 'cyan' },
  { icon: '📱', title: 'Stay off your phone', desc: 'Complete quests to earn QP', color: 'magenta' },
  { icon: '🎁', title: 'Earn rewards', desc: 'Redeem points for real rewards', color: 'gold' },
]

const colorMap: Record<string, string> = {
  cyan: 'text-accent-cyan border-accent-cyan/20 bg-accent-cyan/5',
  magenta: 'text-accent-magenta border-accent-magenta/20 bg-accent-magenta/5',
  gold: 'text-accent-gold border-accent-gold/20 bg-accent-gold/5',
}

export default function HowItWorks() {
  const { ref, inView } = useInView()

  return (
    <section className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-center mb-16">
          <p className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Simple. Effective. Fun.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`card-glass rounded-2xl p-8 text-center border ${colorMap[step.color]} hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4 border ${colorMap[step.color]}`}>
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-muted">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
