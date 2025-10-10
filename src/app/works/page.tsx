import { Metadata } from 'next'
import { WorksIndexPage } from '@/components/pages/WorksIndexPage'

export const metadata: Metadata = {
  title: 'Works',
  description: 'ZEROVENTUREがこれまでに手がけた制作実績をご紹介。LP制作、コーポレートサイト制作の事例を掲載しています。',
  openGraph: {
    title: 'Works | ZEROVENTURE',
    description: 'ZEROVENTUREがこれまでに手がけた制作実績をご紹介。',
    url: 'https://zero-venture.com/works',
  },
}

export default function WorksPage() {
  return <WorksIndexPage />
}