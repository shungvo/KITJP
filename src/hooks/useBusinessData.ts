"use client"

import { useState, useEffect, useRef } from "react"
import type { SectionData } from "@/data/homeData"
import { api } from "@/utils/api"

export function useBusinessData() {
  const [data, setData] = useState<SectionData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  const dataFetchedRef = useRef(false)

  useEffect(() => {
    // Prevent multiple fetches
    if (dataFetchedRef.current) return
    dataFetchedRef.current = true

    const fetchData = async () => {
      try {
        setLoading(true)
        const businessData = await api.getBusinessData()
        setData(businessData)
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

