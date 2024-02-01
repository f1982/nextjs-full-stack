import { NextAuthProvider } from './_lib/next-auth-provider'
import { Toaster } from './_modules/components/ui/toaster'
import { cn } from '@/app/_modules/components/lib/utils'
import '@/app/globals.css'
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
          className={cn(
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
