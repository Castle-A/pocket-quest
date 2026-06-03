'use client'

import { motion } from 'framer-motion'
import Countdown from './Countdown'
import CTA3D from './CTA3D'
import { useI18n } from '@/i18n/context'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(37, 99, 235, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-32 pb-20">
        {/* Countdown */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
          <Countdown />
        </motion.div>

        {/* H1 — SEO optimized */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-medium tracking-tight leading-[1.1] text-[#0B0B0C] mb-6"
        >
          {t('hero.title.1')}{' '}
          <span className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent">{t('hero.title.focus')}</span>{' '}
          {t('hero.title.2')}
        </motion.h1>

        {/* Subtitle — SEO rich */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg md:text-xl text-[#4B5563] leading-relaxed mb-10 max-w-xl mx-auto"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTA 3D */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-4"
        >
          <CTA3D label={t('hero.cta')} />
        </motion.div>

        {/* Scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }} className="mt-16">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border-2 border-[#9CA3AF]/30 flex justify-center pt-1.5 mx-auto"
          >
            <div className="w-0.5 h-1.5 rounded-full bg-[#9CA3AF]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
