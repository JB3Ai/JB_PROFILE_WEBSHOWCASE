import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowUpRight, Mail, MapPin, Coffee, Globe, Heart } from 'lucide-react';

interface FooterProps {
  onOpenGate: (context: 'investor' | 'client' | 'collaborator' | 'press') => void;
}

export function Footer({ onOpenGate }: FooterProps) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <footer id="connect" className="relative pt-24 lg:pt-32 pb-8">
      <div className="absolute inset-0 bg-gradient-to-b from-warm-50/50 to-ink-950" />
      <div className="relative z-10 section-padding" ref={ref}>
        <div className="content-max-width">
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-ink-900 to-ink-950 overflow-hidden p-10 lg:p-16">
              <div className="absolute top-0 right-0 w-96 h-96 bg-copper-600/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-copper-800/10 rounded-full blur-3xl" />
              <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-display-md text-white text-balance mb-4">
                    High-value availability.
                    <br />
                    <span className="text-copper-400">Not desperation.</span>
                  </h2>
                  <p className="text-white/60 text-lg leading-relaxed max-w-md text-balance">
                    Selectively advising founders and leadership teams who are building 
                    systems under pressure. Limited engagements, maximum impact.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                  <button onClick={() => onOpenGate('client')} className="btn-accent">
                    Request Advisory Access
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </button>
                  <a href="mailto:hi@jb3ai.com" className="btn-secondary">
                    <Mail className="w-4 h-4 mr-2" />
                    Direct Email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            <div className="lg:col-span-2">
              <Link to="/" className="inline-flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-copper-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">JB</span>
                </div>
                <span className="text-sm font-semibold text-white tracking-tight">Jonathan Blackburn</span>
              </Link>
              <p className="text-sm text-white/50 leading-relaxed max-w-sm mb-5">
                South African entrepreneur and systems builder. 
                Turning operational complexity into structure, clarity, and practical AI for good.
              </p>
              <div className="flex items-center gap-2 text-sm text-white/40">
                <MapPin className="w-4 h-4" />
                <span>South Africa · Global</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-white/60 uppercase tracking-[0.1em] mb-4">Products</h4>
              <ul className="space-y-2.5">
                <li><a href="#products" className="text-sm text-white/40 hover:text-white transition-colors">DukeBox of London</a></li>
                <li><a href="#products" className="text-sm text-white/40 hover:text-white transition-colors">Isikulo AI</a></li>
                <li><a href="#products" className="text-sm text-white/40 hover:text-white transition-colors">ClipboardAI</a></li>
                <li><a href="#products" className="text-sm text-white/40 hover:text-white transition-colors">VoiceGrid AI</a></li>
                <li><a href="#products" className="text-sm text-white/40 hover:text-white transition-colors">SuperAgents</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-white/60 uppercase tracking-[0.1em] mb-4">Content</h4>
              <ul className="space-y-2.5">
                <li><a href="#founder" className="text-sm text-white/40 hover:text-white transition-colors">Founder Story</a></li>
                <li><a href="#gtr3" className="text-sm text-white/40 hover:text-white transition-colors">GTR³ Book</a></li>
                <li><a href="#evidence" className="text-sm text-white/40 hover:text-white transition-colors">Evidence</a></li>
                <li><a href="#timeline" className="text-sm text-white/40 hover:text-white transition-colors">Timeline</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-white/60 uppercase tracking-[0.1em] mb-4">Support</h4>
              <ul className="space-y-2.5">
                <li><a href="https://www.buymeacoffee.com/jonoblackburn" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-1.5"><Coffee className="w-3 h-3" /> Buy Me a Coffee</a></li>
                <li><a href="https://paybru.co.za/communities/jonoblackburn-become-a-founding-sponsor" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-1.5"><Heart className="w-3 h-3" /> PayBru (SA)</a></li>
                <li><a href="https://paypal.me/jonoblackburnza" target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-1.5"><Globe className="w-3 h-3" /> PayPal</a></li>
                <li><button onClick={() => onOpenGate('investor')} className="text-sm text-white/40 hover:text-white transition-colors">Investor Room</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Jonathan Blackburn. JB³Ai. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:hi@jb3ai.com" className="text-white/30 hover:text-white transition-colors"><Mail className="w-4 h-4" /></a>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link to="/os" className="inline-flex items-center gap-2 text-xs text-white/20 hover:text-copper-400 transition-colors duration-300">
              <ArrowUpRight className="w-3 h-3" />
              Private OS³ Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
