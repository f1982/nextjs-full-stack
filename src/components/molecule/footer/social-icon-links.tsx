import { NavItemData } from '../header/nav-menu-data'
import { WithCN } from '@/types/types'
import clsx from 'clsx'
import Link from 'next/link'

function SocialIconLinks({
  data,
  className,
}: WithCN & { data: NavItemData[] }) {
  return (
    <div className={clsx('', className)}>
      {data.map((item) => (
        <Link
          href={item.link}
          title={item.title}
          className="text-muted-foreground transition-all hover:text-foreground">
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default SocialIconLinks
