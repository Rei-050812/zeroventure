'use client'

import { Monitor, Smartphone, TrendingUp, Users, Zap, Shield } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { fadeUp, containerStagger } from '@/lib/animations'

const services = [
  {
    title: 'LP制作',
    description: 'コンバージョン率を最大化するランディングページを制作',
    icon: TrendingUp,
    features: ['CVR最適化', 'A/Bテスト', 'レスポンシブ対応', '高速表示']
  },
  {
    title: 'コーポレートサイト',
    description: '企業の信頼性を高める本格的なコーポレートサイト',
    icon: Monitor,
    features: ['ブランド設計', 'CMS導入', 'SEO対策', '保守・運用']
  }
]

const features = [
  {
    icon: Zap,
    title: '高速制作',
    description: '最短1週間での制作完了。スピーディーな進行でビジネスチャンスを逃しません。'
  },
  {
    icon: Users,
    title: '専門チーム',
    description: 'デザイナー・エンジニア・マーケターがチーム一丸となってプロジェクトを推進。'
  },
  {
    icon: Smartphone,
    title: 'レスポンシブ',
    description: 'PC・タブレット・スマートフォン全デバイスに最適化したデザインを提供。'
  },
  {
    icon: Shield,
    title: 'アフターサポート',
    description: '公開後も運用・改善提案を継続。長期的なパートナーシップを構築。'
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement
          variants={containerStagger}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center">
            <AnimatedElement variants={fadeUp}>
              <h2 className="text-4xl font-bold text-white mb-6">
                Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                ベンチャー企業の成長を加速する
                <br />
                最適なWebソリューションを提供
              </p>
            </AnimatedElement>
          </div>

          {/* Main Services */}
          <AnimatedElement
            variants={containerStagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
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
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </AnimatedElement>

          {/* Features Grid */}
          <div className="pt-16">
            <AnimatedElement variants={fadeUp} className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Why Choose Us?
              </h3>
              <p className="text-gray-300">
                ZEROVENTUREが選ばれる理由
              </p>
            </AnimatedElement>

            <AnimatedElement
              variants={containerStagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {features.map((feature, index) => (
                <AnimatedElement key={index} variants={fadeUp}>
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
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