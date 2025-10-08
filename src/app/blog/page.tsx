import { Metadata } from 'next'
import { BlogIndexPage } from '@/components/pages/BlogIndexPage'

export const metadata: Metadata = {
  title: 'Blog | ZEROVENTURE',
  description: 'ZEROVENTUREのブログ。Web制作・デザイン・SEO・マーケティングの最新情報と実践的なノウハウをお届けします。',
}

export default function BlogPage() {
  return <BlogIndexPage />
}