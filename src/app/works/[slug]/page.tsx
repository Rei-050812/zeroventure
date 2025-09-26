import { Metadata } from 'next'
import { WorkDetailPage } from '@/components/pages/WorkDetailPage'
import { notFound } from 'next/navigation'

// Mock data (この部分は後でSanityから取得)
const getWorkBySlug = async (slug: string) => {
  const works = [
    {
      id: '1',
      title: 'TechStartup LP',
      summary: 'AI技術スタートアップのランディングページ制作',
      description: 'AI技術を活用したスタートアップ企業のランディングページを制作。コンバージョン率の向上を重視し、ユーザーの行動データを分析しながら最適なデザインを構築しました。結果として、従来比30%のコンバージョン率向上を達成し、クライアントの事業成長に大きく貢献しました。',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Hook Form', 'Vercel'],
      coverImage: '/works/work1.jpg',
      images: ['/works/work1-1.jpg', '/works/work1-2.jpg'],
      url: 'https://example-techstartup.com',
      category: 'LP制作',
      client: 'TechStartup Inc.',
      duration: '2週間',
      role: ['UI/UXデザイン', 'フロントエンド開発', 'パフォーマンス最適化'],
      challenges: [
        '複雑なAI技術をわかりやすく訴求する必要があった',
        'モバイルファーストでの高いパフォーマンスが求められた',
        'A/Bテストを実施しながらの改善が必要だった'
      ],
      solutions: [
        'インフォグラフィックスを活用してAI技術を視覚的に説明',
        'Next.jsの最適化機能を活用してCore Web Vitalsを改善',
        'Google Optimizeを導入してA/Bテストを効率化'
      ],
      results: [
        'コンバージョン率30%向上',
        'ページ読み込み速度50%改善',
        '顧客獲得コスト25%削減'
      ],
      publishedAt: '2024-01-15',
      slug: { current: '1' }
    },
    // 他の作品データ...
  ]

  return works.find(work => work.slug.current === slug)
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const work = await getWorkBySlug(params.slug)

  if (!work) {
    return {
      title: 'ページが見つかりません | ZEROVENTURE',
    }
  }

  return {
    title: `${work.title} | 制作実績 | ZEROVENTURE`,
    description: work.summary,
  }
}

export default async function WorkDetailPageRoute({ params }: { params: { slug: string } }) {
  const work = await getWorkBySlug(params.slug)

  if (!work) {
    notFound()
  }

  return <WorkDetailPage work={work} />
}