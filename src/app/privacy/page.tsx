import type { Metadata } from "next"
import MainLayout from "@/components/layouts/MainLayout"
import Hero from "@/components/Hero"
import ContactCTA from "@/components/ContactCTA"
import { getMetadata } from "@/utils/metadata"
import JsonLd from "@/components/ui/JsonLd"
import { breadcrumbSchema } from "@/utils/schema"

export const metadata: Metadata = getMetadata("privacy")

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "ホーム", item: "/" },
          { name: "プライバシーポリシー", item: "/privacy" },
        ])}
      />

      <MainLayout>
        <Hero title="プライバシーポリシー" subtitle="Privacy Policy" height="h-[300px]" />

        {/* Privacy Policy Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="prose dark:prose-invert max-w-none">
                <p className="mb-6 dark:text-gray-300">
                  株式会社K.I.T（以下、「当社」といいます。）は、お客様の個人情報保護の重要性について認識し、個人情報の保護に関する法律（以下、「個人情報保護法」といいます。）を遵守すると共に、以下のプライバシーポリシー（以下、「本ポリシー」といいます。）に従い、適切な取扱い及び保護に努めます。
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 dark:text-white">1. 個人情報の定義</h3>
                <p className="mb-6 dark:text-gray-300">
                  本ポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます。）、もしくは個人識別符号が含まれる情報を意味するものとします。
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 dark:text-white">2. 個人情報の収集方法</h3>
                <p className="mb-6 dark:text-gray-300">
                  当社は、お客様が当社のサービスを利用する際に、氏名、生年月日、住所、電話番号、メールアドレス、職業、勤務先等、お客様の個人情報をお尋ねすることがあります。また、お客様と当社との取引等に関する情報（お申込み・契約日、取引金額等）、お客様の当社サービスの利用状況等を収集することがあります。
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 dark:text-white">3. 個人情報の利用目的</h3>
                <p className="mb-4 dark:text-gray-300">
                  当社は、お客様から収集した個人情報を、以下の目的で利用いたします。
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6 dark:text-gray-300">
                  <li>当社サービスの提供・運営のため</li>
                  <li>お客様からのお問い合わせに回答するため</li>
                  <li>お客様に対して、当社のサービスに関するご案内、お知らせ等を送付するため</li>
                  <li>当社サービスの改善、新サービスの開発等に役立てるため</li>
                  <li>当社サービスの利用規約に違反する行為に対応するため</li>
                  <li>当社サービスに関連して、個人を識別できない形式に加工した統計データを作成するため</li>
                  <li>上記の利用目的に付随する目的</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 dark:text-white">4. 個人情報の第三者提供</h3>
                <p className="mb-6 dark:text-gray-300">
                  当社は、法令に定める場合を除き、あらかじめお客様の同意を得ないで、個人情報を第三者に提供しません。ただし、以下の場合は、関係法令に反しない範囲で、お客様の同意なく個人情報を提供することがあります。
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6 dark:text-gray-300">
                  <li>法令に基づく場合</li>
                  <li>
                    人の生命、身体または財産の保護のために必要がある場合であって、お客様の同意を得ることが困難であるとき
                  </li>
                  <li>
                    公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、お客様の同意を得ることが困難であるとき
                  </li>
                  <li>
                    国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、お客様の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 dark:text-white">5. 個人情報の安全管理</h3>
                <p className="mb-6 dark:text-gray-300">
                  当社は、個人情報の紛失、破壊、改ざん及び漏洩などのリスクに対して、個人情報の安全管理が図られるよう、当社の従業員に対し、必要かつ適切な監督を行います。また、当社は、個人情報の取扱いの全部または一部を委託する場合は、委託先において個人情報の安全管理が図られるよう、必要かつ適切な監督を行います。
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 dark:text-white">6. 個人情報の開示・訂正・利用停止等</h3>
                <p className="mb-6 dark:text-gray-300">
                  当社は、お客様から、個人情報保護法の定めに基づき個人情報の開示・訂正・利用停止等の請求があった場合には、本人確認の上、個人情報保護法の定めに従い、速やかに対応いたします。
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 dark:text-white">7. Cookie（クッキー）等の使用について</h3>
                <p className="mb-6 dark:text-gray-300">
                  当社のウェブサイトでは、お客様が当社のウェブサイトを利用する際の利便性の向上、セキュリティの確保等を目的として、Cookie等を使用することがあります。お客様は、ブラウザの設定により、Cookieの受け取りを拒否することができますが、その場合、当社のウェブサイトの一部の機能が利用できなくなる可能性があります。
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 dark:text-white">8. プライバシーポリシーの変更</h3>
                <p className="mb-6 dark:text-gray-300">
                  当社は、法令の変更、事業内容の変更等に伴い、本ポリシーを変更することがあります。本ポリシーを変更する場合は、変更後のプライバシーポリシーを当社ウェブサイトに掲載します。
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 dark:text-white">9. お問い合わせ窓口</h3>
                <p className="mb-6 dark:text-gray-300">
                  本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
                  <p className="dark:text-gray-300">株式会社K.I.T 個人情報保護管理者</p>
                  <p className="dark:text-gray-300">住所：〒150-0001 東京都渋谷区神宮前3-3-13 松岡ビル401</p>
                  <p className="dark:text-gray-300">代表取締役：紙田拓弥</p>
                  <p className="dark:text-gray-300">メールアドレス：info@kit-inc.jp</p>
                </div>

                <p className="mt-8 text-right dark:text-gray-300">
                  制定日：2023年12月1日
                  <br />
                  最終更新日：2023年12月31日
                  <br />
                  株式会社K.I.T
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </MainLayout>
    </>
  )
}

