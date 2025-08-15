"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Shield, Network, Terminal, Brain, Zap } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Shell Script", "Bash", "JavaScript", "SQL", "HTML/CSS"],
      color: "text-[#30ffff]",
    },
    {
      title: "Security & Cryptography",
      icon: Shield,
      skills: [
        "AES Encryption",
        "RSA",
        "Hash Functions",
        "Digital Signatures",
        "Key Management",
        "Penetration Testing",
      ],
      color: "text-red-500",
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        "TensorFlow",
        "Scikit-learn",
        "Natural Language Processing",
        "Neural Networks",
        "Computer Vision",
        "Data Analysis",
      ],
      color: "text-purple-500",
    },
    {
      title: "Networking & Systems",
      icon: Network,
      skills: [
        "Network Security",
        "Protocol Analysis",
        "System Administration",
        "Linux",
        "Network Scanning",
        "Firewall Configuration",
      ],
      color: "text-blue-500",
    },
    {
      title: "Mobile & Terminal",
      icon: Terminal,
      skills: [
        "Termux",
        "Android Development",
        "Shell Automation",
        "System Monitoring",
        "Process Management",
        "Task Scheduling",
      ],
      color: "text-green-500",
    },
    {
      title: "Tools & Platforms",
      icon: Zap,
      skills: ["Git", "GitHub", "Docker", "VS Code", "Jupyter", "Wireshark"],
      color: "text-orange-500",
    },
  ]

  const achievements = [
    { label: "Security Projects", value: "15+" },
    { label: "AI Models Trained", value: "8+" },
    { label: "Shell Scripts Created", value: "50+" },
    { label: "GitHub Repositories", value: "25+" },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Technical{" "}
            <span className="bg-gradient-to-r from-[#30ffff] to-[#2ef5fc] bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through curiosity, experimentation, and countless hours of intentional
            mischief
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:shadow-[#30ffff]/20 border-border/50 hover:border-[#30ffff]/30"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <category.icon
                    className={`h-6 w-6 ${category.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:bg-[#30ffff]/20 hover:text-[#30ffff] transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {achievements.map((achievement, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl font-bold text-[#30ffff]">{achievement.value}</div>
              <div className="text-sm text-muted-foreground">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Skill Philosophy */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto border-[#30ffff]/20 bg-gradient-to-r from-[#30ffff]/5 to-[#2ef5fc]/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#30ffff]">My Learning Philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "Every skill is a tool for intentional mischief. I don't just learn technologies—I explore their
                boundaries, push their limits, and find creative ways to combine them. Whether it's using AI to enhance
                security protocols or leveraging networking knowledge to build better encryption systems, I believe the
                magic happens at the intersection of different domains."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
