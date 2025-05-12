export function ContactInfo() {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium mb-4 text-primary-kit dark:text-primary-kit-light">本社</h3>
      <div className="space-y-2 mb-4">
        <p className="flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="dark:text-gray-300">〒150-0001 東京都渋谷区神宮前3-3-13 松岡ビル401</span>
        </p>
        <p className="flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="dark:text-gray-300">info@kit-inc.jp</span>
        </p>
      </div>
      <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3776176865594!2d139.70485487677225!3d35.67050237259805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca3c5ed84c1%3A0x7c3ee723c6d30c58!2z5p2x5Lqs6YO95riL6LC35Yy65aGp5a6u5YmN77yT5LiB55uu77yT4oiS77yR77yT!5e0!3m2!1sja!2sjp!4v1713879600000!5m2!1sja!2sjp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Tokyo Office Map"
        ></iframe>
      </div>
    </div>
  )
}

