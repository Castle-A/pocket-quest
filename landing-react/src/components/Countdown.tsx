'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

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

/* Pixel art crystal/gem — 8x10 grid, drawn on canvas */
function PixelCrystal({ tick }: { tick: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W = 8
    const H = 10
    const PX = 6 // each pixel = 6x6 canvas units → 48x60 total

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Crystal shape — row by row, each row: [startX, count]
    const shape: number[][] = [
      [3, 2],     // row 0:   ..
      [2, 4],     // row 1:  ....
      [1, 6],     // row 2: ......
      [1, 6],     // row 3: ......
      [0, 8],     // row 4: ........
      [0, 8],     // row 5: ........
      [1, 6],     // row 6: ......
      [1, 6],     // row 7: ......
      [2, 4],     // row 8:  ....
      [3, 2],     // row 9:   ..
    ]

    // Color cycle: blue → cyan → magenta → gold
    const colors = ['#2563EB', '#3B82F6', '#06B6D4', '#8B5CF6', '#EC4899', '#F59E0B']
    const colorIdx = tick % colors.length

    shape.forEach(([startX, count], y) => {
      for (let i = 0; i < count; i++) {
        const x = startX + i
        // Inner glow: center pixels get brighter
        const isEdge = i === 0 || i === count - 1 || y === 0 || y === H - 1
        const isCenter = x >= 3 && x <= 4 && y >= 3 && y <= 6

        if (isCenter) {
          ctx.fillStyle = '#FFFFFF'
        } else if (isEdge) {
          ctx.fillStyle = colors[(colorIdx + 2) % colors.length]
        } else {
          ctx.fillStyle = colors[colorIdx]
        }
        ctx.fillRect(x * PX, y * PX, PX - 1, PX - 1)
      }
    })

    // Sparkle pixel — blinks every 2 ticks
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
      style={{
        imageRendering: 'pixelated',
        width: 48,
        height: 60,
        display: 'inline-block',
      }}
      aria-hidden="true"
    />
  )
}

export default function Countdown() {
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
        <span className="text-xs text-[#9CA3AF]">j</span>
        <span className="text-[#9CA3AF] text-sm mx-0.5">:</span>
        <span className="text-lg font-semibold tabular-nums">{pad(time.hours)}</span>
        <span className="text-xs text-[#9CA3AF]">h</span>
        <span className="text-[#9CA3AF] text-sm mx-0.5">:</span>
        <span className="text-lg font-semibold tabular-nums">{pad(time.minutes)}</span>
        <span className="text-xs text-[#9CA3AF]">m</span>
        <span className="text-[#9CA3AF] text-sm mx-0.5">:</span>
        <span className="text-lg font-semibold tabular-nums">{pad(time.seconds)}</span>
        <span className="text-xs text-[#9CA3AF]">s</span>
      </div>
    </div>
  )
}
