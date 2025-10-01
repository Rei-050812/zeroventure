'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Particle dot background effects
export function GlobalBackgroundEffects() {
  const [particles, setParticles] = useState<Array<{
    x: number
    y: number
    size: number
    opacity: number
    speed: number
    direction: number
  }>>([])

  useEffect(() => {
    // Generate random particles
    const generateParticles = () => {
      const newParticles = []
      const particleCount = 80 // Total number of particles

      for (let i = 0; i < particleCount; i++) {
        const particle = {
          x: Math.random() * 100, // 0% to 100%
          y: Math.random() * 100, // 0% to 100%
          size: Math.random() * 8 + 4, // 4px to 12px (larger)
          opacity: Math.random() * 0.8 + 0.4, // 0.4 to 1.2 (more visible)
          speed: Math.random() * 2 + 0.5, // 0.5 to 2.5
          direction: Math.random() * Math.PI * 2 // Random direction in radians
        }
        newParticles.push(particle)
      }

      return newParticles
    }

    setParticles(generateParticles())
  }, [])

  if (particles.length === 0) return null

  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 z-0 pointer-events-none overflow-hidden">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.02) 0%, transparent 70%)'
        }}
      />

      {/* Particle dots */}
      {particles.map((particle, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: `rgba(76, 201, 240, ${particle.opacity})`,
            boxShadow: `0 0 ${particle.size * 2}px rgba(76, 201, 240, ${particle.opacity * 0.5})`,
          }}
          animate={{
            x: [
              0,
              Math.cos(particle.direction) * 50,
              Math.cos(particle.direction + Math.PI) * 30,
              0
            ],
            y: [
              0,
              Math.sin(particle.direction) * 50,
              Math.sin(particle.direction + Math.PI) * 30,
              0
            ],
            opacity: [0.4, 1, 0.6, 0.4],
            scale: [1, 1.5, 0.8, 1]
          }}
          transition={{
            duration: particle.speed * 3 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.05
          }}
        />
      ))}
    </div>
  )
}