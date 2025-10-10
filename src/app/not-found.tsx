import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-9xl font-bold text-slate-200 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-2xl font-semibold text-slate-900">
              Page Not Found
            </p>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">
            お探しのページが見つかりませんでした
          </h2>
          <p className="text-slate-600">
            お探しのページは削除されたか、URLが変更された可能性があります。
            <br />
            URLをご確認いただくか、トップページからお探しください。
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="javascript:history.back()" className="flex items-center gap-2">
              <ArrowLeft size={20} />
              前のページに戻る
            </Link>
          </Button>
          <Button asChild size="lg">
            <Link href="/" className="flex items-center gap-2">
              <Home size={20} />
              トップページへ
            </Link>
          </Button>
        </div>

      </div>
    </div>
  )
}
