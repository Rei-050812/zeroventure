'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Calendar, User, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

interface Work {
  _id: string
  title: string
  slug: { current: string }
  summary: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  description?: any[]
  techStack: string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  coverImage: any
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
  const portableTextComponents = {
    types: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      image: ({ value }: any) => {
        return (
          <div className="my-8">
            <Image
              src={urlFor(value).width(800).url()}
              alt={value.alt || ''}
              width={800}
              height={450}
              className="rounded-lg w-full h-auto"
            />
            {value.caption && (
              <p className="text-center text-sm text-slate-600 mt-2">
                {value.caption}
              </p>
            )}
          </div>
        )
      }
    }
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Back Button */}
          <div>
            <Link
              href="/works"
              className="inline-flex items-center text-slate-600 hover:text-primary transition-colors duration-200"
            >
              <ArrowLeft size={20} className="mr-2" />
              Works一覧に戻る
            </Link>
          </div>

          {/* Category Badge */}
          <div>
            <span className="inline-block bg-primary text-white text-sm px-4 py-2 rounded-full font-medium">
              {work.category}
            </span>
          </div>

          {/* Title */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              {work.title}
            </h1>
          </div>

          {/* Meta Information */}
          <div>
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
          </div>

          {/* Cover Image */}
          <div>
            <div className="aspect-video bg-gray-200 relative overflow-hidden rounded-lg">
              {work.coverImage && (
                <Image
                  src={work.coverImage.asset ? urlFor(work.coverImage).width(1200).height(675).url() : work.coverImage}
                  alt={work.coverImage.alt || work.title}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </div>

          {/* Description */}
          {work.description && work.description.length > 0 && (
            <div>
              <Card hover={false}>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">詳細</h2>
                  <div className="prose prose-slate max-w-none">
                    <PortableText value={work.description} components={portableTextComponents} />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <Card hover={false}>
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
          </div>

          {/* External Link */}
          {work.url && (
            <div>
              <Card className="bg-gradient-to-r from-primary/5 to-purple-600/5" hover={false}>
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
            </div>
          )}

          {/* Back to Works */}
          <div>
            <div className="text-center pt-8">
              <Link
                href="/works"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
              >
                <ArrowLeft size={20} className="mr-2" />
                Works一覧に戻る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
