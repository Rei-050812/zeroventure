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
        商品の魅力をしっかり伝え、お問い合わせや購入につながるランディングページを制作。
        <br />
        成果につながる流れを意識した設計で、スマホでも快適に閲覧可能。
        <br />
        ページの表示速度にも配慮し、見やすくストレスのない体験を提供します。
      </>
    ),
    icon: TrendingUp
  },
  {
    title: 'ポートフォリオサイト制作',
    description: (
      <>
        作品や実績を魅力的に見せる、個人やクリエイター向けのサイトを制作。
        <br />
        シンプルで直感的に操作できるデザインを採用し、SNSともスムーズに連携。
        <br />
        自身の魅力や信頼感を最大限に引き出すオンラインの名刺代わりとなります。
      </>
    ),
    icon: PenTool
  },
  {
    title: 'リクルートサイト制作',
    description: (
      <>
        会社の雰囲気や働く魅力を伝え、応募につながる採用専用サイトを制作。
        <br />
        応募ページまでの導線を整理し、社員の声やインタビューを掲載。
        <br />
        求職者が安心して応募できる環境を整え、採用力を高めます。
      </>
    ),
    icon: Users
  },
  {
    title: 'メディアサイト制作',
    description: (
      <>
        記事を発信してアクセスを集め、集客やブランド認知を広げるサイトを制作。
        <br />
        カテゴリーやタグで記事を整理でき、SNSと連携して情報を拡散可能。
        <br />
        誰でも更新しやすい仕組みで、継続的な情報発信をサポートします。
      </>
    ),
    icon: FileText
  },
  {
    title: 'コーポレートサイト制作',
    description: (
      <>
        会社やお店の信頼を高める、本格的なホームページを制作。
        <br />
        ブランドイメージに沿ったデザインと、更新しやすい管理システムを導入。
        <br />
        公開後も長期的な運用を見据え、企業の成長を支えるサイトを実現します。
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