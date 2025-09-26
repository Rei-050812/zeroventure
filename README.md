# ZEROVENTURE

ベンチャー企業向けのブランディング・WEB制作を専門とする制作会社のコーポレートサイト

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Rei-050812/zeroventure)

## 🚀 プロジェクト概要

ZEROVENTUREは、ベンチャー企業の事業成長をサポートするWEB制作サービスのコーポレートサイトです。
LP制作、コーポレートサイト制作を中心に、ブランディングから運用まで一貫してサポートします。

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **アニメーション**: Framer Motion
- **CMS**: Sanity
- **フォント**: Noto Sans JP
- **アイコン**: Lucide React
- **デプロイ**: Vercel
- **分析**: Google Analytics 4

## ✨ 主要機能

### 🎨 デザイン・UI
- レスポンシブデザイン (モバイルファースト)
- ダークテーマベース (#000000 背景, #4cc9f0 アクセント)
- アニメーション制御 (prefers-reduced-motion 対応)
- アクセシビリティ準拠 (WCAG 2.1)

### 📱 ページ構成
- **トップページ**: ヒーロー、サービス、実績、料金、最新記事
- **制作実績**: 一覧・詳細ページ (フィルタリング機能)
- **お問い合わせ**: バリデーション付きフォーム
- **ブログ・お知らせ**: 投稿一覧・詳細 (今後実装)

### 🎭 アニメーション
- **原則**: 速い (200-300ms) × 上品
- **ライブラリ**: Framer Motion
- **プリセット**: fadeUp, fade, scaleIn, containerStagger
- **アクセシビリティ**: システム設定・サイト内トグル対応

### 🔍 SEO・パフォーマンス
- 動的メタデータ・OGP生成
- JSON-LD 構造化データ
- サイトマップ・robots.txt 自動生成
- 画像最適化 (Next.js Image)
- Core Web Vitals 最適化

## 🛠️ 開発環境セットアップ

### 1. リポジトリクローン
```bash
git clone https://github.com/Rei-050812/zeroventure.git
cd zeroventure
```

### 2. 依存関係インストール
```bash
npm install
```

### 3. 環境変数設定
`.env.local`ファイルを作成：
```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=xgwvet7h
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here

# Google Analytics (オプション)
NEXT_PUBLIC_GA_ID=your_ga_id_here
```

### 4. Sanity CORS設定
1. https://www.sanity.io/manage にアクセス
2. ZEROVENTUREプロジェクトを選択
3. API → CORS Origins で以下を追加：
   - `http://localhost:3000`
   - `http://localhost:3004`
   - `https://yourdomain.com` (本番URL)

### 5. 開発サーバー起動
```bash
npm run dev
```

サーバーが起動したら以下にアクセス：
- **メインサイト**: http://localhost:3004
- **Sanity Studio**: http://localhost:3004/studio

## 📋 利用可能なスクリプト

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動
npm run start

# ESLint実行
npm run lint

# Sanity Studio起動
npm run sanity:dev

# Sanity Studioビルド
npm run sanity:build

# Sanity Studioデプロイ
npm run sanity:deploy
```

## 🔧 重要な設定情報

### Sanity設定
- **プロジェクトID**: `xgwvet7h`
- **データセット**: `production`
- **Studio URL**: `/studio`

### コンテンツタイプ
- **Work**: 制作実績
- **Post**: ブログ記事
- **News**: お知らせ
- **Category**: カテゴリ
- **Tag**: タグ

## 📊 現在の進捗状況

### ✅ 完了済み
- [x] プロジェクト初期セットアップ
- [x] 基本レイアウト・デザイン実装
- [x] レスポンシブ対応
- [x] アニメーション実装
- [x] Sanity CMS統合
- [x] エラー修正完了
- [x] アクセシビリティ基盤
- [x] SEO最適化

### 🔄 今後の予定
- [ ] Sanityコンテンツ作成
- [ ] 本番環境デプロイ
- [ ] パフォーマンス最適化

## 🐛 トラブルシューティング

### よくある問題

**1. CORS Error**
- Sanity管理画面でCORS設定を確認
- 開発用URLが正しく設定されているか確認

**2. ポート競合**
- デフォルト3000番ポートが使用中の場合、自動で3004番等に変更

**3. 環境変数エラー**
- `.env.local`ファイルが正しく作成されているか確認

## 🚀 デプロイ手順

### Vercelデプロイ (推奨)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Rei-050812/zeroventure)

1. Vercelアカウントでリポジトリ連携
2. 環境変数を設定
3. 自動デプロイ設定完了

### 環境変数 (本番)
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=xgwvet7h
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_production_token
NEXT_PUBLIC_GA_ID=your_ga_id
```

## 📁 プロジェクト構造

```
zeroventure/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── contact/           # お問い合わせページ
│   │   ├── works/             # 制作実績ページ
│   │   ├── studio/            # Sanity Studio
│   │   └── test/              # アクセシビリティテスト
│   ├── components/            # Reactコンポーネント
│   │   ├── layout/            # レイアウトコンポーネント
│   │   ├── pages/             # ページコンポーネント
│   │   ├── sections/          # セクションコンポーネント
│   │   └── ui/                # UIコンポーネント
│   ├── hooks/                 # カスタムフック
│   ├── lib/                   # ユーティリティ関数
│   ├── providers/             # Context Provider
│   └── types/                 # TypeScript型定義
├── sanity/                    # Sanity設定
└── public/                    # 静的ファイル
```

## 📝 開発ガイドライン

### コードスタイル
- TypeScript strict mode使用
- ESLint + Prettier設定済み
- Tailwind CSS利用推奨

### コンポーネント設計
- ディレクトリ別に機能分離
- `'use client'`の適切な使用
- アクセシビリティ考慮

### アニメーション
- `prefers-reduced-motion`対応必須
- パフォーマンス考慮した実装

## 🤝 貢献方法

1. フォークしてブランチ作成
2. 変更を実装
3. プルリクエスト作成

## 📞 サポート

- **バグ報告**: [GitHub Issues](https://github.com/Rei-050812/zeroventure/issues)
- **機能要望**: [GitHub Discussions](https://github.com/Rei-050812/zeroventure/discussions)
- **技術相談**: Claude Code

## 📄 ライセンス

このプロジェクトはプライベートリポジトリです。

---

**ZEROVENTURE** - ゼロから始めるベンチャーのためのWEB制作

**最終更新**: 2025年9月26日
**作成者**: Claude Code
**バージョン**: 1.0.0

© 2024 ZEROVENTURE. All rights reserved.
