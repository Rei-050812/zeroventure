import { AccessibilityTestPage } from '@/components/pages/AccessibilityTestPage'

// 開発環境でのみアクセス可能
export default function TestPage() {
  if (process.env.NODE_ENV === 'production') {
    return <div>Not Found</div>
  }

  return <AccessibilityTestPage />
}