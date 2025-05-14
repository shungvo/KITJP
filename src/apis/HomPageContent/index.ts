import { HomePageData } from "@/apis/HomPageContent/type";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export const getHomeData = async (): Promise<HomePageData> => {
  try {
    const [hero, news, introduction, recruit] =
      await Promise.all([
        client.get({ endpoint: "hero" }),
        client.get({ endpoint: "news", queries: { limit: 5 } }), // Lấy 5 tin tức mới nhất
        client.get({ endpoint: "introduction" }),
        client.get({ endpoint: "recruit" }),
      ]);

    return {
      hero,
      news: news.contents,
      introduction,
      recruit,
    };
  } catch (error) {
    console.error("Error fetching home data:", error);
    throw new Error("Failed to fetch home data");
  }
};
