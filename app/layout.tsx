import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "The Only One - Python Developer & Security Enthusiast",
  description:
    "Portfolio of The Only One - A 14-year-old enthusiastic Python developer specializing in AI, cryptography, and security applications. Building cutting-edge tech with curiosity and joy.",
  keywords: [
    "Python Developer",
    "Cryptography",
    "AI",
    "Security",
    "Shell Scripting",
    "Termux",
    "Networking",
    "Young Developer",
  ],
  authors: [{ name: "The Only One" }],
  creator: "The Only One",
  publisher: "The Only One",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theonlyone-portfolio.vercel.app",
    title: "The Only One - Python Developer & Security Enthusiast",
    description:
      "Portfolio of The Only One - A 14-year-old enthusiastic Python developer specializing in AI, cryptography, and security applications.",
    siteName: "The Only One Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Only One - Python Developer & Security Enthusiast",
    description:
      "Portfolio of The Only One - A 14-year-old enthusiastic Python developer specializing in AI, cryptography, and security applications.",
    creator: "@TheOnlyOne2k11",
  },
  generator: "Next.js",
  applicationName: "The Only One Portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#30ffff" },
    { media: "(prefers-color-scheme: dark)", color: "#30ffff" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
