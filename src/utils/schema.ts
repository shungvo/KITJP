export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社K.I.T",
  alternateName: "ケイアイティー",
  url: "https://www.kit-inc.jp",
  logo: "https://www.kit-inc.jp/logo.png",
  sameAs: [
    "https://twitter.com/kit_inc",
    "https://www.facebook.com/kitinc",
    "https://www.linkedin.com/company/kit-inc",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+81-3-1234-5678",
      contactType: "customer service",
      areaServed: "JP",
      availableLanguage: "Japanese",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "渋谷区神宮前3-3-13 松岡ビル401",
    addressLocality: "東京都",
    postalCode: "150-0001",
    addressCountry: "JP",
  },
  description:
    "IT、データをビジネスに活用できない企業様を支援します。株式会社K.I.Tは、システム開発、データ分析、ITコンサルティングを提供しています。",
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "株式会社K.I.T",
  image: "https://www.kit-inc.jp/logo.png",
  "@id": "https://www.kit-inc.jp",
  url: "https://www.kit-inc.jp",
  telephone: "+81-3-1234-5678",
  address: {
    "@type": "PostalAddress",
    streetAddress: "渋谷区神宮前3-3-13 松岡ビル401",
    addressLocality: "東京都",
    postalCode: "150-0001",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.6838524,
    longitude: 139.7514669,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://twitter.com/kit_inc",
    "https://www.facebook.com/kitinc",
    "https://www.linkedin.com/company/kit-inc",
  ],
}

export const breadcrumbSchema = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `https://www.kit-inc.jp${item.item}`,
  })),
})

