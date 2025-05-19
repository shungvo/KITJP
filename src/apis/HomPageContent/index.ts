import { HomePageData } from "@/apis/HomPageContent/type";
import { createClient } from "microcms-js-sdk";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN is not defined");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("NEXT_PUBLIC_MICROCMS_API_KEY is not defined");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export interface HomeDataResponse {
  data: HomePageData | null;
  loading: boolean;
  error: Error | null;
}

export const getHomeData = async (): Promise<HomeDataResponse> => {
  try {
    const response = await client.get({ endpoint: "kitallpage" });
    return {
      data: {
        fieldId: response.Home.fieldId,
        hero: response.Home.hero[0],
        news: response.Home.news,
        introduction: response.Home.introduction,
        recruit: response.Home.recruit[0],
      },
      loading: false,
      error: null,
    };
  } catch (error) {
    console.error("Error fetching home data:", error);
    return {
      data: null,
      loading: false,
      error:
        error instanceof Error ? error : new Error("Failed to fetch home data"),
    };
  }
};
