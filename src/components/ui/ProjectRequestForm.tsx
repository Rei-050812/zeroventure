'use client'

import { useState, useEffect, useRef } from 'react'
import { Send, Check, AlertCircle, ChevronRight, ChevronLeft } from 'lucide-react'
import { AnimatedElement } from '@/components/ui/AnimatedElement'
import { Button } from '@/components/ui/Button'
import { fadeUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  company: string
  plan: string
  goal: string
  goalOther: string
  options: string[]
  designStyle: string[]
  referenceUrl: string
  otherRequests: string
  agreePrivacy: boolean
}

interface FormErrors {
  [key: string]: string
}

type FormStep = 'input' | 'confirm' | 'complete'

const planOptions = [
  { value: 'lp', label: 'LP Plan', description: '成果を最短で引き出す1ページ完結型サイト', price: '¥64,000' },
  { value: 'portfolio', label: 'Portfolio Site Plan', description: '作品や実績を引き立てるクリエイター向けサイト', price: '¥80,000' },
  { value: 'recruit', label: 'Recruit Site Plan', description: '会社の魅力を伝えて人材を惹きつける採用サイト', price: '¥120,000' },
  { value: 'media', label: 'Media Site Plan', description: '記事更新でアクセスを増やす情報発信サイト', price: '¥144,400' },
  { value: 'corporate', label: 'Corporate Site Plan', description: '企業の信頼とブランドを確立する公式サイト', price: '¥160,000' },
  { value: 'undecided', label: 'まだ決めていない・相談したい', description: '', price: '' }
]

const goalOptionsByPlan: { [key: string]: { value: string; label: string }[] } = {
  lp: [
    { value: 'increase-sales', label: '商品・サービスの購入を増やしたい' },
    { value: 'increase-inquiries', label: 'お問い合わせ・資料請求を増やしたい' },
    { value: 'increase-registrations', label: 'イベント・セミナーの申し込みを増やしたい' },
    { value: 'other', label: 'その他(具体的に教えてください)' }
  ],
  portfolio: [
    { value: 'increase-orders', label: '仕事の依頼を増やしたい' },
    { value: 'showcase-works', label: '作品・実績を魅力的に見せたい' },
    { value: 'establish-brand', label: '自分のブランドを確立したい' },
    { value: 'other', label: 'その他(具体的に教えてください)' }
  ],
  recruit: [
    { value: 'increase-applications', label: '採用応募を増やしたい' },
    { value: 'convey-atmosphere', label: '会社の雰囲気を伝えたい' },
    { value: 'attract-candidates', label: '求職者に魅力を感じてもらいたい' },
    { value: 'other', label: 'その他(具体的に教えてください)' }
  ],
  media: [
    { value: 'increase-traffic', label: '検索流入を増やしたい' },
    { value: 'expand-awareness', label: 'ブランド認知を広げたい' },
    { value: 'show-expertise', label: '専門性・権威性をアピールしたい' },
    { value: 'other', label: 'その他(具体的に教えてください)' }
  ],
  corporate: [
    { value: 'increase-trust', label: '企業の信頼性を高めたい' },
    { value: 'increase-inquiries', label: 'お問い合わせを増やしたい' },
    { value: 'improve-brand', label: 'ブランドイメージを向上させたい' },
    { value: 'other', label: 'その他(具体的に教えてください)' }
  ],
  undecided: [
    { value: 'increase-inquiries', label: 'お問い合わせ・資料請求を増やしたい' },
    { value: 'increase-sales', label: '商品・サービスの購入を増やしたい' },
    { value: 'increase-applications', label: '採用応募を増やしたい' },
    { value: 'expand-awareness', label: 'ブランド認知を広げたい' },
    { value: 'showcase-works', label: '作品・実績を見てもらいたい' },
    { value: 'improve-trust', label: '信頼性・企業イメージを向上させたい' },
    { value: 'other', label: 'その他(具体的に教えてください)' },
    { value: 'not-decided', label: 'まだ決まっていない' }
  ]
}

