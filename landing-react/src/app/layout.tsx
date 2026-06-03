import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/i18n/context'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'QuestPocket — Gamify your focus time',
  description: 'Build real-world rewards by using your phone less. Turn screen time into self-improvement with gamified focus tracking.',
  keywords: ['focus', 'productivity', 'gamification', 'screen time', 'habits', 'quest', 'pocket'],
  openGraph: {
    title: 'QuestPocket — Gamify your focus time',
    description: 'Build real-world rewards by using your phone less.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
