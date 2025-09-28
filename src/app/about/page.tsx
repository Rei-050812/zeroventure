import { Metadata } from 'next'
import Image from 'next/image'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { fadeUp, containerStagger } from '@/lib/animations'
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Profile | ZEROVENTURE',
  description: 'ZEROVENTUREの代表プロフィール、経歴、スキル、実績について紹介します。',
}

const skills = [
  {
    category: 'フロントエンド',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'デザイン',
    items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Canva']
  },
  {
    category: 'バックエンド',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase']
  },
  {
    category: 'ツール・その他',
    items: ['Git', 'Docker', 'Vercel', 'Netlify', 'Sanity CMS']
  }
]

const experience = [
  {
    period: '2023年〜現在',
    title: 'ZEROVENTURE 代表',
    description: 'ベンチャー企業向けのWEB制作・ブランディングサービスを提供。LP制作、コーポレートサイト制作を中心に、50社以上の成長をサポート。'
  },
  {
    period: '2021年〜2023年',
    title: 'フリーランスWEBデザイナー',
    description: 'スタートアップ企業を中心に、ブランディングからWEB制作まで一貫したサービスを提供。コンバージョン率向上にこだわった設計で多数の成果を創出。'
  },
  {
    period: '2019年〜2021年',
    title: 'WEB制作会社 WEBデザイナー',
    description: '大手企業のコーポレートサイトやECサイトのデザイン・コーディングを担当。UX/UIデザインの基礎を学び、ユーザー中心の設計手法を習得。'
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement
            variants={containerStagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <AnimatedElement variants={fadeUp}>
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
                <Image
                  src="https://source.unsplash.com/800x800/?portrait,workspace,professional"
                  alt="代表プロフィール写真"
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  priority
                />
              </div>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp} className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900">
                Profile
              </h1>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-800">
                  田中 太郎（Taro Tanaka）
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  ZEROVENTURE代表。ベンチャー企業のブランディング・WEB制作を専門とし、
                  「ゼロから始める企業の成長を加速させる」をミッションに、
                  LP制作・コーポレートサイト制作で事業成長をサポートしています。
                </p>
                <p className="text-slate-600 leading-relaxed">
                  これまで50社以上のベンチャー企業のWEBサイト制作を手がけ、
                  平均CVR向上率150%を実現。技術とデザインの両面から、
                  ビジネス成果にコミットしたサービスを提供しています。
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
                WEB業界での豊富な経験を活かし、技術とビジネスの両面から
                最適なソリューションを提供します。
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
                最新の技術トレンドを常にキャッチアップし、
                最適な技術選定でプロジェクトを成功に導きます。
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
                        <p className="text-slate-600">東京都渋谷区</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-medium text-slate-900">メール</p>
                        <p className="text-slate-600">contact@zeroventure.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="text-primary mt-1" size={20} />
                      <div>
                        <p className="font-medium text-slate-900">電話</p>
                        <p className="text-slate-600">03-XXXX-XXXX</p>
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
                        WEBサイト制作・デザイン業務<br />
                        ブランディング・マーケティング支援
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 mb-2">法的情報</p>
                      <div className="space-y-2">
                        <Link
                          href="/legal/tokushoho"
                          className="text-primary hover:text-primary-hover transition-colors duration-200 block"
                        >
                          特定商取引法に基づく表記
                        </Link>
                        <Link
                          href="/legal/privacy"
                          className="text-primary hover:text-primary-hover transition-colors duration-200 block"
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
                あなたのビジネスを次のステージへ押し上げる
                WEBサイト制作をお手伝いします。
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