'use client'

import { useRef, useState } from 'react'
import { Home, Swords } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'

export default function AppPreview() {
  const { t } = useI18n()
  const [activeScreen, setActiveScreen] = useState<'home' | 'quests'>('home')

  return (
    <section id="preview" className="py-20 md:py-28 bg-[#F9FAFB] relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16 reveal">
          <p className="text-xs font-medium text-[#2563EB] uppercase tracking-widest mb-3">{t('preview.label')}</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0B0B0C]">{t('preview.title')}</h2>
          <p className="text-[#4B5563] mt-4 max-w-lg mx-auto">{t('preview.subtitle')}</p>
        </div>

        <div className="flex flex-col items-center">
          {/* Tab switcher */}
          <div className="flex gap-1 mb-8 bg-white rounded-lg p-1 border border-black/[0.06] reveal stagger-1">
            {([
              { key: 'home' as const, label: t('preview.home'), Icon: Home },
              { key: 'quests' as const, label: t('preview.quests'), Icon: Swords },
            ]).map(({ key, label, Icon }) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveScreen(key)}
                className={cn(
                  'flex items-center gap-2 px-5 py-2 rounded-md text-sm font-medium transition-all duration-300',
                  activeScreen === key ? 'bg-[#0B0B0C] text-white shadow-sm' : 'text-[#4B5563] hover:text-[#0B0B0C]'
                )}
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
                {label}
              </button>
            ))}
          </div>

          {/* Phone mockup */}
          <div className="reveal-scale stagger-2 relative w-[300px] md:w-[340px]">
            <div className="bg-white rounded-[2.5rem] p-3 border border-[#3B82F6]/10 shadow-[0_30px_60px_rgba(0,0,0,0.04)]">
              <div className="bg-[#F9FAFB] rounded-[2rem] overflow-hidden">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 py-3 text-xs text-[#9CA3AF]">
                  <span>9:41</span>
                  <div className="w-16 h-4 bg-[#0B0B0C] rounded-full" />
                  <span>100%</span>
                </div>

                <div className="px-6 pb-8 min-h-[480px]">
                  {activeScreen === 'home' ? (
                    <div className="space-y-5">
                      <div>
                        <p className="text-[#9CA3AF] text-sm">{t('preview.goodMorning')}</p>
                        <h3 className="text-lg font-semibold text-[#0B0B0C]">Alex's Quest</h3>
                      </div>
                      <div className="bg-white rounded-xl p-4 border border-black/[0.06] card-hover">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-full bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] font-bold text-sm">A</div>
                          <div>
                            <p className="text-[#0B0B0C] font-medium text-sm">{t('preview.streak')}</p>
                            <p className="text-[#2563EB] text-xs font-mono">12 {t('preview.days')} 🔥</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {['Morning Walk +10 QP', 'No Social Media +25 QP', 'Read 30 min +20 QP'].map((q) => (
                            <div key={q} className="flex items-center justify-between text-xs text-[#4B5563] bg-[#F9FAFB] rounded-lg px-3 py-2">
                              <span>{q.split(' +')[0]}</span>
                              <span className="text-[#2563EB] font-mono font-medium">+{q.split('+')[1]}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-center pt-2">
                        <p className="text-[#9CA3AF] text-xs">{t('preview.pixelCompanion')}</p>
                        <p className="text-2xl">🐣</p>
                        <p className="text-[#2563EB] text-xs font-mono">Lv.12 • Happy</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-[#0B0B0C]">{t('preview.todaysQuests')}</h3>
                      {[
                        { icon: '🚶', name: '30min Walk', qp: 10 },
                        { icon: '📱', name: 'No Instagram', qp: 25 },
                        { icon: '📖', name: 'Read a book', qp: 20 },
                        { icon: '🧘', name: 'Meditate', qp: 15 },
                      ].map((quest) => (
                        <div key={quest.name} className="bg-white rounded-xl p-4 border border-black/[0.06] flex items-center justify-between card-hover cursor-pointer">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{quest.icon}</span>
                            <div>
                              <p className="text-[#0B0B0C] text-sm font-medium">{quest.name}</p>
                              <p className="text-[#9CA3AF] text-xs">{t('preview.tapToStart')}</p>
                            </div>
                          </div>
                          <span className="text-[#2563EB] font-mono text-sm font-bold">{quest.qp} QP</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
