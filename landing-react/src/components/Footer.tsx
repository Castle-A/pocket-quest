'use client'

import { useI18n } from '@/i18n/context'
import { useScrollReveal } from '@/hooks/useScroll'

export default function Footer() {
  const { t } = useI18n()
  const reveal = useScrollReveal(0.1)

  const linkCols = [
    { title: t('footer.product'), links: [t('nav.features'), 'Pricing', 'Changelog', 'Docs'] },
    { title: t('footer.company'), links: [t('nav.about'), 'Blog', 'Careers', 'Press'] },
    { title: t('footer.legal'), links: [t('footer.privacy'), t('footer.terms'), t('footer.cookies'), t('footer.licenses')] },
  ]

  return (
    <footer className="bg-[#F9FAFB] border-t border-black/[0.06]" ref={reveal.ref}>
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 reveal ${reveal.isVisible ? 'visible' : ''}`}>
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">🎮</span>
              <span className="font-semibold text-[#0B0B0C]">QuestPocket</span>
            </div>
            <p className="text-sm text-[#4B5563] leading-relaxed max-w-[200px]">{t('footer.tagline')}</p>
          </div>

          {linkCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-[#0B0B0C] uppercase tracking-widest mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors duration-300 no-underline">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`pt-8 border-t border-black/[0.04] flex flex-col md:flex-row items-center justify-between gap-4 reveal stagger-2 ${reveal.isVisible ? 'visible' : ''}`}>
          <p className="text-xs text-[#9CA3AF]">{t('footer.copyright')}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#9CA3AF] hover:text-[#2563EB] transition-colors duration-300 no-underline">{t('footer.twitter')}</a>
            <a href="#" className="text-xs text-[#9CA3AF] hover:text-[#2563EB] transition-colors duration-300 no-underline">{t('footer.github')}</a>
            <a href="#" className="text-xs text-[#9CA3AF] hover:text-[#2563EB] transition-colors duration-300 no-underline">{t('footer.discord')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
