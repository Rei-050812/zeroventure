import { Metadata } from 'next'
import { NewsIndexPage } from '@/components/pages/NewsIndexPage'

export const metadata: Metadata = {
  title: 'News',
  description: 'ZEROVENTUREの最新情報・お知らせ。新サービスの追加、料金プランの変更、キャンペーン情報など、ZEROVENTUREに関する最新ニュースをいち早くお届けします。定期的にチェックしてお得な情報を見逃さないようにしましょう。',
  alternates: {
    canonical: 'https://zero-venture.com/news',
  },
  openGraph: {
    title: 'News | ZEROVENTURE',
    description: 'ZEROVENTUREの最新情報・お知らせをいち早くお届けします。新サービス、キャンペーン情報など。',
    url: 'https://zero-venture.com/news',
  },
}

export default function NewsPage() {
  return <NewsIndexPage />
}