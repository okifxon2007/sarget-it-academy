import Image from "next/image"
import { Linkedin, Twitter, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function TeamPage() {
  // Sample team data
  const leadership = [
    {
      id: 1,
      name: "Alisher Usmanov",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Former tech executive with 15+ years of experience in the industry. Founded the academy with a mission to make quality tech education accessible to everyone.",
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
    {
      id: 2,
      name: "Malika Karimova",
      role: "Chief Academic Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "PhD in Computer Science with extensive experience in curriculum development. Passionate about creating effective learning experiences.",
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  ]

  const instructors = [
    {
      id: 1,
      name: "Timur Aliyev",
      role: "Lead Web Development Instructor",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Senior developer with 10+ years of experience at top tech companies. Specializes in modern JavaScript frameworks.",
      linkedin: "#",
    },
    {
      id: 2,
      name: "Zarina Rakhimova",
      role: "Data Science Instructor",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Data scientist with background in mathematics and machine learning. Previously worked at major financial institutions.",
      linkedin: "#",
    },
    {
      id: 3,
      name: "Bekzod Tursunov",
      role: "UI/UX Design Instructor",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Award-winning designer with experience at leading design agencies. Passionate about user-centered design principles.",
      linkedin: "#",
    },
    {
      id: 4,
      name: "Nodira Ismoilova",
      role: "Mobile Development Instructor",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Mobile app developer with expertise in React Native and Flutter. Has published several successful apps on App Store and Google Play.",
      linkedin: "#",
    },
    {
      id: 5,
      name: "Jasur Khamidov",
      role: "Cybersecurity Instructor",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Certified security professional with experience in vulnerability assessment and penetration testing.",
      linkedin: "#",
    },
    {
      id: 6,
      name: "Lola Azimova",
      role: "Digital Marketing Instructor",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Marketing strategist with expertise in SEO, content marketing, and social media campaigns.",
      linkedin: "#",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Our Team</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Meet the experts who will guide you on your learning journey. Our instructors bring years of industry
          experience to the classroom.
        </p>
      </div>

      {/* Leadership */}
      <div className="mb-20">
        <h2 className="mb-8 text-2xl font-bold">Leadership</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {leadership.map((leader) => (
            <div
              key={leader.id}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-full min-h-[300px]">
                  <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold">{leader.name}</h3>
                  <p className="mb-4 text-sm text-gray-500">{leader.role}</p>
                  <p className="mb-6 text-gray-600">{leader.bio}</p>
                  <div className="flex gap-2">
                    <a
                      href={leader.linkedin}
                      className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-[#FFD700] hover:text-black"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={leader.twitter}
                      className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-[#FFD700] hover:text-black"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={leader.website}
                      className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-[#FFD700] hover:text-black"
                    >
                      <Globe className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator className="mb-20" />

      {/* Instructors */}
      <div>
        <h2 className="mb-8 text-2xl font-bold">Instructors</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={instructor.image || "/placeholder.svg"}
                  alt={instructor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">{instructor.name}</h3>
                <p className="mb-4 text-sm text-gray-500">{instructor.role}</p>
                <p className="mb-6 text-gray-600">{instructor.bio}</p>
                <div className="flex">
                  <a
                    href={instructor.linkedin}
                    className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-[#FFD700] hover:text-black"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Our Team */}
      <div className="mt-20 rounded-xl bg-[#1A1A1A] p-12 text-white">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Join Our Team</h2>
            <p className="mb-6 text-gray-300">
              We're always looking for talented instructors and staff who are passionate about education and technology.
              If you're interested in joining our team, we'd love to hear from you.
            </p>
            <Button className="bg-[#FFD700] text-black hover:bg-[#E6C200]">View Open Positions</Button>
          </div>
          <div className="relative min-h-[200px] overflow-hidden rounded-xl">
            <Image src="/placeholder.svg?height=400&width=600" alt="Team collaboration" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

