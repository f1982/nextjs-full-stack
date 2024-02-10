'use client'

import { Button } from '../ui/button'
import Spinner from './spinner'
import { APIResponse } from '@/lib/types/types'
import React, { useState } from 'react'

export default function SaveButton({
  callback,
}: {
  callback: () => Promise<APIResponse<any>>
}) {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <Button
      onClick={async () => {
        if (!callback) return
        setIsLoading(true)
        const result = await callback()
        console.log('result', result)
        setIsLoading(false)
      }}>
      {isLoading && <Spinner />}SaveButton
    </Button>
  )
}
