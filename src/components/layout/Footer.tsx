'use client'

import Link from 'next/link'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { MotionToggle } from '@/components/ui/MotionToggle'
import { fadeUp, containerStagger } from '@/lib/animations'

const footerLinks = {
  services: {
    title: 'サービス',
    links: [
      { name: 'サービス一覧', href: '/services' },
      { name: '料金プラン', href: '/pricing' },
      { name: '制作実績', href: '/works' },
    ]
  },
  company: {
    title: '会社情報',
    links: [
      { name: 'プロフィール', href: '/about' },
      { name: 'お問い合わせ', href: '/contact' },
      { name: '法的事項', href: '/legal' },
    ]
  },
  content: {
    title: 'コンテンツ',
    links: [
      { name: 'ブログ', href: '/blog' },
      { name: 'ニュース', href: '/news' },
    ]
  }
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedElement
          variants={containerStagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <AnimatedElement variants={fadeUp} className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">ZERO</span><span style={{ color: '#4CC9F0' }}>VENTURE</span>
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                フリーランスWebデザイナー
              </p>
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