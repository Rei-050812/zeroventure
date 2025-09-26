'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useMotionContext } from '@/providers/MotionProvider'
import { scaleIn } from '@/lib/animations'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  const { shouldReduceMotion } = useMotionContext()

  return (
    <motion.div
      className={cn(
        'bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm',
        hover && 'hover:bg-white/10 hover:border-white/20',
        className
      )}
      variants={!shouldReduceMotion ? scaleIn : undefined}
      whileHover={!shouldReduceMotion && hover ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.18 }}
    >
      {children}
    </motion.div>
  )
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={cn('text-xl font-semibold text-white', className)}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('text-gray-300 text-sm', className)}>
      {children}
    </p>
  )
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('mt-4 pt-4 border-t border-white/10', className)}>
      {children}
    </div>
  )
}