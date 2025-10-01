'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Button } from '@/components/ui/Button'
import { fadeUp, containerStagger, springCTA } from '@/lib/animations'
import { useEffect, useState } from 'react'

// Refined Mouse Follower for Light Theme
function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        left: mousePosition.x - 8,
        top: mousePosition.y - 8,
      }}
      animate={{
        scale: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div
        className="w-4 h-4 rounded-full border border-purple-400/60 bg-purple-100/40"
        style={{
          boxShadow: '0 2px 8px rgba(139, 92, 246, 0.2)'
        }}
      />
    </motion.div>
  )
}

// Typing Effect Component
function TypingEffect({ text, className }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="ml-1"
      >
        |
      </motion.span>
    </span>
  )
}

// Elegant Light Background
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0">
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

      {/* Enhanced grid pattern */}
      <div className="absolute inset-0 opacity-15 z-5" style={{
        backgroundImage: `
          linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />
    </div>
  )
}

// Refined Geometric Elements for Light Theme
function SophisticatedShapes() {
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

// Light Theme Floating Elements
function SubtleFloatingElements() {
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

      {/* Soft Light Streams */}
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

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 sm:pt-0">
      {/* Interactive Mouse Follower */}
      <MouseFollower />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <AnimatedElement
          variants={containerStagger}
          className="space-y-8"
        >
          {/* Main Heading */}
          <AnimatedElement variants={fadeUp}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <motion.span
                className="text-slate-900 block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                信頼できる
              </motion.span>
              <br />
              <motion.span
                className="block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
              >
                <TypingEffect text="Webサイト制作" className="text-[#4CC9F0]" />
              </motion.span>
            </h1>
          </AnimatedElement>

          {/* Subheading */}
          <AnimatedElement variants={fadeUp}>
            <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              迷わせない導線と計測で、結果につながるサイトへ。
            </p>
          </AnimatedElement>

          {/* CTA Buttons */}
          <AnimatedElement variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <motion.div
              variants={springCTA}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <Button size="lg" className="min-w-[200px]">
                <Link href="/contact" className="flex items-center gap-2">
                  お問い合わせ
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={springCTA}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <Button variant="outline" size="lg" className="min-w-[200px]">
                <Link href="/works">
                  制作実績を見る
                </Link>
              </Button>
            </motion.div>
          </AnimatedElement>

          {/* Key Points */}
          <AnimatedElement
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto"
          >
            {[
              { title: "スピード × 品質", description: "迅速かつ丁寧に、信頼できるWebサイトを届ける" },
              { title: "成果に直結", description: "情報設計と計測で、コンバージョンを伸ばす" },
              { title: "公開後も伴走", description: "改善と運用まで支え、事業の成長を後押し" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="text-center space-y-2"
              >
                <h3 className="text-[#4CC9F0] font-semibold text-lg">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </AnimatedElement>
        </AnimatedElement>
      </motion.div>

    </section>
  )
}