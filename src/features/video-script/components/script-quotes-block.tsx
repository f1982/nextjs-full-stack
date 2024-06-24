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
import { generateScriptQuotes } from '../actions/script-quotes'
import { getCache, setCache } from '../actions/temp-storage'

const FormSchema = z.object({
  value: z.string().min(2, {
    message: 'hook must be at least 2 characters.',
  }),
})

function ScriptQuotesBlock(
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
          await generateQuotes()
        },
      }
    },
    [],
  )

  const getCacheKey = () => {
    return 'script-quote-' + videoData.id
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
  const generateQuotes = async () => {
    try {
      setIsLoading(true)

      const quotes = await generateScriptQuotes(videoData.topic!)
      console.log('quotes', quotes)
      const sentences = quotes
        .map((quote) => {
          return quote.author + ' ' + quote.quote
        })
        .join('\n\n')

      //for testing
      await sleep(1000)

      form.setValue('value', sentences, {
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
          onClick={generateQuotes}>
          {isLoading ? <Spinner /> : <Wand2 />}
          <span>Generate script quote</span>
        </Button>
      </div>

      <SingleFieldForm
        label="Script quote"
        form={form}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default forwardRef(ScriptQuotesBlock)
