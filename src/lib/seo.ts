import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonicalUrl?: string
  image?: {
    url: string
    alt: string
    width?: number
    height?: number
  }
  noindex?: boolean
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

const defaultSEO = {
  title: 'ZEROVENTURE',
  description: 'シンプルかつ迷わない設計で、使いやすく成果につながるWebサイトを制作。LP、ポートフォリオ、リクルート、メディア、コーポレートの5つのサイトスタイルから、あなたのビジネスに最適なサイトをご提案します。',
  keywords: ['Webサイト制作', 'LP制作', 'ポートフォリオサイト', 'リクルートサイト', 'メディアサイト', 'コーポレートサイト', 'ホームページ制作', 'Next.js'],
  siteUrl: 'https://zero-venture.com',
  siteName: 'ZEROVENTURE',
  locale: 'ja_JP',
  twitterHandle: '@zeroventure',
  image: {
    url: '/opengraph-image.jpg',
    alt: 'ZEROVENTURE',
    width: 1200,
    height: 630
  }
}

export function generateMetadata(props: SEOProps = {}): Metadata {
  const {
    title,
    description = defaultSEO.description,
    keywords = defaultSEO.keywords,
    canonicalUrl,
    image = defaultSEO.image,
    noindex = false,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    section,
    tags
  } = props

  const fullTitle = title
    ? `${title} | ${defaultSEO.siteName}`
    : defaultSEO.title

  const fullUrl = canonicalUrl
    ? `${defaultSEO.siteUrl}${canonicalUrl}`
    : defaultSEO.siteUrl

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: author ? [{ name: author }] : undefined,
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: defaultSEO.siteName,
      locale: defaultSEO.locale,
      type: type as any,
      images: [
        {
          url: image.url.startsWith('http') ? image.url : `${defaultSEO.siteUrl}${image.url}`,
          width: image.width || 1200,
          height: image.height || 630,
          alt: image.alt
        }
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
        section,
        tags
      })
    },
    twitter: {
      card: 'summary_large_image',
      site: defaultSEO.twitterHandle,
      creator: defaultSEO.twitterHandle,
      title: fullTitle,
      description,
      images: [image.url.startsWith('http') ? image.url : `${defaultSEO.siteUrl}${image.url}`]
    }
  }

  return metadata
}

export function generateStructuredData(type: 'Organization' | 'WebSite' | 'BlogPosting' | 'NewsArticle' | 'CreativeWork', data?: any) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type
  }

  switch (type) {
    case 'Organization':
      return {
        ...baseData,
        name: defaultSEO.siteName,
        url: defaultSEO.siteUrl,
        logo: `${defaultSEO.siteUrl}/logo.png`,
        description: defaultSEO.description,
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'JP',
          addressRegion: '千葉県',
          addressLocality: '千葉市緑区'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'r-numanou@zero-venture.com',
          availableLanguage: ['Japanese']
        },
        sameAs: [
          'https://x.com/zero_venture',
          'https://www.instagram.com/zeroventure_official/'
        ]
      }

    case 'WebSite':
      return {
        ...baseData,
        name: defaultSEO.siteName,
        url: defaultSEO.siteUrl,
        description: defaultSEO.description,
        publisher: {
          '@type': 'Organization',
          name: defaultSEO.siteName
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${defaultSEO.siteUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      }

    case 'BlogPosting':
    case 'NewsArticle':
      return {
        ...baseData,
        headline: data?.title,
        description: data?.description,
        image: data?.image ? `${defaultSEO.siteUrl}${data.image}` : `${defaultSEO.siteUrl}${defaultSEO.image.url}`,
        author: {
          '@type': 'Organization',
          name: defaultSEO.siteName
        },
        publisher: {
          '@type': 'Organization',
          name: defaultSEO.siteName,
          logo: {
            '@type': 'ImageObject',
            url: `${defaultSEO.siteUrl}/logo.png`
          }
        },
        datePublished: data?.publishedAt,
        dateModified: data?.modifiedAt || data?.publishedAt,
        url: `${defaultSEO.siteUrl}${data?.url}`,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${defaultSEO.siteUrl}${data?.url}`
        }
      }

    case 'CreativeWork':
      return {
        ...baseData,
        name: data?.title,
        description: data?.description,
        image: data?.image ? `${defaultSEO.siteUrl}${data.image}` : `${defaultSEO.siteUrl}${defaultSEO.image.url}`,
        creator: {
          '@type': 'Organization',
          name: defaultSEO.siteName
        },
        dateCreated: data?.publishedAt,
        url: `${defaultSEO.siteUrl}${data?.url}`,
        genre: data?.category,
        keywords: data?.techStack?.join(', '),
        workExample: data?.url
      }

    default:
      return baseData
  }
}