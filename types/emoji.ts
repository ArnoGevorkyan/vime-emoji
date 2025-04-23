export interface EmojiData {
  id: number
  character: string
  available: boolean
  category: string
}

export interface EmojiDataFile {
  atlases: string[]
  emojis: EmojiData[]
}
