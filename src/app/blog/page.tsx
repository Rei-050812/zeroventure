import { Metadata } from 'next'
import { BlogIndexPage } from '@/components/pages/BlogIndexPage'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'ZEROVENTUREのブログ。Web制作・デザイン・SEO・マーケティングの最新情報と実践的なノウハウをお届けします。',
  openGraph: {
    title: 'Blog | ZEROVENTURE',
    description: 'Web制作・デザイン・SEO・マーケティングの最新情報と実践的なノウハウをお届けします。',
    url: 'https://zero-venture.com/blog',
  },
}

export default function BlogPage() {
  return <BlogIndexPage />
}