const additionalOptions = [
  { value: 'content-addition', label: '作品・コンテンツ追加', price: '¥10,000/10点' },
  { value: 'domain-server', label: 'ドメイン・サーバー取得代行', price: '¥10,000〜' },
  { value: 'support-extension', label: 'サポート期間延長', price: '¥20,000/月' },
  { value: 'additional-pages', label: '追加ページ制作', price: '¥30,000/ページ' },
  { value: 'analytics', label: 'Google Analytics設定', price: '¥30,000' },
  { value: 'animation', label: 'アニメーション実装', price: '¥50,000〜' },
  { value: 'multilingual', label: '多言語対応', price: '¥80,000〜' }
]

const designStyles = [
  { value: 'leave-it-to-you', label: 'おまかせ' },
  { value: 'simple-minimal', label: 'シンプル・ミニマル' },
  { value: 'modern-sophisticated', label: 'モダン・洗練' },
  { value: 'warm-friendly', label: '温かみ・親しみやすい' },
  { value: 'luxury-premium', label: '高級感・プレミアム' },
  { value: 'pop-casual', label: 'ポップ・カジュアル' },
  { value: 'corporate-trustworthy', label: 'コーポレート・信頼感' },
  { value: 'creative-unique', label: 'クリエイティブ・個性的' }
]

