import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { osApps } from '@/data/osApps';
import { Search, Newspaper, Satellite, User, TrendingUp, Download, BookOpen, X, Maximize2, LogOut, Lock, Mail, ArrowRight } from 'lucide-react';

const iconMap: Record<string, any> = {
  Search, Newspaper, Satellite, User, TrendingUp, Download, BookOpen,
};

interface WindowState {
  id: string;
  title: string;
  content: string;
  pdfUrl?: string;
  category: string;
  isMaximized: boolean;
}

export default function OS() {
  const { auth, logout, requestOtp, verifyOtp } = useAuth();
  const nav = useNavigate();
  const [time, setTime] = useState(new Date());
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [showLogin, setShowLogin] = useState(!auth.isAuthenticated);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginName, setLoginName] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [otpCode, setOtpCode] = useState<string | null>(null);
  const [loginStep, setLoginStep] = useState<'form' | 'otp'>('form');
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!auth.isAuthenticated) {
      setShowLogin(true);
      setLoginStep('form');
      setOtpCode(null);
      setOtpInput('');
    }
  }, [auth.isAuthenticated]);

  const handleRequestOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail.trim() || !loginName.trim()) return;
    setLoginError('');
    const code = requestOtp(loginEmail.trim(), loginName.trim(), 'client', 'access');
    setOtpCode(code);
    setLoginStep('otp');
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpInput.length !== 6) {
      setLoginError('Enter the 6-digit code');
      return;
    }
    setLoginError('');
    const result = verifyOtp(loginEmail, otpInput);
    if (result.success) {
      setShowLogin(false);
    } else {
      setLoginError('Invalid or expired code');
    }
  };

  const openApp = (app: typeof osApps[0]) => {
    if (windows.find(w => w.id === app.id)) {
      setActiveWindow(app.id);
      return;
    }
    setWindows(prev => [...prev, {
      id: app.id,
      title: app.title,
      content: app.content || '',
      pdfUrl: app.pdfUrl,
      category: app.category,
      isMaximized: false,
    }]);
    setActiveWindow(app.id);
  };

  const closeWindow = (id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    if (activeWindow === id) setActiveWindow(null);
  };

  const toggleMaximize = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w));
  };

  if (showLogin) {
    return (
      <div className="min-h-screen bg-ink-950 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(196,102,58,0.08),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
        <motion.div
          className="relative w-full max-w-md rounded-2xl bg-ink-900/80 border border-white/10 backdrop-blur-xl p-8"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-xl bg-copper-600/20 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-7 h-7 text-copper-400" />
            </div>
            <h1 className="text-xl font-semibold text-white mb-1">OS³ Portal</h1>
            <p className="text-sm text-white/50">Private access to intelligence tools and founder assets.</p>
          </div>

          {loginStep === 'otp' && (
            <motion.form onSubmit={handleVerifyOtp} className="space-y-4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="text-center mb-2">
                <div className="w-10 h-10 rounded-lg bg-copper-600/20 flex items-center justify-center mx-auto mb-2">
                  <Mail className="w-5 h-5 text-copper-400" />
                </div>
                <p className="text-xs text-white/50">Enter the 6-digit code sent to <span className="text-white/70">{loginEmail}</span></p>
              </div>

              {otpCode && (
                <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-center">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-400 mb-0.5">Demo Mode — OTP</p>
                  <p className="text-xl font-mono font-bold text-amber-300 tracking-[0.3em]">{otpCode}</p>
                </div>
              )}

              <input
                type="text" inputMode="numeric" maxLength={6}
                value={otpInput} onChange={e => setOtpInput(e.target.value.replace(/\D/g, ''))}
                placeholder="000000"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white text-center tracking-[0.3em] font-mono placeholder-white/20 outline-none focus:border-copper-500/50 transition-all"
              />
              {loginError && <p className="text-xs text-red-400">{loginError}</p>}

              <button type="submit" className="w-full py-3 rounded-xl bg-copper-600 text-white text-sm font-medium hover:bg-copper-500 transition-colors flex items-center justify-center gap-2">
                Verify & Enter
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-white/30">
                <button type="button" onClick={() => { setLoginStep('form'); setOtpCode(null); setOtpInput(''); }} className="text-copper-400 hover:text-copper-300">Use different email</button>
              </p>
            </motion.form>
          )}

          {loginStep === 'form' && (
            <form onSubmit={handleRequestOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-1.5">Full Name</label>
                <input
                  type="text" required
                  value={loginName} onChange={e => setLoginName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-copper-500/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-white/60 uppercase tracking-wider mb-1.5">Email</label>
                <input
                  type="email" required
                  value={loginEmail} onChange={e => setLoginEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-copper-500/50 transition-all"
                />
              </div>
              {loginError && <p className="text-xs text-red-400">{loginError}</p>}
              <button type="submit" className="w-full py-3 rounded-xl bg-copper-600 text-white text-sm font-medium hover:bg-copper-500 transition-colors">
                Send Access Code
              </button>
            </form>
          )}

          <p className="text-center text-xs text-white/30 mt-4">
            Don't have access? <button onClick={() => nav('/')} className="text-copper-400 hover:text-copper-300">Request access</button>
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink-950 text-white relative overflow-hidden">
      {/* Desktop Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(196,102,58,0.06),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(196,102,58,0.04),transparent_40%)]" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }} />

      {/* Top Bar */}
      <div className="relative z-50 h-10 flex items-center justify-between px-4 bg-ink-900/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-md bg-copper-600 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">JB</span>
          </div>
          <span className="text-xs font-medium text-white/70">OS³</span>
        </div>
        <div className="text-xs text-white/50 font-mono">
          {time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-white/40 hidden sm:block">{auth.email || 'Guest'}</span>
          <button onClick={() => { logout(); nav('/'); }} className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-colors" title="Logout">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {osApps.map((app) => {
              const Icon = iconMap[app.icon] || Search;
              return (
                <motion.button
                  key={app.id}
                  onClick={() => openApp(app)}
                  className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-copper-600/20 to-copper-800/20 border border-copper-500/20 flex items-center justify-center group-hover:from-copper-600/30 group-hover:to-copper-800/30 transition-all">
                    <Icon className="w-7 h-7 text-copper-400" />
                  </div>
                  <div className="text-center">
                    <span className="block text-sm font-medium text-white/90">{app.title}</span>
                    <span className="block text-[10px] text-white/40 mt-0.5 capitalize">{app.category}</span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Windows */}
      <AnimatePresence>
        {windows.map((win) => (
          <motion.div
            key={win.id}
            className={`fixed z-[60] rounded-xl overflow-hidden shadow-2xl border border-white/10 ${
              win.isMaximized ? 'inset-4' : 'top-[15%] left-[15%] right-[15%] bottom-[15%]'
            } ${activeWindow === win.id ? 'z-[61]' : 'z-[60]'}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setActiveWindow(win.id)}
          >
            <div className="h-10 flex items-center justify-between px-4 bg-ink-800/90 backdrop-blur-xl border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-white/90">{win.title}</span>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => toggleMaximize(win.id)} className="p-1 rounded-md text-white/40 hover:text-white hover:bg-white/5 transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
                <button onClick={() => closeWindow(win.id)} className="p-1 rounded-md text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-colors">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            <div className="p-6 bg-ink-900/95 overflow-y-auto" style={{ height: 'calc(100% - 40px)' }}>
              <p className="text-sm text-white/70 leading-relaxed mb-6">{win.content}</p>
              {win.pdfUrl && (
                <a
                  href={win.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-copper-600/20 text-copper-400 text-sm font-medium hover:bg-copper-600/30 transition-colors border border-copper-500/20"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              )}
              {win.category === 'intelligence' && (
                <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Intelligence Module</p>
                  <p className="text-sm text-white/60">This tool requires additional verification. Contact hi@jb3ai.com for full deployment access.</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
