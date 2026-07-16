import { motion } from 'framer-motion';
import { ArrowDown, Play, Lock } from 'lucide-react';

interface HeroProps {
  onOpenGate: () => void;
}

export function Hero({ onOpenGate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-warm-50 via-white to-copper-50/30" />
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <motion.div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-copper-200/20 to-transparent blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-warm-200/30 to-transparent blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />

      <div className="relative z-10 w-full section-padding pt-32 pb-20">
        <div className="content-max-width">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-100/80 border border-ink-200/50 mb-8"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-caption uppercase tracking-[0.12em] text-ink-600">
                  Founder. Systems Architect. Builder under pressure.
                </span>
              </motion.div>

              <motion.h1 className="text-display-xl text-ink-950 text-balance mb-6"
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                Jonathan
                <br />
                <span className="text-gradient">Blackburn</span>
              </motion.h1>

              <motion.p className="text-xl lg:text-2xl font-light text-ink-500 tracking-tight text-balance mb-4"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <em className="text-copper-600 font-normal">Chaos is not solved by hope.</em>
                <br />
                <span className="text-ink-700">Chaos is solved by systems.</span>
              </motion.p>

              <motion.p className="text-body-lg text-ink-400 max-w-lg text-balance mb-10"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}>
                South African entrepreneur and systems builder. Smart-home automation, recovery architectures, 
                diagnostics platforms, and practical AI — built to turn operational complexity into clarity.
              </motion.p>

              <motion.div className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}>
                <a href="#founder" className="btn-primary">View Founder Story</a>
                <a href="#products" className="btn-secondary">
                  <Play className="w-4 h-4 mr-2" />
                  Explore Products
                </a>
                <button onClick={onOpenGate} className="btn-accent">
                  <Lock className="w-4 h-4 mr-2" />
                  Request Access
                </button>
              </motion.div>
            </div>

            <motion.div className="relative"
              initial={{ opacity: 0, scale: 0.95, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}>
              <div className="relative max-w-md mx-auto lg:ml-auto">
                <div className="relative rounded-3xl bg-white/50 backdrop-blur-2xl border border-white/60 shadow-glass-lg overflow-hidden">
                  <div className="relative aspect-[4/5] bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-copper-400/30 to-copper-600/20 border-2 border-copper-400/20 flex items-center justify-center mx-auto mb-4">
                          <span className="text-5xl font-light text-copper-300/50">JB</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
                    <motion.div className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs text-white/80"
                      animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                      Systems Architect
                    </motion.div>
                    <motion.div className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-copper-600/80 backdrop-blur-md border border-copper-400/20 text-xs text-white"
                      animate={{ y: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
                      Available for Advisory
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <span className="text-caption uppercase tracking-[0.12em] text-copper-600 mb-2 block">Founder Profile</span>
                    <p className="text-sm text-ink-600 leading-relaxed">
                      Jonathan Blackburn is a South African entrepreneur and systems builder whose work spans 
                      smart-home automation, recovery service structures, diagnostics, laboratory systems, and JB³Ai.
                    </p>
                    <div className="mt-4 pt-4 border-t border-ink-100 flex items-center justify-between">
                      <div className="flex gap-4">
                        <div><span className="block text-lg font-semibold text-ink-900">15+</span><span className="text-xs text-ink-400">Years Building</span></div>
                        <div><span className="block text-lg font-semibold text-ink-900">6</span><span className="text-xs text-ink-400">Companies</span></div>
                        <div><span className="block text-lg font-semibold text-ink-900">4</span><span className="text-xs text-ink-400">Industries</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-copper-200/30 blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-warm-300/30 blur-2xl" />
              </div>
            </motion.div>
          </div>

          <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.6 }}>
            <motion.a href="#founder" className="flex flex-col items-center gap-2 text-ink-400 hover:text-ink-600 transition-colors"
              animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <span className="text-xs uppercase tracking-[0.15em]">Scroll</span>
              <ArrowDown className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
