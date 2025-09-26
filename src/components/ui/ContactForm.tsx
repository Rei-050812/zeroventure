'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Check, AlertCircle } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Button } from '@/components/ui/Button'
import { fadeUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

const projectTypes = [
  { value: 'lp', label: 'LP制作' },
  { value: 'corporate', label: 'コーポレートサイト制作' },
  { value: 'consulting', label: 'コンサルティング' },
  { value: 'other', label: 'その他' }
]

const budgetRanges = [
  { value: '300k', label: '30万円未満' },
  { value: '300k-600k', label: '30万円〜60万円' },
  { value: '600k-1m', label: '60万円〜100万円' },
  { value: '1m+', label: '100万円以上' },
  { value: 'consulting', label: '要相談' }
]

const timelines = [
  { value: '1week', label: '1週間以内' },
  { value: '1month', label: '1ヶ月以内' },
  { value: '3months', label: '3ヶ月以内' },
  { value: 'flexible', label: '時期は調整可能' }
]

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

    if (!formData.projectType) {
      newErrors.projectType = 'プロジェクトの種類を選択してください'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'お問い合わせ内容を入力してください'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = '10文字以上で入力してください'
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
      // ここで実際のフォーム送信処理を行う
      // 例: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

      // デモ用の遅延
      await new Promise(resolve => setTimeout(resolve, 2000))

      setIsSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ submit: 'エラーが発生しました。もう一度お試しください。' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

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
          <h3 className="text-2xl font-bold text-white mb-4">
            送信完了
          </h3>
          <p className="text-gray-300 mb-6">
            お問い合わせありがとうございます。
            <br />
            24時間以内にご返信いたします。
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                name: '', email: '', company: '', phone: '',
                projectType: '', budget: '', timeline: '', message: ''
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
      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatedElement variants={fadeUp}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              お名前 <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={cn(
                "w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200",
                errors.name ? "border-red-500" : "border-white/20 focus:border-primary"
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
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              メールアドレス <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={cn(
                "w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200",
                errors.email ? "border-red-500" : "border-white/20 focus:border-primary"
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

      {/* Company & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatedElement variants={fadeUp}>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
              会社名
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
              placeholder="株式会社サンプル"
            />
          </div>
        </AnimatedElement>

        <AnimatedElement variants={fadeUp}>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
              電話番号
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
              placeholder="090-1234-5678"
            />
          </div>
        </AnimatedElement>
      </div>

      {/* Project Type */}
      <AnimatedElement variants={fadeUp}>
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-white mb-2">
            プロジェクトの種類 <span className="text-red-400">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 bg-white/10 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200",
              errors.projectType ? "border-red-500" : "border-white/20 focus:border-primary"
            )}
          >
            <option value="">選択してください</option>
            {projectTypes.map((type) => (
              <option key={type.value} value={type.value} className="text-black">
                {type.label}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
              <AlertCircle size={16} />
              {errors.projectType}
            </p>
          )}
        </div>
      </AnimatedElement>

      {/* Budget & Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatedElement variants={fadeUp}>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
              ご予算
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
            >
              <option value="">選択してください</option>
              {budgetRanges.map((range) => (
                <option key={range.value} value={range.value} className="text-black">
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </AnimatedElement>

        <AnimatedElement variants={fadeUp}>
          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
              希望納期
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
            >
              <option value="">選択してください</option>
              {timelines.map((timeline) => (
                <option key={timeline.value} value={timeline.value} className="text-black">
                  {timeline.label}
                </option>
              ))}
            </select>
          </div>
        </AnimatedElement>
      </div>

      {/* Message */}
      <AnimatedElement variants={fadeUp}>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            お問い合わせ内容 <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200 resize-vertical",
              errors.message ? "border-red-500" : "border-white/20 focus:border-primary"
            )}
            placeholder="プロジェクトの詳細、ご要望、ご質問などをお聞かせください"
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
              <AlertCircle size={16} />
              {errors.message}
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
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-2"
              >
                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full" />
                送信中...
              </motion.div>
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