import Image from "next/image";
import type React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string | React.ReactNode;
  height?: string;
  image?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  height = "h-[500px]",
  image,
}: HeroProps) {
  return (
    <section
      className={`relative ${height} bg-gradient-to-r from-primary-kit-light to-primary-kit dark:from-primary-kit-dark dark:to-primary-kit overflow-hidden`}
    >
      <div className="absolute inset-0">
        <Image
          src={image || "/placeholder.svg?height=500&width=1200"}
          alt="Digital Network"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold mb-3">{title}</h1>

            {subtitle && <p className="text-xl mb-6">{subtitle}</p>}

            {description && (
              <div>
                {typeof description === "string" ? (
                  <p className="text-lg leading-relaxed">{description}</p>
                ) : (
                  description
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
