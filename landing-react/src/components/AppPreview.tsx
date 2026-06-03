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

export default function AppPreview() {
  const { ref, inView } = useInView()
  const [activeScreen, setActiveScreen] = useState<'home' | 'quests'>('home')

  return (
    <section className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-center mb-16">
          <p className="text-sm font-mono text-accent-gold uppercase tracking-widest mb-3">App Preview</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">See it in action</h2>
          <p className="text-muted mt-4 max-w-lg mx-auto">A glimpse into your future focus companion.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Screen selector */}
          <div className="flex gap-2 mb-8 bg-surface rounded-xl p-1 border border-border">
            {(['home', 'quests'] as const).map((screen) => (
              <button
                type="button"
                key={screen}
                onClick={() => setActiveScreen(screen)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeScreen === screen ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20' : 'text-muted hover:text-white'
                }`}
              >
                {screen === 'home' ? '🏠 Home' : '⚔️ Quests'}
              </button>
            ))}
          </div>

          {/* Phone mockup */}
          <div className="relative w-[320px] md:w-[360px]">
            <div className="card-glass rounded-[2.5rem] p-3 border border-white/10 glow-cyan">
              <div className="bg-void rounded-[2rem] overflow-hidden">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 py-3 text-xs text-muted">
                  <span>9:41</span>
                  <div className="w-20 h-5 bg-black rounded-full" />
                  <span>100%</span>
                </div>

                {/* Screen content */}
                <div className="px-6 pb-8 min-h-[500px]">
                  {activeScreen === 'home' ? (
                    <div className="space-y-6">
                      <div>
                        <p className="text-muted text-sm">Good morning</p>
                        <h3 className="text-xl font-bold text-white">Alex's Quest</h3>
                      </div>
                      <div className="card-glass rounded-xl p-4 border border-white/5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-accent-cyan/20 flex items-center justify-center text-accent-cyan font-bold">A</div>
                          <div>
                            <p className="text-white font-semibold text-sm">Streak</p>
                            <p className="text-accent-gold text-xs font-mono">12 Days 🔥</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {['Morning Walk +10 QP', 'No Social Media +25 QP', 'Read 30 min +20 QP'].map((q) => (
                            <div key={q} className="flex items-center justify-between text-xs text-muted bg-white/5 rounded-lg px-3 py-2">
                              <span>{q.split(' +')[0]}</span>
                              <span className="text-accent-green font-mono">+{q.split('+')[1]}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-muted text-xs">Pixel Companion</p>
                        <p className="text-2xl">🐣</p>
                        <p className="text-accent-cyan text-xs font-mono">Lv.12 • Happy</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-white">Today's Quests</h3>
                      {[
                        { icon: '🚶', name: '30min Walk', qp: 10 },
                        { icon: '📱', name: 'No Instagram', qp: 25 },
                        { icon: '📖', name: 'Read a book', qp: 20 },
                        { icon: '🧘', name: 'Meditate', qp: 15 },
                      ].map((quest) => (
                        <div key={quest.name} className="card-glass rounded-xl p-4 border border-white/5 flex items-center justify-between hover:border-accent-cyan/20 transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{quest.icon}</span>
                            <div>
                              <p className="text-white text-sm font-medium">{quest.name}</p>
                              <p className="text-muted text-xs">Tap to start</p>
                            </div>
                          </div>
                          <span className="text-accent-green font-mono text-sm font-bold">{quest.qp} QP</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
