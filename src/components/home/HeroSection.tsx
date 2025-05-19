"use client";
import { HeroContent } from "@/apis/HomPageContent/type";
import Hero from "@/components/Hero";
import { useHeroData } from "@/hooks/useHeroData";

interface HeroSectionProps {
  data: HeroContent;
  loading: boolean;
  error: Error | null;
}

export default function HeroSection(props: HeroSectionProps) {
  const { data, loading, error } = props;

  if (loading || !data) {
    return (
      <div className="h-[500px] bg-gradient-to-r from-primary-kit-light to-primary-kit dark:from-primary-kit-dark dark:to-primary-kit flex items-center justify-center">
        <div className="animate-pulse bg-white/20 rounded-lg h-40 w-80"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[500px] bg-gradient-to-r from-primary-kit-light to-primary-kit dark:from-primary-kit-dark dark:to-primary-kit flex items-center justify-center">
        <div className="text-white text-center p-4">
          <p>データの読み込み中にエラーが発生しました。</p>
          <p>後でもう一度お試しください。</p>
        </div>
      </div>
    );
  }

  return (
    <Hero
      title={data.title}
      subtitle={data.subtitle}
      description={
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
      }
      image={data.image[0]?.image.url}
    />
  );
}
