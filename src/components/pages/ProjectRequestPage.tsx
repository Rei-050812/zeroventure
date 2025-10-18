'use client'

import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { ProjectRequestForm } from '@/components/ui/ProjectRequestForm'
import { fadeUp, containerStagger } from '@/lib/animations'
import Link from 'next/link'

export function ProjectRequestPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <div className="text-center">
              <AnimatedElement variants={fadeUp}>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Request
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
                  プランや要望をお聞かせください
                </p>
                <p className="text-base text-slate-500 max-w-2xl mx-auto">
                  ご希望のプランやデザインの雰囲気など、詳しくお聞かせください
                </p>
              </AnimatedElement>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={fadeUp}>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
              <ProjectRequestForm />
            </div>
          </AnimatedElement>

          {/* Footer Information */}
          <AnimatedElement variants={fadeUp}>
            <div className="mt-12 text-center space-y-4">
              <p className="text-sm text-slate-600">
                ご連絡をお待ちしております
              </p>
              <p className="text-sm text-slate-500">
                <Link
                  href="/pricing"
                  className="text-primary hover:underline"
                >
                  詳しい料金プランはこちら
                </Link>
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
