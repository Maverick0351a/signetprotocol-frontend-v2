import './globals.css'
import Link from 'next/link'
import type { Route } from 'next'

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
            <Link href="/" className="flex items-center mr-12">
              <img
                src="/logo.png"
                alt="Signet Protocol"
                className="logo-img h-40 sm:h-56 md:h-64 lg:h-72 w-auto max-h-[18rem]"
              />
            </Link>
            <nav className="flex items-center gap-2 text-sm">
              <Link className="nav-btn" href={"/compliance" as Route}>Compliance</Link>
              <Link className="nav-btn" href={"/playground" as Route}>Playground</Link>
              <Link className="nav-btn" href={"/receipts" as Route}>Receipts</Link>
              <Link className="nav-btn" href={"/research" as Route}>Research</Link>
              <Link className="nav-btn" href={"/roi" as Route}>ROI</Link>
              <Link className="nav-btn" href={"/status" as Route}>Status</Link>
              <Link className="nav-btn" href={"/sdks" as Route}>SDKs</Link>
              <Link className="nav-btn" href={"/docs" as Route}>Docs</Link>
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
