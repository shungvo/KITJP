"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  animation?: "fadeIn" | "scaleUp" | "rotateIn"
}

export default function AnimatedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  animation = "fadeIn",
}: AnimatedImageProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.8 } },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    },
    rotateIn: {
      hidden: { opacity: 0, rotate: -5 },
      visible: { opacity: 1, rotate: 0, transition: { duration: 0.8 } },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[animation]}
      className={className}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="w-full h-auto"
      />
    </motion.div>
  )
}

