import type { ReactNode } from "react"

interface StatCardProps {
  icon: ReactNode
  value: string
  label: string
}

export default function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="flex flex-col items-center rounded-xl border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-1 text-3xl font-bold">{value}</h3>
      <p className="text-gray-500">{label}</p>
    </div>
  )
}

