import { Metadata } from 'next'
import { BlogIndexPage } from '@/components/pages/BlogIndexPage'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Webサイト制作に関する最新情報や実践的なノウハウをお届けします。デザイン、SEO、使いやすさの工夫など、役立つ情報を発信しています。',
  openGraph: {
    title: 'Blog | ZEROVENTURE',
    description: 'Webサイト制作に関する最新情報や実践的なノウハウをお届けします。',
    url: 'https://zero-venture.com/blog',
  },
}

export default function BlogPage() {
  return <BlogIndexPage />
}