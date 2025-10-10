import { Metadata } from 'next'
import { ContactPage } from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'ZEROVENTUREへのお問い合わせはこちらから。Webサイト制作のご相談を承っています。LP、ポートフォリオ、リクルート、メディア、コーポレートサイトなど、お気軽にご相談ください。',
  openGraph: {
    title: 'Contact | ZEROVENTURE',
    description: 'ZEROVENTUREへのお問い合わせはこちらから。Webサイト制作のご相談を承っています。',
    url: 'https://zero-venture.com/contact',
  },
}

export default function Contact() {
  return <ContactPage />
}