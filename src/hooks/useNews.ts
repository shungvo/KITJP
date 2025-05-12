"use client"

import { useState, useEffect, useRef } from "react"
import type { NewsItem } from "@/data/news"
import { api } from "@/utils/api"

export function useNews(limit?: number) {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  const dataFetchedRef = useRef(false)

  useEffect(() => {
    // Prevent multiple fetches
    if (dataFetchedRef.current) return
    dataFetchedRef.current = true

    const fetchNews = async () => {
      try {
        setLoading(true)
        const data = await api.getNews(limit)
        setNews(data)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error occurred"))
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [limit])

  return { news, loading, error }
}

