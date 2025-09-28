'use client'

import { motion, MotionProps, Variants } from 'framer-motion'
import { useMotionContext } from '@/providers/MotionProvider'
import { forwardRef, ReactNode } from 'react'

interface AnimatedElementProps extends MotionProps {
  children: ReactNode
  variants?: Variants
  className?: string
  as?: keyof typeof motion
  reducedMotionFallback?: 'fade' | 'none'
}

export const AnimatedElement = forwardRef<any, AnimatedElementProps>(
  ({
    children,
    variants,
    className,
    as = 'div',
    reducedMotionFallback = 'fade',
    ...props
  }, ref) => {
    const { shouldReduceMotion } = useMotionContext()
    const MotionComponent = motion[as]

    const reducedVariants: Variants = {
      initial: { opacity: reducedMotionFallback === 'fade' ? 0 : 1 },
      animate: { opacity: 1 }
    }

    const finalVariants = shouldReduceMotion && variants
      ? reducedVariants
      : variants

    return (
      <MotionComponent
        ref={ref}
        className={className}
        variants={finalVariants}
        initial="initial"
        animate="animate"
        whileInView="animate"
        viewport={{ once: true, margin: "-10%" }}
        {...props}
      >
        {children}
      </MotionComponent>
    )
  }
)

AnimatedElement.displayName = 'AnimatedElement'