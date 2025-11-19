import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CommentForm from '@/components/blog/comment-form'
import Image from 'next/image'
import Blog1 from '@/assets/blog/farming-profession.jpg'
import Blog2 from '@/assets/blog/greenhouse-farming.jpg'
import Blog3 from '@/assets/blog/laughing-cows.jpg'
const blogPosts = [
    {
        slug: 'what-is-hydroponics',
        title: 'What is Hydroponics?',
        image: Blog2,
        content: `Welcome to the captivating world of hydroponics! Suppose you're a plant enthusiast seeking to explore new approaches to developing your greens or virtually a person interested in sustainable and green agriculture, that case, hydroponics may additionally be your cup of tea – or, should I say, your cup of nutrient-rich water.

Hydroponics is a technique of growing flora without soil, which has been utilized for decades and is gaining reputation speedy among backyard gardeners and business growers alike. Instead of soil, hydroponic structures use nutrient-enriched water to feed flora without delay to their roots, permitting for quicker boom and better yields.

There are several styles of hydroponic structures, every with its personal advantages and demanding situations. The most not unusual forms consist of the deep water way of life, nutrient movie approach, and ebb-and-glide structures. Each device has been designed to provide the ultimate growing situations for unique kinds of flora.

One of the primary advantages of hydroponics is its potential to produce greater food in much less area. This makes it best for city farmers or the ones with confined lawn area. Additionally, hydroponic structures use as much as 90% much less water than conventional soil-primarily based farming, making it an eco-friendly choice.

Hydroponics additionally gives higher manipulate over the growing surroundings. Growers can without difficulty alter nutrient tiers, pH stability, and mild publicity, making sure most effective situations for plant boom. This precision manner higher yields and accelerated product high quality compared to conventional farming strategies.

Whether you're seeking to develop clean veggies for your own family or begin a commercial hydroponic enterprise, this progressive farming method affords endless possibilities. With the proper setup and know-how, you may domesticate thriving vegetation 12 months spherical, irrespective of the climate outdoor.`,
        date: '2024-01-15'
    },
    {
        slug: 'vertical-farming-benefits',
        title: 'Vertical Farming Benefits',
        image: Blog3,
        content: `Vertical farming is revolutionizing the way we grow food. By stacking crops in vertical layers, farms can produce significantly more food using a fraction of the space required by traditional agriculture.

The benefits are substantial. Vertical farms use 95% less water, eliminate the need for pesticides, and reduce transportation costs since they're located closer to consumers. They also operate year-round, unaffected by weather or seasons.

This innovative approach is particularly valuable in urban areas where land is scarce and expensive. Vertical farms can be established in repurposed buildings, bringing fresh produce directly to city dwellers while creating local employment opportunities.

Learn more about how vertical farming is transforming food production and contributing to a more sustainable future.`,
        date: '2024-01-10'
    },
    {
        slug: 'sustainable-agriculture-future',
        title: 'The Future of Sustainable Agriculture',
        image: Blog1,
        content: `The future of agriculture lies in sustainable practices that balance productivity with environmental responsibility. Emerging technologies and innovative approaches are transforming how we grow food.

Precision agriculture uses data analytics and IoT devices to optimize crop management. Renewable energy integration powers farms sustainably. Regenerative agriculture focuses on improving soil health and biodiversity. Vertical and hydroponic farming reduces resource consumption.

These innovations work together to create a more resilient and sustainable food system that can support growing populations while protecting our planet for future generations.`,
        date: '2024-01-05'
    }
]

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = blogPosts.find(p => p.slug === slug)

    if (!post) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Post not found</h1>
                    <Link href="/">
                        <Button>Back to Blog</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <main className="min-h-screen">
            {/* Featured Image */}
            <div className="max-w-7xl mx-auto px-4 py-8 mt-6">
                <div className="space-y-4 shadow-lg  overflow-hidden border border-border my-6">
                    <div className="overflow-hidden bg-muted  mb-8">
                        <Image
                            width={1200}
                            height={600}
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Area */}
                    <article className="max-w-6xl mx-auto">
                        <h1 className="text-3xl font-semibold text-foreground sm:my-4 my-2 ">{post.title}</h1>
                        {/* Post Content */}
                        <div className="prose prose-sm max-w-none mb-16 text-foreground">
                            {post.content.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="mb-6 text-foreground leading-relaxed text-sm font-normal">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Comments Section */}
                        <div className="border-t border-border pt-12">
                            <h2 className="text-3xl md:text-4xl font-semibold text-foreground sm:mt-4 mt-2  mb-8">Leave a Reply</h2>
                            <CommentForm />
                        </div>
                    </article>
                </div>
            </div>
        </main>
    )
}
