import { useInView } from '../hooks/useInView'
import { selectedWork } from '../data/projects'

export default function SelectedWork() {
  const [ref, inView] = useInView()

  return (
    <section className="bg-surface py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">External Work</span>
          <h2 className="section-title text-ink font-bold mt-2">Selected Live Websites</h2>
        </div>

        {/* Work list */}
        <div className="space-y-4">
          {selectedWork.map((item, i) => (
            <div
              key={item.id}
              className={`group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-canvas border border-amber-900/10 rounded-[24px] shadow-lg shadow-amber-900/5 hover:border-amber/40 hover:shadow-xl transition-all duration-300 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                {/* Index badge */}
                <div className="w-10 h-10 rounded-2xl bg-amber/15 text-amber font-mono font-extrabold text-sm flex items-center justify-center flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div>
                  <span className="font-mono text-[11px] text-crimson font-extrabold tracking-wider uppercase">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xl text-ink font-bold group-hover:text-crimson transition-colors duration-200 mt-0.5">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-steel mt-1 font-medium">{item.description}</p>
                </div>
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 btn-primary text-xs py-2.5 px-5 self-start sm:self-auto rounded-xl shadow-md"
                aria-label={`View ${item.title} — opens in new tab`}
              >
                View Live Site →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
