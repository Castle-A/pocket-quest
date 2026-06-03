import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'QuestPocket — Gamify your focus time',
  description: 'Build real-world rewards by using your phone less. QuestPocket gamifies your focus time.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
