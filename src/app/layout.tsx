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
  title: "ZEROVENTURE | ゼロから始めるベンチャーのためのWEB制作",
  description: "ZEROVENTUREは、ベンチャー企業向けのブランディング・WEB制作を専門とする制作会社です。LP制作、コーポレートサイト制作で事業成長をサポートします。",
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
