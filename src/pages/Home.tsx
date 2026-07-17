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
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { requestOtp, verifyOtp, submitLead } = useAuth();
  const nav = useNavigate();
  const [gateOpen, setGateOpen] = useState(false);
  const [gateContext, setGateContext] = useState<'investor' | 'client' | 'collaborator' | 'press'>('client');
  const [pendingEmail, setPendingEmail] = useState('');
  const [otpCode, setOtpCode] = useState<string | null>(null);

  const handleOpenGate = (context: 'investor' | 'client' | 'collaborator' | 'press' = 'client') => {
    setGateContext(context);
    setOtpCode(null);
    setPendingEmail('');
    setGateOpen(true);
  };

  const handleRequest = (data: { email: string; intent: 'investor' | 'client' | 'collaborator' | 'press'; name: string; mode: 'access' | 'news' }) => {
    const code = requestOtp(data.email, data.name, data.intent, data.mode);
    setPendingEmail(data.email);
    setOtpCode(code);
    // DEMO: In production, this code is sent via email API (Supabase/Resend).
    // For now, the modal displays it so the user can test the flow.
  };

  const handleVerify = (email: string, code: string) => {
    const result = verifyOtp(email, code);
    if (result.success && result.mode === 'access') {
      setTimeout(() => nav('/os'), 1200);
    }
    return result.success;
  };

  return (
    <div className="min-h-screen bg-warm-50">
      <Navbar onOpenGate={handleOpenGate} />
      <main>
        <Hero onOpenGate={() => handleOpenGate('client')} />
        <Founder />
        <Portfolio onOpenGate={handleOpenGate} />
        <Isikulo />
        <Evidence />
        <GTR3 />
        <Timeline />
        <Blog />
        <DailyShow />
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
