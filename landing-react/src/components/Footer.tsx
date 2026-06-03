'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎮</span>
            <span className="font-bold text-white">QuestPocket</span>
          </div>

          <div className="flex items-center gap-6">
            <button type="button" className="text-sm text-muted hover:text-white transition-colors">Privacy</button>
            <button type="button" className="text-sm text-muted hover:text-white transition-colors">Terms</button>
          </div>

          <p className="text-sm text-muted">© 2026 QuestPocket</p>
        </div>
      </div>
    </footer>
  )
}
