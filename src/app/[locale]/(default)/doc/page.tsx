import { ProductList } from '@/features/aggregation/components/product-list'
import React from 'react'

const mockData = [
  {
    id: 1,
    name: 'Nike Air Force 1',
    slug: 'nike-air-force-1',
    title: 'Nike Air Force 1 Low White',
    image: '/og-image.png',
    description:
      'The Nike Air Force 1 Low features a clean white leather upper with perforated toe box for ventilation. It has an Air-Sole unit in the midsole for cushioning and rubber outsole for traction.',
    price: 99.99,
  },
  {
    id: 2,
    name: 'Adidas Ultraboost',
    slug: 'adidas-ultraboost',
    title: 'Adidas Ultraboost 21 Primeblue',
    image: '/og-image.png',
    description:
      'The Adidas Ultraboost 21 has a Primeblue recycled upper with Boost midsole technology for responsive cushioning. Continental rubber outsole provides excellent grip.',
    price: 179.99,
  },
  {
    id: 3,
    name: 'Converse Chuck Taylor',
    slug: 'converse-chuck-taylor',
    title: 'Converse Chuck Taylor All Star Low Top',
    image: '/og-image.png',
    description:
      'The classic Converse Chuck Taylor All Star low top has a durable canvas upper, rubber toe cap, and flexible vulcanized rubber sole.',
    price: 54.99,
  },
  {
    id: 4,
    name: 'Timberland Boots',
    slug: 'timberland-boots',
    title: 'Timberland 6-Inch Premium Waterproof Boots',
    image: '/og-image.png',
    description:
      'Timberland 6-inch boots have premium full-grain waterproof leather uppers, padded collars for comfort, and rugged rubber lug outsoles for traction.',
    price: 189.99,
  },
  {
    id: 5,
    name: 'Ray-Ban Aviators',
    slug: 'ray-ban-aviators',
    title: 'Ray-Ban Aviator Classic Sunglasses',
    image: '/og-image.png',
    description:
      'The Ray-Ban Aviator Classic sunglasses have an iconic teardrop shaped metal frame with mineral glass lenses that provide 100% UV protection.',
    price: 153.99,
  },
  {
    id: 6,
    name: "Levi's 501 Jeans",
    slug: 'levis-501-jeans',
    title: "Levi's 501 Original Fit Jeans",
    image: '/og-image.png',
    description:
      "The Levi's 501 original fit jeans are made from durable denim with a button fly, five-pocket styling, and signature leather patch.",
    price: 59.99,
  },
  {
    id: 7,
    name: 'Canada Goose Parka',
    slug: 'canada-goose-parka',
    title: 'Canada Goose Expedition Parka',
    image: '/og-image.png',
    description:
      'The Canada Goose Expedition parka has a durable, water-resistant Arctic-Tech shell with coyote fur trim hood and heavy-duty ribbed knit cuffs to keep out the cold.',
    price: 949.99,
  },
  {
    id: 8,
    name: 'Rolex Submariner',
    slug: 'rolex-submariner',
    title: 'Rolex Submariner Date Steel Watch',
    image: '/og-image.png',
    description:
      'The Rolex Submariner is a classic dive watch with a waterproof stainless steel case, unidirectional bezel, luminous markers, date display, and Oyster bracelet.',
    price: 8950.99,
  },
  {
    id: 9,
    name: 'KitchenAid Stand Mixer',
    slug: 'kitchenaid-stand-mixer',
    title: 'KitchenAid Professional 5 Plus Stand Mixer',
    image: '/og-image.png',
    description:
      'The KitchenAid Professional 5 Plus stand mixer has a 5 quart stainless steel bowl, 10 speed motor, and includes a flat beater, dough hook, and wire whip.',
    price: 399.99,
  },
  {
    id: 10,
    name: 'Dyson Vacuum',
    slug: 'dyson-vacuum',
    title: 'Dyson V8 Cordless Stick Vacuum',
    image: '/og-image.png',
    description:
      'The Dyson V8 cordless stick vacuum has powerful suction and up to 40 minutes of fade-free power. It easily converts to a handheld vacuum.',
    price: 399.99,
  },
]
export default function Page() {
  return (
    <div className="container">
      <ProductList data={mockData} />
    </div>
  )
}
