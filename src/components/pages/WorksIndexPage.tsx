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
  _id: string
  title: string
  slug: { current: string }
  summary: string
  techStack: string[]
  coverImage: string | any
  url: string
  category: string
}

// Mock data for works (fallback when Sanity is not available)
const mockWorks: Work[] = [
  {
    _id: '1',
    title: 'TechStartup LP',
    slug: { current: 'techstartup-lp' },
    summary: 'AI技術スタートアップのランディングページ制作。コンバージョン率向上を重視したデザインと導線設計',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    coverImage: '/images/works/work1.jpg',
    url: 'https://example.com',
    category: 'LP制作'
  },
  {
    _id: '2',
    title: 'Corporate Site',
    slug: { current: 'corporate-site' },
    summary: '中小企業向けコーポレートサイト。信頼性とブランディングを重視したデザイン',
    techStack: ['React', 'WordPress', 'CSS'],
    coverImage: '/images/works/work2.jpg',
    url: 'https://example.com',
    category: 'コーポレートサイト'
  },
  {
    _id: '3',
    title: 'Recruit Site',
    slug: { current: 'recruit-site' },
    summary: '採用専用サイト制作。会社の魅力を伝え、応募につながる導線設計',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    coverImage: '/images/works/work3.jpg',
    url: 'https://example.com',
    category: 'リクルートサイト'
  },
  {
    _id: '4',
    title: 'Media Site',
    slug: { current: 'media-site' },
    summary: '情報発信メディアサイト。記事の可読性とSEO最適化に重点を置いた設計',
    techStack: ['Next.js', 'Sanity', 'Tailwind CSS'],
    coverImage: '/images/works/work4.jpg',
    url: 'https://example.com',
    category: 'メディアサイト'
  },
  {
    _id: '5',
    title: 'Portfolio Site',
    slug: { current: 'portfolio-site' },
    summary: 'クリエイター向けポートフォリオサイト。作品の魅力を最大限に伝えるビジュアル重視のデザイン',
    techStack: ['React', 'Three.js', 'GSAP'],
    coverImage: '/images/works/work5.jpg',
    url: 'https://example.com',
    category: 'ポートフォリオサイト'
  },
  {
    _id: '6',
    title: 'SaaS Landing Page',
    slug: { current: 'saas-landing-page' },
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

  const categories = ['すべて', 'LP制作', 'ポートフォリオサイト', 'リクルートサイト', 'メディアサイト', 'コーポレートサイト']

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
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <div className="text-center">
              <AnimatedElement variants={fadeUp}>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Works
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  これまでに手がけた制作事例をご紹介します。
                  <br />
                  多様な業種・目的に合わせて、最適なWebサイトを制作しています。
                </p>
              </AnimatedElement>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Works Grid Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement
            variants={containerStagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredWorks.map((work, index) => (
              <AnimatedElement key={work._id} variants={fadeUp}>
                <Link href={`/works/${work.slug.current}`} className="block h-full">
                  <Card className="group overflow-hidden h-full cursor-pointer bg-white">
                    {/* Cover Image */}
                    <div className="aspect-video bg-gray-200 relative overflow-hidden mb-4">
                      {work.coverImage ? (
                        <Image
                          src={work.coverImage.asset ? urlFor(work.coverImage).width(600).height(400).url() : work.coverImage}
                          alt={work.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center">
                          <span className="text-slate-700 font-bold text-lg">
                            {work.title}
                          </span>
                        </div>
                      )}
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                          {work.category || 'Web制作'}
                        </span>
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
                      <div className="flex flex-wrap gap-2">
                        {work.techStack?.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs bg-gray-100 text-slate-600 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="flex justify-between items-center">
                      <span className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium">
                        詳細を見る
                      </span>
                      {work.url && (
                        <a
                          href={work.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-slate-400 hover:text-slate-600 transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </CardFooter>
                  </Card>
                </Link>
              </AnimatedElement>
            ))}
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}