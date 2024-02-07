import Footer from '../_modules/components/page/footer'
import NavBar from '../_modules/components/page/navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js'
}

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  )
}
