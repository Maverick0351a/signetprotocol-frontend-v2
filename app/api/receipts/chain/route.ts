import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const trace_id = req.nextUrl.searchParams.get('trace_id')
  if (!trace_id) return NextResponse.json({ error: 'trace_id required' }, { status: 400 })
  const base = process.env.NEXT_PUBLIC_SIGNET_API_BASE
  const r = await fetch(`${base}/v1/receipts/chain/${encodeURIComponent(trace_id)}`)
  const data = await r.json()
  return NextResponse.json(data)
}
