'use client'

import { ProductCard } from './product-card'

const products = [
  {
    id: 1,
    name: 'Grains',
    category: 'Rice, Corn, Wheat, Barley, Oats',
    image: '/assets/home/buy-sell/bs-grains.jpg',
  },
  {
    id: 2,
    name: 'Nuts & Legumes',
    category: 'Soybeans, Peanuts, Peas, Lentils',
    image: '/assets/home/buy-sell/bs-legumes.jpg',
  },
  {
    id: 3,
    name: 'Fruits',
    category: 'Mango, Banana, Coconut, Apple, Pineapple',
    image: "/assets/home/buy-sell/bs-fruits.jpg"
  },
  {
    id: 4,
    name: 'Vegetables',
    category: 'Okra, Eggplant, Carrot, Celery, Lettuce',
    image: '/assets/home/buy-sell/bs-veggies.jpg',
  },
  {
    id: 5,
    name: 'Livestock',
    category: 'Cattle, Pigs, Chicken, Goat, Carabao',
    image: '/assets/home/buy-sell/bs-animals.jpg',
  },
  {
    id: 6,
    name: 'Solutions',
    category: 'Nutrients, Fertilizers, etc.',
    image: '/assets/home/buy-sell/bs-fertilizers.jpg',
  },
  {
    id: 7,
    name: 'Equipment',
    category: 'Hydraulic Systems, Pals, etc.',
    image: '/assets/home/buy-sell/hydroponics.jpg',
  },
  {
    id: 8,
    name: 'Machinery',
    category: 'Grain Harvester, Tractor, etc.',
    image: '/assets/home/buy-sell/bs-machines.jpg',
  },
    {
    id: 9,
    name: 'Land for Sale',
    category: 'Farm Lots, Fish Ponds, Piggeries, etc.',
    image: '/assets/home/buy-sell/bs-farmland.jpg',
  },
    {
    id: 10,
    name: 'Gardening Tools',
    category: 'Shovels, Rakes, Gloves, Boots, Watering Cans, etc.',
    image: '/assets/home/buy-sell/bs-tools.jpg',
  },
]

export function BuyAndSellSection() {
  return (
    <section className="w-full py-4 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Buy & Sell
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
