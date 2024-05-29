import { Video } from '@prisma/client'

import { cache } from '@/lib/file-cache'

import { generateScriptQuotes } from '@/features/video-script/actions/script-quotes'

import SelectEditForm from '../../../components/form/select-edit-form'

export default async function ScriptQuotesBlock({
  videoData,
}: {
  videoData: Video
}) {
  const cacheKey = 'script-quote-' + videoData.id
  let quote = await cache.get(cacheKey)

  const handleSubmission = async (data: any) => {
    'use server'

    // return await updateVideo({ title: data.value, id: videoData.id })
    await cache.set(cacheKey, data.value)
    return { status: 'success', message: '', data: data.value }
  }

  const handleOptionGeneration = async () => {
    'use server'

    const quotes = await generateScriptQuotes(videoData.topic!)
    // { "author": "", "quote": "", reference: ""}
    const sentences = quotes.map((quote) => {
      return quote.author + ' ' + quote.quote
    })
    return { data: sentences, status: 'success' }
  }

  return (
    <SelectEditForm
      fieldName="quote"
      defaultValue={quote || ''}
      optionsFactory={handleOptionGeneration}
      onSubmit={handleSubmission}
    />
  )
}
