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
    default: 'ZEROVENTURE | フリーランスWebデザイナー',
    template: '%s | ZEROVENTURE'
  },
  description: 'シンプルかつ迷わない設計で、使いやすく成果につながるWebサイトを制作。5つのサイトスタイルから、あなたのビジネスに最適なサイトをご提案します。',
  keywords: ['Webサイト制作', 'LP制作', 'ポートフォリオサイト', 'リクルートサイト', 'メディアサイト', 'コーポレートサイト', 'ホームページ制作'],
  authors: [{ name: 'ZEROVENTURE' }],
  creator: 'ZEROVENTURE',
  publisher: 'ZEROVENTURE',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://zero-venture.com',
    siteName: 'ZEROVENTURE',
    title: 'ZEROVENTURE | フリーランスWebデザイナー',
    description: 'シンプルかつ迷わない設計で、使いやすく成果につながるWebサイトを制作。5つのサイトスタイルから、あなたのビジネスに最適なサイトをご提案します。',
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
    title: 'ZEROVENTURE | フリーランスWebデザイナー',
    description: 'シンプルかつ迷わない設計で、使いやすく成果につながるWebサイトを制作。',
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
