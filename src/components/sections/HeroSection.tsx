'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Button } from '@/components/ui/Button'
import { fadeUp, containerStagger, springCTA } from '@/lib/animations'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-48 h-48 bg-primary/10 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimatedElement
          variants={containerStagger}
          className="space-y-8"
        >
          {/* Main Heading */}
          <AnimatedElement variants={fadeUp}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">ゼロから始める</span>
              <br />
              <span className="text-primary">ベンチャーの</span>
              <br />
              <span className="text-white">ブランディング</span>
            </h1>
          </AnimatedElement>

          {/* Subheading */}
          <AnimatedElement variants={fadeUp}>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              最速で結果を出すLP・コーポレートサイト制作で
              <br />
              あなたのビジネスを次のステージへ
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
              { title: "最短1週間", description: "スピーディな制作進行" },
              { title: "成果重視", description: "CVR向上にコミット" },
              { title: "運用サポート", description: "公開後も継続支援" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="text-center space-y-2"
              >
                <h3 className="text-primary font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </AnimatedElement>
        </AnimatedElement>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}