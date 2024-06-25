import CryptoJS from 'crypto-js'
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { ChatCompletionCreateParams } from 'openai/resources'

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  timeout: 20 * 1000, // 20 seconds (default is 10 minutes)
})

export const maxDuration = 60 // This function can run for a maximum of 5 seconds
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

export async function OPTIONS(req: NextRequest) {
  return new Response('', { status: 200 })
}

const SECRET_KEY = 'your-secret-key'

function getClientSignature(message: string) {
  // const timestamp = new Date().toISOString()
  const timestamp = '2024-06-25T09:37:12.784Z'
  const hmacClient = CryptoJS.HmacSHA256(
    `${message}:${timestamp}`,
    SECRET_KEY,
  ).toString()
  console.log('client timestamp:', timestamp)
  console.log('client hmac:', hmacClient)

  return hmacClient
}
export async function POST(req: NextRequest) {
  const message = 'your-message-to-sign'
  // getClientSignature(message)

  const signature = req.headers.get('x-signature')
  const timestamp = req.headers.get('x-timestamp')

  console.log('header timestamp: ', timestamp)
  console.log('header signature: ', signature)

  if (!signature || !timestamp) {
    return NextResponse.json({
      status: 403,
      data: null,
      message: 'Missing headers',
    })
  }

  // Validate timestamp (e.g., allow a 5-minute window)
  const requestTime = new Date(timestamp).getTime()
  const currentTime = new Date().getTime()
  if (currentTime - requestTime > 5 * 60 * 1000) {
    return NextResponse.json({
      status: 403,
      data: null,
      message: 'Request expired',
    })
  }

  const hmac = CryptoJS.HmacSHA256(
    `${message}:${timestamp}`,
    SECRET_KEY,
  ).toString(CryptoJS.enc.Hex)

  if (hmac !== signature) {
    return NextResponse.json({
      status: 403,
      data: null,
      message: 'Invalid signature',
    })
  }

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
  return NextResponse.json({ status: 'success', data: response })
}
