'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Calendar, User, Clock } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardContent } from '@/components/ui/Card'
import { fadeUp, containerStagger } from '@/lib/animations'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

interface Work {
  _id: string
  title: string
  slug: { current: string }
  summary: string
  description?: any[]
  techStack: string[]
  coverImage: any
  images?: any[]
  url?: string
  category: string
  client?: string
  duration?: string
  publishedAt: string
}

interface WorkDetailPageProps {
  work: Work
}

export function WorkDetailPage({ work }: WorkDetailPageProps) {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedElement variants={containerStagger} className="space-y-12">
          {/* Back Button */}
          <AnimatedElement variants={fadeUp}>
            <Link
              href="/works"
              className="inline-flex items-center text-slate-600 hover:text-primary transition-colors duration-200"
            >
              <ArrowLeft size={20} className="mr-2" />
              Works一覧に戻る
            </Link>
          </AnimatedElement>

          {/* Category Badge */}
          <AnimatedElement variants={fadeUp}>
            <span className="inline-block bg-primary text-white text-sm px-4 py-2 rounded-full font-medium">
              {work.category}
            </span>
          </AnimatedElement>

          {/* Title */}
          <AnimatedElement variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              {work.title}
            </h1>
          </AnimatedElement>

          {/* Meta Information */}
          <AnimatedElement variants={fadeUp}>
            <div className="flex flex-wrap gap-6 text-slate-600">
              {work.client && (
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{work.client}</span>
                </div>
              )}
              {work.duration && (
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{work.duration}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{new Date(work.publishedAt).toLocaleDateString('ja-JP')}</span>
              </div>
            </div>
          </AnimatedElement>

          {/* Cover Image */}
          <AnimatedElement variants={fadeUp}>
            <div className="aspect-video bg-gray-200 relative overflow-hidden rounded-lg">
              {work.coverImage && (
                <Image
                  src={work.coverImage.asset ? urlFor(work.coverImage).width(1200).height(675).url() : work.coverImage}
                  alt={work.title}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </AnimatedElement>

          {/* Summary */}
          <AnimatedElement variants={fadeUp}>
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">概要</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {work.summary}
                </p>
              </CardContent>
            </Card>
          </AnimatedElement>

          {/* Tech Stack */}
          <AnimatedElement variants={fadeUp}>
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">使用技術</h2>
                <div className="flex flex-wrap gap-3">
                  {work.techStack?.map((tech, index) => (
                    <span
                      key={index}
                      className="text-sm bg-gray-100 text-slate-700 px-4 py-2 rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedElement>

          {/* Description */}
          {work.description && work.description.length > 0 && (
            <AnimatedElement variants={fadeUp}>
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">詳細</h2>
                  <div className="prose prose-slate max-w-none">
                    <PortableText value={work.description} />
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          )}

          {/* Additional Images */}
          {work.images && work.images.length > 0 && (
            <AnimatedElement variants={fadeUp}>
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">追加画像</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {work.images.map((image, index) => (
                      <div key={index} className="aspect-video bg-gray-200 relative overflow-hidden rounded-lg">
                        <Image
                          src={urlFor(image).width(600).height(400).url()}
                          alt={`${work.title} - 画像 ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          )}

          {/* External Link */}
          {work.url && (
            <AnimatedElement variants={fadeUp}>
              <Card className="bg-gradient-to-r from-primary/5 to-purple-600/5">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 mb-2">サイトを見る</h2>
                      <p className="text-slate-600">実際のWebサイトをご覧いただけます</p>
                    </div>
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
                    >
                      サイトへ
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          )}

          {/* Back to Works */}
          <AnimatedElement variants={fadeUp}>
            <div className="text-center pt-8">
              <Link
                href="/works"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
              >
                <ArrowLeft size={20} className="mr-2" />
                Works一覧に戻る
              </Link>
            </div>
          </AnimatedElement>
        </AnimatedElement>
      </div>
    </div>
  )
}
