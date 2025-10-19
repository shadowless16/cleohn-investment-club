"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Mission() {
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
              Our Mission
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Empowering individuals to achieve financial freedom through education, community, and verified investment
              opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Mission Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`mb-12 ${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}>
            <h2 className="text-3xl font-bold text-foreground mb-6">It all began with a simple mission</h2>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              We have all either heard or had our own share of sad investment experiences, from the profits that never
              returned to opportunities we heard about only after it sold out. Most times, you don't even know where to
              begin from. With careers (outside finance) to prioritize, it is often hard for most people to do the due
              diligence that investment requires.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              That financial education and diligence is exactly what Tomie Balogun took upon herself. In 2013, she
              started an investment club with four other MBA classmates at the time. They would pool individual funds
              together to get access to bigger investment opportunities; share the rewards and risks; and hold each
              accountable to their financial goals.
            </p>
          </div>

          <div
            className={`bg-accent/10 rounded-lg p-8 mb-12 border border-accent/20 ${isLoaded ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-2xl font-bold text-accent mb-4">Our Growth</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent mb-2">1000+</p>
                <p className="text-foreground">Members</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent mb-2">20+</p>
                <p className="text-foreground">Countries</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent mb-2">$9M+</p>
                <p className="text-foreground">Invested</p>
              </div>
            </div>
          </div>

          <div className={`${isLoaded ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Community Helping Communities</h2>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Beyond our paid membership system, we also support social and communal development through the TGIC Social
              Responsibility Fund which we have deployed to support a number of initiatives.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Ideation Hub Africa Partnership</h4>
                  <p className="text-muted-foreground">Supporting sustainable social change initiatives</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">LSETF Partnership</h4>
                  <p className="text-muted-foreground">Raising funds for businesses to recover from crises</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Bethesda Child Support Agency</h4>
                  <p className="text-muted-foreground">Sponsoring 10 children to school every year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`${isLoaded ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Ready to take that one big step further?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Join the biggest investment club and be part of our mission
            </p>
            <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
              Join the Club
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
