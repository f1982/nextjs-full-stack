'use client'

import Spinner from '@/components/molecule/spinner'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { useState } from 'react'

export default function DelButton({
  actionHandler,
  itemId
}: {
  actionHandler: (id: string) => void
  itemId: string
}) {
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        {isDeleting ? <Spinner /> : <span>Delete</span>}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => {
              setIsDeleting(true)
              const res = await actionHandler(itemId)
              console.log('res', res)
              //TODO: error handling
              // setIsDeleting(false)
            }}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
