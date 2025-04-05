"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, BookOpen, CheckCircle, Clock, FileText, Play, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CourseContentPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is authenticated and has access to this course
    const token = localStorage.getItem("auth_token")

    if (!token) {
      // Redirect to login if not authenticated
      router.push("/login")
      return
    }

    // In a real app, you would verify if the user has purchased this course
    // For demo purposes, we'll just set authenticated to true
    setIsAuthenticated(true)
    setIsLoading(false)
  }, [router])

  if (isLoading) {
    return (
      <div className="container mx-auto flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-[#FFD700] border-t-transparent"></div>
          <p>Yuklanmoqda...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // This will not be shown as we redirect in useEffect
  }

  // Sample course data - in a real app, you would fetch this based on the slug
  const course = {
    title: "Frontend dasturlash",
    description: "Zamonaviy veb-saytlar yaratishni o'rganing: HTML, CSS, JavaScript, React va boshqa texnologiyalar.",
    image: "/placeholder.svg?height=400&width=600",
    progress: 15,
    modules: [
      {
        id: 1,
        title: "Kirish",
        lessons: [
          { id: 1, title: "Kurs haqida", duration: "10 daqiqa", completed: true, type: "video" },
          { id: 2, title: "Kerakli dasturlarni o'rnatish", duration: "15 daqiqa", completed: true, type: "video" },
          { id: 3, title: "Veb-dasturlash asoslari", duration: "20 daqiqa", completed: false, type: "video" },
        ],
      },
      {
        id: 2,
        title: "HTML asoslari",
        lessons: [
          { id: 4, title: "HTML tuzilishi", duration: "25 daqiqa", completed: false, type: "video" },
          { id: 5, title: "Teglar va atributlar", duration: "30 daqiqa", completed: false, type: "video" },
          { id: 6, title: "Formalar va kiritish elementlari", duration: "35 daqiqa", completed: false, type: "video" },
          { id: 7, title: "HTML amaliy mashg'ulot", duration: "45 daqiqa", completed: false, type: "practice" },
        ],
      },
      {
        id: 3,
        title: "CSS asoslari",
        lessons: [
          { id: 8, title: "CSS sintaksisi", duration: "25 daqiqa", completed: false, type: "video" },
          { id: 9, title: "Selektorlar", duration: "30 daqiqa", completed: false, type: "video" },
          { id: 10, title: "Ranglar va fonlar", duration: "20 daqiqa", completed: false, type: "video" },
          { id: 11, title: "Maket yaratish", duration: "40 daqiqa", completed: false, type: "video" },
          { id: 12, title: "CSS amaliy mashg'ulot", duration: "50 daqiqa", completed: false, type: "practice" },
        ],
      },
    ],
    materials: [
      { id: 1, title: "HTML qo'llanma", type: "pdf" },
      { id: 2, title: "CSS qo'llanma", type: "pdf" },
      { id: 3, title: "Kod namunalari", type: "zip" },
    ],
    assignments: [
      { id: 1, title: "Shaxsiy veb-sayt yaratish", deadline: "2023-06-15", completed: false },
      { id: 2, title: "Responsive dizayn loyihasi", deadline: "2023-06-30", completed: false },
    ],
  }

  // Calculate total lessons and completed lessons
  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0)
  const completedLessons = course.modules.reduce(
    (acc, module) => acc + module.lessons.filter((lesson) => lesson.completed).length,
    0,
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href={`/courses/${params.slug}`}
          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#FFD700]"
        >
          <ArrowLeft className="h-4 w-4" />
          Kurs haqida
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Course Content */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h1 className="mb-2 text-3xl font-bold">{course.title}</h1>
            <p className="text-gray-600">{course.description}</p>
          </div>

          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-gray-600">Kurs jarayoni</span>
              <span className="text-sm font-medium">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
            <div className="mt-2 text-sm text-gray-600">
              <span>{completedLessons} ta dars tugatildi</span>
              <span className="mx-2">•</span>
              <span>{totalLessons - completedLessons} ta dars qoldi</span>
            </div>
          </div>

          <Tabs defaultValue="content">
            <TabsList className="mb-6 grid w-full grid-cols-3">
              <TabsTrigger value="content">Kurs tarkibi</TabsTrigger>
              <TabsTrigger value="materials">Materiallar</TabsTrigger>
              <TabsTrigger value="assignments">Topshiriqlar</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-6">
              {course.modules.map((module) => (
                <div key={module.id} className="rounded-lg border bg-white shadow-sm">
                  <div className="border-b bg-gray-50 p-4">
                    <h3 className="font-bold">{module.title}</h3>
                    <p className="text-sm text-gray-600">{module.lessons.length} ta dars</p>
                  </div>
                  <div className="divide-y">
                    {module.lessons.map((lesson) => (
                      <div key={lesson.id} className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${lesson.completed ? "bg-green-100" : "bg-gray-100"}`}
                          >
                            {lesson.completed ? (
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            ) : lesson.type === "video" ? (
                              <PlayCircle className="h-5 w-5 text-gray-600" />
                            ) : (
                              <FileText className="h-5 w-5 text-gray-600" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-medium">{lesson.title}</h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Clock className="h-3 w-3" />
                              <span>{lesson.duration}</span>
                              {lesson.type === "practice" && (
                                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700">
                                  Amaliy mashg'ulot
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant={lesson.completed ? "outline" : "default"}
                          className={lesson.completed ? "" : "bg-[#FFD700] text-black hover:bg-[#E6C200]"}
                        >
                          {lesson.completed ? "Qayta ko'rish" : "Boshlash"}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="materials">
              <div className="rounded-lg border bg-white shadow-sm">
                <div className="border-b p-4">
                  <h3 className="font-bold">Qo'shimcha materiallar</h3>
                </div>
                <div className="divide-y">
                  {course.materials.map((material) => (
                    <div key={material.id} className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{material.title}</h4>
                          <p className="text-xs text-gray-500">{material.type.toUpperCase()}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Yuklab olish
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="assignments">
              <div className="rounded-lg border bg-white shadow-sm">
                <div className="border-b p-4">
                  <h3 className="font-bold">Topshiriqlar</h3>
                </div>
                <div className="divide-y">
                  {course.assignments.map((assignment) => (
                    <div key={assignment.id} className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                          <FileText className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{assignment.title}</h4>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>Muddat: {assignment.deadline}</span>
                            {assignment.completed ? (
                              <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
                                Topshirilgan
                              </span>
                            ) : (
                              <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs text-yellow-700">
                                Topshirilmagan
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant={assignment.completed ? "outline" : "default"}
                        className={assignment.completed ? "" : "bg-[#FFD700] text-black hover:bg-[#E6C200]"}
                      >
                        {assignment.completed ? "Ko'rish" : "Topshirish"}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 space-y-6">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                width={400}
                height={225}
                className="w-full object-cover"
              />
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold">Kurs ma'lumotlari</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Darslar soni</p>
                    <p className="font-medium">{totalLessons} ta dars</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tugatilgan</p>
                    <p className="font-medium">{completedLessons} ta dars</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                    <Clock className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Davomiyligi</p>
                    <p className="font-medium">6 oy</p>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <Button className="w-full bg-[#FFD700] text-black hover:bg-[#E6C200]">
                <Play className="mr-2 h-4 w-4" />
                Keyingi darsni boshlash
              </Button>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold">Yordam kerakmi?</h3>
              <p className="mb-4 text-sm text-gray-600">
                Kurs bo'yicha savollaringiz bo'lsa, bizning qo'llab-quvvatlash jamoamiz sizga yordam berishga tayyor.
              </p>
              <Button variant="outline" className="w-full">
                Yordam so'rash
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

