'use client'

import { generateVideoDescription } from '../actions/video-description'
import { generateVideoTags } from '../actions/video-tags'
import { generateVideoTitles } from '../actions/video-titles'
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
import { sleep } from '@/utils/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Wand2 } from 'lucide-react'
import { useState } from 'react'
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

export default function VideoMetadataForm({
  videoId = undefined,
}: ChannelFormProps) {
  const [isFetching, setIsFetching] = useState(false)
  const [topic, setTopic] = useState('')

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: async () => {
      //for testing
      await sleep(2000)

      if (videoId) {
        const r = await retrieveVideo(videoId)
        setTopic(r.data?.topic || '')

        return {
          id: r.data?.id || '',
          script:
            r.data?.title ||
            '' + '\n\n' + r.data?.description ||
            '' + '\n\n' + r.data?.tags ||
            '',
        }
      }

      return Promise.resolve({
        id: '',
        script: '',
      })
    },
  })

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
    setIsFetching(true)

    const titles = await generateVideoTitles(topic)
    const keywords = await generateVideoTags(topic)
    const description = await generateVideoDescription(topic)

    const metadata = `
    title:
     \n${titles.join('\n')}
    
    \n\n\n
    
    keywords: 
    \n${keywords}\n\n\n
    
    description: \n${description}
  `

    form.setValue('script', metadata)

    setIsFetching(false)
  }

  function checkDisable() {
    return form.formState.isSubmitting || form.formState.isLoading
  }

  return (
    <>
      {isFetching ? (
        <div>
          <Loader2 className="animate-spin" size={32}></Loader2>
          <span>Generating content</span>
        </div>
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
                  <FormLabel>Topic: {topic}</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={20}
                      disabled={checkDisable()}
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
              <Button disabled={checkDisable()} type="submit">
                Save
              </Button>

              <CopyButton
                content={form.getValues().script}
                disabled={checkDisable()}
              />

              <Button
                type="button"
                disabled={checkDisable()}
                className="flex flex-row gap-3"
                onClick={generateOption}>
                {isFetching ? <Spinner /> : <Wand2 />}
                <span>Generate </span>
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  )
}
