import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { period, apiKey } = await req.json()
  const base = process.env.NEXT_PUBLIC_SIGNET_API_BASE
  const r = await fetch(`${base}/v1/compliance/dossier?period=${encodeURIComponent(period||'last_30d')}`, {
    method: 'POST',
    headers: {
      'X-SIGNET-API-Key': apiKey || process.env.SIGNET_DEMO_API_KEY || '',
    }
  })
  const buf = Buffer.from(await r.arrayBuffer())
  return new NextResponse(buf, { status: r.status, headers: { 'Content-Type': r.headers.get('Content-Type') || 'application/zip' } })
}
