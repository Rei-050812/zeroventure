import { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { fadeUp, containerStagger } from '@/lib/animations'
import { Check, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing | ZEROVENTURE',
  description: 'ZEROVENTUREの料金プランをご確認ください。目的に合わせて選べる5つのプランで、あなたのビジネスに最適なWebサイトを提供します。',
}

const pricingPlans = [
  {
    name: 'LP Plan',
    description: '成果を最短で引き出す1ページ完結型サイト',
    originalPrice: '80,000',
    price: '64,000',
    period: '（税込）',
    features: [
      'スマホ対応のシンプルデザイン',
      '必要な情報を1ページに集約',
      '短時間で成果が出る構成設計',
      '広告やキャンペーンに最適化',
      '行動につながる導線設計',
      'ファーストビューの最適設計',
      '納品後サポート：14日間'
    ],
    popular: false,
    buttonText: 'このプランで相談する',
    detail: '1ページ完結で、商品・サービスの購入やお問い合わせを最大化します。お問い合わせボタンを効果的に配置し、広告から訪れた人が迷わず行動できる仕組みを作ります。'
  },
  {
    name: 'Portfolio Site Plan',
    description: '作品や実績を引き立てるクリエイター向けサイト',
    originalPrice: '100,000',
    price: '80,000',
    period: '（税込）',
    features: [
      'ギャラリー機能で作品を表示',
      'プロフィール・自己紹介ページ',
      'SNSや外部リンクの設置',
      '作品が美しく見える表示設計',
      '信頼感を高める自己ブランディング設計',
      '作品掲載数：20点まで',
      '納品後サポート：30日間'
    ],
    popular: false,
    buttonText: 'このプランで相談する',
    detail: '約3〜5ページ構成で、作品を美しく見せることに特化したサイトです。作品の魅力を最大限に引き出す表示方法で、仕事の依頼につながる個人サイトを作ります。'
  },
  {
    name: 'Recruit Site Plan',
    description: '会社の魅力を伝えて人材を惹きつける採用サイト',
    originalPrice: '150,000',
    price: '120,000',
    period: '（税込）',
    features: [
      '求人一覧・詳細ページを用意',
      '社員紹介や会社紹介ページ',
      '応募フォーム設置',
      '外部求人サービスとの連携可能',
      '応募意欲を高める採用ブランディング',
      '掲載可能数：求人5職種・社員3名まで',
      '納品後サポート：60日間'
    ],
    popular: false,
    buttonText: 'このプランで相談する',
    detail: '約5〜7ページ構成で、求職者の応募を促進する採用専用サイトです。応募までの流れをわかりやすく設計し、会社の雰囲気をリアルに伝えます。'
  },
  {
    name: 'Media Site Plan',
    description: '記事更新でアクセスを増やす情報発信サイト',
    originalPrice: '180,000',
    price: '144,000',
    period: '（税込）',
    features: [
      '記事投稿機能',
      '関連記事や人気記事の表示',
      'カテゴリ・タグで情報を整理',
      '読者の回遊を促す記事表示設計',
      '継続的な集客を実現する仕組み',
      '記事テンプレート提供',
      '納品後サポート：90日間'
    ],
    popular: false,
    buttonText: 'このプランで相談する',
    detail: 'トップページ＋記事投稿機能を備えた情報発信サイトです。記事を通じて検索流入を増やし、長期的な集客の基盤を作ります。更新マニュアルと記事テンプレート付きで運用も安心です。'
  },
  {
    name: 'Corporate Site Plan',
    description: '企業の信頼とブランドを確立する公式サイト',
    originalPrice: '200,000',
    price: '160,000',
    period: '（税込）',
    features: [
      '企業の強みを伝える情報設計',
      'ご要望に合わせたデザイン調整',
      'ニュースやお知らせを更新可能',
      '信頼性を高める情報構成',
      'ブランド価値を訴求するデザイン',
      '基本5ページ＋追加3ページまで',
      '納品後サポート：90日間＋運用サポート'
    ],
    popular: true,
    buttonText: 'このプランで相談する',
    detail: '基本5〜8ページの本格的なコーポレートサイトです。企業の信頼性を確立し、お問い合わせや取引先との関係構築を支援します。更新マニュアルと運用サポート付きで長期的な活用が可能です。'
  }
]

const addOns = [
  {
    title: '作品・コンテンツ追加',
    price: '10,000円/10点',
    description: '作品の追加掲載や、求人情報・社員紹介の追加掲載に対応します。'
  },
  {
    title: 'ドメイン・サーバー取得代行',
    price: '10,000円〜',
    description: 'ドメインの取得やサーバーの契約・設定を代行します。初期設定もすべてお任せください。'
  },
  {
    title: 'サポート期間延長',
    price: '20,000円/月',
    description: '納品後のサポート期間を延長し、継続的な運用支援や修正に対応します。'
  },
  {
    title: '追加ページ制作',
    price: '30,000円/ページ',
    description: '基本プランに含まれない追加ページの制作。内容に合わせて最適なページをご提案します。'
  },
  {
    title: 'Google Analytics設定',
    price: '30,000円',
    description: 'Google AnalyticsとGoogle Search Consoleの設定・導入を代行。アクセス解析の基盤を構築します。'
  },
  {
    title: 'アニメーション実装',
    price: '50,000円〜',
    description: 'スクロールに合わせて動く演出や、目を引く動きをサイトに追加します。'
  },
  {
    title: '多言語対応',
    price: '80,000円〜',
    description: '英語・中国語など複数の言語に対応したサイトを作成します。'
  }
]

const commonFeatures = [
  {
    title: 'レスポンシブデザイン',
    description: 'スマホ・タブレット・PCなど、どのデバイスでも快適に閲覧できる最適化設計。'
  },
  {
    title: '高速表示',
    description: 'ページの表示速度を最適化し、快適な閲覧体験を実現。'
  },
  {
    title: '拡張性のある設計',
    description: '将来的な機能追加やページ増設にも柔軟に対応できる構成。'
  },
  {
    title: 'SEO対策',
    description: '検索エンジンに強い構造で、自然な流入と継続的な集客をサポート。'
  },
  {
    title: 'お問い合わせフォーム',
    description: '目的に合わせたフォームを設置し、見込み客との接点を確保。'
  },
  {
    title: 'オリジナルデザイン',
    description: 'ご要望やブランドイメージに合わせた独自デザインで構築。'
  },
  {
    title: '丁寧なサポート',
    description: '制作から公開後までを通して支える安心のサポート体制。'
  }
]

const faq = [
  {
    question: '相談は無料ですか？',
    answer: 'はい、ご相談は無料です。お気軽にお問い合わせください。ご要望をお聞きした上で、最適なプランをご提案いたします。'
  },
  {
    question: '初めてWebサイトを作るのですが大丈夫ですか？',
    answer: 'はい、問題ございません。専門知識がなくても安心してご依頼いただけるよう、丁寧にサポートいたします。制作の流れやご要望の整理もお手伝いします。'
  },
  {
    question: '納期はどのくらいですか？',
    answer: 'プランや内容によって異なりますが、ご相談時に詳細なスケジュールをご提示いたします。お急ぎの場合もご相談ください。'
  },
  {
    question: 'デザインの要望は細かく聞いてもらえますか？',
    answer: 'はい、ご要望を丁寧にお伺いします。色やレイアウト、雰囲気など、具体的なイメージをお聞かせください。参考サイトがあればぜひ共有してください。'
  },
  {
    question: '支払い方法は何がありますか？',
    answer: '銀行振込またはクレジットカード決済が可能です。着手金50%、納品時50%の分割払いとなります。'
  },
  {
    question: 'ドメインやサーバーの準備は必要ですか？',
    answer: 'お持ちでない場合は、オプション（10,000円〜）で取得代行も可能です。既にお持ちの場合は、そちらを活用して制作を進めます。'
  },
  {
    question: '修正対応はどのように行われますか？',
    answer: '制作中は何度でも修正対応いたします。納品後もプランに応じたサポート期間内は無償で軽微な修正に対応します。'
  },
  {
    question: '更新作業は自分でできますか？',
    answer: 'Media Site PlanとCorporate Site Planには更新マニュアルが付属します。簡単な操作で更新できる仕組みを構築しています。'
  }
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger} className="text-center">
            <AnimatedElement variants={fadeUp}>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Pricing
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                目的に合わせて選べる料金プラン<br />
                初回限定価格でご提供します。
              </p>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            {/* First 3 plans */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {pricingPlans.slice(0, 3).map((plan, index) => (
                <AnimatedElement key={index} variants={fadeUp}>
                  <Card className={`relative h-full ${
                    plan.popular ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200'
                  }`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-white text-sm px-6 py-2 rounded-full font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                      <CardDescription className="mb-4 text-sm">
                        {plan.description}
                      </CardDescription>
                      <div className="mb-2">
                        <div className="text-sm text-slate-400 line-through mb-1">
                          通常：¥{plan.originalPrice}
                        </div>
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-sm text-primary font-medium">初回：</span>
                          <span className="text-3xl font-bold text-primary">
                            ¥{plan.price}
                          </span>
                          <span className="text-slate-500 text-sm">
                            {plan.period}
                          </span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {plan.detail}
                      </p>
                      <div className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button
                        variant={plan.popular ? "primary" : "outline"}
                        size="lg"
                        className="w-full"
                      >
                        <Link href="/contact" className="flex items-center gap-2 justify-center w-full">
                          {plan.buttonText}
                          <ArrowRight size={18} />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimatedElement>
              ))}
            </div>

            {/* Last 2 plans */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {pricingPlans.slice(3, 5).map((plan, index) => (
                <AnimatedElement key={index + 3} variants={fadeUp}>
                  <Card className={`relative h-full ${
                    plan.popular ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200'
                  }`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-white text-sm px-6 py-2 rounded-full font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                      <CardDescription className="mb-4 text-sm">
                        {plan.description}
                      </CardDescription>
                      <div className="mb-2">
                        <div className="text-sm text-slate-400 line-through mb-1">
                          通常：¥{plan.originalPrice}
                        </div>
                        <div className="flex items-baseline justify-center gap-2">
                          <span className="text-sm text-primary font-medium">初回：</span>
                          <span className="text-3xl font-bold text-primary">
                            ¥{plan.price}
                          </span>
                          <span className="text-slate-500 text-sm">
                            {plan.period}
                          </span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {plan.detail}
                      </p>
                      <div className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button
                        variant={plan.popular ? "primary" : "outline"}
                        size="lg"
                        className="w-full"
                      >
                        <Link href="/contact" className="flex items-center gap-2 justify-center w-full">
                          {plan.buttonText}
                          <ArrowRight size={18} />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Common Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <AnimatedElement variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                全プラン共通の基本仕様
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                すべてのプランに共通して含まれる、<br />
                高品質なWebサイト制作のための基本要素
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {commonFeatures.map((feature, index) => (
                <AnimatedElement key={index} variants={fadeUp}>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <AnimatedElement variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                オプションサービス
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                基本プランに追加して、<br />
                さらに充実したWebサイトを構築できます
              </p>
            </AnimatedElement>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <AnimatedElement key={index} variants={fadeUp}>
                  <Card className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 h-full">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {addon.title}
                        </h3>
                        <span className="text-primary font-bold whitespace-nowrap ml-2">
                          {addon.price}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {addon.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement variants={containerStagger}>
            <AnimatedElement variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                よくある質問
              </h2>
              <p className="text-slate-600">
                料金プランに関するよくある質問をまとめました
              </p>
            </AnimatedElement>

            <div className="space-y-6">
              {faq.map((item, index) => (
                <AnimatedElement key={index} variants={fadeUp}>
                  <Card className="bg-white border border-gray-200 rounded-xl shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">
                        {item.question}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {item.answer}
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
                あなたのビジネスを次のステージへ導くWebサイト制作を実現します
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