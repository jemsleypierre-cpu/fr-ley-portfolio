import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { siteConfig } from '../data/config'
import SocialShare from './SocialShare'

export default function Contact() {
  const [ref, inView] = useInView()
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleCopyEmail = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(siteConfig.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
    // Fallback attempt to open mailto
    window.location.href = `mailto:${siteConfig.email}`
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) return
    
    // Construct mailto link with pre-filled body as robust fallback
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`)
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)
    
    setSubmitted(true)
    setTimeout(() => {
      window.open(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`, '_self')
    }, 400)
  }

  const openWhatsApp = (e) => {
    e.preventDefault()
    const appUri = `whatsapp://send?phone=${siteConfig.phoneRaw}&text=${encodeURIComponent("Hello FR LEY, I'd like to discuss a project with you.")}`
    const webUri = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent("Hello FR LEY, I'd like to discuss a project with you.")}`

    // Attempt direct deep-link URI to launch native WhatsApp app directly
    window.location.href = appUri

    // Fallback to web version if native app is not installed/registered
    setTimeout(() => {
      window.open(webUri, '_blank')
    }, 700)
  }

  const whatsappAppUri = `whatsapp://send?phone=${siteConfig.phoneRaw}&text=${encodeURIComponent("Hello FR LEY, I'd like to discuss a project with you.")}`
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=${encodeURIComponent("Project Inquiry for FR LEY")}`

  return (
    <section id="contact" className="bg-canvas py-24 md:py-32 relative overflow-hidden">
      {/* Toast Notification */}
      {copied && (
        <div className="fixed bottom-6 right-6 z-50 bg-ink text-white border border-amber px-6 py-3.5 rounded-2xl shadow-2xl font-mono text-xs font-bold flex items-center gap-2 animate-fade-in">
          <span className="text-amber text-base">✓</span> Email copied: {siteConfig.email}
        </div>
      )}

      {/* Background organic shape */}
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-crimson/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="section-label">Get In Touch</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink font-extrabold leading-tight mt-2 mb-4">
              Have a project <br />
              <span className="text-crimson italic">in mind?</span>
            </h2>
            <p className="font-body text-steel text-base md:text-lg leading-relaxed max-w-xl mx-auto font-medium">
              Whether you need a new website, a landing page, or a full digital experience — let's
              talk about what you're building and how I can help.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-14">
            {/* Direct WhatsApp App Launcher Button */}
            <a
              href={whatsappAppUri}
              onClick={openWhatsApp}
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 font-body text-sm font-bold tracking-wide rounded-2xl hover:bg-[#20bd5a] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Me (+1 929 369 4781)
            </a>

            {/* Email App / Copy Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2.5 bg-ink text-white px-8 py-4 font-body text-sm font-bold tracking-wide rounded-2xl hover:bg-crimson transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
              title="Click to copy email address and open email client"
            >
              <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {copied ? 'Email Copied!' : 'Email Me (Click to Copy)'}
            </button>

            {/* Web Gmail Fallback */}
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-amber-900/10 text-ink px-6 py-4 font-body text-sm font-semibold tracking-wide rounded-2xl hover:border-amber hover:bg-amber/5 transition-all shadow-md"
            >
              <svg className="w-4 h-4 text-crimson fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
              Open Web Gmail
            </a>
          </div>

          {/* Embedded Contact Form Container */}
          <div className="bg-white border border-amber-900/10 rounded-[36px] p-8 md:p-12 mb-14 shadow-2xl shadow-amber-900/10 text-left">
            <h3 className="font-display text-2xl text-ink font-bold mb-2">Send a Message Directly</h3>
            <p className="font-body text-steel text-xs md:text-sm mb-6 font-medium">Fill out the form below to send an instant project inquiry.</p>

            {submitted ? (
              <div className="bg-canvas border border-amber-900/10 text-ink p-8 rounded-3xl text-center animate-fade-in">
                <p className="font-display text-2xl text-crimson font-bold mb-2">Thank you!</p>
                <p className="font-body text-sm text-steel font-medium">Your message prompt has been prepared. Opening your email app now...</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 font-mono text-xs text-amber font-bold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-steel font-bold mb-2" htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Jean Dupont"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-canvas border border-amber-900/10 px-5 py-4 text-sm text-ink font-medium focus:outline-none focus:border-amber rounded-2xl transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-steel font-bold mb-2" htmlFor="email">Your Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. jean@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-canvas border border-amber-900/10 px-5 py-4 text-sm text-ink font-medium focus:outline-none focus:border-amber rounded-2xl transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-steel font-bold mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, and goals..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-canvas border border-amber-900/10 px-5 py-4 text-sm text-ink font-medium focus:outline-none focus:border-amber rounded-2xl transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary py-4 px-6 font-body text-sm font-bold rounded-2xl shadow-lg justify-center"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <div className="bg-white border border-amber-900/10 p-6 rounded-[24px] shadow-lg shadow-amber-900/5 text-center sm:text-left">
              <span className="font-mono text-[11px] text-amber font-extrabold uppercase tracking-wider block mb-1">EMAIL</span>
              <a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-ink font-bold hover:text-crimson transition-colors break-all"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="bg-white border border-amber-900/10 p-6 rounded-[24px] shadow-lg shadow-amber-900/5 text-center sm:text-left">
              <span className="font-mono text-[11px] text-amber font-extrabold uppercase tracking-wider block mb-1">WHATSAPP / PHONE</span>
              <a
                href={whatsappAppUri}
                onClick={openWhatsApp}
                className="font-body text-sm text-ink font-bold hover:text-crimson transition-colors cursor-pointer"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div className="bg-white border border-amber-900/10 p-6 rounded-[24px] shadow-lg shadow-amber-900/5 text-center sm:text-left">
              <span className="font-mono text-[11px] text-amber font-extrabold uppercase tracking-wider block mb-1">LOCATION</span>
              <p className="font-body text-sm text-steel font-medium">{siteConfig.location}</p>
            </div>
          </div>

          {/* Social Media Share Bar */}
          <SocialShare />
        </div>
      </div>
    </section>
  )
}
