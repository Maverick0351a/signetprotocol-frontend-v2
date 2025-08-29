import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { apiKey, idempotencyKey, payload } = await req.json()
  const base = process.env.NEXT_PUBLIC_SIGNET_API_BASE
  const r = await fetch(`${base}/v1/exchange`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'X-SIGNET-API-Key': apiKey || process.env.SIGNET_DEMO_API_KEY || '',
      'X-SIGNET-Idempotency-Key': idempotencyKey || ''
    },
    body: JSON.stringify(payload)
  })
  const text = await r.text()
  return new NextResponse(text, { status: r.status, headers: {'Content-Type': r.headers.get('Content-Type') || 'application/json'} })
}
