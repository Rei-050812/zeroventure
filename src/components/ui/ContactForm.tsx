'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Send, Check, AlertCircle } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Button } from '@/components/ui/Button'
import { fadeUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  company: string
  plan: string
  message: string
  agreePrivacy: boolean
}

const planNames: { [key: string]: string } = {
  'lp': 'LP Plan',
  'portfolio': 'Portfolio Site Plan',
  'recruit': 'Recruit Site Plan',
  'media': 'Media Site Plan',
  'corporate': 'Corporate Site Plan'
}

interface FormErrors {
  [key: string]: string
}

export function ContactForm() {
  const searchParams = useSearchParams()
  const planParam = searchParams.get('plan')

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    plan: '',
    message: '',
    agreePrivacy: false
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (planParam && planNames[planParam]) {
      setFormData(prev => ({ ...prev, plan: planParam }))
    }
  }, [planParam])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'お問い合わせ内容を入力してください'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = '10文字以上で入力してください'
    }

    if (!formData.agreePrivacy) {
      newErrors.agreePrivacy = 'プライバシーポリシーへの同意が必要です'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // API経由でメール送信
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'メール送信に失敗しました')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ submit: error instanceof Error ? error.message : 'エラーが発生しました。もう一度お試しください。' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  if (isSubmitted) {
    return (
      <AnimatedElement variants={fadeUp} className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            送信完了
          </h3>
          <p className="text-slate-600 mb-6">
            お問い合わせありがとうございます。
            <br />
            担当者より改めてご連絡させていただきます。
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                name: '', email: '', company: '', plan: planParam || '', message: '', agreePrivacy: false
              })
            }}
            variant="outline"
          >
            新しいお問い合わせを送る
          </Button>
        </div>
      </AnimatedElement>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Selected Plan Display */}
      {formData.plan && planNames[formData.plan] && (
        <AnimatedElement variants={fadeUp}>
          <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-slate-600">選択プラン</p>
                <p className="text-lg font-semibold text-slate-900">{planNames[formData.plan]}</p>
              </div>
            </div>
          </div>
        </AnimatedElement>
      )}

      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatedElement variants={fadeUp}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
              お名前 <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={cn(
                "w-full px-4 py-3 bg-white border-2 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200",
                errors.name ? "border-red-500" : "border-gray-300 focus:border-primary"
              )}
              placeholder="山田 太郎"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                <AlertCircle size={16} />
                {errors.name}
              </p>
            )}
          </div>
        </AnimatedElement>

        <AnimatedElement variants={fadeUp}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
              メールアドレス <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={cn(
                "w-full px-4 py-3 bg-white border-2 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200",
                errors.email ? "border-red-500" : "border-gray-300 focus:border-primary"
              )}
              placeholder="example@email.com"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                <AlertCircle size={16} />
                {errors.email}
              </p>
            )}
          </div>
        </AnimatedElement>
      </div>

      {/* Company */}
      <AnimatedElement variants={fadeUp}>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-900 mb-2">
            会社名・団体名
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
            placeholder="株式会社サンプル"
          />
        </div>
      </AnimatedElement>

      {/* Message */}
      <AnimatedElement variants={fadeUp}>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
            お問い合わせ内容 <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 bg-white border-2 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200 resize-vertical",
              errors.message ? "border-red-500" : "border-gray-300 focus:border-primary"
            )}
            placeholder="どんなサイトを作りたいか、実装したい機能、予算、納期、その他どんなことでもお気軽にご記入ください。"
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
              <AlertCircle size={16} />
              {errors.message}
            </p>
          )}
        </div>
      </AnimatedElement>

      {/* Privacy Policy Agreement */}
      <AnimatedElement variants={fadeUp}>
        <div id="agreePrivacy">
          <div
            onClick={() => setFormData(prev => ({ ...prev, agreePrivacy: !prev.agreePrivacy }))}
            className={cn(
              "border-2 rounded-lg p-4 cursor-pointer transition-all duration-200",
              formData.agreePrivacy
                ? "border-primary bg-primary/5"
                : errors.agreePrivacy
                  ? "border-red-500"
                  : "border-gray-300 hover:border-primary/50"
            )}
          >
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreePrivacy-input"
                name="agreePrivacy"
                checked={formData.agreePrivacy}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-primary focus:ring-primary rounded"
              />
              <label htmlFor="agreePrivacy-input" className="flex-1 cursor-pointer text-slate-900">
                <a
                  href="https://zero-venture.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  プライバシーポリシー
                </a>
                に同意する <span className="text-red-400">*</span>
              </label>
            </div>
          </div>
          {errors.agreePrivacy && (
            <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
              <AlertCircle size={16} />
              {errors.agreePrivacy}
            </p>
          )}
        </div>
      </AnimatedElement>

      {/* Submit Button */}
      <AnimatedElement variants={fadeUp}>
        <div className="pt-4">
          {errors.submit && (
            <p className="mb-4 text-sm text-red-400 flex items-center gap-1">
              <AlertCircle size={16} />
              {errors.submit}
            </p>
          )}
          <Button
            type="submit"
            size="lg"
            className="w-full md:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                送信中...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send size={20} />
                送信する
              </div>
            )}
          </Button>
        </div>
      </AnimatedElement>
    </form>
  )
}