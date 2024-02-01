'use client'

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
} from '@/app/_modules/components/ui/alert-dialog'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'

export default function DelButton({
  actionHandler,
  postId
}: {
  actionHandler: any
  postId: string
}) {
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        {isDeleting ? (
          <span>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          </span>
        ) : (
          <span>Delete</span>
        )}
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
              const res = await actionHandler(postId)
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
