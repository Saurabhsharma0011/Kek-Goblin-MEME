"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Twitter, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ParticleContainer } from "@/components/particle-container"
import { cn } from "@/lib/utils"
import { FaqDialog } from "@/components/faq-dialog"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

interface RoadmapCardProps {
  phase: string
  title: string
  items: string[]
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ phase, title, items }) => {
  return (
    <motion.div variants={{}} whileHover={{ scale: 1.05 }} className="h-full">
      <Card
        className="p-6 h-full bg-white/80 dark:bg-black/80 backdrop-blur-sm
                  hover:shadow-[0_0_25px_rgba(134,239,172,0.3)] transition-all duration-300
                  border-2 border-green-500/20 hover:border-green-500"
      >
        <div className="text-green-600 font-bold mb-2">{phase}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <ul className="list-disc pl-5">
          {items.map((item, index) => (
            <li key={index} className="text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  )
}

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#e8ffa3] to-[#c1ff72] animate-gradient"
    >
      <div className="min-h-screen bg-gradient-to-b from-[#e8ffa3] to-[#c1ff72]">
        {/* Header */}
        <header
          className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300",
            scrolled ? "bg-transparent/30 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4",
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container mx-auto px-4 h-16 flex items-center justify-between"
          >
            <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kekegoblin_logo__2_-removebg-preview-eWiMHMHfrnj6AhJttHtWGwq1GtSPsP.png"
                alt="KekGoblin Logo"
                width={40}
                height={40}
                className="w-10 h-10 animate-pulse"
              />
              <span className="font-bold text-xl text-green-700">KekGoblin</span>
            </Link>

            <div className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="hover:text-green-600 transition-colors">
                <Link href="https://x.com/KekGoblinsol">
                  <Twitter className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="hover:text-green-600 transition-colors">
                <Link href="https://t.me/KekGoblinSol">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </header>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <ParticleContainer />
          <div className="container mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-6xl md:text-8xl font-extrabold mb-4 text-green-800 glow-text">$KEK</h1>
              <p className="text-2xl md:text-3xl mb-8 text-green-700 animate-float">The Ultimate Degen Meme Invasion</p>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="relative w-full max-w-md mx-auto mb-8"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vecteezy_green-goblin-with-axe-3d_46593441%201-HVxMu7zHHi6FC1o9ZS42MPk8qlmYOO.png"
                alt="KekGoblin Hero"
                width={300}
                height={300}
                className="mx-auto drop-shadow-[0_0_15px_rgba(134,239,172,0.5)]"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                asChild
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-xl rounded-xl
                shadow-[0_0_15px_rgba(134,239,172,0.2)] hover:shadow-[0_0_30px_rgba(134,239,172,0.8)]
                transition-all duration-300"
              >
                <Link href="https://pump.fun">
                  Buy Now <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 px-4 bg-white/50 relative overflow-hidden"
        >
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold mb-6 text-green-800 glow-text">What is KekGoblin?</h2>
                <p className="text-lg mb-6 leading-relaxed">
                  KekGoblin is a 100% community-driven degen meme coin, born from the depths of Kekistan and fueled by
                  Goblin Mode energy. No presale, no dev tax—just pure meme insanity on Solana.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vecteezy_green-goblin-with-sword-3d-graphic_46593405%201-MFN1FbrrysStqjGRGSMoMDGMkrzVAt.png"
                    alt="Goblin Warrior"
                    width={400}
                    height={400}
                    className="mx-auto drop-shadow-[0_0_25px_rgba(134,239,172,0.3)]"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Tokenomics Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 px-4 relative overflow-hidden"
        >
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-green-800 glow-text">Tokenomics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {[
                {
                  title: "100% Community-Owned",
                  description: "No dev allocations, no insider games - pure community power",
                  delay: 0.1,
                },
                {
                  title: "Zero Tax Policy",
                  description: "Trade freely without unnecessary fees eating into your gains",
                  delay: 0.2,
                },
                {
                  title: "Fair Launch Protocol",
                  description: "Launched on Pump.fun with equal opportunity for all",
                  delay: 0.3,
                },
                {
                  title: "Solana Infrastructure",
                  description: "Lightning-fast transactions with minimal gas fees",
                  delay: 0.4,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(134,239,172,0.5)",
                  }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border-2 border-green-500/20 hover:border-green-500 
                    transition-all duration-300 h-full"
                >
                  <h3 className="text-xl font-bold text-green-700 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Roadmap Section */}
        <section className="py-20 px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="container mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-green-800 glow-text">
              Roadmap – The Goblin Takeover Begins
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <RoadmapCard
                  phase="Phase 1"
                  title="Goblin Awakening"
                  items={["Meme campaign begins", "Twitter & community building", "Pump.fun fair launch"]}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <RoadmapCard
                  phase="Phase 2"
                  title="Goblin Expansion"
                  items={[
                    "Heavy meme raids & Twitter engagement",
                    "First wave of influencer-backed degen shills",
                    "Solana ecosystem integrations & first CEX listing talks",
                  ]}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <RoadmapCard
                  phase="Phase 3"
                  title="Goblin Domination"
                  items={[
                    "Strategic marketing pushes to extend reach",
                    "NFT & utility-based Goblin expansion",
                    "First major exchange listing",
                  ]}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <RoadmapCard
                  phase="Phase 4"
                  title="Full Goblin Takeover"
                  items={[
                    "Meme dominance across Solana & beyond",
                    "$KEK everywhere – community decides the next evolution",
                    "Goblin Mode is now a way of life",
                  ]}
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 px-4 bg-white/50 text-center"
        >
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl font-bold text-center mb-6 text-green-800 glow-text">Got Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to all your questions about KekGoblin and join the Goblin revolution
            </p>
            <FaqDialog />
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-green-900 text-white relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto relative z-10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vecteezy_green-goblin-3d-object_46593407%201-4bqnBSwNkewionvMiXNuxsFtkuNEis.png"
                  alt="KekGoblin"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="font-bold">KekGoblin</span>
              </motion.div>
              <div className="flex gap-6">
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                  <Link href="https://x.com/KekGoblinsol" className="hover:text-green-400 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: -10 }}>
                  <Link href="https://t.me/KekGoblinSol" className="hover:text-green-400 transition-colors">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M21.5 2L2 11l7 3.5L17 7l-6.5 8.5L19 19l2.5-17z" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
              <div className="text-sm text-green-300">Not financial advice, just Goblin Mode</div>
            </div>
          </motion.div>
        </footer>
      </div>
    </motion.div>
  )
}

