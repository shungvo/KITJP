import type { MicroCMSImage } from "@/types/api";

export interface HeroData {
  fieldId: string;
  title: string;
  subtitle: string;
  description: string;
  image: MicroCMSImage[];
}

export interface SectionData {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  imageUrl: string;
  imageAlt: string;
}

export interface RecruitSectionData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  engineerTitle: string;
  engineerDescription: string[];
  salesTitle: string;
  salesDescription: string[];
  buttonText: string;
  buttonUrl: string;
}

export interface HomePageData {
  hero: HeroData;
  business: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  company: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  privacy: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  recruit: {
    title: string;
    subtitle: string;
    description: string;
  };
}

export const homeData: HomePageData = {
  hero: {
    fieldId: "hero",
    title: "株式会社K.I.T",
    subtitle: "(ケイアイティー)",
    description:
      "<p>IT、データをビジネスに活用できない企業様はいらっしゃる</p><p>様、メディアが騒ぐから、どうやって、データを活用しよう</p><p>よくわからない・・・</p><p>そんな企業を支援します。</p>",
    image: [],
  },
  business: {
    title: "事業について",
    subtitle: "business",
    description:
      "ビジネスの変化や競争力の向上を目指す企業にとって、ITシステム企画、開発、運用や情報資産（データ）の分析活用は不可欠な要素になっています。当社は企業のシステムへ貢献するためのコンサルティングから開発、保守、運用まで一気通貫で最適にプロデュースします。",
    image: "/images/business.jpg",
  },
  company: {
    title: "会社情報",
    subtitle: "company",
    description:
      "私たちは世界がデジタル化される一歩を担い、現代社会の抱える様々な課題を解決することを目指します。IT活用とシステム開発支援を通じて、お客様のビジネス成長を文化で支えるよう心がけます。",
    image: "/images/company.jpg",
  },
  privacy: {
    title: "プライバシーポリシー",
    subtitle: "privacy policy",
    description:
      "近年は情報資産（データ）を分析し、ビジネスに活用するケースが増えてきています。当社が取り扱う個人情報に関してはプライバシーポリシーに則り、取り扱います。",
    image: "/images/privacy.jpg",
  },
  recruit: {
    title: "採用情報",
    subtitle: "recruit",
    description:
      "新しい技術が好きな方。目標に向かって常に一緒に走める方。そして、自分の意見をしっかりと持ち、発信できる方。求めているのは技術者・コミュニケーション。少し固いかもしれませんがチャレンジしたい方歓迎ですから。そういった人材を募集しています。",
  },
};
