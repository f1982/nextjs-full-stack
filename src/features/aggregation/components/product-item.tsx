import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import { truncate } from 'lodash'
import capitalize from 'lodash/capitalize'
import Image from 'next/image'
import Link from 'next/link'

export function ProductItem({ item }: { item: any }) {
  return (
    <>
      <div>
        <Link href={`#`}>
          <Image
            className="aspect-video w-full rounded-md object-cover ring-1 ring-muted"
            width={300}
            height={180}
            src={item.image!}
            alt=""
          />
        </Link>
        <div className="mt-3 flex flex-row gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <h5
              className={clsx(
                `text-sm font-semibold tracking-tight dark:text-white`,
              )}>
              {truncate(capitalize(item.title), {
                length: 30,
                omission: '...',
              })}
            </h5>
            <p className="text-xs text-muted-foreground">{item.description}</p>
            {/* <Link href={`/category/${item.slug}`}>
            <Button variant="default">Play</Button>
          </Link> */}
          </div>
        </div>
      </div>
    </>
  )
}
