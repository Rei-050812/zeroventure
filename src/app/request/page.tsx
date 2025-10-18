import { Metadata } from 'next'
import { ProjectRequestPage } from '@/components/pages/ProjectRequestPage'

export const metadata: Metadata = {
  title: 'Request',
  description: 'ZEROVENTUREの制作依頼フォーム。ご希望のプランやサイトで実現したいこと、デザインの雰囲気、参考サイト、追加オプションなどを詳しくお聞かせください。お客様のご要望に合わせて、最適な制作プランをご提案いたします。',
  alternates: {
    canonical: 'https://zero-venture.com/request',
  },
  openGraph: {
    title: 'Request | ZEROVENTURE',
    description: 'ZEROVENTUREの制作依頼フォーム。ご希望のプランやデザインの雰囲気など、詳しくお聞かせください。',
    url: 'https://zero-venture.com/request',
  },
}

export default function Request() {
  return <ProjectRequestPage />
}
