import { Metadata } from 'next'
import { ContactPage } from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'ZEROVENTUREへのお問い合わせはこちらから。Webサイト制作のご相談を承っています。目的やご予算に合わせて最適なプランをご提案します。初回のご相談から制作後のサポートまで丁寧に対応いたします。フォーム、メール、SNS（X、Instagram）からご連絡ください。',
  alternates: {
    canonical: 'https://zero-venture.com/contact',
  },
  openGraph: {
    title: 'Contact | ZEROVENTURE',
    description: 'ZEROVENTUREへのお問い合わせ。Webサイト制作のご相談を承っています。',
    url: 'https://zero-venture.com/contact',
  },
}

export default function Contact() {
  return <ContactPage />
}