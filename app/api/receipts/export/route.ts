import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const trace_id = req.nextUrl.searchParams.get('trace_id')
  if (!trace_id) return NextResponse.json({ error: 'trace_id required' }, { status: 400 })
  const base = process.env.NEXT_PUBLIC_SIGNET_API_BASE
  const r = await fetch(`${base}/v1/receipts/export/${encodeURIComponent(trace_id)}`)
  const buf = Buffer.from(await r.arrayBuffer())
  return new NextResponse(buf, { status: r.status, headers: { 'Content-Type': r.headers.get('Content-Type') || 'application/json' } })
}
