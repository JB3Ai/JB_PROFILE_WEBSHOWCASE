import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { osApps } from '@/data/osApps';
import { 
  Search, Newspaper, Satellite, User, TrendingUp, Download, BookOpen, 
  X, Maximize2, Minimize2, LogOut, Lock, Mail, ArrowRight, 
  Phone, FileText, ExternalLink, Menu, ChevronRight
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Search, Newspaper, Satellite, User, TrendingUp, Download, BookOpen, FileText,
};

interface WindowState {
  id: string;
  title: string;
  content: string;
  pdfUrl?: string;
  category: string;
  isMaximized: boolean;
  isMinimized: boolean;
  zIndex: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface DesktopIcon {
  id: string;
  appId: string;
  label: string;
  x: number;
  y: number;
}

const desktopIcons: DesktopIcon[] = [
  { id: 'desk-1', appId: 'investigator-ai', label: 'InvestigatorAi', x: 20, y: 20 },
  { id: 'desk-2', appId: 'newsroom-ai', label: 'NewsroomAi', x: 20, y: 110 },
  { id: 'desk-3', appId: 'viewgrid', label: 'ViewGrid', x: 20, y: 200 },
  { id: 'desk-4', appId: 'cv-profile', label: 'CV Profile', x: 20, y: 290 },
  { id: 'desk-5', appId: 'investment-deck', label: 'Investment', x: 20, y: 380 },
  { id: 'desk-6', appId: 'gtr3-sneak-peek', label: 'GTR³ Book', x: 20, y: 470 },
  { id: 'desk-7', appId: 'downloads', label: 'Downloads', x: 20, y: 560 },
];

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
  const [zIndexCounter, setZIndexCounter] = useState(100);
  const [showDock, setShowDock] = useState(true);

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

  const openApp = useCallback((appId: string) => {
    const existing = windows.find(w => w.id === appId && !w.isMinimized);
    if (existing) {
      bringToFront(appId);
      return;
    }
    const app = osApps.find(a => a.id === appId);
    if (!app) return;
    
    const offset = windows.length * 30;
    const newWindow: WindowState = {
      id: appId,
      title: app.title,
      content: app.content || '',
      pdfUrl: app.pdfUrl,
      category: app.category,
      isMaximized: false,
      isMinimized: false,
      zIndex: zIndexCounter + 1,
      x: 60 + offset,
      y: 40 + offset,
      width: 640,
      height: 480,
    };
    setWindows(prev => [...prev, newWindow]);
    setActiveWindow(appId);
    setZIndexCounter(prev => prev + 1);
  }, [windows, zIndexCounter]);

  const closeWindow = (id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
    if (activeWindow === id) setActiveWindow(null);
  };

