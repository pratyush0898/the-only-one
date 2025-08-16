import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Users, Code, Lightbulb, Rocket } from "lucide-react"

export function CollaborationSection() {
  const collaborationHighlights = [
    {
      icon: Code,
      title: "Full-Stack Synergy",
      description: "Combining Python backend expertise with JavaScript frontend mastery for complete solutions",
    },
    {
      icon: Lightbulb,
      title: "Innovation Through Diversity",
      description: "Different perspectives and skill sets creating breakthrough solutions in AI and security",
    },
    {
      icon: Rocket,
      title: "Rapid Prototyping",
      description: "Quick iteration cycles from concept to working prototype through collaborative development",
    },
  ]

  const sharedProjects = [
    {
      title: "SecureChat AI",
      description:
        "End-to-end encrypted messaging platform with AI-powered threat detection and real-time security monitoring.",
      technologies: ["Python", "Node.js", "React", "Cryptography", "AI/ML"],
      status: "Active Development",
    },
    {
      title: "CyberGuard Dashboard",
      description:
        "Web-based security monitoring dashboard with real-time threat analysis and automated response systems.",
      technologies: ["Python", "JavaScript", "WebSockets", "Security APIs", "Data Visualization"],
      status: "Beta Testing",
    },
    {
      title: "AI Security Toolkit",
      description:
        "Comprehensive security analysis suite combining machine learning algorithms with web-based interfaces.",
      technologies: ["Python", "TensorFlow", "Next.js", "API Development", "Cloud Security"],
      status: "Planning Phase",
    },
  ]

  return (
    <section id="collaboration" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Working{" "}
            <span className="bg-gradient-to-r from-[#00cccc] to-[#03c2c9] dark:from-[#30ffff] dark:to-[#2ef5fc] bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In collaboration with Pratyush Kumar, we're building the future of secure, intelligent applications
          </p>
        </div>

        {/* Collaborator Profile */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto border-[#30ffff]/20 bg-gradient-to-r from-[#30ffff]/5 to-[#2ef5fc]/5">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Users className="h-8 w-8 text-[#30ffff]" />
                <div>
                  <CardTitle className="text-2xl">Pratyush Kumar</CardTitle>
                  <p className="text-muted-foreground">Web Developer & JavaScript Expert</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-auto border-[#30ffff]/30 hover:border-[#30ffff] hover:bg-[#30ffff]/10 bg-transparent"
                  asChild
                >
                  <a href="https://nvmpratyush.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Portfolio
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed mb-6">
                Pratyush is a skilled web developer with expertise in JavaScript and Node.js. He has extensive
                experience in building scalable, secure, and reliable web applications using various frameworks and
                technologies. He enjoys solving complex problems and learning new skills, with a passion for creating
                high-quality code that follows best practices and industry standards. Always looking for new challenges
                and opportunities to grow as a developer.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">API Development</Badge>
                <Badge variant="secondary">Full-Stack Development</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Collaboration Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {collaborationHighlights.map((highlight, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:shadow-[#30ffff]/20 border-border/50 hover:border-[#30ffff]/30 text-center"
            >
              <CardContent className="p-8">
                <highlight.icon className="h-12 w-12 text-[#30ffff] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Shared Projects */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            Our <span className="text-[#30ffff]">Collaborative Projects</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sharedProjects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:shadow-[#30ffff]/10 border-border/50 hover:border-[#30ffff]/30 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg group-hover:text-[#30ffff] transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="bg-[#30ffff]/20 text-[#30ffff] border-[#30ffff]/30">
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Collaboration Philosophy */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto border-[#30ffff]/20 bg-gradient-to-r from-[#30ffff]/5 to-[#2ef5fc]/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#30ffff]">Why We Work Well Together</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "The magic happens when Python meets JavaScript, when security expertise combines with web development
                mastery, and when intentional mischief meets structured development practices. Together, we're not just
                building applications— we're crafting the future of secure, intelligent, and user-friendly technology."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
