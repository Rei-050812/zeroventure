'use client'

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId?: string | Date,
      config?: Record<string, any>
    ) => void
    dataLayer: any[]
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID!, {
      page_path: url,
    })
  }
}

export const event = ({
  action,
  category,
  label,
  value,
  custom_parameters,
}: {
  action: string
  category?: string
  label?: string
  value?: number
  custom_parameters?: Record<string, any>
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...custom_parameters,
    })
  }
}

// カスタムイベント関数
export const trackContactFormSubmit = (projectType?: string, budget?: string) => {
  event({
    action: 'form_submit',
    category: 'Contact',
    label: 'Contact Form',
    custom_parameters: {
      project_type: projectType,
      budget_range: budget,
    },
  })
}

export const trackWorkView = (workId: string, workTitle: string, category: string) => {
  event({
    action: 'work_view',
    category: 'Works',
    label: workTitle,
    custom_parameters: {
      work_id: workId,
      work_category: category,
    },
  })
}

export const trackExternalLinkClick = (url: string, source: string) => {
  event({
    action: 'external_link_click',
    category: 'External Links',
    label: url,
    custom_parameters: {
      link_source: source,
    },
  })
}

export const trackCTAClick = (ctaLocation: string, ctaText: string) => {
  event({
    action: 'cta_click',
    category: 'CTA',
    label: ctaText,
    custom_parameters: {
      cta_location: ctaLocation,
    },
  })
}

export const trackDownload = (fileName: string, fileType: string) => {
  event({
    action: 'download',
    category: 'Downloads',
    label: fileName,
    custom_parameters: {
      file_type: fileType,
    },
  })
}

export const trackSearch = (searchTerm: string, resultCount: number) => {
  event({
    action: 'search',
    category: 'Search',
    label: searchTerm,
    custom_parameters: {
      result_count: resultCount,
    },
  })
}

export const trackScrollDepth = (percentage: number) => {
  event({
    action: 'scroll_depth',
    category: 'Engagement',
    label: `${percentage}%`,
    value: percentage,
  })
}

export const trackVideoPlay = (videoTitle: string, videoUrl?: string) => {
  event({
    action: 'video_play',
    category: 'Video',
    label: videoTitle,
    custom_parameters: {
      video_url: videoUrl,
    },
  })
}