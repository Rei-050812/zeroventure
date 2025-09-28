import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { fadeUp, containerStagger } from '@/lib/animations'
import { Check, ArrowRight, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing | ZEROVENTURE',
  description: 'ZEROVENTUREの料金プランをご確認ください。透明性のある料金設定で、お客様のニーズに合わせたプランをご提供します。',
}

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

const addOns = [
  {
    title: 'Google Analytics・GTM設定',
    price: '50,000円',
    description: 'アクセス解析とコンバージョン測定の設定'
  },
  {
    title: '追加ページ制作',
    price: '80,000円/ページ',
    description: 'メインページ以外の追加ページ制作'
  },
  {
    title: 'アニメーション実装',
    price: '100,000円',
    description: 'Framer Motionを使用した高品質アニメーション'
  },
  {
    title: 'パフォーマンス最適化',
    price: '80,000円',
    description: 'ページ速度最適化とCore Web Vitals改善'
  }
]

const faq = [
  {
    question: '修正回数に制限はありますか？',
    answer: 'Simpleプランは3回まで、Standardプランは無制限で修正対応いたします。大きな仕様変更の場合は別途ご相談となります。'
  },
  {
    question: '納期はどのくらいですか？',
    answer: 'Simpleプランは最短1週間、Standardプランは2-4週間が目安です。内容や修正回数により変動する場合があります。'
  },
  {
    question: '支払い方法は？',
    answer: '着手金50%、納品時50%の分割払いとなります。銀行振込またはクレジットカード決済が可能です。'
  },
  {
    question: '運用サポートは含まれますか？',
    answer: 'Standardプランには3ヶ月間の運用サポートが含まれます。Simpleプランは別途オプションでご提供可能です。'
  }
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://source.unsplash.com/1920x1080/?pricing,business,calculator"
            alt="Pricing Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedElement variants={containerStagger} className="text-center">
            <AnimatedElement variants={fadeUp}>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Pricing
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                透明性のある料金設定で<br />
                お客様のニーズに合わせたプランをご提供
              </p>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <AnimatedElement key={index} variants={fadeUp}>
                  <Card className={`relative bg-white border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 h-full ${
                    plan.popular ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200'
                  }`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                          <Star size={16} />
                          おすすめ
                        </div>
                      </div>
                    )}

                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl font-bold text-slate-900">
                        {plan.name}
                      </CardTitle>
                      <CardDescription className="text-slate-600">
                        {plan.description}
                      </CardDescription>
                      <div className="py-4">
                        <span className="text-4xl font-bold text-slate-900">
                          {plan.price}
                        </span>
                        <span className="text-slate-500 ml-2">{plan.period}</span>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-primary" />
                            <span className="text-slate-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    <CardFooter>
                      <Button
                        variant={plan.popular ? 'primary' : 'outline'}
                        size="lg"
                        className="w-full"
                      >
                        <Link href="/contact" className="flex items-center gap-2 justify-center">
                          {plan.buttonText}
                          <ArrowRight size={20} />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <AnimatedElement variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                オプションサービス
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                基本プランにプラスして、<br />
                より充実したWebサイトを構築できます。
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOns.map((addon, index) => (
                <AnimatedElement key={index} variants={fadeUp}>
                  <Card className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {addon.title}
                        </h3>
                        <span className="text-primary font-bold">
                          {addon.price}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm">
                        {addon.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <AnimatedElement variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                よくある質問
              </h2>
            </AnimatedElement>

            <div className="space-y-6">
              {faq.map((item, index) => (
                <AnimatedElement key={index} variants={fadeUp}>
                  <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">
                        {item.question}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement variants={containerStagger}>
            <AnimatedElement variants={fadeUp}>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                お気軽にご相談ください
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                お客様のご要望に合わせて、<br />
                最適なプランをご提案いたします。
              </p>
              <Button size="lg" className="min-w-[200px]">
                <Link href="/contact" className="flex items-center gap-2">
                  無料相談を申し込む
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </section>
    </main>
  )
}