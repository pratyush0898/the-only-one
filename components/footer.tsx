"use client"

import { Heart, Code, Zap } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="The Only One Logo" width={32} height={32} className="w-8 h-8" />
              <span className="font-bold text-lg bg-gradient-to-r from-[#30ffff] to-[#2ef5fc] bg-clip-text text-transparent">
                The Only One
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Building the future with Python, AI, and a healthy dose of intentional mischief. One line of code at a
              time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#30ffff]">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a
                href="#about"
                className="block text-muted-foreground hover:text-[#30ffff] transition-colors duration-200"
              >
                About Me
              </a>
              <a
                href="#projects"
                className="block text-muted-foreground hover:text-[#30ffff] transition-colors duration-200"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="block text-muted-foreground hover:text-[#30ffff] transition-colors duration-200"
              >
                Skills
              </a>
              <a
                href="#collaboration"
                className="block text-muted-foreground hover:text-[#30ffff] transition-colors duration-200"
              >
                Collaboration
              </a>
              <a
                href="#contact"
                className="block text-muted-foreground hover:text-[#30ffff] transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#30ffff]">Connect</h3>
            <div className="space-y-2 text-sm">
              <a
                href="https://github.com/TheOnlyOne-2k11"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-[#30ffff] transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href="https://x.com/TheOnlyOne2k11"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-[#30ffff] transition-colors duration-200"
              >
                X (Twitter)
              </a>
              <a
                href="mailto:theonlyone11k2@gmail.com"
                className="block text-muted-foreground hover:text-[#30ffff] transition-colors duration-200"
              >
                Email
              </a>
              <a
                href="https://nvmpratyush.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-[#30ffff] transition-colors duration-200"
              >
                Pratyush Kumar
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Code className="h-4 w-4 text-[#30ffff]" />
              <span>and a bit of</span>
              <Zap className="h-4 w-4 text-yellow-500" />
              <span>intentional mischief</span>
            </div>

            <div className="text-sm text-muted-foreground">© 2024 The Only One. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
