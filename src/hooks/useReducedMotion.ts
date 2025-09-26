'use client'

import { useEffect, useState } from 'react'

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [userPreference, setUserPreference] = useState<boolean | null>(null)

  useEffect(() => {
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    // Listen for changes
    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    // Check localStorage for user preference
    const saved = localStorage.getItem('reducedMotion')
    if (saved !== null) {
      setUserPreference(JSON.parse(saved))
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  const toggleUserPreference = () => {
    const newPreference = !userPreference
    setUserPreference(newPreference)
    localStorage.setItem('reducedMotion', JSON.stringify(newPreference))
  }

  // User preference overrides system preference
  const shouldReduceMotion = userPreference !== null ? userPreference : prefersReducedMotion

  return {
    shouldReduceMotion,
    userPreference,
    systemPreference: prefersReducedMotion,
    toggleUserPreference
  }
}