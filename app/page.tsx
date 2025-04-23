"use client"

import { useState } from "react"
import EmojiGrid from "@/components/emoji-grid"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import emojiData from "@/data/emoji-data.js"

export default function Home() {
  const [copiedItem, setCopiedItem] = useState<{ value: string; type: "character" | "id" } | null>(null)

  // Get unique categories
  const categories = [...new Set(emojiData.emojis.map((emoji) => emoji.category))]

  const handleCopy = (value: string, type: "character" | "id") => {
    navigator.clipboard.writeText(value)
    setCopiedItem({ value, type })

    // Reset the copied notification after 2 seconds
    setTimeout(() => {
      setCopiedItem(null)
    }, 2000)
  }

  return (
    <>
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6 text-center">VimeWorld Emojis</h1>

      {copiedItem && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-300 text-green-700 px-4 py-2 rounded-md shadow-md animate-fade-in-out">
          <span className="font-bold">{copiedItem.value}</span> {copiedItem.type === "character" ? "character" : "ID"}{" "}
          copied to clipboard
        </div>
      )}

      <Tabs defaultValue={categories[0]}>
        <div className="overflow-x-auto flex justify-center">
  <TabsList className="mb-4 inline-flex w-auto justify-center">
    {categories.map((category) => (
      <TabsTrigger key={category} value={category} className="mb-1">
        {category}
      </TabsTrigger>
    ))}
  </TabsList>
</div>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <EmojiGrid emojis={emojiData.emojis.filter((emoji) => emoji.category === category)} onCopy={handleCopy} />
          </TabsContent>
        ))}
      </Tabs>
    </main>
    <div className="w-full flex justify-center mt-8 mb-4">
      <a href="https://t.me/ArnoGevorkyan" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-blue-500 transition-colors">
        я хочу тун тун тун сахур
      </a>
    </div>
  </>
  )
}
