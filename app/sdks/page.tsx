export default function SDKs() {
  return (
    <section className="container py-10 space-y-6">
      <h1 className="text-2xl font-semibold">SDKs & Integrations</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card">
          <h3 className="font-semibold mb-2">Python Verification</h3>
          <pre className="text-xs whitespace-pre-wrap">{`pip install signet-verify

from signet_verify import verify_receipt
ok, reason = verify_receipt(receipt_json)`}</pre>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-2">JavaScript Verification</h3>
          <pre className="text-xs whitespace-pre-wrap">{`npm i signet-verify-js

import { verifyReceipt } from 'signet-verify-js'
const { valid, reason } = verifyReceipt(receiptJson)`}</pre>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-2">Express Ingress (PCH verify)</h3>
          <pre className="text-xs whitespace-pre-wrap">{`import { verifySignetHeaders } from '@signet-protocol/pch-express'
app.use(verifySignetHeaders({ jwksUrl: process.env.SIGNET_JWKS_URL }))`}</pre>
        </div>
        <div className="card">
          <h3 className="font-semibold mb-2">FastAPI Ingress (PCH verify)</h3>
          <pre className="text-xs whitespace-pre-wrap">{`from signet_pch_fastapi import verify_signet_request
@app.middleware("http")
async def mpc(request, call_next):
    verify_signet_request(request, jwks_url=os.environ["SIGNET_JWKS_URL"])
    return await call_next(request)`}</pre>
        </div>
      </div>
    </section>
  )
}
