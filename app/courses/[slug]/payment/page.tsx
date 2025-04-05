"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"

export default function CoursePaymentPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  // In a real app, you would fetch course details based on the slug
  const courseDetails = {
    title: "Frontend dasturlash",
    price: "2,400,000 so'm",
    image: "/placeholder.svg?height=400&width=600",
    duration: "6 oy",
    level: "O'rta",
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate successful payment
      setSuccess(true)

      // In a real app, you would redirect to the course content page after successful payment
      setTimeout(() => {
        router.push(`/courses/${params.slug}/content`)
      }, 2000)
    } catch (err) {
      setError("To'lov jarayonida xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="container mx-auto flex min-h-[70vh] max-w-md items-center justify-center px-4">
        <div className="w-full space-y-6 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold">To'lov muvaffaqiyatli amalga oshirildi!</h1>
          <p className="text-gray-600">
            Tabriklaymiz! Siz "{courseDetails.title}" kursiga muvaffaqiyatli ro'yxatdan o'tdingiz.
          </p>
          <Button
            className="bg-[#FFD700] text-black hover:bg-[#E6C200]"
            onClick={() => router.push(`/courses/${params.slug}/content`)}
          >
            Kursni boshlash
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          href={`/courses/${params.slug}`}
          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#FFD700]"
        >
          <ArrowLeft className="h-4 w-4" />
          Kursga qaytish
        </Link>
      </div>

      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold">Kurs uchun to'lov</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Course Summary */}
          <div className="md:col-span-1">
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold">Buyurtma ma'lumotlari</h2>

              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src={courseDetails.image || "/placeholder.svg"}
                  alt={courseDetails.title}
                  width={300}
                  height={200}
                  className="w-full object-cover"
                />
              </div>

              <h3 className="mb-2 font-bold">{courseDetails.title}</h3>

              <div className="mb-4 space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Davomiyligi:</span>
                  <span>{courseDetails.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Daraja:</span>
                  <span>{courseDetails.level}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between font-bold">
                <span>Jami:</span>
                <span>{courseDetails.price}</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="md:col-span-2">
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-bold">To'lov ma'lumotlari</h2>

              {error && (
                <Alert variant="destructive" className="mb-6">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Label>To'lov usulini tanlang</Label>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                  >
                    <div
                      className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 ${paymentMethod === "card" ? "border-[#FFD700] bg-[#FFD700]/5" : ""}`}
                    >
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex cursor-pointer items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        <span>Bank karta</span>
                      </Label>
                    </div>
                    <div
                      className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 ${paymentMethod === "click" ? "border-[#FFD700] bg-[#FFD700]/5" : ""}`}
                    >
                      <RadioGroupItem value="click" id="click" />
                      <Label htmlFor="click" className="cursor-pointer">
                        Click
                      </Label>
                    </div>
                    <div
                      className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 ${paymentMethod === "payme" ? "border-[#FFD700] bg-[#FFD700]/5" : ""}`}
                    >
                      <RadioGroupItem value="payme" id="payme" />
                      <Label htmlFor="payme" className="cursor-pointer">
                        Payme
                      </Label>
                    </div>
                    <div
                      className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 ${paymentMethod === "cash" ? "border-[#FFD700] bg-[#FFD700]/5" : ""}`}
                    >
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash" className="cursor-pointer">
                        Naqd pul
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Karta raqami</Label>
                      <Input id="cardNumber" placeholder="0000 0000 0000 0000" required />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Amal qilish muddati</Label>
                        <Input id="expiryDate" placeholder="MM/YY" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardholderName">Karta egasining ismi</Label>
                      <Input id="cardholderName" placeholder="JOHN DOE" required />
                    </div>
                  </div>
                )}

                <Button type="submit" className="w-full bg-[#FFD700] text-black hover:bg-[#E6C200]" disabled={loading}>
                  {loading ? "To'lov amalga oshirilmoqda..." : `${courseDetails.price} to'lash`}
                </Button>

                <p className="text-center text-xs text-gray-500">
                  "To'lash" tugmasini bosish orqali siz{" "}
                  <Link href="/terms" className="text-[#FFD700] hover:underline">
                    foydalanish shartlari
                  </Link>{" "}
                  va{" "}
                  <Link href="/privacy" className="text-[#FFD700] hover:underline">
                    maxfiylik siyosati
                  </Link>
                  ga rozilik bildirasiz.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

