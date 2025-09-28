'use client'

import { useEffect, useState } from 'react'

export default function TestSanityPage() {
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function testDirectAPI() {
      try {
        // 直接APIを呼び出してテスト
        const url = 'https://xgwvet7h.api.sanity.io/v2024-01-01/data/query/production?query=*[_type == "work"][0...3]'

        console.log('Testing direct API call:', url)

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        console.log('Response status:', response.status)
        console.log('Response headers:', response.headers)

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }

        const data = await response.json()
        console.log('Response data:', data)

        setResult(JSON.stringify(data, null, 2))
      } catch (error) {
        console.error('Direct API test error:', error)
        setResult(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
      } finally {
        setLoading(false)
      }
    }

    testDirectAPI()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Direct Sanity API Test</h1>

      <div className="space-y-4">
        <div>
          <strong>Project ID:</strong> xgwvet7h
        </div>
        <div>
          <strong>Dataset:</strong> production
        </div>
        <div>
          <strong>API URL:</strong> https://xgwvet7h.api.sanity.io/v2024-01-01/data/query/production
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Result:</h2>
        {loading ? (
          <p>Testing direct API connection...</p>
        ) : (
          <div className="bg-gray-900 p-4 rounded overflow-auto max-h-96">
            <pre className="text-sm text-gray-300 whitespace-pre-wrap">
              {result}
            </pre>
          </div>
        )}
      </div>

      <div className="mt-8">
        <button
          onClick={() => {
            setLoading(true)
            window.location.reload()
          }}
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded"
        >
          Retry Test
        </button>
      </div>
    </div>
  )
}