import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import Blog1 from '@/assets/blog/farming-profession.jpg'
import Blog2 from '@/assets/blog/greenhouse-farming.jpg'
import Blog3 from '@/assets/blog/laughing-cows.jpg'
const blogPosts = [
    {
        slug: 'what-is-hydroponics',
        title: 'What is Hydroponics?',
        excerpt: 'Welcome to the captivating world of hydroponics! Suppose you\'re a plant enthusiast seeking to explore new approaches to developing your greens or virtually a person interested in sustainable and green agriculture, that case, hydroponics may additionally be your cup of tea – or, should I say, your cup of nutrient-rich water. Hydroponics is a technique of growing flora without...',
        image: Blog2,
        date: '2024-01-15'
    },
    {
        slug: 'vertical-farming-benefits',
        title: 'Vertical Farming Benefits',
        excerpt: 'Discover how vertical farming is revolutionizing agriculture. Learn about the space-saving advantages, increased yields, and environmental benefits of growing crops vertically in urban areas...',
        image: Blog3,
        date: '2024-01-10'
    },
    {
        slug: 'sustainable-agriculture-future',
        title: 'The Future of Sustainable Agriculture',
        excerpt: 'Explore emerging technologies and practices that are shaping the future of sustainable farming. From precision agriculture to renewable energy integration, learn how innovation is transforming the industry...',
        image: Blog1,
        date: '2024-01-05'
    }
]

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Header */}
            <div className=" mt-6 text-center">
                <h1 className="text-5xl font-semibold tracking-tight text-foreground mt-4 mb-4">The Blog</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Welcome to our little corner of the Internet. Kick your feet up and stay a while.
                </p>
            </div>

            {/* Blog Posts */}
            <div className="max-w-7xl mx-auto px-4 pt-6 pb-16">
                <div className="space-y-12">
                    {blogPosts.map((post) => (
                        <article key={post.slug} className="space-y-4 shadow-lg  overflow-hidden border border-border my-6">
                            {/* Featured Image with Hover Effect */}
                            <Link href={`/blog/${post.slug}`}>
                                <div className="relative overflow-hidden  aspect-video bg-muted cursor-pointer group">
                                    <Image
                                        width={800}
                                        height={450}
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-300 "
                                    />
                                    
                                    {/* Gray Overlay */}
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                                    
                                    {/* Green Circle with Link Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-green-600 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                            <ExternalLink className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Content */}
                            <div className="space-y-2 max-w-6xl mx-auto sm:py-6 py-3 sm:my-6 my-4">
                                <h2 className="text-3xl font-semibold text-foreground sm:my-4 my-2 transition-colors hover:text-[#329C34]">
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                                <div className="pt-2">
                                    <Link href={`/blog/${post.slug}`}>
                                        <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-transparent p-0 h-auto font-semibold cursor-pointer">
                                            Read More →
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    )
}