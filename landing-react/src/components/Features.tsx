'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.2) {
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

const features = [
  { icon: '⚡', title: 'Lightning Fast', desc: 'Track your focus in real-time with zero lag.', color: 'cyan' },
  { icon: '🛡️', title: 'Privacy First', desc: 'Your data stays on your device. Always.', color: 'magenta' },
  { icon: '🎮', title: 'Gamified', desc: 'Level up your habits with quests and rewards.', color: 'gold' },
  { icon: '📊', title: 'Deep Analytics', desc: 'Understand your patterns with rich insights.', color: 'cyan' },
  { icon: '🌍', title: 'Community', desc: 'Compete with friends and climb the leaderboard.', color: 'magenta' },
  { icon: '🔔', title: 'Smart Reminders', desc: 'Gentle nudges to keep you on track.', color: 'gold' },
]

const glowMap: Record<string, string> = {
  cyan: 'hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]',
  magenta: 'hover:shadow-[0_0_30px_rgba(255,0,170,0.15)]',
  gold: 'hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]',
}

export default function Features() {
  const { ref, inView } = useInView()

  return (
    <section className="py-24 md:py-32 relative bg-abyss/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-center mb-16">
          <p className="text-sm font-mono text-accent-magenta uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Everything you need</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`card-glass rounded-2xl p-6 border border-white/5 ${glowMap[feat.color]} hover:border-white/10 transition-all duration-300 group`}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{feat.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
