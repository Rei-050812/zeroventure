'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Calendar, ArrowRight, Tag } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { fadeUp, containerStagger } from '@/lib/animations'
import { getLatestPosts, getLatestNews } from '@/lib/sanity'

// Types
interface BlogPost {
  id: string
  title: string
  summary: string
  publishedAt: string
  category: string
  tags: string[]
  type: string
}

interface NewsItem {
  id: string
  title: string
  summary: string
  publishedAt: string
  category: string
  type: string
}

interface PostsState {
  blog: BlogPost[]
  news: NewsItem[]
}

// Mock data for latest posts (この部分は後でSanityから取得)
const latestPosts: PostsState = {
  blog: [
    {
      id: '1',
      title: 'Next.js 15の新機能とパフォーマンス改善のポイント',
      summary: 'Next.js 15で追加された新機能と、パフォーマンス向上のための実装方法について解説します。',
      publishedAt: '2024-01-15',
      category: '技術',
      tags: ['Next.js', 'React', 'Performance'],
      type: 'blog'
    },
    {
      id: '2',
      title: 'ベンチャー企業がWebサイトで成果を出すための5つのポイント',
      summary: 'スタートアップ・ベンチャー企業がWebサイトを活用してビジネス成果を最大化するための実践的なアドバイス。',
      publishedAt: '2024-01-10',
      category: 'マーケティング',
      tags: ['マーケティング', 'CVR', 'ベンチャー'],
      type: 'blog'
    }
  ],
  news: [
    {
      id: '1',
      title: '年末年始休業のお知らせ',
      summary: '2024年12月29日〜2025年1月3日まで年末年始休業とさせていただきます。',
      publishedAt: '2024-12-20',
      category: '重要',
      type: 'news'
    }
  ]
}

function PostCard({ post }: { post: BlogPost | NewsItem }) {
  const href = `/${post.type}/${post.id}`

  return (
    <Card className="group h-full">
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
          <Calendar size={16} />
          {new Date(post.publishedAt).toLocaleDateString('ja-JP')}
          {post.category && (
            <>
              <span>•</span>
              <span className="text-primary">{post.category}</span>
            </>
          )}
        </div>
        <CardTitle className="group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {post.title}
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {post.summary}
        </CardDescription>
      </CardHeader>

      {post.tags && (
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag: string, index: number) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 text-xs bg-gray-100 text-slate-600 px-2 py-1 rounded"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      )}

      <CardFooter>
        <Link
          href={href}
          className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium inline-flex items-center gap-1"
        >
          続きを読む
          <ArrowRight size={14} />
        </Link>
      </CardFooter>
    </Card>
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
          blog: blogPosts.length > 0 ? blogPosts : latestPosts.blog,
          news: newsItems.length > 0 ? newsItems : latestPosts.news
        })
      } catch (error) {
        setPosts(latestPosts)
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
                <AnimatedElement key={post.id || `blog-${index}`} variants={fadeUp}>
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
                <AnimatedElement key={post.id || `news-${index}`} variants={fadeUp}>
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex items-start gap-4">
                      <div className="text-sm text-slate-500 min-w-[100px]">
                        {new Date(post.publishedAt).toLocaleDateString('ja-JP')}
                      </div>
                      <div className="flex-1">
                        <Link
                          href={`/news/${post.id}`}
                          className="text-slate-900 hover:text-primary transition-colors duration-200 font-medium"
                        >
                          {post.title}
                        </Link>
                        {post.category && (
                          <span className="ml-2 text-xs bg-primary text-white px-2 py-1 rounded">
                            {post.category}
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