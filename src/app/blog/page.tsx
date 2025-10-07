import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card'
import { fadeUp, containerStagger } from '@/lib/animations'
import { Calendar, ArrowRight } from 'lucide-react'
import { getPosts, urlFor } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Blog | ZEROVENTURE',
  description: 'ZEROVENTUREのブログ。Web制作、デザイン、マーケティングに関する最新情報をお届けします。',
}

export default async function BlogPage() {
  const posts = await getPosts()

  // デバッグ: 取得した投稿を確認
  console.log('All posts:', posts.length, posts)

  // slugがあるpostのみフィルター
  const validPosts = posts.filter((post: any) => post.slug?.current)
  console.log('Valid posts with slug:', validPosts.length, validPosts.map((p: any) => ({ title: p.title, slug: p.slug })))

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden bg-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://source.unsplash.com/1920x1080/?blog,writing,content"
            alt="Blog Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedElement variants={containerStagger} className="text-center">
            <AnimatedElement variants={fadeUp}>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Blog
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Web制作、デザイン、マーケティングに関する<br />
                最新情報と実践的なノウハウをお届け
              </p>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </section>


      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {validPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">まだブログ記事がありません。</p>
              <p className="text-sm text-slate-500 mt-2">取得した投稿数: {posts.length}</p>
            </div>
          ) : (
            <AnimatedElement variants={containerStagger}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {validPosts.map((post: any, index: number) => (
                  <AnimatedElement key={post._id} variants={fadeUp}>
                    <Card className="group h-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                      {post.coverImage && (
                        <div className="aspect-video relative overflow-hidden rounded-t-xl">
                          <Image
                            src={urlFor(post.coverImage).width(800).height(600).url()}
                            alt={post.title}
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