// Base content type for common fields
interface BaseContent {
  fieldId: string;
}

// Common image type
export interface MicroCMSImage {
  fieldId: string;
  imageAlt: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
}
type RichTextEditor = string;
// Hero section type
export interface HeroContent {
  fieldId: string;
  title: string;
  subtitle: string;
  description: string;
  image: MicroCMSImage[];
}

// News item type
export interface NewsContent {
  fieldId: string;
  title: string;
  date: string;
  category: string[];
}

// Business section type
export interface IntroductionContent {
  fieldId: string;
  title: string;
  subtitle: string;
  description: string;
  image: MicroCMSImage[];
  imagePosition: string[];
  slug: string;
}

// // Company section type
// interface CompanyContent extends BaseContent {
//   title: string;
//   subtitle: string;
//   description: string;
//   image: MicroCMSImage;
// }

// // Privacy section type
// interface PrivacyContent extends BaseContent {
//   title: string;
//   subtitle: string;
//   description: string;
//   image: MicroCMSImage;
// }

// Recruit section type
export interface RecruitContent {
  fieldId: string;
  title: string;
  subtitle: string;
  description: string;
}

// Combined Home Page Data Type
export interface HomePageResponse {
  createdAt: string;
  updatedAt: string;
  Home: HomePageData;
}

export interface HomePageData {
  fieldId: string;
  hero: HeroContent;
  news: NewsContent[];
  introduction: IntroductionContent[];
  recruit: RecruitContent;
}
