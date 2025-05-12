export interface HeroData {
  title: string
  subtitle: string
  description: string[]
}

export interface SectionData {
  title: string
  subtitle: string
  description: string
  buttonText: string
  buttonUrl: string
  imageUrl: string
  imageAlt: string
}

export interface RecruitSectionData {
  title: string
  subtitle: string
  backgroundImage: string
  engineerTitle: string
  engineerDescription: string[]
  salesTitle: string
  salesDescription: string[]
  buttonText: string
  buttonUrl: string
}

export interface HomePageData {
  hero: HeroData
  business: SectionData
  company: SectionData
  privacy: SectionData
  recruit: RecruitSectionData
}

export const homeData: HomePageData = {
  hero: {
    title: "株式会社K.I.T",
    subtitle: "(ケイアイティー)",
    description: [
      "IT、データをビジネスに活用できない企業様はいらっしゃる",
      "様、メディアが騒ぐから、どうやって、データを活用しよう",
      "よくわからない・・・",
      "そんな企業を支援します。",
    ],
  },
  business: {
    title: "事業について",
    subtitle: "business",
    description:
      "ビジネスの変化や競争力の向上を目指す企業にとって、ITシステム企画、開発、運用や情報資産（データ）の分析活用は不可欠な要素になっています。\n\n当社は企業のシステムへ貢献するためのコンサルティングから開発、保守、運用まで一気通貫で最適にプロデュースします。",
    buttonText: "View more",
    buttonUrl: "/business",
    imageUrl: "/placeholder.svg?height=300&width=400",
    imageAlt: "ビジネスミーティングの様子",
  },
  company: {
    title: "会社情報",
    subtitle: "company",
    description:
      "私たちは世界がデジタル化される一歩を担い、現代社会の抱える様々な課題を解決することを目指します。\n\nIT活用とシステム開発支援を通じて、お客様のビジネス成長を文化で支えるよう心がけます。",
    buttonText: "View more",
    buttonUrl: "/company",
    imageUrl: "/placeholder.svg?height=300&width=400",
    imageAlt: "会社オフィスの外観",
  },
  privacy: {
    title: "プライバシーポリシー",
    subtitle: "privacy policy",
    description:
      "近年は情報資産（データ）を分析し、ビジネスに活用するケースが増えてきています。\n\n当社が取り扱う個人情報に関してはプライバシーポリシーに則り、取り扱います。",
    buttonText: "View more",
    buttonUrl: "/privacy",
    imageUrl: "/placeholder.svg?height=300&width=400",
    imageAlt: "データセキュリティのイメージ",
  },
  recruit: {
    title: "採用情報",
    subtitle: "recruit",
    backgroundImage: "/placeholder.svg?height=600&width=1200",
    engineerTitle: "エンジニアの皆様へ",
    engineerDescription: [
      "新しい技術が好きな方。",
      "目標に向かって常に一緒に走める方。",
      "そして、自分の意見をしっかりと持ち、発信できる方。",
      "求めているのは技術者・コミュニケーション。",
      "少し固いかもしれませんがチャレンジしたい方歓迎ですから。",
      "そういった人材を募集しています。",
      "",
      "働く場所は自由です！クライアント次第ですが在宅（フルリモート）も可能。",
      "お問合せ前にご確認しましょう。",
      "業界標準以上にコンプライアンスを守ることを心掛けてください。",
      "当社に合わない方は3ヶ月の試用期間でチャレンジしませんか？",
    ],
    salesTitle: "営業サポートの皆様へ",
    salesDescription: [
      "営業、分析、提案などなど幅広して頂けるお仕事を探しています！",
      "現場主体が基本ですがコミュニケーションをとって業務を進めていきます。",
    ],
    buttonText: "View more",
    buttonUrl: "/recruit",
  },
}

