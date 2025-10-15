import { Metadata } from 'next'
import { Suspense } from 'react'
import { BlogIndexPage } from '@/components/pages/BlogIndexPage'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Webサイト制作に関する最新情報や実践的なノウハウをお届けします。デザイン、コーディング、SEO対策、AIの活用方法など、Web制作に役立つ情報を定期的に発信しています。初心者から上級者まで役立つコンテンツを掲載。',
  alternates: {
    canonical: 'https://zero-venture.com/blog',
  },
  openGraph: {
    title: 'Blog | ZEROVENTURE',
    description: 'Webサイト制作に関する最新情報や実践的なノウハウをお届けします。デザイン、SEO、AIの活用方法など。',
    url: 'https://zero-venture.com/blog',
  },
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BlogIndexPage />
    </Suspense>
  )
}