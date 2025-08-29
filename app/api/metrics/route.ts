import { NextResponse } from 'next/server'

// Avoid static optimization / prerender attempts
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SIGNET_API_BASE
  if (!base) {
    // Return a benign metrics payload so static export / build does not fail hard
    return new NextResponse('# metrics not configured\n', { headers: {'Content-Type':'text/plain'} })
  }
  try {
    const r = await fetch(`${base}/metrics`, { cache: 'no-store' })
    const text = await r.text()
    return new NextResponse(text, { headers: {'Content-Type':'text/plain; version=0.0.4'} })
  } catch (e:any) {
    return new NextResponse(`# metrics unavailable\nerror="${e.message}"\n`, { headers: {'Content-Type':'text/plain'} })
  }
}
