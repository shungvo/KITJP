import { type NewsItem, newsData } from "@/data/news"
import { type HomePageData, homeData } from "@/data/homeData"

// Giả lập độ trễ của API thực
const simulateDelay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const api = {
  // Lấy danh sách tin tức
  getNews: async (limit?: number): Promise<NewsItem[]> => {
    // Giả lập độ trễ API
    await simulateDelay(300)

    // Trả về tất cả hoặc giới hạn số lượng tin tức
    if (limit) {
      return newsData.slice(0, limit)
    }
    return newsData
  },

  // Lấy chi tiết một tin tức theo ID
  getNewsById: async (id: string): Promise<NewsItem | undefined> => {
    await simulateDelay(200)
    return newsData.find((item) => item.id === id)
  },

  // Tìm kiếm tin tức theo từ khóa
  searchNews: async (keyword: string): Promise<NewsItem[]> => {
    await simulateDelay(400)
    return newsData.filter((item) => item.title.toLowerCase().includes(keyword.toLowerCase()))
  },

  // Lấy dữ liệu trang chủ
  getHomePageData: async (): Promise<HomePageData> => {
    await simulateDelay(500)
    return homeData
  },

  // Lấy dữ liệu hero section
  getHeroData: async () => {
    await simulateDelay(200)
    return homeData.hero
  },

  // Lấy dữ liệu business section
  getBusinessData: async () => {
    await simulateDelay(200)
    return homeData.business
  },

  // Lấy dữ liệu company section
  getCompanyData: async () => {
    await simulateDelay(200)
    return homeData.company
  },

  // Lấy dữ liệu privacy section
  getPrivacyData: async () => {
    await simulateDelay(200)
    return homeData.privacy
  },

  // Lấy dữ liệu recruit section
  getRecruitData: async () => {
    await simulateDelay(200)
    return homeData.recruit
  },
}

