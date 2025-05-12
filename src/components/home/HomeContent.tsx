"use client"
import { organizationSchema, localBusinessSchema, breadcrumbSchema } from "@/utils/schema"

// Import client components
import MainLayout from "@/components/layouts/MainLayout"
import SectionHeader from "@/components/SectionHeader"
import HeroSection from "@/components/home/HeroSection"
import NewsSection from "@/components/NewsSection"
import BusinessSection from "@/components/home/BusinessSection"
import CompanySection from "@/components/home/CompanySection"
import PrivacySection from "@/components/home/PrivacySection"
import RecruitSection from "@/components/home/RecruitSection"
import ContactCTA from "@/components/ContactCTA"
import JsonLd from "@/components/ui/JsonLd"

export default function HomeContent() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema([{ name: "ホーム", item: "/" }])} />

      <MainLayout>
        <HeroSection />

        <section className="py-16 px-4" aria-labelledby="news-heading">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="ニュース" subtitle="News" id="news-heading" />
            <NewsSection />
          </div>
        </section>

        <BusinessSection />
        <CompanySection />
        <PrivacySection />
        <RecruitSection />

        <ContactCTA />
      </MainLayout>
    </>
  )
}

