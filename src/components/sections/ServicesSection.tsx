'use client'

import { TrendingUp, PenTool, Users, FileText, Building2 } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { fadeUp, containerStagger } from '@/lib/animations'

const services = [
  {
    title: 'LP制作',
    description: (
      <>
        商品やサービスの魅力をしっかり伝え、お問い合わせや購入につながるランディングページを制作します。
        <br />
        シンプルな設計で訪問者が自然に行動でき、広告やキャンペーンとの相性も抜群です。
      </>
    ),
    icon: TrendingUp
  },
  {
    title: 'ポートフォリオサイト制作',
    description: (
      <>
        クリエイターや個人の方の作品や実績を魅力的に見せるサイトを制作します。
        <br />
        シンプルで直感的なデザインで作品の良さを引き出し、仕事の依頼や新しいチャンスにつなげます。
      </>
    ),
    icon: PenTool
  },
  {
    title: 'リクルートサイト制作',
    description: (
      <>
        会社の魅力や雰囲気を伝え、応募につながる採用専用サイトを制作します。
        <br />
        求職者が必要な情報にすぐアクセスでき、社員インタビューで会社の雰囲気をリアルに伝えます。
      </>
    ),
    icon: Users
  },
  {
    title: 'メディアサイト制作',
    description: (
      <>
        記事を発信してアクセスを集め、集客やブランド認知を広げるサイトを制作します。
        <br />
        記事を整理しやすく、読者が欲しい情報にすぐたどり着ける設計です。
      </>
    ),
    icon: FileText
  },
  {
    title: 'コーポレートサイト制作',
    description: (
      <>
        会社やお店の信頼を高める、本格的なホームページを制作します。
        <br />
        必要なページをしっかりカバーし、ブランドイメージに合わせたデザインで長期的に運用できます。
      </>
    ),
    icon: Building2
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <AnimatedElement
          variants={containerStagger}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center">
            <AnimatedElement variants={fadeUp}>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Services
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                多様なニーズに応える5つのサイトスタイルを軸に、
                <br />
                ブランドの価値を最大化するWebサイトを提供
              </p>
            </AnimatedElement>
          </div>

          {/* Main Services */}
          <div className="space-y-8">
            {/* First 3 services - 3 columns */}
            <AnimatedElement
              variants={containerStagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.slice(0, 3).map((service, index) => (
                <AnimatedElement key={index} variants={fadeUp}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary/20 rounded-lg">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </AnimatedElement>
              ))}
            </AnimatedElement>

            {/* Last 2 services - 2 columns */}
            <AnimatedElement
              variants={containerStagger}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
              {services.slice(3, 5).map((service, index) => (
                <AnimatedElement key={index + 3} variants={fadeUp}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary/20 rounded-lg">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
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