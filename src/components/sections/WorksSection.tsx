'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { fadeUp, containerStagger } from '@/lib/animations'
import { getFeaturedWorks, getWorks, urlFor } from '@/lib/sanity'

// Types
interface Work {
  _id: string
  title: string
  slug: { current: string }
  summary: string
  techStack: string[]
  coverImage: string
  url: string
  category: string
}

// Mock data for featured works (fallback when Sanity is not available)
const mockWorks: Work[] = [
  {
    _id: '1',
    title: 'TechStartup LP',
    slug: { current: 'techstartup-lp' },
    summary: 'AI技術スタートアップのランディングページ制作',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    coverImage: '/works/work1.jpg',
    url: 'https://example-techstartup.com',
    category: 'LP制作'
  },
  {
    _id: '2',
    title: 'EcoVenture Corporate',
    slug: { current: 'ecoventure-corporate' },
    summary: 'サステナブル企業のコーポレートサイト',
    techStack: ['WordPress', 'Custom Theme', 'GSAP'],
    coverImage: '/works/work2.jpg',
    url: 'https://example-ecoventure.com',
    category: 'コーポレートサイト'
  },
  {
    _id: '3',
    title: 'FinanceApp LP',
    slug: { current: 'financeapp-lp' },
    summary: 'フィンテックアプリのローンチページ',
    techStack: ['React', 'Framer Motion', 'Styled Components'],
    coverImage: '/works/work3.jpg',
    url: 'https://example-financeapp.com',
    category: 'LP制作'
  }
]

export function WorksSection() {
  const [works, setWorks] = useState<Work[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadWorks() {
      try {
        const sanityWorks = await getFeaturedWorks()

        // featuredがない場合は通常のworksも取得してみる
        if (sanityWorks.length === 0) {
          const allWorks = await getWorks()

          if (allWorks.length > 0) {
            // 最初の3つを表示
            setWorks(allWorks.slice(0, 3))
          } else {
            setWorks(mockWorks)
          }
        } else {
          setWorks(sanityWorks)
        }
      } catch (error) {
        setWorks(mockWorks)
      } finally {
        setLoading(false)
      }
    }

    loadWorks()
  }, [])

  if (loading) {
    return (
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
          <p className="text-slate-900">Loading works...</p>
        </div>
      </section>
    )
  }

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
                Latest Works
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                最新の制作実績をご紹介
              </p>
            </AnimatedElement>
          </div>

          {/* Works Grid */}
          <AnimatedElement
            variants={containerStagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {works.map((work, index) => (
              <AnimatedElement key={work._id || `work-${index}`} variants={fadeUp}>
                <Link href={`/works/${work.slug.current}`} className="block h-full">
                  <Card className="group overflow-hidden h-full cursor-pointer">
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
                            key={`${work._id || index}-tech-${techIndex}-${tech}`}
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

          {/* View All Button */}
          <AnimatedElement variants={fadeUp} className="text-center">
            <Button variant="outline" size="lg">
              <Link href="/works" className="flex items-center gap-2">
                すべての実績を見る
                <ArrowRight size={20} />
              </Link>
            </Button>
          </AnimatedElement>
        </AnimatedElement>
      </div>
    </section>
  )
}