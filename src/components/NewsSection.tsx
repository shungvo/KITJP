"use client"

import { useNews } from "@/hooks/useNews"
import AnimatedSection from "@/components/AnimatedSection"
import Link from "next/link"
import { formatDate } from "@/utils/formatDate"

export default function NewsSection() {
  const { news, loading, error } = useNews(5) // Hiển thị tối đa 5 tin tức

  if (loading) {
    return (
      <div className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-kit"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="border-t border-gray-200 dark:border-gray-800 py-8">
        <p className="text-red-500 text-center">ニュースの読み込み中にエラーが発生しました。</p>
      </div>
    )
  }

  if (news.length === 0) {
    return (
      <div className="border-t border-gray-200 dark:border-gray-800 py-8">
        <p className="text-gray-500 dark:text-gray-400 text-center">ニュースはありません。</p>
      </div>
    )
  }

  return (
    <div className="border-t border-gray-200 dark:border-gray-800">
      {news.map((item, index) => (
        <AnimatedSection
          key={item.id}
          className="py-4 border-b border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-start"
          animation="fadeUp"
          delay={index * 0.1}
        >
          <time className="text-gray-600 dark:text-gray-400 w-24 mb-1 sm:mb-0 flex-shrink-0" dateTime={item.date}>
            {formatDate(item.date)}
          </time>
          <div>
            {item.isNew && (
              <span className="inline-block bg-red-500 text-white text-xs px-2 py-0.5 rounded mr-2 mb-1 sm:mb-0">
                NEW
              </span>
            )}
            {item.url ? (
              <Link href={item.url} className="hover:text-primary-kit dark:hover:text-primary-kit-light">
                {item.title}
              </Link>
            ) : (
              <span>{item.title}</span>
            )}
          </div>
        </AnimatedSection>
      ))}
      <div className="mt-6 text-right">
        <Link
          href="/news"
          className="text-primary-kit dark:text-primary-kit-light hover:underline text-sm inline-flex items-center"
        >
          すべてのニュースを見る
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

