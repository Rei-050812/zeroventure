'use client'

import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { ContactForm } from '@/components/ui/ContactForm'
import { fadeUp, containerStagger } from '@/lib/animations'
import { MapPin, Mail, Clock } from 'lucide-react'

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <div className="text-center">
              <AnimatedElement variants={fadeUp}>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  お問い合わせ
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  お気軽にご相談ください。
                  <br />
                  初めての方も安心してご相談いただけます。
                </p>
              </AnimatedElement>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <AnimatedElement variants={fadeUp}>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">
                  お気軽にご連絡ください
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#4CC9F0] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#4CC9F0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">メール</h3>
                      <p className="text-slate-600">r-numanou@zero-venture.com</p>
                      <p className="text-sm text-slate-500 mt-1">
                        なるべく早く返信いたします
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#4CC9F0] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#4CC9F0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">営業時間</h3>
                      <p className="text-slate-600">平日 9:00 - 18:00</p>
                      <p className="text-sm text-slate-500 mt-1">
                        土日祝日はお休みをいただいております
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#4CC9F0] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#4CC9F0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">所在地</h3>
                      <p className="text-slate-600">千葉県千葉市緑区</p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedElement variants={fadeUp}>
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    プロジェクトについて教えてください
                  </h2>
                  <ContactForm />
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}