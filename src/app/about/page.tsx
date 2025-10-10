import { Metadata } from 'next'
import Image from 'next/image'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { fadeUp, containerStagger } from '@/lib/animations'
import { ArrowRight, MapPin, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Profile',
  description: 'ZEROVENTUREの代表プロフィール、Web制作の経歴やスキル、実績について詳しく紹介します。システム開発とWeb制作の両方を経験。デザイン性と操作性を両立したWebサイト制作へ。AIも活用しながら、シンプルで使いやすく、成果につながるサイト制作を得意としています。',
  alternates: {
    canonical: 'https://zero-venture.com/about',
  },
  openGraph: {
    title: 'Profile | ZEROVENTURE',
    description: 'ZEROVENTUREの代表プロフィール、Web制作の経歴やスキル、実績について詳しく紹介します。',
    url: 'https://zero-venture.com/about',
  },
}

const skills = [
  {
    category: 'Web制作・開発',
    items: ['HTML / CSS / JavaScript / PHP', 'Next.js / React / TypeScript / Tailwind CSS', 'WordPress', 'Sanity']
  },
  {
    category: '運用・ホスティング',
    items: ['Vercel', 'GitHub', 'レンタルサーバ各種']
  },
  {
    category: 'デザイン・ビジネスツール',
    items: ['Canva', 'PowerPoint / Excel / Google スプレッドシート / Word', 'Slack']
  },
  {
    category: '分析・マーケティング',
    items: ['Google Analytics', 'Google Search Console']
  },
  {
    category: 'AI活用',
    items: ['ChatGPT', 'Perplexity AI', 'Windsurf', 'ClaudeCode']
  }
]

const experience = [
  {
    period: '2018年〜2021年',
    title: 'システムエンジニア（製造・生産管理）',
    description: '現場システムの運用や生産管理を担当。業務効率化や品質管理に直結する仕組みづくりを推進。'
  },
  {
    period: '2021年〜2022年',
    title: 'システムエンジニア（デジタル推進）',
    description: '社内のデジタル化を推進。業務フロー改善や新システム導入を担当し、IT基盤強化を支援。'
  },
  {
    period: '2022年〜2023年',
    title: '情報システム担当',
    description: 'システム運用やトラブル対応を担当。社内Webサイトの管理やデータ活用に加え、業務改善アプリの開発にも取り組む。'
  },
  {
    period: '2023年〜2025年',
    title: '情報システム担当 / Webデザイナー',
    description: '情報システム業務を担いながら、社内向けWebデザインも担当。デザイン性と使いやすさを意識した制作を実践。'
  },
  {
    period: '2025年〜現在',
    title: 'ZEROVENTURE代表',
    description: 'Webサイト制作とブランディングサービスを提供。デザイン性と操作性を両立させ、成果につながるサイトで事業成長を支援。'
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={fadeUp} className="lg:hidden mb-8 text-center">
            <h1 className="text-4xl font-bold text-slate-900">
              Profile
            </h1>
          </AnimatedElement>

          <AnimatedElement
            variants={containerStagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <AnimatedElement variants={fadeUp}>
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
                <Image
                  src="/images/mascot.png"
                  alt="ZEROVENTURE マスコットキャラクター"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp} className="space-y-6">
              <h1 className="hidden lg:block text-4xl lg:text-5xl font-bold text-slate-900">
                Profile
              </h1>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-800">
                  沼能 零仁（Reiji Numanou）
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  ZEROVENTURE代表。食品メーカーでIT担当として、自作の社内アプリやAIを活用した仕組みで業務改善を進めたり、社内向けWebサイトの運用・管理を担当してきました。
                  業務改善や社内サイト運用の経験を通じて、"人が使いやすい仕組みを作ること"に強い関心を持つようになり、より表現の幅が広いWeb制作へと挑戦しました。
                  現在は、デザイン性と操作性を両立させ、AIも取り入れながら効率と品質を高め、成果につながるWebサイト制作に取り組んでいます。
                </p>
              </div>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <AnimatedElement variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                経歴・実績
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                システム開発とWeb制作の両方を経験してきた強みを活かし、デザイン性と実用性を兼ね備えた最適な解決策を提供します。
              </p>
            </AnimatedElement>

            <div className="space-y-6">
              {experience.map((item, index) => (
                <AnimatedElement key={index} variants={fadeUp}>
                  <Card className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                          {item.period}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <AnimatedElement variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                スキル・使用技術
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                AIをはじめとした最新技術を取り入れ、デザイン性と実用性を兼ね備えたWebサイトで、ビジネスの成長を支援します。
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <AnimatedElement key={index} variants={fadeUp}>
                  <Card className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                    <CardHeader>
                      <CardTitle className="text-lg text-slate-900">
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-gray-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Business Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <AnimatedElement variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                事業者情報
              </h2>
            </AnimatedElement>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <AnimatedElement variants={fadeUp}>
                <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">
                      基本情報
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-medium text-slate-900">所在地</p>
                        <p className="text-slate-600">千葉県千葉市緑区</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-medium text-slate-900">メール</p>
                        <p className="text-slate-600">r-numanou@zero-venture.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>

              <AnimatedElement variants={fadeUp}>
                <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">
                      法的事項
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-medium text-slate-900 mb-2">事業内容</p>
                      <p className="text-slate-600">
                        WEBサイト制作・デザイン業務
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 mb-2">法的情報</p>
                      <div className="space-y-2">
                        <Link
                          href="/legal/specified-commercial-transaction"
                          className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200 block"
                        >
                          特定商取引法に基づく表記
                        </Link>
                        <Link
                          href="/legal/privacy-policy"
                          className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200 block"
                        >
                          プライバシーポリシー
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
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
                あなたのビジネスを次のステージへ導くWebサイト制作を実現します。
              </p>
              <Button size="lg" className="min-w-[200px]">
                <Link href="/contact" className="flex items-center gap-2">
                  無料相談する
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