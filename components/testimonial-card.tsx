import Image from "next/image"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  image: string
  quote: string
}

export default function TestimonialCard({ name, role, image, quote }: TestimonialCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
      <Quote className="mb-4 h-8 w-8 text-[#FFD700]" />
      <p className="mb-6 text-gray-600">{quote}</p>
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  )
}