  const minimizeWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true } : w));
    if (activeWindow === id) setActiveWindow(null);
  };

  const restoreWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: false } : w));
    bringToFront(id);
  };

  const maximizeWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w));
    bringToFront(id);
  };

  const bringToFront = (id: string) => {
    setZIndexCounter(prev => prev + 1);
    setWindows(prev => prev.map(w => w.id === id ? { ...w, zIndex: zIndexCounter + 1 } : w));
    setActiveWindow(id);
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
    <div className="min-h-screen bg-ink-950 text-white relative overflow-hidden select-none">
      {/* Desktop Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/images/artwork-curated/os3-dash-command-dashboard.jpg')` }}
      />
      <div className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(196,102,58,0.06),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(196,102,58,0.04),transparent_40%)]" />

      {/* Top Bar */}
      <div className="relative z-50 h-10 flex items-center justify-between px-4 bg-ink-900/60 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-md bg-copper-600 flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">JB</span>
          </div>
          <span className="text-xs font-medium text-white/70">OS³</span>
          <div className="hidden sm:flex items-center gap-2 ml-4">
            <button onClick={() => setShowDock(!showDock)} className="p-1 rounded-md text-white/40 hover:text-white hover:bg-white/5 transition-colors">
              <Menu className="w-3.5 h-3.5" />
            </button>
          </div>
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

      {/* Desktop Icons */}
      <div className="relative z-10 p-6 h-[calc(100vh-40px-48px)]">
        <div className="relative w-full h-full">
          {desktopIcons.map((icon) => {
            const app = osApps.find(a => a.id === icon.appId);
            const Icon = iconMap[app?.icon || ''] || FileText;
            return (
              <motion.button
                key={icon.id}
                className="absolute flex flex-col items-center gap-2 w-20 group"
                style={{ left: icon.x, top: icon.y }}
                onClick={() => openApp(icon.appId)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors shadow-lg">
                  <Icon className="w-7 h-7 text-copper-400" />
                </div>
                <span className="text-[11px] text-white/80 font-medium text-center leading-tight drop-shadow-lg px-1 py-0.5 rounded bg-black/20 backdrop-blur-sm">
                  {icon.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Windows */}
      <AnimatePresence>
        {windows.filter(w => !w.isMinimized).map((win) => (
          <motion.div
            key={win.id}
            drag
            dragMomentum={false}
            onDragStart={() => bringToFront(win.id)}
            onClick={() => bringToFront(win.id)}
            className={`fixed z-[60] rounded-xl overflow-hidden shadow-2xl border border-white/10 ${
              win.isMaximized ? 'inset-4' : ''
            } ${activeWindow === win.id ? 'ring-1 ring-copper-500/30' : ''}`}
            style={{
              zIndex: win.zIndex,
              ...(win.isMaximized ? {} : { left: win.x, top: win.y, width: win.width, height: win.height }),
            }}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Window Title Bar */}
            <div className="h-10 flex items-center justify-between px-4 bg-ink-800/90 backdrop-blur-xl border-b border-white/5 cursor-move">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-white/90">{win.title}</span>
                {win.category === 'intelligence' && (
                  <span className="px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px] font-medium">INTEL</span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => minimizeWindow(win.id)} className="p-1 rounded-md text-white/40 hover:text-white hover:bg-white/5 transition-colors">
                  <Minimize2 className="w-3.5 h-3.5" />
                </button>
                <button onClick={() => maximizeWindow(win.id)} className="p-1 rounded-md text-white/40 hover:text-white hover:bg-white/5 transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
                <button onClick={() => closeWindow(win.id)} className="p-1 rounded-md text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-colors">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Window Content */}
            <div className="p-6 bg-ink-900/95 overflow-y-auto" style={{ height: win.isMaximized ? 'calc(100% - 40px)' : `${win.height - 40}px` }}>
              <p className="text-sm text-white/70 leading-relaxed mb-6 whitespace-pre-line">{win.content}</p>
              
              {win.pdfUrl && (
                <div className="space-y-3">
                  <a
                    href={win.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-copper-600/20 text-copper-400 text-sm font-medium hover:bg-copper-600/30 transition-colors border border-copper-500/20"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                  <div className="mt-3 rounded-lg bg-ink-800/50 border border-white/5 overflow-hidden">
                    <iframe 
                      src={win.pdfUrl} 
                      className="w-full h-80 bg-white"
                      title={win.title}
                    />
                  </div>
                </div>
              )}

              {/* Contact info for profile */}
              {win.id === 'cv-profile' && (
                <div className="mt-6 space-y-3">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-sm font-semibold text-white mb-3">Contact Details</h4>
                    <div className="space-y-2">
                      <a href="mailto:hi@jb3ai.com" className="flex items-center gap-2 text-sm text-copper-400 hover:text-copper-300">
                        <Mail className="w-4 h-4" /> hi@jb3ai.com
                      </a>
                      <a href="mailto:jono@jb3ai.com" className="flex items-center gap-2 text-sm text-copper-400 hover:text-copper-300">
                        <Mail className="w-4 h-4" /> jono@jb3ai.com
                      </a>
                      <a href="https://wa.me/27719691848" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-copper-400 hover:text-copper-300">
                        <Phone className="w-4 h-4" /> WhatsApp
                      </a>
                      <a href="https://www.linkedin.com/in/jonathanblackburn0793120688/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-copper-400 hover:text-copper-300">
                        <ExternalLink className="w-4 h-4" /> LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Investment-specific */}
              {win.id === 'investment-deck' && (
                <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-sm text-white/60 mb-3">
                    For direct investment inquiries and due diligence discussions, please contact:
                  </p>
                  <a href="mailto:jono@jb3ai.com" className="inline-flex items-center gap-2 text-sm text-copper-400 hover:text-copper-300">
                    <Mail className="w-4 h-4" /> jono@jb3ai.com
                  </a>
                </div>
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

      {/* Dock */}
      <AnimatePresence>
        {showDock && (
          <motion.div
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[150] flex items-center gap-2 px-3 py-2 rounded-2xl bg-ink-900/70 backdrop-blur-xl border border-white/10 shadow-2xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {osApps.map((app) => {
              const Icon = iconMap[app.icon] || FileText;
              const isOpen = windows.some(w => w.id === app.id && !w.isMinimized);
              const isMinimized = windows.some(w => w.id === app.id && w.isMinimized);
              return (
                <button
                  key={app.id}
                  onClick={() => {
                    if (isMinimized) restoreWindow(app.id);
                    else if (isOpen) bringToFront(app.id);
                    else openApp(app.id);
                  }}
                  className="group relative flex flex-col items-center"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                    isOpen ? 'bg-white/15' : 'bg-white/5 hover:bg-white/10'
                  }`}>
                    <Icon className={`w-6 h-6 ${isOpen ? 'text-copper-400' : 'text-white/70'}`} />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 px-2 py-1 rounded-md bg-ink-800 text-white text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {app.title}
                  </div>
                  {/* Active dot */}
                  {(isOpen || isMinimized) && (
                    <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-copper-400" />
                  )}
                </button>
              );
            })}
            <div className="w-px h-8 bg-white/10 mx-1" />
            <button
              onClick={() => { logout(); nav('/'); }}
              className="group relative flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 hover:bg-white/10 transition-all">
                <LogOut className="w-6 h-6 text-white/70" />
              </div>
              <div className="absolute bottom-full mb-2 px-2 py-1 rounded-md bg-ink-800 text-white text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Logout
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimized Windows Bar */}
      {windows.some(w => w.isMinimized) && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[140] flex items-center gap-2">
          {windows.filter(w => w.isMinimized).map(win => {
            const app = osApps.find(a => a.id === win.id);
            const Icon = iconMap[app?.icon || ''] || FileText;
            return (
              <button
                key={win.id}
                onClick={() => restoreWindow(win.id)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-ink-800/80 backdrop-blur-md border border-white/10 text-xs text-white/70 hover:text-white hover:bg-ink-700/80 transition-colors"
              >
                <Icon className="w-4 h-4 text-copper-400" />
                {win.title}
                <ChevronRight className="w-3 h-3" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
