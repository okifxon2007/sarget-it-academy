import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  GraduationCapIcon as Graduation,
  LayoutDashboard,
  PlayCircle,
  Settings,
  User,
  Bell,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden w-64 flex-col border-r bg-white p-4 md:flex">
        <div className="mb-8 flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-[#FFD700]"></div>
          <h1 className="text-xl font-bold">IT Academy</h1>
        </div>

        <nav className="flex flex-1 flex-col gap-2">
          <Link href="/dashboard" className="flex items-center gap-3 rounded-md bg-black px-3 py-2 text-white">
            <LayoutDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/dashboard/courses"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-100"
          >
            <BookOpen className="h-5 w-5" />
            <span>My Courses</span>
          </Link>
          <Link
            href="/dashboard/schedule"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-100"
          >
            <Calendar className="h-5 w-5" />
            <span>Schedule</span>
          </Link>
          <Link
            href="/dashboard/assignments"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-100"
          >
            <FileText className="h-5 w-5" />
            <span>Assignments</span>
          </Link>
          <Link
            href="/dashboard/progress"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-100"
          >
            <Graduation className="h-5 w-5" />
            <span>Progress</span>
          </Link>

          <Separator className="my-4" />

          <Link
            href="/dashboard/profile"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-100"
          >
            <User className="h-5 w-5" />
            <span>Profile</span>
          </Link>
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-100"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </nav>

        <div className="mt-auto rounded-lg bg-gray-100 p-4">
          <p className="mb-2 text-sm font-medium">Need Help?</p>
          <p className="mb-4 text-xs text-gray-600">Contact our support team for assistance</p>
          <Button variant="outline" size="sm" className="w-full">
            Contact Support
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="border-b bg-white p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-200">
                  <Image src="/placeholder.svg?height=32&width=32" alt="User" width={32} height={32} />
                </div>
                <span className="font-medium">John Doe</span>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* Welcome Section */}
          <div className="mb-8 rounded-xl bg-[#1A1A1A] p-6 text-white">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h2 className="mb-2 text-2xl font-bold">Welcome back, John!</h2>
                <p className="mb-4 text-gray-300">You're making great progress. Keep up the good work!</p>
                <div className="mb-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-gray-300">Overall Course Progress</span>
                    <span className="text-sm font-medium text-[#FFD700]">65%</span>
                  </div>
                  <Progress value={65} className="h-2 bg-gray-700" indicatorClassName="bg-[#FFD700]" />
                </div>
                <Button className="bg-[#FFD700] text-black hover:bg-[#E6C200]">
                  Continue Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Dashboard illustration"
                  width={400}
                  height={200}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-sm font-medium text-gray-500">Hours Spent</h3>
              <p className="text-2xl font-bold">42.5</p>
            </div>

            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-sm font-medium text-gray-500">Completed</h3>
              <p className="text-2xl font-bold">12/20</p>
            </div>

            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                <FileText className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-sm font-medium text-gray-500">Assignments</h3>
              <p className="text-2xl font-bold">8/15</p>
            </div>

            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                <Graduation className="h-5 w-5 text-yellow-600" />
              </div>
              <h3 className="text-sm font-medium text-gray-500">Certificates</h3>
              <p className="text-2xl font-bold">2</p>
            </div>
          </div>

          {/* Courses */}
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">My Courses</h2>
              <Link href="/dashboard/courses" className="text-sm font-medium text-[#FFD700] hover:underline">
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
                <div className="relative h-40 w-full">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="Course thumbnail"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full bg-[#FFD700]/90 px-2 py-1 text-xs font-medium text-black">
                      In Progress
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-bold">Full-Stack Web Development</h3>
                  <p className="mb-3 text-sm text-gray-500">12 of 20 lessons completed</p>
                  <div className="mb-4">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs text-gray-500">Progress</span>
                      <span className="text-xs font-medium">60%</span>
                    </div>
                    <Progress value={60} className="h-1.5" />
                  </div>
                  <Button className="w-full" variant="outline">
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Continue Learning
                  </Button>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
                <div className="relative h-40 w-full">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="Course thumbnail"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full bg-green-500/90 px-2 py-1 text-xs font-medium text-white">
                      Completed
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-bold">UI/UX Design Fundamentals</h3>
                  <p className="mb-3 text-sm text-gray-500">15 of 15 lessons completed</p>
                  <div className="mb-4">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs text-gray-500">Progress</span>
                      <span className="text-xs font-medium">100%</span>
                    </div>
                    <Progress value={100} className="h-1.5" />
                  </div>
                  <Button className="w-full" variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    View Certificate
                  </Button>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
                <div className="relative h-40 w-full">
                  <Image
                    src="/placeholder.svg?height=160&width=320"
                    alt="Course thumbnail"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full bg-blue-500/90 px-2 py-1 text-xs font-medium text-white">
                      Just Started
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-bold">Data Science Fundamentals</h3>
                  <p className="mb-3 text-sm text-gray-500">2 of 18 lessons completed</p>
                  <div className="mb-4">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs text-gray-500">Progress</span>
                      <span className="text-xs font-medium">11%</span>
                    </div>
                    <Progress value={11} className="h-1.5" />
                  </div>
                  <Button className="w-full" variant="outline">
                    <PlayCircle className="mr-2 h-4 w-4" />
                    Continue Learning
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming & Assignments */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Upcoming */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold">Upcoming Schedule</h2>
                <Link href="/dashboard/schedule" className="text-sm font-medium text-[#FFD700] hover:underline">
                  View All
                </Link>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 rounded-lg border p-3">
                  <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <span className="text-xs font-medium">MAY</span>
                    <span className="text-lg font-bold leading-none">15</span>
                  </div>
                  <div>
                    <h3 className="font-medium">JavaScript Advanced Concepts</h3>
                    <p className="text-sm text-gray-500">10:00 AM - 12:00 PM</p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-lg border p-3">
                  <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                    <span className="text-xs font-medium">MAY</span>
                    <span className="text-lg font-bold leading-none">17</span>
                  </div>
                  <div>
                    <h3 className="font-medium">React Hooks Workshop</h3>
                    <p className="text-sm text-gray-500">2:00 PM - 4:00 PM</p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-lg border p-3">
                  <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-green-100 text-green-600">
                    <span className="text-xs font-medium">MAY</span>
                    <span className="text-lg font-bold leading-none">20</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Group Project Meeting</h3>
                    <p className="text-sm text-gray-500">11:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Assignments */}
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold">Pending Assignments</h2>
                <Link href="/dashboard/assignments" className="text-sm font-medium text-[#FFD700] hover:underline">
                  View All
                </Link>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                      <FileText className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">JavaScript Final Project</h3>
                      <p className="text-xs text-red-500">Due Tomorrow</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    Submit
                  </Button>
                </div>

                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                      <FileText className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">React Components Quiz</h3>
                      <p className="text-xs text-orange-500">Due in 3 days</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    Start
                  </Button>
                </div>

                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Data Visualization Exercise</h3>
                      <p className="text-xs text-gray-500">Due in 5 days</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    Start
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

