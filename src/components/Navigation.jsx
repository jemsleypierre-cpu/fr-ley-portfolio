import { useState, useEffect } from 'react'
import { siteConfig } from '../data/config'

const navLinks = [
  { label: 'Work',     href: '#projects' },
  { label: 'About',   href: '#about' },
  { label: 'Skills',  href: '#skills' },
  { label: 'Services',href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-3`}
      >
        <nav className={`max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16 rounded-full transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-xl border border-amber-900/10' : 'bg-white/70 backdrop-blur-sm shadow-md border border-amber-900/5'
        }`}>
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
            className="font-display text-xl text-ink font-extrabold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded-full px-2"
            aria-label="FR LEY – Back to top"
          >
            FR<span className="text-crimson">.</span>LEY
          </a>

          {/* Desktop pill links */}
          <ul className="hidden md:flex items-center gap-6" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                  className="font-body text-sm font-semibold text-steel hover:text-crimson transition-colors duration-200 tracking-wide px-3 py-1.5 rounded-full relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('#contact')}
              className="hidden md:inline-flex btn-primary text-sm shadow-md rounded-xl py-2.5 px-6"
            >
              Let's Work Together
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded-lg"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-canvas/98 backdrop-blur-lg flex flex-col justify-center px-8 transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col gap-6" role="list">
          {navLinks.map((link, i) => (
            <li key={link.href} style={{ transitionDelay: `${i * 60}ms` }}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                className="font-display text-4xl text-ink font-bold hover:text-crimson transition-colors duration-200 block"
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-12 pt-8 border-t border-amber-900/10">
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-body text-sm font-semibold text-crimson"
            tabIndex={menuOpen ? 0 : -1}
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </>
  )
}
