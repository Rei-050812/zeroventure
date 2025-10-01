'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Reusable Section Background Effects (same as Hero)
export function SectionBackgroundEffects() {
  return (
    <div className="absolute inset-0 z-0">
      <SectionAnimatedBackground />
      <SectionGeometricShapes />
      <SectionParticles />
      <SectionLightStreams />
      <SectionGridPattern />
    </div>
  )
}

// Hero-style animated background for sections
function SectionAnimatedBackground() {
  return (
    <div className="absolute inset-0">
      {/* Base white background */}
      <div className="absolute inset-0 bg-white" />

      {/* Enhanced gradient animation */}
      <motion.div
        className="absolute inset-0 z-5"
        animate={{
          background: [
            'radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.2) 0%, rgba(79, 70, 229, 0.1) 50%, transparent 80%)',
            'radial-gradient(circle at 70% 60%, rgba(139, 92, 246, 0.25) 0%, rgba(79, 70, 229, 0.12) 50%, transparent 80%)',
            'radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.22) 0%, rgba(79, 70, 229, 0.11) 50%, transparent 80%)',
            'radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.2) 0%, rgba(79, 70, 229, 0.1) 50%, transparent 80%)'
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

// Refined Geometric Elements for sections
function SectionGeometricShapes() {
  return (
    <div className="absolute inset-0 z-15 pointer-events-none">
      {/* Elegant Geometric Lines */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(139, 92, 246, 0.6), transparent)',
          boxShadow: '0 0 8px rgba(139, 92, 246, 0.2)'
        }}
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.8, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-px h-32"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.6), transparent)',
          boxShadow: '0 0 8px rgba(139, 92, 246, 0.2)'
        }}
        animate={{
          scaleY: [0, 1, 0],
          opacity: [0, 0.8, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Refined Floating Circles */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full border-2 border-purple-500 bg-purple-200/80"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + Math.sin(i) * 20}%`,
            boxShadow: '0 4px 16px rgba(139, 92, 246, 0.4)'
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8
          }}
        />
      ))}

      {/* Subtle Corner Accents */}
      <motion.div
        className="absolute top-8 right-8 w-16 h-16 border-t border-r border-purple-400/40"
        animate={{
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-purple-400/40"
        animate={{
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
    </div>
  )
}

// Light Theme Floating Elements for sections
function SectionParticles() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
  }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 3,
      delay: Math.random() * 4
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-200/80 border border-purple-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)'
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 6 + particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}
    </div>
  )
}

// Soft Light Streams for sections
function SectionLightStreams() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute"
          style={{
            left: `${25 + i * 25}%`,
            top: '0%',
            width: '1px',
            height: '100%',
            background: 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.5), transparent)',
            boxShadow: '0 0 8px rgba(139, 92, 246, 0.3)'
          }}
          animate={{
            scaleY: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5
          }}
        />
      ))}
    </div>
  )
}

// Enhanced grid pattern for sections
function SectionGridPattern() {
  return (
    <div className="absolute inset-0 z-5">
      <div className="absolute inset-0 opacity-15" style={{
        backgroundImage: `
          linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />
    </div>
  )
}