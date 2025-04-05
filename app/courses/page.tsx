import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import CourseCard from "@/components/course-card"
import { Separator } from "@/components/ui/separator"

export default function CoursesPage() {
  // Sample course data
  const courses = [
    {
      id: 1,
      title: "Frontend dasturlash",
      description: "Zamonaviy veb-saytlar yaratishni o'rganing: HTML, CSS, JavaScript, React va boshqa texnologiyalar.",
      image: "/placeholder.svg?height=400&width=600",
      duration: "6 oy",
      level: "O'rta",
      price: "2,400,000 so'm",
      category: "Dasturlash",
      slug: "/courses/frontend",
    },
    {
      id: 2,
      title: "Backend dasturlash",
      description: "Server tomonida ishlaydigan dasturlarni yaratishni o'rganing: Node.js, Python, SQL va boshqalar.",
      image: "/placeholder.svg?height=400&width=600",
      duration: "6 oy",
      level: "O'rta",
      price: "2,400,000 so'm",
      category: "Dasturlash",
      slug: "/courses/backend",
    },
    {
      id: 3,
      title: "SMM mutaxassisi",
      description: "Ijtimoiy tarmoqlar orqali biznesni rivojlantirish strategiyalarini o'rganing.",
      image: "/placeholder.svg?height=400&width=600",
      duration: "3 oy",
      level: "Boshlang'ich",
      price: "1,800,000 so'm",
      category: "Marketing",
      slug: "/courses/smm",
    },
    {
      id: 4,
      title: "Target reklama",
      description: "Ijtimoiy tarmoqlarda maqsadli reklama kampaniyalarini yaratish va boshqarishni o'rganing.",
      image: "/placeholder.svg?height=400&width=600",
      duration: "2 oy",
      level: "Boshlang'ich",
      price: "1,500,000 so'm",
      category: "Marketing",
      slug: "/courses/target",
    },
    {
      id: 5,
      title: "Mobilografiya",
      description: "Smartfonda professional darajada suratga va videoga olishni o'rganing.",
      image: "/placeholder.svg?height=400&width=600",
      duration: "2 oy",
      level: "Boshlang'ich",
      price: "1,200,000 so'm",
      category: "Dizayn",
      slug: "/courses/mobilografiya",
    },
    {
      id: 6,
      title: "Grafik dizayn",
      description: "Photoshop, Illustrator va boshqa dasturlar yordamida grafik dizayn asoslarini o'rganing.",
      image: "/placeholder.svg?height=400&width=600",
      duration: "4 oy",
      level: "Boshlang'ich",
      price: "2,000,000 so'm",
      category: "Dizayn",
      slug: "/courses/grafik-dizayn",
    },
    {
      id: 7,
      title: "Kompyuter savodxonligi",
      description: "Kompyuter va internet bilan ishlash asoslarini o'rganing.",
      image: "/placeholder.svg?height=400&width=600",
      duration: "1 oy",
      level: "Boshlang'ich",
      price: "800,000 so'm",
      category: "Asosiy ko'nikmalar",
      slug: "/courses/kompyuter-savodxonligi",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Bizning kurslar</h1>
        <p className="max-w-3xl text-lg text-gray-600">
          Zamonaviy kasblarni o'rganish va IT sohasida o'z o'rningizni topish uchun kurslarimiz bilan tanishing.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            Barcha kurslar
          </Button>
          <Button variant="outline" size="sm">
            Dasturlash
          </Button>
          <Button variant="outline" size="sm">
            Marketing
          </Button>
          <Button variant="outline" size="sm">
            Dizayn
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Saralash:</span>
          <select className="rounded-md border border-gray-300 px-2 py-1 text-sm">
            <option>Mashhurlik</option>
            <option>Narx: Pastdan yuqoriga</option>
            <option>Narx: Yuqoridan pastga</option>
            <option>Davomiyligi</option>
          </select>
        </div>
      </div>

      <Separator className="mb-8" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            image={course.image}
            duration={course.duration}
            level={course.level}
            price={course.price}
            category={course.category}
            slug={course.slug}
          />
        ))}
      </div>
    </div>
  )
}

