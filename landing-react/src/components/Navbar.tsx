'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const flagIcons: Record<string, string> = { en: '🇬🇧', fr: '🇫🇷', de: '🇩🇪' }
const langs = ['en', 'fr', 'de']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3 bg-void/80 backdrop-blur-xl border-b border-white/5' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2">
            <span className="text-xl">🎮</span>
            <span className="font-bold text-lg text-white">QuestPocket</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button type="button" className="text-sm text-muted hover:text-white transition-colors">Features</button>
            <div className="relative group">
              <button type="button" className="flex items-center gap-1.5 text-sm text-muted hover:text-white transition-colors">
                {flagIcons[lang]} <span className="text-xs uppercase">{lang}</span>
              </button>
              <div className="absolute top-full right-0 mt-2 py-1 bg-surface border border-border rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[120px]">
                {langs.map((l) => (
                  <button
                    type="button"
                    key={l}
                    onClick={() => setLang(l)}
                    className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors ${lang === l ? 'text-accent-cyan bg-accent-cyan/5' : 'text-muted hover:bg-white/5'}`}
                  >
                    {flagIcons[l]} <span className="text-xs uppercase">{l}</span>
                  </button>
                ))}
              </div>
            </div>
            <button type="button" className="px-5 py-2 bg-accent-cyan/10 text-accent-cyan text-sm font-semibold rounded-xl border border-accent-cyan/20 hover:bg-accent-cyan/20 transition-all duration-200">
              Get Started
            </button>
          </div>

          <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-muted" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (<><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>) : (<><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>)}
            </svg>
          </button>
        </div>
      </motion.nav>

      {mobileOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-void/95 backdrop-blur-xl border-b border-white/5 px-6 py-6 space-y-4 md:hidden">
          <button type="button" onClick={() => setMobileOpen(false)} className="block text-muted hover:text-white text-base">Features</button>
          <div className="flex gap-2 pt-2">
            {langs.map((l) => (
              <button type="button" key={l} onClick={() => { setLang(l); setMobileOpen(false) }}
                className={`px-4 py-2 rounded-lg text-sm uppercase font-medium flex items-center gap-2 ${lang === l ? 'bg-accent-cyan/10 text-accent-cyan' : 'bg-white/5 text-muted'}`}
              >
                {flagIcons[l]} {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
