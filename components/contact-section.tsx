"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Twitter, Send, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const mailtoLink = `mailto:theonlyone11k2@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "theonlyone11k2@gmail.com",
      link: "mailto:theonlyone11k2@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@TheOnlyOne-2k11",
      link: "https://github.com/TheOnlyOne-2k11",
    },
    {
      icon: Twitter,
      label: "X (Twitter)",
      value: "@TheOnlyOne2k11",
      link: "https://x.com/TheOnlyOne2k11",
    },
  ]

  const quickInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Available Worldwide",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-[#30ffff] to-[#2ef5fc] bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on something amazing? Have a project idea? Or just want to chat about code and
            intentional mischief? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border/50 hover:border-[#30ffff]/30 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-2">
                <Send className="h-6 w-6 text-[#30ffff]" />
                <span>Send a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="border-border/50 focus:border-[#30ffff] focus:ring-[#30ffff]/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-border/50 focus:border-[#30ffff] focus:ring-[#30ffff]/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="border-border/50 focus:border-[#30ffff] focus:ring-[#30ffff]/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or just say hello!"
                    rows={6}
                    required
                    className="border-border/50 focus:border-[#30ffff] focus:ring-[#30ffff]/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#30ffff] hover:bg-[#2ef5fc] text-black font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="border-border/50 hover:border-[#30ffff]/30 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#30ffff]/10 flex items-center justify-center group-hover:bg-[#30ffff]/20 transition-colors duration-300">
                      <info.icon className="h-5 w-5 text-[#30ffff]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-[#30ffff] transition-colors duration-200 font-medium"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="border-border/50 hover:border-[#30ffff]/30 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-[#30ffff]/10 flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-[#30ffff]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="border-[#30ffff]/30 bg-gradient-to-r from-[#30ffff]/5 to-[#2ef5fc]/5">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-[#30ffff]">Ready for Some Intentional Mischief?</h3>
                <p className="text-muted-foreground mb-4">
                  Whether you have a project in mind, want to collaborate, or just want to discuss the latest in AI and
                  security, I'm always excited to connect with fellow developers and curious minds.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    variant="outline"
                    className="border-[#30ffff]/30 hover:border-[#30ffff] hover:bg-[#30ffff]/10 bg-transparent"
                    asChild
                  >
                    <a href="https://github.com/TheOnlyOne-2k11" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Follow on GitHub
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#30ffff]/30 hover:border-[#30ffff] hover:bg-[#30ffff]/10 bg-transparent"
                    asChild
                  >
                    <a href="https://x.com/TheOnlyOne2k11" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4 mr-2" />
                      Connect on X
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
