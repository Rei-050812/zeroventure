import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'xgwvet7h',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
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
      featured,
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
      role,
      challenges,
      solutions,
      results,
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
      body,
      categories[]->{title, slug},
      tags[]->{title, slug},
      coverImage,
      publishedAt
    }
  `)
}

export async function getLatestPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) [0...3] {
      _id,
      title,
      slug,
      body,
      categories[]->{title, slug},
      coverImage,
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
      categories[]->{title, slug},
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
      categories[]->{title, slug},
      publishedAt
    }
  `)
}