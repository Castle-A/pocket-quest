'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Shield, Gamepad2, BarChart3, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'

const features = [
  { icon: Zap, tKey: '1' },
  { icon: Shield, tKey: '2' },
  { icon: Gamepad2, tKey: '3' },
  { icon: BarChart3, tKey: '4' },
  { icon: Globe, tKey: '5' },
]

export default function Features() {
  const { t } = useI18n()
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2, once: false })

  return (
    <section id="features" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium text-[#2563EB] uppercase tracking-widest mb-3">{t('features.label')}</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0B0B0C]">
            {t('features.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {features.slice(0, 3).map((feat, i) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.tKey}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
                className="bg-white border border-black/[0.08] rounded-lg p-6 md:p-8 hover:border-[#3B82F6]/30 hover:shadow-lg transition-all duration-300"
              >
                <Icon className="w-6 h-6 text-[#2563EB] mb-4" strokeWidth={1.5} />
                <h3 className="text-base md:text-lg font-semibold text-[#0B0B0C] mb-2">{t(`features.${feat.tKey}.title`)}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{t(`features.${feat.tKey}.desc`)}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.slice(3).map((feat, i) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.tKey}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.45 }}
                className="bg-white border border-black/[0.08] rounded-lg p-6 md:p-8 hover:border-[#3B82F6]/30 hover:shadow-lg transition-all duration-300"
              >
                <Icon className="w-6 h-6 text-[#2563EB] mb-4" strokeWidth={1.5} />
                <h3 className="text-base md:text-lg font-semibold text-[#0B0B0C] mb-2">{t(`features.${feat.tKey}.title`)}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{t(`features.${feat.tKey}.desc`)}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
