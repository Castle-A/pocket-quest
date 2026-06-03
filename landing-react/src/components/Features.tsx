'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Zap, Shield, Gamepad2, BarChart3, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

const features = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Track your focus in real-time with zero lag.' },
  { icon: Shield, title: 'Privacy First', desc: 'Your data stays on your device. Always.' },
  { icon: Gamepad2, title: 'Gamified', desc: 'Level up your habits with quests and rewards.' },
  { icon: BarChart3, title: 'Deep Analytics', desc: 'Understand your patterns with rich insights.', },
  { icon: Globe, title: 'Community', desc: 'Compete with friends and climb the leaderboard.' },
]

export default function Features() {
  const { ref, inView } = useInView()

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium text-[#2563EB] uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0B0B0C]">
            Everything you need
          </h2>
        </motion.div>

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {features.slice(0, 3).map((feat, i) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
                className="bg-white border border-black/[0.08] rounded-lg p-6 md:p-8 hover:border-[#3B82F6]/30 hover:shadow-lg transition-all duration-300"
              >
                <Icon className="w-6 h-6 text-[#2563EB] mb-4" strokeWidth={1.5} />
                <h3 className="text-base md:text-lg font-semibold text-[#0B0B0C] mb-2">{feat.title}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{feat.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Row 2: 2 cards, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.slice(3).map((feat, i) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.45 }}
                className="bg-white border border-black/[0.08] rounded-lg p-6 md:p-8 hover:border-[#3B82F6]/30 hover:shadow-lg transition-all duration-300"
              >
                <Icon className="w-6 h-6 text-[#2563EB] mb-4" strokeWidth={1.5} />
                <h3 className="text-base md:text-lg font-semibold text-[#0B0B0C] mb-2">{feat.title}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{feat.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
