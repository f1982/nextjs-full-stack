import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.$transaction(async (tx) => {
    tx.resource.createMany({
      data: [
        {
          title: 'Hello World Example Title',
          description:
            'Here is an example world description with multiple words',
          status: 'draft',
          category: 'website',
          subcategory: 'blog',
          tags: 'hello, world, example',
          url: '',
        },
        {
          title: 'Goodbye Longer Farewell Example Title',
          description:
            'This is a longer farewell description with multiple words in this example',
          status: 'published',
          category: 'website',
          subcategory: 'about',
          tags: 'goodbye, farewell, example',
          url: 'https://example.com/goodbye',
        },
        {
          title: 'Latest Top News Stories Example',
          description: 'Current events example description with multiple words',
          status: 'published',
          category: 'news',
          subcategory: 'top stories',
          tags: 'news, current, events',
          url: 'https://example.com/news',
        },
        {
          title: 'Food Recipe Ideas Example',
          description:
            'Example food recipe ideas description with multiple words',
          status: 'published',
          category: 'food',
          subcategory: 'recipes',
          tags: 'recipes, food, example',
          url: 'https://example.com/recipes',
        },
        {
          title: 'Sports Game Results Example',
          description: 'Example sports game results description',
          status: 'published',
          category: 'sports',
          subcategory: 'scores',
          tags: 'sports, scores, example',
          url: 'https://example.com/scores',
        },
        {
          title: 'Local Weather Forecast Example',
          description: 'Example local weather forecast description',
          status: 'published',
          category: 'weather',
          subcategory: 'forecast',
          tags: 'weather, forecast, example',
          url: 'https://example.com/weather',
        },
        {
          title: 'Movie Reviews Example Title',
          description: 'Example new movie reviews description',
          status: 'published',
          category: 'entertainment',
          subcategory: 'movies',
          tags: 'movies, reviews, example',
          url: 'https://example.com/movies',
        },
        {
          title: 'Book Reviews Example Title',
          description: 'Example new book reviews description',
          status: 'published',
          category: 'books',
          subcategory: 'reviews',
          tags: 'books, reviews, example',
          url: 'https://example.com/books',
        },
        {
          title: 'Latest Tech Gadgets Example',
          description: 'Example latest tech gadgets description',
          status: 'published',
          category: 'technology',
          subcategory: 'news',
          tags: 'tech, gadgets, example',
          url: 'https://example.com/tech',
        },
        {
          title: 'Vacation Travel Tips Example',
          description: 'Example vacation travel tips description',
          status: 'published',
          category: 'travel',
          subcategory: 'tips',
          tags: 'travel, tips, example',
          url: 'https://example.com/travel',
        },
        {
          title: 'Interior Home Decor Example',
          description: 'Example interior home decor description',
          status: 'published',
          category: 'lifestyle',
          subcategory: 'home',
          tags: 'home, decor, example',
          url: 'https://example.com/home',
        },
        {
          title: 'Fashion Style Trends Example',
          description: 'Example fashion style trends description',
          status: 'published',
          category: 'style',
          subcategory: 'fashion',
          tags: 'fashion, trends, example',
          url: 'https://example.com/fashion',
        },
        {
          title: 'Company Business News Example',
          description: 'Example company business news description',
          status: 'published',
          category: 'business',
          subcategory: 'news',
          tags: 'business, news, example',
          url: 'https://example.com/business',
        },
        {
          title: 'Career Job Listings Example',
          description: 'Example career job listings description',
          status: 'published',
          category: 'jobs',
          subcategory: 'listings',
          tags: 'jobs, listings, example',
          url: 'https://example.com/jobs',
        },
        {
          title: 'DIY Crafts Projects Example',
          description: 'Example DIY crafts projects description',
          status: 'published',
          category: 'diy',
          subcategory: 'projects',
          tags: 'diy, projects, example',
          url: 'https://example.com/diy',
        },
      ],
    })
  })
}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => await prisma.$disconnect())
