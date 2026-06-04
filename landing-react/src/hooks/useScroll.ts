'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

export function useScrollReveal(threshold = 0.1, bottomMargin = 60) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      setIsVisible(true)
      if (observerRef.current && ref.current) {
        observerRef.current.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Check if element is already in viewport on mount
    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight || document.documentElement.clientHeight
    if (rect.top < vh - bottomMargin && rect.bottom > 0) {
      setIsVisible(true)
      return
    }

    // Otherwise set up observer
    observerRef.current = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin: `0px 0px -${bottomMargin}px 0px`,
    })
    observerRef.current.observe(el)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [threshold, bottomMargin, handleIntersect])

  return { ref, isVisible }
}

export function useParallax(speed = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!ref.current) {
            ticking = false
            return
          }
          const rect = ref.current.getBoundingClientRect()
          const centerY = rect.top + rect.height / 2
          const viewportCenter = window.innerHeight / 2
          setOffset((centerY - viewportCenter) * speed)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { ref, offset }
}
