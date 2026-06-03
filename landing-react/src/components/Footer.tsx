'use client'

export default function Footer() {
  const links = {
    Product: ['Features', 'Pricing', 'Changelog', 'Docs'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'Licenses'],
  }

  return (
    <footer className="bg-[#F9FAFB] border-t border-black/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">🎮</span>
              <span className="font-semibold text-[#0B0B0C]">QuestPocket</span>
            </div>
            <p className="text-sm text-[#4B5563] leading-relaxed max-w-[200px]">
              Gamify your focus time. Build better habits.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-[#0B0B0C] uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-[#4B5563] hover:text-[#2563EB] transition-colors duration-150 no-underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-black/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9CA3AF]">
            © 2026 QuestPocket. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#9CA3AF] hover:text-[#2563EB] transition-colors no-underline">Twitter</a>
            <a href="#" className="text-xs text-[#9CA3AF] hover:text-[#2563EB] transition-colors no-underline">GitHub</a>
            <a href="#" className="text-xs text-[#9CA3AF] hover:text-[#2563EB] transition-colors no-underline">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
