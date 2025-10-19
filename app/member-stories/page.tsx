"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

interface Story {
  name: string
  location: string
  quote: string
  achievement: string
  delay: number
}

const stories: Story[] = [
  {
    name: "Busayo",
    location: "Nigeria",
    quote:
      "I was actively looking to find a group of like-minded people to invest with and verify opportunities to invest.",
    achievement:
      "Leveled up from fixed deposits to understanding Agriculture, Credit, Eurobonds, and Stock Market opportunities.",
    delay: 0,
  },
  {
    name: "Adaobi",
    location: "Nigeria",
    quote:
      "I needed a place where I could get proper financial knowledge that I could trust and a platform to help me start my financial journey.",
    achievement: "Crafted a clear vision of financial life and became more knowledgeable in a carefully curated way.",
    delay: 1,
  },
  {
    name: "Tolulope",
    location: "Nigeria",
    quote: "I was quite skeptical about investing and didn't want to lose money or end up being swindled.",
    achievement:
      "Now the entire family is investing together, and my dad is back in the stock market making better informed decisions.",
    delay: 2,
  },
  {
    name: "Wale",
    location: "Texas",
    quote:
      "Hearing about TGIC felt like a dream come true. A community that would inform, verify, and provide diverse opportunities.",
    achievement: "Grew investment portfolio by 35x by end of 2020 through consistent investing and compound interest.",
    delay: 3,
  },
]

export default function MemberStories() {
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
              Member Stories
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Real stories from real members who transformed their financial lives through The Green Investment Club
            </p>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`bg-card rounded-lg p-8 border border-border shadow-sm hover:shadow-md transition-shadow ${
                  isLoaded ? "animate-slide-in-left" : "opacity-0"
                }`}
                style={{
                  animationDelay: isLoaded ? `${story.delay * 0.15}s` : "0s",
                }}
              >
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent font-bold text-lg">{story.name[0]}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{story.name}</h3>
                      <p className="text-sm text-muted-foreground">{story.location}</p>
                    </div>
                  </div>
                </div>

                <blockquote className="mb-6 border-l-4 border-accent pl-4">
                  <p className="text-foreground italic">"{story.quote}"</p>
                </blockquote>

                <div className="bg-accent/5 rounded p-4">
                  <p className="text-sm font-semibold text-accent mb-2">Achievement:</p>
                  <p className="text-foreground text-sm">{story.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`${isLoaded ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Ready to Write Your Own Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Join hundreds of members who are transforming their financial futures
            </p>
            <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
              Join Us Today
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
