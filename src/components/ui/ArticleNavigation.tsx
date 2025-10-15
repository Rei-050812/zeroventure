'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { urlFor } from '@/lib/sanity'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  coverImage?: any
}

interface ArticleNavigationProps {
  prev: Post | null
  next: Post | null
}

export function ArticleNavigation({ prev, next }: ArticleNavigationProps) {
  if (!prev && !next) {
    return null
  }

  return (
    <nav className="mt-16 pt-16 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Previous Article */}
        {prev ? (
          <Link
            href={`/blog/${prev.slug.current}`}
            className="group flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all duration-200"
          >
            <div className="flex-shrink-0">
              <ChevronLeft className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-slate-500 mb-1">前の記事</div>
              <div className="font-medium text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                {prev.title}
              </div>
            </div>
            {prev.coverImage && (
              <div className="flex-shrink-0 w-16 h-16 relative rounded overflow-hidden">
                <Image
                  src={prev.coverImage.asset ? urlFor(prev.coverImage).width(100).height(100).url() : prev.coverImage}
                  alt={prev.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </Link>
        ) : (
          <div className="hidden md:block" />
        )}

        {/* Next Article */}
        {next && (
          <Link
            href={`/blog/${next.slug.current}`}
            className="group flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all duration-200"
          >
            {next.coverImage && (
              <div className="flex-shrink-0 w-16 h-16 relative rounded overflow-hidden">
                <Image
                  src={next.coverImage.asset ? urlFor(next.coverImage).width(100).height(100).url() : next.coverImage}
                  alt={next.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="text-sm text-slate-500 mb-1">次の記事</div>
              <div className="font-medium text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                {next.title}
              </div>
            </div>
            <div className="flex-shrink-0">
              <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
            </div>
          </Link>
        )}
      </div>
    </nav>
  )
}
