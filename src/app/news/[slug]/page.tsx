import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NewsDetailPage } from '@/components/pages/NewsDetailPage'
import { getNewsBySlug, getNews } from '@/lib/sanity'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const news = await getNewsBySlug(slug)

  if (!news) {
    return {
      title: 'お知らせが見つかりません | ZEROVENTURE',
    }
  }

  return {
    title: `${news.title} | ZEROVENTURE`,
    description: news.title,
  }
}

export async function generateStaticParams() {
  const newsItems = await getNews()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return newsItems.map((news: any) => ({
    slug: news.slug.current,
  }))
}

export default async function NewsPage({ params }: Props) {
  const { slug } = await params
  const news = await getNewsBySlug(slug)

  if (!news) {
    notFound()
  }

  return <NewsDetailPage news={news} />
}
