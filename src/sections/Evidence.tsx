import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SectionHeader } from '@/components/SectionHeader';
import { publicEvidence } from '@/data/evidence';
import { GlassCard } from '@/components/GlassCard';
import { FileText, Award, FileCheck, MessageSquare, Lock, X, Maximize2, Play } from 'lucide-react';

const IMAGE_RE = /\.(png|jpe?g|webp|gif)$/i;

const typeIcons: Record<string, any> = {
  publication: FileText,
  certificate: FileCheck,
  award: Award,
  recommendation: MessageSquare,
};

export function Evidence() {
  const { ref, isVisible } = useScrollReveal();
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [video, setVideo] = useState<string | null>(null);

  useEffect(() => {
    if (!lightbox && !video) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setLightbox(null); setVideo(null); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, video]);
  return (
    <section id="evidence" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-white texture-grain" />
      <div className="relative z-10 section-padding" ref={ref}>
        <div className="content-max-width">
          <SectionHeader
            label="Evidence"
            title="The Architecture of Proof"
            description="Verified documents, awards, certificates, recommendations, and historical proof layers. 
                         Not pitch-deck claims. Evidence that stands up."
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {publicEvidence.map((item, i) => {
              const Icon = typeIcons[item.type] || FileText;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <GlassCard className="p-6 h-full group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-copper-50 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-copper-600" />
                      </div>
                      {item.visibility === 'Investor Only' && (
                        <span className="px-2 py-0.5 rounded-full bg-ink-100 text-ink-500 text-[10px] font-medium flex items-center gap-1">
                          <Lock className="w-3 h-3" />
                          Private
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-semibold text-ink-900 tracking-tight mb-1">{item.title}</h4>
                    <p className="text-sm text-ink-500 leading-relaxed mb-3">{item.description}</p>
                    {item.value && (
                      <span className="inline-block px-2 py-0.5 rounded-md bg-copper-50 text-copper-700 text-xs font-medium mb-3">
                        {item.value}
                      </span>
                    )}
                    {item.fileUrl && (
                      IMAGE_RE.test(item.fileUrl) ? (
                        <button
                          onClick={() => setLightbox(item.fileUrl!)}
                          className="text-sm font-medium text-copper-600 hover:text-copper-700 transition-colors inline-flex items-center"
                        >
                          View Document
                          <Maximize2 className="w-3.5 h-3.5 ml-1" />
                        </button>
                      ) : (
                        <a
                          href={item.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-copper-600 hover:text-copper-700 transition-colors inline-flex items-center"
                        >
                          View Document
                          <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      )
                    )}
                    {item.videoUrl && (
                      <button
                        onClick={() => setVideo(item.videoUrl!)}
                        className="text-sm font-medium text-copper-600 hover:text-copper-700 transition-colors inline-flex items-center ml-4"
                      >
                        View Video
                        <Play className="w-3.5 h-3.5 ml-1" />
                      </button>
                    )}
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full"
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                aria-label="Close preview"
                className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-white shadow-lg border border-ink-100 flex items-center justify-center text-ink-500 hover:text-ink-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <img
                src={lightbox}
                alt="Evidence document preview"
                className="w-full max-h-[82vh] object-contain rounded-xl bg-white shadow-2xl border border-ink-100"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {video && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/85 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideo(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideo(null)}
                aria-label="Close video"
                className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-white shadow-lg border border-ink-100 flex items-center justify-center text-ink-500 hover:text-ink-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <video
                src={video}
                controls
                autoPlay
                className="w-full max-h-[82vh] rounded-xl bg-black shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
