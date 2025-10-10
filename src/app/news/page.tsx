import { Metadata } from 'next'
import { NewsIndexPage } from '@/components/pages/NewsIndexPage'

export const metadata: Metadata = {
  title: 'News',
  description: 'ZEROVENTUREの最新情報・お知らせをご確認ください。新サービスやキャンペーン情報などをお届けします。',
  openGraph: {
    title: 'News | ZEROVENTURE',
    description: 'ZEROVENTUREの最新情報・お知らせをご確認ください。',
    url: 'https://zero-venture.com/news',
  },
}

export default function NewsPage() {
  return <NewsIndexPage />
}