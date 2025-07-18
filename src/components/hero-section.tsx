'use client'

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Filter } from "lucide-react"
 
export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-hero">
      <Card className="w-full h-screen bg-background/95 backdrop-blur-sm border-0 relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <div className="flex h-full">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center max-w-2xl">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold gradient-text">
                  Find Your Dream Job
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Connect with top companies and discover opportunities that match your skills and ambitions. Your next career move starts here.
                </p>
              </div>

              {/* Search Section */}
              <div className="glass rounded-2xl p-6 space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input 
                      placeholder="Job title, keywords, or company" 
                      className="pl-10 bg-background/50 border-border/50 h-12"
                    />
                  </div>
                  <div className="relative flex-1">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input 
                      placeholder="City, state, or remote" 
                      className="pl-10 bg-background/50 border-border/50 h-12"
                    />
                  </div>
                  <Button className="h-12 px-8 bg-primary hover:bg-primary/90 shadow-glow">
                    <Search className="w-5 h-5 mr-2" />
                    Search Jobs
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Filter className="w-4 h-4 mr-2" />
                    Remote Only
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Full-time
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    $100k+
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Tech
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10k+</div>
                  <div className="text-sm text-muted-foreground">Active Jobs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - 3D Scene */}
          <div className="flex-1 relative">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}