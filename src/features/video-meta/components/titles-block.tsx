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
import ListMultipleSelect, {
  OptionItemData,
} from '@/components/molecule/list-multiple-select'
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

import { generateVideoTitles } from '../actions/video-titles'

function convertStringArrayToObjectArray(stringArray) {
  return stringArray.map((item, index) => ({
    label: item,
    value: item, // You can customize the value based on your needs
  }))
}

const FormSchema = z.object({
  value: z.string().min(2, {
    message: 'topic must be at least 2 characters.',
  }),
})

function TitlesBlock(
  {
    videoData,
  }: {
    videoData: Video
  },
  ref: any,
) {
  const [isLoading, setIsLoading] = useState(false)
  const [titleOpts, setTitleOpts] = useState<OptionItemData[]>([])

  // expose refresh function to parent
  useImperativeHandle(
    ref,
    () => {
      return {
        refresh: async () => {
          await generateTitles()
        },
      }
    },
    [],
  )

  // default form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    values: { value: videoData.title || '' },
    mode: 'onTouched',
  })

  // save description to db
  const handleSubmit = async (data: any): Promise<APIResponse<any>> => {
    return await updateVideo({ title: data.value, id: videoData.id })
  }

  // gen description by ai
  const generateTitles = async () => {
    try {
      setIsLoading(true)
      const titles = await generateVideoTitles(videoData.topic!)
      //for testing
      await sleep(3000)

      if (typeof titles[0] === 'string') {
        const opts = convertStringArrayToObjectArray(titles)
        setTitleOpts(opts)
      } else {
        setTitleOpts(titles)
      }

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
          onClick={generateTitles}>
          {isLoading ? <Spinner /> : <Wand2 />}
          <span>Generate Titles</span>
        </Button>
      </div>

      {titleOpts.length > 0 && (
        <ListMultipleSelect
          label="Title options"
          options={titleOpts}
          onSelect={(opt: OptionItemData) => {
            form.setValue('value', opt.value, {
              shouldDirty: true,
              shouldValidate: true,
            })
          }}
        />
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="value"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Title {fieldState.isDirty && '✏︎'}</FormLabel>
                <FormControl>
                  <Textarea
                    rows={2}
                    disabled={form.formState.isSubmitting}
                    placeholder="Description"
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your video title.</FormDescription>
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

export default forwardRef(TitlesBlock)
