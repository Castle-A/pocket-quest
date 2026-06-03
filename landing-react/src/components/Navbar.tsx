'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'
import type { Lang } from '@/i18n/translations'

export default function Navbar() {
  const { t, lang, setLang, flag } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const langs: Lang[] = ['en', 'fr', 'de']

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'py-3 bg-white/90 backdrop-blur-lg border-b border-black/[0.04]' : 'py-5 bg-transparent'
        )}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 no-underline">
            <span className="text-lg">🎮</span>
            <span className="font-semibold text-[#0B0B0C] text-base">QuestPocket</span>
          </a>

          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <a href="#features" className="text-sm text-[#4B5563] hover:text-[#0B0B0C] transition-colors duration-150 no-underline">{t('nav.features')}</a>
            <a href="#preview" className="text-sm text-[#4B5563] hover:text-[#0B0B0C] transition-colors duration-150 no-underline">{t('nav.about')}</a>
            <a href="#faq" className="text-sm text-[#4B5563] hover:text-[#0B0B0C] transition-colors duration-150 no-underline">{t('nav.faq')}</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative group">
              <button type="button" className="flex items-center gap-1.5 text-sm text-[#4B5563] hover:text-[#0B0B0C] transition-colors">
                {flag} <span className="text-xs uppercase font-medium">{lang.toUpperCase()}</span>
              </button>
              <div className="absolute top-full right-0 mt-2 py-1 bg-white border border-black/[0.08] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[110px]">
                {langs.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLang(l)}
                    className={cn(
                      'w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors',
                      lang === l ? 'text-[#2563EB] bg-[#2563EB]/5' : 'text-[#4B5563] hover:bg-[#F9FAFB]'
                    )}
                  >
                    {l === 'en' ? '🇬🇧' : l === 'fr' ? '🇫🇷' : '🇩🇪'} <span className="text-xs uppercase">{l}</span>
                  </button>
                ))}
              </div>
            </div>
            <a
              href="#cta"
              className="px-5 py-2 bg-[#0B0B0C] text-white text-sm font-medium rounded-lg hover:bg-[#1E40AF] transition-colors duration-200 no-underline"
            >
              {t('nav.getStarted')}
            </a>
          </div>

          <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-[#4B5563]" aria-label="Menu">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-b border-black/[0.06] px-6 py-6 space-y-4 md:hidden">
          <a href="#features" className="block text-[#4B5563] hover:text-[#0B0B0C] text-base no-underline" onClick={() => setMobileOpen(false)}>{t('nav.features')}</a>
          <a href="#preview" className="block text-[#4B5563] hover:text-[#0B0B0C] text-base no-underline" onClick={() => setMobileOpen(false)}>{t('nav.about')}</a>
          <a href="#faq" className="block text-[#4B5563] hover:text-[#0B0B0C] text-base no-underline" onClick={() => setMobileOpen(false)}>{t('nav.faq')}</a>
          <div className="flex gap-2 pt-3 border-t border-black/[0.06]">
            {langs.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => { setLang(l); setMobileOpen(false) }}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm uppercase font-medium flex items-center gap-2',
                  lang === l ? 'bg-[#2563EB]/5 text-[#2563EB]' : 'bg-[#F9FAFB] text-[#4B5563]'
                )}
              >
                {l === 'en' ? '🇬🇧' : l === 'fr' ? '🇫🇷' : '🇩🇪'} {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
