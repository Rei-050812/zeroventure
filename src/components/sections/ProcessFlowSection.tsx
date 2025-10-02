'use client'

import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { fadeUp, containerStagger } from '@/lib/animations'

const processSteps = [
  {
    step: '01',
    title: 'Contact',
    description: 'お問い合わせ',
    detail: 'お気軽にご相談ください。やりたいことやご要望をシンプルにお聞かせください。'
  },
  {
    step: '02',
    title: 'Planning',
    description: '方向性整理',
    detail: '専用フォーマットにご記入いただいた内容から、ご要望や目的、ゴールを整理。事前情報を基に効率的に進行します。'
  },
  {
    step: '03',
    title: 'Design & Development',
    description: 'デザイン・制作',
    detail: 'デザインから制作まで一貫対応。ブランドを活かした使いやすいWebサイトを形にし、見やすさと成果につながる構成を両立します。'
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: '公開・サポート',
    detail: 'テスト完了後に本番公開。公開して終わりではなく、更新や改善を支援し、事業の成長に合わせて伴走します。'
  }
]

export function ProcessFlowSection() {
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
                Process Flow
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                制作の流れ
              </p>
            </AnimatedElement>
          </div>

          {/* Process Steps */}
          <AnimatedElement
            variants={containerStagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step, index) => (
              <AnimatedElement key={index} variants={fadeUp}>
                <div className="text-center relative flex flex-col gap-4">
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                  )}
                  <div className="w-16 h-16 bg-primary/20 border-2 border-primary rounded-full flex items-center justify-center mx-auto flex-shrink-0">
                    <span className="text-primary font-bold text-lg">
                      {step.step}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 h-14 flex items-center justify-center">
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
        </AnimatedElement>
      </div>
    </section>
  )
}
