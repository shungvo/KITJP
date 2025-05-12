"use client"

import { useState, useEffect } from "react"
import type { HomePageData } from "@/data/homeData"
import { api } from "@/utils/api"

export function useHomeData() {
  const [data, setData] = useState<HomePageData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const homeData = await api.getHomePageData()
        setData(homeData)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error occurred"))
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}

