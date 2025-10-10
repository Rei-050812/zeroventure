import { Metadata } from 'next'
import { NewsIndexPage } from '@/components/pages/NewsIndexPage'

export const metadata: Metadata = {
  title: 'News',
  description: 'ZEROVENTUREの最新情報・お知らせ。新サービスの追加、料金プランの変更、キャンペーン情報などをいち早くお届けします。',
  openGraph: {
    title: 'News | ZEROVENTURE',
    description: 'ZEROVENTUREの最新情報・お知らせをいち早くお届けします。',
    url: 'https://zero-venture.com/news',
  },
}

export default function NewsPage() {
  return <NewsIndexPage />
}