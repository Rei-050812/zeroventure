'use client'

import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { MotionProvider } from '@/providers/MotionProvider'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <MotionProvider>
      <div className="min-h-screen bg-white text-slate-900 flex flex-col">
        <Header />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </MotionProvider>
  )
}