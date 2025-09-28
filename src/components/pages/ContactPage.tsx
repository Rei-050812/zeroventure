'use client'

import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { ContactForm } from '@/components/ui/ContactForm'
import { fadeUp, containerStagger } from '@/lib/animations'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'info@zeroventure.com',
    description: '24時間以内に返信いたします'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '03-1234-5678',
    description: '平日 10:00-18:00'
  },
  {
    icon: MapPin,
    title: 'Address',
    content: '東京都渋谷区道玄坂1-2-3',
    description: 'オンラインミーティングも対応'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: '平日 10:00-18:00',
    description: '土日祝日はメール対応のみ'
  }
]

const faqItems = [
  {
    question: '制作期間はどのくらいですか？',
    answer: 'プロジェクトの規模により異なりますが、LPの場合は最短1週間、コーポレートサイトは2-4週間が目安です。'
  },
  {
    question: '料金の支払い方法は？',
    answer: 'プロジェクト開始時に50%、完成・納品時に50%の分割払いが基本です。銀行振込にて承っております。'
  },
  {
    question: '保守・運用もお願いできますか？',
    answer: 'はい。月額制での保守・運用サービスも提供しております。詳細はお問い合わせください。'
  },
  {
    question: '途中での変更は可能ですか？',
    answer: '軽微な変更は可能ですが、大幅な変更の場合は追加料金が発生する場合があります。事前にご相談ください。'
  }
]

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement
          variants={containerStagger}
          className="space-y-16"
        >
          {/* Page Header */}
          <div className="text-center">
            <AnimatedElement variants={fadeUp}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Contact
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                プロジェクトのご相談・お見積もりは
                <br />
                お気軽にお問い合わせください
              </p>
            </AnimatedElement>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedElement variants={fadeUp}>
                <Card className="p-8">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl">
                      お問い合わせフォーム
                    </CardTitle>
                    <p className="text-slate-600">
                      下記フォームに必要事項をご入力の上、送信してください。
                    </p>
                  </CardHeader>
                  <CardContent className="px-0 pb-0">
                    <ContactForm />
                  </CardContent>
                </Card>
              </AnimatedElement>
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              {/* Contact Information */}
              <AnimatedElement variants={fadeUp}>
                <Card>
                  <CardHeader>
                    <CardTitle>お問い合わせ先</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="p-2 bg-primary/20 rounded-lg">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 mb-1">
                            {info.title}
                          </h4>
                          <p className="text-slate-700 font-medium">
                            {info.content}
                          </p>
                          <p className="text-slate-500 text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </AnimatedElement>

              {/* FAQ */}
              <AnimatedElement variants={fadeUp}>
                <Card>
                  <CardHeader>
                    <CardTitle>よくある質問</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {faqItems.map((item, index) => (
                        <div key={index} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                          <h4 className="font-medium text-slate-900 mb-2">
                            Q. {item.question}
                          </h4>
                          <p className="text-slate-600 text-sm">
                            A. {item.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </div>
          </div>

          {/* Additional Info */}
          <AnimatedElement variants={fadeUp} className="text-center py-16 border-t border-white/10">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                無料相談も承っております
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                プロジェクトの詳細が決まっていない段階でも、お気軽にご相談ください。
                <br />
                お客様のビジネスに最適なソリューションをご提案いたします。
                <br />
                初回相談は無料ですので、まずは一度お話しさせていただければと思います。
              </p>
            </div>
          </AnimatedElement>
        </AnimatedElement>
      </div>
    </div>
  )
}