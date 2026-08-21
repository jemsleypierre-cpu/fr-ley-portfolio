import { siteConfig } from '../data/config'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-canvas border-t border-amber-900/10 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left: brand + info */}
          <div>
            <p className="font-display text-2xl text-ink font-extrabold mb-1">
              FR<span className="text-crimson">.</span>LEY
            </p>
            <p className="font-mono text-xs text-amber tracking-wider mb-3 font-extrabold uppercase">
              WEB DESIGNER &amp; DEVELOPER
            </p>
            <p className="font-body text-xs text-steel font-medium">{siteConfig.location}</p>
            <div className="flex flex-col gap-1 mt-2">
              <a href={`mailto:${siteConfig.email}`} className="font-body text-xs text-crimson font-bold hover:underline">
                {siteConfig.email}
              </a>
              <a href={`tel:+${siteConfig.phoneRaw}`} className="font-body text-xs text-steel hover:text-ink transition-colors font-semibold">
                {siteConfig.phone}
              </a>
            </div>
          </div>

          {/* Right: nav + back to top */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
                {[
                  ['Work',     '#projects'],
                  ['About',    '#about'],
                  ['Skills',   '#skills'],
                  ['Services', '#services'],
                  ['Contact',  '#contact'],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }}
                      className="font-body text-xs font-bold text-steel hover:text-crimson transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              onClick={scrollTop}
              className="flex items-center gap-2 font-mono text-xs text-amber hover:text-crimson transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded font-bold"
              aria-label="Back to top"
            >
              Back to top ↑
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-amber-900/10 flex flex-col sm:flex-row justify-between gap-2 font-medium">
          <p className="font-mono text-xs text-steel">
            © {year} FR LEY. All rights reserved.
          </p>
          <p className="font-mono text-xs text-steel">
            Designed &amp; built by FR LEY
          </p>
        </div>
      </div>
    </footer>
  )
}
