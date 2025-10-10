import { Metadata } from 'next'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { fadeUp, containerStagger } from '@/lib/animations'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'ZEROVENTUREのプライバシーポリシー。個人情報の取り扱い、収集方法、利用目的、Google Analyticsの使用について記載しています。',
  alternates: {
    canonical: 'https://zero-venture.com/legal/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement variants={containerStagger}>
          <AnimatedElement variants={fadeUp}>
            <h1 className="text-4xl font-bold text-slate-900 mb-8">
              プライバシーポリシー
            </h1>
            <p className="text-slate-700 mb-8">
              ZEROVENTURE(ゼロベンチャー)(以下、「当方」といいます。)は、お客様の個人情報の保護を重要視し、個人情報の保護に関する法律(以下、「個人情報保護法」といいます。)を遵守し、以下のプライバシーポリシー(以下、「本ポリシー」といいます。)に基づき、適切に取り扱います。
            </p>
          </AnimatedElement>

          <div className="prose prose-slate max-w-none">
            <AnimatedElement variants={fadeUp}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. 個人情報の定義</h2>
                <p className="text-slate-700">
                  本ポリシーにおける「個人情報」とは、個人情報保護法第2条第1項に定義される、生存する個人に関する情報であって、当該情報に含まれる氏名、メールアドレスその他の記述等により特定の個人を識別できるものを指します。
                </p>
              </section>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. 個人情報の収集方法</h2>
                <p className="text-slate-700 mb-3">当方は、以下の方法により個人情報を収集いたします:</p>

                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">お問い合わせフォーム</h3>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>お名前</li>
                    <li>メールアドレス</li>
                    <li>会社名・団体名(任意)</li>
                    <li>お問い合わせ内容</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">その他</h3>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>契約締結時に必要となる情報</li>
                    <li>サービス提供に必要な情報</li>
                  </ul>
                </div>
              </section>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. 個人情報の利用目的</h2>
                <p className="text-slate-700 mb-3">当方は、収集した個人情報を以下の目的で利用いたします:</p>
                <ol className="list-decimal list-inside space-y-1 text-slate-700">
                  <li>お問い合わせへの対応</li>
                  <li>サービスの提供・契約の履行</li>
                  <li>お見積もりやご提案のご連絡</li>
                  <li>サービスに関する重要なお知らせ</li>
                  <li>アフターサポートのご案内</li>
                  <li>サービス改善のための分析</li>
                </ol>
              </section>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. 個人情報の第三者提供</h2>
                <p className="text-slate-700 mb-3">当方は、以下の場合を除き、お客様の個人情報を第三者に提供することはございません:</p>
                <ol className="list-decimal list-inside space-y-1 text-slate-700">
                  <li>お客様の同意がある場合</li>
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                </ol>
              </section>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. 個人情報の管理</h2>
                <p className="text-slate-700">
                  当方は、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス、紛失、破損、改ざん、漏洩などを防止するため、適切なセキュリティ対策を実施いたします。
                </p>
              </section>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookie(クッキー)およびアクセス解析ツールの使用</h2>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Google Analytics の使用</h3>
                  <p className="text-slate-700 mb-3">
                    当サイトでは、サイトの利用状況を把握するために、Google Analytics を使用しております。Google Analytics は、Cookie を使用してお客様の情報を収集します。
                  </p>
                  <p className="text-slate-700 mb-2">収集される情報には以下が含まれます:</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 mb-3">
                    <li>アクセス日時</li>
                    <li>閲覧ページ</li>
                    <li>利用環境(ブラウザ、OS、デバイス等)</li>
                    <li>IPアドレス(匿名化されています)</li>
                  </ul>
                  <p className="text-slate-700 mb-3">
                    これらの情報は匿名で収集されており、個人を特定するものではありません。
                  </p>
                  <p className="text-slate-700 mb-1">
                    Google Analytics の利用規約については、以下のページをご確認ください:<br />
                    <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://marketingplatform.google.com/about/analytics/terms/jp/</a>
                  </p>
                  <p className="text-slate-700">
                    Google のプライバシーポリシーについては、以下のページをご確認ください:<br />
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://policies.google.com/privacy</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Cookie の無効化</h3>
                  <p className="text-slate-700">
                    ブラウザの設定により、Cookie を無効化することが可能です。ただし、Cookie を無効化した場合、当サイトの一部機能が正常に動作しない場合がございます。
                  </p>
                </div>
              </section>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. お客様の権利</h2>
                <p className="text-slate-700 mb-3">お客様は、ご自身の個人情報について、以下の権利を有します:</p>
                <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-3">
                  <li><strong>開示請求</strong>: 当方が保有する個人情報の開示を請求できます</li>
                  <li><strong>訂正請求</strong>: 個人情報の内容が事実でない場合、訂正を請求できます</li>
                  <li><strong>利用停止請求</strong>: 個人情報が目的外で利用されている場合、利用停止を請求できます</li>
                  <li><strong>削除請求</strong>: 個人情報の削除を請求できます</li>
                </ol>
                <p className="text-slate-700">
                  上記の請求を希望される場合は、以下のお問い合わせ先までご連絡ください。
                </p>
              </section>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. プライバシーポリシーの変更</h2>
                <p className="text-slate-700">
                  当方は、法令の変更や事業内容の変更に伴い、本ポリシーを予告なく変更する場合がございます。変更後のプライバシーポリシーは、当サイトに掲載した時点より効力を生じるものとします。
                </p>
              </section>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. お問い合わせ窓口</h2>
                <p className="text-slate-700 mb-3">個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。</p>
                <div className="bg-gray-50 p-6 rounded-lg space-y-2">
                  <p className="font-semibold text-slate-900">ZEROVENTURE(ゼロベンチャー)</p>
                  <p className="text-slate-700">運営責任者: 沼能 零仁</p>
                  <p className="text-slate-700">
                    メールアドレス: <a href="mailto:r-numanou@zero-venture.com" className="text-blue-600 hover:underline">r-numanou@zero-venture.com</a>
                  </p>
                </div>
              </section>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp}>
              <div className="text-right text-sm text-slate-500 mt-12">
                <p>制定日: 2025年10月10日</p>
                <p>最終更新日: 2025年10月10日</p>
              </div>
            </AnimatedElement>
          </div>
        </AnimatedElement>
      </div>
    </main>
  )
}
