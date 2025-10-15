import { MetadataRoute } from 'next'
import { getWorks, getPosts, getNews } from '@/lib/sanity'

const baseUrl = 'https://zero-venture.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  try {
    // Sanityから実際のデータを取得
    const [works, blogPosts, newsItems] = await Promise.all([
      getWorks(),
      getPosts(),
      getNews(),
    ])

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const workPages = works.map((work: any) => ({
    url: `${baseUrl}/works/${work.slug.current}`,
    lastModified: work.publishedAt ? new Date(work.publishedAt) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blogPages = blogPosts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const newsPages = newsItems.map((item: any) => ({
    url: `${baseUrl}/news/${item.slug.current}`,
    lastModified: item.publishedAt ? new Date(item.publishedAt) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

    return [...staticPages, ...workPages, ...blogPages, ...newsPages]
  } catch (error) {
    // エラー時は静的ページのみ返す
    console.error('Sitemap generation error:', error)
    return staticPages
  }
}