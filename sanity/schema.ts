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
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '代替テキスト',
          description: 'アクセシビリティとSEOのために重要です',
        }
      ],
      validation: (rule: any) => rule.required()
    },
    {
      name: 'description',
      type: 'array',
      title: '詳細説明',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: '代替テキスト',
              description: 'アクセシビリティとSEOのために重要です',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'キャプション',
            }
          ]
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
      description: '記事の概要（一覧表示で使用）。空欄の場合は本文から自動抽出されます',
      validation: (rule: any) => rule.max(200)
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'カバー画像',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '代替テキスト',
          description: 'アクセシビリティとSEOのために重要です',
        }
      ],
      validation: (rule: any) => rule.required()
    },
    {
      name: 'body',
      type: 'array',
      title: '本文',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: '代替テキスト',
              description: 'アクセシビリティとSEOのために重要です',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'キャプション',
            }
          ]
        }
      ],
      validation: (rule: any) => rule.required()
    },
    // 分類
    {
      name: 'category',
      type: 'string',
      title: 'カテゴリ',
      options: {
        list: [
          { title: 'Web制作', value: 'Web制作' },
          { title: 'デザイン', value: 'デザイン' },
          { title: 'SEO', value: 'SEO' },
          { title: 'マーケティング', value: 'マーケティング' }
        ]
      },
      validation: (rule: any) => rule.required()
    },
    // SEO
    {
      name: 'metaDescription',
      type: 'text',
      title: 'メタディスクリプション',
      description: 'SEO用の説明文（120-160文字推奨）。空欄の場合は要約が使用されます',
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
        },
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: '代替テキスト',
              description: 'アクセシビリティとSEOのために重要です',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'キャプション',
            }
          ]
        }
      ],
      validation: (rule: any) => rule.required()
    },
    {
      name: 'important',
      type: 'boolean',
      title: '重要なお知らせ',
      description: '重要なお知らせとして目立たせる',
      initialValue: false
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'カバー画像',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '代替テキスト',
          description: 'アクセシビリティとSEOのために重要です',
        }
      ]
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

export const schemaTypes = [work, post, news]