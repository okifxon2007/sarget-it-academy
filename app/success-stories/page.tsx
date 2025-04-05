import Image from "next/image"
import { Quote } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import TestimonialCard from "@/components/testimonial-card"

export default function SuccessStoriesPage() {
  // Sample testimonial data
  const featuredTestimonial = {
    name: "Aziza Karimova",
    role: "Frontend Developer at Tech Solutions",
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Before joining the academy, I was working in a completely different field with no technical background. The course was challenging but incredibly rewarding. I went from knowing nothing about coding to landing a job as a developer in just 6 months. The instructors were supportive and the curriculum was comprehensive. I'm now earning twice my previous salary and doing work I truly enjoy.",
    video: "/placeholder.svg?height=400&width=600",
  }

  const testimonials = [
    {
      id: 1,
      name: "Bobur Aliyev",
      role: "Data Analyst at Finance Corp",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "The instructors were amazing and the curriculum was exactly what employers are looking for. I received multiple job offers before even completing the course.",
    },
    {
      id: 2,
      name: "Dilnoza Umarova",
      role: "UX Designer at Creative Agency",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "This program changed my life. The practical approach to learning and the supportive community helped me transition to a career I love.",
    },
    {
      id: 3,
      name: "Jahongir Tursunov",
      role: "Backend Developer at Tech Innovators",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "The hands-on projects were invaluable. I built a real portfolio that impressed employers and gave me confidence in interviews.",
    },
    {
      id: 4,
      name: "Kamola Rakhimova",
      role: "Mobile Developer at AppWorks",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "The career support was exceptional. They helped me prepare for interviews and connected me with employers in the industry.",
    },
    {
      id: 5,
      name: "Rustam Karimov",
      role: "Cybersecurity Specialist at SecureTech",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "The academy provided me with both theoretical knowledge and practical skills. I was able to immediately apply what I learned to real-world scenarios.",
    },
    {
      id: 6,
      name: "Nilufar Abdullayeva",
      role: "Product Manager at SoftServe",
      image: "/placeholder.svg?height=200&width=200",
      quote:
        "The networking opportunities were incredible. I met so many industry professionals who helped guide my career path.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Success Stories</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Real stories from our graduates who have transformed their careers and lives through our programs.
        </p>
      </div>

      {/* Featured Success Story */}
      <div className="mb-16 overflow-hidden rounded-xl bg-[#1A1A1A] text-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12">
            <Quote className="mb-6 h-12 w-12 text-[#FFD700]" />
            <p className="mb-6 text-lg leading-relaxed">{featuredTestimonial.quote}</p>
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src={featuredTestimonial.image || "/placeholder.svg"}
                  alt={featuredTestimonial.name}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">{featuredTestimonial.name}</h3>
                <p className="text-sm text-gray-300">{featuredTestimonial.role}</p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[300px]">
            <Image
              src={featuredTestimonial.video || "/placeholder.svg"}
              alt="Success story video"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD700]/80 text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="mb-16" />

      {/* Success Stories Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            role={testimonial.role}
            image={testimonial.image}
            quote={testimonial.quote}
          />
        ))}
      </div>

      {/* Statistics */}
      <div className="mt-20 rounded-xl bg-[#1A1A1A] p-12 text-white">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Our Impact</h2>
          <p className="text-gray-300">The numbers speak for themselves</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <p className="mb-2 text-4xl font-bold text-[#FFD700]">95%</p>
            <p className="text-gray-300">Employment Rate</p>
          </div>
          <div className="text-center">
            <p className="mb-2 text-4xl font-bold text-[#FFD700]">5,000+</p>
            <p className="text-gray-300">Graduates</p>
          </div>
          <div className="text-center">
            <p className="mb-2 text-4xl font-bold text-[#FFD700]">150+</p>
            <p className="text-gray-300">Partner Companies</p>
          </div>
          <div className="text-center">
            <p className="mb-2 text-4xl font-bold text-[#FFD700]">70%</p>
            <p className="text-gray-300">Salary Increase</p>
          </div>
        </div>
      </div>
    </div>
  )
}

