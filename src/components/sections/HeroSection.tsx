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
              シンプルかつ迷わない設計で、使いやすく成果につながるサイトへ。
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
              { title: "成果に直結", description: "分かりやすい流れと工夫で、お問い合わせや購入を増やす" },
              { title: "公開後も伴走", description: "継続的なサポートで、事業の成長を後押し" }
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