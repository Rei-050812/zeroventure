'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, AlertTriangle, Play } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { fadeUp, containerStagger } from '@/lib/animations'
import {
  runAccessibilityAudit,
  checkReducedMotionCompliance,
  AccessibilityCheckResult
} from '@/lib/accessibility'

export function AccessibilityTestPage() {
  const [testResults, setTestResults] = useState<{
    passed: boolean
    results: AccessibilityCheckResult[]
    summary: {
      total: number
      passed: number
      failed: number
    }
  } | null>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [motionTest, setMotionTest] = useState<AccessibilityCheckResult | null>(null)

  const runTests = async () => {
    setIsRunning(true)
    try {
      const results = await runAccessibilityAudit()
      setTestResults(results)

      // モーション設定のテストも実行
      const motionResult = checkReducedMotionCompliance()
      setMotionTest(motionResult)
    } catch (error) {
      console.error('Test execution error:', error)
    } finally {
      setIsRunning(false)
    }
  }

  const getStatusIcon = (passed: boolean) => {
    return passed ? (
      <CheckCircle className="w-5 h-5 text-green-500" />
    ) : (
      <XCircle className="w-5 h-5 text-red-500" />
    )
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement
          variants={containerStagger}
          className="space-y-8"
        >
          <div className="text-center">
            <AnimatedElement variants={fadeUp}>
              <h1 className="text-4xl font-bold mb-4">
                Accessibility Test Suite
              </h1>
              <p className="text-gray-300 mb-8">
                ZEROVENTURE ウェブサイトのアクセシビリティ検証
              </p>
              <Button
                onClick={runTests}
                disabled={isRunning}
                className="mb-8"
              >
                {isRunning ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    テスト実行中...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Play size={20} />
                    アクセシビリティテスト実行
                  </div>
                )}
              </Button>
            </AnimatedElement>
          </div>

          {/* Motion Preferences Test */}
          <AnimatedElement variants={fadeUp}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  モーション設定テスト
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    ブラウザのモーション設定: {' '}
                    <code className="bg-gray-800 px-2 py-1 rounded text-sm">
                      prefers-reduced-motion: {window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'reduce' : 'no-preference'}
                    </code>
                  </p>

                  {motionTest && (
                    <div className="flex items-start gap-3 p-4 bg-gray-900 rounded-lg">
                      {getStatusIcon(motionTest.passed)}
                      <div>
                        <p className={motionTest.passed ? 'text-green-400' : 'text-red-400'}>
                          {motionTest.message}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="text-sm text-gray-400">
                    <p>モーション設定の確認方法:</p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>macOS: システム環境設定 → アクセシビリティ → ディスプレイ → 視差効果を減らす</li>
                      <li>Windows: 設定 → 簡単操作 → ディスプレイ → アニメーションを表示する</li>
                      <li>フッターの「アニメーション設定」でサイト内設定を変更可能</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedElement>

          {/* Test Results */}
          {testResults && (
            <AnimatedElement variants={fadeUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {getStatusIcon(testResults.passed)}
                    テスト結果
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Summary */}
                    <div className="bg-gray-900 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">概要</h3>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-white">
                            {testResults.summary.total}
                          </div>
                          <div className="text-sm text-gray-400">合計</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-500">
                            {testResults.summary.passed}
                          </div>
                          <div className="text-sm text-gray-400">合格</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-red-500">
                            {testResults.summary.failed}
                          </div>
                          <div className="text-sm text-gray-400">不合格</div>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Results */}
                    <div className="space-y-3">
                      <h3 className="font-semibold">詳細結果</h3>
                      {testResults.results.map((result, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 bg-gray-900 rounded"
                        >
                          {getStatusIcon(result.passed)}
                          <div className="flex-1">
                            <p className={result.passed ? 'text-green-400' : 'text-red-400'}>
                              {result.message}
                            </p>
                            {result.element && (
                              <p className="text-xs text-gray-500 mt-1">
                                要素: {result.element.tagName.toLowerCase()}
                                {result.element.className && ` .${result.element.className}`}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Recommendations */}
                    {testResults.summary.failed > 0 && (
                      <div className="bg-yellow-900/20 border border-yellow-600/20 p-4 rounded-lg">
                        <h3 className="font-semibold text-yellow-400 mb-2">
                          改善提案
                        </h3>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• フォーカス表示が不十分な要素には適切なスタイルを追加</li>
                          <li>• aria-labelやalt属性の不足している要素を修正</li>
                          <li>• 見出しの階層構造を確認し、適切な順序に修正</li>
                          <li>• カラーコントラスト比を4.5:1以上に調整</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          )}

          {/* Manual Testing Guidelines */}
          <AnimatedElement variants={fadeUp}>
            <Card>
              <CardHeader>
                <CardTitle>手動テストガイドライン</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm text-gray-300">
                  <div>
                    <h4 className="font-semibold text-white mb-2">キーボードナビゲーション</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Tabキーでフォーカスが適切に移動すること</li>
                      <li>フォーカス表示が明確に見えること</li>
                      <li>Shift+Tabで逆方向に移動できること</li>
                      <li>Enterキーでボタンやリンクがアクティベートされること</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">スクリーンリーダーテスト</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>見出しが適切に読み上げられること</li>
                      <li>リンクテキストが意味を持っていること</li>
                      <li>画像のalt属性が適切に設定されていること</li>
                      <li>フォーム要素にラベルが関連付けられていること</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">モーション・アニメーション</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>prefers-reduced-motionの設定が反映されること</li>
                      <li>サイト内のアニメーション切り替えが機能すること</li>
                      <li>アニメーションなしでもUIが正常に動作すること</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedElement>
        </AnimatedElement>
      </div>
    </div>
  )
}