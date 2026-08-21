import { useInView } from '../hooks/useInView'
import { services } from '../data/config'

// Icon map using SVG paths
const iconPaths = {
  Monitor: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  Zap:     'M13 10V3L4 14h7v7l9-11h-7z',
  User:    'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  Code:    'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  Layers:  'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  Image:   'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  Camera:  'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z',
  Film:    'M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z',
}

function ServiceIcon({ name }) {
  const path = iconPaths[name] || iconPaths.Monitor
  return (
    <svg className="w-6 h-6 text-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
    </svg>
  )
}

export default function Services() {
  const [ref, inView] = useInView()

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="bg-canvas py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div
          ref={ref}
          className={`flex flex-col md:flex-row md:items-end justify-between mb-14 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <span className="section-label">Services</span>
            <h2 className="font-display text-4xl md:text-5xl text-ink font-bold leading-tight mt-2">
              What I Can Help<br />
              <span className="text-crimson italic">You Build</span>
            </h2>
          </div>
          <button
            onClick={scrollToContact}
            className="mt-6 md:mt-0 btn-primary self-start md:self-auto"
          >
            Start a Project
          </button>
        </div>

        {/* Service grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`bg-white border border-amber-900/10 p-7 rounded-[28px] shadow-xl shadow-amber-900/5 hover:shadow-2xl hover:-translate-y-1 hover:border-amber/30 transition-all duration-300 cursor-default ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="mb-4 inline-flex p-3.5 bg-amber/15 rounded-2xl border border-amber/20 shadow-sm">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="font-display text-lg text-ink font-bold mb-2">
                {service.title}
              </h3>
              <p className="font-body text-xs text-steel leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
