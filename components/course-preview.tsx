import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CoursePreviewProps {
  title: string
  description: string
  image: string
  duration: string
  level: string
  slug: string
}

export default function CoursePreview({ title, description, image, duration, level, slug }: CoursePreviewProps) {
  return (
    <div className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <BarChart className="h-4 w-4" />
            <span>{level}</span>
          </div>
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-6 text-gray-600">{description}</p>
        <Button asChild className="w-full">
          <Link href={slug}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

