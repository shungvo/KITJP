"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  subtitle: string
  id?: string
}

export default function SectionHeader({ title, subtitle, id }: SectionHeaderProps) {
  return (
    <div className="text-center mb-10">
      <motion.h2
        className="text-2xl font-bold dark:text-white"
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
      <motion.div
        className="w-12 h-0.5 bg-gray-300 dark:bg-gray-700 mx-auto mt-2"
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      ></motion.div>
    </div>
  )
}

