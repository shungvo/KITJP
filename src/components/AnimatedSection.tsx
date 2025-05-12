"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { fadeUp, staggerContainer } from "@/utils/animations"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: "fadeUp" | "staggered" | "none"
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fadeUp",
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hasAnimated, setHasAnimated] = useState(false)

  // Only animate once
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const getAnimationVariant = () => {
    switch (animation) {
      case "fadeUp":
        return fadeUp
      case "staggered":
        return staggerContainer
      default:
        return {}
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={getAnimationVariant()}
      transition={{ delay }}
      className={`${className} dark:text-gray-200`}
    >
      {children}
    </motion.div>
  )
}

