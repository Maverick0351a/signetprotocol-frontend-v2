'use client'
import { useEffect, useState } from 'react'

type Health = { ok:boolean, storage?:string, ts?:string }

export default function Status() {
  const [health, setHealth] = useState<Health|null>(null)
  const [metrics, setMetrics] = useState<string>('')
  useEffect(()=>{
    fetch('/api/healthz').then(r=>r.json()).then(setHealth).catch(()=>setHealth({ok:false} as any))
    fetch('/api/metrics').then(r=>r.text()).then(setMetrics).catch(()=>setMetrics(''))
  },[])

  function parseMetric(name:string) {
    const re = new RegExp(`^${name}\s+(\d+(?:\.\d+)?)$`, 'm')
    const m = metrics.match(re); return m? Number(m[1]) : 0
  }

  const exchanges = parseMetric('signet_exchanges_total')
  const denied = parseMetric('signet_denied_total')
  const fallback = parseMetric('signet_fallback_used_total')

  return (
    <section className="container py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Status & Metrics</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card">
          <div className="text-sm text-white/60">Health</div>
          <div className="mt-1 text-lg">{health?.ok ? 'Up' : 'Down'}</div>
          <div className="text-xs text-white/50">{health?.storage} • {health?.ts}</div>
        </div>
        <div className="card">
          <div className="text-sm text-white/60">Exchanges (total)</div>
          <div className="mt-1 text-lg">{exchanges}</div>
        </div>
        <div className="card">
          <div className="text-sm text-white/60">Denied (total)</div>
          <div className="mt-1 text-lg">{denied}</div>
        </div>
      </div>
      <div className="card">
        <div className="text-sm text-white/60 mb-2">Raw Prometheus</div>
        <pre className="text-xs whitespace-pre-wrap">{metrics || '—'}</pre>
      </div>
    </section>
  )
}
