import { NextRequest, NextResponse } from 'next/server'

const primers = [
  { q: /compliance|annex|ai act|dossier/i, a: "The AI Act Compliance Kit turns SR‑1 receipts and metrics into a regulator‑ready Annex IV dossier with PMM, retention, CE/DoC and GPAI transparency. Exports are signed and hash‑linked for independent verification." },
  { q: /rtl|transparency log/i, a: "Receipts Transparency Log (RTL) anchors receipt hashes in a CT‑style Merkle tree with Signed Tree Heads. Clients can fetch inclusion proofs to verify immutability over time." },
  { q: /pch|proof.*http|http signature/i, a: "Proof‑Carrying HTTP adds detached signatures and Signet headers (trace_id, cid, policy) to forwarded requests. Downstream services verify at ingress via JWKS—no proof, no entry." },
  { q: /did|hsm|hardware/i, a: "Signet can bind keys to hardware (HSM/WebAuthn) and publish DID documents (did:web). Receipts/export bundles reference KIDs/DIDs for provenance." },
  { q: /hel|egress|allowlist/i, a: "HEL is deny‑by‑default egress control. Only allowlisted hosts can be forwarded to. This mitigates SSRF and data exfil risks." },
  { q: /receipts|sr-?1|cid|hash/i, a: "SR‑1 receipts are canonicalized JSON (RFC 8785), hashed to a CID, signed (Ed25519), and hash‑linked per hop. Export bundles include signatures for offline verification." },
]

export async function POST(req: NextRequest) {
  const { question } = await req.json()
  const mode = process.env.SIGNET_QA_MODE || 'local'
  if ((mode === 'proxy') && process.env.SIGNET_QA_URL) {
    try {
      const r = await fetch(process.env.SIGNET_QA_URL!, {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ question })
      })
      const data = await r.json()
      return NextResponse.json({ answer: data.answer ?? data.message ?? 'No answer.' })
    } catch {
      // fallthrough to local
    }
  }
  const hit = primers.find(p => p.q.test(String(question||'')))
  const a = hit?.a || "Signet turns agent calls into Verified Exchanges with SR‑1 signed receipts, HEL egress, and a one‑command AI Act dossier. Ask about Compliance, RTL, PCH, DID, or the Playground."
  return NextResponse.json({ answer: a })
}
