"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface RoadmapCardProps {
  phase: string
  title: string
  items: string[]
}

export function RoadmapCard({ phase, title, items }: RoadmapCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 30px rgba(134,239,172,0.3)",
      }}
      className="h-full"
    >
      <Card
        className="p-6 h-full bg-white/80 backdrop-blur-sm
        transition-all duration-300
        border-2 border-green-500/20 hover:border-green-500"
      >
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <motion.div className="text-green-600 font-bold mb-1" whileHover={{ scale: 1.05 }}>
              {phase}
            </motion.div>
            <motion.h3 className="text-xl font-bold mb-4" whileHover={{ scale: 1.05 }}>
              {title}
            </motion.h3>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

