'use client'

import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { fadeUp, containerStagger } from '@/lib/animations'

const pricingPlans = [
  {
    name: 'Simple',
    description: 'スピーディにLPを制作したい方におすすめ',
    price: '298,000',
    period: '円〜',
    features: [
      'レスポンシブデザイン',
      '基本的なSEO対策',
      'お問い合わせフォーム',
      '最短1週間での納期',
      'CMS導入（WordPress）',
      '3回までの修正対応'
    ],
    popular: false,
    buttonText: 'プランを選択'
  },
  {
    name: 'Standard',
    description: '本格的なサイト制作をお求めの方におすすめ',
    price: '598,000',
    period: '円〜',
    features: [
      'オリジナルデザイン',
      '高度なSEO対策',
      'アニメーション実装',
      'パフォーマンス最適化',
      'CMS導入（選択可能）',
      '無制限の修正対応',
      '3ヶ月間の運用サポート',
      'Google Analytics設定',
      'サーバー・ドメイン設定代行'
    ],
    popular: true,
    buttonText: 'おすすめプラン'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Inquiry',
    description: 'お問い合わせ',
    detail: 'まずはお気軽にご相談ください。24時間以内にご返信いたします。'
  },
  {
    step: '02',
    title: 'Hearing',
    description: 'ヒアリング',
    detail: 'お客様のご要望や課題を詳しくお聞きし、最適なプランをご提案します。'
  },
  {
    step: '03',
    title: 'Design',
    description: 'デザイン・開発',
    detail: 'デザイン制作から開発まで、プロフェッショナルチームが担当します。'
  },
  {
    step: '04',
    title: 'Delivery',
    description: '納品・公開',
    detail: 'テスト完了後、本番環境への公開とアフターサポートを提供します。'
  }
]

export function PricingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement
          variants={containerStagger}
          className="space-y-20"
        >
          {/* Pricing Header */}
          <div className="text-center">
            <AnimatedElement variants={fadeUp}>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Pricing
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                シンプルで分かりやすい料金体系
                <br />
                追加費用は一切なし
              </p>
            </AnimatedElement>
          </div>

          {/* Pricing Cards */}
          <AnimatedElement
            variants={containerStagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {pricingPlans.map((plan, index) => (
              <AnimatedElement key={index} variants={fadeUp}>
                <Card
                  className={`relative ${
                    plan.popular
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-black text-sm px-6 py-2 rounded-full font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <CardDescription className="mb-4">
                      {plan.description}
                    </CardDescription>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary">
                        ¥{plan.price}
                      </span>
                      <span className="text-slate-500 ml-2">
                        {plan.period}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </CardContent>

                  <CardFooter>
                    <Button
                      variant={plan.popular ? "primary" : "outline"}
                      size="lg"
                      className="w-full"
                    >
                      <Link href="/contact" className="flex items-center gap-2">
                        {plan.buttonText}
                        <ArrowRight size={20} />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedElement>
            ))}
          </AnimatedElement>

          {/* Process Flow */}
          <div className="pt-16">
            <AnimatedElement variants={fadeUp} className="text-center mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Process Flow
              </h3>
              <p className="text-slate-600">
                制作の流れ
              </p>
            </AnimatedElement>

            <AnimatedElement
              variants={containerStagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {processSteps.map((step, index) => (
                <AnimatedElement key={index} variants={fadeUp}>
                  <div className="text-center space-y-4 relative">
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                    )}
                    <div className="w-16 h-16 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-primary font-bold text-lg">
                        {step.step}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900">
                      {step.title}
                    </h4>
                    <p className="text-primary font-medium">
                      {step.description}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </AnimatedElement>
              ))}
            </AnimatedElement>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}