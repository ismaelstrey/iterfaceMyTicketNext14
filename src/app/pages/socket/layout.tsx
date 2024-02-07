import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SpeedChat',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pr-br">
      <body>{children}</body>
    </html>
  )
}
