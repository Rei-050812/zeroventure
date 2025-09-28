import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { fadeUp, containerStagger } from '@/lib/animations'
import { Calendar, ArrowRight, Bell } from 'lucide-react'

export const metadata: Metadata = {
  title: 'News | ZEROVENTURE',
  description: 'ZEROVENTUREの最新ニュースとお知らせをご確認ください。',
}

const newsItems = [
  {
    id: '1',
    title: '年末年始休業のお知らせ',
    summary: '2024年12月29日〜2025年1月3日まで年末年始休業とさせていただきます。休業期間中のお問い合わせについては、1月4日以降順次対応いたします。',
    publishedAt: '2024-12-20',
    category: '重要',
    categoryColor: 'bg-red-100 text-red-700'
  },
  {
    id: '2',
    title: 'Webサイト制作料金の改定について',
    summary: '2024年2月1日より、Webサイト制作料金を一部改定させていただきます。詳細は料金ページをご確認ください。',
    publishedAt: '2024-01-20',
    category: 'お知らせ',
    categoryColor: 'bg-blue-100 text-blue-700'
  },
  {
    id: '3',
    title: '新サービス「LP最適化コンサルティング」開始',
    summary: '既存のランディングページのコンバージョン率向上を支援する新サービスを開始いたします。',
    publishedAt: '2024-01-15',
    category: 'サービス',
    categoryColor: 'bg-green-100 text-green-700'
  },
  {
    id: '4',
    title: 'ZEROVENTURE公式サイトリニューアル',
    summary: 'この度、ZEROVENTUREの公式Webサイトを全面リニューアルいたしました。より使いやすく、分かりやすいサイトを目指しています。',
    publishedAt: '2023-12-15',
    category: 'お知らせ',
    categoryColor: 'bg-blue-100 text-blue-700'
  },
  {
    id: '5',
    title: '夏季休業のお知らせ',
    summary: '2023年8月11日〜8月16日まで夏季休業とさせていただきます。期間中のお問い合わせは8月17日以降対応いたします。',
    publishedAt: '2023-08-01',
    category: '重要',
    categoryColor: 'bg-red-100 text-red-700'
  },
  {
    id: '6',
    title: 'セキュリティ強化のお知らせ',
    summary: 'お客様の情報保護のため、当社のセキュリティ対策を強化いたしました。詳細はプライバシーポリシーをご確認ください。',
    publishedAt: '2023-07-20',
    category: '重要',
    categoryColor: 'bg-red-100 text-red-700'
  }
]

const categories = [
  { name: 'すべて', color: 'bg-gray-100 text-gray-700' },
  { name: '重要', color: 'bg-red-100 text-red-700' },
  { name: 'お知らせ', color: 'bg-blue-100 text-blue-700' },
  { name: 'サービス', color: 'bg-green-100 text-green-700' }
]

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 bg-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedElement variants={containerStagger} className="text-center">
            <AnimatedElement variants={fadeUp}>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                News
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                ZEROVENTUREの最新ニュースと<br />
                重要なお知らせをご確認ください
              </p>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={fadeUp}>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    index === 0
                      ? 'bg-primary text-white'
                      : category.color + ' hover:opacity-80'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* News List */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <div className="space-y-6">
              {newsItems.map((news, index) => (
                <AnimatedElement key={index} variants={fadeUp}>
                  <Card className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                              <Calendar size={16} />
                              {new Date(news.publishedAt).toLocaleDateString('ja-JP')}
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${news.categoryColor}`}>
                              {news.category}
                            </span>
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-slate-900 mb-2 hover:text-primary transition-colors duration-200">
                            <Link href={`/news/${news.id}`}>
                              {news.title}
                            </Link>
                          </h3>
                          <p className="text-slate-600 leading-relaxed mb-3">
                            {news.summary}
                          </p>
                          <Link
                            href={`/news/${news.id}`}
                            className="text-primary hover:text-primary-hover transition-colors duration-200 text-sm font-medium inline-flex items-center gap-1"
                          >
                            詳細を見る
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <AnimatedElement variants={fadeUp}>
              <Card className="bg-white border border-red-200 rounded-xl shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Bell className="w-6 h-6 text-red-600" />
                    <CardTitle className="text-lg text-red-900">
                      重要なお知らせ
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-red-800 leading-relaxed">
                    お客様には日頃より格別のご愛顧を賜り、厚く御礼申し上げます。
                    重要なお知らせがある場合は、こちらに掲載いたします。
                    定期的にご確認いただきますようお願いいたします。
                  </p>
                </CardContent>
              </Card>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement variants={containerStagger}>
            <AnimatedElement variants={fadeUp}>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                お気軽にお問い合わせください
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                ご質問やご不明な点がございましたら<br />
                お気軽にご連絡ください
              </p>
              <Button size="lg" className="min-w-[200px]">
                <Link href="/contact" className="flex items-center gap-2">
                  お問い合わせ
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