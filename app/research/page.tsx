'use client'

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand/30 bg-brand/10 backdrop-blur-sm mb-6">
            <div className="h-2 w-2 rounded-full bg-brand animate-pulse"></div>
            <span className="text-sm font-medium text-brand-light">Decision-Grade Research</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Validating Signet Protocol as the Trust Fabric for AI-to-AI Communication
          </h1>
          
          <div className="text-lg text-white/70 space-y-2">
            <p>Authored by: Enterprise AI Governance & Security Analysis Division</p>
            <p>Publication Date: August 28, 2025 | Report ID: SIG-2025-08-28-A1</p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="card-premium mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <a href="#executive-summary" className="block text-brand hover:text-brand-light transition-colors">Executive Summary</a>
              <a href="#section-1" className="block text-brand hover:text-brand-light transition-colors">1. The Governance Imperative in Regulated AI</a>
              <a href="#section-2" className="block text-brand hover:text-brand-light transition-colors">2. Aligning with the Global Regulatory Landscape</a>
              <a href="#section-3" className="block text-brand hover:text-brand-light transition-colors">3. The Cryptographic Foundations of Verifiable Exchange</a>
            </div>
            <div className="space-y-2">
              <a href="#section-4" className="block text-brand hover:text-brand-light transition-colors">4. Mitigating Advanced AI-Specific Threats</a>
              <a href="#section-5" className="block text-brand hover:text-brand-light transition-colors">5. Competitive Analysis and Unique Positioning</a>
              <a href="#section-6" className="block text-brand hover:text-brand-light transition-colors">6. Quantifying the Business Impact and ROI</a>
              <a href="#section-7" className="block text-brand hover:text-brand-light transition-colors">7. Counterarguments and Risk Mitigation</a>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <section id="executive-summary" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Executive Summary</h2>
          
          <div className="card-premium mb-8">
            <p className="text-white/90 leading-relaxed mb-6">
              This research brief provides a comprehensive validation of the Signet Protocol's claim to be the trust fabric for AI-to-AI communication. Through a detailed analysis of primary regulatory texts, open technical standards, and market requirements, this report concludes that Signet Protocol's architecture provides a unique and necessary foundation for secure, verifiable, and compliant AI agent ecosystems.
            </p>
            
            <p className="text-white/90 leading-relaxed">
              Its primitives address critical gaps left by existing AI orchestration frameworks, governance platforms, and traditional security tooling.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="feature-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-brand/20 flex items-center justify-center">
                    <span className="text-brand font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Directly Satisfies EU AI Act Mandates</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Signet's core primitives—cryptographically signed SR-1 receipts and the Receipts Transparency Log (RTL)—are a direct technical implementation of the EU AI Act's requirements for secure, tamper-proof, automatically generated logs (Article 19) and auditable record-keeping (Article 12).
                </p>
              </div>

              <div className="feature-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-brand/20 flex items-center justify-center">
                    <span className="text-brand font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Establishes Cryptographic Non-Repudiation</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  The protocol's foundation on open standards, including JSON Canonicalization (RFC 8785), Ed25519 signatures (RFC 8032), and HTTP Message Signatures (RFC 9421), creates a robust and technically sound basis for non-repudiation and verifiable data lineage.
                </p>
              </div>

              <div className="feature-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-brand/20 flex items-center justify-center">
                    <span className="text-brand font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Mitigates Critical AI-Specific Attack Vectors</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Signet's deny-by-default egress control (HEL) and Proof-Carrying HTTP (PCH) are purpose-built to mitigate high-priority AI attack vectors identified by security authorities like OWASP, including DNS rebinding attacks and Indirect Prompt Injection.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="feature-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-brand/20 flex items-center justify-center">
                    <span className="text-brand font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Occupies a Unique Market Position</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Signet Protocol is not a direct competitor to existing AI tools but rather a foundational, enabling layer. It complements high-level orchestration frameworks by securing the interactions they manage, and provides the verifiable "ground truth" data that governance platforms need.
                </p>
              </div>

              <div className="feature-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-brand/20 flex items-center justify-center">
                    <span className="text-brand font-bold">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Delivers Quantifiable ROI Through Automation</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  The protocol's "AI Act Compliance Kit" offers a clear return on investment by automating the generation of Annex IV technical dossiers and Post-Market Monitoring reports, potentially reducing compliance costs by over 80%.
                </p>
              </div>

              <div className="card-premium bg-gradient-to-r from-brand/10 to-purple-500/10 border-brand/30">
                <h4 className="text-lg font-semibold text-white mb-3">Key Conclusion</h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  Signet Protocol is validated as a critical infrastructure component for the next generation of AI. It provides the low-level, cryptographically-enforced trust necessary for enterprises to deploy autonomous AI agents in regulated, high-stakes environments with confidence, verifiability, and regulatory compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Sections Placeholder */}
        <section className="mb-16">
          <div className="card-premium text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Complete Research Document</h3>
            <p className="text-white/70 mb-6">
              This comprehensive research brief contains detailed analysis across 7 major sections covering regulatory compliance, 
              cryptographic foundations, threat mitigation, competitive positioning, ROI analysis, and risk assessment.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="font-semibold text-brand mb-2">Section 3</h4>
                <p className="text-white/60">Cryptographic Foundations of Verifiable Exchange</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="font-semibold text-brand mb-2">Section 4</h4>
                <p className="text-white/60">Mitigating Advanced AI-Specific Threats</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="font-semibold text-brand mb-2">Section 5</h4>
                <p className="text-white/60">Competitive Analysis and Unique Positioning</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="font-semibold text-brand mb-2">Section 6</h4>
                <p className="text-white/60">Quantifying Business Impact and ROI</p>
              </div>
            </div>
            <div className="mt-6">
              <a href="/docs" className="btn-primary">
                View Full Technical Documentation
              </a>
            </div>
          </div>
        </section>

        {/* Key Findings Summary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Key Research Findings</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="feature-icon">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Regulatory Alignment</h3>
              </div>
              <p className="text-white/70 leading-relaxed mb-4">
                Direct technical implementation of EU AI Act Article 19 (tamper-proof logs) and Article 12 (record-keeping) requirements through cryptographically signed receipts.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Automated Annex IV dossier generation</li>
                <li>• 10-year immutable data retention</li>
                <li>• Post-market monitoring automation</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="feature-icon">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Security Architecture</h3>
              </div>
              <p className="text-white/70 leading-relaxed mb-4">
                Built on proven IETF standards (RFC 8785, RFC 8032, RFC 9421) providing cryptographic non-repudiation and Certificate Transparency-style public auditability.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Ed25519 digital signatures</li>
                <li>• JSON canonicalization (JCS)</li>
                <li>• HTTP message signatures</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="feature-icon">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Threat Mitigation</h3>
              </div>
              <p className="text-white/70 leading-relaxed mb-4">
                Purpose-built defenses against OWASP LLM Top 10 threats including SSRF, DNS rebinding, and indirect prompt injection through HEL and PCH controls.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Deny-by-default egress control</li>
                <li>• IP pinning for DNS security</li>
                <li>• Proof-carrying HTTP verification</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ROI Summary */}
        <section className="mb-16">
          <div className="card-premium bg-gradient-to-r from-brand/10 to-purple-500/10 border-brand/30">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Quantified Business Impact</h2>
              <p className="text-white/70">
                Economic analysis demonstrates substantial ROI through compliance automation and risk reduction
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-brand mb-2">370%</div>
                <div className="text-white font-semibold mb-1">Return on Investment</div>
                <div className="text-sm text-white/60">Based on compliance automation and deal acceleration</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand mb-2">€400k</div>
                <div className="text-white font-semibold mb-1">Potential Compliance Savings</div>
                <div className="text-sm text-white/60">Per high-risk AI system under EU AI Act</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand mb-2">80%</div>
                <div className="text-white font-semibold mb-1">Effort Reduction</div>
                <div className="text-sm text-white/60">In manual compliance documentation tasks</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="card-premium">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Implement Verifiable AI Trust?</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Transform your AI agent ecosystem with cryptographically verifiable exchanges, automated compliance reporting, 
              and enterprise-grade security controls built for the regulatory landscape of 2025-2027.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/playground" className="btn-primary">
                Try the Playground
              </a>
              <a href="/compliance" className="btn-secondary">
                Generate Compliance Report
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
