'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface MotionContextType {
  shouldReduceMotion: boolean
  userPreference: boolean | null
  systemPreference: boolean
  toggleUserPreference: () => void
}

const MotionContext = createContext<MotionContextType | undefined>(undefined)

interface MotionProviderProps {
  children: ReactNode
}

export function MotionProvider({ children }: MotionProviderProps) {
  const motionSettings = useReducedMotion()

  return (
    <MotionContext.Provider value={motionSettings}>
      {children}
    </MotionContext.Provider>
  )
}

export function useMotionContext() {
  const context = useContext(MotionContext)
  if (context === undefined) {
    throw new Error('useMotionContext must be used within a MotionProvider')
  }
  return context
}