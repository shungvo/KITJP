// Common types
export interface MicroCMSImage {
  url: string;
  alt: string;
}

// Hero Content Type
export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  image: MicroCMSImage;
}

// News Content Type
export interface NewsContent {
  title: string;
  content: string;
  date: string;
  image: MicroCMSImage;
  category: string;
}

// Business Content Type
export interface BusinessFeature {
  title: string;
  description: string;
}

export interface BusinessContent {
  title: string;
  description: string;
  image: MicroCMSImage;
  features: BusinessFeature[];
}

// Company Content Type
export interface CompanyValue {
  title: string;
  description: string;
}

export interface CompanyContent {
  title: string;
  description: string;
  mission: string;
  vision: string;
  values: CompanyValue[];
}

// Privacy Content Type
export interface PrivacyContent {
  title: string;
  content: string;
  lastUpdated: string;
}

// Recruit Content Type
export interface RecruitPosition {
  title: string;
  description: string;
  requirements: string[];
}

export interface RecruitContent {
  title: string;
  description: string;
  positions: RecruitPosition[];
}

// Contact Content Type
export interface ContactContent {
  title: string;
  description: string;
  email: string;
  phone: string;
  address: string;
}

// Combined Home Page Data Type
export interface HomePageData {
  hero: HeroContent;
  news: NewsContent[];
  business: BusinessContent;
  company: CompanyContent;
  privacy: PrivacyContent;
  recruit: RecruitContent;
  contact: ContactContent;
}
