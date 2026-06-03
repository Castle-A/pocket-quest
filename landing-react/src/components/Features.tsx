'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Zap, Shield, Gamepad2, BarChart3, Globe, Bell } from 'lucide-react'
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
  { icon: Zap, title: 'Lightning Fast', desc: 'Track your focus in real-time with zero lag.', span: 'lg:col-span-4' },
  { icon: Shield, title: 'Privacy First', desc: 'Your data stays on your device. Always.', span: 'lg:col-span-4' },
  { icon: Gamepad2, title: 'Gamified', desc: 'Level up your habits with quests and rewards.', span: 'lg:col-span-4' },
  { icon: BarChart3, title: 'Deep Analytics', desc: 'Understand your patterns with rich insights.', span: 'lg:col-span-6' },
  { icon: Globe, title: 'Community', desc: 'Compete with friends and climb the leaderboard.', span: 'lg:col-span-6' },
]

export default function Features() {
  const { ref, inView } = useInView()

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
                className={cn(
                  'bg-white border border-black/[0.08] rounded-lg p-6 md:p-8',
                  'hover:border-[#3B82F6]/30 hover:shadow-lg transition-all duration-300',
                  feat.span
                )}
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
