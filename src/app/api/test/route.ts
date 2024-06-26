import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest): Promise<any> {
  return NextResponse.json({ status: 'success', data: 'test data' })
}
