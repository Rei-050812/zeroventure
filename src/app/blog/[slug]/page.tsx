import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug, getPosts } from '@/lib/sanity'
import { PostDetailPage } from '@/components/pages/PostDetailPage'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Not Found',
    }
  }

  return {
    title: `${post.title} | ZEROVENTURE`,
    description: post.metaDescription || post.excerpt || '最新のWeb制作情報をお届けします',
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return <PostDetailPage post={post} />
}
