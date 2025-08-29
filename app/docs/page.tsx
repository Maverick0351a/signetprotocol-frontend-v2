export default function Docs() {
  return (
    <section className="container py-10 space-y-6">
      <h1 className="text-2xl font-semibold">Docs & Specs</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          {title:'SR‑1: Signed Receipts',desc:'Receipt format (JCS, CID, hash chain, Ed25519).'},
          {title:'SVX‑1: Verified Exchange',desc:'Exchange semantics, usage metering rules.'},
          {title:'HEL Policy',desc:'Deny‑by‑default allowlists, host validation, SSRF defenses.'},
          {title:'RTL: Transparency Log',desc:'CT‑style Merkle tree, STH, inclusion proofs.'},
          {title:'PCH: Proof‑Carrying HTTP',desc:'Detached HTTP signatures for downstream verification.'},
          {title:'DID/HSM',desc:'Hardware‑backed identity and DID documents.'},
          {title:'Compliance Kit',desc:'Annex IV, PMM, retention, CE/DoC, GPAI transparency.'},
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
