export const API_BASE = process.env.NEXT_PUBLIC_SIGNET_API_BASE || 'http://localhost:8088'

export async function proxyFetch(path: string, init?: RequestInit) {
  const res = await fetch(path, init)
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Proxy error ${res.status}: ${text}`)
  }
  return res
}
