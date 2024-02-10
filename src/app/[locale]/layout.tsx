import '../../globals.css'
import { NextAuthProvider } from '../../lib/next-auth-provider'
import clsx from 'clsx'
import { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <NextAuthProvider>
        <body
          className={clsx(
            'min-h-screen bg-background flex flex-col font-sans antialiased',
            fontSans.variable,
          )}>
          {children}
        </body>
      </NextAuthProvider>
    </html>
  )
}
