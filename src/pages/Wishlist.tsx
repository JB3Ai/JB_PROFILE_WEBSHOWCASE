import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ArrowUpRight, Copy, Check,
  Zap, Bot, Server, Cpu, Cloud, Clock, Wrench, GraduationCap,
  HeartHandshake, CreditCard, Globe, Coffee,
} from 'lucide-react';
import { wishlistItems, wishlistPaymentMethods, type WishlistCategory } from '@/data/wishlist';

const iconMap: Record<string, any> = {
  Zap, Bot, Server, Cpu, Cloud, Clock, Wrench, GraduationCap,
  HeartHandshake, CreditCard, Globe, Coffee,
};

type FilterKey = 'all' | WishlistCategory;

const filters: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'ai', label: 'AI' },
  { key: 'hardware', label: 'Hardware' },
  { key: 'software', label: 'Software' },
];

const GOAL_ZAR = 164016;
const GOAL_USD = 9940;
const RAISED_ZAR = 15800;
const FUNDED_PCT = 9.6;

const categoryLabels: Record<WishlistCategory, string> = {
  ai: 'AI',
  hardware: 'Hardware',
  software: 'Software',
};

export default function Wishlist() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [showToast, setShowToast] = useState(false);

  const copyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      /* clipboard unavailable: toast still confirms the intent */
    }
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 2200);
  };

  const visible = activeFilter === 'all'
    ? wishlistItems
    : wishlistItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-warm-50 text-ink-900">
      {/* Top navigation */}
      <div className="section-padding pt-6">
        <div className="content-max-width">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-ink-500 hover:text-copper-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Main Site
          </Link>
        </div>
      </div>

      <div className="section-padding pb-24 pt-10">
        <div className="content-max-width max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-10"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-copper-600 font-medium mb-3">
              Fund the Mission
            </p>
            <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-ink-900 mb-4">
              Wishlist 2026
            </h1>
            <p className="text-base text-ink-500 leading-relaxed max-w-2xl mx-auto">
              The proof is built. Support goes directly into the final 5%: the server time,
              AI tokens, and development hours needed to bring the full OS³ ecosystem online.
            </p>
          </motion.div>

          {/* Progress tracker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border border-primary/20 bg-primary/5 p-6 mb-10"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
              <span className="text-sm font-medium text-ink-900">
                R{RAISED_ZAR.toLocaleString()} Raised
                <span className="text-ink-500 font-normal"> ({FUNDED_PCT}% Funded)</span>
              </span>
              <span className="text-sm text-ink-500">
                Goal: R{GOAL_ZAR.toLocaleString()} ZAR (~${GOAL_USD.toLocaleString()} USD)
              </span>
            </div>
            <div className="h-2 rounded-full bg-primary/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${FUNDED_PCT}%` }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={
                  activeFilter === f.key
                    ? 'px-4 py-2 rounded-lg text-sm font-medium border border-primary/50 bg-primary/10 text-primary transition-colors'
                    : 'px-4 py-2 rounded-lg text-sm font-medium border border-ink-200 bg-transparent text-ink-500 hover:border-primary/40 hover:text-primary transition-colors'
                }
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Wishlist grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
            >
              {visible.map((item) => {
                const Icon = iconMap[item.icon] || Zap;
                return (
                  <div
                    key={item.id}
                    className="rounded-xl border border-primary/20 bg-background p-6 transition-all hover:border-primary/50 hover:bg-primary/5 flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg border border-primary/20 bg-primary/5 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-ink-400 border border-ink-200 rounded-md px-1.5 py-0.5">
                        {categoryLabels[item.category]}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-ink-900 mb-1">{item.title}</h3>
                    {item.amountZAR && (
                      <p className="text-sm text-copper-600 font-medium mb-2">
                        R{item.amountZAR.toLocaleString()} / ${item.amountUSD}
                      </p>
                    )}
                    <p className="text-sm text-ink-500 leading-relaxed mb-5 flex-1">
                      {item.description}
                    </p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-primary/50 bg-transparent text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
                    >
                      Contribute
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Payment methods */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-500 mb-4 text-center">
              Global &amp; Local Support Channels
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {wishlistPaymentMethods.map((method) => {
                const Icon = iconMap[method.icon] || CreditCard;
                return (
                  <div
                    key={method.id}
                    className="flex items-center gap-4 p-5 rounded-xl border border-primary/20 bg-background transition-all hover:border-primary/50 hover:bg-primary/5"
                  >
                    <div className="w-10 h-10 rounded-lg border border-primary/20 bg-primary/5 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-ink-900">{method.label}</h3>
                      <p className="text-xs text-ink-500 mt-0.5 leading-relaxed">{method.description}</p>
                    </div>
                    <div className="flex flex-col gap-1.5 shrink-0">
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
                        title={`Open ${method.label}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => copyLink(method.href)}
                        className="p-2 rounded-lg border border-primary/50 text-primary hover:bg-primary/10 transition-colors"
                        title="Copy link"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Copy toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-ink-900 text-white text-sm shadow-xl"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            Link copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
