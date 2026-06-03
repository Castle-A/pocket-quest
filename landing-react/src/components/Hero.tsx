'use client'

import { motion } from 'framer-motion'
import Countdown from './Countdown'
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

        {/* CTA — original animated button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.a
            href="#cta"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-[#0B0B0C] text-white font-medium text-base rounded-lg no-underline overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            {/* Slide-in background on hover */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#1E40AF]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            <span className="relative z-10">{t('hero.cta')}</span>
            <motion.span
              className="relative z-10"
              initial={{ opacity: 0, x: -8 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }} className="mt-20">
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
