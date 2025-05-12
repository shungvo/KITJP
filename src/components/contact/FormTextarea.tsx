"use client"

import type React from "react"

interface FormTextareaProps {
  id: string
  name: string
  label: string
  value: string
  error?: string
  required?: boolean
  rows?: number
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
}

export function FormTextarea({
  id,
  name,
  label,
  value,
  error,
  required = false,
  rows = 6,
  onChange,
  className = "",
}: FormTextareaProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-kit dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
          error ? "border-red-500 dark:border-red-500" : "border-gray-300 dark:border-gray-600"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

