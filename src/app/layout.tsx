import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout/Layout";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { generateStructuredData } from "@/lib/seo";
import { StructuredData } from "@/components/seo/StructuredData";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zero-venture.com'),
  title: {
    default: 'ZEROVENTURE | ベンチャー企業向けブランディング・WEB制作',
    template: '%s | ZEROVENTURE'
  },
  description: 'ZEROVENTUREは、ベンチャー企業向けのブランディング・WEB制作を専門とする制作会社です。LP制作、コーポレートサイト制作で事業成長をサポートします。',
  keywords: ['WEB制作', 'LP制作', 'コーポレートサイト', 'ベンチャー企業', 'ブランディング', 'Next.js', 'React'],
  authors: [{ name: 'ZEROVENTURE' }],
  creator: 'ZEROVENTURE',
  publisher: 'ZEROVENTURE',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://zero-venture.com',
    siteName: 'ZEROVENTURE',
    title: 'ZEROVENTURE | ベンチャー企業向けブランディング・WEB制作',
    description: 'ZEROVENTUREは、ベンチャー企業向けのブランディング・WEB制作を専門とする制作会社です。LP制作、コーポレートサイト制作で事業成長をサポートします。',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ZEROVENTURE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZEROVENTURE | ベンチャー企業向けブランディング・WEB制作',
    description: 'ZEROVENTUREは、ベンチャー企業向けのブランディング・WEB制作を専門とする制作会社です。',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationData = generateStructuredData('Organization');
const websiteData = generateStructuredData('WebSite');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <StructuredData data={organizationData} />
        <StructuredData data={websiteData} />
      </head>
      <body className={`${notoSansJP.variable} antialiased`}>
        <Layout>
          {children}
        </Layout>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
