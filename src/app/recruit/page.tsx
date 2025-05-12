import Image from "next/image"
import type { Metadata } from "next"
import Hero from "@/components/Hero"
import SectionHeader from "@/components/SectionHeader"
import ContactCTA from "@/components/ContactCTA"
import MainLayout from "@/components/layouts/MainLayout"
import { getMetadata } from "@/utils/metadata"
import JsonLd from "@/components/ui/JsonLd"
import { breadcrumbSchema } from "@/utils/schema"

export const metadata: Metadata = getMetadata("recruit")

export default function RecruitPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "ホーム", item: "/" },
          { name: "採用情報", item: "/recruit" },
        ])}
      />

      <MainLayout>
        <Hero title="採用情報" subtitle="Recruitment" height="h-[300px]" />

        {/* Message Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="採用メッセージ" subtitle="Message" />
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-primary-kit dark:text-primary-kit-light mb-4">
                  共に成長し、未来を創る
                </h3>
                <p className="text-base leading-relaxed mb-6 dark:text-gray-300">
                  K.I.Tは、テクノロジーの力で社会に貢献することを目指す企業です。私たちは常に新しい技術やアイデアに挑戦し、お客様のビジネス成長を支援しています。
                  <br />
                  <br />
                  私たちが求めているのは、技術力だけでなく、コミュニケーション能力や問題解決能力を持ち、チームの一員として共に成長していける方です。
                  <br />
                  <br />
                  K.I.Tでは、社員一人ひとりが自分の意見を持ち、それを発信できる環境を大切にしています。あなたの才能と情熱を、私たちと共に未来のテクノロジーの発展に役立てませんか？
                </p>
              </div>
              <div className="md:w-1/3">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Team Working Together"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Job Positions Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="募集職種" subtitle="Positions" />

            <div className="space-y-8">
              {/* Engineer Position */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-green-700 dark:text-green-500 mb-4">エンジニア</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-2 dark:text-white">仕事内容</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      クライアント企業のシステム開発、保守、運用に携わっていただきます。フロントエンド、バックエンド、インフラなど、ご経験やスキルに応じた業務をお任せします。
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                      <li>Webアプリケーション開発</li>
                      <li>業務システム開発</li>
                      <li>データベース設計・構築</li>
                      <li>クラウドインフラ構築・運用</li>
                      <li>テスト・品質管理</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2 dark:text-white">求めるスキル・経験</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">【必須】</p>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1 mb-4">
                      <li>プログラミング経験（言語不問）2年以上</li>
                      <li>チームでの開発経験</li>
                      <li>コミュニケーション能力</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">【歓迎】</p>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                      <li>Java, Python, JavaScript/TypeScriptなどの開発経験</li>
                      <li>クラウドサービス（AWS, Azure, GCP）の利用経験</li>
                      <li>データベース設計・運用経験</li>
                      <li>アジャイル開発の経験</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2 dark:text-white">勤務条件</h4>
                    <ul className="space-y-2">
                      <li className="flex">
                        <span className="font-medium w-24 dark:text-gray-300">雇用形態:</span>
                        <span className="dark:text-gray-300">正社員（試用期間3ヶ月）</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-24 dark:text-gray-300">勤務地:</span>
                        <span className="dark:text-gray-300">東京本社または大阪オフィス（リモートワーク可）</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-24 dark:text-gray-300">勤務時間:</span>
                        <span className="dark:text-gray-300">9:00〜18:00（フレックスタイム制）</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-24 dark:text-gray-300">休日休暇:</span>
                        <span className="dark:text-gray-300">完全週休2日制（土日）、祝日、年末年始、有給休暇</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-24 dark:text-gray-300">給与:</span>
                        <span className="dark:text-gray-300">経験・能力を考慮の上、当社規定により決定</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sales Support Position */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-green-700 dark:text-green-500 mb-4">営業サポート</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-2 dark:text-white">仕事内容</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      営業担当者のサポートや、お客様との窓口業務、提案資料の作成などを担当していただきます。
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                      <li>クライアントとの連絡調整</li>
                      <li>提案資料・見積書の作成</li>
                      <li>契約書類の管理</li>
                      <li>営業活動の分析・レポート作成</li>
                      <li>社内システムへのデータ入力・管理</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2 dark:text-white">求めるスキル・経験</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">【必須】</p>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1 mb-4">
                      <li>基本的なPCスキル（Word, Excel, PowerPoint）</li>
                      <li>コミュニケーション能力</li>
                      <li>ビジネスマナー</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">【歓迎】</p>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                      <li>営業アシスタントの経験</li>
                      <li>IT業界での就業経験</li>
                      <li>データ分析の経験</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-2 dark:text-white">勤務条件</h4>
                    <ul className="space-y-2">
                      <li className="flex">
                        <span className="font-medium w-24 dark:text-gray-300">雇用形態:</span>
                        <span className="dark:text-gray-300">正社員（試用期間3ヶ月）</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-24 dark:text-gray-300">勤務地:</span>
                        <span className="dark:text-gray-300">東京本社または大阪オフィス（一部リモートワーク可）</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-24 dark:text-gray-300">勤務時間:</span>
                        <span className="dark:text-gray-300">9:00〜18:00（フレックスタイム制）</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-24 dark:text-gray-300">休日休暇:</span>
                        <span className="dark:text-gray-300">完全週休2日制（土日）、祝日、年末年始、有給休暇</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-24 dark:text-gray-300">給与:</span>
                        <span className="dark:text-gray-300">経験・能力を考慮の上、当社規定により決定</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="福利厚生" subtitle="Benefits" />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-kit-light/30 dark:bg-primary-kit-dark/30 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-kit dark:text-primary-kit-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium dark:text-white">各種保険・制度</h3>
                </div>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>各種社会保険完備</li>
                  <li>退職金制度</li>
                  <li>財形貯蓄制度</li>
                  <li>住宅手当</li>
                  <li>通勤手当</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-kit-light/30 dark:bg-primary-kit-dark/30 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-kit dark:text-primary-kit-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium dark:text-white">休暇・休日</h3>
                </div>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>年次有給休暇</li>
                  <li>夏季・冬季休暇</li>
                  <li>慶弔休暇</li>
                  <li>リフレッシュ休暇</li>
                  <li>育児・介護休暇</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-kit-light/30 dark:bg-primary-kit-dark/30 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-kit dark:text-primary-kit-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium dark:text-white">オフィス環境</h3>
                </div>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>フリーアドレス制</li>
                  <li>リモートワーク環境</li>
                  <li>最新IT機器の貸与</li>
                  <li>オフィスカフェ</li>
                  <li>休憩スペース</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-kit-light/30 dark:bg-primary-kit-dark/30 p-3 rounded-full mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary-kit dark:text-primary-kit-light"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium dark:text-white">教育・研修</h3>
                </div>
                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>新入社員研修</li>
                  <li>スキルアップ研修</li>
                  <li>資格取得支援</li>
                  <li>書籍購入補助</li>
                  <li>外部セミナー参加支援</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Recruitment Process Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto max-w-4xl">
            <SectionHeader title="採用フロー" subtitle="Process" />

            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary-kit-light/50 dark:bg-primary-kit-dark/50 -translate-y-1/2 z-0"></div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center relative z-10">
                  <div className="bg-primary-kit dark:bg-primary-kit-dark text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">1</span>
                  </div>
                  <h4 className="font-medium mb-2 dark:text-white">応募</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">お問い合わせフォームよりご応募ください</p>
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center relative z-10">
                  <div className="bg-primary-kit dark:bg-primary-kit-dark text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">2</span>
                  </div>
                  <h4 className="font-medium mb-2 dark:text-white">書類選考</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">1週間以内に結果をご連絡します</p>
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center relative z-10">
                  <div className="bg-primary-kit dark:bg-primary-kit-dark text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">3</span>
                  </div>
                  <h4 className="font-medium mb-2 dark:text-white">一次面接</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">オンラインまたは対面で実施</p>
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center relative z-10">
                  <div className="bg-primary-kit dark:bg-primary-kit-dark text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">4</span>
                  </div>
                  <h4 className="font-medium mb-2 dark:text-white">二次面接</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">役員面接（対面）</p>
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center relative z-10">
                  <div className="bg-primary-kit dark:bg-primary-kit-dark text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">5</span>
                  </div>
                  <h4 className="font-medium mb-2 dark:text-white">内定</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">最終結果のご連絡</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                ご不明な点がございましたら、お気軽にお問い合わせください。
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary-kit dark:bg-primary-kit-dark text-white py-3 px-6 rounded hover:bg-primary-kit-dark dark:hover:bg-primary-kit transition"
              >
                応募する
              </a>
            </div>
          </div>
        </section>

        <ContactCTA />
      </MainLayout>
    </>
  )
}

