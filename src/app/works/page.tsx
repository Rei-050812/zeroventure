import { Metadata } from 'next'
import { WorksIndexPage } from '@/components/pages/WorksIndexPage'

export const metadata: Metadata = {
  title: 'Works',
  description: 'ZEROVENTUREがこれまでに手がけたWebサイト制作実績をご紹介。シンプルで使いやすく、成果につながるサイトの事例を掲載しています。LP、ポートフォリオ、コーポレートサイトなど、様々なジャンルの制作実績をご覧いただけます。',
  alternates: {
    canonical: 'https://zero-venture.com/works',
  },
  openGraph: {
    title: 'Works | ZEROVENTURE',
    description: 'ZEROVENTUREがこれまでに手がけたWebサイト制作実績をご紹介。様々なジャンルの制作事例を掲載。',
    url: 'https://zero-venture.com/works',
  },
}

export default function WorksPage() {
  return <WorksIndexPage />
}