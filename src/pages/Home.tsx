import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { Founder } from '@/sections/Founder';
import { Portfolio } from '@/sections/Portfolio';
import { Isikulo } from '@/sections/Isikulo';
import { Evidence } from '@/sections/Evidence';
import { GTR3 } from '@/sections/GTR3';
import { Timeline } from '@/sections/Timeline';
import { Blog } from '@/sections/Blog';
import { DailyShow } from '@/sections/DailyShow';
import { Footer } from '@/sections/Footer';
import { GateModal } from '@/components/GateModal';
import BootSequence, { BOOT_SESSION_KEY } from '@/components/boot/BootSequence';
import OSAuthSequence from '@/components/boot/OSAuthSequence';
import { useAuth } from '@/hooks/useAuth';
import { usePageMeta } from '@/hooks/usePageMeta';
import { sendLeadEmail } from '@/lib/notify';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  usePageMeta({
    title: 'Jonathan Blackburn OS | Founder Blueprint & Command OS',
    description: 'Official site of Jonathan Blackburn. Explore JB³Ai products, systems architecture insights, recovery frameworks, and entrepreneurial ventures built under pressure.',
    canonical: '/',
  });
  const { requestOtp, verifyOtp, submitLead } = useAuth();
  const nav = useNavigate();
  const [gateOpen, setGateOpen] = useState(false);
  const [gateContext, setGateContext] = useState<'investor' | 'client' | 'collaborator' | 'press'>('client');
  const [pendingEmail, setPendingEmail] = useState('');
  const [otpCode, setOtpCode] = useState<string | null>(null);
  // Cinematic boot: shown once per browser session before the homepage reveals
  const [booted, setBooted] = useState(() => {
    try { return sessionStorage.getItem(BOOT_SESSION_KEY) === '1'; } catch { return false; }
  });
  // Secure OS entry handshake: plays after OTP success, before routing to /os
  const [authing, setAuthing] = useState(false);

  const completeBoot = () => {
    try { sessionStorage.setItem(BOOT_SESSION_KEY, '1'); } catch {}
    setBooted(true);
  };

  const handleOpenGate = (context: 'investor' | 'client' | 'collaborator' | 'press' = 'client') => {
    setGateContext(context);
    setOtpCode(null);
    setPendingEmail('');
    setGateOpen(true);
  };

  const handleRequest = (data: { email: string; intent: 'investor' | 'client' | 'collaborator' | 'press'; name: string; mode: 'access' | 'news'; newsletter: boolean }) => {
    const code = requestOtp(data.email, data.name, data.intent, data.mode);
    setPendingEmail(data.email);
    // Show the code on screen as a fallback until the email is confirmed sent
    setOtpCode(code);
    // Email the code to the visitor and the lead notification to the owner.
    // On success, hide the on-screen fallback so the code only lives in the inbox.
    sendLeadEmail({
      name: data.name,
      email: data.email,
      intent: data.intent,
      mode: data.mode,
      newsletter: data.newsletter,
      code,
    }).then((sent) => {
      if (sent) setOtpCode(null);
    });
  };

  const handleVerify = (email: string, code: string) => {
    const result = verifyOtp(email, code);
    if (result.success && result.mode === 'access') {
      // Play the secure-entry handshake, then route into the private OS
      setPendingEmail(email);
      setAuthing(true);
    }
    return result.success;
  };

  return (
    <div className="min-h-screen bg-warm-50 texture-grain">
      <Navbar onOpenGate={handleOpenGate} />
      <main>
        <Hero onOpenGate={() => handleOpenGate('client')} />
        <Founder />
        <Portfolio onOpenGate={handleOpenGate} />
        <Isikulo />
        <Evidence />
        <GTR3 />
        <DailyShow />
        <Timeline />
        <Blog />
      </main>
      <Footer onOpenGate={handleOpenGate} />
      <GateModal
        isOpen={gateOpen}
        onClose={() => { setGateOpen(false); setOtpCode(null); setPendingEmail(''); }}
        onRequest={handleRequest}
        onVerify={handleVerify}
        onSubmitLead={submitLead}
        otpCode={otpCode}
        context={gateContext}
      />

      {/* Public landing boot: brand introduction, once per session */}
      <AnimatePresence>
        {!booted && <BootSequence onComplete={completeBoot} />}
      </AnimatePresence>

      {/* Private OS entry: secure handshake after OTP success */}
      <AnimatePresence>
        {authing && (
          <OSAuthSequence
            userEmail={pendingEmail || 'Guest'}
            onComplete={() => nav('/os')}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
