'use client'

import {
  Ref,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'

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

import { generateScriptEnding } from '../actions/script-ending'
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
  ref: Ref<{ refresh: () => Promise<void> }>,
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
  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
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

      <SingleFieldForm
        label="Script ending"
        form={form}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default forwardRef(ScriptEndBlock)
