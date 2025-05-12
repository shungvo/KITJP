import type { Metadata } from "next"

// Base metadata
export const baseMetadata: Metadata = {
  title: {
    default: "株式会社K.I.T | IT・データ活用で社会に貢献する",
    template: "%s | 株式会社K.I.T",
  },
  description:
    "IT、データをビジネスに活用できない企業様を支援します。株式会社K.I.Tは、システム開発、データ分析、ITコンサルティングを提供しています。",
  keywords: ["K.I.T", "IT", "システム開発", "データ分析", "ITコンサルティング", "ケイアイティー"],
  authors: [{ name: "株式会社K.I.T" }],
  creator: "株式会社K.I.T",
  publisher: "株式会社K.I.T",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.kit-inc.jp"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://www.kit-inc.jp",
    siteName: "株式会社K.I.T",
    title: "株式会社K.I.T | IT・データ活用で社会に貢献する",
    description:
      "IT、データをビジネスに活用できない企業様を支援します。株式会社K.I.Tは、システム開発、データ分析、ITコンサルティングを提供しています。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "株式会社K.I.T",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社K.I.T | IT・データ活用で社会に貢献する",
    description:
      "IT、データをビジネスに活用できない企業様を支援します。株式会社K.I.Tは、システム開発、データ分析、ITコンサルティングを提供しています。",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// Page specific metadata
export const pageMetadata: Record<string, Metadata> = {
  home: {
    title: "株式会社K.I.T | IT・データ活用で社会に貢献する",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      url: "https://www.kit-inc.jp",
    },
  },
  business: {
    title: "事業紹介",
    description:
      "株式会社K.I.Tの事業内容をご紹介します。ITコンサルティング、システム開発、データ分析・活用、システム運用・保守など、お客様のビジネス成長を支援するサービスを提供しています。",
    alternates: {
      canonical: "/business",
    },
    openGraph: {
      url: "https://www.kit-inc.jp/business",
      title: "事業紹介 | 株式会社K.I.T",
      description:
        "株式会社K.I.Tの事業内容をご紹介します。ITコンサルティング、システム開発、データ分析・活用、システム運用・保守など、お客様のビジネス成長を支援するサービスを提供しています。",
    },
  },
  company: {
    title: "会社情報",
    description:
      "株式会社K.I.Tの会社概要、企業理念、沿革などをご紹介します。私たちは、IT技術とデータ分析の力を活用して、企業や組織が直面する課題を解決し、社会全体の発展に貢献します。",
    alternates: {
      canonical: "/company",
    },
    openGraph: {
      url: "https://www.kit-inc.jp/company",
      title: "会社情報 | 株式会社K.I.T",
      description:
        "株式会社K.I.Tの会社概要、企業理念、沿革などをご紹介します。私たちは、IT技術とデータ分析の力を活用して、企業や組織が直面する課題を解決し、社会全体の発展に貢献します。",
    },
  },
  recruit: {
    title: "採用情報",
    description:
      "株式会社K.I.Tの採用情報をご紹介します。エンジニア、営業サポートなどの職種で、共に成長し、未来を創る仲間を募集しています。",
    alternates: {
      canonical: "/recruit",
    },
    openGraph: {
      url: "https://www.kit-inc.jp/recruit",
      title: "採用情報 | 株式会社K.I.T",
      description:
        "株式会社K.I.Tの採用情報をご紹介します。エンジニア、営業サポートなどの職種で、共に成長し、未来を創る仲間を募集しています。",
    },
  },
  privacy: {
    title: "プライバシーポリシー",
    description:
      "株式会社K.I.Tのプライバシーポリシーをご紹介します。当社は、お客様の個人情報保護の重要性について認識し、個人情報の保護に関する法律を遵守します。",
    alternates: {
      canonical: "/privacy",
    },
    openGraph: {
      url: "https://www.kit-inc.jp/privacy",
      title: "プライバシーポリシー | 株式会社K.I.T",
      description:
        "株式会社K.I.Tのプライバシーポリシーをご紹介します。当社は、お客様の個人情報保護の重要性について認識し、個人情報の保護に関する法律を遵守します。",
    },
  },
  contact: {
    title: "お問い合わせ",
    description:
      "株式会社K.I.Tへのお問い合わせはこちらから。サービスについて、採用について、業務提携についてなど、お気軽にお問い合わせください。",
    alternates: {
      canonical: "/contact",
    },
    openGraph: {
      url: "https://www.kit-inc.jp/contact",
      title: "お問い合わせ | 株式会社K.I.T",
      description:
        "株式会社K.I.Tへのお問い合わせはこちらから。サービスについて、採用について、業務提携についてなど、お気軽にお問い合わせください。",
    },
  },
}

// Helper function to merge base metadata with page specific metadata
export function getMetadata(page: keyof typeof pageMetadata): Metadata {
  return {
    ...baseMetadata,
    ...pageMetadata[page],
  }
}

