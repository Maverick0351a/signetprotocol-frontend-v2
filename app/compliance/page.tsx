'use client'
import { useState } from 'react'

export default function Compliance() {
  const [period, setPeriod] = useState('last_30d')
  const [apiKey, setApiKey] = useState('')
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState('')

  async function generate() {
    setBusy(true); setMsg('')
    try {
      const res = await fetch('/api/compliance/dossier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ period, apiKey })
      })
      if (!res.ok) throw new Error(await res.text())
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `signet_dossier_${period}.zip`
      a.click()
      setMsg('Dossier generated and downloaded.')
    } catch(e:any) {
      setMsg(e.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="container py-10 space-y-6">
      <h1 className="text-2xl font-semibold">AI Act Compliance Kit</h1>
      <p className="text-white/80">Generate an Annex IV dossier with signed, hash‑linked evidence in minutes.</p>

      <div className="card space-y-3">
        <div>
          <label className="label">Period</label>
          <select className="select" value={period} onChange={e=>setPeriod(e.target.value)}>
            <option value="last_30d">Last 30 days</option>
            <option value="last_90d">Last 90 days</option>
            <option value="ytd">Year to date</option>
          </select>
        </div>
        <div>
          <label className="label">X‑SIGNET‑API‑Key</label>
          <input className="input" placeholder="enter API key (not stored)" value={apiKey} onChange={e=>setApiKey(e.target.value)} />
        </div>
        <button className="btn" onClick={generate} disabled={busy}>{busy? 'Generating…' : 'Generate Dossier'}</button>
        {msg && <p className="text-sm text-white/70">{msg}</p>}
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          {title:'Annex IV Generator',desc:'Technical documentation (HTML/PDF/JSON) with signed export headers.'},
          {title:'PMM & Retention',desc:'Performance drift, incidents, and long-term evidence retention.'},
          {title:'Selective‑Disclosure',desc:'Redacted proofs for regulator sharing w/ per‑field commitments.'},
        ].map((x,i)=>(
          <div key={i} className="card">
            <h3 className="font-semibold">{x.title}</h3>
            <p className="text-white/70 text-sm mt-1">{x.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
