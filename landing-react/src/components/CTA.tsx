'use client'

import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (email.includes('@')) {
      setSubmitted(true)
      try { localStorage.setItem('qp-waitlist', email) } catch { /* noop */ }
    }
  }

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle halo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#2563EB]/[0.03] blur-[120px] pointer-events-none"
      />

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <p className="text-xs font-medium text-[#2563EB] uppercase tracking-widest mb-3">Join the Waitlist</p>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#0B0B0C] mb-6">
          Ready to level up<br />your focus?
        </h2>
        <p className="text-[#4B5563] text-lg mb-10 max-w-md mx-auto">
          Be the first to get exclusive early access and bonus rewards.
        </p>

        {!submitted ? (
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 bg-[#F9FAFB] border border-black/[0.08] rounded-lg text-[#0B0B0C] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB]/40 transition-colors text-sm"
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="px-7 py-3.5 bg-[#0B0B0C] text-white font-medium text-sm rounded-lg hover:bg-[#1E40AF] transition-colors duration-200 whitespace-nowrap"
            >
              Reserve my spot ✨
            </button>
          </div>
        ) : (
          <div className="bg-[#F9FAFB] rounded-xl p-8 border border-[#2563EB]/10 max-w-md mx-auto">
            <p className="text-3xl mb-2">🎉</p>
            <p className="text-[#0B0B0C] font-semibold text-lg">You're on the list!</p>
            <p className="text-[#4B5563] text-sm mt-2">We'll notify you when QuestPocket launches.</p>
          </div>
        )}
      </div>
    </section>
  )
}
