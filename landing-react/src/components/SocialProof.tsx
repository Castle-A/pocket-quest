'use client'

import { Smartphone, Brain, Database, Zap, Shield, Gamepad2 } from 'lucide-react'
import { useI18n } from '@/i18n/context'

const techs = [
  { name: 'Flutter', Icon: Smartphone },
  { name: 'GPT-4o', Icon: Brain },
  { name: 'PostgreSQL', Icon: Database },
  { name: 'Firebase', Icon: Zap },
  { name: 'NestJS', Icon: Shield },
  { name: 'React', Icon: Gamepad2 },
]

export default function SocialProof() {
  const { t } = useI18n()

  return (
    <section className="py-16 bg-white border-y border-black/[0.04]">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-widest text-center mb-10 reveal">
          {t('social.label')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {techs.map(({ name, Icon }, i) => (
            <div
              key={name}
              className={`flex items-center gap-2.5 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default reveal stagger-${i + 1}`}
            >
              <Icon className="w-5 h-5 text-[#4B5563]" strokeWidth={1.5} />
              <span className="text-sm font-medium text-[#4B5563]">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
