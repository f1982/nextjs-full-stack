import { NavItemData } from '../header/nav-menu-data'
import { FooterLinkItems } from './footer-links'
import { WithCN } from '@/types/types'
import clsx from 'clsx'

export const ExtraLinks = ({
  data,
  className,
}: WithCN & { data: NavItemData[][] }) => {
  return (
    <>
      <div className={clsx('flex flex-row gap-3', className)}>
        {data.map((list) => (
          <div className="flex w-full flex-col gap-3">
            <FooterLinkItems itemData={list} />
          </div>
        ))}
      </div>
    </>
  )
}
