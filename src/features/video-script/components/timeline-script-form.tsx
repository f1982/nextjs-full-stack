'use client'

import { generateTechScript } from '../actions/script-timeline-style'
import { CopyButton } from '@/components/molecule/copy-button'
import { toastServerError } from '@/components/molecule/server-error'
import Spinner from '@/components/molecule/spinner'
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
import {
  retrieveVideo,
  updateVideo,
} from '@/features/video-meta/actions/video-actions'
import { zodResolver } from '@hookform/resolvers/zod'
import { Wand2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
  id: z.string(),
  script: z.string().min(2, {
    message: 'description must be at least 2 characters.',
  }),
})

interface ChannelFormProps {
  videoId?: string
}

export default function TimelineScriptForm({
  videoId = undefined,
}: ChannelFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [topic, setTopic] = useState('')

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: '',
      script: '',
    },
  })

  useEffect(() => {
    const fetchData = async () => {
      if (!videoId) {
        return
      }
      setIsLoading(true)
      const defaults = await retrieveVideo(videoId)

      setTopic(defaults.data?.topic || '')

      form.reset({
        id: defaults.data?.id,
        script: defaults.data?.script || '',
      })
      setIsLoading(false)
    }
    fetchData()
  }, [videoId, form])

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    let result: any = null
    result = await updateVideo(data)

    if (result.status === 'failure') {
      return toastServerError()
    } else {
      toast({
        description: 'Saved successfully.',
        variant: 'default',
      })
    }
  }

  async function generateOption() {
    setIsLoading(true)
    const script = await generateTechScript('无责任猜想', topic)
    form.setValue('script', script)
    setIsLoading(false)
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6">
            {videoId && <input hidden type="text" name="id" id="id" />}

            <FormField
              control={form.control}
              name="script"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={20}
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

            <div className="flex flex-row items-center gap-6">
              <Button disabled={form.formState.isSubmitting} type="submit">
                Save
              </Button>
              <CopyButton content={form.getValues().script} />

              <Button
                type="button"
                disabled={form.formState.isSubmitting}
                className="flex flex-row gap-3"
                onClick={generateOption}>
                {isLoading ? <Spinner /> : <Wand2 />}
                <span>Generate </span>
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  )
}
