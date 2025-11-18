import Image from 'next/image'

interface FeatureCardProps {
  title: string
  imageSrc: string
  imageAlt: string
}

export function FeatureCard({ title, imageSrc, imageAlt }: FeatureCardProps) {
  return (
    <div className="flex flex-col space-y-3">
      <h3 className="text-lg font-semibold tracking-wide text-foreground !mb-6 mt-[15px]">
        {title}
      </h3>

      <div className="relative w-full ">
        <div className="absolute -right-4 -bottom-4 w-full h-full bg-gray-100 " />
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          width={400}
          height={400}
          className="relative z-10 w-full h-full lg:h-[400px]"
        />
      </div>
     
    </div>
  )
}
