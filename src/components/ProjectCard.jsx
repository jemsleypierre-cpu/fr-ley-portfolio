import { useState } from 'react'

export default function ProjectCard({ project, onClick }) {
  const [imgError, setImgError] = useState(false)

  return (
    <article
      className="bg-white p-5 rounded-[28px] border border-amber-900/10 shadow-xl shadow-amber-900/5 hover:shadow-2xl hover:border-amber/30 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer flex flex-col justify-between h-full"
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      tabIndex={0}
      role="button"
      aria-label={`View case study: ${project.title}`}
    >
      <div>
        {/* Image Container with Floating Badges */}
        <div className="relative overflow-hidden mb-4 aspect-[4/3] rounded-2xl bg-amber-900/5">
          {!imgError ? (
            <img
              src={project.image}
              alt={`${project.title} — ${project.category}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="img-placeholder w-full h-full flex flex-col items-center justify-center gap-2">
              <span className="font-mono text-xs text-mist">Add image to public/images/</span>
              <span className="font-display text-2xl text-amber opacity-40">{project.id}</span>
            </div>
          )}

          {/* Floating Badge 1: Top-Left Discount/Promo style chip from reference UI */}
          <div className="absolute top-3 left-3">
            <span
              className={`font-mono text-[11px] font-extrabold px-3 py-1 rounded-xl shadow-md ${
                project.type === 'Client Project'
                  ? 'bg-crimson text-white'
                  : 'bg-teal text-white'
              }`}
            >
              {project.type}
            </span>
          </div>

          {/* Floating Badge 2: Top-Right Bookmark/Rating pill from reference UI */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur border border-amber-900/10 p-1.5 px-2.5 rounded-xl shadow-md flex items-center gap-1 font-mono text-xs font-bold text-amber">
            <span>★</span>
            <span className="text-ink text-[11px]">4.9</span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-ink/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <span className="bg-amber text-white font-body text-xs font-bold px-5 py-2.5 rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              View Case Study →
            </span>
          </div>
        </div>

        {/* Category & Title */}
        <div className="space-y-1.5 px-1">
          <p className="font-mono text-[11px] text-crimson font-extrabold tracking-wider uppercase">
            {project.category}
          </p>
          <h3 className="font-display text-xl text-ink font-bold group-hover:text-crimson transition-colors duration-200 line-clamp-1">
            {project.title}
          </h3>
          <p className="font-body text-xs text-steel leading-relaxed line-clamp-2 mt-1">
            {project.description}
          </p>
        </div>
      </div>

      {/* Tools & Action Button */}
      <div className="mt-5 pt-3 border-t border-amber-900/5 flex items-center justify-between gap-2 px-1">
        <div className="flex flex-wrap gap-1.5">
          {project.tools.slice(0, 2).map((tool) => (
            <span
              key={tool}
              className="font-mono text-[11px] text-steel bg-[#F5F0E8] px-2.5 py-0.5 rounded-lg font-semibold"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 2 && (
            <span className="font-mono text-[11px] text-mist font-semibold self-center">
              +{project.tools.length - 2}
            </span>
          )}
        </div>

        {/* Small Golden Order/View Pill Button */}
        <span className="w-8 h-8 rounded-xl bg-amber/10 group-hover:bg-amber group-hover:text-white text-amber transition-all duration-300 flex items-center justify-center font-bold text-sm">
          →
        </span>
      </div>
    </article>
  )
}
