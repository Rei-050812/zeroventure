'use client'

import { motion } from 'framer-motion'

// Line graph inspired background effects for ZEROVENTURE
export function GlobalBackgroundEffects() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ bottom: '300px' }}>
      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.02) 0%, transparent 70%)'
        }}
      />

      {/* Line chart paths - zigzag growth patterns */}
      <svg className="absolute" style={{ left: '12%', top: '25%', width: '180px', height: '100px' }}>
        <motion.polyline
          fill="none"
          stroke="rgba(168, 85, 247, 0.4)"
          strokeWidth="2"
          points="0,80 30,60 60,70 90,40 120,50 150,20 180,30"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.8, 0.8, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1]
          }}
        />
      </svg>

      <svg className="absolute" style={{ left: '55%', top: '38%', width: '200px', height: '120px' }}>
        <motion.polyline
          fill="none"
          stroke="rgba(168, 85, 247, 0.35)"
          strokeWidth="2"
          points="0,100 40,80 80,85 120,60 160,65 200,40"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.7, 0.7, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
            times: [0, 0.3, 0.7, 1]
          }}
        />
      </svg>

      <svg className="absolute" style={{ left: '25%', top: '55%', width: '160px', height: '90px' }}>
        <motion.polyline
          fill="none"
          stroke="rgba(168, 85, 247, 0.45)"
          strokeWidth="2"
          points="0,70 35,50 70,55 105,30 140,35 160,15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.85, 0.85, 0]
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
            times: [0, 0.3, 0.7, 1]
          }}
        />
      </svg>

      <svg className="absolute" style={{ left: '68%', top: '60%', width: '140px', height: '80px' }}>
        <motion.polyline
          fill="none"
          stroke="rgba(168, 85, 247, 0.38)"
          strokeWidth="2"
          points="0,60 28,45 56,52 84,35 112,40 140,22"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.75, 0.75, 0]
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
            times: [0, 0.3, 0.7, 1]
          }}
        />
      </svg>

      {/* Downward trend lines for variety */}
      <svg className="absolute" style={{ left: '8%', top: '45%', width: '120px', height: '70px' }}>
        <motion.polyline
          fill="none"
          stroke="rgba(168, 85, 247, 0.3)"
          strokeWidth="1.5"
          points="0,20 30,35 60,30 90,50 120,55"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.65, 0.65, 0]
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
            times: [0, 0.3, 0.7, 1]
          }}
        />
      </svg>

      <svg className="absolute" style={{ left: '78%', top: '32%', width: '100px', height: '60px' }}>
        <motion.polyline
          fill="none"
          stroke="rgba(168, 85, 247, 0.32)"
          strokeWidth="1.5"
          points="0,15 25,28 50,25 75,40 100,45"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.7, 0.7, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
            times: [0, 0.3, 0.7, 1]
          }}
        />
      </svg>
    </div>
  )
}