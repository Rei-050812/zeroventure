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
  { name: 'Profile', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Works', href: '/works' },
  { name: 'Pricing', href: '/pricing' },
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
          ? 'h-12 bg-gray-900/95 backdrop-blur-md border-b border-gray-700 shadow-sm'
          : 'h-16 bg-gray-900/80 backdrop-blur-sm'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl">
            <span className="text-white">ZERO</span><span style={{ color: '#4CC9F0' }}>VENTURE</span>
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
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-700 shadow-lg"
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
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}