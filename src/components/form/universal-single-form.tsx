'use client'

import { useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'
import { z } from 'zod'

import { CopyButton } from '@/components/molecule/copy-button'
import {
  toastServerError,
  toastServerSuccess,
} from '@/components/molecule/server-error'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'

export default function UniversalSingleForm({
  fieldName,
  onSubmit: handleSubmit,
  rows = 5,
  extraButtons = null,
}: {
  fieldName: string
  onSubmit: (data: any) => Promise<any>
  rows?: number
  extraButtons?: React.ReactNode
}) {
  const router = useRouter()

  const form = useFormContext()

  async function onSubmit(data: any) {
    if (!handleSubmit) {
      return
    }

    const result = await handleSubmit(data)
    //Update the saved data in the text field
    router.refresh()

    if (result.status === 'failure') {
      return toastServerError()
    }

    form.reset(data) // Set isDirty to false
    return toastServerSuccess()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="value"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>
                {fieldName} {fieldState.isDirty && '✏︎'}
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={rows}
                  disabled={form.formState.isSubmitting}
                  placeholder="input placeholder"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>This is your video topic.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row items-center gap-3">
          <Button disabled={form.formState.isSubmitting} type="submit">
            Save
          </Button>
          <CopyButton content={form.getValues().value} />
          {extraButtons}
        </div>
      </form>
    </Form>
  )
}
