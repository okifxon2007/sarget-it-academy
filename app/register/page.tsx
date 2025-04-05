"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function RegisterPage() {
  const router = useRouter()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and format as Uzbek phone number
    const value = e.target.value.replace(/\D/g, "")
    if (value.length <= 9) {
      setPhone(value)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validate name fields
    if (firstName.trim().length < 2) {
      setError("Ism kamida 2 ta harfdan iborat bo'lishi kerak")
      return
    }

    if (lastName.trim().length < 2) {
      setError("Familiya kamida 2 ta harfdan iborat bo'lishi kerak")
      return
    }

    // Validate phone number (should be 9 digits for Uzbek numbers without the +998)
    if (phone.length !== 9) {
      setError("Telefon raqami 9 raqamdan iborat bo'lishi kerak")
      return
    }

    // Validate password
    if (password.length < 6) {
      setError("Parol kamida 6 ta belgidan iborat bo'lishi kerak")
      return
    }

    if (password !== confirmPassword) {
      setError("Parollar mos kelmadi")
      return
    }

    setLoading(true)

    try {
      // In a real app, this would be an API call to your backend
      // Simulating API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulate successful registration
      localStorage.setItem("auth_token", "sample_token_" + Date.now())
      localStorage.setItem("user_name", firstName)
      localStorage.setItem("user_phone", phone)

      // Redirect to home page
      router.push("/")
    } catch (err) {
      setError("Ro'yxatdan o'tishda xatolik yuz berdi")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Ro'yxatdan o'tish</h1>
          <p className="text-gray-500">Sarget ta'lim platformasiga a'zo bo'ling</p>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Ism</Label>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Ism"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Familiya</Label>
              <Input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Familiya"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefon raqam</Label>
            <div className="flex">
              <div className="flex items-center rounded-l-md border border-r-0 bg-muted px-3 text-sm text-muted-foreground">
                +998
              </div>
              <Input
                id="phone"
                type="tel"
                placeholder="90 123 45 67"
                value={phone}
                onChange={handlePhoneChange}
                className="rounded-l-none"
                required
              />
            </div>
            <p className="text-xs text-muted-foreground">Telefon raqamingiz login sifatida ishlatiladi</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Parol</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Parolni tasdiqlang</Label>
            <Input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-[#FFD700] text-black hover:bg-[#E6C200]" disabled={loading}>
            {loading ? "Ro'yxatdan o'tish..." : "Ro'yxatdan o'tish"}
            {!loading && <UserPlus className="ml-2 h-4 w-4" />}
          </Button>
        </form>

        <div className="text-center text-sm">
          Allaqachon hisobingiz bormi?{" "}
          <Link href="/login" className="font-medium text-[#FFD700] hover:underline">
            Tizimga kirish
          </Link>
        </div>
      </div>
    </div>
  )
}

