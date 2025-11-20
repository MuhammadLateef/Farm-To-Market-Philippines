import React from 'react'
import ProductCard from "@/components/Buy-and-Sell/product-card"
import bsGrains from '@/assets/buy-sell/bs-grains.jpg';
import bsLegumes from '@/assets/buy-sell/bs-legumes.jpg';
import bsFruits from '@/assets/buy-sell/bs-fruits.jpg';
import bsVeggies from '@/assets/buy-sell/bs-veggies.jpg';
import bsAnimals from '@/assets/buy-sell/bs-animals.jpg';
import bsFertilizers from '@/assets/buy-sell/bs-fertilizers.jpg';
import hydroponics from '@/assets/buy-sell/hydroponics.jpg';
import bsMachines from '@/assets/buy-sell/bs-machines.jpg';
import bsFarmland from '@/assets/buy-sell/bs-farmland.jpg';
import bsTools from '@/assets/buy-sell/bs-tools.jpg';

const products = [
    {
        id: 1,
        name: 'Grains',
        category: 'Rice, Corn, Wheat, Barley, Oats',
        image: bsGrains,
    },
    {
        id: 2,
        name: 'Nuts & Legumes',
        category: 'Soybeans, Peanuts, Peas, Lentils',
        image: bsLegumes,
    },
    {
        id: 3,
        name: 'Fruits',
        category: 'Mango, Banana, Coconut, Apple, Pineapple',
        image: bsFruits,
    },
    {
        id: 4,
        name: 'Vegetables',
        category: 'Okra, Eggplant, Carrot, Celery, Lettuce',
        image: bsVeggies,
    },
    {
        id: 5,
        name: 'Livestock',
        category: 'Cattle, Pigs, Chicken, Goat, Carabao',
        image: bsAnimals,
    },
    {
        id: 6,
        name: 'Solutions',
        category: 'Nutrients, Fertilizers, etc.',
        image: bsFertilizers,
    },
    {
        id: 7,
        name: 'Equipment',
        category: 'Hydraulic Systems, Pals, etc.',
        image: hydroponics,
    },
    {
        id: 8,
        name: 'Machinery',
        category: 'Grain Harvester, Tractor, etc.',
        image: bsMachines,
    },
    {
        id: 9,
        name: 'Land for Sale',
        category: 'Farm Lots, Fish Ponds, Piggeries, etc.',
        image: bsFarmland,
    },
    {
        id: 10,
        name: 'Gardening Tools',
        category: 'Shovels, Rakes, Gloves, Boots, Watering Cans, etc.',
        image: bsTools,
    },
];
const page = () => {
    return (
        <section className="w-full py-4 px-4 md:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-medium text-foreground text-center my-12">
                    Select Product Category
                </h2>
                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default page