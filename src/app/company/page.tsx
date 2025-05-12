import Image from "next/image"
import type { Metadata } from "next"
import MainLayout from "@/components/layouts/MainLayout"
import Hero from "@/components/Hero"
import SectionHeader from "@/components/SectionHeader"
import ContactCTA from "@/components/ContactCTA"
import JsonLd from "@/components/ui/JsonLd"
import { getMetadata } from "@/utils/metadata"
import { breadcrumbSchema } from "@/utils/schema"

export const metadata: Metadata = getMetadata("company")

export default function CompanyPage() {
  const companySchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "株式会社K.I.T",
    alternateName: "ケイアイティー",
    url: "https://www.kit-inc.jp",
    logo: "https://www.kit-inc.jp/logo.png",
    foundingDate: "2015-04-01",
    founders: [
      {
        "@type": "Person",
        name: "山田 太郎",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "千代田区千代田1-1-1 千代田ビル 5階",
      addressLocality: "東京都",
      postalCode: "100-0001",
      addressCountry: "JP",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+81-3-1234-5678",
      contactType: "customer service",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 50,
    },
    description:
      "私たちは世界がデジタル化される一歩を担い、現代社会の抱える様々な課題を解決することを目指します。IT活用とシステム開発支援を通じて、お客様のビジネス成長を文化で支えるよう心がけます。",
  }

  return (
    <>
      <JsonLd data={companySchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "ホーム", item: "/" },
          { name: "会社情報", item: "/company" },
        ])}
      />

      <MainLayout>
        <Hero title="会社情報" subtitle="Company" height="h-[300px]" />

        {/* Company Overview Section */}
        <section className="py-16 px-4" aria-labelledby="overview-heading">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="会社概要" subtitle="Overview" id="overview-heading" />
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-2/3">
                <p className="text-base leading-relaxed mb-6 dark:text-gray-300">
                  私たちは世界がデジタル化される一歩を担い、現代社会の抱える様々な課題を解決することを目指します。
                  <br />
                  <br />
                  IT活用とシステム開発支援を通じて、お客様のビジネス成長を文化で支えるよう心がけます。
                </p>
              </div>
              <div className="md:w-1/3">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="会社オフィスの様子"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Company Philosophy Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="企業理念" subtitle="Philosophy" />

            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-primary-kit dark:text-primary-kit-light mb-2">
                  「IT・データ活用で社会に貢献する」
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Contributing to society through IT and data utilization
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2 dark:text-white">ミッション (Mission)</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    私たちは、IT技術とデータ分析の力を活用して、企業や組織が直面する課題を解決し、社会全体の発展に貢献します。
                    お客様のビジネス成長を支援し、より効率的で持続可能な未来の創造に寄与します。
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2 dark:text-white">ビジョン (Vision)</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    テクノロジーの力で人々の生活を豊かにし、企業の可能性を最大限に引き出す、信頼されるITパートナーになることを目指します。
                    常に最新の技術トレンドを追求し、革新的なソリューションを提供し続けます。
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2 dark:text-white">バリュー (Values)</h4>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                    <li>
                      <span className="font-medium">誠実さ</span> -
                      常にお客様の利益を第一に考え、透明性のある関係を構築します。
                    </li>
                    <li>
                      <span className="font-medium">革新</span> -
                      新しい技術やアイデアに積極的に挑戦し、常に進化し続けます。
                    </li>
                    <li>
                      <span className="font-medium">品質</span> - 妥協のない品質と信頼性を提供することを約束します。
                    </li>
                    <li>
                      <span className="font-medium">協働</span> -
                      チームワークとオープンなコミュニケーションを大切にします。
                    </li>
                    <li>
                      <span className="font-medium">成長</span> - 個人とチームの継続的な成長と学習を奨励します。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Details Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="会社概要" subtitle="Company Details" />

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden">
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-6 bg-gray-50 dark:bg-gray-800 w-1/3 font-medium dark:text-white">
                      会社名
                    </th>
                    <td className="py-4 px-6 dark:text-gray-300">株式会社K.I.T（ケイアイティー）</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-6 bg-gray-50 dark:bg-gray-800 font-medium dark:text-white">
                      設立
                    </th>
                    <td className="py-4 px-6 dark:text-gray-300">2015年4月1日</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-6 bg-gray-50 dark:bg-gray-800 font-medium dark:text-white">
                      資本金
                    </th>
                    <td className="py-4 px-6 dark:text-gray-300">1,000万円</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-6 bg-gray-50 dark:bg-gray-800 font-medium dark:text-white">
                      代表取締役
                    </th>
                    <td className="py-4 px-6 dark:text-gray-300">紙田拓弥</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-6 bg-gray-50 dark:bg-gray-800 font-medium dark:text-white">
                      事業内容
                    </th>
                    <td className="py-4 px-6 dark:text-gray-300">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>ITコンサルティング</li>
                        <li>システム開発</li>
                        <li>データ分析・活用</li>
                        <li>システム運用・保守</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-6 bg-gray-50 dark:bg-gray-800 font-medium dark:text-white">
                      従業員数
                    </th>
                    <td className="py-4 px-6 dark:text-gray-300">50名（2023年12月現在）</td>
                  </tr>
                  <tr>
                    <th className="text-left py-4 px-6 bg-gray-50 dark:bg-gray-800 font-medium dark:text-white">
                      取引先
                    </th>
                    <td className="py-4 px-6 dark:text-gray-300">大手製造業、小売業、サービス業など多数</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Office Locations Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="事業所" subtitle="Offices" />

            <div className="grid md:grid-cols-2 gap-8">
              {/* Head Office */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-4 text-primary-kit dark:text-primary-kit-light">本社</h3>
                <div className="mb-4">
                  <p className="text-gray-700 dark:text-gray-300">〒150-0001</p>
                  <p className="text-gray-700 dark:text-gray-300">東京都渋谷区神宮前3-3-13</p>
                  <p className="text-gray-700 dark:text-gray-300">松岡ビル401</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">E-mail: info@kit-inc.jp</p>
                </div>
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3776176865594!2d139.70485487677225!3d35.67050237259805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca3c5ed84c1%3A0x7c3ee723c6d30c58!2z5p2x5Lqs6YO95riL6LC35Yy65aGp5a6u5YmN77yT5LiB55uu77yT4oiS77yR77yT!5e0!3m2!1sja!2sjp!4v1713879600000!5m2!1sja!2sjp"
                    width="400"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Head Office Map"
                    className="w-full h-full object-cover"
                  ></iframe>
                </div>
              </div>

              {/* Osaka Office */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-4 text-primary-kit dark:text-primary-kit-light">大阪オフィス</h3>
                <div className="mb-4">
                  <p className="text-gray-700 dark:text-gray-300">〒530-0001</p>
                  <p className="text-gray-700 dark:text-gray-300">大阪府大阪市北区梅田1-1-1</p>
                  <p className="text-gray-700 dark:text-gray-300">大阪ビル 3階</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">TEL: 06-1234-5678</p>
                  <p className="text-gray-700 dark:text-gray-300">FAX: 06-1234-5679</p>
                </div>
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Osaka Office Map"
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Organization Structure Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="組織体制" subtitle="Organization" />

            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm">
              <div className="max-w-2xl mx-auto">
                {/* Organization Chart */}
                <div className="relative">
                  {/* CEO */}
                  <div className="bg-primary-kit dark:bg-primary-kit-dark text-white p-4 rounded-lg text-center mb-8 max-w-xs mx-auto">
                    <h4 className="font-medium">代表取締役</h4>
                    <p className="text-sm">CEO</p>
                  </div>

                  {/* Vertical Line */}
                  <div className="absolute left-1/2 top-[72px] w-0.5 h-8 bg-gray-300 dark:bg-gray-700 -ml-0.5"></div>

                  {/* Departments */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg text-center">
                      <h4 className="font-medium text-blue-800 dark:text-blue-200">営業部</h4>
                      <p className="text-sm text-blue-600 dark:text-blue-300">Sales</p>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg text-center">
                      <h4 className="font-medium text-blue-800 dark:text-blue-200">技術部</h4>
                      <p className="text-sm text-blue-600 dark:text-blue-300">Engineering</p>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg text-center">
                      <h4 className="font-medium text-blue-800 dark:text-blue-200">管理部</h4>
                      <p className="text-sm text-blue-600 dark:text-blue-300">Administration</p>
                    </div>
                  </div>

                  {/* Vertical Lines to Teams */}
                  <div className="grid grid-cols-3 gap-4 mb-2">
                    <div className="flex justify-center">
                      <div className="w-0.5 h-8 bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-0.5 h-8 bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-0.5 h-8 bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                  </div>

                  {/* Teams */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-center text-sm">
                        <p className="font-medium dark:text-gray-300">営業チーム</p>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-center text-sm">
                        <p className="font-medium dark:text-gray-300">マーケティングチーム</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-center text-sm">
                        <p className="font-medium dark:text-gray-300">開発チーム</p>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-center text-sm">
                        <p className="font-medium dark:text-gray-300">インフラチーム</p>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-center text-sm">
                        <p className="font-medium dark:text-gray-300">データ分析チーム</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-center text-sm">
                        <p className="font-medium dark:text-gray-300">人事チーム</p>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-center text-sm">
                        <p className="font-medium dark:text-gray-300">財務チーム</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="沿革" subtitle="History" />

            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm">
              <div className="relative border-l-2 border-primary-kit dark:border-primary-kit-dark pl-8 ml-4 space-y-10">
                {/* 2015 */}
                <div className="relative">
                  <div className="absolute -left-[42px] top-0 w-8 h-8 bg-primary-kit dark:bg-primary-kit-dark rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white dark:bg-gray-800 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">2015年</h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="text-gray-600 dark:text-gray-400 w-16 flex-shrink-0">4月</span>
                      <span className="dark:text-gray-300">株式会社K.I.T設立</span>
                    </li>
                    <li className="flex">
                      <span className="text-gray-600 dark:text-gray-400 w-16 flex-shrink-0">6月</span>
                      <span className="dark:text-gray-300">東京本社オフィス開設</span>
                    </li>
                    <li className="flex">
                      <span className="text-gray-600 dark:text-gray-400 w-16 flex-shrink-0">10月</span>
                      <span className="dark:text-gray-300">初の大型システム開発プロジェクト受注</span>
                    </li>
                  </ul>
                </div>

                {/* 2018 */}
                <div className="relative">
                  <div className="absolute -left-[42px] top-0 w-8 h-8 bg-primary-kit dark:bg-primary-kit-dark rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white dark:bg-gray-800 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">2018年</h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="text-gray-600 dark:text-gray-400 w-16 flex-shrink-0">3月</span>
                      <span className="dark:text-gray-300">資本金を1,000万円に増資</span>
                    </li>
                    <li className="flex">
                      <span className="text-gray-600 dark:text-gray-400 w-16 flex-shrink-0">7月</span>
                      <span className="dark:text-gray-300">大阪オフィス開設</span>
                    </li>
                    <li className="flex">
                      <span className="text-gray-600 dark:text-gray-400 w-16 flex-shrink-0">12月</span>
                      <span className="dark:text-gray-300">従業員数30名達成</span>
                    </li>
                  </ul>
                </div>

                {/* 2021 */}
                <div className="relative">
                  <div className="absolute -left-[42px] top-0 w-8 h-8 bg-primary-kit dark:bg-primary-kit-dark rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white dark:bg-gray-800 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">2021年</h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="text-gray-600 dark:text-gray-400 w-16 flex-shrink-0">2月</span>
                      <span className="dark:text-gray-300">データ分析部門設立</span>
                    </li>
                    <li className="flex">
                      <span className="text-gray-600 dark:text-gray-400 w-16 flex-shrink-0">5月</span>
                      <span className="dark:text-gray-300">クラウドサービス事業開始</span>
                    </li>
                    <li className="flex">
                      <span className="text-gray-600 dark:text-gray-400 w-16 flex-shrink-0">11月</span>
                      <span className="dark:text-gray-300">IT業界優良企業賞受賞</span>
                    </li>
                  </ul>
                </div>

                {/* 2023 */}
                <div className="relative">
                  <div className="absolute -left-[42px] top-0 w-8 h-8 bg-primary-kit dark:bg-primary-kit-dark rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white dark:bg-gray-800 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">2023年</h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="text-gray-600 dark:text-gray-400 w-16 flex-shrink-0">4月</span>
                      <span className="dark:text-gray-300">創立8周年</span>
                    </li>
                    <li className="flex">
                      <span className="text-gray-600 dark:text-gray-400 w-16 flex-shrink-0">8月</span>
                      <span className="dark:text-gray-300">従業員数50名達成</span>
                    </li>
                    <li className="flex">
                      <span className="text-gray-600 dark:text-gray-400 w-16 flex-shrink-0">12月</span>
                      <span className="dark:text-gray-300">コーポレートサイトリニューアル</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </MainLayout>
    </>
  )
}

