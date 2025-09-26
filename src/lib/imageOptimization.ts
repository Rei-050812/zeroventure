// 画像最適化のためのユーティリティ

interface ImageConfig {
  width?: number
  height?: number
  quality?: number
  format?: 'webp' | 'jpg' | 'png'
}

export function getOptimizedImageUrl(
  src: string,
  config: ImageConfig = {}
): string {
  const {
    width,
    height,
    quality = 80,
    format = 'webp'
  } = config

  // Sanity用の画像最適化URL (実際の運用時に使用)
  if (src.includes('sanity.io')) {
    const params = new URLSearchParams()

    if (width) params.set('w', width.toString())
    if (height) params.set('h', height.toString())
    params.set('q', quality.toString())
    params.set('fm', format)
    params.set('fit', 'crop')
    params.set('crop', 'smart')

    return `${src}?${params.toString()}`
  }

  // Next.js Image Optimizationを使用
  return src
}

export function generateImageSrcSet(
  src: string,
  sizes: number[] = [640, 768, 1024, 1280, 1920]
): string {
  return sizes
    .map(size => `${getOptimizedImageUrl(src, { width: size })} ${size}w`)
    .join(', ')
}

export function getImagePlaceholder(width: number, height: number): string {
  // Base64エンコードされた1x1ピクセルの透明なPNG
  return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
}

// 画像のアスペクト比を計算
export function calculateAspectRatio(width: number, height: number): number {
  return width / height
}

// レスポンシブ画像のsizesを生成
export function generateResponsiveSizes(breakpoints: { [key: string]: string } = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
}): string {
  const sizes = Object.entries(breakpoints)
    .reverse()
    .map(([key, value]) => `(min-width: ${value}) 100vw`)
    .join(', ')

  return `${sizes}, 100vw`
}

// WebPサポートチェック（クライアント側で使用）
export function supportsWebP(): Promise<boolean> {
  return new Promise(resolve => {
    const webP = new Image()
    webP.onload = webP.onerror = function () {
      resolve(webP.height === 2)
    }
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  })
}

// 画像のプリロード
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

// Critical images for above-the-fold content
export const criticalImageSizes = {
  hero: {
    desktop: { width: 1920, height: 1080 },
    tablet: { width: 1024, height: 768 },
    mobile: { width: 640, height: 480 }
  },
  card: {
    desktop: { width: 400, height: 300 },
    tablet: { width: 350, height: 262 },
    mobile: { width: 320, height: 240 }
  }
}

// Lazy loading options
export const lazyLoadingConfig = {
  root: null,
  rootMargin: '50px',
  threshold: 0.1
}