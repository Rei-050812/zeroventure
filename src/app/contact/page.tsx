import { Metadata } from 'next'
import { ContactPage } from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'ZEROVENTUREへのお問い合わせはこちらから。LP制作・コーポレートサイト制作のご相談を承っています。無料相談も実施中です。',
  openGraph: {
    title: 'Contact | ZEROVENTURE',
    description: 'ZEROVENTUREへのお問い合わせはこちらから。LP制作・コーポレートサイト制作のご相談を承っています。',
    url: 'https://zero-venture.com/contact',
  },
}

export default function Contact() {
  return <ContactPage />
}