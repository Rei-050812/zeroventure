'use client'

import Link from 'next/link'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { MotionToggle } from '@/components/ui/MotionToggle'
import { fadeUp, containerStagger } from '@/lib/animations'

const footerLinks = {
  services: {
    title: 'サービス',
    links: [
      { name: 'LP制作', href: '/services/landing-page' },
      { name: 'コーポレートサイト', href: '/services/corporate' },
      { name: 'ブランディング', href: '/services/branding' },
    ]
  },
  company: {
    title: '会社情報',
    links: [
      { name: '会社概要', href: '/about' },
      { name: 'プライバシーポリシー', href: '/privacy' },
      { name: '特定商取引法', href: '/legal' },
    ]
  },
  content: {
    title: 'コンテンツ',
    links: [
      { name: '制作実績', href: '/works' },
      { name: 'ブログ', href: '/blog' },
      { name: 'お知らせ', href: '/news' },
    ]
  }
}

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedElement
          variants={containerStagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <AnimatedElement variants={fadeUp} className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">ZEROVENTURE</h3>
              <p className="text-gray-300 text-sm mb-4">
                ゼロから始めるベンチャーのためのブランディング・WEB制作パートナー
              </p>
              <Link
                href="/contact"
                className="bg-primary text-black px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors duration-200 inline-block"
              >
                お問い合わせ
              </Link>
            </div>
          </AnimatedElement>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <AnimatedElement key={key} variants={fadeUp} className="lg:col-span-1">
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedElement>
          ))}
        </AnimatedElement>

        {/* Animation Toggle & Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-16">
          <AnimatedElement
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} ZEROVENTURE. All rights reserved.
            </div>

            {/* Motion Toggle */}
            <MotionToggle />

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/zeroventure"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
              <Link
                href="https://instagram.com/zeroventure"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
              <Link
                href="https://linkedin.com/company/zeroventure"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </footer>
  )
}