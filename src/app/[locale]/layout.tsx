// import { cn } from '../lib/utils'
import { Toaster } from '../../components/ui/toaster'
import { NextAuthProvider } from '../../lib/next-auth-provider'
import '../../globals.css'
import clsx from 'clsx'
import { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js'
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body
          className={clsx(
            'min-h-screen bg-background flex flex-col font-sans antialiased',
            fontSans.variable
          )}>
          {children}
          <Toaster />
        </body>
      </NextAuthProvider>
    </html>
  )
}
