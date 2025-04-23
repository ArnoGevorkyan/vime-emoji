import EmojiButton from "./emoji-button"
import type { EmojiData } from "@/types/emoji"

interface EmojiGridProps {
  emojis: EmojiData[]
  onCopy: (value: string, type: "character" | "id") => void
}

export default function EmojiGrid({ emojis, onCopy }: EmojiGridProps) {
  // Function to get image URL for a character
  const getImageUrl = (char: string) => {
    // You can place your PNG files in public/emoji-images/
    return `/emoji-images/${char}.svg`
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {emojis.map((emoji) => (
        <EmojiButton key={emoji.id} emoji={emoji} imageUrl={`/emoji-images/${emoji.id}.svg`} onCopy={onCopy} />
      ))}
    </div>
  )
}
