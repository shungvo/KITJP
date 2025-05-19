"use client";

import { getHomeData } from "@/apis/HomPageContent";
import type { HeroContent } from "@/apis/HomPageContent/type";
import { useEffect, useRef, useState } from "react";

export function useHeroData() {
  const [data, setData] = useState<HeroContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    // Prevent multiple fetches
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const homeData = await getHomeData();
        setData(homeData.hero);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Unknown error occurred")
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
