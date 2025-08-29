import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SIGNET_API_BASE
  if (!base) {
    return NextResponse.json({ ok: true, configured: false }, { status: 200 })
  }
  try {
    const r = await fetch(`${base}/healthz`, { cache: 'no-store' })
    const data = await r.json()
    return NextResponse.json(data)
  } catch (e:any) {
    return NextResponse.json({ ok: false, configured: true, error: e.message }, { status: 200 })
  }
}
