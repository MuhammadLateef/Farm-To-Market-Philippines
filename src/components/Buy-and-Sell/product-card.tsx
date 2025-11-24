'use client'

import Image from 'next/image'

interface ProductCardProps {
  product: {
    id: number
    name: string
    category: string
    image: string | any  // ✅ Add StaticImageData type
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-3 hover:scale-105 transition-transform duration-300 ">
      {/* Product Image Circle */}
      <div className="relative lg:w-[200px] lg:h-[200px] sm:w-32 sm:h-32 w-28 h-28 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover w-full h-full p-1 rounded-full shadow-lg border border-[#ccc]"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-1 max-w-[60%] mx-auto">
        <h3 className="text-base text-[#20A20B] sm:text-lg font-semibold mt-3">
          {product.name}
        </h3>
        <p className="text-sm text-[#666666] sm:text-sm leading-relaxed">
          {product.category}
        </p>
      </div>
    </div>
  )
}


// export default ProductCard;