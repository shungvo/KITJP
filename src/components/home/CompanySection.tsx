"use client"

import React from "react"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedImage from "@/components/AnimatedImage"
import AnimatedButton from "@/components/AnimatedButton"
import SectionHeader from "@/components/SectionHeader"
import { useCompanyData } from "@/hooks/useCompanyData"

export default function CompanySection() {
  const { data, loading, error } = useCompanyData()

  if (loading || !data) {
    return (
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mx-auto mb-8"></div>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/3">
                <div className="h-40 bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>
              <div className="md:w-2/3 space-y-4">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-red-500">データの読み込み中にエラーが発生しました。</p>
        </div>
      </div>
    )
  }

  return (
    <AnimatedSection className="py-16 px-4" aria-labelledby="company-heading">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title={data.title} subtitle={data.subtitle} id="company-heading" />
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/3 order-2 md:order-1">
            <AnimatedImage
              src={data.imageUrl}
              alt={data.imageAlt}
              width={400}
              height={300}
              className="rounded-lg shadow-md"
              animation="rotateIn"
            />
          </div>
          <AnimatedSection className="md:w-2/3 order-1 md:order-2" animation="fadeUp" delay={0.1}>
            <p className="text-base leading-relaxed mb-6">
              {data.description.split("\n\n").map((paragraph, index) => (
                <React.Fragment key={index}>
                  {paragraph}
                  {index < data.description.split("\n\n").length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </React.Fragment>
              ))}
            </p>
            <AnimatedButton
              href={data.buttonUrl}
              className="inline-block bg-primary-kit dark:bg-primary-kit-dark text-white px-6 py-2 text-sm hover:bg-primary-kit-dark dark:hover:bg-primary-kit transition"
              ariaLabel={`${data.title}ページへ`}
            >
              {data.buttonText}
            </AnimatedButton>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  )
}

