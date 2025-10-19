"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

interface Stat {
  value: string
  label: string
  delay: number
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const stats: Stat[] = [
    { value: "#1+", label: "Most Active Investment Club in Africa", delay: 0 },
    { value: "2000+", label: "Members of the Club", delay: 100 },
    { value: "37+", label: "Countries with Members", delay: 200 },
    { value: "$24M+", label: "Total Co-Invested", delay: 300 },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`p-6 border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${stat.delay}ms` }}
            >
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</p>
                <p className="text-sm text-foreground/60">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
