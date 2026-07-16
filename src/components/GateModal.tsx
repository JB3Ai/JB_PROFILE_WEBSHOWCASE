import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ArrowRight, X, Check } from 'lucide-react';

interface GateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { phoneNumber: string; intent: 'investor' | 'client' | 'collaborator' | 'press'; name: string; email: string }) => void;
  context: 'investor' | 'client' | 'collaborator' | 'press';
}

const contextConfig = {
  investor: { title: 'Investor Access', subtitle: 'Receive your private due diligence portal link.', cta: 'Request Investor Access' },
  client: { title: 'Advisory Access', subtitle: 'Receive your private access link via SMS.', cta: 'Request Access' },
  collaborator: { title: 'Collaboration Portal', subtitle: 'Partner access to JB³Ai systems and roadmap.', cta: 'Request Collaboration Access' },
  press: { title: 'Press Inquiries', subtitle: 'Media kit, founder briefs, and press assets.', cta: 'Request Press Kit' },
};

export function GateModal({ isOpen, onClose, onSubmit, context }: GateModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const config = contextConfig[context];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || phone.length < 8) return;
    onSubmit({ phoneNumber: phone, intent: context, name: name.trim(), email: email.trim() });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
      setEmail('');
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-ink-950/60 backdrop-blur-xl" onClick={onClose} />
          <motion.div
            className="relative w-full max-w-md rounded-2xl bg-white border border-ink-100 shadow-2xl overflow-hidden"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-copper-50 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-copper-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink-900">{config.title}</h3>
                    <p className="text-xs text-ink-500">{config.subtitle}</p>
                  </div>
                </div>
                <button onClick={onClose} className="p-1.5 rounded-lg text-ink-400 hover:text-ink-700 hover:bg-warm-100 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {submitted ? (
                <motion.div className="py-8 text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                  <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-ink-900 mb-1">Access Granted</h4>
                  <p className="text-sm text-ink-500">Redirecting to your private portal...</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-ink-500 mb-1.5">Full Name</label>
                    <input
                      type="text" required
                      value={name} onChange={e => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none focus:border-copper-400 focus:ring-2 focus:ring-copper-100 transition-all bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-ink-500 mb-1.5">Phone Number</label>
                    <input
                      type="tel" required
                      value={phone} onChange={e => setPhone(e.target.value)}
                      placeholder="+27 71 969 1849"
                      className="w-full rounded-xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none focus:border-copper-400 focus:ring-2 focus:ring-copper-100 transition-all bg-white"
                    />
                    <p className="text-[11px] text-ink-400 mt-1.5">Your access link will be sent via SMS</p>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-ink-500 mb-1.5">Email (optional)</label>
                    <input
                      type="email"
                      value={email} onChange={e => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-ink-200 px-4 py-3 text-sm text-ink-900 outline-none focus:border-copper-400 focus:ring-2 focus:ring-copper-100 transition-all bg-white"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center mt-2">
                    {config.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
