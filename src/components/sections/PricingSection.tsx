'use client'

import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { fadeUp, containerStagger } from '@/lib/animations'

const pricingPlans = [
  {
    name: 'LP Plan',
    description: '成果を最短で引き出す1ページ完結型サイト',
    originalPrice: '80,000',
    price: '64,000',
    period: '（税込）',
    features: [
      'スマホ対応のシンプルデザイン',
      '必要な情報を1ページに集約',
      '短時間で成果が出る構成設計',
      '広告やキャンペーンに最適化',
      '行動につながる導線設計'
    ],
    popular: false,
    buttonText: 'このプランで相談する'
  },
  {
    name: 'Portfolio Site Plan',
    description: '作品や実績を引き立てるクリエイター向けサイト',
    originalPrice: '100,000',
    price: '80,000',
    period: '（税込）',
    features: [
      'ギャラリー機能で作品を表示',
      'プロフィール・自己紹介ページ',
      'SNSや外部リンクの設置',
      '作品が美しく見える表示設計',
      '信頼感を高める自己ブランディング設計'
    ],
    popular: false,
    buttonText: 'このプランで相談する'
  },
  {
    name: 'Recruit Site Plan',
    description: '会社の魅力を伝えて人材を惹きつける採用サイト',
    originalPrice: '150,000',
    price: '120,000',
    period: '（税込）',
    features: [
      '求人一覧・詳細ページを用意',
      '社員紹介や会社紹介ページ',
      '応募フォーム設置',
      '外部求人サービスとの連携可能',
      '応募意欲を高める採用ブランディング'
    ],
    popular: false,
    buttonText: 'このプランで相談する'
  },
  {
    name: 'Media Site Plan',
    description: '記事更新でアクセスを増やす情報発信サイト',
    originalPrice: '180,000',
    price: '144,000',
    period: '（税込）',
    features: [
      '記事投稿機能',
      '関連記事や人気記事の表示',
      'カテゴリ・タグで情報を整理',
      'アクセス解析・計測機能を搭載',
      '継続的な集客を実現する仕組み'
    ],
    popular: false,
    buttonText: 'このプランで相談する'
  },
  {
    name: 'Corporate Site Plan',
    description: '企業の信頼とブランドを確立する公式サイト',
    originalPrice: '200,000',
    price: '160,000',
    period: '（税込）',
    features: [
      '企業の強みを伝える情報設計',
      'ご要望に合わせたデザイン調整',
      'ニュースやお知らせを更新可能',
      '信頼性を高める情報構成',
      'ブランド価値を訴求するデザイン'
    ],
    popular: true,
    buttonText: 'このプランで相談する'
  }
]

export function PricingSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <AnimatedElement
          variants={containerStagger}
          className="space-y-16"
        >
          {/* Pricing Header */}
          <div className="text-center">
            <AnimatedElement variants={fadeUp}>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Pricing
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                目的に合わせて選べる料金プラン
              </p>
            </AnimatedElement>
          </div>

          {/* Pricing Cards */}
          <div className="space-y-8">
            {/* First 3 plans - 3 columns */}
            <AnimatedElement
              variants={containerStagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {pricingPlans.slice(0, 3).map((plan, index) => (
                <AnimatedElement key={index} variants={fadeUp}>
                  <Card
                    className={`relative h-full ${
                      plan.popular
                        ? 'border-primary bg-white'
                        : 'border-gray-200'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-white text-sm px-6 py-2 rounded-full font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                      <CardDescription className="mb-4 text-sm">
                        {plan.description}
                      </CardDescription>
                      <div className="mb-2">
                        <div className="text-sm text-slate-400 line-through mb-1">
                          通常：¥{plan.originalPrice}
                        </div>
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-sm text-primary font-medium">初回：</span>
                          <span className="text-3xl font-bold text-primary">
                            ¥{plan.price}
                          </span>
                          <span className="text-slate-500 text-sm">
                            {plan.period}
                          </span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </CardContent>

                    <CardFooter>
                      <Button
                        variant={plan.popular ? "primary" : "outline"}
                        size="lg"
                        className="w-full"
                      >
                        <Link href="/contact" className="flex items-center gap-2 justify-center w-full">
                          {plan.buttonText}
                          <ArrowRight size={18} />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimatedElement>
              ))}
            </AnimatedElement>

            {/* Last 2 plans - 2 columns */}
            <AnimatedElement
              variants={containerStagger}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {pricingPlans.slice(3, 5).map((plan, index) => (
                <AnimatedElement key={index + 3} variants={fadeUp}>
                  <Card
                    className={`relative h-full ${
                      plan.popular
                        ? 'border-primary bg-white'
                        : 'border-gray-200'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-white text-sm px-6 py-2 rounded-full font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                      <CardDescription className="mb-4 text-sm">
                        {plan.description}
                      </CardDescription>
                      <div className="mb-2">
                        <div className="text-sm text-slate-400 line-through mb-1">
                          通常：¥{plan.originalPrice}
                        </div>
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-sm text-primary font-medium">初回：</span>
                          <span className="text-3xl font-bold text-primary">
                            ¥{plan.price}
                          </span>
                          <span className="text-slate-500 text-sm">
                            {plan.period}
                          </span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </CardContent>

                    <CardFooter>
                      <Button
                        variant={plan.popular ? "primary" : "outline"}
                        size="lg"
                        className="w-full"
                      >
                        <Link href="/contact" className="flex items-center gap-2 justify-center w-full">
                          {plan.buttonText}
                          <ArrowRight size={18} />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimatedElement>
              ))}
            </AnimatedElement>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
}