export function ProjectRequestForm() {
  const [step, setStep] = useState<FormStep>('input')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    plan: '',
    goal: '',
    goalOther: '',
    options: [],
    designStyle: [],
    referenceUrl: '',
    otherRequests: '',
    agreePrivacy: false
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  // プラン変更時にgoalをリセット
  useEffect(() => {
    if (formData.plan) {
      setFormData(prev => ({ ...prev, goal: '', goalOther: '' }))
    }
  }, [formData.plan])

  // デザインスタイルで「おまかせ」を選択した場合、他の選択を解除
  const handleDesignStyleChange = (value: string) => {
    setFormData(prev => {
      const currentStyles = prev.designStyle
      if (value === 'leave-it-to-you') {
        return { ...prev, designStyle: ['leave-it-to-you'] }
      } else {
        const filtered = currentStyles.filter(s => s !== 'leave-it-to-you')
        if (filtered.includes(value)) {
          return { ...prev, designStyle: filtered.filter(s => s !== value) }
        } else {
          return { ...prev, designStyle: [...filtered, value] }
        }
      }
    })
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // 必須項目のバリデーション
    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください'
    }

    if (!formData.plan) {
      newErrors.plan = 'プランを選択してください'
    }

    // プランが「まだ決めていない」以外の場合は目標は必須
    if (formData.plan !== 'undecided' && !formData.goal) {
      newErrors.goal = 'サイトで実現したいことを選択してください'
    }

    // その他を選択した場合、詳細入力が必須
    if (formData.goal === 'other' && !formData.goalOther.trim()) {
      newErrors.goalOther = '具体的な内容を入力してください'
    }

    if (!formData.agreePrivacy) {
      newErrors.agreePrivacy = 'プライバシーポリシーへの同意が必要です'
    }

    setErrors(newErrors)

    // エラーがある場合、最初のエラー項目にスクロール
    if (Object.keys(newErrors).length > 0) {
      const firstErrorKey = Object.keys(newErrors)[0]
      const errorElement = document.getElementById(firstErrorKey)
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }

    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // エラーをクリア
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleCheckboxChange = (name: string, value: string) => {
    setFormData(prev => {
      const currentValues = prev[name as keyof FormData] as string[]
      if (currentValues.includes(value)) {
        return { ...prev, [name]: currentValues.filter(v => v !== value) }
      } else {
        return { ...prev, [name]: [...currentValues, value] }
      }
    })
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleConfirm = () => {
    if (validateForm()) {
      setStep('confirm')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    setStep('input')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/request', {
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

      setStep('complete')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({
        submit: error instanceof Error
          ? error.message
          : '送信に失敗しました。もう一度お試しいただくか、直接メールでお問い合わせください。'
      })
      setStep('input')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } finally {
      setIsSubmitting(false)
    }
  }

  // 確認画面の表示用ヘルパー関数
  const getPlanLabel = (value: string) => {
    const plan = planOptions.find(p => p.value === value)
    return plan ? `${plan.label}${plan.price ? ` (${plan.price})` : ''}` : value
  }

  const getGoalLabel = (planValue: string, goalValue: string) => {
    if (!planValue || !goalValue) return ''
    const goals = goalOptionsByPlan[planValue]
    const goal = goals?.find(g => g.value === goalValue)
    return goal?.label || goalValue
  }

  const getOptionsLabels = (values: string[]) => {
    return values.map(v => {
      const option = additionalOptions.find(o => o.value === v)
      return option ? `${option.label} (${option.price})` : v
    })
  }

  const getDesignStyleLabels = (values: string[]) => {
    return values.map(v => {
      const style = designStyles.find(s => s.value === v)
      return style?.label || v
    })
  }

  // 完了画面
  if (step === 'complete') {
    return (
      <AnimatedElement variants={fadeUp} className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            送信完了
          </h3>
          <p className="text-slate-600 mb-2">
            お問い合わせいただき、ありがとうございます。
          </p>
          <p className="text-slate-600 mb-6">
            確認後、担当者よりご連絡させていただきます。
            <br />
            自動返信メールをお送りしましたので、ご確認ください。
          </p>
          <Button
            onClick={() => window.location.href = '/'}
            variant="primary"
          >
            トップページに戻る
          </Button>
        </div>
      </AnimatedElement>
    )
  }

  // 確認画面
  if (step === 'confirm') {
    return (
      <div className="space-y-8">
        <AnimatedElement variants={fadeUp}>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">入力内容の確認</h3>
          <p className="text-slate-600 mb-8">
            以下の内容でよろしければ、「この内容で送信する」ボタンを押してください。
          </p>
        </AnimatedElement>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-6">
          {/* お名前 */}
          <div className="border-b border-gray-200 pb-4">
            <dt className="text-sm font-medium text-slate-600 mb-2">お名前</dt>
            <dd className="text-slate-900">{formData.name}</dd>
          </div>

          {/* 会社名・団体名 */}
          {formData.company && (
            <div className="border-b border-gray-200 pb-4">
              <dt className="text-sm font-medium text-slate-600 mb-2">会社名・団体名</dt>
              <dd className="text-slate-900">{formData.company}</dd>
            </div>
          )}

          {/* メールアドレス */}
          <div className="border-b border-gray-200 pb-4">
            <dt className="text-sm font-medium text-slate-600 mb-2">メールアドレス</dt>
            <dd className="text-slate-900">{formData.email}</dd>
          </div>

          {/* プラン */}
          <div className="border-b border-gray-200 pb-4">
            <dt className="text-sm font-medium text-slate-600 mb-2">制作希望のプラン</dt>
            <dd className="text-slate-900">{getPlanLabel(formData.plan)}</dd>
          </div>

          {/* 実現したいこと */}
          {formData.goal && (
            <div className="border-b border-gray-200 pb-4">
              <dt className="text-sm font-medium text-slate-600 mb-2">サイトで実現したいこと</dt>
              <dd className="text-slate-900">
                {getGoalLabel(formData.plan, formData.goal)}
                {formData.goal === 'other' && formData.goalOther && (
                  <div className="mt-2 text-slate-700">詳細: {formData.goalOther}</div>
                )}
              </dd>
            </div>
          )}

          {/* 追加オプション */}
          {formData.options.length > 0 && (
            <div className="border-b border-gray-200 pb-4">
              <dt className="text-sm font-medium text-slate-600 mb-2">追加希望のオプション</dt>
              <dd className="text-slate-900">
                <ul className="list-disc list-inside space-y-1">
                  {getOptionsLabels(formData.options).map((label, index) => (
                    <li key={index}>{label}</li>
                  ))}
                </ul>
              </dd>
            </div>
          )}

          {/* デザインの雰囲気 */}
          {formData.designStyle.length > 0 && (
            <div className="border-b border-gray-200 pb-4">
              <dt className="text-sm font-medium text-slate-600 mb-2">デザインの雰囲気</dt>
              <dd className="text-slate-900">
                {getDesignStyleLabels(formData.designStyle).join(', ')}
              </dd>
            </div>
          )}

          {/* 参考サイト */}
          {formData.referenceUrl && (
            <div className="border-b border-gray-200 pb-4">
              <dt className="text-sm font-medium text-slate-600 mb-2">参考にしたいサイト</dt>
              <dd className="text-slate-900 break-all">{formData.referenceUrl}</dd>
            </div>
          )}

          {/* その他ご要望 */}
          {formData.otherRequests && (
            <div className="border-b border-gray-200 pb-4">
              <dt className="text-sm font-medium text-slate-600 mb-2">その他ご要望・補足</dt>
              <dd className="text-slate-900 whitespace-pre-wrap">{formData.otherRequests}</dd>
            </div>
          )}
        </div>

        {/* ボタン */}
        <AnimatedElement variants={fadeUp}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleBack}
              variant="outline"
              size="lg"
              disabled={isSubmitting}
            >
              <ChevronLeft size={20} />
              修正する
            </Button>
            <Button
              onClick={handleSubmit}
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  送信中...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send size={20} />
                  この内容で送信する
                </div>
              )}
            </Button>
          </div>
        </AnimatedElement>
      </div>
    )
  }

  // 入力画面
  return (
    <form ref={formRef} className="space-y-8">
      {errors.submit && (
        <AnimatedElement variants={fadeUp}>
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-center gap-2 text-red-600">
            <AlertCircle size={20} />
            <p>{errors.submit}</p>
          </div>
        </AnimatedElement>
      )}

      {/* お名前 */}
      <AnimatedElement variants={fadeUp}>
        <div id="name">
          <label htmlFor="name-input" className="block text-sm font-medium text-slate-900 mb-2">
            お名前 <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name-input"
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

      {/* 会社名・団体名 */}
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

      {/* メールアドレス */}
      <AnimatedElement variants={fadeUp}>
        <div id="email">
          <label htmlFor="email-input" className="block text-sm font-medium text-slate-900 mb-2">
            メールアドレス <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email-input"
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

      {/* 制作希望のプラン */}
      <AnimatedElement variants={fadeUp}>
        <div id="plan">
          <label className="block text-sm font-medium text-slate-900 mb-4">
            制作希望のプラン <span className="text-red-400">*</span>
          </label>
          <div className="space-y-3">
            {planOptions.map((plan) => (
              <div
                key={plan.value}
                onClick={() => handleRadioChange('plan', plan.value)}
                className={cn(
                  "border-2 rounded-lg p-4 cursor-pointer transition-all duration-200",
                  formData.plan === plan.value
                    ? "border-primary bg-primary/5"
                    : "border-gray-300 hover:border-primary/50"
                )}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    id={`plan-${plan.value}`}
                    name="plan"
                    value={plan.value}
                    checked={formData.plan === plan.value}
                    onChange={() => handleRadioChange('plan', plan.value)}
                    className="mt-1 w-4 h-4 text-primary focus:ring-primary"
                  />
                  <label htmlFor={`plan-${plan.value}`} className="flex-1 cursor-pointer">
                    <div className="font-semibold text-slate-900 flex items-center gap-2">
                      {plan.label}
                      {plan.price && <span className="text-primary">{plan.price}</span>}
                    </div>
                    {plan.description && (
                      <div className="text-sm text-slate-600 mt-1">{plan.description}</div>
                    )}
                  </label>
                </div>
              </div>
            ))}
          </div>
          {errors.plan && (
            <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
              <AlertCircle size={16} />
              {errors.plan}
            </p>
          )}
        </div>
      </AnimatedElement>

      {/* サイトで実現したいこと */}
      {formData.plan && goalOptionsByPlan[formData.plan] && (
        <AnimatedElement variants={fadeUp}>
          <div id="goal">
            <label className="block text-sm font-medium text-slate-900 mb-4">
              サイトで実現したいこと{' '}
              {formData.plan !== 'undecided' && <span className="text-red-400">*</span>}
            </label>
            <div className="space-y-3">
              {goalOptionsByPlan[formData.plan].map((goal) => (
                <div
                  key={goal.value}
                  onClick={() => handleRadioChange('goal', goal.value)}
                  className={cn(
                    "border-2 rounded-lg p-4 cursor-pointer transition-all duration-200",
                    formData.goal === goal.value
                      ? "border-primary bg-primary/5"
                      : "border-gray-300 hover:border-primary/50"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      id={`goal-${goal.value}`}
                      name="goal"
                      value={goal.value}
                      checked={formData.goal === goal.value}
                      onChange={() => handleRadioChange('goal', goal.value)}
                      className="mt-1 w-4 h-4 text-primary focus:ring-primary"
                    />
                    <label htmlFor={`goal-${goal.value}`} className="flex-1 cursor-pointer text-slate-900">
                      {goal.label}
                    </label>
                  </div>
                </div>
              ))}
            </div>
            {errors.goal && (
              <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                <AlertCircle size={16} />
                {errors.goal}
              </p>
            )}

            {/* その他の詳細入力 */}
            {formData.goal === 'other' && (
              <div className="mt-4" id="goalOther">
                <input
                  type="text"
                  name="goalOther"
                  value={formData.goalOther}
                  onChange={handleChange}
                  className={cn(
                    "w-full px-4 py-3 bg-white border-2 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200",
                    errors.goalOther ? "border-red-500" : "border-gray-300 focus:border-primary"
                  )}
                  placeholder="具体的に教えてください"
                />
                {errors.goalOther && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle size={16} />
                    {errors.goalOther}
                  </p>
                )}
              </div>
            )}
          </div>
        </AnimatedElement>
      )}

      {/* 追加希望のオプション */}
      <AnimatedElement variants={fadeUp}>
        <div>
          <label className="block text-sm font-medium text-slate-900 mb-4">
            追加希望のオプション (複数選択可)
          </label>
          <div className="space-y-2">
            {additionalOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => handleCheckboxChange('options', option.value)}
                className={cn(
                  "border-2 rounded-lg p-4 cursor-pointer transition-all duration-200",
                  formData.options.includes(option.value)
                    ? "border-primary bg-primary/5"
                    : "border-gray-300 hover:border-primary/50"
                )}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id={`option-${option.value}`}
                    checked={formData.options.includes(option.value)}
                    onChange={() => handleCheckboxChange('options', option.value)}
                    className="w-4 h-4 text-primary focus:ring-primary rounded"
                  />
                  <label htmlFor={`option-${option.value}`} className="flex-1 cursor-pointer text-slate-900">
                    {option.label} <span className="text-slate-600">({option.price})</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedElement>

      {/* デザインの雰囲気 */}
      <AnimatedElement variants={fadeUp}>
        <div>
          <label className="block text-sm font-medium text-slate-900 mb-4">
            デザインの雰囲気 (複数選択可)
          </label>
          <div className="space-y-2">
            {designStyles.map((style) => (
              <div
                key={style.value}
                onClick={() => handleDesignStyleChange(style.value)}
                className={cn(
                  "border-2 rounded-lg p-4 cursor-pointer transition-all duration-200",
                  formData.designStyle.includes(style.value)
                    ? "border-primary bg-primary/5"
                    : "border-gray-300 hover:border-primary/50",
                  style.value === 'leave-it-to-you' && "border-primary/30 bg-primary/10"
                )}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id={`style-${style.value}`}
                    checked={formData.designStyle.includes(style.value)}
                    onChange={() => handleDesignStyleChange(style.value)}
                    className="w-4 h-4 text-primary focus:ring-primary rounded"
                  />
                  <label
                    htmlFor={`style-${style.value}`}
                    className={cn(
                      "flex-1 cursor-pointer",
                      style.value === 'leave-it-to-you' ? "font-semibold text-primary" : "text-slate-900"
                    )}
                  >
                    {style.label}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedElement>

      {/* 参考にしたいサイト */}
      <AnimatedElement variants={fadeUp}>
        <div>
          <label htmlFor="referenceUrl" className="block text-sm font-medium text-slate-900 mb-2">
            参考にしたいサイト
          </label>
          <input
            type="text"
            id="referenceUrl"
            name="referenceUrl"
            value={formData.referenceUrl}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
            placeholder="参考サイトのURLがあれば教えてください"
          />
        </div>
      </AnimatedElement>

      {/* その他ご要望・補足 */}
      <AnimatedElement variants={fadeUp}>
        <div>
          <label htmlFor="otherRequests" className="block text-sm font-medium text-slate-900 mb-2">
            その他ご要望・補足
          </label>
          <textarea
            id="otherRequests"
            name="otherRequests"
            rows={5}
            value={formData.otherRequests}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200 resize-vertical"
            placeholder="その他、伝えておきたいことがあればご記入ください(任意)"
          />
        </div>
      </AnimatedElement>

      {/* プライバシーポリシーへの同意 */}
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

      {/* 送信ボタン */}
      <AnimatedElement variants={fadeUp}>
        <div className="pt-4 text-center">
          <Button
            type="button"
            onClick={handleConfirm}
            size="lg"
            className="w-full md:w-auto"
          >
            <div className="flex items-center gap-2">
              入力内容を確認する
              <ChevronRight size={20} />
            </div>
          </Button>
        </div>
      </AnimatedElement>
    </form>
  )
}
