import { NextResponse } from 'next/server'
export async function GET() {
  const base = process.env.NEXT_PUBLIC_SIGNET_API_BASE
  const r = await fetch(`${base}/healthz`)
  const data = await r.json()
  return NextResponse.json(data)
}
