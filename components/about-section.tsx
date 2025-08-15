"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Shield, Network, Terminal, Brain, Zap } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Python Enthusiast",
      description: "Passionate about clean, efficient code and exploring Python's endless possibilities",
    },
    {
      icon: Shield,
      title: "Security Focus",
      description: "Creating robust security keys and protecting user data with advanced cryptography",
    },
    {
      icon: Network,
      title: "Networking Knowledge",
      description: "Applying networking expertise for secure connections and system setups",
    },
    {
      icon: Terminal,
      title: "Shell Scripting",
      description: "Skilled in shell scripting and Termux for powerful automation solutions",
    },
    {
      icon: Brain,
      title: "AI Explorer",
      description: "Building cutting-edge AI applications and exploring machine learning frontiers",
    },
    {
      icon: Zap,
      title: "Intentional Mischief",
      description: "Coding with curiosity and joy - serious yet playful approach to development",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-[#30ffff] to-[#2ef5fc] bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A 14-year-old developer who believes that the best code comes from curiosity, collaboration, and a healthy
            dose of intentional mischief
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-lg leading-relaxed">
                Currently in 9th grade, I'm an enthusiastic Python developer with an insatiable curiosity for building
                cutting-edge technology. My journey in programming isn't just about writing code—it's about exploring
                the endless possibilities that technology offers.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in <strong className="text-[#30ffff]">AI applications</strong>,{" "}
                <strong className="text-[#30ffff]">cryptography</strong>, and{" "}
                <strong className="text-[#30ffff]">complex security systems</strong>. Whether it's creating robust
                security keys, protecting user data, or ensuring personal information safety, I approach each project
                with both technical precision and creative thinking.
              </p>
              <p className="text-lg leading-relaxed">
                My expertise extends to <strong className="text-[#30ffff]">shell scripting</strong>,{" "}
                <strong className="text-[#30ffff]">Termux</strong>, and{" "}
                <strong className="text-[#30ffff]">networking</strong>, which I leverage to create secure connections
                and efficient system setups. I view coding as "intentional mischief"—a perfect blend of serious
                technical work and playful experimentation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:shadow-[#30ffff]/20 border-border/50 hover:border-[#30ffff]/30"
              >
                <CardContent className="p-6 text-center">
                  <highlight.icon className="h-8 w-8 text-[#30ffff] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold mb-2 text-sm">{highlight.title}</h3>
                  <p className="text-xs text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#30ffff]">14</div>
            <div className="text-sm text-muted-foreground">Years Old</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#30ffff]">9th</div>
            <div className="text-sm text-muted-foreground">Grade</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#30ffff]">∞</div>
            <div className="text-sm text-muted-foreground">Curiosity Level</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#30ffff]">100%</div>
            <div className="text-sm text-muted-foreground">Mischief Intent</div>
          </div>
        </div>
      </div>
    </section>
  )
}
