"use client"

import { Card } from "@/components/ui/card"

interface Feature {
  icon: string
  title: string
  description: string
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: "📚",
      title: "Financial Education",
      description: "Learn investing through comprehensive video courses and expert-led webinars",
    },
    {
      icon: "📧",
      title: "Weekly Insights",
      description: "Receive market information and investment opportunities in your inbox",
    },
    {
      icon: "🎓",
      title: "Expert Guidance",
      description: "Gain insights from industry experts in our exclusive webinars and events",
    },
    {
      icon: "🤝",
      title: "Community Network",
      description: "Connect with ambitious investors and build meaningful relationships",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What You Get</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Everything you need to become a successful investor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="space-y-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-foreground/60">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
