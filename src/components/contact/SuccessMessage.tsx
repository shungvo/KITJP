"use client"

interface SuccessMessageProps {
  onReset: () => void
}

export function SuccessMessage({ onReset }: SuccessMessageProps) {
  return (
    <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-green-500 dark:text-green-400 mx-auto mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">お問い合わせありがとうございます</h3>
      <p className="text-green-700 dark:text-green-300 mb-6">
        お問い合わせを受け付けました。担当者より折り返しご連絡いたします。
      </p>
      <button onClick={onReset} className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition">
        新しいお問い合わせ
      </button>
    </div>
  )
}

