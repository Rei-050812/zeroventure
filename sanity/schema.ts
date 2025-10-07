// Sanity Schema Types for ZEROVENTURE

// Work Schema
export const work = {
  name: 'work',
  type: 'document',
  title: '制作実績',
  fields: [
    // 基本情報
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
    // 分類
    {
      name: 'category',
      type: 'string',
      title: 'カテゴリ',
      options: {
        list: [
          { title: 'LP制作', value: 'LP制作' },
          { title: 'ポートフォリオサイト', value: 'ポートフォリオサイト' },
          { title: 'リクルートサイト', value: 'リクルートサイト' },
          { title: 'メディアサイト', value: 'メディアサイト' },
          { title: 'コーポレートサイト', value: 'コーポレートサイト' }
        ]
      },
      validation: (rule: any) => rule.required()
    },
    // プロジェクト情報
    {
      name: 'client',
      type: 'string',
      title: 'クライアント名'
    },
    {
      name: 'duration',
      type: 'string',
      title: '制作期間'
    },
    {
      name: 'url',
      type: 'url',
      title: 'サイトURL'
    },
    // コンテンツ
    {
      name: 'summary',
      type: 'text',
      title: '概要',
      description: '制作実績の概要（一覧表示で使用）。空欄の場合は詳細説明から自動抽出されます',
      validation: (rule: any) => rule.max(200)
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
      name: 'description',
      type: 'array',
      title: '詳細説明',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'images',
      type: 'array',
      title: '追加画像',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'techStack',
      type: 'array',
      title: '使用技術',
      of: [{ type: 'string' }],
      validation: (rule: any) => rule.required().min(1)
    },
    // SEO
    {
      name: 'metaDescription',
      type: 'text',
      title: 'メタディスクリプション',
      description: 'SEO用の説明文（120-160文字推奨）。空欄の場合は概要が使用されます',
      validation: (rule: any) => rule.max(160)
    },
    // 機能
    {
      name: 'featured',
      type: 'boolean',
      title: '注目作品',
      description: 'トップページに表示する',
      initialValue: false
    },
    // メタ情報
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
    // 基本情報
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
    // コンテンツ
    {
      name: 'excerpt',
      type: 'text',
      title: '要約',
      description: '記事の概要（一覧表示で使用）',
      validation: (rule: any) => rule.required().max(200)
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
    // 分類
    {
      name: 'category',
      type: 'reference',
      title: 'カテゴリ',
      to: [{ type: 'category' }],
      validation: (rule: any) => rule.required()
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
    // SEO
    {
      name: 'metaDescription',
      type: 'text',
      title: 'メタディスクリプション',
      description: 'SEO用の説明文（120-160文字推奨）',
      validation: (rule: any) => rule.max(160)
    },
    // 機能
    {
      name: 'featured',
      type: 'boolean',
      title: '注目記事',
      description: 'トップページに表示する',
      initialValue: false
    },
    {
      name: 'toc',
      type: 'boolean',
      title: '目次表示',
      initialValue: true
    },
    // メタ情報
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