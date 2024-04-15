import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'
import UpButton from '@/components/upButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WANT IT',
  description: '중고거래 서비스',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-screen mx-auto">
          <Navbar />

          <div className="mx-auto">{children}</div>
        </div>
        <UpButton />
        <Footer />
      </body>
    </html>
  )
}
