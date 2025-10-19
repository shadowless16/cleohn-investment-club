"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import StatsSection from "@/components/stats-section"
import FeaturesSection from "@/components/features-section"
import ReportSection from "@/components/report-section"
import BenefitsSection from "@/components/benefits-section"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero isLoaded={isLoaded} />
      <StatsSection />
      <FeaturesSection />
      <ReportSection />
      <BenefitsSection />
      <Footer />
    </main>
  )
}
