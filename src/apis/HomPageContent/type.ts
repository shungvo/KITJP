// Base content type for common fields
interface BaseContent {
  fieldId: string;
}

// Common image type
interface MicroCMSImage {
  alt: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
}
type RichTextEditor = string;
// Hero section type
interface HeroContent extends BaseContent {
  title: string;
  subtitle: string;
  description: string;
  image: MicroCMSImage[];
}

// News item type
interface NewsContent extends BaseContent {
  title: string;
  content: string;
  publishedDate: string;
  category: string;
}

// Business section type
interface IntroductionContent extends BaseContent {
  title: string;
  subtitle: string;
  description: string;
  image: MicroCMSImage[];
  imagePosition: "left" | "right";
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
interface RecruitContent extends BaseContent {
  title: string;
  subtitle: string;
  description: RichTextEditor;
  slug: string;
}

// Combined Home Page Data Type
export interface HomePageData {
  hero: HeroContent;
  news: NewsContent[];
  introduction: IntroductionContent;
  recruit: RecruitContent;
}
