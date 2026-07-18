import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeader } from '@/components/SectionHeader';
import { Shield, Compass, Zap, Heart } from 'lucide-react';

// Unified copper treatment to match the site theme; multicolor stays in Isikulo only.
const accent = {
  text: 'text-copper-600',
  chip: 'bg-copper-600/10 group-hover:bg-copper-600/20',
  bar: 'from-copper-600 via-copper-400 to-copper-600',
  border: 'hover:border-copper-500/50',
  glow: 'hover:shadow-[0_0_45px_-10px_rgba(196,102,58,0.35)]',
  blob: 'bg-copper-500/10',
};

const principles = [
  {
    icon: Shield,
    title: 'Proof over promises',
    desc: 'Verified systems, not pitch decks. Every claim backed by evidence.',
  },
  {
    icon: Compass,
    title: 'Systems over shortcuts',
    desc: 'Structure that survives reality. Not demos that impress in a meeting.',
  },
  {
    icon: Zap,
    title: 'Build under pressure',
    desc: 'From COVID labs to recovery houses. Pressure is the proving ground.',
  },
  {
    icon: Heart,
    title: 'Purpose over ego',
    desc: 'Fatherhood, recovery, and service shaped the builder. Not the brand.',
  },
];

export function Founder() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="founder" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-warm-50/50 texture-grain" />
      <div className="relative z-10 section-padding" ref={ref}>
        <div className="content-max-width">
          <SectionHeader
            label="Founder"
            title="Twenty-five years of building."
            description="From electronics and automation to recovery systems, iMED, JB³Ai, and OS³. 
                         Built through collapse, rebuilt through discipline, and still climbing."
          />

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative p-8 rounded-2xl bg-white border border-ink-100/60 shadow-elevated overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${accent.border} ${accent.glow}`}
                >
                  {/* Animated flowing gradient border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accent.bar} bg-[length:200%_100%] animate-shimmer`} />
                  {/* Ambient corner glow on hover */}
                  <div className={`absolute -top-12 -right-12 w-36 h-36 rounded-full ${accent.blob} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`relative w-12 h-12 rounded-xl ${accent.chip} flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6`}>
                    <Icon className={`w-6 h-6 ${accent.text}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-ink-900 tracking-tight mb-2">{p.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="mt-16 rounded-2xl bg-gradient-to-br from-ink-900 to-ink-950 p-8 lg:p-12 text-white overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-copper-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-copper-800/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <blockquote className="text-xl lg:text-2xl font-light leading-relaxed text-white/90 max-w-3xl text-balance">
                "The knowledge gathered across addiction, recovery, electronics, engineering, laboratories, 
                compliance, leadership, fatherhood, and failure now converges in JB³Ai. The foundation is a 
                philosophy shaped by lived experience: people are often broken by complexity long before 
                the systems around them fail."
              </blockquote>
              <footer className="mt-6 text-sm text-white/50">
                - Jonathan Blackburn, from the GTR³ manuscript
              </footer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
