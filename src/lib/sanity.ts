import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'xgwvet7h',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01', // より新しいAPIバージョンに変更
  perspective: 'published',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// API queries
export async function getWorks() {
  return client.fetch(`
    *[_type == "work"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      summary,
      techStack,
      coverImage,
      url,
      category,
      featured,
      metaDescription,
      publishedAt
    }
  `)
}

export async function getWork(slug: string) {
  return client.fetch(`
    *[_type == "work" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      summary,
      description,
      techStack,
      coverImage,
      images,
      url,
      category,
      client,
      duration,
      metaDescription,
      publishedAt
    }
  `, { slug })
}

export async function getFeaturedWorks() {
  return client.fetch(`
    *[_type == "work" && featured == true] | order(publishedAt desc) [0...3] {
      _id,
      title,
      slug,
      summary,
      techStack,
      coverImage,
      url,
      category,
      metaDescription,
      publishedAt
    }
  `)
}

export async function getPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      body,
      category,
      coverImage,
      featured,
      toc,
      metaDescription,
      publishedAt
    }
  `)
}

export async function getPostBySlug(slug: string) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      category,
      coverImage,
      metaDescription,
      publishedAt
    }
  `, { slug })
}

export async function getLatestPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) [0...3] {
      _id,
      title,
      slug,
      excerpt,
      category,
      coverImage,
      featured,
      publishedAt
    }
  `)
}

export async function getNews() {
  return client.fetch(`
    *[_type == "news"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      body,
      category,
      coverImage,
      publishedAt
    }
  `)
}

export async function getLatestNews() {
  return client.fetch(`
    *[_type == "news"] | order(publishedAt desc) [0...5] {
      _id,
      title,
      slug,
      body,
      category,
      publishedAt
    }
  `)
}