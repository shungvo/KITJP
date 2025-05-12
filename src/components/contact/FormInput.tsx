"use client"

import type React from "react"

interface FormInputProps {
  id: string
  name: string
  label: string
  type?: string
  value: string
  error?: string
  required?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export function FormInput({
  id,
  name,
  label,
  type = "text",
  value,
  error,
  required = false,
  onChange,
  className = "",
}: FormInputProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-kit dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
          error ? "border-red-500 dark:border-red-500" : "border-gray-300 dark:border-gray-600"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

