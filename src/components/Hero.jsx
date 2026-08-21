import { useState } from 'react'
import { siteConfig } from '../data/config'
import SocialShare from './SocialShare'

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  const scrollToWork = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-canvas overflow-hidden pt-24 pb-16"
    >
      {/* Background Graphic Circle 1: Top-Right Amber Arc/Circle */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-amber/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Background Graphic Circle 2: Bottom-Left Crimson Arc/Circle */}
      <div
        className="absolute -bottom-40 -left-40 w-[550px] h-[550px] bg-crimson/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-120px)]">
          {/* Text side */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Pill Section Label */}
            <div>
              <span className="section-label animate-fade-up">
                Available for Freelance
              </span>
            </div>

            {/* Name */}
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-ink font-extrabold leading-none mb-3 animate-fade-up delay-100">
              FR<span className="text-crimson">.</span>LEY
            </h1>

            {/* Title */}
            <p className="font-mono text-sm font-bold text-amber tracking-widest uppercase mb-6 animate-fade-up delay-200">
              Web Designer &amp; Developer
            </p>

            {/* Headline */}
            <h2 className="font-body text-xl md:text-2xl text-ink font-medium leading-relaxed max-w-lg mb-10 animate-fade-up delay-300">
              {siteConfig.headline}
              <br />
              <span className="text-steel text-base md:text-lg block mt-3 font-normal">{siteConfig.subheadline}</span>
            </h2>

            {/* Buttons & Social Share */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-up delay-400">
              <button onClick={scrollToWork} className="btn-primary">
                View My Work
              </button>
              <button onClick={scrollToContact} className="btn-crimson">
                Let's Work Together
              </button>
              <SocialShare layout="compact" />
            </div>

            {/* Contact strip */}
            <div className="mt-12 pt-6 border-t border-amber-900/10 flex flex-wrap gap-6 text-sm text-steel font-medium animate-fade-up delay-500">
              <a href={`mailto:${siteConfig.email}`} className="text-crimson font-semibold hover:underline">
                {siteConfig.email}
              </a>
              <span className="hidden sm:inline text-amber-900/20">·</span>
              <span>{siteConfig.location}</span>
            </div>
          </div>

          {/* Image side - Card with Floating Badges from Reference Design */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in delay-300">
            <div className="relative">
              {/* Main Card Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] bg-white p-4 rounded-[40px] shadow-2xl shadow-amber-900/10 border border-amber-900/5">
                <div className="w-full h-full overflow-hidden rounded-[32px] relative">
                  {!imgError ? (
                    <img
                      src={siteConfig.profileImage}
                      alt="FR LEY — Web Designer and Developer"
                      className="w-full h-full object-cover object-top"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="img-placeholder w-full h-full flex flex-col items-center justify-center gap-3">
                      <span className="font-display text-5xl text-amber">FL</span>
                      <span className="font-mono text-xs text-steel tracking-widest">FR LEY</span>
                    </div>
                  )}
                </div>

                {/* Floating Badge 1: Teal Accent Badge (like "40% Discount" in reference) */}
                <div className="absolute top-8 left-8 bg-teal text-white px-4 py-2 rounded-2xl shadow-lg font-mono text-xs font-bold flex items-center gap-1.5 animate-bounce" style={{ animationDuration: '4s' }}>
                  <span className="w-2 h-2 rounded-full bg-amber animate-ping" />
                  100% Quality
                </div>

                {/* Floating Badge 2: Floating Pill Control Widget (like "+ 01 -" control in reference) */}
                <div className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white/90 backdrop-blur border border-amber-900/10 p-2.5 rounded-2xl shadow-xl flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-amber/10 text-amber font-bold text-sm flex items-center justify-center">+</div>
                  <div className="w-8 h-8 rounded-xl bg-ink text-white font-mono text-xs font-bold flex items-center justify-center">01</div>
                  <div className="w-8 h-8 rounded-xl bg-amber/10 text-amber font-bold text-sm flex items-center justify-center">-</div>
                </div>

                {/* Floating Badge 3: Bottom Pill Badge (like "Total order / Pay Now" bar in reference) */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white border border-amber-900/10 p-3.5 px-6 rounded-3xl shadow-xl flex items-center gap-4 w-[88%] justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase text-steel font-bold tracking-wider">SPECIALTY</p>
                    <p className="font-body text-xs text-ink font-extrabold">UI/UX &amp; Web Dev</p>
                  </div>
                  <span className="bg-amber text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md">
                    Hire Me
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
