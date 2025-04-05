import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function BlogPage() {
  // Sample blog data
  const featuredPost = {
    id: 1,
    title: "How to Become a Full-Stack Developer in 2023",
    excerpt:
      "A comprehensive guide to the skills, tools, and resources you need to become a full-stack developer in today's competitive job market.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "May 15, 2023",
    author: "Alisher Usmanov",
    category: "Career Advice",
    slug: "/blog/become-full-stack-developer",
  }

  const posts = [
    {
      id: 2,
      title: "The Future of AI in Education",
      excerpt:
        "Exploring how artificial intelligence is transforming the educational landscape and what it means for students and educators.",
      image: "/placeholder.svg?height=400&width=600",
      date: "June 2, 2023",
      author: "Malika Karimova",
      category: "Technology Trends",
      slug: "/blog/ai-in-education",
    },
    {
      id: 3,
      title: "5 Essential Soft Skills for Tech Professionals",
      excerpt:
        "Technical skills are important, but soft skills can make or break your career. Learn which soft skills are most valued in the tech industry.",
      image: "/placeholder.svg?height=400&width=600",
      date: "June 10, 2023",
      author: "Zarina Rakhimova",
      category: "Career Advice",
      slug: "/blog/soft-skills-tech-professionals",
    },
    {
      id: 4,
      title: "Understanding Data Structures: A Beginner's Guide",
      excerpt: "A clear and concise introduction to fundamental data structures every programmer should know.",
      image: "/placeholder.svg?height=400&width=600",
      date: "June 18, 2023",
      author: "Timur Aliyev",
      category: "Programming",
      slug: "/blog/data-structures-guide",
    },
    {
      id: 5,
      title: "How to Build a Portfolio That Gets You Hired",
      excerpt:
        "Practical tips for creating a standout portfolio that showcases your skills and attracts potential employers.",
      image: "/placeholder.svg?height=400&width=600",
      date: "June 25, 2023",
      author: "Bekzod Tursunov",
      category: "Career Advice",
      slug: "/blog/portfolio-building",
    },
    {
      id: 6,
      title: "The Rise of No-Code Development",
      excerpt:
        "Exploring the growing trend of no-code development platforms and what it means for traditional programmers.",
      image: "/placeholder.svg?height=400&width=600",
      date: "July 5, 2023",
      author: "Nodira Ismoilova",
      category: "Technology Trends",
      slug: "/blog/no-code-development",
    },
    {
      id: 7,
      title: "Cybersecurity Best Practices for Remote Work",
      excerpt: "Essential security measures to protect your data and privacy while working remotely.",
      image: "/placeholder.svg?height=400&width=600",
      date: "July 12, 2023",
      author: "Jasur Khamidov",
      category: "Cybersecurity",
      slug: "/blog/cybersecurity-remote-work",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Blog</h1>
        <p className="max-w-3xl text-lg text-gray-600">
          Insights, tips, and resources to help you succeed in your tech career. Stay updated with the latest trends and
          best practices.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-16 overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative min-h-[300px]">
            <Image
              src={featuredPost.image || "/placeholder.svg"}
              alt={featuredPost.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <div className="mb-4 flex items-center gap-4">
              <span className="rounded-full bg-[#FFD700]/20 px-3 py-1 text-xs font-medium text-black">
                {featuredPost.category}
              </span>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Calendar className="h-3 w-3" />
                <span>{featuredPost.date}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <User className="h-3 w-3" />
                <span>{featuredPost.author}</span>
              </div>
            </div>
            <h2 className="mb-4 text-2xl font-bold">{featuredPost.title}</h2>
            <p className="mb-6 text-gray-600">{featuredPost.excerpt}</p>
            <Link
              href={featuredPost.slug}
              className="flex items-center gap-2 font-medium text-black hover:text-[#FFD700]"
            >
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <Separator className="mb-16" />

      {/* Blog Categories */}
      <div className="mb-8 flex flex-wrap gap-2">
        <Button variant="outline" size="sm" className="rounded-full">
          All
        </Button>
        <Button variant="outline" size="sm" className="rounded-full">
          Career Advice
        </Button>
        <Button variant="outline" size="sm" className="rounded-full">
          Technology Trends
        </Button>
        <Button variant="outline" size="sm" className="rounded-full">
          Programming
        </Button>
        <Button variant="outline" size="sm" className="rounded-full">
          Cybersecurity
        </Button>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative h-48 w-full">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <span className="rounded-full bg-[#FFD700]/20 px-3 py-1 text-xs font-medium text-black">
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" />
                  <span>{post.date}</span>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
              <p className="mb-4 text-gray-600">{post.excerpt}</p>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-200">
                  <Image src="/placeholder.svg?height=32&width=32" alt={post.author} width={32} height={32} />
                </div>
                <span className="text-sm text-gray-500">{post.author}</span>
              </div>
              <Link href={post.slug} className="flex items-center gap-2 font-medium text-black hover:text-[#FFD700]">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="mt-20 rounded-xl bg-[#1A1A1A] p-12 text-white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="mb-6 text-gray-300">
            Stay updated with the latest articles, tutorials, and resources to help you advance your tech career.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border border-gray-700 bg-black/50 px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />
            <Button className="bg-[#FFD700] text-black hover:bg-[#E6C200]">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

