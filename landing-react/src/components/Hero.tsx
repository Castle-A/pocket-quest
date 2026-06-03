'use client'

import { motion } from 'framer-motion'
import Countdown from './Countdown'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Subtle grid background */}
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

      {/* Soft blue halos */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '15%',
          left: '20%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'rgba(59, 130, 246, 0.04)',
          filter: 'blur(120px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '10%',
          right: '15%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(37, 99, 235, 0.03)',
          filter: 'blur(100px)',
        }}
      />

      {/* Content — centered, constrained */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-32 pb-20">
        {/* Countdown badge — above H1 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Countdown />
        </motion.div>

        {/* H1 — big, black, tight leading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-medium tracking-tight leading-[1.1] text-[#0B0B0C] mb-6"
        >
          Gamify your{' '}
          <span className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] bg-clip-text text-transparent">focus</span>{' '}
          time
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg md:text-xl text-[#4B5563] leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Build real-world rewards by using your phone less.
        </motion.p>

        {/* CTA — black → blue navy on hover */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button
            type="button"
            className="px-8 py-3.5 bg-[#0B0B0C] text-white font-medium text-base rounded-lg transition-all duration-200 hover:bg-[#1E40AF] hover:shadow-lg hover:shadow-[#1E40AF]/10 active:scale-[0.98]"
          >
            Join the Waitlist
          </button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-[#9CA3AF]/30 flex justify-center pt-1.5"
        >
          <div className="w-0.5 h-1.5 rounded-full bg-[#9CA3AF]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
