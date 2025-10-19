"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function BenefitsSection() {
  const benefits = [
    "Lifetime access to financial education",
    "Exclusive investment opportunities",
    "Weekly market insights and analysis",
    "Networking with 2000+ investors",
    "Expert-led webinars and events",
    "Personalized investment guidance",
  ]

  return (
    <section className="py-16 md:py-24 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Join InvestHub?</h2>
          <p className="text-lg text-foreground/60">Everything you need to succeed as an investor</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 border-border/50 hover:border-accent/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm font-bold">✓</span>
                </div>
                <p className="text-foreground/80">{benefit}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to start your investment journey?
          </h3>
          <p className="text-lg text-foreground/70 mb-6 max-w-2xl mx-auto">
            Join thousands of investors building wealth together
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Become a Member Today
          </Button>
        </div>
      </div>
    </section>
  )
}
