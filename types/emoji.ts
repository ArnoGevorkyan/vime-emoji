export interface EmojiData {
  id: number;
  character: string;
  available: boolean;
  image: string;
  category: string;
}

export interface EmojiDataFile {
  atlases: string[]
  emojis: EmojiData[]
}
