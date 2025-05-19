import { getHomeData } from "@/apis/HomPageContent";
import ContactCTA from "@/components/ContactCTA";
import BusinessSection from "@/components/home/IntroductionSection";
import HeroSection from "@/components/home/HeroSection";
import RecruitSection from "@/components/home/RecruitSection";
import MainLayout from "@/components/layouts/MainLayout";
import NewsSection from "@/components/NewsSection";
import SectionHeader from "@/components/SectionHeader";
import JsonLd from "@/components/ui/JsonLd";
import { getMetadata } from "@/utils/metadata";
import {
  breadcrumbSchema,
  localBusinessSchema,
  organizationSchema,
} from "@/utils/schema";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata("home");

export default async function Home() {
  const { data, loading, error } = await getHomeData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error: {error?.message || "Failed to load data"}</div>;
  }

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "ホーム", item: "/" }])} />

      <MainLayout>
        <HeroSection data={data.hero} loading={loading} error={error} />
        <section className="py-16 px-4" aria-labelledby="news-heading">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="ニュース" subtitle="News" id="news-heading" />
            <NewsSection />
          </div>
        </section>

        {/* <BusinessSection
          data={data.introduction}
          loading={loading}
          error={error}
        />
        <CompanySection
          data={data.introduction}
          loading={loading}
          error={error}
        />
        <PrivacySection
          data={data.introduction}
          loading={loading}
          error={error}
        /> */}
        {data.introduction.map((item) => (
          <BusinessSection
            key={item.title}
            data={item}
            loading={loading}
            error={error}
          />
        ))}
        <RecruitSection data={data.recruit} loading={loading} error={error} />

        <ContactCTA />
      </MainLayout>
    </>
  );
}
