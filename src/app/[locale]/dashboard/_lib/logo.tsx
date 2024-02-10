import { Shell } from 'lucide-react'
import Link from 'next/link'

export const Logo = () => (
  <div>
    <Link href={'/'}>
      <Shell size={36} />
    </Link>
  </div>
)
