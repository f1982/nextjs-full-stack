'use client'

import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'

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

import { generateScriptEnding } from '../actions/script-ending'
import { generateScriptHook } from '../actions/script-hook'
import { getCache, setCache } from '../actions/temp-storage'

const FormSchema = z.object({
  value: z.string().min(2, {
    message: 'hook must be at least 2 characters.',
  }),
})

function ScriptEndBlock(
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
          await generateEnding()
        },
      }
    },
    [],
  )

  const getCacheKey = () => {
    return 'script-end-' + videoData.id
  }
  // default form
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    values: {
      value: '',
    },
    mode: 'onTouched',
  })

  // save description to db
  const handleSubmit = async (data: any) => {
    await setCache(getCacheKey(), data.value)
    //for testing
    await sleep(1000)
    return {}
  }

  // gen description by ai
  const generateEnding = async () => {
    try {
      setIsLoading(true)
      const hook = await generateScriptEnding(videoData.topic!, '无责猜想')

      //for testing
      await sleep(1000)

      form.setValue('value', hook, {
        shouldDirty: true,
        shouldValidate: true,
      })

      setIsLoading(false)
    } catch (error) {
      return toastServerError()
    }
  }

  useEffect(() => {
    // load existing value
    const fetchData = async () => {
      const hook = await getCache(getCacheKey())
      form.reset({
        value: hook,
      })
    }
    fetchData()
  }, [])

  return (
    <>
      <div>
        <Button
          disabled={isLoading}
          className="flex flex-row gap-3"
          onClick={generateEnding}>
          {isLoading ? <Spinner /> : <Wand2 />}
          <span>Generate script ending</span>
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="value"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>
                  Script ending {fieldState.isDirty && '✏︎'}
                </FormLabel>
                <FormControl>
                  <Textarea
                    rows={8}
                    disabled={form.formState.isSubmitting}
                    placeholder="Description"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your video script ending
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

export default forwardRef(ScriptEndBlock)
