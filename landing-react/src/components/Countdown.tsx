'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useI18n } from '@/i18n/context'

const LAUNCH_DATE = new Date()
LAUNCH_DATE.setFullYear(LAUNCH_DATE.getFullYear() + 1)

function getTimeLeft() {
  const diff = LAUNCH_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function PixelCrystal({ tick }: { tick: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W = 8, H = 10, PX = 6
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const shape: number[][] = [
      [3, 2], [2, 4], [1, 6], [1, 6], [0, 8], [0, 8], [1, 6], [1, 6], [2, 4], [3, 2],
    ]

    const colors = ['#2563EB', '#3B82F6', '#06B6D4', '#8B5CF6', '#EC4899', '#F59E0B']
    const colorIdx = tick % colors.length

    shape.forEach(([startX, count], y) => {
      for (let i = 0; i < count; i++) {
        const x = startX + i
        const isEdge = i === 0 || i === count - 1 || y === 0 || y === H - 1
        const isCenter = x >= 3 && x <= 4 && y >= 3 && y <= 6
        ctx.fillStyle = isCenter ? '#FFFFFF' : isEdge ? colors[(colorIdx + 2) % colors.length] : colors[colorIdx]
        ctx.fillRect(x * PX, y * PX, PX - 1, PX - 1)
      }
    })

    if (tick % 2 === 0) {
      ctx.fillStyle = '#FFFFFF'
      ctx.fillRect(3 * PX, 2 * PX, PX - 1, PX - 1)
    }
  }, [tick])

  return (
    <canvas
      ref={canvasRef}
      width={48}
      height={60}
      style={{ imageRendering: 'pixelated', width: 48, height: 60, display: 'inline-block' }}
      aria-hidden="true"
    />
  )
}

export default function Countdown() {
  const { t } = useI18n()
  const [time, setTime] = useState(getTimeLeft)
  const [tick, setTick] = useState(0)

  const tickFn = useCallback(() => {
    setTime(getTimeLeft())
    setTick((t) => t + 1)
  }, [])

  useEffect(() => {
    const id = setInterval(tickFn, 1000)
    return () => clearInterval(id)
  }, [tickFn])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="inline-flex items-center gap-4 px-5 py-3 rounded-full bg-[#F9FAFB] border border-black/[0.06] mb-10">
      <PixelCrystal tick={tick} />
      <div className="flex items-baseline gap-1.5 font-mono text-[#0B0B0C]">
        <span className="text-lg font-semibold tabular-nums">{pad(time.days)}</span>
        <span className="text-xs text-[#9CA3AF]">{t('hero.countdown.days')}</span>
        <span className="text-[#9CA3AF] text-sm mx-0.5">:</span>
        <span className="text-lg font-semibold tabular-nums">{pad(time.hours)}</span>
        <span className="text-xs text-[#9CA3AF]">{t('hero.countdown.hours')}</span>
        <span className="text-[#9CA3AF] text-sm mx-0.5">:</span>
        <span className="text-lg font-semibold tabular-nums">{pad(time.minutes)}</span>
        <span className="text-xs text-[#9CA3AF]">{t('hero.countdown.minutes')}</span>
        <span className="text-[#9CA3AF] text-sm mx-0.5">:</span>
        <span className="text-lg font-semibold tabular-nums">{pad(time.seconds)}</span>
        <span className="text-xs text-[#9CA3AF]">{t('hero.countdown.seconds')}</span>
      </div>
    </div>
  )
}
