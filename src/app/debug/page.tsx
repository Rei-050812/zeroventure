'use client'

import { useEffect, useState } from 'react'
import { getFeaturedWorks, getWorks } from '@/lib/sanity'

export default function DebugPage() {
  const [featuredWorks, setFeaturedWorks] = useState([])
  const [allWorks, setAllWorks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function testSanityConnection() {
      try {
        console.log('Testing Sanity connection...')

        const [featured, all] = await Promise.all([
          getFeaturedWorks(),
          getWorks()
        ])

        console.log('Featured works:', featured)
        console.log('All works:', all)

        setFeaturedWorks(featured)
        setAllWorks(all)
      } catch (err) {
        console.error('Sanity connection error:', err)
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    testSanityConnection()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <h1 className="text-3xl font-bold mb-4">Sanity Debug Page</h1>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Sanity Debug Page</h1>

      {error && (
        <div className="bg-red-900 border border-red-500 p-4 rounded mb-8">
          <h2 className="text-xl font-bold text-red-300">Error:</h2>
          <p className="text-red-200">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Featured Works */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-300">
            Featured Works ({featuredWorks.length})
          </h2>
          <div className="bg-gray-900 p-4 rounded overflow-auto max-h-96">
            <pre className="text-sm text-gray-300">
              {JSON.stringify(featuredWorks, null, 2)}
            </pre>
          </div>
        </div>

        {/* All Works */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-green-300">
            All Works ({allWorks.length})
          </h2>
          <div className="bg-gray-900 p-4 rounded overflow-auto max-h-96">
            <pre className="text-sm text-gray-300">
              {JSON.stringify(allWorks, null, 2)}
            </pre>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded"
        >
          Reload Data
        </button>
      </div>
    </div>
  )
}