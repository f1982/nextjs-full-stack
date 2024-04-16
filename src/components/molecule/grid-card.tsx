import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'

export default function GridCards(props: PropsWithChildren) {
  return (
    <div
      className={clsx(
        'grid',
        'mx-0',
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        'gap-x-3 gap-y-3 lg:gap-x-5 lg:gap-y-5',
      )}>
      {props.children}
    </div>
  )
}

export function GridQuiz(props: PropsWithChildren) {
  return (
    <div
      className={clsx(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        'gap-x-5 gap-y-5',
      )}>
      {props.children}
    </div>
  )
}
