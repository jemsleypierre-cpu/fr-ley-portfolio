import { useInView } from '../hooks/useInView'

const principles = [
  {
    number: '01',
    title: 'Visual Hierarchy',
    body:
      "Every element on a page has a job. I use scale, weight, contrast, and spacing to direct the visitor's eye — from the first headline to the final CTA — in the exact order that serves the page's purpose.",
  },
  {
    number: '02',
    title: 'User Experience',
    body:
      'Good design is invisible. I design flows that remove friction, reduce cognitive load, and make every interaction feel intuitive — so users accomplish their goal without ever having to think about the interface.',
  },
  {
    number: '03',
    title: 'Responsive Design',
    body:
      'A website that breaks on mobile is a broken website. I design and build mobile-first, testing at every breakpoint to ensure the experience is excellent on any screen — phone, tablet, or desktop.',
  },
  {
    number: '04',
    title: 'Conversion-Focused Design',
    body:
      'Design without a purpose is decoration. Every layout, color choice, and piece of copy I work on is evaluated against one question: does this move the visitor closer to the desired action?',
  },
]

export default function DesignApproach() {
  const [ref, inView] = useInView()

  return (
    <section className="bg-canvas py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div
          ref={ref}
          className={`max-w-xl mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">Design Philosophy</span>
          <h2 className="font-display text-4xl md:text-5xl text-ink font-bold leading-tight mt-2">
            How I Approach <span className="text-amber">Design</span>
          </h2>
          <div className="w-16 h-1 bg-amber rounded-full mt-4" />
        </div>

        {/* Principle cards */}
        <div className="grid sm:grid-cols-2 gap-8">
          {principles.map((p, i) => (
            <div
              key={p.number}
              className={`bg-white border border-amber-900/10 p-8 md:p-10 rounded-[32px] shadow-xl shadow-amber-900/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-amber/15 text-amber font-mono font-extrabold text-lg flex items-center justify-center mb-6">
                {p.number}
              </div>
              <h3 className="font-display text-2xl text-ink font-bold mb-3">{p.title}</h3>
              <p className="font-body text-sm text-steel leading-relaxed font-medium">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
