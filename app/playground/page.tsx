'use client'
import { useState } from 'react'
import { newIdem } from '../../components/Idem'

const samplePayload = {
  from_agent: "agent.alpha",
  to_agent: "agent.beta",
  payload_type: "openai.tooluse.invoice.v1",
  target_type: "invoice.iso20022.v1",
  payload: {
    tool_calls: [{
      type: "function",
      function: {
        name: "create_invoice",
        arguments: "{\"invoice_id\":\"INV-1\",\"amount\":123.45,\"currency\":\"USD\",\"customer_name\":\"Acme\",\"description\":\"Services\"}"
      }
    }]
  },
  forward_url: "https://postman-echo.com/post",
  meta: {
    adherence: { strict: false },
    fallback_enabled: true
  }
}

export default function Playground() {
  const [apiKey, setApiKey] = useState('')
  const [body, setBody] = useState(JSON.stringify(samplePayload, null, 2))
  const [resp, setResp] = useState<string>('')
  const [loading, setLoading] = useState(false)

  async function send() {
    setLoading(true); setResp('')
    try {
      const res = await fetch('/api/exchange', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apiKey: apiKey || process.env.NEXT_PUBLIC_SIGNET_DEMO_API_KEY,
          idempotencyKey: newIdem(),
          payload: JSON.parse(body)
        })
      })
      setResp(await res.text())
    } catch (e:any) {
      setResp(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="container py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Playground — /v1/exchange</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card space-y-3">
          <label className="label">X‑SIGNET‑API‑Key</label>
          <input className="input" placeholder="enter API key (not stored)" value={apiKey} onChange={e=>setApiKey(e.target.value)} />
          <label className="label mt-2">Request Body</label>
          <textarea className="textarea h-[320px]" value={body} onChange={e=>setBody(e.target.value)} />
          <button className="btn" onClick={send} disabled={loading}>{loading? 'Sending…' : 'Send Exchange'}</button>
        </div>
        <div className="card">
          <label className="label">Response</label>
          <pre className="text-xs whitespace-pre-wrap">{resp || '—'}</pre>
        </div>
      </div>
    </section>
  )
}
