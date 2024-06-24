'use client'

import { forwardRef, useImperativeHandle, useState } from 'react'

import { APIResponse } from '@/types/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Video } from '@prisma/client'
import { SaveIcon, Wand2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { sleep } from '@/utils/utils'

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

import { updateVideo } from '@/features/video-meta/actions/video-actions'
import { generateVideoDescription } from '@/features/video-meta/actions/video-description'

const FormSchema = z.object({
  value: z.string().min(2, {
    message: 'topic must be at least 2 characters.',
  }),
})

function DescriptionBlock(
  {
    videoData,
  }: {
    videoData: Video
  },
  ref: any,
) {
  const [isLoading, setIsLoading] = useState(false)

  // expose refresh function to parent
  useImperativeHandle(
    ref,
    () => {
      return {
        refresh: async () => {
          await generateDescription()
        },
      }
    },
    [],
  )

  // default form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    values: { value: videoData.description || '' },
    mode: 'onTouched',
  })

  // save description to db
  const handleSubmit = async (data: any): Promise<APIResponse<any>> => {
    return await updateVideo({ description: data.value, id: videoData.id })
  }

  // gen description by ai
  const generateDescription = async () => {
    try {
      setIsLoading(true)
      const desc = await generateVideoDescription(videoData.topic!)
      //for testing
      await sleep(3000)

      form.setValue('value', desc, {
        shouldDirty: true,
        shouldValidate: true,
      })

      setIsLoading(false)
    } catch (error) {
      return toastServerError()
    }
  }

  return (
    <>
      <div>
        <Button
          disabled={isLoading}
          className="flex flex-row gap-3"
          onClick={generateDescription}>
          {isLoading ? <Spinner /> : <Wand2 />}
          <span>Generate Description</span>
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="value"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Description {fieldState.isDirty && '✏︎'}</FormLabel>
                <FormControl>
                  <Textarea
                    rows={8}
                    disabled={form.formState.isSubmitting}
                    placeholder="Description"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your video description.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row items-center gap-3">
            <Button disabled={form.formState.isSubmitting} type="submit">
              {form.formState.isSubmitting ? <Spinner /> : <SaveIcon />}
              <span>Save</span>
            </Button>
            <CopyButton content={form.getValues().value} />
          </div>
        </form>
      </Form>
    </>
  )
}

export default forwardRef(DescriptionBlock)
