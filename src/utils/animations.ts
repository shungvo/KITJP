"use client"

import type { Variants } from "framer-motion"

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
}

// Fade up animation
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

// Scale animation
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
}

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

// Bounce animation
export const bounce: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
}

// Rotate in animation
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -5 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6 },
  },
}

// Pulse animation (for hover)
export const pulse = {
  scale: [1, 1.05, 1],
  transition: { duration: 0.5 },
}

// Shimmer animation (for loading states or highlights)
export const shimmer = {
  x: ["0%", "100%"],
  transition: {
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "mirror",
    duration: 1.5,
    ease: "easeInOut",
  },
}

