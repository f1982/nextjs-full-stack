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
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { toast } from '@/components/ui/use-toast'
import { APIResponse } from '@/types/types'
import { useState } from 'react'

export default function DelButton({ action }: { action: () => Promise<any> }) {
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        {isDeleting ? <Spinner /> : <span>Delete</span>}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
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
              const res = await action()
              console.log('res', res)
              setIsDeleting(false)

              if (res.status !== 'success') {
                console.log('show toast')
                toast({
                  description: 'Something error, try again later.',
                  variant: 'destructive',
                })
              }
            }}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
