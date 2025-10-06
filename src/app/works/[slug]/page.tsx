import { Metadata } from 'next'
import { WorkDetailPage } from '@/components/pages/WorkDetailPage'
import { notFound } from 'next/navigation'
import { getWork } from '@/lib/sanity'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const work = await getWork(slug)

  if (!work) {
    return {
      title: 'ページが見つかりません | ZEROVENTURE',
    }
  }

  return {
    title: `${work.title} | Works | ZEROVENTURE`,
    description: work.summary,
  }
}

export default async function WorkDetailPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const work = await getWork(slug)

  if (!work) {
    notFound()
  }

  return <WorkDetailPage work={work} />
}