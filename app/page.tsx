import { Button } from './_modules/components/ui/button'
import { Input } from './_modules/components/ui/input'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'My Page Title'
}

export default function Page() {
  return (
    <div className="container">
      <h1 className="text-xl">hello</h1>
      <div className="flex flex-row gap-4">
        <Link href={'/blog'}>Blog</Link>
        <Link href={'/dashboard'}>Dashboard</Link>
        <Button variant="outline">Button</Button>
      </div>

      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  )
}
