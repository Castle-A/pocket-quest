import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/i18n/context'
import PixelBackground from '@/components/PixelBackground'
import Scroll3D from '@/components/Scroll3D'
import ClientScripts from '@/components/ClientScripts'

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
        <PixelBackground />
        <Scroll3D />
        <I18nProvider>{children}</I18nProvider>
        <ClientScripts />
      </body>
    </html>
  )
}
