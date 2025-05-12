import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import { baseMetadata } from "@/utils/metadata"
import PageTransition from "@/components/PageTransition"
import { ThemeProvider } from "@/components/ThemeProvider"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
})

export const metadata: Metadata = baseMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#48adeb" />
        <meta name="msapplication-TileColor" content="#48adeb" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={notoSansJP.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}

