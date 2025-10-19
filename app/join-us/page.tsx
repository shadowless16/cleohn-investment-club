"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

interface MembershipPlan {
  name: string
  price: string
  description: string
  features: string[]
  highlighted: boolean
  delay: number
}

const membershipPlans: MembershipPlan[] = [
  {
    name: "House Member",
    price: "Basic",
    description: "Perfect for beginners starting their investment journey",
    features: [
      "Basic weekly investment opportunities",
      "Build confidence towards financial goals",
      "Community support",
      "Access to webinars",
      "Discounted annual hangout tickets",
    ],
    highlighted: false,
    delay: 0,
  },
  {
    name: "Black Member",
    price: "Premium",
    description: "Complete investment education and opportunities",
    features: [
      "Full club curriculum of courses",
      "Access to past events/webinars recordings",
      "Digital investment tool - Twelvevest",
      "Weekly newsletters with actionable tips",
      "Expert advice and standby support",
      "Access to club partners and experts",
      "Newsletter archive from inception",
    ],
    highlighted: true,
    delay: 1,
  },
]

const subClubs = [
  {
    name: "Stock Market Club",
    description: "Curate long-term portfolios for Nigerian and US stock markets",
    features: ["Extensive research", "Stock recommendations", "Knowledgeable facilitators"],
    delay: 0,
  },
  {
    name: "Venture Capital Club",
    description: "Invest in high-growth startups across Africa",
    features: ["VC investing education", "Top VC fund partnerships", "Pooled investments"],
    delay: 1,
  },
]

export default function JoinUs() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Join The Green Investment Club
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Start your investment journey with education, community, and verified opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">TGIC is right for you if you are...</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Like Wunmi",
                description:
                  "Open to admitting that some of the most important things you want to achieve depend on your income",
              },
              {
                name: "Like Chidozie",
                description:
                  "Focused on the long term and understand there will be ups and downs, but you can make huge gains",
              },
              {
                name: "Like Victoria",
                description:
                  "With absolutely no problem saving money, but with no clue on how to invest or put it to work",
              },
              {
                name: "Like Hakeem",
                description: "You want to earn passive income and stop earning only based on the hours you work",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-card rounded-lg p-6 border border-border ${isLoaded ? "animate-slide-in-down" : "opacity-0"}`}
                style={{
                  animationDelay: isLoaded ? `${index * 0.1}s` : "0s",
                }}
              >
                <h3 className="text-xl font-bold text-accent mb-3">{item.name}</h3>
                <p className="text-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Membership Plans</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {membershipPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg border-2 p-8 transition-all ${
                  plan.highlighted
                    ? "border-accent bg-accent/5 shadow-lg scale-105 md:scale-110"
                    : "border-border bg-card hover:border-accent/50"
                } ${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}
                style={{
                  animationDelay: isLoaded ? `${plan.delay * 0.2}s` : "0s",
                }}
              >
                {plan.highlighted && (
                  <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full inline-block mb-4 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Clubs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Sub-Clubs</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {subClubs.map((club, index) => (
              <div
                key={index}
                className={`bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow ${
                  isLoaded ? "animate-slide-in-right" : "opacity-0"
                }`}
                style={{
                  animationDelay: isLoaded ? `${club.delay * 0.2}s` : "0s",
                }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">{club.name}</h3>
                <p className="text-muted-foreground mb-6">{club.description}</p>

                <div className="space-y-2">
                  {club.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "Is the membership fee invested for me?",
                a: "No. The membership fee is the cost of becoming a member of our community. This gives you lifetime access to all lesson modules, investment information board, weekly newsletter, and expert coaching.",
              },
              {
                q: "What investment opportunities are available?",
                a: "We share a broad range of investment information from SEC-affiliated/registered partners for different budgets. Our focus is to educate you on how to make investment decisions and connect you to credible opportunities.",
              },
              {
                q: "Do you invest on behalf of members?",
                a: "No. We do NOT invest on behalf of our members. We provide financial education, connect you to credible opportunities, and share risks. All investment decisions are personal and made by members themselves.",
              },
              {
                q: "Is TGIC a registered investment advisor?",
                a: "No. TGIC is not a registered investment, legal, or tax advisor. All information is for educational purposes. You should obtain independent financial expert advice before making any investment decisions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-card rounded-lg p-6 border border-border ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
                style={{
                  animationDelay: isLoaded ? `${0.4 + index * 0.1}s` : "0s",
                }}
              >
                <h3 className="text-lg font-bold text-foreground mb-3">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`${isLoaded ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.8s" }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Stop waiting, start investing
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Join hundreds of members building wealth together
            </p>
            <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
              Join Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
