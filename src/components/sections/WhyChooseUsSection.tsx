'use client'

import { Zap, Target, Shield, Layers } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { fadeUp, containerStagger } from '@/lib/animations'

const features = [
  {
    icon: Zap,
    title: '効率的なプロセス',
    description: '初めての方でもわかりやすい進行で、最短距離で公開まで到達。負担をかけずに完成度の高いサイトを提供。'
  },
  {
    icon: Target,
    title: '成果につながる設計',
    description: '訪れた人が迷わず行動できるよう、シンプルで分かりやすい設計。お問い合わせや購入につながる導線設計。'
  },
  {
    icon: Shield,
    title: '公開後の継続サポート',
    description: '公開して終わりではなく、改善提案や運用支援を継続。長期的な成長に寄り添う伴走型サポート。'
  },
  {
    icon: Layers,
    title: '柔軟な拡張性',
    description: '将来の事業展開に合わせて機能やページを追加可能。拡張性と安定性を兼ね備えた、長期的に安心できる設計。'
  }
]

export function WhyChooseUsSection() {
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
                Why Choose Us?
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                ZEROVENTUREが選ばれる理由
              </p>
            </AnimatedElement>
          </div>

          {/* Features Grid */}
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
                  <h4 className="text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </AnimatedElement>
        </AnimatedElement>
      </div>
    </section>
  )
}
