import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { toast } from '../ui/use-toast'
import { AlertCircle } from 'lucide-react'
import React from 'react'

export function ServerError({ message }: { message: string }) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        {message ? message : 'An error has occurred. Please try again later.'}
      </AlertDescription>
    </Alert>
  )
}

export function toastServerError() {
  toast({
    description: (
      <div>
        <p>Ops, something went wrong. </p>
        <p>try again later.</p>
      </div>
    ),
    variant: 'destructive'
  })
}
