'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight, Search } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card'
import { fadeUp, containerStagger } from '@/lib/animations'
import { getPosts, urlFor } from '@/lib/sanity'

// Types
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

export function BlogIndexPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('すべて')
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {
    async function loadPosts() {
      try {
        const sanityPosts = await getPosts()
        // slugがあるpostのみフィルター
        const validPosts = sanityPosts.filter((post: any) => post.slug?.current)
        setPosts(validPosts)
      } catch (error) {
        console.error('Failed to load posts:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  const categories = ['すべて', 'Web制作', 'デザイン', 'SEO', 'マーケティング']

  // カテゴリフィルター
  const categoryFilteredPosts = selectedCategory === 'すべて'
    ? posts
    : posts.filter(post => post.category === selectedCategory)

  // 検索フィルター
  const filteredPosts = searchQuery
    ? categoryFilteredPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categoryFilteredPosts

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
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger} className="text-center">
            <AnimatedElement variants={fadeUp}>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Blog
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Web制作・デザイン・SEO・マーケティングの<br />
                最新情報と実践的なノウハウをお届けします。
              </p>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Search Bar */}
            <AnimatedElement variants={fadeUp}>
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="記事を検索..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </AnimatedElement>

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
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">
                {searchQuery
                  ? '検索結果が見つかりませんでした。'
                  : 'まだブログ記事がありません。'}
              </p>
            </div>
          ) : (
            <AnimatedElement variants={containerStagger}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post: Post) => (
                  <AnimatedElement key={post._id} variants={fadeUp}>
                    <Card className="group h-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                      {post.coverImage && (
                        <div className="aspect-video relative overflow-hidden rounded-t-xl">
                          <Image
                            src={urlFor(post.coverImage).width(800).height(600).url()}
                            alt={post.coverImage.alt || post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {post.category && (
                            <div className="absolute top-4 left-4">
                              <span className="bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                                {post.category}
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      <CardHeader>
                        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                          <Calendar size={16} />
                          {new Date(post.publishedAt).toLocaleDateString('ja-JP')}
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </CardTitle>
                        {post.excerpt && (
                          <CardDescription className="line-clamp-3 mt-2">
                            {post.excerpt}
                          </CardDescription>
                        )}
                      </CardHeader>

                      <CardFooter>
                        <Link
                          href={`/blog/${post.slug.current}`}
                          className="text-primary hover:text-primary-hover transition-colors duration-200 text-sm font-medium inline-flex items-center gap-1"
                        >
                          続きを読む
                          <ArrowRight size={14} />
                        </Link>
                      </CardFooter>
                    </Card>
                  </AnimatedElement>
                ))}
              </div>
            </AnimatedElement>
          )}
        </div>
      </section>
    </main>
  )
}
