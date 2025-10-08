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
  timeline: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
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
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            送信完了
          </h3>
          <p className="text-slate-600 mb-6">
            お問い合わせありがとうございます。
            <br />
            24時間以内にご返信いたします。
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                name: '', email: '', company: '',
                timeline: '', message: ''
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

      {/* Company & Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              placeholder="株式会社サンプル（個人の場合は「個人」とご記入ください）"
            />
          </div>
        </AnimatedElement>

        <AnimatedElement variants={fadeUp}>
          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-slate-900 mb-2">
              希望納期
            </label>
            <input
              type="text"
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
              placeholder="例：1ヶ月以内、3ヶ月程度、相談したい など"
            />
          </div>
        </AnimatedElement>
      </div>

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