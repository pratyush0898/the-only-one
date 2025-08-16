import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Twitter, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#30ffff]/10 via-transparent to-[#2ef5fc]/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(48,255,255,0.1),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#30ffff] rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#2ef5fc] rounded-full animate-ping" />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-[#30ffff]/50 rounded-full animate-bounce" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <Image
            src="/logo.png"
            alt="The Only One Logo"
            width={120}
            height={120}
            className="mx-auto w-24 h-24 sm:w-30 sm:h-30 animate-float"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="bg-gradient-to-r from-[#00cccc] to-[#03c2c9] dark:from-[#30ffff] dark:to-[#2ef5fc] bg-clip-text text-transparent">
            The Only One
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-slide-up animation-delay-200">
          Enthusiastic Python Developer | 9th Grade | Building with Curiosity
          and Joy
        </p>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground/80 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-400">
          Crafting cutting-edge solutions in AI, cryptography, and security with
          the spirit of intentional mischief
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up animation-delay-600">
          <Link href={'#about'}>
            <Button
              size="lg"
              className="bg-[#30ffff] hover:bg-[#2ef5fc] text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Explore My Journey
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#30ffff]/30 hover:border-[#30ffff] hover:bg-[#30ffff]/10 bg-transparent"
              asChild
            >
              <a
                href="https://github.com/TheOnlyOne-2k11"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#30ffff]/30 hover:border-[#30ffff] hover:bg-[#30ffff]/10 bg-transparent"
              asChild
            >
              <a
                href="https://x.com/TheOnlyOne2k11"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#30ffff]/30 hover:border-[#30ffff] hover:bg-[#30ffff]/10 bg-transparent"
              asChild
            >
              <a href="mailto:theonlyone11k2@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-[#30ffff] mx-auto" />
        </div>
      </div>
    </section>
  );
}
