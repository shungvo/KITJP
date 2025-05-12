"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Logo() {
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

  return (
    <Link href="/" className="flex items-center" aria-label="K.I.T ホームページへ">
      <motion.div
        whileHover={{
          scale: 1.05,
          rotate: [0, -5, 5, -5, 0],
          transition: { duration: 0.5 },
        }}
        animate={isScrolled ? { scale: 0.95 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/placeholder.svg?height=30&width=80"
          alt="K.I.T Logo"
          width={80}
          height={30}
          className="h-8 w-auto"
          priority
        />
      </motion.div>
    </Link>
  )
}

