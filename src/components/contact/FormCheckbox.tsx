"use client"

import type React from "react"

interface FormCheckboxProps {
  id: string
  name: string
  label: React.ReactNode
  checked: boolean
  error?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export function FormCheckbox({ id, name, label, checked, error, onChange, className = "" }: FormCheckboxProps) {
  return (
    <div className={className}>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id={id}
            name={name}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor={id} className={`font-medium ${error ? "text-red-500" : "text-gray-700 dark:text-gray-300"}`}>
            {label}
          </label>
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  )
}

