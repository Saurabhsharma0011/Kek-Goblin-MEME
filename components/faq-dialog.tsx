"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    question: "What is KekGoblin ($KEK)?",
    answer:
      "KekGoblin is a 100% community-driven degen meme coin, born from the depths of Kekistan and fueled by Goblin Mode energy. No presale, no dev tax—just pure meme insanity on Solana.",
  },
  {
    question: "How can I buy $KEK?",
    answer:
      "You can buy $KEK on Pump.fun. Simply connect your Solana wallet, swap SOL for $KEK, and embrace the Goblin Mode!",
  },
  {
    question: "Is there a buy/sell tax?",
    answer:
      "No! KekGoblin has zero tax on buys and sells. We believe in free and fair trading for all community members.",
  },
  {
    question: "What makes KekGoblin unique?",
    answer:
      "KekGoblin combines the power of meme culture with true community ownership. No team tokens, no presale allocations - just pure, unadulterated Goblin energy on Solana.",
  },
  {
    question: "How can I join the community?",
    answer:
      "Join our Telegram group and follow us on Twitter to connect with fellow Goblins and stay updated on all things $KEK!",
  },
  {
    question: "What's the total supply?",
    answer:
      "The total supply information will be revealed at launch. What matters is that 100% goes to the community - no team allocations, no VCs, no nonsense!",
  },
  {
    question: "When moon?",
    answer:
      "When Goblin Mode activates! But remember, this is a community-driven project. The moon mission depends on all of us working together!",
  },
]

export function FaqDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-xl rounded-xl
            shadow-[0_0_15px_rgba(134,239,172,0.2)] hover:shadow-[0_0_30px_rgba(134,239,172,0.8)]
            transition-all duration-300"
        >
          View FAQ
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-green-800">Frequently Asked Questions</DialogTitle>
          <DialogDescription>Everything you need to know about KekGoblin ($KEK)</DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] mt-4 pr-4">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

