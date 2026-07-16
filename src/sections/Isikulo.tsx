import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeader } from '@/components/SectionHeader';
import { supportTiers, supportLinks, sponsorActions } from '@/data/fundraising';
import { Zap, BookOpen, GraduationCap, Cpu, Heart, Globe, Coffee, ArrowUpRight } from 'lucide-react';

const iconMap: Record<string, any> = { Zap, BookOpen, GraduationCap, Cpu };

export function Isikulo() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="isikulo" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-copper-50/40 via-warm-50 to-white" />
      <div className="relative z-10 section-padding" ref={ref}>
        <div className="content-max-width">
          <SectionHeader
            label="Fundraising"
            title="The Proof Is Built. Now We Need Launch Fuel."
            description="Isikulo AI is free for South African learners. Your support keeps it that way. 
                         Five working products are at final-launch stage. Sponsor the final 5%."
          />

          {/* Isikulo Mission Card */}
          <motion.div
            className="mt-12 rounded-2xl bg-gradient-to-br from-ink-900 to-ink-950 p-8 lg:p-12 text-white overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-copper-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-copper-800/10 rounded-full blur-3xl" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30 mb-5">
                  <Heart className="w-3 h-3" />
                  Free for South African Learners
                </div>
                <h2 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight mb-4">
                  JB³ Isikulo AI
                </h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  A free AI-powered education platform built to support South African learners with schoolwork, 
                  revision, explanations, and practical learning support. 11 languages, text and speech, 
                  preloaded with the full free South African school curriculum.
                </p>
                <p className="text-white/50 text-sm">
                  The mission is simple: keep quality AI education support free for every learner in South Africa.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <span className="block text-2xl font-semibold text-white">11</span>
                  <span className="text-xs text-white/50">Languages Supported</span>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <span className="block text-2xl font-semibold text-white">R0</span>
                  <span className="text-xs text-white/50">Cost to Learners</span>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <span className="block text-2xl font-semibold text-white">SA</span>
                  <span className="text-xs text-white/50">Full Curriculum</span>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <span className="block text-2xl font-semibold text-white">95%</span>
                  <span className="text-xs text-white/50">Build Complete</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Support Tiers */}
          <div className="mt-16">
            <h3 className="text-display-md text-ink-900 text-balance mb-8 text-center">
              Sponsor the Final 5%
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {supportTiers.map((tier, i) => {
                const Icon = iconMap[tier.icon] || Zap;
                return (
                  <motion.a
                    key={tier.id}
                    href={tier.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 24 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                    className="group block p-6 rounded-2xl bg-white border border-ink-100 hover:border-copper-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-lg bg-copper-50 flex items-center justify-center mb-4 group-hover:bg-copper-100 transition-colors">
                      <Icon className="w-5 h-5 text-copper-600" />
                    </div>
                    <h4 className="text-base font-semibold text-ink-900 mb-1">{tier.label}</h4>
                    <p className="text-sm text-copper-600 font-medium mb-2">
                      R{tier.amountZAR.toLocaleString()} / ${tier.amountUSD}
                    </p>
                    <p className="text-sm text-ink-500 leading-relaxed">{tier.description}</p>
                    <div className="mt-4 flex items-center text-sm font-medium text-copper-600">
                      Contribute
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Support Links */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-white border border-ink-100 hover:border-copper-300 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-warm-100 flex items-center justify-center shrink-0">
                  {link.platform === 'buymeacoffee' ? <Coffee className="w-5 h-5 text-ink-600" /> :
                   link.platform === 'paypal' ? <Globe className="w-5 h-5 text-ink-600" /> :
                   <Heart className="w-5 h-5 text-ink-600" />}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-ink-900">{link.label}</h4>
                  <p className="text-xs text-ink-500 mt-0.5">{link.description}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Sponsor Action Grid */}
          <div className="mt-12">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-500 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {sponsorActions.map((action) => (
                <a
                  key={action.id}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-center p-4 rounded-xl bg-white border border-ink-100 hover:border-copper-300 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-copper-200 to-copper-300 flex items-center justify-center mb-2">
                    <span className="text-[10px] font-bold text-copper-800">{action.mark}</span>
                  </div>
                  <span className="text-xs font-medium text-ink-700">{action.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
