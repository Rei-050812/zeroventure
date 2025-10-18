import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Edge Runtimeではなく、Node.js Runtimeを使用
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const resend = new Resend(process.env.RESEND_API_KEY)

const planNames: { [key: string]: string } = {
  'lp': 'LP Plan - ¥64,000',
  'portfolio': 'Portfolio Site Plan - ¥80,000',
  'recruit': 'Recruit Site Plan - ¥120,000',
  'media': 'Media Site Plan - ¥144,400',
  'corporate': 'Corporate Site Plan - ¥160,000',
  'undecided': 'まだ決めていない・相談したい'
}

const goalLabels: { [key: string]: { [key: string]: string } } = {
  lp: {
    'increase-sales': '商品・サービスの購入を増やしたい',
    'increase-inquiries': 'お問い合わせ・資料請求を増やしたい',
    'increase-registrations': 'イベント・セミナーの申し込みを増やしたい',
    'other': 'その他'
  },
  portfolio: {
    'increase-orders': '仕事の依頼を増やしたい',
    'showcase-works': '作品・実績を魅力的に見せたい',
    'establish-brand': '自分のブランドを確立したい',
    'other': 'その他'
  },
  recruit: {
    'increase-applications': '採用応募を増やしたい',
    'convey-atmosphere': '会社の雰囲気を伝えたい',
    'attract-candidates': '求職者に魅力を感じてもらいたい',
    'other': 'その他'
  },
  media: {
    'increase-traffic': '検索流入を増やしたい',
    'expand-awareness': 'ブランド認知を広げたい',
    'show-expertise': '専門性・権威性をアピールしたい',
    'other': 'その他'
  },
  corporate: {
    'increase-trust': '企業の信頼性を高めたい',
    'increase-inquiries': 'お問い合わせを増やしたい',
    'improve-brand': 'ブランドイメージを向上させたい',
    'other': 'その他'
  },
  undecided: {
    'increase-inquiries': 'お問い合わせ・資料請求を増やしたい',
    'increase-sales': '商品・サービスの購入を増やしたい',
    'increase-applications': '採用応募を増やしたい',
    'expand-awareness': 'ブランド認知を広げたい',
    'showcase-works': '作品・実績を見てもらいたい',
    'improve-trust': '信頼性・企業イメージを向上させたい',
    'other': 'その他',
    'not-decided': 'まだ決まっていない'
  }
}

const optionLabels: { [key: string]: string } = {
  'content-addition': '作品・コンテンツ追加 (¥10,000/10点)',
  'domain-server': 'ドメイン・サーバー取得代行 (¥10,000〜)',
  'support-extension': 'サポート期間延長 (¥20,000/月)',
  'additional-pages': '追加ページ制作 (¥30,000/ページ)',
  'analytics': 'Google Analytics設定 (¥30,000)',
  'animation': 'アニメーション実装 (¥50,000〜)',
  'multilingual': '多言語対応 (¥80,000〜)'
}

const designStyleLabels: { [key: string]: string } = {
  'leave-it-to-you': 'おまかせ',
  'simple-minimal': 'シンプル・ミニマル',
  'modern-sophisticated': 'モダン・洗練',
  'warm-friendly': '温かみ・親しみやすい',
  'luxury-premium': '高級感・プレミアム',
  'pop-casual': 'ポップ・カジュアル',
  'corporate-trustworthy': 'コーポレート・信頼感',
  'creative-unique': 'クリエイティブ・個性的'
}

