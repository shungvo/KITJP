export interface MicroCMSImage {
  fieldId: string;
  imageAlt: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
}

export interface HeroContent {
  fieldId: string;
  title: string;
  subtitle: string;
  description: string;
  image: MicroCMSImage[];
}

export interface NewsContent {
  fieldId: string;
  title: string;
  date: string;
  category: string[];
}

export interface IntroductionContent {
  fieldId: string;
  title: string;
  subtitle: string;
  description: string;
  image: MicroCMSImage[];
  imagePosition: string[];
  slug: string;
}

export interface RecruitContent {
  fieldId: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface HomePageResponse {
  createdAt: string;
  updatedAt: string;
  Home: {
    fieldId: string;
    hero: HeroContent[];
    news: NewsContent[];
    introduction: IntroductionContent[];
    recruit: RecruitContent[];
  };
}
