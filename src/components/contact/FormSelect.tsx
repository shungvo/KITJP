"use client"

import type React from "react"

interface Option {
  value: string
  label: string
}

interface FormSelectProps {
  id: string
  name: string
  label: string
  value: string
  options: Option[]
  error?: string
  required?: boolean
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  className?: string
}

export function FormSelect({
  id,
  name,
  label,
  value,
  options,
  error,
  required = false,
  onChange,
  className = "",
}: FormSelectProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-kit dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
          error ? "border-red-500 dark:border-red-500" : "border-gray-300 dark:border-gray-600"
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

