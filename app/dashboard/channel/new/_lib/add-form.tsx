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
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
  channel_name: z.string().min(2, {
    message: 'channel_name must be at least 2 characters.'
  }),
  description: z.string().min(2, {
    message: 'description must be at least 2 characters.'
  }),
  keyword: z.string().min(2, {
    message: 'keyword must be at least 2 characters.'
  })
})

const initialState = {
  channel_name: '',
  description: '',
  keyword: ''
}

export default function NewChannelForm({ handleSubmit, redirectUrl }: any) {
  const router = useRouter()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: initialState
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
        <FormField
          control={form.control}
          name="channel_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Channel name</FormLabel>
              <FormControl>
                <Input
                  disabled={isSubmitting}
                  placeholder="Channel name"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  disabled={isSubmitting}
                  placeholder="Channel description"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="keyword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Keyword</FormLabel>
              <FormControl>
                <Input
                  disabled={isSubmitting}
                  placeholder="Channel keyword"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isSubmitting} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}
