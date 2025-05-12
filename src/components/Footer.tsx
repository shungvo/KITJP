import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" aria-label="K.I.T ホームページへ">
              <Image
                src="/placeholder.svg?height=30&width=80"
                alt="K.I.T Logo"
                width={80}
                height={30}
                className="h-8 w-auto mb-4"
              />
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              IT、データをビジネスに活用できない企業様を支援します。
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 hover:text-primary-kit dark:text-gray-400 dark:hover:text-primary-kit-light"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 hover:text-primary-kit dark:text-gray-400 dark:hover:text-primary-kit-light"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 hover:text-primary-kit dark:text-gray-400 dark:hover:text-primary-kit-light"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 dark:text-white">サイトマップ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-primary-kit dark:text-gray-400 dark:hover:text-primary-kit-light"
                >
                  トップ
                </Link>
              </li>
              <li>
                <Link
                  href="/business"
                  className="text-gray-600 hover:text-primary-kit dark:text-gray-400 dark:hover:text-primary-kit-light"
                >
                  事業紹介
                </Link>
              </li>
              <li>
                <Link
                  href="/company"
                  className="text-gray-600 hover:text-primary-kit dark:text-gray-400 dark:hover:text-primary-kit-light"
                >
                  会社情報
                </Link>
              </li>
              <li>
                <Link
                  href="/recruit"
                  className="text-gray-600 hover:text-primary-kit dark:text-gray-400 dark:hover:text-primary-kit-light"
                >
                  採用情報
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-primary-kit dark:text-gray-400 dark:hover:text-primary-kit-light"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-primary-kit dark:text-gray-400 dark:hover:text-primary-kit-light"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 dark:text-white">お問い合わせ</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 mr-2 mt-0.5 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-600 dark:text-gray-400">
                  〒150-0001 東京都渋谷区神宮前3-3-13 松岡ビル401
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 mr-2 mt-0.5 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-600 dark:text-gray-400">info@kit-inc.jp</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 dark:text-white">営業時間</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">平日: 9:00 - 18:00</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">土日祝: 休業</p>
            <Link href="/contact" className="text-sm text-primary-kit hover:underline dark:text-primary-kit-light">
              お問い合わせはこちら →
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {currentYear} K.I.T Inc. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-600 hover:text-primary-kit dark:text-gray-400 dark:hover:text-primary-kit-light"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/sitemap.xml"
              className="text-sm text-gray-600 hover:text-primary-kit dark:text-gray-400 dark:hover:text-primary-kit-light"
            >
              サイトマップ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

