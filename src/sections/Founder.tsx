import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeader } from '@/components/SectionHeader';
import { Shield, Compass, Zap, Heart } from 'lucide-react';

const principles = [
  {
    icon: Shield,
    title: 'Proof over promises',
    desc: 'Verified systems, not pitch decks. Every claim backed by evidence.',
    text: 'text-ndebele-teal',
    chip: 'bg-ndebele-teal/10 group-hover:bg-ndebele-teal/20',
    bar: 'from-ndebele-teal via-ndebele-gold to-ndebele-teal',
    border: 'hover:border-ndebele-teal/50',
    glow: 'hover:shadow-[0_0_45px_-10px_rgba(21,154,156,0.35)]',
    blob: 'bg-ndebele-teal/10',
  },
  {
    icon: Compass,
    title: 'Systems over shortcuts',
    desc: 'Structure that survives reality. Not demos that impress in a meeting.',
    text: 'text-ndebele-blue',
    chip: 'bg-ndebele-blue/10 group-hover:bg-ndebele-blue/20',
    bar: 'from-ndebele-blue via-ndebele-teal to-ndebele-blue',
    border: 'hover:border-ndebele-blue/50',
    glow: 'hover:shadow-[0_0_45px_-10px_rgba(43,94,167,0.35)]',
    blob: 'bg-ndebele-blue/10',
  },
  {
    icon: Zap,
    title: 'Build under pressure',
    desc: 'From COVID labs to recovery houses. Pressure is the proving ground.',
    text: 'text-ndebele-gold',
    chip: 'bg-ndebele-gold/15 group-hover:bg-ndebele-gold/25',
    bar: 'from-ndebele-gold via-ndebele-orange to-ndebele-gold',
    border: 'hover:border-ndebele-gold/60',
    glow: 'hover:shadow-[0_0_45px_-10px_rgba(245,179,1,0.4)]',
    blob: 'bg-ndebele-gold/15',
  },
  {
    icon: Heart,
    title: 'Purpose over ego',
    desc: 'Fatherhood, recovery, and service shaped the builder. Not the brand.',
    text: 'text-ndebele-red',
    chip: 'bg-ndebele-red/10 group-hover:bg-ndebele-red/20',
    bar: 'from-ndebele-red via-ndebele-gold to-ndebele-red',
    border: 'hover:border-ndebele-red/50',
    glow: 'hover:shadow-[0_0_45px_-10px_rgba(217,56,43,0.35)]',
    blob: 'bg-ndebele-red/10',
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
                  className={`group relative p-8 rounded-2xl bg-white border border-ink-100/60 shadow-elevated overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${p.border} ${p.glow}`}
                >
                  {/* Animated flowing gradient border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.bar} bg-[length:200%_100%] animate-shimmer`} />
                  {/* Ambient corner glow on hover */}
                  <div className={`absolute -top-12 -right-12 w-36 h-36 rounded-full ${p.blob} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`relative w-12 h-12 rounded-xl ${p.chip} flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6`}>
                    <Icon className={`w-6 h-6 ${p.text}`} />
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