export async function POST(request: NextRequest) {
  console.log('=== Project Request API Route Called ===')

  try {
    // APIキーの確認
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
      console.error('RESEND_API_KEY is not configured properly')
      return NextResponse.json(
        { error: 'メール送信サービスが設定されていません。管理者にお問い合わせください。' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const {
      name,
      email,
      company,
      plan,
      goal,
      goalOther,
      options,
      designStyle,
      referenceUrl,
      otherRequests
    } = body

    console.log('Project request form submission:', { name, email, plan, goal })

    // バリデーション
    if (!name || !email || !plan) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      )
    }

    // メールアドレスのバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      )
    }

    // プランが「まだ決めていない」以外の場合、目標は必須
    if (plan !== 'undecided' && !goal) {
      return NextResponse.json(
        { error: 'サイトで実現したいことを選択してください' },
        { status: 400 }
      )
    }

    // ゴールラベルの取得
    const getGoalLabel = (planValue: string, goalValue: string) => {
      if (!planValue || !goalValue) return ''
      const goals = goalLabels[planValue]
      return goals?.[goalValue] || goalValue
    }

    // 管理者向けメール本文の作成
    const adminEmailContent = `
【制作依頼フォーム】新規依頼

■ お客様情報
お名前: ${name}
メールアドレス: ${email}
会社名・屋号: ${company || '未記入'}

■ 制作内容
制作希望のプラン: ${planNames[plan] || plan}
${goal ? `サイトで実現したいこと: ${getGoalLabel(plan, goal)}` : ''}
${goal === 'other' && goalOther ? `詳細: ${goalOther}` : ''}

${options && options.length > 0 ? `■ 追加希望のオプション
${options.map((opt: string) => `・ ${optionLabels[opt] || opt}`).join('\n')}
` : ''}
${designStyle && designStyle.length > 0 ? `■ デザインの雰囲気
${designStyle.map((style: string) => `・ ${designStyleLabels[style] || style}`).join('\n')}
` : ''}
${referenceUrl ? `■ 参考にしたいサイト
${referenceUrl}
` : ''}
${otherRequests ? `■ その他ご要望・補足
${otherRequests}
` : ''}
---
※ 返信する場合は、上記のメールアドレス宛に送信してください。
    `.trim()

    // 問い合わせ者向け自動返信メール本文
    const autoReplyContent = `
${name} 様

この度は、ZEROVENTUREの制作依頼フォームをお送りいただき、誠にありがとうございます。
以下の内容で制作依頼を受け付けました。

■ お客様情報
お名前: ${name}
メールアドレス: ${email}
会社名・屋号: ${company || '未記入'}

■ 制作内容
制作希望のプラン: ${planNames[plan] || plan}
${goal ? `サイトで実現したいこと: ${getGoalLabel(plan, goal)}` : ''}
${goal === 'other' && goalOther ? `詳細: ${goalOther}` : ''}

${options && options.length > 0 ? `■ 追加希望のオプション
${options.map((opt: string) => `・ ${optionLabels[opt] || opt}`).join('\n')}
` : ''}
${designStyle && designStyle.length > 0 ? `■ デザインの雰囲気
${designStyle.map((style: string) => `・ ${designStyleLabels[style] || style}`).join('\n')}
` : ''}
${referenceUrl ? `■ 参考にしたいサイト
${referenceUrl}
` : ''}
${otherRequests ? `■ その他ご要望・補足
${otherRequests}
` : ''}
---
担当者より、ヒアリングや制作期間についてのご提案をさせていただきますので、
今しばらくお待ちくださいませ。

※ このメールは自動送信されています。
※ このメールに返信いただいても対応できかねますのでご了承ください。

ZEROVENTURE
Web: https://zero-venture.com
    `.trim()

    console.log('Attempting to send emails...')

    // 認証済みドメインからメール送信
    const fromEmail = 'ZEROVENTURE <noreply@zero-venture.com>'

    // 管理者向けメールを送信
    const adminEmail = await resend.emails.send({
      from: fromEmail,
      to: ['r-numanou@zero-venture.com'],
      replyTo: email,
      subject: `【制作依頼フォーム】${name}様より`,
      text: adminEmailContent,
    })

    console.log('Admin email sent:', adminEmail)

    // 問い合わせ者への自動返信メールを送信
    let autoReply = null
    try {
      autoReply = await resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: '【ZEROVENTURE】制作依頼を受け付けました',
        text: autoReplyContent,
      })

      console.log('Auto-reply email sent:', autoReply)
    } catch (autoReplyError) {
      console.error('Auto-reply email failed (non-critical):', autoReplyError)
      // 自動返信の失敗は致命的ではないので、処理を継続
    }

    return NextResponse.json({
      success: true,
      message: '制作依頼を受け付けました',
      adminEmail,
      autoReply
    }, { status: 200 })
  } catch (error) {
    console.error('Email sending error:', error)

    // エラーの詳細をログに記録
    if (error instanceof Error) {
      console.error('Error name:', error.name)
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }

    const errorMessage = error instanceof Error ? error.message : 'メール送信に失敗しました'
    return NextResponse.json(
      {
        error: 'メール送信に失敗しました。しばらく時間をおいて再度お試しいただくか、直接お問い合わせください。',
        details: errorMessage
      },
      { status: 500 }
    )
  }
}
