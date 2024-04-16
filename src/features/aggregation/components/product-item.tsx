import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import { truncate } from 'lodash'
import capitalize from 'lodash/capitalize'
import Image from 'next/image'
import Link from 'next/link'

export function ProductItem({ item }: { item: any }) {
  return (
    <>
      <div className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <a href="#">
          <Image
            className="h-48 w-full rounded-t-lg object-cover"
            width={300}
            height={200}
            src={item.image!}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5
              className={clsx(
                `mb-2 text-xl font-bold tracking-tight dark:text-white`,
              )}>
              {truncate(capitalize(item.title), {
                length: 30,
                omission: '...',
              })}
            </h5>
          </a>
          <p className="text-md mb-3 h-32 font-normal text-gray-700 dark:text-gray-400">
            {item.description}
          </p>

          <Link href={`/category/${item.slug}`}>
            <Button variant="default">Play</Button>
          </Link>
        </div>
      </div>
    </>
  )
}
