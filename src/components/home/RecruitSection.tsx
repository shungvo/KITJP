"use client";

import AnimatedButton from "@/components/AnimatedButton";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { useRecruitData } from "@/hooks/useRecruitData";
import React from "react";
import { RecruitContent } from "@/apis/HomPageContent/type";

interface RecruitSectionProps {
  data: RecruitContent;
  loading: boolean;
  error: Error | null;
}

export default function RecruitSection(props: RecruitSectionProps) {
  const { data, loading, error } = props;
  if (loading || !data) {
    return (
      <div className="py-16 px-4 bg-primary-kit-light/10 dark:bg-primary-kit-dark/10">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mx-auto mb-8"></div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
              <div className="space-y-2 mb-6">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
              </div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
              <div className="space-y-2 mb-6">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 px-4 bg-primary-kit-light/10 dark:bg-primary-kit-dark/10">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-red-500">
            データの読み込み中にエラーが発生しました。
          </p>
        </div>
      </div>
    );
  }

  return (
    <AnimatedSection
      className="py-16 px-4 relative bg-primary-kit-light/10 dark:bg-primary-kit-dark/10"
      aria-labelledby="recruit-heading"
    >
      {/* <div className="absolute inset-0 opacity-10">
        <AnimatedImage
          src={data.backgroundImage}
          alt="都市の背景"
          width={1200}
          height={600}
          className="object-cover w-full h-full"
          priority={false}
          animation="fadeIn"
        />
      </div> */}
      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionHeader
          title={data?.title}
          subtitle={data.subtitle}
          id="recruit-heading"
        />
        <AnimatedSection
          className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md"
          animation="fadeUp"
          delay={0.2}
        >
         <div dangerouslySetInnerHTML={{__html: data.description}}/>
          <div className="text-center mt-8">
            <AnimatedButton
              href={'/'}
              className="inline-block bg-primary-kit dark:bg-primary-kit-dark text-white px-6 py-2 text-sm hover:bg-primary-kit-dark dark:hover:bg-primary-kit transition"
              ariaLabel={`${data.title}ページへ`}
            >
              View more
            </AnimatedButton>
          </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
}
