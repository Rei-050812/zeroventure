export interface Work {
  _id: string
  title: string
  summary: string
  techStack: string[]
  coverImage: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  url?: string
  featured: boolean
  publishedAt: string
  slug: {
    current: string
  }
}

export interface Post {
  _id: string
  title: string
  body: any[]
  categories: Category[]
  tags: Tag[]
  coverImage: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  toc: boolean
  reducedMotion: boolean
  publishedAt: string
  slug: {
    current: string
  }
}

export interface News {
  _id: string
  title: string
  body: any[]
  categories: Category[]
  coverImage: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
  }
  reducedMotion: boolean
  publishedAt: string
  slug: {
    current: string
  }
}

export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
}

export interface Tag {
  _id: string
  title: string
  slug: {
    current: string
  }
}