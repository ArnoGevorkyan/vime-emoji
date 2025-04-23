import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VimeWorld Emojis',
  description: 'APHO',
  generator: 'APHO',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <script
          defer
          data-website-id="68093411bfcb36a1a6686c40"
          data-domain="vimeworld.vercel.app"
          src="https://datafa.st/js/script.js">
        </script>
      </head>
      <body>{children}</body>
    </html>
  )
}
