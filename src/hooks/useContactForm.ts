"use client"

import type React from "react"

import { useState } from "react"

export type ContactFormData = {
  name: string
  company: string
  email: string
  phone: string
  inquiry: string
  message: string
  privacy: boolean
}

export type FormErrors = Record<string, string>

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
    privacy: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "お名前を入力してください"
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "有効なメールアドレスを入力してください"
    }

    if (!formData.inquiry) {
      newErrors.inquiry = "お問い合わせ内容を選択してください"
    }

    if (!formData.message.trim()) {
      newErrors.message = "メッセージを入力してください"
    }

    if (!formData.privacy) {
      newErrors.privacy = "プライバシーポリシーに同意してください"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }))

    // Clear error when user checks
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        inquiry: "",
        message: "",
        privacy: false,
      })
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
  }

  return {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
    resetForm,
  }
}

