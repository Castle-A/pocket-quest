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

export default function CTA() {
  const { ref, inView } = useInView()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (email.includes('@')) {
      setSubmitted(true)
      try { localStorage.setItem('qp-waitlist', email) } catch { /* noop */ }
    }
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-cyan/5 blur-[150px]" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <p className="text-sm font-mono text-accent-cyan uppercase tracking-widest mb-3">Join the Waitlist</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Ready to level up<br />your focus?
          </h2>
          <p className="text-muted text-lg mb-10 max-w-lg mx-auto">
            Be the first to get exclusive early access and bonus rewards.
          </p>

          {!submitted ? (
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-4 bg-surface border border-border rounded-xl text-white placeholder-muted focus:outline-none focus:border-accent-cyan/50 transition-colors"
              />
              <button
                type="button"
                onClick={handleSubmit}
                className="px-8 py-4 bg-accent-cyan text-void font-bold rounded-xl glow-cyan hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                Reserve my spot ✨
              </button>
            </div>
          ) : (
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="card-glass rounded-2xl p-8 border border-accent-green/20 max-w-md mx-auto">
              <p className="text-3xl mb-2">🎉</p>
              <p className="text-white font-bold text-lg">You're on the list!</p>
              <p className="text-muted text-sm mt-2">We'll notify you when QuestPocket launches.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
