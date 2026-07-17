import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { apps, publicApps, gatedApps } from '@/data/apps';
import { Lock, ArrowUpRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

type FilterTab = 'all' | 'public' | 'gated' | 'featured';

const tabs: { key: FilterTab; label: string; count: number }[] = [
  { key: 'all', label: 'All Products', count: apps.length },
  { key: 'public', label: 'Public', count: publicApps.length },
  { key: 'gated', label: 'Portal Only', count: gatedApps.length },
  { key: 'featured', label: 'Featured', count: apps.filter(a => a.featured).length },
];

interface PortfolioProps {
  onOpenGate: (context?: 'investor' | 'client' | 'collaborator' | 'press') => void;
}

export function Portfolio({ onOpenGate }: PortfolioProps) {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const filtered = activeTab === 'all' ? apps
    : activeTab === 'public' ? publicApps
    : activeTab === 'gated' ? gatedApps
    : apps.filter(a => a.featured);

  return (
    <section id="products" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-white" />
      <div className="relative z-10 section-padding">
        <div className="content-max-width">
          <SectionHeader
            label="Product Architecture"
            title="A controlled public preview of the OS³ ecosystem."
            description="Eight working systems. Five public. Three gated. 
                         The platform layer before the deeper founder history and proof sections."
          />

          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  'relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300',
                  activeTab === tab.key ? 'text-white' : 'text-ink-500 hover:text-ink-700 hover:bg-warm-100'
                )}
              >
                {activeTab === tab.key && (
                  <motion.div className="absolute inset-0 bg-ink-900 rounded-xl" layoutId="portfolioTab" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab.label}
                  <span className={cn('text-xs px-1.5 py-0.5 rounded-md', activeTab === tab.key ? 'bg-white/20 text-white/80' : 'bg-warm-100 text-ink-400')}>
                    {tab.count}
                  </span>
                </span>
              </button>
            ))}
          </div>

          <div className="mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {filtered.map((app, i) => (
                  <motion.div
                    key={app.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className={cn(
                      'group relative rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
                      app.category === 'gated'
                        ? 'border-ink-200 bg-gradient-to-br from-ink-50 to-warm-50'
                        : 'border-ink-100 bg-white'
                    )}
                  >
                    <div className="relative aspect-[16/10] bg-gradient-to-br from-ink-100 to-warm-100 overflow-hidden">
                      <img 
                        src={app.thumbnail} 
                        alt={app.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                      {app.category === 'gated' && (
                        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-ink-900/80 text-white text-xs font-medium flex items-center gap-1.5">
                          <Lock className="w-3 h-3" />
                          Portal
                        </div>
                      )}
                      {app.status === 'live' && (
                        <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200">
                          Live
                        </div>
                      )}
                      {app.status === 'beta' && (
                        <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium border border-amber-200">
                          Beta
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {app.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="px-2 py-0.5 rounded-md bg-warm-100 text-ink-500 text-[11px] font-medium">{tag}</span>
                        ))}
                      </div>
                      <h3 className="text-lg font-semibold text-ink-900 tracking-tight mb-1">{app.title}</h3>
                      <p className="text-sm text-ink-500 leading-relaxed mb-4">{app.description}</p>
                      {app.metrics && (
                        <div className="flex gap-4 mb-4">
                          {app.metrics.map(m => (
                            <div key={m.label}>
                              <span className="block text-sm font-semibold text-ink-900">{m.value}</span>
                              <span className="text-[11px] text-ink-400">{m.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="flex gap-2">
                        {app.category === 'gated' ? (
                          <button
                            onClick={() => onOpenGate('client')}
                            className="inline-flex items-center text-sm font-medium text-copper-600 hover:text-copper-700 transition-colors"
                          >
                            <Lock className="w-4 h-4 mr-1.5" />
                            Access via Portal
                            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                          </button>
                        ) : (
                          <a href={app.externalLink || '#'} className="inline-flex items-center text-sm font-medium text-copper-600 hover:text-copper-700 transition-colors">
                            <ExternalLink className="w-4 h-4 mr-1.5" />
                            Open App
                            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
