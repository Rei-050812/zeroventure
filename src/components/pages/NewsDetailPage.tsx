'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

interface NewsItem {
  _id: string
  title: string
  slug: { current: string }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[]
  important: boolean
  publishedAt: string
}

interface NewsDetailPageProps {
  news: NewsItem
}

export function NewsDetailPage({ news }: NewsDetailPageProps) {
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
    },
    block: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      h1: ({ children, value }: any) => {
        const id = value._key
        return (
          <h1 id={id} className="text-3xl md:text-4xl font-bold text-slate-900 mt-12 mb-6 scroll-mt-24">
            {children}
          </h1>
        )
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      h2: ({ children, value }: any) => {
        const id = value._key
        return (
          <h2 id={id} className="text-2xl md:text-3xl font-bold text-slate-900 mt-10 mb-5 scroll-mt-24">
            {children}
          </h2>
        )
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      h3: ({ children, value }: any) => {
        const id = value._key
        return (
          <h3 id={id} className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4 scroll-mt-24">
            {children}
          </h3>
        )
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      h4: ({ children, value }: any) => {
        const id = value._key
        return (
          <h4 id={id} className="text-lg md:text-xl font-bold text-slate-900 mt-6 mb-3 scroll-mt-24">
            {children}
          </h4>
        )
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      normal: ({ children }: any) => {
        return <p className="text-slate-700 leading-relaxed mb-4">{children}</p>
      }
    },
    marks: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      link: ({ children, value }: any) => {
        const target = value.href.startsWith('http') ? '_blank' : undefined
        return (
          <a
            href={value.href}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className="text-primary hover:text-primary/80 underline"
          >
            {children}
          </a>
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
              href="/news"
              className="inline-flex items-center text-slate-600 hover:text-primary transition-colors duration-200"
            >
              <ArrowLeft size={20} className="mr-2" />
              お知らせ一覧に戻る
            </Link>
          </div>

          {/* Important Badge */}
          {news.important && (
            <div>
              <span className="inline-block bg-red-600 text-white text-sm px-4 py-2 rounded-full font-medium">
                重要なお知らせ
              </span>
            </div>
          )}

          {/* Title */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              {news.title}
            </h1>
          </div>

          {/* Meta Information */}
          <div>
            <div className="flex items-center gap-2 text-slate-600">
              <Calendar size={18} />
              <span>{new Date(news.publishedAt).toLocaleDateString('ja-JP')}</span>
            </div>
          </div>

          {/* Body Content */}
          <div>
            <Card hover={false}>
              <CardContent className="pt-6">
                <div className="max-w-none">
                  <PortableText value={news.body} components={portableTextComponents} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Back to News */}
          <div>
            <div className="text-center pt-8">
              <Link
                href="/news"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
              >
                <ArrowLeft size={20} className="mr-2" />
                お知らせ一覧に戻る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
