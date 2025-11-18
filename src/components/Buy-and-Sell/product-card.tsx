'use client'

import Image from 'next/image'

interface ProductCardProps {
  product: {
    id: number
    name: string
    category: string
    image: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-3 hover:scale-105 transition-transform duration-300">
      {/* Product Image Circle */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover max-w-[200px] max-h-[200px] p-1 rounded-full shadow-lg border border-[#ccc]"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-1 max-w-[60%] mx-auto">
        <h3 className="text-base text-[#20A20B] sm:text-lg font-semibold mt-3">
          {product.name}
        </h3>
        <p className="text-[1rem] text-[#666] sm:text-sm leading-relaxed">
          {product.category}
        </p>
      </div>
    </div>
  )
}
