import { Metadata } from 'next'
import { WorksIndexPage } from '@/components/pages/WorksIndexPage'

export const metadata: Metadata = {
  title: '制作実績 | ZEROVENTURE',
  description: 'ZEROVENTUREがこれまでに手がけた制作実績をご紹介。LP制作、コーポレートサイト制作の事例を掲載しています。',
}

export default function WorksPage() {
  return <WorksIndexPage />
}