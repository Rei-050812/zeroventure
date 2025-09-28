'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, Filter } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { fadeUp, containerStagger } from '@/lib/animations'

// Mock data (この部分は後でSanityから取得)
const allWorks = [
  {
    id: '1',
    title: 'TechStartup LP',
    summary: 'AI技術スタートアップのランディングページ制作。コンバージョン率を30%向上させることに成功。',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    coverImage: '/works/work1.jpg',
    url: 'https://example-techstartup.com',
    category: 'LP制作',
    featured: true,
    publishedAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'EcoVenture Corporate',
    summary: 'サステナブル企業のコーポレートサイト。ブランドアイデンティティを強化し、企業価値の向上に貢献。',
    techStack: ['WordPress', 'Custom Theme', 'GSAP', 'PHP'],
    coverImage: '/works/work2.jpg',
    url: 'https://example-ecoventure.com',
    category: 'コーポレートサイト',
    featured: true,
    publishedAt: '2024-01-10'
  },
  {
    id: '3',
    title: 'FinanceApp LP',
    summary: 'フィンテックアプリのローンチページ制作。シンプルで信頼性の高いデザインで訴求力を向上。',
    techStack: ['React', 'Framer Motion', 'Styled Components'],
    coverImage: '/works/work3.jpg',
    url: 'https://example-financeapp.com',
    category: 'LP制作',
    featured: false,
    publishedAt: '2024-01-05'
  },
  {
    id: '4',
    title: 'HealthTech Corporate',
    summary: 'ヘルステック企業のコーポレートサイト。医療従事者の信頼を得るプロフェッショナルなデザイン。',
    techStack: ['Next.js', 'Sanity', 'Tailwind CSS'],
    coverImage: '/works/work4.jpg',
    url: 'https://example-healthtech.com',
    category: 'コーポレートサイト',
    featured: false,
    publishedAt: '2023-12-20'
  },
  {
    id: '5',
    title: 'EdTech Platform LP',
    summary: '教育プラットフォームのランディングページ。ユーザーの学習意欲を高めるインタラクティブなデザイン。',
    techStack: ['Vue.js', 'Nuxt.js', 'SCSS'],
    coverImage: '/works/work5.jpg',
    url: 'https://example-edtech.com',
    category: 'LP制作',
    featured: false,
    publishedAt: '2023-12-15'
  },
  {
    id: '6',
    title: 'RetailTech Corporate',
    summary: 'リテールテック企業のコーポレートサイト。データを活用した小売業界向けソリューションを訴求。',
    techStack: ['Gatsby', 'React', 'GraphQL', 'Styled Components'],
    coverImage: '/works/work6.jpg',
    url: 'https://example-retailtech.com',
    category: 'コーポレートサイト',
    featured: false,
    publishedAt: '2023-12-10'
  }
]

const categories = ['すべて', 'LP制作', 'コーポレートサイト']

export function WorksIndexPage() {
  const [activeCategory, setActiveCategory] = useState('すべて')

  const filteredWorks = activeCategory === 'すべて'
    ? allWorks
    : allWorks.filter(work => work.category === activeCategory)

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement
          variants={containerStagger}
          className="space-y-12"
        >
          {/* Page Header */}
          <div className="text-center">
            <AnimatedElement variants={fadeUp}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Works
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                これまでに手がけた制作実績をご紹介
                <br />
                様々な業界・規模のプロジェクトに対応
              </p>
            </AnimatedElement>
          </div>

          {/* Category Filter */}
          <AnimatedElement variants={fadeUp}>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-primary text-black'
                      : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedElement>

          {/* Works Grid */}
          <AnimatedElement
            variants={containerStagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredWorks.map((work, index) => (
              <AnimatedElement key={work.id} variants={fadeUp}>
                <Card className="group overflow-hidden h-full">
                  {/* Cover Image */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-600/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-slate-900 font-bold text-lg text-center px-4">
                        {work.title}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className="bg-primary text-black text-xs px-2 py-1 rounded-full font-medium">
                        {work.category}
                      </span>
                      {work.featured && (
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors duration-200">
                      {work.title}
                    </CardTitle>
                    <CardDescription>
                      {work.summary}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-sm font-medium text-slate-600 mb-2">
                          使用技術
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {work.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Published Date */}
                      <div className="text-sm text-gray-400">
                        {new Date(work.publishedAt).toLocaleDateString('ja-JP')}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between items-center">
                    <Link
                      href={`/works/${work.id}`}
                      className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium"
                    >
                      詳細を見る
                    </Link>
                    {work.url && (
                      <a
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-slate-700 transition-colors duration-200 flex items-center gap-1"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">サイトを見る</span>
                      </a>
                    )}
                  </CardFooter>
                </Card>
              </AnimatedElement>
            ))}
          </AnimatedElement>

          {/* CTA Section */}
          <AnimatedElement variants={fadeUp} className="text-center py-16">
            <div className="bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                あなたのプロジェクトも
                <br />
                実績に加えませんか？
              </h3>
              <p className="text-slate-600 mb-6 text-lg">
                無料相談でプロジェクトの可能性を一緒に探りましょう
              </p>
              <Button size="lg">
                <Link href="/contact">
                  無料相談を申し込む
                </Link>
              </Button>
            </div>
          </AnimatedElement>
        </AnimatedElement>
      </div>
    </div>
  )
}