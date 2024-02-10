import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { toast } from '../ui/use-toast'
import { AlertCircle, CheckCircle } from 'lucide-react'
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
    variant: 'destructive',
  })
}

export function toastServerSuccess(message?: string) {
  toast({
    description: (
      <div className="flex flex-row gap-3">
        <CheckCircle />
        <span>{message ? message : 'Saved successfully.'}</span>
      </div>
    ),
    variant: 'default',
  })
}
