// アクセシビリティ関連のユーティリティ

export interface AccessibilityCheckResult {
  passed: boolean
  message: string
  element?: Element
}

// フォーカストラップの実装
export function trapFocus(element: HTMLElement) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )

  const firstElement = focusableElements[0] as HTMLElement
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus()
          e.preventDefault()
        }
      }
    }

    if (e.key === 'Escape') {
      element.setAttribute('aria-hidden', 'true')
      // モーダルの場合、閉じる処理をここに追加
    }
  }

  element.addEventListener('keydown', handleTabKey)
  firstElement?.focus()

  return () => {
    element.removeEventListener('keydown', handleTabKey)
  }
}

// カラーコントラスト比チェック
export function checkColorContrast(
  foreground: string,
  background: string,
  fontSize: number = 16
): AccessibilityCheckResult {
  // 簡易的なコントラスト比計算
  // 実際の本格運用では、より詳細な計算が必要

  const getLuminance = (color: string): number => {
    // HEX色をRGBに変換してから輝度を計算
    const hex = color.replace('#', '')
    const r = parseInt(hex.substr(0, 2), 16) / 255
    const g = parseInt(hex.substr(2, 2), 16) / 255
    const b = parseInt(hex.substr(4, 2), 16) / 255

    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }

  const l1 = getLuminance(foreground)
  const l2 = getLuminance(background)
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)

  const isLargeText = fontSize >= 18 || fontSize >= 14 // bold
  const minimumRatio = isLargeText ? 3 : 4.5

  return {
    passed: ratio >= minimumRatio,
    message: `コントラスト比: ${ratio.toFixed(2)}:1 (最小要件: ${minimumRatio}:1)`
  }
}

// キーボードナビゲーションのテスト
export function testKeyboardNavigation(): Promise<AccessibilityCheckResult[]> {
  return new Promise((resolve) => {
    const results: AccessibilityCheckResult[] = []

    // フォーカス可能な要素をチェック
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    focusableElements.forEach((element) => {
      const computedStyle = window.getComputedStyle(element as Element)
      const isVisible = computedStyle.display !== 'none' &&
                       computedStyle.visibility !== 'hidden' &&
                       computedStyle.opacity !== '0'

      if (isVisible) {
        const hasVisibleFocus = computedStyle.outline !== 'none' ||
                               computedStyle.boxShadow.includes('outline') ||
                               element.classList.contains('focus:')

        results.push({
          passed: hasVisibleFocus,
          message: hasVisibleFocus
            ? 'フォーカス表示が適切に設定されています'
            : 'フォーカス表示が不十分です',
          element: element as Element
        })
      }
    })

    resolve(results)
  })
}

// ARIAラベルのチェック
export function checkAriaLabels(): AccessibilityCheckResult[] {
  const results: AccessibilityCheckResult[] = []

  // ボタンのaria-label チェック
  const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])')
  buttons.forEach((button) => {
    const hasTextContent = button.textContent?.trim()
    if (!hasTextContent) {
      results.push({
        passed: false,
        message: 'ボタンにアクセシブルなラベルがありません',
        element: button
      })
    }
  })

  // 画像のalt属性チェック
  const images = document.querySelectorAll('img:not([alt])')
  images.forEach((img) => {
    results.push({
      passed: false,
      message: '画像にalt属性がありません',
      element: img
    })
  })

  // フォーム要素のラベルチェック
  const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])')
  inputs.forEach((input) => {
    const id = input.getAttribute('id')
    const label = id ? document.querySelector(`label[for="${id}"]`) : null

    if (!label) {
      results.push({
        passed: false,
        message: 'フォーム要素にラベルが関連付けられていません',
        element: input
      })
    }
  })

  return results
}

// モーション設定のチェック
export function checkReducedMotionCompliance(): AccessibilityCheckResult {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const motionElements = document.querySelectorAll('[data-motion], .animate-')

  if (prefersReducedMotion && motionElements.length > 0) {
    // アニメーション要素がprefers-reduced-motionに対応しているかチェック
    const hasMotionSafeClasses = Array.from(motionElements).some(el =>
      el.classList.contains('motion-safe:') ||
      el.hasAttribute('data-respect-motion-preference')
    )

    return {
      passed: hasMotionSafeClasses,
      message: hasMotionSafeClasses
        ? 'モーション設定が適切に処理されています'
        : 'アニメーションがモーション設定を無視している可能性があります'
    }
  }

  return {
    passed: true,
    message: 'モーション設定の問題はありません'
  }
}

// 見出しの階層構造チェック
export function checkHeadingStructure(): AccessibilityCheckResult[] {
  const results: AccessibilityCheckResult[] = []
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')

  let previousLevel = 0

  headings.forEach((heading, index) => {
    const level = parseInt(heading.tagName.charAt(1))

    if (index === 0 && level !== 1) {
      results.push({
        passed: false,
        message: 'ページの最初の見出しはh1である必要があります',
        element: heading
      })
    }

    if (level > previousLevel + 1) {
      results.push({
        passed: false,
        message: `見出しレベルがスキップされています (h${previousLevel} → h${level})`,
        element: heading
      })
    }

    previousLevel = level
  })

  return results
}

// 総合的なアクセシビリティテスト
export async function runAccessibilityAudit(): Promise<{
  passed: boolean
  results: AccessibilityCheckResult[]
  summary: {
    total: number
    passed: number
    failed: number
  }
}> {
  const allResults: AccessibilityCheckResult[] = []

  // 各種テストを実行
  const keyboardResults = await testKeyboardNavigation()
  const ariaResults = checkAriaLabels()
  const motionResult = checkReducedMotionCompliance()
  const headingResults = checkHeadingStructure()

  allResults.push(...keyboardResults, ...ariaResults, motionResult, ...headingResults)

  const passed = allResults.filter(r => r.passed).length
  const failed = allResults.filter(r => !r.passed).length

  return {
    passed: failed === 0,
    results: allResults,
    summary: {
      total: allResults.length,
      passed,
      failed
    }
  }
}