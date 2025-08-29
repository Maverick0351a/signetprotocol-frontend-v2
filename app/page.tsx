'use client'
import { useState } from 'react'

export default function Home() {
  const [question, setQuestion] = useState('How does the AI Act Compliance Kit work with receipts?')
  const [answer, setAnswer] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function ask() {
    setLoading(true)
    setAnswer(null)
    try {
      const res = await fetch('/api/qa', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question })
      })
      const data = await res.json()
      setAnswer(data.answer || data.message || 'No answer.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-purple-500/5"></div>
        <div className="absolute inset-0 bg-gradient-radial from-brand/20 via-transparent to-transparent"></div>
        
        <div className="container relative py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand/30 bg-brand/10 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-brand animate-pulse"></div>
                  <span className="text-sm font-medium text-brand-light">Enterprise AI Trust Infrastructure</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                    Verifiable AI
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-brand via-blue-400 to-brand-dark bg-clip-text text-transparent">
                    Exchanges
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl">
                  Transform every AI agent interaction into cryptographically verifiable exchanges with 
                  <span className="text-white font-semibold"> signed receipts</span>, 
                  <span className="text-white font-semibold"> governed egress</span>, and 
                  <span className="text-white font-semibold"> automated compliance</span>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  className="btn-primary group" 
                  href="/playground"
                >
                  <span>Start Verification</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a 
                  className="btn-secondary" 
                  href="/compliance"
                >
                  Generate Compliance Report
                </a>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-white/60">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{'< 50ms'}</div>
                  <div className="text-sm text-white/60">Verification Latency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">SOC 2</div>
                  <div className="text-sm text-white/60">Type II Certified</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="card-premium">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-lg bg-brand/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">AI Knowledge Assistant</h3>
                      <p className="text-sm text-white/60">Powered by Signet documentation</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <input
                      className="input-premium flex-1"
                      value={question}
                      onChange={e => setQuestion(e.target.value)}
                      placeholder="Ask about compliance, receipts, verification..."
                      onKeyDown={e => e.key === 'Enter' && ask()}
                    />
                    <button 
                      className="btn-icon" 
                      onClick={ask} 
                      disabled={loading}
                    >
                      {loading ? (
                        <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="response-area">
                  {answer ? (
                    <div className="space-y-3">
                      <p className="text-white/90 leading-relaxed">{answer}</p>
                      <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                        <svg className="w-3 h-3 text-brand" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <p className="text-xs text-white/50">
                          Responses are grounded in official Signet documentation. For legal advice, consult qualified counsel.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <svg className="w-12 h-12 text-white/20 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-white/50 text-sm">
                        Ask questions about Signet's capabilities, compliance features, and integration options.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Enterprise-Grade AI Verification
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Built for organizations that need cryptographic proof of AI interactions, 
            regulatory compliance, and enterprise security standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'AI Act Compliance Suite',
              desc: 'Automated Annex IV dossiers, performance monitoring, retention policies, and GPAI transparency reporting.',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              features: ['Annex IV Auto-Generation', 'PMM & Retention', 'CE/DoC Templates', 'GPAI Transparency']
            },
            {
              title: 'Cryptographic Receipts',
              desc: 'Ed25519-signed receipts with JCS canonicalization and hash-linked chains for tamper-evident audit trails.',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              features: ['Ed25519 Signatures', 'Hash-Linked Chains', 'JCS Canonicalization', 'Immutable Audit Trail']
            },
            {
              title: 'Zero-Trust Egress',
              desc: 'Deny-by-default allowlists, IP pinning, and comprehensive SSRF defenses for secure AI communications.',
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              features: ['Allowlist Controls', 'IP Pinning', 'SSRF Protection', 'Traffic Monitoring']
            },
          ].map((feature, i) => (
            <div key={i} className="feature-card group">
              <div className="flex items-center gap-4 mb-4">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-brand transition-colors">
                  {feature.title}
                </h3>
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                {feature.desc}
              </p>
              <ul className="space-y-2">
                {feature.features.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-white/60">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
