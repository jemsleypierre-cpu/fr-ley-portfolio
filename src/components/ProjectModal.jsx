import { useEffect, useState } from 'react'
import SocialShare from './SocialShare'

export default function ProjectModal({ project, onClose }) {
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-md overflow-y-auto p-4 md:p-10 flex justify-center items-start animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${project.title}`}
    >
      <div className="relative w-full max-w-4xl bg-white rounded-[36px] shadow-2xl border border-amber-900/10 overflow-hidden my-6 md:my-12">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 flex items-center gap-2 text-ink font-bold font-body text-xs bg-canvas hover:bg-amber hover:text-white border border-amber-900/10 px-4 py-2 rounded-full shadow-md transition-all"
          aria-label="Close case study"
        >
          ✕ Close
        </button>

        <div className="p-8 md:p-14">
          {/* Header */}
          <div className="mb-8 pr-16">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className={`font-mono text-xs px-3.5 py-1 rounded-full font-extrabold shadow-sm ${
                project.type === 'Client Project'
                  ? 'bg-crimson text-white'
                  : 'bg-teal text-white'
              }`}>
                {project.type}
              </span>
              <span className="font-mono text-xs px-3.5 py-1 rounded-full border border-amber-900/10 text-steel font-bold bg-canvas">
                {project.category}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-ink font-bold mb-4">{project.title}</h1>
            <p className="font-body text-steel text-base md:text-lg leading-relaxed max-w-2xl font-medium">{project.description}</p>
          </div>

          {/* Hero image */}
          <div className="mb-10 aspect-video overflow-hidden rounded-[24px] border border-amber-900/10 shadow-lg">
            {!imgError ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="img-placeholder w-full h-full flex items-center justify-center">
                <span className="font-display text-4xl text-amber opacity-30">{project.id}</span>
              </div>
            )}
          </div>

          {/* Meta grid */}
          <div className="grid sm:grid-cols-3 gap-4 bg-canvas p-6 rounded-[24px] border border-amber-900/10 mb-10 shadow-inner">
            {[
              { label: 'My Role', value: project.role },
              { label: 'Category', value: project.category },
              { label: 'Tools', value: project.tools.join(', ') },
            ].map(({ label, value }) => (
              <div key={label}>
                <span className="font-mono text-[11px] text-amber font-extrabold uppercase tracking-wider block mb-1">{label}</span>
                <p className="font-body text-ink font-bold text-sm">{value}</p>
              </div>
            ))}
          </div>

          {/* Case study sections */}
          {[
            { label: 'Overview',      content: project.overview },
            { label: 'The Problem',   content: project.problem  },
            { label: 'The Goal',      content: project.goal     },
            { label: 'Process',       content: project.process  },
            { label: 'Final Result',  content: project.result   },
          ].map(({ label, content }) => (
            content && (
              <div key={label} className="mb-8 pb-8 border-b border-amber-900/5 last:border-0">
                <h2 className="font-display text-2xl text-ink font-bold mb-3">{label}</h2>
                <p className="font-body text-steel text-sm md:text-base leading-relaxed font-medium">{content}</p>
              </div>
            )
          ))}

          {/* Social Share for this specific project */}
          <div className="mt-8">
            <SocialShare
              title={`Project Case Study: ${project.title} | FR LEY`}
              text={`Check out this project by FR LEY: ${project.title} — ${project.description}`}
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-amber-900/10">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Live Project →
              </a>
            )}
            {project.caseStudyUrl && (
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Full Case Study
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
