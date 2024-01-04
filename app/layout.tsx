import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './provider'
import { myFont } from './fonts'
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Exam Website',
  description: 'The website aims to make a platform for support exams.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Providers>
          {children}
        </Providers>
        </body>
    </html>
  )
}
