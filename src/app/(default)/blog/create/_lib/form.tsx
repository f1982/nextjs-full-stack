'use client'

import { Input } from '@/app/_modules/components/ui/input''
import { Button } from '@/app/_modules/components/ui/button'
import { useFormState, useFormStatus } from 'react-dom'

const initialState = {
  message: ''
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      Add
    </Button>
  )
}

export function AddForm({ submitAction }: { submitAction: any }) {
  const [state, formAction] = useFormState(submitAction, initialState)
  console.log('state', state)

  return (
    <form className="flex flex-col gap-3" action={formAction}>
      <label htmlFor="title">Title</label>
      <Input type="text" id="title" name="title" required></Input>
      <label htmlFor="content">Content</label>
      <Input type="text" id="content" name="content" required />
      <SubmitButton />
      {state.error && <p className="text-red-900">{state.error}</p>}
      <p aria-live="polite" role="status">
        {state?.message}
      </p>
    </form>
  )
}
