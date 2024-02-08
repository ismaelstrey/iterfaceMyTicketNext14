import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpeedTicket',
  description: 'SpeedPro',
  creator: 'Ismael Strey Pereira',

}
interface LayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pr-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
