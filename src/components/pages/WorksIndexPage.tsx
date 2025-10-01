'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { fadeUp, containerStagger } from '@/lib/animations'
import { getWorks, urlFor } from '@/lib/sanity'

// Types
interface Work {
  id: string
  title: string
  summary: string
  techStack: string[]
  coverImage: string | any
  url: string
  category: string
}

// Mock data for works (fallback when Sanity is not available)
const mockWorks: Work[] = [
  {
    id: '1',
    title: 'TechStartup LP',
    summary: 'AI技術スタートアップのランディングページ制作。コンバージョン率向上を重視したデザインと導線設計',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    coverImage: '/images/works/work1.jpg',
    url: 'https://example.com',
    category: 'LP制作'
  },
  {
    id: '2',
    title: 'Corporate Site',
    summary: '中小企業向けコーポレートサイト。信頼性とブランディングを重視したデザイン',
    techStack: ['React', 'WordPress', 'CSS'],
    coverImage: '/images/works/work2.jpg',
    url: 'https://example.com',
    category: 'コーポレートサイト'
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    summary: 'ECサイトのフロントエンド開発。ユーザビリティとモバイル対応を重視',
    techStack: ['Vue.js', 'Nuxt.js', 'Shopify'],
    coverImage: '/images/works/work3.jpg',
    url: 'https://example.com',
    category: 'ECサイト'
  },
  {
    id: '4',
    title: 'Blog Platform',
    summary: '技術ブログプラットフォーム。記事の可読性とSEO最適化に重点を置いた設計',
    techStack: ['Gatsby', 'GraphQL', 'Contentful'],
    coverImage: '/images/works/work4.jpg',
    url: 'https://example.com',
    category: 'ブログ制作'
  },
  {
    id: '5',
    title: 'Portfolio Site',
    summary: 'クリエイター向けポートフォリオサイト。作品の魅力を最大限に伝えるビジュアル重視のデザイン',
    techStack: ['React', 'Three.js', 'GSAP'],
    coverImage: '/images/works/work5.jpg',
    url: 'https://example.com',
    category: 'ポートフォリオ'
  },
  {
    id: '6',
    title: 'SaaS Landing Page',
    summary: 'SaaSプロダクトのランディングページ。特徴とメリットを分かりやすく伝える構成',
    techStack: ['Next.js', 'Framer Motion', 'Stripe'],
    coverImage: '/images/works/work6.jpg',
    url: 'https://example.com',
    category: 'LP制作'
  }
]

export function WorksIndexPage() {
  const [works, setWorks] = useState<Work[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('すべて')

  useEffect(() => {
    async function loadWorks() {
      try {
        const sanityWorks = await getWorks()

        if (sanityWorks.length > 0) {
          setWorks(sanityWorks)
        } else {
          setWorks(mockWorks)
        }
      } catch (error) {
        setWorks(mockWorks)
      } finally {
        setLoading(false)
      }
    }

    loadWorks()
  }, [])

  const categories = ['すべて', 'LP制作', 'コーポレートサイト', 'ブログ制作', 'ECサイト', 'ポートフォリオ']

  const filteredWorks = selectedCategory === 'すべて'
    ? works
    : works.filter(work => work.category === selectedCategory)

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedElement
          variants={containerStagger}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center">
            <AnimatedElement variants={fadeUp}>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                制作実績
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                これまでに手がけた制作事例をご紹介。
                <br />
                LP制作からコーポレートサイト、ブログ制作まで幅広く対応しています。
              </p>
            </AnimatedElement>
          </div>

          {/* Category Filter */}
          <AnimatedElement variants={fadeUp}>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#4CC9F0] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
                <Card className="h-full group hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={
                        typeof work.coverImage === 'string' && work.coverImage.startsWith('/')
                          ? work.coverImage
                          : work.coverImage
                          ? urlFor(work.coverImage)
                          : '/images/placeholder-work.jpg'
                      }
                      alt={work.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = '/images/placeholder-work.jpg'
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#4CC9F0] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {work.category}
                      </span>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="group-hover:text-[#4CC9F0] transition-colors">
                      {work.title}
                    </CardTitle>
                    <CardDescription>{work.summary}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {work.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <Link href={`/works/${work.id}`}>
                        詳細を見る
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </Button>
                    {work.url && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                      >
                        <a
                          href={work.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </AnimatedElement>
            ))}
          </AnimatedElement>

          {/* CTA Section */}
          <AnimatedElement variants={fadeUp} className="text-center py-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              お気軽にご相談ください
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              あなたのプロジェクトに最適なソリューションをご提案いたします。
              まずはお気軽にお問い合わせください。
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                お問い合わせ
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
          </AnimatedElement>
        </AnimatedElement>
      </div>
    </div>
  )
}