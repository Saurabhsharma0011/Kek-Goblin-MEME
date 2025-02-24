import type React from "react"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Providers } from "@/components/providers"

export const metadata: Metadata = {
  title: "KekGoblin",
  description: "The Ultimate Degen Meme Invasion on Solana",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kekegoblin%20logo%20(3)-a0JaxJzLGu6uBIZePJXpx0GQigLSQb.webp",
        href: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kekegoblin%20logo%20(3)-a0JaxJzLGu6uBIZePJXpx0GQigLSQb.webp",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}



import './globals.css'