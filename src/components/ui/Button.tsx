'use client'

import { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useMotionContext } from '@/providers/MotionProvider'

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'md',
    children,
    disabled,
    ...props
  }, ref) => {
    const { shouldReduceMotion } = useMotionContext()

    const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed'

    const variantClasses = {
      primary: 'bg-primary text-white hover:bg-primary/90',
      secondary: 'bg-white text-black hover:bg-gray-100',
      outline: 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white',
      ghost: 'text-white hover:bg-white/10'
    }

    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3',
      lg: 'px-8 py-4 text-lg'
    }

    const MotionButton = motion.button

    return (
      <MotionButton
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        disabled={disabled}
        whileHover={!shouldReduceMotion ? { scale: 1.05 } : undefined}
        whileTap={!shouldReduceMotion ? { scale: 0.95 } : undefined}
        transition={{
          type: 'spring',
          stiffness: 340,
          damping: 24
        }}
        {...props}
      >
        {children}
      </MotionButton>
    )
  }
)

Button.displayName = 'Button'