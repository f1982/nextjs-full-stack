import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { ChatCompletionCreateParams } from 'openai/resources'

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  timeout: 20 * 1000, // 20 seconds (default is 10 minutes)
})

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

export async function OPTIONS(req: NextRequest) {
  return new Response('', { status: 200 })
}

export async function POST(req: NextRequest) {
  const { prompt, imageUrl } = await req.json()

  const params: ChatCompletionCreateParams = {
    model: process.env.OPENAI_MODEL!,
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: prompt },
          {
            type: 'image_url',
            image_url: {
              url: imageUrl,
              detail: 'low',
            },
          },
        ],
      },
    ],
  }
  const response = await openai.chat.completions.create(params)
  // return response.choices[0].message
  return NextResponse.json({ status: 'success', data: response })
  // Convert the response into a friendly text-stream
  // const stream = OpenAIStream(response)
  // Respond with the stream
  // return new StreamingTextResponse(stream)
}
