'use client'

import { CopyButton } from '@/app/_modules/components/molecule/copy-button'
import {
  toastServerError,
  toastServerSuccess
} from '@/app/_modules/components/molecule/server-error'
import { Button } from '@/app/_modules/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/app/_modules/components/ui/form'
import { Textarea } from '@/app/_modules/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
  id: z.string().optional(),
  value: z.string().min(2, {
    message: 'topic must be at least 2 characters.'
  })
})

export default function UniversalSingleForm({
  fieldName,
  handleSubmit,
  rows = 5,
  defaultData = null,
  extraButtons = null
}: any) {
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    values: { value: defaultData },
    mode: 'onTouched'
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
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
        {defaultData?.id && (
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => <input hidden {...field}></input>}
          />
        )}

        <FormField
          control={form.control}
          name={'value'}
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
        <div className="flex flex-row gap-3 items-center">
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
