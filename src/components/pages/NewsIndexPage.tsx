'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardContent } from '@/components/ui/Card'
import { fadeUp, containerStagger } from '@/lib/animations'
import { Calendar, ArrowRight } from 'lucide-react'
import { getNews } from '@/lib/sanity'

interface NewsItem {
  _id: string
  title: string
  slug: { current: string }
  body: any[]
  important: boolean
  publishedAt: string
}

export function NewsIndexPage() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadNews() {
      try {
        const data = await getNews()
        setNewsItems(data || [])
      } catch (error) {
        console.error('Failed to load news:', error)
        setNewsItems([])
      } finally {
        setLoading(false)
      }
    }

    loadNews()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger} className="text-center">
            <AnimatedElement variants={fadeUp}>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                News
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                最新のお知らせをご確認ください
              </p>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </section>

      {/* News List */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            {newsItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-600">お知らせはまだありません。</p>
              </div>
            ) : (
              <div className="space-y-6">
                {newsItems.map((news, index) => (
                  <AnimatedElement key={news._id} variants={fadeUp}>
                    <Link href={`/news/${news.slug.current}`} className="block">
                      <Card className={`border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`} hover={false}>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-start gap-4">
                            <div className="flex-shrink-0">
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                  <Calendar size={16} />
                                  {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
                                </div>
                                {news.important && (
                                  <span className="text-xs px-2 py-1 rounded-full font-medium bg-red-100 text-red-700">
                                    重要
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-slate-900 hover:text-primary transition-colors duration-200">
                                {news.title}
                              </h3>
                            </div>

                            <div className="flex items-center text-primary">
                              <ArrowRight size={20} />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </AnimatedElement>
                ))}
              </div>
            )}
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
