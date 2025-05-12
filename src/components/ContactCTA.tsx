"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ContactCTA() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-primary-kit dark:bg-primary-kit-dark text-white py-4 px-8 text-lg font-medium rounded hover:bg-primary-kit-dark dark:hover:bg-primary-kit transition w-full max-w-md"
          >
            お問い合わせはこちら
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

