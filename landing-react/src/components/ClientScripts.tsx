'use client'

import { useEffect } from 'react'

export default function ClientScripts() {
  useEffect(() => {
    // Dynamic import of Lenis
    import('lenis').then((LenisModule) => {
      const Lenis = LenisModule.default
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    })
  }, [])

  return null
}
