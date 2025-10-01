'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Professional grid and geometric background effects for web design agency
export function GlobalBackgroundEffects() {
  const [elements, setElements] = useState<Array<{
    position: { left?: string; right?: string; top: string }
    type: number
  }>>([])

  useEffect(() => {
    // Generate random positions for elements throughout the entire page
    const generateElements = () => {
      const newElements = []
      const sections = 10 // Divide page into 10 vertical sections for full coverage
      const elementsPerSection = 5 // 5 elements per section = 50 total

      for (let section = 0; section < sections; section++) {
        for (let i = 0; i < elementsPerSection; i++) {
          const x = Math.random() * 90 + 2 // 2% to 92%
          // Spread vertically using percentage to fill container (avoiding footer)
          const y = (section * 10) + (Math.random() * 10)

          const position = Math.random() > 0.5
            ? { left: `${x}%`, top: `${y}%` }
            : { right: `${100 - x}%`, top: `${y}%` }

          // Randomly assign one of 12 element types
          const type = Math.floor(Math.random() * 12)

          newElements.push({ position, type })
        }
      }

      return newElements
    }

    setElements(generateElements())
  }, [])

  if (elements.length === 0) return null

  // Helper function to render element by type
  const renderElement = (element: { position: { left?: string; right?: string; top: string }, type: number }, index: number) => {
    const { position, type } = element
    const key = `element-${index}`

    switch (type) {
      case 0: // Browser window 1
        return (
          <motion.div
            key={key}
            className="absolute border border-purple-200/30 rounded-lg backdrop-blur-sm shadow-md"
            style={{
              width: '180px',
              height: '120px',
              ...position,
              background: 'rgba(255, 255, 255, 0.04)'
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [-2, 2, -2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="h-6 bg-purple-100/20 rounded-t-lg flex items-center px-2 gap-1">
              <div className="w-2 h-2 rounded-full bg-purple-300/60"></div>
              <div className="w-2 h-2 rounded-full bg-purple-300/60"></div>
              <div className="w-2 h-2 rounded-full bg-purple-300/60"></div>
            </div>
          </motion.div>
        )

      case 1: // Browser window 2
        return (
          <motion.div
            key={key}
            className="absolute border border-purple-200/30 rounded-lg backdrop-blur-sm shadow-md"
            style={{
              width: '200px',
              height: '140px',
              ...position,
              background: 'rgba(255, 255, 255, 0.04)'
            }}
            animate={{
              y: [0, 25, 0],
              rotate: [2, -2, 2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <div className="h-6 bg-purple-100/20 rounded-t-lg flex items-center px-2 gap-1">
              <div className="w-2 h-2 rounded-full bg-purple-300/60"></div>
              <div className="w-2 h-2 rounded-full bg-purple-300/60"></div>
              <div className="w-2 h-2 rounded-full bg-purple-300/60"></div>
            </div>
          </motion.div>
        )

      case 2: // Code snippet
        return (
          <motion.div
            key={key}
            className="absolute border border-purple-200/30 rounded-lg backdrop-blur-sm p-3 shadow-md"
            style={{
              width: '160px',
              height: '100px',
              ...position,
              background: 'rgba(255, 255, 255, 0.03)'
            }}
            animate={{
              y: [0, -18, 0],
              rotate: [1, -1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          >
            <div className="space-y-2">
              <div className="h-1.5 bg-purple-300/50 rounded w-3/4"></div>
              <div className="h-1.5 bg-purple-300/45 rounded w-full"></div>
              <div className="h-1.5 bg-purple-300/40 rounded w-2/3"></div>
            </div>
          </motion.div>
        )

      case 3: // Mobile frame
        return (
          <motion.div
            key={key}
            className="absolute border border-purple-200/30 rounded-2xl backdrop-blur-sm shadow-md"
            style={{
              width: '80px',
              height: '140px',
              ...position,
              background: 'rgba(255, 255, 255, 0.03)'
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [-3, 3, -3],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-purple-300/40 rounded-full"></div>
          </motion.div>
        )

      case 4: // Image placeholder
        return (
          <motion.div
            key={key}
            className="absolute border border-purple-200/30 rounded-lg backdrop-blur-sm shadow-md overflow-hidden"
            style={{
              width: '140px',
              height: '100px',
              ...position,
              background: 'rgba(255, 255, 255, 0.03)'
            }}
            animate={{
              y: [0, -12, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className="w-full h-full flex items-center justify-center bg-purple-100/20">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
          </motion.div>
        )

      case 5: // Text block
        return (
          <motion.div
            key={key}
            className="absolute border border-purple-200/30 rounded-lg backdrop-blur-sm p-3 shadow-md"
            style={{
              width: '170px',
              height: '90px',
              ...position,
              background: 'rgba(255, 255, 255, 0.03)'
            }}
            animate={{
              y: [0, 15, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
          >
            <div className="space-y-2">
              <div className="h-2 bg-purple-300/50 rounded w-4/5"></div>
              <div className="h-1 bg-purple-300/40 rounded w-full"></div>
              <div className="h-1 bg-purple-300/40 rounded w-full"></div>
              <div className="h-1 bg-purple-300/40 rounded w-3/4"></div>
            </div>
          </motion.div>
        )

      case 6: // Button
        return (
          <motion.div
            key={key}
            className="absolute border border-purple-200/30 rounded-full backdrop-blur-sm shadow-sm px-4 py-2"
            style={{
              ...position,
              background: 'rgba(168, 85, 247, 0.08)'
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
          >
            <div className="text-xs font-medium text-purple-400/80">Button</div>
          </motion.div>
        )

      case 7: // Menu bars
        return (
          <motion.div
            key={key}
            className="absolute"
            style={position}
            animate={{
              y: [0, -10, 0],
              opacity: [0.25, 0.45, 0.25]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3.5
            }}
          >
            <div className="space-y-1.5">
              <div className="w-8 h-0.5 bg-purple-300/60 rounded"></div>
              <div className="w-8 h-0.5 bg-purple-300/60 rounded"></div>
              <div className="w-8 h-0.5 bg-purple-300/60 rounded"></div>
            </div>
          </motion.div>
        )

      case 8: // Search bar
        return (
          <motion.div
            key={key}
            className="absolute border border-purple-200/30 rounded-full backdrop-blur-sm shadow-sm px-3 py-1.5 flex items-center gap-2"
            style={{
              ...position,
              background: 'rgba(255, 255, 255, 0.03)'
            }}
            animate={{
              scale: [1, 1.03, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <div className="h-0.5 w-16 bg-purple-300/30 rounded"></div>
          </motion.div>
        )

      case 9: // Icon star
        return (
          <motion.div
            key={key}
            className="absolute"
            style={position}
            animate={{
              rotate: [0, 360],
              opacity: [0.25, 0.4, 0.25]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </motion.div>
        )

      case 10: // Pixel dots
        return (
          <motion.div
            key={key}
            className="absolute"
            style={position}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-purple-300/60 rounded-sm shadow-sm"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1
                  }}
                />
              ))}
            </div>
          </motion.div>
        )

      case 11: // Cursor
        return (
          <motion.div
            key={key}
            className="absolute"
            style={position}
            animate={{
              x: [0, 20, 0],
              y: [0, -15, 0],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 3L10.5 21L13.5 13.5L21 10.5L3 3Z" fill="rgba(168, 85, 247, 0.2)" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1.5"/>
            </svg>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="absolute left-0 right-0 top-0 bottom-[400px] z-0 pointer-events-none">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.02) 0%, transparent 70%)'
        }}
      />

      {/* Subtle grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-15">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Render all elements */}
      {elements.map((element, index) => renderElement(element, index))}
    </div>
  )
}