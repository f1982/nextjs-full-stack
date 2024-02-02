'use client'

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
import { Input } from '@/app/_modules/components/ui/input'
import { Textarea } from '@/app/_modules/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
  id: z.string(),
  topic: z.string().min(2, {
    message: 'topic must be at least 2 characters.'
  })
})

const initialState = {
  id: '',
  topic: ''
}

export default function VideoTopicForm({
  handleSubmit,
  formData = null,
  redirectUrl,
  cancelUrl
}: any) {
  const router = useRouter()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: formData || initialState
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true)

    const result = await handleSubmit(data)
    console.log('result', result)

    //TODO: error handling
    //Don't have to set it to false, only if error occurs, user can try again
    // setIsSubmitting(false)

    if (redirectUrl) {
      router.push(redirectUrl)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {formData?.id && (
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => <input hidden {...field}></input>}
          />
        )}

        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>topic</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  disabled={isSubmitting}
                  placeholder="video topic"
                  {...field}
                />
              </FormControl>
              <FormDescription>This is your video topic.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row gap-6 items-center">
          <Button disabled={isSubmitting} type="submit">
            Submit
          </Button>
          {cancelUrl && <Link href={cancelUrl}>Cancel</Link>}
        </div>
      </form>
    </Form>
  )
}
