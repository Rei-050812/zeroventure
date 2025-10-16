import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Edge Runtimeではなく、Node.js Runtimeを使用
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// デバッグ用ログ
console.log('API Route loaded, RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY)

const resend = new Resend(process.env.RESEND_API_KEY)

const planNames: { [key: string]: string } = {
  'lp': 'LP Plan',
  'portfolio': 'Portfolio Site Plan',
  'recruit': 'Recruit Site Plan',
  'media': 'Media Site Plan',
  'corporate': 'Corporate Site Plan'
}

export async function POST(request: NextRequest) {
  console.log('=== Contact API Route Called ===')
  console.log('Environment check:', {
    hasResendKey: !!process.env.RESEND_API_KEY,
    keyPrefix: process.env.RESEND_API_KEY?.substring(0, 5)
  })

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
    const { name, email, company, plan, message } = body

    console.log('Contact form submission:', { name, email, company, plan })

    // バリデーション
    if (!name || !email || !message) {
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

    // 管理者向けメール本文の作成
    const adminEmailContent = `
【新規お問い合わせ】

■ お問い合わせ者情報
お名前: ${name}
メールアドレス: ${email}
会社名・団体名: ${company || '未記入'}
選択プラン: ${plan ? planNames[plan] || plan : '未選択'}

■ お問い合わせ内容
${message}

---
※ 返信する場合は、上記のメールアドレス宛に送信してください。
    `.trim()

    // 問い合わせ者向け自動返信メール本文
    const autoReplyContent = `
${name} 様

この度は、ZEROVENTUREへお問い合わせいただき、誠にありがとうございます。
以下の内容でお問い合わせを受け付けました。

■ お問い合わせ内容
お名前: ${name}
メールアドレス: ${email}
会社名・団体名: ${company || '未記入'}
選択プラン: ${plan ? planNames[plan] || plan : '未選択'}

お問い合わせ内容:
${message}

---
担当者より改めてご連絡させていただきますので、今しばらくお待ちくださいませ。

※ このメールは自動送信されています。
※ このメールに返信いただいても対応できかねますのでご了承ください。

ZEROVENTURE
Web: https://zero-venture.com
    `.trim()

    console.log('Attempting to send emails...')

    // Resendのテストメールアドレスを使用（ドメイン認証不要）
    // 注意: onboarding@resend.dev は管理者メールアドレスにのみ送信可能
    const fromEmail = 'onboarding@resend.dev'

    console.log('Using from email:', fromEmail)
    console.log('Note: Using Resend test mode - only admin email will be sent')

    // 管理者向けメールを送信（テストモードでは確実に送信可能）
    const adminEmail = await resend.emails.send({
      from: fromEmail,
      to: ['r-numanou@zero-venture.com'],
      replyTo: email,
      subject: `【お問い合わせ】${name}様より`,
      text: adminEmailContent,
    })

    console.log('Admin email sent:', adminEmail)

    // テストモードでは顧客への自動返信は送信されないため、スキップ
    console.log('Auto-reply skipped in test mode (Resend limitation without domain verification)')

    // 注意: ドメイン認証を完了すると、顧客への自動返信も送信可能になります
    let autoReply = null

    return NextResponse.json({
      success: true,
      message: 'お問い合わせを受け付けました',
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
