import Image from "next/image"
import { ArrowRight, CheckCircle, Users, Award, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import CoursePreview from "@/components/course-preview"
import TestimonialCard from "@/components/testimonial-card"
import StatCard from "@/components/stat-card"

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/placeholder.svg?height=1080&width=1920" alt="Background pattern" fill className="object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              <span className="text-[#FFD700]">Sarget</span> bilan kasbiy ko'nikmalarni egallang
            </h1>
            <p className="mb-10 text-xl text-gray-300">
              Zamonaviy kasblarni o'rganish va IT sohasida o'z o'rningizni topish uchun professional ta'lim platformasi
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-[#FFD700] text-black hover:bg-[#E6C200]">
                Kurslarni ko'rish
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Demo darsni ko'rish
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <StatCard icon={<Users className="h-10 w-10 text-[#FFD700]" />} value="5,000+" label="O'quvchilar" />
          <StatCard icon={<Award className="h-10 w-10 text-[#FFD700]" />} value="95%" label="Ishga joylashish" />
          <StatCard icon={<BookOpen className="h-10 w-10 text-[#FFD700]" />} value="20+" label="Professional kurslar" />
        </div>
      </section>

      {/* Featured Courses */}
      <section className="container mx-auto px-4 py-10">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Mashhur kurslar</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Eng ko'p talab qilinadigan kasblarni o'rganish uchun kurslarimiz bilan tanishing
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <CoursePreview
            title="Frontend dasturlash"
            description="Zamonaviy veb-saytlar yaratishni o'rganing: HTML, CSS, JavaScript, React"
            image="/placeholder.svg?height=400&width=600"
            duration="6 oy"
            level="O'rta"
            slug="/courses/frontend"
          />
          <CoursePreview
            title="Backend dasturlash"
            description="Server tomonida ishlaydigan dasturlarni yaratishni o'rganing: Node.js, Python, SQL"
            image="/placeholder.svg?height=400&width=600"
            duration="6 oy"
            level="O'rta"
            slug="/courses/backend"
          />
          <CoursePreview
            title="SMM mutaxassisi"
            description="Ijtimoiy tarmoqlar orqali biznesni rivojlantirish strategiyalarini o'rganing"
            image="/placeholder.svg?height=400&width=600"
            duration="3 oy"
            level="Boshlang'ich"
            slug="/courses/smm"
          />
          <CoursePreview
            title="Targetologiya"
            description="Target reklama orqali biznesni rivojlantirish strategiyalarini o'rganing"
            image="/placeholder.svg?height=400&width=600"
            duration="3 oy"
            level="O'rta"
            slug="/courses/target"
          />
          <CoursePreview
            title="Mobilografiya"
            description="Telefon orqali professional foto va video olishni o'rganing"
            image="/placeholder.svg?height=400&width=600"
            duration="2 oy"
            level="Boshlang'ich"
            slug="/courses/mobilografiya"
          />
          <CoursePreview
            title="Grafik dizayn"
            description="Zamonaviy dizayn yo'nalishlarini o'rganing va o'zingizning dizaynlaringizni yarating"
            image="/placeholder.svg?height=400&width=600"
            duration="4 oy"
            level="O'rta"
            slug="/courses/graphic-design"
          />
          <CoursePreview
            title="Kompyuter savodxonligi"
            description="Kompyuterda ishlash asoslarini o'rganing"
            image="/placeholder.svg?height=400&width=600"
            duration="1 oy"
            level="Boshlang'ich"
            slug="/courses/computer-literacy"
          />
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="border-black text-black hover:bg-black/5">
            Barcha kurslarni ko'rish
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Nima uchun Sarget?</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              Bizning yondashuvimiz amaliy ko'nikmalarga va real loyihalarga asoslangan
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-black/30 p-6">
              <CheckCircle className="mb-4 h-10 w-10 text-[#FFD700]" />
              <h3 className="mb-2 text-xl font-bold text-white">Tajribali ustozlar</h3>
              <p className="text-gray-300">Soha mutaxassislaridan ta'lim oling</p>
            </div>
            <div className="rounded-lg bg-black/30 p-6">
              <CheckCircle className="mb-4 h-10 w-10 text-[#FFD700]" />
              <h3 className="mb-2 text-xl font-bold text-white">Amaliy loyihalar</h3>
              <p className="text-gray-300">Portfolio uchun real loyihalar ustida ishlang</p>
            </div>
            <div className="rounded-lg bg-black/30 p-6">
              <CheckCircle className="mb-4 h-10 w-10 text-[#FFD700]" />
              <h3 className="mb-2 text-xl font-bold text-white">Ishga joylashish</h3>
              <p className="text-gray-300">Karyera bo'yicha maslahatlar va ishga joylashishda yordam</p>
            </div>
            <div className="rounded-lg bg-black/30 p-6">
              <CheckCircle className="mb-4 h-10 w-10 text-[#FFD700]" />
              <h3 className="mb-2 text-xl font-bold text-white">Qulay jadval</h3>
              <p className="text-gray-300">O'zingizga qulay vaqtda o'qish imkoniyati</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-10">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Muvaffaqiyat tarixi</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Bitiruvchilarimizning muvaffaqiyat tarixlari bilan tanishing
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            name="Aziza Karimova"
            role="Frontend dasturchi, Tech Solutions"
            image="/placeholder.svg?height=200&width=200"
            quote="Kurs juda foydali bo'ldi. 6 oy ichida dasturlashni o'rganib, yaxshi kompaniyada ish topdim."
          />
          <TestimonialCard
            name="Bobur Aliyev"
            role="Ma'lumotlar tahlilchisi, Finance Corp"
            image="/placeholder.svg?height=200&width=200"
            quote="O'qituvchilar juda professional, dastur esa zamonaviy. Kursni tugatmasimdan oldin bir nechta ish takliflari oldim."
          />
          <TestimonialCard
            name="Dilnoza Umarova"
            role="UX dizayner, Creative Agency"
            image="/placeholder.svg?height=200&width=200"
            quote="Bu dastur hayotimni o'zgartirdi. Amaliy yondashuv va qo'llab-quvvatlash tufayli sevimli kasbimni topdim."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Karyerangizni <span className="text-[#FFD700]">bugun</span> boshlang
            </h2>
            <p className="mb-10 text-xl text-gray-300">
              Minglab o'quvchilar allaqachon bizning kurslarimiz orqali o'z karyeralarini o'zgartirdilar
            </p>
            <Button size="lg" className="bg-[#FFD700] text-black hover:bg-[#E6C200]">
              Ro'yxatdan o'tish
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

