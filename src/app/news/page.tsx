import { Metadata } from 'next'
import { NewsIndexPage } from '@/components/pages/NewsIndexPage'

export const metadata: Metadata = {
  title: 'News | ZEROVENTURE',
  description: 'ZEROVENTUREの最新ニュースとお知らせをご確認ください。',
}

export default function NewsPage() {
  return <NewsIndexPage />
}