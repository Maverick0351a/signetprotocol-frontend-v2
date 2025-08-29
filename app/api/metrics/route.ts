import { NextResponse } from 'next/server'
export async function GET() {
  const base = process.env.NEXT_PUBLIC_SIGNET_API_BASE
  const r = await fetch(`${base}/metrics`)
  const text = await r.text()
  return new NextResponse(text, { headers: {'Content-Type':'text/plain; version=0.0.4'} })
}
