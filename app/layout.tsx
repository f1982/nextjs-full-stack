import { NextAuthProvider } from './_lib/next-auth-provider'
import { cn } from '@/app/_modules/components/lib/utils'
import '@/app/globals.css'
import { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js'
}

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}>
          {children}
        </body>
      </NextAuthProvider>
    </html>
  )
}
