import { useState } from 'react';
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
import { useAuth } from '@/hooks/useAuth';
import { sendLeadEmail } from '@/lib/notify';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { requestOtp, verifyOtp, submitLead } = useAuth();
  const nav = useNavigate();
  const [gateOpen, setGateOpen] = useState(false);
  const [gateContext, setGateContext] = useState<'investor' | 'client' | 'collaborator' | 'press'>('client');
  const [, setPendingEmail] = useState('');
  const [otpCode, setOtpCode] = useState<string | null>(null);

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
      setTimeout(() => nav('/os'), 1200);
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
    </div>
  );
}
