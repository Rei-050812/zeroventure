'use client'

import Link from 'next/link'
import { ArrowLeft, ExternalLink, Calendar, User, Clock, Target, Lightbulb, TrendingUp } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { fadeUp, containerStagger } from '@/lib/animations'

interface WorkDetailProps {
  work: {
    id: string
    title: string
    summary: string
    description: string
    techStack: string[]
    coverImage: string
    images?: string[]
    url?: string
    category: string
    client: string
    duration: string
    role: string[]
    challenges: string[]
    solutions: string[]
    results: string[]
    publishedAt: string
  }
}

export function WorkDetailPage({ work }: WorkDetailProps) {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement
          variants={containerStagger}
          className="space-y-12"
        >
          {/* Breadcrumb & Back Button */}
          <AnimatedElement variants={fadeUp}>
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              制作実績一覧に戻る
            </Link>
          </AnimatedElement>

          {/* Hero Section */}
          <div className="space-y-8">
            <AnimatedElement variants={fadeUp}>
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary text-black text-sm px-3 py-1 rounded-full font-medium">
                  {work.category}
                </span>
                <time className="text-gray-400 text-sm">
                  {new Date(work.publishedAt).toLocaleDateString('ja-JP')}
                </time>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                {work.title}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                {work.description}
              </p>
            </AnimatedElement>

            {/* Cover Image */}
            <AnimatedElement variants={fadeUp}>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {work.title}
                  </span>
                </div>
              </div>
            </AnimatedElement>

            {/* Action Buttons */}
            <AnimatedElement variants={fadeUp}>
              <div className="flex flex-wrap gap-4">
                {work.url && (
                  <Button variant="primary" size="lg">
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      サイトを見る
                      <ExternalLink size={20} />
                    </a>
                  </Button>
                )}
                <Button variant="outline" size="lg">
                  <Link href="/contact">
                    類似案件を依頼する
                  </Link>
                </Button>
              </div>
            </AnimatedElement>
          </div>

          {/* Project Details Grid */}
          <AnimatedElement
            variants={containerStagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Project Info */}
            <AnimatedElement variants={fadeUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    プロジェクト情報
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-400">クライアント</dt>
                    <dd className="text-white">{work.client}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-400">制作期間</dt>
                    <dd className="text-white">{work.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-400">担当範囲</dt>
                    <dd>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {work.role.map((role, index) => (
                          <span
                            key={index}
                            className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </dd>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>

            {/* Tech Stack */}
            <AnimatedElement variants={fadeUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    使用技術
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {work.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary/20 text-primary px-3 py-1 rounded text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          </AnimatedElement>

          {/* Challenges & Solutions */}
          <AnimatedElement
            variants={containerStagger}
            className="space-y-8"
          >
            {/* Challenges */}
            <AnimatedElement variants={fadeUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    課題
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {work.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedElement>

            {/* Solutions */}
            <AnimatedElement variants={fadeUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    解決策
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {work.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedElement>

            {/* Results */}
            <AnimatedElement variants={fadeUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    成果
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {work.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300 font-medium">{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedElement>
          </AnimatedElement>

          {/* CTA Section */}
          <AnimatedElement variants={fadeUp} className="text-center py-16">
            <div className="bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                このような制作をお考えですか？
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                無料相談でプロジェクトの詳細をお聞かせください
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Link href="/contact">
                    無料相談を申し込む
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/works">
                    他の実績も見る
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </AnimatedElement>
      </div>
    </div>
  )
}