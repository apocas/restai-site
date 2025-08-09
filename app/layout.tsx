import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RESTai - AI as a Service for SMBs',
  description: 'Enterprise-grade AI platform with multi-tenancy, OpenAI compatibility, and comprehensive AI features for small and medium businesses.',
  keywords: 'AI, artificial intelligence, API, OpenAI, SMB, business automation, machine learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
