import Image from "next/image"
import type { Metadata } from "next"
import Hero from "@/components/Hero"
import SectionHeader from "@/components/SectionHeader"
import ContactCTA from "@/components/ContactCTA"
import JsonLd from "@/components/ui/JsonLd"
import { getMetadata } from "@/utils/metadata"
import { breadcrumbSchema } from "@/utils/schema"
import MainLayout from "@/components/layouts/MainLayout"

export const metadata: Metadata = getMetadata("business")

export default function BusinessPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ITコンサルティング・システム開発",
    provider: {
      "@type": "Organization",
      name: "株式会社K.I.T",
    },
    description:
      "ビジネスの変化や競争力の向上を目指す企業にとって、ITシステム企画、開発、運用や情報資産（データ）の分析活用は不可欠な要素になっています。当社は企業のシステムへ貢献するためのコンサルティングから開発、保守、運用まで一気通貫で最適にプロデュースします。",
    serviceType: ["ITコンサルティング", "システム開発", "データ分析", "システム運用・保守"],
    url: "https://www.kit-inc.jp/business",
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "ホーム", item: "/" },
          { name: "事業紹介", item: "/business" },
        ])}
      />

      <MainLayout>
        <Hero title="事業紹介" subtitle="Business" height="h-[300px]" />

        {/* Overview Section */}
        <section className="py-16 px-4" aria-labelledby="overview-heading">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="事業概要" subtitle="Overview" id="overview-heading" />
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-2/3">
                <p className="text-base leading-relaxed mb-6 dark:text-gray-300">
                  ビジネスの変化や競争力の向上を目指す企業にとって、ITシステム企画、開発、運用や情報資産（データ）の分析活用は不可欠な要素になっています。
                  <br />
                  <br />
                  当社は企業のシステムへ貢献するためのコンサルティングから開発、保守、運用まで一気通貫で最適にプロデュースします。
                </p>
              </div>
              <div className="md:w-1/3">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="ビジネスコンサルティングの様子"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800" aria-labelledby="services-heading">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="サービス内容" subtitle="Services" id="services-heading" />

            <div className="grid md:grid-cols-2 gap-8">
              {/* Service 1 */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-kit-light/30 dark:bg-primary-kit-dark/30 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-kit dark:text-primary-kit-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium dark:text-white">ITコンサルティング</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  企業のIT戦略立案から実行までサポートします。業務効率化、コスト削減、競争力強化のためのIT活用方法を提案します。
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-kit-light/30 dark:bg-primary-kit-dark/30 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-kit dark:text-primary-kit-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium dark:text-white">システム開発</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  お客様のニーズに合わせたカスタムシステムの設計・開発を行います。Webアプリケーション、業務システム、モバイルアプリなど幅広く対応します。
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-kit-light/30 dark:bg-primary-kit-dark/30 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-kit dark:text-primary-kit-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium dark:text-white">データ分析・活用</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  企業が持つデータを分析し、ビジネス戦略に活かすためのサポートを提供します。データの収集、整理、分析、可視化までトータルでサポートします。
                </p>
              </div>

              {/* Service 4 */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-kit-light/30 dark:bg-primary-kit-dark/30 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-kit dark:text-primary-kit-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium dark:text-white">システム運用・保守</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  開発したシステムの安定稼働をサポートします。定期的なメンテナンス、トラブル対応、セキュリティ対策など、システムのライフサイクル全体をサポートします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 px-4" aria-labelledby="case-studies-heading">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="導入事例" subtitle="Case Studies" id="case-studies-heading" />

            <div className="space-y-8">
              {/* Case Study 1 */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-medium mb-4 dark:text-white">製造業A社様</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="製造業の導入事例"
                      width={300}
                      height={200}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      生産管理システムの刷新により、生産効率が30%向上。データの一元管理により意思決定のスピードが大幅に改善されました。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded">
                        生産管理システム
                      </span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded">
                        データ分析
                      </span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded">
                        業務効率化
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-medium mb-4 dark:text-white">小売業B社様</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="小売業の導入事例"
                      width={300}
                      height={200}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      顧客データ分析システムの導入により、ターゲットマーケティングの精度が向上。売上が前年比20%増加しました。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded">
                        データ分析
                      </span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded">
                        マーケティング支援
                      </span>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded">
                        売上向上
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800" aria-labelledby="technology-heading">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="技術スタック" subtitle="Technology" id="technology-heading" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm text-center">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <h4 className="font-medium dark:text-white">クラウド</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">AWS, Azure, GCP</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm text-center">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h4 className="font-medium dark:text-white">開発言語</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Java, Python, JavaScript</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm text-center">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <h4 className="font-medium dark:text-white">データベース</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">MySQL, PostgreSQL, MongoDB</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm text-center">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h4 className="font-medium dark:text-white">分析ツール</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Tableau, Power BI, Python</p>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </MainLayout>
    </>
  )
}

