import { motion } from 'framer-motion'
import { resourceLibraryGroups } from '../../content/resourceLibrary.content'

export default function ResourceLibrarySection() {
  return (
    <section id="resource-library" className="public-section section-anchor">
      <div className="container-shell-wide">
        <motion.div
          className="rounded-[1.65rem] border p-5 md:p-7"
          style={{
            borderColor: 'rgba(173, 198, 220, 0.12)',
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.012)), linear-gradient(180deg, rgba(7,15,23,0.94), rgba(4,10,16,0.98))',
            boxShadow: '0 18px 42px rgba(1, 6, 12, 0.18)'
          }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="mb-7 max-w-3xl">
            <p className="public-kicker">Public PDFs</p>
            <h2 className="public-title">Resource Library</h2>
            <p className="public-intro mt-4">
              A public-safe reading shelf for Isikolo, JB³Ai systems, VoiceGrid, ViewGrid, and selected creative media concepts.
            </p>
            <p className="public-copy mt-3">
              Private investor material and sensitive operating documents remain excluded from this public library.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {resourceLibraryGroups.map((group) => (
              <article
                key={group.id}
                className="rounded-[1.25rem] border p-4 md:p-5"
                style={{
                  borderColor: 'rgba(173, 198, 220, 0.1)',
                  background: 'rgba(255, 255, 255, 0.028)'
                }}
              >
                <div className="mb-4">
                  <p className="public-meta-line">
                    <span>{group.items.length} PDF{group.items.length === 1 ? '' : 's'}</span>
                    <span>Public-safe</span>
                  </p>
                  <h3 className="selected-work-row-title">{group.title}</h3>
                  <p className="public-copy-sm mt-2">{group.summary}</p>
                </div>

                <div className="space-y-3">
                  {group.items.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group block rounded-[1rem] border px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/30"
                      style={{
                        borderColor: 'rgba(173, 198, 220, 0.1)',
                        background: 'rgba(255, 255, 255, 0.032)'
                      }}
                    >
                      <span className="flex items-start justify-between gap-4">
                        <span>
                          <span className="block text-sm font-semibold text-white">{item.title}</span>
                          <span className="mt-1 block text-xs leading-5 text-slate-400">{item.summary}</span>
                        </span>
                        <span className="shrink-0 rounded-full border border-emerald-300/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                          PDF
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
