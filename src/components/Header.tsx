"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Theo dõi sự kiện cuộn để xác định khi nào header nên chuyển sang trạng thái sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  }

  const menuItems = [
    { href: "/", label: "トップ" },
    { href: "/business", label: "事業紹介" },
    { href: "/company", label: "会社情報" },
    { href: "/recruit", label: "採用情報" },
    { href: "/privacy", label: "プライバシーポリシー" },
    { href: "/contact", label: "お問い合わせ" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 transition-all duration-300 z-50 ${
          isScrolled ? "border-b border-gray-200 dark:border-gray-800 shadow-sm" : "border-b border-transparent"
        }`}
      >
        <Logo />

        <nav className="hidden md:flex items-center text-sm space-x-6" aria-label="メインナビゲーション">
          {menuItems.map((item, index) => (
            <motion.div key={item.href} custom={index} initial="hidden" animate="visible" variants={menuItemVariants}>
              <Link
                href={item.href}
                className="hover:text-primary-kit dark:text-gray-200 dark:hover:text-primary-kit-light relative group"
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-kit dark:bg-primary-kit-light"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <motion.button
            className="p-2"
            onClick={toggleMenu}
            aria-label="メニューを開く"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>
      </header>

      {/* Spacer để tránh nội dung bị che khuất bởi fixed header */}
      <div className="h-[56px]"></div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 bg-white dark:bg-gray-900 z-40 md:hidden pt-[56px]"
            aria-hidden={!isMenuOpen}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="px-4 py-4">
              <nav className="flex flex-col space-y-4 text-lg" aria-label="モバイルナビゲーション">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="py-2 border-b border-gray-100 dark:border-gray-800 hover:text-primary-kit dark:text-gray-200 dark:hover:text-primary-kit-light block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

