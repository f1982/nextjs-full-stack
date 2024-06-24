'use client'

import { useEffect, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { cache } from '@/lib/file-cache'

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
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'

import { retrieveVideo, updateVideo } from '../actions/video-actions'
import { getSelectedTopic } from '../actions/video-titles'

const FormSchema = z.object({
  id: z.string().optional(),
  topic: z.string().min(2, {
    message: 'topic must be at least 2 characters.',
  }),
})

export default function VideoTopicForm({
  videoId,
  topic,
}: {
  videoId: string
  topic: string
}) {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { id: videoId, topic: topic },
  })

  useEffect(() => {
    const fetchData = async () => {
      if (!videoId) {
        return
      }
      setIsLoading(true)
      const videoData = await retrieveVideo(videoId)

      form.reset({
        id: videoId,
        topic: videoData.data?.topic || '',
      })
      setIsLoading(false)
    }
    if (!topic) {
      fetchData()
    } else {
      form.setValue('topic', topic)
    }
  }, [videoId, form, topic])

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const result = await updateVideo({ id: data.id, topic: data.topic })

    if (result.status === 'failure') {
      return toastServerError()
    }
    toast({
      description: 'Saved successfully.',
      variant: 'default',
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => <input hidden {...field}></input>}
        />

        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Selected Topic</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  disabled={form.formState.isSubmitting}
                  placeholder="video topic"
                  {...field}
                />
              </FormControl>
              <FormDescription>This is your video topic.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row items-center gap-6">
          <Button disabled={form.formState.isSubmitting} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  )
}
