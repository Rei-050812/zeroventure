'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardContent } from '@/components/ui/Card'
import { fadeUp, containerStagger } from '@/lib/animations'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  body: any[]
  category: string
  coverImage: any
  publishedAt: string
}

interface PostDetailPageProps {
  post: Post
}

export function PostDetailPage({ post }: PostDetailPageProps) {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedElement variants={containerStagger} className="space-y-12">
          {/* Back Button */}
          <AnimatedElement variants={fadeUp}>
            <Link
              href="/blog"
              className="inline-flex items-center text-slate-600 hover:text-primary transition-colors duration-200"
            >
              <ArrowLeft size={20} className="mr-2" />
              ブログ一覧に戻る
            </Link>
          </AnimatedElement>

          {/* Category Badge */}
          <AnimatedElement variants={fadeUp}>
            <span className="inline-block bg-primary text-white text-sm px-4 py-2 rounded-full font-medium">
              {post.category}
            </span>
          </AnimatedElement>

          {/* Title */}
          <AnimatedElement variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              {post.title}
            </h1>
          </AnimatedElement>

          {/* Meta Information */}
          <AnimatedElement variants={fadeUp}>
            <div className="flex items-center gap-2 text-slate-600">
              <Calendar size={18} />
              <span>{new Date(post.publishedAt).toLocaleDateString('ja-JP')}</span>
            </div>
          </AnimatedElement>

          {/* Cover Image */}
          <AnimatedElement variants={fadeUp}>
            <div className="aspect-video bg-gray-200 relative overflow-hidden rounded-lg">
              {post.coverImage && (
                <Image
                  src={post.coverImage.asset ? urlFor(post.coverImage).width(1200).height(675).url() : post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </AnimatedElement>

          {/* Excerpt */}
          {post.excerpt && (
            <AnimatedElement variants={fadeUp}>
              <Card className="bg-gray-50">
                <CardContent className="pt-6">
                  <p className="text-slate-700 text-lg leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            </AnimatedElement>
          )}

          {/* Body Content */}
          <AnimatedElement variants={fadeUp}>
            <Card>
              <CardContent className="pt-6">
                <div className="prose prose-slate prose-lg max-w-none">
                  <PortableText value={post.body} />
                </div>
              </CardContent>
            </Card>
          </AnimatedElement>

          {/* Back to Blog */}
          <AnimatedElement variants={fadeUp}>
            <div className="text-center pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
              >
                <ArrowLeft size={20} className="mr-2" />
                ブログ一覧に戻る
              </Link>
            </div>
          </AnimatedElement>
        </AnimatedElement>
      </div>
    </div>
  )
}
