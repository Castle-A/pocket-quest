'use client'

import { Zap, Shield, Gamepad2, BarChart3, Globe } from 'lucide-react'
import { useI18n } from '@/i18n/context'
import { useScrollReveal } from '@/hooks/useScroll'
import dynamic from 'next/dynamic'

const Features3D = dynamic(() => import('./Features3D'), { ssr: false })

const features = [
  { icon: Zap, tKey: '1', color: '#F59E0B' },
  { icon: Shield, tKey: '2', color: '#2563EB' },
  { icon: Gamepad2, tKey: '3', color: '#8B5CF6' },
  { icon: BarChart3, tKey: '4', color: '#06B6D4' },
  { icon: Globe, tKey: '5', color: '#10B981' },
]

export default function Features() {
  const { t } = useI18n()
  const titleReveal = useScrollReveal(0.2)

  return (
    <section id="features" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* 3D floating elements behind cards */}
      <Features3D />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        {/* Section title — reveal */}
        <div
          ref={titleReveal.ref}
          className={`text-center mb-16 reveal ${titleReveal.isVisible ? 'visible' : ''}`}
        >
          <p className="text-xs font-medium text-[#2563EB] uppercase tracking-widest mb-3">
            {t('features.label')}
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0B0B0C]">
            {t('features.title')}
          </h2>
        </div>

        {/* Row 1 — 3 cards with stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {features.slice(0, 3).map((feat, i) => {
            const Icon = feat.icon
            const cardReveal = useScrollReveal(0.15)
            return (
              <div
                key={feat.tKey}
                ref={cardReveal.ref}
                className={`card-hover reveal stagger-${i + 1} ${cardReveal.isVisible ? 'visible' : ''} bg-white border border-black/[0.08] rounded-lg p-6 md:p-8`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feat.color}10` }}
                >
                  <Icon className="w-5 h-5" style={{ color: feat.color }} strokeWidth={1.5} />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-[#0B0B0C] mb-2">
                  {t(`features.${feat.tKey}.title`)}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {t(`features.${feat.tKey}.desc`)}
                </p>
              </div>
            )
          })}
        </div>

        {/* Row 2 — 2 cards with stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.slice(3).map((feat, i) => {
            const Icon = feat.icon
            const cardReveal = useScrollReveal(0.15)
            return (
              <div
                key={feat.tKey}
                ref={cardReveal.ref}
                className={`card-hover reveal stagger-${i + 4} ${cardReveal.isVisible ? 'visible' : ''} bg-white border border-black/[0.08] rounded-lg p-6 md:p-8`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feat.color}10` }}
                >
                  <Icon className="w-5 h-5" style={{ color: feat.color }} strokeWidth={1.5} />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-[#0B0B0C] mb-2">
                  {t(`features.${feat.tKey}.title`)}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {t(`features.${feat.tKey}.desc`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
