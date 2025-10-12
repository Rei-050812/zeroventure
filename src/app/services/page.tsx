import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { fadeUp, containerStagger } from '@/lib/animations'
import { TrendingUp, PenTool, Users, FileText, Building2, ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description: '5つのサイトスタイルから、目的に合わせた最適なWebサイトを制作。LP、ポートフォリオ、リクルート、メディア、コーポレートサイトに対応。シンプルな設計で成果につながるサイトを提供します。制作フローやサービス内容も詳しく紹介しています。',
  alternates: {
    canonical: 'https://zero-venture.com/services',
  },
  openGraph: {
    title: 'Services | ZEROVENTURE',
    description: '5つのサイトスタイルから、目的に合わせた最適なWebサイトを制作。シンプルな設計で成果につながるサイトを提供します。',
    url: 'https://zero-venture.com/services',
  },
}

const services = [
  {
    id: 'lp',
    title: 'LP制作',
    description: '商品やサービスの魅力をしっかり伝え、お問い合わせや購入につながるランディングページを制作します。シンプルな設計で訪問者が自然に行動でき、広告やキャンペーンとの相性も抜群です。',
    icon: TrendingUp,
    image: '/images/service-landing-page.png',
    features: [
      '必要な情報を1ページに集約',
      '広告・キャンペーンと相性◎',
      '行動を促す導線設計（ボタン配置など）',
      'スマホでも購入・お問い合わせがスムーズ',
      'ページ速度を最適化し離脱を防止'
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'portfolio',
    title: 'ポートフォリオサイト制作',
    description: 'クリエイターや個人の方の作品や実績を魅力的に見せるサイトを制作します。シンプルで直感的なデザインで作品の良さを引き出し、仕事の依頼や新しいチャンスにつなげます。',
    icon: PenTool,
    image: '/images/service-portfolio.png',
    features: [
      'ギャラリー機能で作品を美しく表示',
      'プロフィールページで信頼感やストーリーを伝える',
      'SNSや外部リンクを設置して発信力を強化',
      '信頼感を高める自己ブランディング設計',
      'シンプルで洗練されたデザインで作品を引き立てる'
    ],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'recruit',
    title: 'リクルートサイト制作',
    description: '会社の魅力や雰囲気を伝え、応募につながる採用専用サイトを制作します。求職者が必要な情報にすぐアクセスでき、社員インタビューで会社の雰囲気をリアルに伝えます。',
    icon: Users,
    image: '/images/service-recruitment.png',
    features: [
      '求人一覧・詳細ページで募集内容を明確に表示',
      '社員紹介や会社紹介ページで雰囲気を伝える',
      '応募フォーム設置で応募までのハードルを下げる',
      '採用までの流れをわかりやすく設計',
      '会社の魅力を引き出す採用ブランディング設計'
    ],
    gradient: 'from-green-500 to-teal-500'
  },
  {
    id: 'media',
    title: 'メディアサイト制作',
    description: '記事を発信してアクセスを集め、集客やブランド認知を広げるサイトを制作します。記事を整理しやすく、読者が欲しい情報にすぐたどり着ける設計です。',
    icon: FileText,
    image: '/images/service-media.png',
    features: [
      '記事投稿機能（カテゴリ・タグ対応）で情報を整理',
      '関連記事や人気記事の表示で回遊率を向上',
      '長期的に発信を続けやすい設計',
      '読み手の興味を引くレイアウト構成',
      'SNS連携で拡散力を強化'
    ],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'corporate',
    title: 'コーポレートサイト制作',
    description: '会社やお店の信頼を高める、本格的なホームページを制作します。必要なページをしっかりカバーし、ブランドイメージに合わせたデザインで長期的に運用できます。',
    icon: Building2,
    image: '/images/service-corporate.png',
    features: [
      '会社に必要な基本ページを整備（会社概要・サービス紹介など）',
      'お知らせや実績を簡単に更新できる設計',
      '企業の理念や強みを伝える情報設計',
      '見やすく信頼感のあるレイアウト構成',
      '問い合わせや資料請求など、目的に合わせた導線を設計'
    ],
    gradient: 'from-slate-600 to-slate-800'
  }
]

const process = [
  {
    step: '01',
    title: 'お問い合わせ',
    description: 'まずはお気軽にご相談ください。\n「やりたいこと」や「作りたいもの」を簡単にお聞かせいただくだけで大丈夫です。\nお問い合わせは、フォーム・メール・SNS（X、Instagram）からお気軽にご連絡ください。'
  },
  {
    step: '02',
    title: '方向性整理',
    description: '専用フォームにご記入いただいた内容をもとに、目的やゴールを整理します。\nビジネスの課題やターゲット層を明確にし、全体の方向性を定めます。\n必要な情報を事前に共有いただくことで、制作をスムーズに進行できます。'
  },
  {
    step: '03',
    title: 'デザイン設計',
    description: '専用フォームでご記入いただいた内容をもとに、サイト全体の構成やレイアウトを設計します。\n見やすさと操作のしやすさを重視し、\nブランドイメージを反映したデザインを提案・制作します。'
  },
  {
    step: '04',
    title: 'コーディング',
    description: 'AIを取り入れた効率的な制作環境で、軽くて速いWebサイトを構築します。\nコードの品質と拡張性にもこだわり、\nスマホやタブレットでも快適に閲覧できるよう最適化。\n検索にも強く、長く使えるサイトを実現します。'
  },
  {
    step: '05',
    title: 'テスト・公開',
    description: '動作確認や表示チェックを丁寧に行い、問題がないことを確認します。\n最終確認後、Webサイトを公開。\n公開に必要な設定や調整もこちらで対応します。'
  },
  {
    step: '06',
    title: '運用サポート',
    description: '公開後も継続してサポートします。\n更新や改善のご相談、ページ追加、より効果的に運用するためのご提案など、\n事業の成長に合わせた最適な運用を一緒に行っていきます。'
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden bg-white">
        {/* Background */}
        <div className="absolute inset-0 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedElement variants={containerStagger} className="text-center">
            <AnimatedElement variants={fadeUp}>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Services
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                あなたのビジネスの成長を加速する<br />
                最適なWebサイトを提供します。
              </p>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <div className="space-y-20">
              {services.map((service, index) => (
                <AnimatedElement key={index} variants={fadeUp}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}>
                    <div className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="relative aspect-square w-4/5 rounded-lg" style={{
                        border: '3px solid',
                        borderColor: service.gradient === 'from-blue-500 to-cyan-500'
                          ? '#3B82F6'
                          : service.gradient === 'from-purple-500 to-pink-500'
                          ? '#A855F7'
                          : service.gradient === 'from-green-500 to-teal-500'
                          ? '#14B8A6'
                          : service.gradient === 'from-orange-500 to-red-500'
                          ? '#F97316'
                          : '#475569',
                        boxShadow: `
                          inset 0 2px 0 0 rgba(255, 255, 255, 0.6),
                          inset 0 -2px 0 0 rgba(0, 0, 0, 0.15),
                          0 8px 16px rgba(0, 0, 0, 0.12),
                          0 0 0 1px rgba(255, 255, 255, 0.4) inset
                        `,
                        background: 'white',
                      }}>
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover rounded-md"
                          sizes="(max-width: 768px) 80vw, 40vw"
                        />
                      </div>
                    </div>
                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                      </div>
                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-primary" />
                            <span className="text-slate-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <AnimatedElement variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                制作フロー
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                お客様と丁寧に連携し、<br />
                目的に合った高品質なWebサイトを制作します。
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <AnimatedElement key={index} variants={fadeUp}>
                  <Card className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                        <CardTitle className="text-lg text-slate-900">
                          {step.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                        {step.description}
                      </p>
                    </CardContent>
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
                お気軽にご相談ください
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                あなたのビジネスを次のステージへ導くWebサイト制作を実現します。
              </p>
              <Button size="lg" className="min-w-[200px]">
                <Link href="/contact" className="flex items-center gap-2">
                  無料相談する
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