import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Code, Lightbulb, Zap, Heart, Rocket } from "lucide-react"

export function MischiefSection() {
  const mischiefPrinciples = [
    {
      icon: Sparkles,
      title: "Curiosity First",
      quote: "Every bug is a mystery waiting to be solved, every error a puzzle begging for attention.",
      description:
        "I approach coding with the wonder of a child discovering magic tricks—except the magic is real, and the tricks are algorithms.",
    },
    {
      icon: Lightbulb,
      title: "Fearless Experimentation",
      quote: "What happens if I combine AI with cryptography? Let's find out!",
      description:
        "The best discoveries come from asking 'what if' and having the courage to break things in the name of learning.",
    },
    {
      icon: Zap,
      title: "Playful Problem Solving",
      quote: "Why solve a problem the boring way when you can make it an adventure?",
      description:
        "Every challenge is an opportunity to be creative, to think outside the box, and to find solutions that make you smile.",
    },
    {
      icon: Heart,
      title: "Learning While Laughing",
      quote: "The best code is written with joy, debugged with patience, and shared with enthusiasm.",
      description:
        "Programming isn't just about solving problems—it's about enjoying the journey and celebrating every small victory.",
    },
  ]

  const mischiefMoments = [
    "Accidentally created a security system so secure I locked myself out (learned about backup authentication!)",
    "Built an AI that started writing poetry instead of analyzing data (kept the poetry feature)",
    "Wrote a shell script that organized my files so well I couldn't find anything (improved my documentation skills)",
    "Created a network scanner that found my neighbor's smart toaster (learned about IoT security)",
    "Developed a cryptographic key so complex I forgot how I made it (now I document everything)",
  ]

  return (
    <section
      id="mischief"
      className="py-20 bg-gradient-to-br from-[#30ffff]/5 via-transparent to-[#2ef5fc]/5 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#30ffff] rounded-full animate-pulse opacity-60" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#2ef5fc] rounded-full animate-ping opacity-40" />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-[#30ffff]/30 rounded-full animate-bounce opacity-50" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#2ef5fc]/50 rounded-full animate-pulse opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="h-8 w-8 text-[#30ffff] animate-pulse" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Intentional{" "}
              <span className="bg-gradient-to-r from-[#00cccc] to-[#03c2c9] dark:from-[#30ffff] dark:to-[#2ef5fc] bg-clip-text text-transparent">
                Mischief
              </span>
            </h2>
            <Sparkles className="h-8 w-8 text-[#2ef5fc] animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where serious coding meets playful curiosity—because the best solutions come from those who dare to
            experiment, fail, learn, and laugh along the way
          </p>
        </div>

        {/* Mischief Principles */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mischiefPrinciples.map((principle, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 hover:shadow-[#30ffff]/20 border-border/50 hover:border-[#30ffff]/30 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <principle.icon className="h-8 w-8 text-[#30ffff] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <h3 className="text-xl font-bold group-hover:text-[#30ffff] transition-colors duration-300">
                    {principle.title}
                  </h3>
                </div>
                <blockquote className="text-lg italic text-[#30ffff] mb-4 border-l-4 border-[#30ffff]/30 pl-4">
                  "{principle.quote}"
                </blockquote>
                <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mischief Moments */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            <Rocket className="inline h-6 w-6 text-[#30ffff] mr-2" />
            Tales of <span className="text-[#30ffff]">Accidental Discovery</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mischiefMoments.map((moment, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:shadow-[#30ffff]/10 border-border/50 hover:border-[#30ffff]/30 hover:rotate-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#30ffff] rounded-full mt-2 flex-shrink-0 group-hover:animate-pulse" />
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {moment}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy Statement */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto border-[#30ffff]/30 bg-gradient-to-r from-[#30ffff]/10 to-[#2ef5fc]/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Code className="h-6 w-6 text-[#30ffff]" />
                <Heart className="h-6 w-6 text-[#2ef5fc]" />
                <Zap className="h-6 w-6 text-[#30ffff]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00cccc] to-[#03c2c9] dark:from-[#30ffff] dark:to-[#2ef5fc] bg-clip-text text-transparent">
                The Mischief Manifesto
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                "Intentional mischief isn't about breaking things for the sake of chaos—it's about approaching problems
                with curiosity, creativity, and a healthy disregard for 'that's how it's always been done.' It's about
                finding joy in the process, learning from failures, and never losing the sense of wonder that makes
                coding feel like magic."
              </p>
              <p className="text-base text-muted-foreground/80 italic">
                Every line of code is an opportunity for discovery. Every bug is a teacher. Every solution is a small
                victory worth celebrating.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
