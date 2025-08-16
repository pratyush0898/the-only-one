import { Card, CardContent } from "@/components/ui/card";
import { Code, Shield, Network, Terminal, Brain, Zap } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Python Enthusiast",
      description:
        "Passionate about clean, efficient code and exploring Python's endless possibilities",
    },
    {
      icon: Shield,
      title: "Security Focus",
      description:
        "Creating robust security keys and protecting user data with advanced cryptography",
    },
    {
      icon: Network,
      title: "Networking Knowledge",
      description:
        "Applying networking expertise for secure connections and system setups",
    },
    {
      icon: Terminal,
      title: "Shell Scripting",
      description:
        "Skilled in shell scripting and Termux for powerful automation solutions",
    },
    {
      icon: Brain,
      title: "AI Explorer",
      description:
        "Building cutting-edge AI applications and exploring machine learning frontiers",
    },
    {
      icon: Zap,
      title: "Intentional Mischief",
      description:
        "Coding with curiosity and joy - serious yet playful approach to development",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-[#00cccc] to-[#03c2c9] dark:from-[#30ffff] dark:to-[#2ef5fc] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A 14-year-old developer who believes that the best code comes from
            curiosity, collaboration, and a healthy dose of intentional mischief
          </p>
        </div>

        <div className="grid md:grid-cols-1 items-center mb-16">
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:shadow-[#30ffff]/20 border-border/50 hover:border-[#30ffff]/30"
              >
                <CardContent className="p-6 text-center">
                  <highlight.icon className="h-8 w-8 text-[#30ffff] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold mb-2 text-sm">
                    {highlight.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {highlight.description}
                  </p>
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
  );
}
