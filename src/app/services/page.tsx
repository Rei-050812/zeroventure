import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { fadeUp, containerStagger } from '@/lib/animations'
import { TrendingUp, PenTool, Users, FileText, Building2, ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | ZEROVENTURE',
  description: 'ZEROVENTUREが提供するLP制作・コーポレートサイト制作サービスの詳細をご紹介します。',
}

const services = [
  {
    title: 'LP制作',
    description: '商品やサービスの魅力をしっかり伝え、お問い合わせや購入につながるランディングページを制作します。成果につながる流れを意識した設計で、訪問者を自然に行動へと導きます。スマホでも快適に閲覧でき、ページの表示速度にも配慮。広告やキャンペーンと連動させることで、コンバージョン率を最大化し、ビジネスの成長を加速させます。',
    icon: TrendingUp,
    features: [
      'スマホ対応のシンプルで見やすいデザイン',
      '必要な情報を1ページに集約し、スクロールで完結',
      'お問い合わせフォーム設置で即座に反応を受け取れる',
      '広告やキャンペーンに最適化された構成',
      '行動につながる導線設計（CTA配置の最適化）',
      '基本的なSEO対策で検索エンジンからの流入も確保',
      'ページ表示速度の最適化で離脱率を低減',
      '3回までの修正対応・最短1週間での納品'
    ],
    image: 'https://source.unsplash.com/800x600/?laptop,design'
  },
  {
    title: 'ポートフォリオサイト制作',
    description: '作品や実績を魅力的に見せる、個人やクリエイター向けのサイトを制作します。シンプルで直感的に操作できるデザインを採用し、訪問者に作品の魅力が伝わりやすい構成を実現。SNSともスムーズに連携し、オンライン上での自己ブランディングを強化。自身の魅力や信頼感を最大限に引き出し、仕事の依頼や新たな機会を生み出すオンラインの名刺代わりとなります。',
    icon: PenTool,
    features: [
      'ギャラリー機能で作品を美しく表示',
      'プロフィール・自己紹介ページで人となりを伝える',
      'SNSや外部リンクの設置で活動の幅を広げる',
      'お問い合わせフォーム設置で仕事の依頼を受けやすく',
      '信頼感を高める自己ブランディング設計',
      'レスポンシブデザインでどのデバイスでも美しく表示',
      'シンプルで洗練されたデザインで作品を引き立てる',
      'パフォーマンス最適化で快適な閲覧体験を提供'
    ],
    image: 'https://source.unsplash.com/800x600/?portfolio,design'
  },
  {
    title: 'リクルートサイト制作',
    description: '会社の雰囲気や働く魅力を伝え、応募につながる採用専用サイトを制作します。応募ページまでの導線を整理し、求職者が必要な情報にスムーズにアクセスできる設計。社員の声やインタビューを掲載することで、会社の雰囲気をリアルに伝え、応募意欲を高めます。外部求人サービスとの連携も可能で、求職者が安心して応募できる環境を整え、採用力を高めます。',
    icon: Users,
    features: [
      '求人一覧・詳細ページで募集内容を明確に表示',
      '社員紹介や会社紹介ページで雰囲気を伝える',
      '応募フォーム設置で応募までのハードルを下げる',
      '外部求人サービスとの連携で応募経路を拡大',
      '応募意欲を高める採用ブランディング設計',
      'レスポンシブデザインでスマホからの応募もスムーズ',
      'SEO対策で求職者の検索からの流入を増やす',
      'CMS導入で求人情報の更新を簡単に'
    ],
    image: 'https://source.unsplash.com/800x600/?recruitment,team'
  },
  {
    title: 'メディアサイト制作',
    description: '記事を発信してアクセスを集め、集客やブランド認知を広げるサイトを制作します。カテゴリーやタグで記事を整理でき、読者が興味のある情報を見つけやすい設計。SNSと連携して情報を拡散し、継続的なアクセスを獲得。誰でも更新しやすい仕組みを導入し、継続的な情報発信をサポート。検索に強いサイト構造とアクセス解析機能で、効果的な集客を実現します。',
    icon: FileText,
    features: [
      '記事投稿機能（カテゴリ・タグ対応）で情報を整理',
      '関連記事や人気記事の表示で回遊率を向上',
      '検索に強いサイト構造でSEO効果を最大化',
      'アクセス解析・計測機能を搭載し、効果を可視化',
      '継続的な集客を実現する仕組みを構築',
      'CMS導入（WordPress等）で誰でも更新しやすく',
      'SNS連携で記事の拡散力を強化',
      'レスポンシブデザインでどのデバイスでも読みやすい'
    ],
    image: 'https://source.unsplash.com/800x600/?media,blog'
  },
  {
    title: 'コーポレートサイト制作',
    description: '会社やお店の信頼を高める、本格的なホームページを制作します。企業に必要な基本ページ（会社概要、サービス紹介、お知らせなど）をカバーし、ブランドイメージに沿ったデザインを実現。更新しやすい管理システムを導入することで、ニュースやお知らせを随時発信可能。信頼性を高める情報構成とブランド価値を訴求するデザインで、公開後も長期的な運用を見据え、企業の成長を支えるサイトを実現します。',
    icon: Building2,
    features: [
      '会社に必要な基本ページをカバー（会社概要・サービス紹介など）',
      'ご要望に合わせたオリジナルデザイン調整',
      'ニュースやお知らせを更新可能なCMS導入（選択可能）',
      '信頼性を高める情報構成と見やすいレイアウト',
      'ブランド価値を訴求するデザインで企業イメージを向上',
      '高度なSEO対策・アニメーション実装で印象的なサイトを実現',
      '無制限の修正対応・3ヶ月間の運用サポートで安心',
      'Google Analytics・サーバー・ドメイン設定代行'
    ],
    image: 'https://source.unsplash.com/800x600/?corporate,website'
  }
]

const process = [
  {
    step: '01',
    title: 'ヒアリング',
    description: 'お客様のビジネス課題や目標、ターゲットユーザーについて詳しくお聞きします。'
  },
  {
    step: '02',
    title: '企画・設計',
    description: 'ヒアリング内容を基に、最適なサイト構成とデザイン方針を企画します。'
  },
  {
    step: '03',
    title: 'デザイン制作',
    description: 'ブランドイメージを反映したオリジナルデザインを制作します。'
  },
  {
    step: '04',
    title: 'コーディング',
    description: '最新技術を使用して、高品質なWebサイトを構築します。'
  },
  {
    step: '05',
    title: 'テスト・納品',
    description: '動作確認とテストを実施後、サイトを公開・納品いたします。'
  },
  {
    step: '06',
    title: '運用サポート',
    description: '公開後も継続的な運用サポートと改善提案を行います。'
  }
]

export default function ServicesPage() {
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
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
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
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-primary" />
                            <span className="text-slate-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button size="lg">
                        <Link href="/contact" className="flex items-center gap-2">
                          お問い合わせ
                          <ArrowRight size={20} />
                        </Link>
                      </Button>
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
                お客様との密な連携により、<br />
                最高品質のWebサイトをお届けします。
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
                      <p className="text-slate-600 leading-relaxed">
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