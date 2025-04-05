import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, BarChart, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CourseCardProps {
  title: string
  description: string
  image: string
  duration: string
  level: string
  price: string
  category: string
  slug: string
}

export default function CourseCard({
  title,
  description,
  image,
  duration,
  level,
  price,
  category,
  slug,
}: CourseCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-[#FFD700] text-black hover:bg-[#FFD700]/80">{category}</Badge>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mb-4 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <BarChart className="h-4 w-4" />
            <span>{level}</span>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium">
            <Tag className="h-4 w-4" />
            <span>{price}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button asChild className="flex-1">
            <Link href={slug}>Enroll Now</Link>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <Link href={`${slug}/details`}>
              Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

