import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="bg-surface py-24 md:py-32 relative overflow-hidden">
      {/* Background soft circle */}
      <div className="absolute top-1/2 -right-32 w-[450px] h-[450px] bg-amber/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left: section label + title */}
          <div>
            <span className="section-label">About Me</span>
            <h2 className="section-title mb-6">
              Design is thinking<br />
              <span className="text-crimson italic">made visible.</span>
            </h2>

            {/* Divider */}
            <div className="w-16 h-1 bg-amber rounded-full mb-8" />

            <p className="font-body text-steel text-base md:text-lg leading-relaxed mb-6 font-medium">
              I'm FR LEY, a web designer and developer based in Queens, New York. I work at the
              intersection of visual design and front-end development — building digital products
              that look intentional and function cleanly.
            </p>
            <p className="font-body text-steel text-base md:text-lg leading-relaxed mb-6">
              My work spans web design, web development, UI/UX design, graphic design, photo
              editing, video editing, and AI creative tools. I approach every project with a focus
              on clarity, user experience, and the kind of presentation that builds trust
              immediately.
            </p>
            <p className="font-body text-steel text-base md:text-lg leading-relaxed">
              Whether it's a business website, a landing page, or a full digital experience — I
              bring the same level of care and craft to the work, regardless of scale.
            </p>
          </div>

          {/* Right: skills quick-list + location */}
          <div className="space-y-6">
            {/* Discipline list card */}
            <div className="bg-canvas border border-amber-900/10 p-8 rounded-[32px] shadow-xl shadow-amber-900/5">
              <span className="font-mono text-xs text-amber font-extrabold uppercase tracking-wider block mb-4">WHAT I DO</span>
              <ul className="grid sm:grid-cols-2 gap-3" role="list">
                {[
                  'Web Design',
                  'Web Development',
                  'UI/UX Design',
                  'Landing Pages',
                  'Graphic Design',
                  'Photo Editing',
                  'Video Editing',
                  'AI Creative Tools',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 bg-white p-3 rounded-2xl border border-amber-900/5 shadow-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-crimson flex-shrink-0" aria-hidden="true" />
                    <span className="font-body text-ink font-bold text-xs">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location card */}
            <div className="bg-white border border-amber-900/10 p-6 flex items-start gap-4 rounded-[28px] shadow-lg shadow-amber-900/5">
              <div className="w-10 h-10 rounded-2xl bg-amber/15 text-amber flex items-center justify-center flex-shrink-0 font-bold text-lg">
                📍
              </div>
              <div>
                <p className="font-body text-ink font-bold text-sm mb-0.5">Based in</p>
                <p className="font-body text-steel text-sm font-medium">Queens, New York, USA</p>
                <p className="font-mono text-xs text-crimson mt-1 font-bold">Available for remote &amp; local projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
