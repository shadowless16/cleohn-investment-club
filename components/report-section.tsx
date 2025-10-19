"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ReportSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-96 md:h-full">
            <Card className="h-full overflow-hidden border-border/50">
              <img src="/investment-report-cover.jpg" alt="Annual Report" className="w-full h-full object-cover" />
            </Card>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Gain insight into how we democratized investment opportunities
            </h2>

            <p className="text-lg text-foreground/70">
              Discover our impact over the past 3 years through comprehensive data and success stories
            </p>

            <ul className="space-y-4">
              {[
                "Impact of financial education on member portfolios",
                "Portfolio diversification strategies during market volatility",
                "Growth stories of companies we invested in",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent text-xl mt-1">✓</span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>

            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Download Report</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
