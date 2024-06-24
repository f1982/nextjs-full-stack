'use client'

import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Video } from '@prisma/client'
import { Wand2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { sleep } from '@/utils/utils'

import SingleFieldForm from '@/components/form/single-field-form'
import { toastServerError } from '@/components/molecule/server-error'
import Spinner from '@/components/molecule/spinner'
import { Button } from '@/components/ui/button'

import { generateScriptHook } from '../actions/script-hook'
import { getCache, setCache } from '../actions/temp-storage'

const FormSchema = z.object({
  value: z.string().min(2, {
    message: 'hook must be at least 2 characters.',
  }),
})

function ScriptHookBlock(
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
          await generateHook()
        },
      }
    },
    [],
  )

  const getCacheKey = () => {
    return 'script-hook-' + videoData.id
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
    await sleep(3000)
    return {}
  }

  // gen description by ai
  const generateHook = async () => {
    try {
      setIsLoading(true)
      const hook = await generateScriptHook(videoData.topic!)

      //for testing
      await sleep(3000)

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
          onClick={generateHook}>
          {isLoading ? <Spinner /> : <Wand2 />}
          <span>Generate script hook</span>
        </Button>
      </div>

      <SingleFieldForm
        label="Script hook"
        form={form}
        rows={8}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default forwardRef(ScriptHookBlock)
