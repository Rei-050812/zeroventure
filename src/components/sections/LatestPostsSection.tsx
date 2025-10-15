'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { fadeUp, containerStagger } from '@/lib/animations'
import { getLatestPosts, getLatestNews, urlFor } from '@/lib/sanity'

// Types
interface BlogPost {
  _id?: string
  id?: string
  slug?: { current: string }
  title: string
  excerpt?: string
  summary?: string
  publishedAt: string
  category: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  coverImage?: any
  tags?: string[]
  type: string
}

interface NewsItem {
  _id: string
  title: string
  slug: { current: string }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[]
  important: boolean
  publishedAt: string
}

interface PostsState {
  blog: BlogPost[]
  news: NewsItem[]
}

function PostCard({ post }: { post: BlogPost }) {
  const href = post.slug ? `/blog/${post.slug.current}` : `/${post.type}/${post.id || post._id}`
  const postSummary = post.excerpt || post.summary

  return (
    <Link href={href} className="block h-full">
      <Card className="group overflow-hidden h-full cursor-pointer">
        {/* Cover Image */}
        <div className="aspect-video bg-gray-200 relative overflow-hidden mb-4">
          {post.coverImage ? (
            <Image
              src={post.coverImage.asset ? urlFor(post.coverImage).width(600).height(400).url() : post.coverImage}
              alt={post.coverImage.alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center">
              <span className="text-slate-700 font-bold text-lg">
                {post.title}
              </span>
            </div>
          )}
          {post.category && (
            <div className="absolute top-4 right-4">
              <span className="bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                {post.category}
              </span>
            </div>
          )}
        </div>

        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <Calendar size={16} />
            {new Date(post.publishedAt).toLocaleDateString('ja-JP')}
          </div>
          <CardTitle className="group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {post.title}
          </CardTitle>
          {postSummary && (
            <CardDescription className="line-clamp-3">
              {postSummary}
            </CardDescription>
          )}
        </CardHeader>

        {post.tags && post.tags.length > 0 && (
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag: string, index: number) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-slate-600 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        )}

        <CardFooter>
          <span className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium inline-flex items-center gap-1">
            続きを読む
            <ArrowRight size={14} />
          </span>
        </CardFooter>
      </Card>
    </Link>
  )
}

export function LatestPostsSection() {
  const [posts, setPosts] = useState<PostsState>({ blog: [], news: [] })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadContent() {
      try {
        const [blogPosts, newsItems] = await Promise.all([
          getLatestPosts(),
          getLatestNews()
        ])

        setPosts({
          blog: blogPosts || [],
          news: newsItems || []
        })
      } catch (error) {
        console.error('Failed to load content:', error)
        setPosts({ blog: [], news: [] })
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [])

  if (loading) {
    return (
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
          <p className="text-slate-900">Loading posts...</p>
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
                Latest Posts
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                ブログ記事やお知らせなど
                <br />
                最新の情報をお届け
              </p>
            </AnimatedElement>
          </div>

          {/* Blog Posts */}
          <div>
            <AnimatedElement variants={fadeUp} className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-900">Blog</h3>
              <Link
                href="/blog"
                className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium inline-flex items-center gap-1"
              >
                すべてのブログを見る
                <ArrowRight size={16} />
              </Link>
            </AnimatedElement>

            <AnimatedElement
              variants={containerStagger}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {posts.blog.map((post, index) => (
                <AnimatedElement key={post._id || post.id || `blog-${index}`} variants={fadeUp}>
                  <PostCard post={post} />
                </AnimatedElement>
              ))}
            </AnimatedElement>
          </div>

          {/* News */}
          <div>
            <AnimatedElement variants={fadeUp} className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-900">News</h3>
              <Link
                href="/news"
                className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium inline-flex items-center gap-1"
              >
                すべてのお知らせを見る
                <ArrowRight size={16} />
              </Link>
            </AnimatedElement>

            <AnimatedElement variants={containerStagger}>
              {posts.news.map((post, index) => (
                <AnimatedElement key={post._id || `news-${index}`} variants={fadeUp}>
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex items-start gap-4">
                      <div className="text-sm text-slate-500 min-w-[100px]">
                        {new Date(post.publishedAt).toLocaleDateString('ja-JP')}
                      </div>
                      <div className="flex-1">
                        <Link
                          href={`/news/${post.slug.current}`}
                          className="text-slate-900 hover:text-primary transition-colors duration-200 font-medium"
                        >
                          {post.title}
                        </Link>
                        {post.important && (
                          <span className="ml-2 text-xs bg-red-600 text-white px-2 py-1 rounded">
                            重要
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </AnimatedElement>
          </div>

          {/* CTA */}
          <AnimatedElement variants={fadeUp} className="text-center pt-8">
            <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                あなたのWebサイトづくり、ここから始めませんか？
              </h3>
              <p className="text-slate-600 mb-6">
                ZEROVENTUREでは、初めての方でも安心してご相談いただけます。<br />
                無料相談からスタートし、理想のサイトづくりを全力でサポートします。
              </p>
              <Button size="lg">
                <Link href="/contact" className="flex items-center gap-2">
                  お問い合わせ
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </AnimatedElement>
        </AnimatedElement>
      </div>
    </section>
  )
}