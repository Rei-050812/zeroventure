// Sanity Schema Types for ZEROVENTURE

// Work Schema
export const work = {
  name: 'work',
  type: 'document',
  title: '制作実績',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'タイトル',
      validation: (rule: any) => rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'スラッグ',
      options: {
        source: 'title'
      },
      validation: (rule: any) => rule.required()
    },
    {
      name: 'summary',
      type: 'text',
      title: '概要',
      validation: (rule: any) => rule.required().max(200)
    },
    {
      name: 'techStack',
      type: 'array',
      title: '使用技術',
      of: [{ type: 'string' }],
      validation: (rule: any) => rule.required().min(1)
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'カバー画像',
      options: {
        hotspot: true
      },
      validation: (rule: any) => rule.required()
    },
    {
      name: 'url',
      type: 'url',
      title: 'サイトURL'
    },
    {
      name: 'featured',
      type: 'boolean',
      title: '注目作品',
      initialValue: false
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: '公開日時',
      validation: (rule: any) => rule.required()
    }
  ],
  orderings: [
    {
      title: '公開日時 新しい順',
      name: 'publishedAtDesc',
      by: [
        { field: 'publishedAt', direction: 'desc' }
      ]
    }
  ]
}

// Category Schema
export const category = {
  name: 'category',
  type: 'document',
  title: 'カテゴリ',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'タイトル',
      validation: (rule: any) => rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'スラッグ',
      options: {
        source: 'title'
      },
      validation: (rule: any) => rule.required()
    }
  ]
}

// Tag Schema
export const tag = {
  name: 'tag',
  type: 'document',
  title: 'タグ',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'タイトル',
      validation: (rule: any) => rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'スラッグ',
      options: {
        source: 'title'
      },
      validation: (rule: any) => rule.required()
    }
  ]
}

// Post Schema (Blog)
export const post = {
  name: 'post',
  type: 'document',
  title: 'ブログ記事',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'タイトル',
      validation: (rule: any) => rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'スラッグ',
      options: {
        source: 'title'
      },
      validation: (rule: any) => rule.required()
    },
    {
      name: 'body',
      type: 'array',
      title: '本文',
      of: [
        {
          type: 'block'
        }
      ],
      validation: (rule: any) => rule.required()
    },
    {
      name: 'categories',
      type: 'array',
      title: 'カテゴリ',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }]
        }
      ]
    },
    {
      name: 'tags',
      type: 'array',
      title: 'タグ',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }]
        }
      ]
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'カバー画像',
      options: {
        hotspot: true
      }
    },
    {
      name: 'toc',
      type: 'boolean',
      title: '目次表示',
      initialValue: true
    },
    {
      name: 'reducedMotion',
      type: 'boolean',
      title: 'アニメーション抑制',
      description: 'このページでアニメーションを抑制する',
      initialValue: false
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: '公開日時',
      validation: (rule: any) => rule.required()
    }
  ],
  orderings: [
    {
      title: '公開日時 新しい順',
      name: 'publishedAtDesc',
      by: [
        { field: 'publishedAt', direction: 'desc' }
      ]
    }
  ]
}

// News Schema
export const news = {
  name: 'news',
  type: 'document',
  title: 'お知らせ',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'タイトル',
      validation: (rule: any) => rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'スラッグ',
      options: {
        source: 'title'
      },
      validation: (rule: any) => rule.required()
    },
    {
      name: 'body',
      type: 'array',
      title: '本文',
      of: [
        {
          type: 'block'
        }
      ],
      validation: (rule: any) => rule.required()
    },
    {
      name: 'categories',
      type: 'array',
      title: 'カテゴリ',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }]
        }
      ]
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'カバー画像',
      options: {
        hotspot: true
      }
    },
    {
      name: 'reducedMotion',
      type: 'boolean',
      title: 'アニメーション抑制',
      description: 'このページでアニメーションを抑制する',
      initialValue: false
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: '公開日時',
      validation: (rule: any) => rule.required()
    }
  ],
  orderings: [
    {
      title: '公開日時 新しい順',
      name: 'publishedAtDesc',
      by: [
        { field: 'publishedAt', direction: 'desc' }
      ]
    }
  ]
}

export const schemaTypes = [work, category, tag, post, news]