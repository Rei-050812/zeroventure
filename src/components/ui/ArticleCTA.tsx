'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function ArticleCTA() {
  return (
    <div className="mt-16 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-lg p-8 border border-gray-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
        Webサイト制作のご相談はこちら
      </h3>
      <p className="text-slate-600 mb-6 text-center">
        ZEROVENTUREでは、あなたのビジネスに最適なWebサイトを制作します。
        <br />
        まずは無料相談から、お気軽にお問い合わせください。
      </p>
      <div className="flex justify-center">
        <Button size="lg">
          <Link href="/contact" className="flex items-center gap-2">
            無料相談を申し込む
            <ArrowRight size={20} />
          </Link>
        </Button>
      </div>
    </div>
  )
}
