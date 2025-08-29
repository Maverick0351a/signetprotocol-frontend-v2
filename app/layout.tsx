import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Signet Protocol — Trust Fabric for AI-to-AI',
  description: 'Every agent call becomes a Verified Exchange with signed receipts, governed egress, and a one-command AI Act dossier.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-white/10">
          <div className="container flex items-center py-4">
            <Link href="/" className="flex items-center mr-8">
              <img 
                src="/logo.png" 
                alt="Signet Protocol" 
                className="h-12 w-auto rounded opacity-90 hover:opacity-100 transition-opacity duration-200" 
                style={{ backgroundColor: 'transparent' }}
              />
            </Link>
            <nav className="flex items-center gap-5 text-sm text-white/80">
              <Link href="/compliance">Compliance</Link>
              <Link href="/playground">Playground</Link>
              <Link href="/receipts">Receipts</Link>
              <Link href="/research">Research</Link>
              <Link href="/roi">ROI</Link>
              <Link href="/status">Status</Link>
              <Link href="/sdks">SDKs</Link>
              <Link href="/docs">Docs</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-white/10 py-10">
          <div className="container text-white/60 text-sm flex items-center justify-between">
            <p>© {new Date().getFullYear()} Signet Protocol</p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" className="hover:text-white/90">GitHub</a>
              <a href="/status" className="hover:text-white/90">Status</a>
              <a href="/docs" className="hover:text-white/90">Docs</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
