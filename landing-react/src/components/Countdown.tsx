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

/* Pixel art hourglass drawn on canvas — 8x12 grid, upscaled via CSS */
function PixelHourglass({ tick }: { tick: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const SIZE = 32 // 8x12 pixels, each 4x4 CSS pixels → 32x48 display

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const px = 4 // pixel size in canvas units
    const sandColor = '#2563EB'
    const glassColor = '#D1D5DB'
    const bgColor = '#FFFFFF'

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Hourglass shape — top bulb
    const topPixels = [
      [1,0,1,6], [0,1,2,5], [0,2,3,4], [0,3,4,3],
      [0,4,5,2], [0,5,6,1], [0,6,7,1],
    ]
    // Bottom bulb
    const bottomPixels = [
      [0,7,7,1], [0,8,6,1], [0,9,5,2], [0,10,4,3],
      [0,11,3,4], [0,12,2,5], [0,13,1,6],
    ]

    // Draw glass outline
    const drawPixels = (pixels: number[][], color: string) => {
      ctx.fillStyle = color
      pixels.forEach(([_, startX, startY, count]) => {
        for (let i = 0; i < count; i++) {
          ctx.fillRect((startX + i) * px, startY * px, px - 1, px - 1)
        }
      })
    }

    drawPixels(topPixels, glassColor)
    drawPixels(bottomPixels, glassColor)

    // Sand in top — level decreases each second
    const sandLevel = Math.max(0, 3 - (tick % 4))
    ctx.fillStyle = sandColor
    for (let y = 1; y < 2 + sandLevel; y++) {
      for (let x = 1 + y; x < 7 - y; x++) {
        ctx.fillRect(x * px, y * px, px - 1, px - 1)
      }
    }

    // Sand in bottom — level increases
    const bottomSand = tick % 4
    for (let y = 11; y > 11 - bottomSand; y--) {
      for (let x = 1 + (12 - y); x < 7 - (12 - y); x++) {
        ctx.fillRect(x * px, y * px, px - 1, px - 1)
      }
    }

    // Falling sand pixel
    const fallY = 6 + (tick % 2)
    ctx.fillRect(3.5 * px, fallY * px, px - 1, px - 1)

  }, [tick])

  return (
    <canvas
      ref={canvasRef}
      width={SIZE}
      height={SIZE * 1.5}
      className="inline-block"
      style={{ imageRendering: 'pixelated', width: SIZE, height: SIZE * 1.5 }}
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
      <PixelHourglass tick={tick} />
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
