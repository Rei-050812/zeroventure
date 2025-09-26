'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { cn } from '@/lib/utils'
import { slideInFromLeft, fade } from '@/lib/animations'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Works', href: '/works' },
  { name: 'Blog', href: '/blog' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out',
        isScrolled
          ? 'h-12 bg-black/90 backdrop-blur-md border-b border-white/10'
          : 'h-16 bg-transparent'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-white">
            ZEROVENTURE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-primary transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-150 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="bg-primary text-black px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              お問い合わせ
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニューを開く"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10"
          >
            <nav className="px-4 py-6">
              <motion.div
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.1
                    }
                  }
                }}
                animate="animate"
                className="flex flex-col space-y-4"
              >
                {navigation.map((item) => (
                  <AnimatedElement
                    key={item.name}
                    variants={slideInFromLeft}
                    as="div"
                  >
                    <Link
                      href={item.href}
                      className="text-white hover:text-primary transition-colors duration-200 block py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </AnimatedElement>
                ))}
                <AnimatedElement variants={fade} as="div" className="pt-4">
                  <Link
                    href="/contact"
                    className="bg-primary text-black px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors duration-200 inline-block text-center w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    お問い合わせ
                  </Link>
                </AnimatedElement>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}