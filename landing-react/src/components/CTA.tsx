'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '@/i18n/context'

export default function CTA() {
  const { t } = useI18n()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (email.includes('@')) {
      setSubmitted(true)
      try { localStorage.setItem('qp-waitlist', email) } catch { /* noop */ }
    }
  }

  return (
    <section id="cta" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#2563EB]/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <p className="text-xs font-medium text-[#2563EB] uppercase tracking-widest mb-3">{t('cta.label')}</p>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0B0B0C] mb-6">{t('cta.title')}</h2>
        <p className="text-[#4B5563] text-lg mb-10 max-w-md mx-auto">{t('cta.subtitle')}</p>

        {!submitted ? (
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder={t('cta.placeholder')}
              className="flex-1 px-5 py-3.5 bg-[#F9FAFB] border border-black/[0.08] rounded-lg text-[#0B0B0C] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB]/40 transition-colors text-sm"
            />
            <motion.button
              type="button"
              onClick={handleSubmit}
              className="relative inline-flex items-center justify-center px-7 py-3.5 bg-[#0B0B0C] text-white font-medium text-sm rounded-lg overflow-hidden whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#1E40AF]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className="relative z-10">{t('cta.button')}</span>
              <motion.span
                className="relative z-10 ml-1"
                initial={{ opacity: 0, x: -6 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                ✨
              </motion.span>
            </motion.button>
          </div>
        ) : (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-[#F9FAFB] rounded-xl p-8 border border-[#2563EB]/10 max-w-md mx-auto">
            <p className="text-3xl mb-2">🎉</p>
            <p className="text-[#0B0B0C] font-semibold text-lg">{t('cta.success.1')}</p>
            <p className="text-[#4B5563] text-sm mt-2">{t('cta.success.2')}</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
