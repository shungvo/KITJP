export interface NewsItem {
  id: string
  date: string
  title: string
  url?: string
  isNew?: boolean
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    date: "2023-12-31",
    title: "コーポレートサイトをリニューアルしました",
    isNew: true,
  },
  {
    id: "2",
    date: "2023-11-15",
    title: "新しいサービスの提供を開始しました",
    url: "/business",
  },
  {
    id: "3",
    date: "2023-10-05",
    title: "東京オフィスを移転しました",
  },
  {
    id: "4",
    date: "2023-09-20",
    title: "採用情報を更新しました",
    url: "/recruit",
  },
  {
    id: "5",
    date: "2023-08-10",
    title: "データ分析サービスの事例を公開しました",
    url: "/business",
  },
]

