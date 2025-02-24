import type { Metadata } from "next"
import HomePage from "@/components/home-page"

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
}

export default function Page() {
  return <HomePage />
}

