'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag, List } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { ShareButtons } from '@/components/ui/ShareButtons'
import { RelatedArticles } from '@/components/ui/RelatedArticles'
import { ArticleNavigation } from '@/components/ui/ArticleNavigation'
import { ArticleCTA } from '@/components/ui/ArticleCTA'
import { urlFor, getRelatedPosts, getAdjacentPosts } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

interface Heading {
  _key: string
  style: string
  children: { text: string }[]
}

function extractHeadings(body: any[]): Heading[] {
  return body.filter(
    (block) =>
      block._type === 'block' &&
      ['h1', 'h2', 'h3', 'h4'].includes(block.style)
  )
}

function getHeadingText(heading: Heading): string {
  return heading.children.map((child) => child.text).join('')
}

interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  body: any[]
  category: string
  coverImage: any
  toc?: boolean
  publishedAt: string
}

interface PostDetailPageProps {
  post: Post
}

export function PostDetailPage({ post }: PostDetailPageProps) {
  const headings = extractHeadings(post.body)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])
  const [adjacentPosts, setAdjacentPosts] = useState<{ prev: any | null; next: any | null }>({ prev: null, next: null })

  useEffect(() => {
    async function loadAdditionalContent() {
      try {
        const [related, adjacent] = await Promise.all([
          getRelatedPosts(post._id, post.category, 3),
          getAdjacentPosts(post.publishedAt)
        ])
        setRelatedPosts(related || [])
        setAdjacentPosts(adjacent || { prev: null, next: null })
      } catch (error) {
        console.error('Failed to load additional content:', error)
      }
    }

    loadAdditionalContent()
  }, [post._id, post.category, post.publishedAt])

  const portableTextComponents = {
    types: {
      image: ({ value }: any) => {
        return (
          <div className="my-8">
            <Image
              src={urlFor(value).width(800).url()}
              alt={value.alt || ''}
              width={800}
              height={450}
              className="rounded-lg w-full h-auto"
            />
            {value.caption && (
              <p className="text-center text-sm text-slate-600 mt-2">
                {value.caption}
              </p>
            )}
          </div>
        )
      }
    },
    block: {
      h1: ({ children, value }: any) => {
        const id = value._key
        return (
          <h1 id={id} className="text-3xl md:text-4xl font-bold text-slate-900 mt-12 mb-6 scroll-mt-24">
            {children}
          </h1>
        )
      },
      h2: ({ children, value }: any) => {
        const id = value._key
        return (
          <h2 id={id} className="text-2xl md:text-3xl font-bold text-slate-900 mt-10 mb-5 scroll-mt-24">
            {children}
          </h2>
        )
      },
      h3: ({ children, value }: any) => {
        const id = value._key
        return (
          <h3 id={id} className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-4 scroll-mt-24">
            {children}
          </h3>
        )
      },
      h4: ({ children, value }: any) => {
        const id = value._key
        return (
          <h4 id={id} className="text-lg md:text-xl font-bold text-slate-900 mt-6 mb-3 scroll-mt-24">
            {children}
          </h4>
        )
      },
      normal: ({ children }: any) => {
        return <p className="text-slate-700 leading-relaxed mb-4">{children}</p>
      }
    },
    marks: {
      link: ({ children, value }: any) => {
        const target = value.href.startsWith('http') ? '_blank' : undefined
        return (
          <a
            href={value.href}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className="text-primary hover:text-primary/80 underline"
          >
            {children}
          </a>
        )
      }
    }
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Back Button */}
          <div>
            <Link
              href="/blog"
              className="inline-flex items-center text-slate-600 hover:text-primary transition-colors duration-200"
            >
              <ArrowLeft size={20} className="mr-2" />
              ブログ一覧に戻る
            </Link>
          </div>

          {/* Category Badge */}
          <div>
            <span className="inline-block bg-primary text-white text-sm px-4 py-2 rounded-full font-medium">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              {post.title}
            </h1>
          </div>

          {/* Meta Information */}
          <div>
            <div className="flex items-center gap-2 text-slate-600">
              <Calendar size={18} />
              <span>{new Date(post.publishedAt).toLocaleDateString('ja-JP')}</span>
            </div>
          </div>

          {/* Cover Image */}
          <div>
            <div className="aspect-video bg-gray-200 relative overflow-hidden rounded-lg">
              {post.coverImage && (
                <Image
                  src={post.coverImage.asset ? urlFor(post.coverImage).width(1200).height(675).url() : post.coverImage}
                  alt={post.coverImage.alt || post.title}
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </div>

          {/* Table of Contents */}
          {post.toc && headings.length > 0 && (
            <div>
              <Card className="bg-slate-50" hover={false}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <List size={20} className="text-primary" />
                    <h2 className="text-xl font-bold text-slate-900">目次</h2>
                  </div>
                  <nav>
                    <ul className="space-y-2">
                      {headings.map((heading) => {
                        const text = getHeadingText(heading)
                        const level = heading.style === 'h1' ? 0 : heading.style === 'h2' ? 1 : heading.style === 'h3' ? 2 : 3
                        return (
                          <li
                            key={heading._key}
                            style={{ paddingLeft: `${level * 1}rem` }}
                          >
                            <a
                              href={`#${heading._key}`}
                              className="text-slate-700 hover:text-primary transition-colors duration-200 inline-block py-1"
                            >
                              {text}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </nav>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Body Content */}
          <div>
            <Card hover={false}>
              <CardContent className="pt-6">
                <div className="max-w-none">
                  <PortableText value={post.body} components={portableTextComponents} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Share Buttons */}
          <div className="flex justify-center py-8">
            <ShareButtons
              url={typeof window !== 'undefined' ? window.location.href : ''}
              title={post.title}
            />
          </div>

          {/* CTA Section */}
          <div>
            <ArticleCTA />
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div>
              <RelatedArticles posts={relatedPosts} />
            </div>
          )}

          {/* Article Navigation */}
          {(adjacentPosts.prev || adjacentPosts.next) && (
            <div>
              <ArticleNavigation prev={adjacentPosts.prev} next={adjacentPosts.next} />
            </div>
          )}

          {/* Back to Blog */}
          <div>
            <div className="text-center pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
              >
                <ArrowLeft size={20} className="mr-2" />
                ブログ一覧に戻る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
