"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-accent-foreground font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">CLEOHN</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/mission" className="text-foreground/70 hover:text-foreground transition-colors">
              Mission
            </Link>
            <Link href="/member-stories" className="text-foreground/70 hover:text-foreground transition-colors">
              Stories
            </Link>
            <Link href="/join-us" className="text-foreground/70 hover:text-foreground transition-colors">
              Join Us
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="bg-transparent">
              Login
            </Button>
            <Link href="/join-us">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Join Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link href="/join-us">
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Join Now
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
            <div className="px-4 py-4 space-y-3">
              <Link 
                href="/" 
                className="block text-foreground/70 hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/mission" 
                className="block text-foreground/70 hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Mission
              </Link>
              <Link 
                href="/member-stories" 
                className="block text-foreground/70 hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Stories
              </Link>
              <Link 
                href="/join-us" 
                className="block text-foreground/70 hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </Link>
              <div className="pt-2 border-t border-border">
                <Button variant="outline" className="w-full mb-2 bg-transparent">
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
