import React from 'react'
import { motion } from 'framer-motion'

const supportPlatforms = [
  { id: 'paybru', label: 'PayBru', mark: 'PB' },
  { id: 'buy-me-a-coffee', label: 'Buy Me a Coffee', mark: 'BMC' },
  { id: 'paypal', label: 'PayPal', mark: 'PP' },
  { id: 'ko-fi', label: 'Ko-fi', mark: 'KF' },
  { id: 'stripe', label: 'Stripe', mark: 'ST' }
]

export default function SupportWorkStrip() {
  const preventPlaceholderNavigation = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
  }

  return (
    <section id="support-the-work" className="public-section section-anchor">
      <div className="container-shell-wide">
        <motion.div
          className="rounded-[1.65rem] border p-5 md:p-7"
          style={{
            borderColor: 'rgba(173, 198, 220, 0.12)',
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.012)), linear-gradient(180deg, rgba(9,17,26,0.94), rgba(5,11,17,0.98))',
            boxShadow: '0 18px 42px rgba(1, 6, 12, 0.18)'
          }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,1fr)] lg:items-center">
            <div>
              <p className="public-kicker">Support</p>
              <h2 className="public-title">Support the Work</h2>
              <p className="public-intro">
                Payment and membership links are being prepared. These options will support independent
                software, writing, and open-source development work.
              </p>
              <p className="mt-4 text-xs leading-6" style={{ color: 'rgba(148, 168, 186, 0.82)' }}>
                Support payments are not charitable donations and are not tax-deductible.
              </p>
              <p className="mt-3 text-xs leading-6" style={{ color: 'rgba(233, 201, 143, 0.86)' }}>
                Supporter reward: qualifying supporters will be eligible for a limited-edition GTR³ book
                copy when released.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {supportPlatforms.map((platform) => (
                <a
                  key={platform.id}
                  href="#"
                  onClick={preventPlaceholderNavigation}
                  className="group rounded-[1.15rem] border px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/30"
                  style={{
                    borderColor: 'rgba(173, 198, 220, 0.12)',
                    background: 'rgba(255, 255, 255, 0.035)'
                  }}
                  aria-label={`${platform.label} placeholder support link`}
                >
                  <span
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-full text-[11px] font-semibold tracking-[0.16em]"
                    style={{
                      color: '#071018',
                      background: 'linear-gradient(135deg, rgba(233,201,143,0.94), rgba(116,211,164,0.86))'
                    }}
                    aria-hidden="true"
                  >
                    {platform.mark}
                  </span>
                  <span className="block text-sm font-semibold text-white">{platform.label}</span>
                  <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    Coming soon
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
