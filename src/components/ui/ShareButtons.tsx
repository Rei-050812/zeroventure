'use client'

import { Share2 } from 'lucide-react'

interface ShareButtonsProps {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareLinks = [
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'hover:bg-[#1DA1F2] hover:text-white',
      icon: 'X'
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'hover:bg-[#1877F2] hover:text-white',
      icon: 'f'
    },
    {
      name: 'はてブ',
      url: `https://b.hatena.ne.jp/entry/${url}`,
      color: 'hover:bg-[#00A4DE] hover:text-white',
      icon: 'B!'
    },
    {
      name: 'LINE',
      url: `https://line.me/R/msg/text/?${encodedTitle}%0A${encodedUrl}`,
      color: 'hover:bg-[#00B900] hover:text-white',
      icon: 'LINE'
    }
  ]

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 text-sm text-slate-600">
        <Share2 size={16} />
        <span className="font-medium">シェアする</span>
      </div>
      <div className="flex gap-2">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 text-slate-600 transition-all duration-200 ${link.color}`}
            aria-label={`${link.name}でシェア`}
          >
            <span className="text-sm font-bold">{link.icon}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
