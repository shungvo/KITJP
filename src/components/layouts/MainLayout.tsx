import type { ReactNode } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollToTopButton from "@/components/ScrollToTopButton"

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <ScrollToTopButton />

      {children}

      <Footer />
    </main>
  )
}

