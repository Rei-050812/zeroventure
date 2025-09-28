import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { fadeUp, containerStagger } from '@/lib/animations'
import { Calendar, Tag, ArrowRight, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | ZEROVENTURE',
  description: 'ZEROVENTUREのブログ。Web制作、デザイン、マーケティングに関する最新情報をお届けします。',
}

const blogPosts = [
  {
    id: '1',
    title: 'Next.js 15の新機能とパフォーマンス改善のポイント',
    summary: 'Next.js 15で追加された新機能と、パフォーマンス向上のための実装方法について詳しく解説します。',
    publishedAt: '2024-01-15',
    category: '技術',
    tags: ['Next.js', 'React', 'Performance'],
    image: 'https://source.unsplash.com/800x600/?nextjs,coding',
    readTime: '5分'
  },
  {
    id: '2',
    title: 'ベンチャー企業がWebサイトで成果を出すための5つのポイント',
    summary: 'スタートアップ・ベンチャー企業がWebサイトを活用してビジネス成果を最大化するための実践的なアドバイス。',
    publishedAt: '2024-01-10',
    category: 'マーケティング',
    tags: ['マーケティング', 'CVR', 'ベンチャー'],
    image: 'https://source.unsplash.com/800x600/?business,startup',
    readTime: '8分'
  },
  {
    id: '3',
    title: 'UXデザインの基本原則とWebサイト制作への応用',
    summary: 'ユーザー体験を向上させるUXデザインの基本原則と、実際のWebサイト制作での実践方法を紹介します。',
    publishedAt: '2024-01-05',
    category: 'デザイン',
    tags: ['UX', 'デザイン', 'ユーザビリティ'],
    image: 'https://source.unsplash.com/800x600/?ux,design',
    readTime: '10分'
  },
  {
    id: '4',
    title: 'コンバージョン率を向上させるLP制作のコツ',
    summary: 'ランディングページの効果を最大化するデザインテクニックとコピーライティングのポイントを解説。',
    publishedAt: '2023-12-28',
    category: 'マーケティング',
    tags: ['LP', 'CVR', 'コンバージョン'],
    image: 'https://source.unsplash.com/800x600/?landing-page,conversion',
    readTime: '6分'
  },
  {
    id: '5',
    title: 'モダンなWebサイトに必要なアクセシビリティ対応',
    summary: 'すべてのユーザーが利用しやすいWebサイトを作るためのアクセシビリティ実装のベストプラクティス。',
    publishedAt: '2023-12-20',
    category: '技術',
    tags: ['アクセシビリティ', 'A11y', 'ユーザビリティ'],
    image: 'https://source.unsplash.com/800x600/?accessibility,inclusive',
    readTime: '12分'
  },
  {
    id: '6',
    title: 'Tailwind CSSで効率的なスタイリング実装',
    summary: 'Tailwind CSSを使用した効率的なスタイリング手法と、メンテナンス性の高いコンポーネント設計について。',
    publishedAt: '2023-12-15',
    category: '技術',
    tags: ['Tailwind CSS', 'CSS', 'フロントエンド'],
    image: 'https://source.unsplash.com/800x600/?css,web-development',
    readTime: '7分'
  }
]

const categories = ['すべて', '技術', 'マーケティング', 'デザイン']

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
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

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <AnimatedElement variants={fadeUp}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="記事を検索..."
                    className="w-full md:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                </div>
              </AnimatedElement>

              <AnimatedElement variants={fadeUp}>
                <div className="flex gap-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        index === 0
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-slate-600 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </AnimatedElement>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <AnimatedElement key={index} variants={fadeUp}>
                  <Card className="group h-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="aspect-video relative overflow-hidden rounded-t-xl">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                        <Calendar size={16} />
                        {new Date(post.publishedAt).toLocaleDateString('ja-JP')}
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.summary}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center gap-1 text-xs bg-gray-100 text-slate-600 px-2 py-1 rounded"
                          >
                            <Tag size={10} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Link
                        href={`/blog/${post.id}`}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement variants={containerStagger}>
            <AnimatedElement variants={fadeUp}>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Webサイト制作のご相談はこちら
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                あなたのビジネスを成功に導く<br />
                Webサイトを一緒に作りませんか？
              </p>
              <Button size="lg" className="min-w-[200px]">
                <Link href="/contact" className="flex items-center gap-2">
                  無料相談を申し込む
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </section>
    </main>
  )
}