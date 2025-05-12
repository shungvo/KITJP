"use client"
import Hero from "@/components/Hero"
import AnimatedText from "@/components/AnimatedText"
import { useHeroData } from "@/hooks/useHeroData"

export default function HeroSection() {
  const { data, loading, error } = useHeroData()

  if (loading || !data) {
    return (
      <div className="h-[500px] bg-gradient-to-r from-primary-kit-light to-primary-kit dark:from-primary-kit-dark dark:to-primary-kit flex items-center justify-center">
        <div className="animate-pulse bg-white/20 rounded-lg h-40 w-80"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="h-[500px] bg-gradient-to-r from-primary-kit-light to-primary-kit dark:from-primary-kit-dark dark:to-primary-kit flex items-center justify-center">
        <div className="text-white text-center p-4">
          <p>データの読み込み中にエラーが発生しました。</p>
          <p>後でもう一度お試しください。</p>
        </div>
      </div>
    )
  }

  return (
    <Hero
      title={data.title}
      subtitle={data.subtitle}
      description={
        <>
          {data.description.map((line, index) => (
            <AnimatedText key={index} text={line} className="mb-1" />
          ))}
        </>
      }
    />
  )
}

