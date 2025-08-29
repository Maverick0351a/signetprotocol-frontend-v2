'use client'
import { useState } from 'react'

export default function Receipts() {
  const [traceId, setTraceId] = useState('')
  const [chain, setChain] = useState<any[]|null>(null)
  const [exportInfo, setExportInfo] = useState<string>('')
  const [loading, setLoading] = useState(false)

  async function loadChain() {
    setLoading(true); setExportInfo(''); setChain(null)
    const res = await fetch(`/api/receipts/chain?trace_id=${encodeURIComponent(traceId)}`)
    const data = await res.json()
    setChain(data || [])
    setLoading(false)
  }

  async function exportBundle() {
    const res = await fetch(`/api/receipts/export?trace_id=${encodeURIComponent(traceId)}`)
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    setExportInfo('Export ready — downloaded as signed bundle.')
    const a = document.createElement('a')
    a.href = url
    a.download = `signet_export_${traceId}.json`
    a.click()
  }

  return (
    <section className="container py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Receipts & Chain Viewer</h1>
      <div className="card flex flex-col md:flex-row gap-3 md:items-end">
        <div className="flex-1">
          <label className="label">trace_id</label>
          <input className="input" value={traceId} onChange={e=>setTraceId(e.target.value)} placeholder="paste trace id" />
        </div>
        <button className="btn" onClick={loadChain} disabled={loading}>Load Chain</button>
        <button className="btn bg-white/10 hover:bg-white/20" onClick={exportBundle} disabled={!traceId}>Export Bundle</button>
      </div>
      {exportInfo && <p className="text-sm text-white/70">{exportInfo}</p>}
      <div className="grid gap-3">
        {chain?.length ? chain.map((r, idx) => (
          <div key={idx} className="card">
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <div className="text-white/80">Hop #{r.hop} — <span className="text-white/60">{r.ts}</span></div>
                <div className="text-white/60 text-xs">cid: {r.cid} • receipt_hash: {r.receipt_hash}</div>
                {r.policy && <div className="text-white/60 text-xs">policy: {r.policy?.engine} — {String(r.policy?.allowed)} ({r.policy?.reason})</div>}
                {r.adherence && <div className="text-white/60 text-xs">adherence: score {r.adherence?.score} {r.adherence?.violations?.length? `• violations: ${r.adherence.violations.join(', ')}`: ''}</div>}
                {r.rtl && <div className="text-white/60 text-xs">rtl: leaf {r.rtl.leaf_index} • sth_ts {r.rtl.sth_ts}</div>}
              </div>
              <span className="badge">{r.prev_receipt_hash ? 'linked' : 'root'}</span>
            </div>
          </div>
        )) : <p className="text-sm text-white/70">No receipts loaded.</p>}
      </div>
    </section>
  )
}
