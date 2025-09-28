import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { fadeUp, containerStagger } from '@/lib/animations'
import { Monitor, Smartphone, TrendingUp, Users, Zap, Shield, ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | ZEROVENTURE',
  description: 'ZEROVENTUREが提供するLP制作・コーポレートサイト制作サービスの詳細をご紹介します。',
}

const services = [
  {
    title: 'LP制作',
    description: 'コンバージョン率を最大化するランディングページを制作',
    icon: TrendingUp,
    price: '298,000円〜',
    features: [
      'レスポンシブデザイン',
      '基本的なSEO対策',
      'お問い合わせフォーム',
      '最短1週間での納期',
      'CMS導入（WordPress）',
      '3回までの修正対応'
    ],
    image: 'https://source.unsplash.com/800x600/?laptop,design'
  },
  {
    title: 'コーポレートサイト',
    description: '企業の信頼性を高める本格的なコーポレートサイト',
    icon: Monitor,
    price: '598,000円〜',
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
    image: 'https://source.unsplash.com/800x600/?corporate,website'
  }
]

const process = [
  {
    step: '01',
    title: 'ヒアリング',
    description: 'お客様のビジネス課題や目標、ターゲットユーザーについて詳しくお聞きします。'
  },
  {
    step: '02',
    title: '企画・設計',
    description: 'ヒアリング内容を基に、最適なサイト構成とデザイン方針を企画します。'
  },
  {
    step: '03',
    title: 'デザイン制作',
    description: 'ブランドイメージを反映したオリジナルデザインを制作します。'
  },
  {
    step: '04',
    title: 'コーディング',
    description: '最新技術を使用して、高品質なWebサイトを構築します。'
  },
  {
    step: '05',
    title: 'テスト・納品',
    description: '動作確認とテストを実施後、サイトを公開・納品いたします。'
  },
  {
    step: '06',
    title: '運用サポート',
    description: '公開後も継続的な運用サポートと改善提案を行います。'
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 bg-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedElement variants={containerStagger} className="text-center">
            <AnimatedElement variants={fadeUp}>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Services
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                ベンチャー企業の成長を加速する<br />
                最適なWebソリューションを提供
              </p>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <div className="space-y-20">
              {services.map((service, index) => (
                <AnimatedElement key={index} variants={fadeUp}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}>
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                          <p className="text-primary font-semibold text-lg">{service.price}</p>
                        </div>
                      </div>
                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-primary" />
                            <span className="text-slate-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button size="lg">
                        <Link href="/contact" className="flex items-center gap-2">
                          お問い合わせ
                          <ArrowRight size={20} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <AnimatedElement variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                制作フロー
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                お客様との密な連携により、<br />
                最高品質のWebサイトをお届けします。
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <AnimatedElement key={index} variants={fadeUp}>
                  <Card className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                        <CardTitle className="text-lg text-slate-900">
                          {step.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement variants={containerStagger}>
            <AnimatedElement variants={fadeUp}>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                お気軽にご相談ください
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                あなたのビジネスを次のステージへ押し上げる<br />
                Webサイト制作をお手伝いします。
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