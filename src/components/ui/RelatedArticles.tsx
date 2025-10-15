'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { urlFor } from '@/lib/sanity'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  category: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  coverImage?: any
  publishedAt: string
}

interface RelatedArticlesProps {
  posts: Post[]
}

export function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <div className="mt-16 pt-16 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">関連記事</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/blog/${post.slug.current}`} className="block h-full">
            <Card className="group h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer" hover={false}>
              {/* Cover Image */}
              <div className="aspect-video bg-gray-200 relative overflow-hidden mb-4">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage.asset ? urlFor(post.coverImage).width(400).height(300).url() : post.coverImage}
                    alt={post.coverImage.alt || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center">
                    <span className="text-slate-700 font-bold text-sm px-4 text-center">
                      {post.title}
                    </span>
                  </div>
                )}
                {post.category && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                  </div>
                )}
              </div>

              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                  <Calendar size={14} />
                  {new Date(post.publishedAt).toLocaleDateString('ja-JP')}
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {post.title}
                </CardTitle>
                {post.excerpt && (
                  <CardDescription className="line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                )}
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
