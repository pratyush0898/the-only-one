import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Lock, Brain, Terminal, Network, Shield, Zap } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "CryptoGuard Suite",
      description:
        "Advanced cryptographic toolkit for generating secure keys, encrypting sensitive data, and implementing multi-layer security protocols. Features custom encryption algorithms and secure key management.",
      icon: Lock,
      tags: ["Python", "Cryptography", "Security", "AES", "RSA"],
      github: "https://github.com/TheOnlyOne-2k11",
      demo: null,
      status: "Active Development",
    },
    {
      title: "AI Security Analyzer",
      description:
        "Machine learning-powered security analysis tool that detects vulnerabilities in code and network configurations. Uses neural networks to identify potential security threats.",
      icon: Brain,
      tags: ["Python", "AI/ML", "Security", "TensorFlow", "Cybersecurity"],
      github: "https://github.com/TheOnlyOne-2k11",
      demo: null,
      status: "Beta",
    },
    {
      title: "Termux Automation Scripts",
      description:
        "Collection of powerful shell scripts for Android automation, system monitoring, and security testing. Includes network scanning tools and system optimization utilities.",
      icon: Terminal,
      tags: ["Shell Script", "Termux", "Android", "Automation", "Linux"],
      github: "https://github.com/TheOnlyOne-2k11",
      demo: null,
      status: "Open Source",
    },
    {
      title: "SecureNet Framework",
      description:
        "Networking framework for creating secure connections and implementing custom protocols. Features encrypted communication channels and network security monitoring.",
      icon: Network,
      tags: ["Python", "Networking", "Security", "Protocols", "Encryption"],
      github: "https://github.com/TheOnlyOne-2k11",
      demo: null,
      status: "In Progress",
    },
    {
      title: "DataVault Protector",
      description:
        "Personal data protection system with advanced encryption, secure storage, and privacy-focused features. Ensures complete user data anonymity and security.",
      icon: Shield,
      tags: ["Python", "Data Protection", "Privacy", "Encryption", "Security"],
      github: "https://github.com/TheOnlyOne-2k11",
      demo: null,
      status: "Completed",
    },
    {
      title: "MischiefBot AI",
      description:
        "Playful yet powerful AI assistant that helps with coding tasks, security analysis, and creative problem-solving. Embodies the spirit of intentional mischief in AI.",
      icon: Zap,
      tags: ["Python", "AI", "NLP", "Chatbot", "Machine Learning"],
      github: "https://github.com/TheOnlyOne-2k11",
      demo: null,
      status: "Experimental",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active Development":
        return "bg-[#30ffff]/20 text-[#30ffff] border-[#30ffff]/30"
      case "Beta":
        return "bg-yellow-500/20 text-yellow-500 border-yellow-500/30"
      case "Open Source":
        return "bg-green-500/20 text-green-500 border-green-500/30"
      case "In Progress":
        return "bg-blue-500/20 text-blue-500 border-blue-500/30"
      case "Completed":
        return "bg-purple-500/20 text-purple-500 border-purple-500/30"
      case "Experimental":
        return "bg-orange-500/20 text-orange-500 border-orange-500/30"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#00cccc] to-[#03c2c9] dark:from-[#30ffff] dark:to-[#2ef5fc] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in AI, cryptography, security, and automation—each project built with curiosity and
            intentional mischief
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:shadow-[#30ffff]/10 border-border/50 hover:border-[#30ffff]/30 hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <project.icon className="h-8 w-8 text-[#30ffff] group-hover:scale-110 transition-transform duration-300" />
                  <Badge variant="outline" className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-[#30ffff] transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-[#30ffff]/30 hover:border-[#30ffff] hover:bg-[#30ffff]/10 bg-transparent"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-[#30ffff]/30 hover:border-[#30ffff] hover:bg-[#30ffff]/10 bg-transparent"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-[#30ffff]/30 hover:border-[#30ffff] hover:bg-[#30ffff]/10 bg-transparent"
            asChild
          >
            <a href="https://github.com/TheOnlyOne-2k11?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
