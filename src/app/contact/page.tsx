import { Metadata } from 'next'
import { ContactPage } from '@/components/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Contact | ZEROVENTURE',
  description: 'ZEROVENTUREへのお問い合わせはこちらから。LP制作・コーポレートサイト制作のご相談を承っています。無料相談も実施中です。',
}

export default function Contact() {
  return <ContactPage />
}