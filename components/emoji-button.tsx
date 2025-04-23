"use client"
import Image from "next/image"
import { useState } from "react"
import type { EmojiData } from "@/types/emoji"
import { Copy } from "lucide-react"

interface EmojiButtonProps {
  emoji: EmojiData
  imageUrl: string
  onCopy: (value: string, type: "character" | "id") => void
}

export default function EmojiButton({ emoji, imageUrl, onCopy }: EmojiButtonProps) {
  const [imageError, setImageError] = useState(false)
  const { character, id } = emoji

  return (
    <div className="border border-gray-200 rounded-md flex flex-col shadow-sm relative">
      {/* Image and character display */}
      <div className="p-3 flex flex-col items-center">
        <div className="relative w-full aspect-square">
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center text-2xl">{character}</div>
          ) : (
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={character}
              fill
              className="object-contain"
              onError={() => setImageError(true)}
            />
          )}
        </div>
        <span className="mt-2 text-sm text-gray-700">{character}</span>
        <span className="text-xs text-gray-500 mt-1">ID: {id}</span>
      </div>

      {/* Copy buttons */}
      <div className="grid grid-cols-2 border-t border-gray-200 mt-2">
        <button
          onClick={() => onCopy(character, "character")}
          className="py-2 px-3 flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors rounded-bl-md"
          title={`Copy character: ${character}`}
          aria-label={`Copy character: ${character}`}
        >
          <Copy className="w-3 h-3 mr-1" />
          <span className="text-xs">Copy 字</span>
        </button>

        <button
          onClick={() => onCopy(id.toString(), "id")}
          className="py-2 px-3 flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors border-l border-gray-200 rounded-br-md"
          title={`Copy ID: ${id}`}
          aria-label={`Copy ID: ${id}`}
        >
          <Copy className="w-3 h-3 mr-1" />
          <span className="text-xs">Copy ID</span>
        </button>
      </div>
    </div>
  )
}
