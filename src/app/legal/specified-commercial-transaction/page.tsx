import { Metadata } from 'next'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { fadeUp, containerStagger } from '@/lib/animations'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記',
  description: 'ZEROVENTUREの特定商取引法に基づく表記。事業者情報、販売価格、支払方法、返品・キャンセルポリシーなどを記載しています。',
  alternates: {
    canonical: 'https://zero-venture.com/legal/specified-commercial-transaction',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TokushohoPage() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement variants={containerStagger}>
          <AnimatedElement variants={fadeUp}>
            <h1 className="text-4xl font-bold text-slate-900 mb-8">
              特定商取引法に基づく表記
            </h1>
          </AnimatedElement>

          <div className="prose prose-slate max-w-none">
            <AnimatedElement variants={fadeUp}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">事業者情報</h2>
                <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                  <div>
                    <span className="font-semibold">事業者名</span><br />
                    ZEROVENTURE(ゼロベンチャー)
                  </div>
                  <div>
                    <span className="font-semibold">運営責任者</span><br />
                    沼能 零仁(ヌマノウ レイジ)
                  </div>
                  <div>
                    <span className="font-semibold">所在地</span><br />
                    千葉県千葉市緑区
                  </div>
                  <div>
                    <span className="font-semibold">お問い合わせ先</span><br />
                    メールアドレス: <a href="mailto:r-numanou@zero-venture.com" className="text-blue-600 hover:underline">r-numanou@zero-venture.com</a><br />
                    ※お電話でのお問い合わせは受け付けておりません。
                  </div>
                  <div>
                    <span className="font-semibold">Webサイト</span><br />
                    <a href="https://zero-venture.com" className="text-blue-600 hover:underline">https://zero-venture.com</a>
                  </div>
                  <div>
                    <span className="font-semibold">事業形態</span><br />
                    個人事業主
                  </div>
                </div>
              </section>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">販売価格</h2>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">各プランの料金(税込)</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">プラン名</th>
                        <th className="border border-gray-300 px-4 py-2 text-right">価格</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">LP Plan</td>
                        <td className="border border-gray-300 px-4 py-2 text-right">64,000円</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Portfolio Site Plan</td>
                        <td className="border border-gray-300 px-4 py-2 text-right">80,000円</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Recruit Site Plan</td>
                        <td className="border border-gray-300 px-4 py-2 text-right">120,000円</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Media Site Plan</td>
                        <td className="border border-gray-300 px-4 py-2 text-right">144,000円</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Corporate Site Plan</td>
                        <td className="border border-gray-300 px-4 py-2 text-right">160,000円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-600 mt-3">
                  ※上記価格には消費税が含まれております。<br />
                  ※オプションサービスについては別途お見積もりいたします。
                </p>
              </section>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">支払方法・支払時期</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">お支払い方法</h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      <li>銀行振込</li>
                      <li>クレジットカード決済</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">お支払い時期</h3>
                    <p className="text-slate-700">分割払い: 着手金50%(契約締結後7日以内)、残金50%(納品時)</p>
                  </div>
                  <p className="text-sm text-slate-600">※銀行振込の場合、振込手数料はお客様のご負担となります。</p>
                </div>
              </section>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">サービス提供時期</h2>
                <p className="text-slate-700 mb-3">各プランにより異なります。詳細はお問い合わせ時にご案内いたします。</p>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">標準的な制作期間の目安:</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>LP Plan: 2〜3週間</li>
                  <li>Portfolio Site Plan: 3〜4週間</li>
                  <li>Recruit Site Plan: 4〜6週間</li>
                  <li>Media Site Plan: 6〜8週間</li>
                  <li>Corporate Site Plan: 8〜10週間</li>
                </ul>
                <p className="text-sm text-slate-600 mt-3">※制作期間はお客様からの素材提供やフィードバックのタイミングにより変動いたします。</p>
              </section>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">サポート期間</h2>
                <p className="text-slate-700 mb-3">各プランには以下のサポート期間が含まれております:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>LP Plan: 納品後14日間</li>
                  <li>Portfolio Site Plan: 納品後30日間</li>
                  <li>Recruit Site Plan: 納品後60日間</li>
                  <li>Media Site Plan: 納品後90日間</li>
                  <li>Corporate Site Plan: 納品後90日間＋運用サポート</li>
                </ul>
                <p className="text-sm text-slate-600 mt-3">サポート期間内は、軽微な修正や不具合対応を無償で承ります。</p>
              </section>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">納品形態</h2>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>Webサイトのデータ納品</li>
                  <li>ドメイン・サーバー設定(オプション)</li>
                  <li>更新マニュアル提供(該当プランのみ)</li>
                </ul>
              </section>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">返品・キャンセルポリシー</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">制作開始前</h3>
                    <p className="text-slate-700">契約締結後、制作着手前のキャンセルについては、お支払いいただいた金額の全額を返金いたします。</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">制作中</h3>
                    <p className="text-slate-700">制作着手後のキャンセルについては、返金はいたしかねます。</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">納品後</h3>
                    <p className="text-slate-700">納品完了後の返品・返金は原則としてお受けできません。ただし、サポート期間内は修正対応を承ります。</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">返金方法</h3>
                    <p className="text-slate-700">銀行振込にて返金いたします。振込手数料はお客様のご負担となります。</p>
                  </div>
                </div>
              </section>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">免責事項</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>当サービスの利用により生じた損害について、当方は一切の責任を負いかねます。</li>
                  <li>天災地変、その他不可抗力により、サービス提供が困難になった場合、納期の延期または契約の解除をさせていただく場合がございます。</li>
                  <li>お客様からご提供いただいた素材に起因する第三者とのトラブルについて、当方は一切の責任を負いかねます。</li>
                </ul>
              </section>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">著作権・知的財産権</h2>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>納品物の著作権は、制作費用の完済をもってお客様に帰属いたします。</li>
                  <li>ただし、当方が独自に開発したプログラムやデザインパーツ等の著作権は当方に帰属いたします。</li>
                  <li>納品物は当方の実績として、ポートフォリオやSNS等で公開させていただく場合がございます。</li>
                </ul>
              </section>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp}>
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">SNS・公式アカウント</h2>
                <p className="text-slate-700">
                  X (Twitter): <a href="https://x.com/zero_venture" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://x.com/zero_venture</a><br />
                  Instagram: <a href="https://www.instagram.com/zeroventure_official/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.instagram.com/zeroventure_official/</a>
                </p>
              </section>
            </AnimatedElement>

            <AnimatedElement variants={fadeUp}>
              <div className="text-right text-sm text-slate-500 mt-12">
                最終更新日: 2025年10月10日
              </div>
            </AnimatedElement>
          </div>
        </AnimatedElement>
      </div>
    </main>
  )
}
