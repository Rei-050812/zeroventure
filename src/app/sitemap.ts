import { MetadataRoute } from 'next'

const baseUrl = 'https://zero-venture.com'

// Mock data (実際の運用時はSanityから取得)
const works = [
  { id: '1', updatedAt: '2024-01-15' },
  { id: '2', updatedAt: '2024-01-10' },
  { id: '3', updatedAt: '2024-01-05' },
]

const blogPosts = [
  { id: '1', updatedAt: '2024-01-15' },
  { id: '2', updatedAt: '2024-01-10' },
]

const newsItems = [
  { id: '1', updatedAt: '2024-12-20' },
]

export default function sitemap(): MetadataRoute.Sitemap {
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

  const workPages = works.map((work) => ({
    url: `${baseUrl}/works/${work.id}`,
    lastModified: new Date(work.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const newsPages = newsItems.map((item) => ({
    url: `${baseUrl}/news/${item.id}`,
    lastModified: new Date(item.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...workPages, ...blogPages, ...newsPages]
}