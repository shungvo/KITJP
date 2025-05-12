"use client"

import { useContactForm } from "@/hooks/useContactForm"
import { FormInput } from "@/components/contact/FormInput"
import { FormSelect } from "@/components/contact/FormSelect"
import { FormTextarea } from "@/components/contact/FormTextarea"
import { FormCheckbox } from "@/components/contact/FormCheckbox"
import { SuccessMessage } from "@/components/contact/SuccessMessage"

export default function ContactForm() {
  const { formData, errors, isSubmitting, isSubmitted, handleChange, handleCheckboxChange, handleSubmit, resetForm } =
    useContactForm()

  const inquiryOptions = [
    { value: "", label: "選択してください" },
    { value: "service", label: "サービスについて" },
    { value: "recruitment", label: "採用について" },
    { value: "partnership", label: "業務提携について" },
    { value: "media", label: "取材・メディア掲載について" },
    { value: "other", label: "その他" },
  ]

  if (isSubmitted) {
    return <SuccessMessage onReset={resetForm} />
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormInput
            id="name"
            name="name"
            label="お名前"
            value={formData.name}
            error={errors.name}
            onChange={handleChange}
            required
          />

          <FormInput id="company" name="company" label="会社名" value={formData.company} onChange={handleChange} />

          <FormInput
            id="email"
            name="email"
            type="email"
            label="メールアドレス"
            value={formData.email}
            error={errors.email}
            onChange={handleChange}
            required
          />

          <FormInput
            id="phone"
            name="phone"
            type="tel"
            label="電話番号"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <FormSelect
          id="inquiry"
          name="inquiry"
          label="お問い合わせ内容"
          value={formData.inquiry}
          options={inquiryOptions}
          error={errors.inquiry}
          onChange={handleChange}
          required
          className="mb-6"
        />

        <FormTextarea
          id="message"
          name="message"
          label="お問い合わせ詳細"
          value={formData.message}
          error={errors.message}
          onChange={handleChange}
          required
          className="mb-6"
        />

        <FormCheckbox
          id="privacy"
          name="privacy"
          checked={formData.privacy}
          onChange={handleCheckboxChange}
          error={errors.privacy}
          label={
            <>
              <a
                href="/privacy"
                className="text-primary-kit dark:text-primary-kit-light hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                プライバシーポリシー
              </a>
              に同意します <span className="text-red-500">*</span>
            </>
          }
          className="mb-8"
        />

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-primary-kit dark:bg-primary-kit-dark text-white py-3 px-8 rounded-md hover:bg-primary-kit-dark dark:hover:bg-primary-kit transition ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "送信中..." : "送信する"}
          </button>
        </div>
      </form>
    </div>
  )
}

