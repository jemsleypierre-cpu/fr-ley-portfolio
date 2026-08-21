import { useInView } from '../hooks/useInView'
import { skills } from '../data/config'

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="bg-surface py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">Capabilities</span>
          <h2 className="section-title text-ink font-bold mt-2">Skills &amp; Tools</h2>
        </div>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <div
              key={category}
              className={`bg-canvas border border-amber-900/10 p-7 rounded-[28px] shadow-lg shadow-amber-900/5 hover:shadow-xl hover:border-amber/30 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="bg-amber/15 text-amber px-3.5 py-1.5 rounded-full font-mono text-xs font-extrabold uppercase tracking-wider inline-block mb-6">
                {category}
              </div>
              <ul className="space-y-2.5" role="list">
                {items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-amber-900/5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-crimson flex-shrink-0" aria-hidden="true" />
                    <span className="font-body text-xs font-bold text-ink">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
