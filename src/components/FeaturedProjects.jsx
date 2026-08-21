import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import SocialShare from './SocialShare'

export default function FeaturedProjects() {
  const [ref, inView] = useInView()
  const [selected, setSelected] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Web Design', 'UI/UX Design', 'Client Project']

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.includes(activeCategory) || p.type.includes(activeCategory))

  return (
    <>
      <section id="projects" className="bg-canvas py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Header */}
          <div
            ref={ref}
            className={`flex flex-col md:flex-row md:items-end justify-between mb-10 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <span className="section-label">Featured Showcase</span>
              <h2 className="section-title text-ink font-bold">
                Selected Projects &amp; <br />
                <span className="text-crimson italic">Case Studies</span>
              </h2>
            </div>
            <p className="font-body text-steel text-sm max-w-xs mt-4 md:mt-0 md:text-right font-medium">
              Explore high-converting web designs, mobile UI apps, and front-end applications.
            </p>
          </div>

          {/* Reference Design Category Tab Bar */}
          <div className="flex items-center gap-6 overflow-x-auto pb-4 mb-12 border-b border-amber-900/10 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-sm font-bold tracking-wide transition-all duration-200 pb-2 relative whitespace-nowrap ${
                  activeCategory === cat
                    ? 'text-crimson'
                    : 'text-steel hover:text-ink'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-crimson rounded-full animate-fade-in" />
                )}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, i) => (
              <div
                key={project.id}
                className={`transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelected(project)}
                />
              </div>
            ))}
          </div>

          {/* Social Share Bar */}
          <SocialShare title="FR LEY — Web Design & Development Showcase" text="Check out these high-converting web design case studies by FR LEY!" />
        </div>
      </section>

      {/* Project detail modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
