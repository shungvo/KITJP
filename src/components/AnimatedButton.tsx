"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"

interface AnimatedButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  ariaLabel?: string
}

export default function AnimatedButton({ href, children, className = "", ariaLabel }: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link href={href} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    </motion.div>
  )
}

