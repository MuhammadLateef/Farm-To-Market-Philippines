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
        title: 'Joke: Texas Farmer Visits Australia',
        excerpt: 'A Texas farmer visits Australia. While driving, he sees a farmer and stops to discuss farm stuff. The Texan exclaims: “This is a nice farm but in Texas they are much bigger”. The Australian shows him his herds of cows and sheep, “Very nice too but in Texas the animals are bigger and the herds are larger”. Then 2 kangaroos …',
        image: Blog3,
        date: '2024-01-10'
    },
    {
        slug: 'sustainable-agriculture-future',
        title: 'Is Farming a Good Profession?',
        excerpt: 'Introduction Farming is a modest yet noble job. Without farmers, the whole world will starve to death. Being someone who contributes to the production of food that feeds your fellowman is very fulfilling. Farming has been an entire profession throughout human history, providing essential sustenance for civilizations. In today’s rapidly changing world where technology and industries dominate, the question arises: …',
        image: Blog1,
        date: '2024-01-05'
    }
]

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Header */}
            <div className=" mt-6 text-center">
                <h1 className=" text-5xl font-semibold tracking-tight text-foreground mt-4 mb-4">The Blog</h1>
                <p className="  max-w-2xl mx-auto  text-lg   sm:px-0 px-8">
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
                            <div className="space-y-2 max-w-6xl mx-auto sm:py-6 py-3 md:my-6 sm:my-4 my-2 px-4">
                                <h2 className="md:text-3xl sm:text-2xl text-xl font-semibold text-foreground sm:my-4 my-2 transition-colors hover:text-[#329C34]">
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h2>
                                <p className="  leading-relaxed md:text-base text-sm">{post.excerpt}</p>
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