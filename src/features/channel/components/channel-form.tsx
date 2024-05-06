'use client'

import {
  createChannel,
  retrieveChannel,
  updateChannel,
} from '../api/channel-actions'
import { toastServerError } from '@/components/molecule/server-error'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
  id: z.string(),
  channel_name: z.string().min(2, {
    message: 'channel_name must be at least 2 characters.',
  }),
  description: z.string().min(2, {
    message: 'description must be at least 2 characters.',
  }),
  keyword: z.string().min(2, {
    message: 'keyword must be at least 2 characters.',
  }),
})

interface ChannelFormProps {
  channelId?: string
}

export default function ChannelInfoForm({
  channelId = undefined,
}: ChannelFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: '',
      channel_name: '',
      description: '',
      keyword: '',
    },
  })

  useEffect(() => {
    const fetchData = async () => {
      if (!channelId) {
        return
      }
      setIsLoading(true)
      const defaults = await retrieveChannel(channelId)

      form.reset({
        id: defaults.data?.id,
        channel_name: defaults.data?.channel_name,
        description: defaults.data?.description || '',
        keyword: defaults.data?.keyword || '',
      })
      setIsLoading(false)
    }
    fetchData()
  }, [channelId, form])

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    let result: any = null
    if (!data.id) {
      result = await createChannel(data)
      form.reset()
    } else {
      result = await updateChannel(data, data.id)

      form.reset({
        id: data.id,
        channel_name: data.channel_name,
        description: data.description,
        keyword: data.keyword,
      })
    }

    if (result.status === 'failure') {
      return toastServerError()
    } else {
      toast({
        description: 'Saved successfully.',
        variant: 'default',
      })
    }
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6">
            {channelId && <input hidden type="text" name="id" id="id" />}

            <FormField
              control={form.control}
              name="channel_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Channel name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={form.formState.isSubmitting}
                      placeholder="Channel name"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>This is your Channel name.</FormDescription>
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
                      disabled={form.formState.isSubmitting}
                      placeholder="Channel description"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This is your Channel description.
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
                      disabled={form.formState.isSubmitting}
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
            <div className="flex flex-row items-center gap-6">
              <Button
                disabled={
                  form.formState.isSubmitting || !form.formState.isDirty
                }
                type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  )
}
