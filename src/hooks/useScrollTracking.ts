'use client'

import { useEffect, useRef } from 'react'
import { trackScrollDepth } from '@/lib/gtag'

export function useScrollTracking() {
  const trackedDepths = useRef<Set<number>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      )
      const winHeight = window.innerHeight
      const scrollPercent = Math.round((scrollTop / (docHeight - winHeight)) * 100)

      // Track at 25%, 50%, 75%, and 100%
      const milestones = [25, 50, 75, 100]

      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !trackedDepths.current.has(milestone)) {
          trackedDepths.current.add(milestone)
          trackScrollDepth(milestone)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

// ページごとのスクロール追跡をリセット
export function useResetScrollTracking() {
  const trackedDepths = useRef<Set<number>>(new Set())

  useEffect(() => {
    trackedDepths.current.clear()
  }, [])
}