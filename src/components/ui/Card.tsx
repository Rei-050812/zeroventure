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
        'bg-white border border-gray-200 rounded-lg p-6 shadow-sm',
        hover && 'hover:shadow-md hover:border-gray-300',
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
    <h3 className={cn('text-xl font-semibold text-slate-900', className)}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('text-slate-600 text-sm', className)}>
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
    <div className={cn('mt-4 pt-4 border-t border-gray-200', className)}>
      {children}
    </div>
  )
}