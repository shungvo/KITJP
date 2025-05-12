import type { Metadata } from "next"
import MainLayout from "@/components/layouts/MainLayout"
import Hero from "@/components/Hero"
import SectionHeader from "@/components/SectionHeader"
import { getMetadata } from "@/utils/metadata"
import { breadcrumbSchema } from "@/utils/schema"
import JsonLd from "@/components/ui/JsonLd"
import ContactForm from "@/components/contact/ContactForm"
import { ContactInfo } from "@/components/contact/ContactInfo"

export const metadata: Metadata = getMetadata("contact")

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "ホーム", item: "/" },
          { name: "お問い合わせ", item: "/contact" },
        ])}
      />

      <MainLayout>
        <Hero title="お問い合わせ" subtitle="Contact" height="h-[300px]" />

        {/* Contact Form Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="お問い合わせフォーム" subtitle="Contact Form" />
            <ContactForm />
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="お問い合わせ先" subtitle="Contact Information" />
            <ContactInfo />
          </div>
        </section>
      </MainLayout>
    </>
  )
}

