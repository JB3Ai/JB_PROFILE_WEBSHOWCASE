import { useState } from 'react';
import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { Founder } from '@/sections/Founder';
import { Portfolio } from '@/sections/Portfolio';
import { Isikulo } from '@/sections/Isikulo';
import { Evidence } from '@/sections/Evidence';
import { GTR3 } from '@/sections/GTR3';
import { Timeline } from '@/sections/Timeline';
import { Footer } from '@/sections/Footer';
import { GateModal } from '@/components/GateModal';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { authenticate } = useAuth();
  const nav = useNavigate();
  const [gateOpen, setGateOpen] = useState(false);
  const [gateContext, setGateContext] = useState<'investor' | 'client' | 'collaborator' | 'press'>('client');

  const handleOpenGate = (context: 'investor' | 'client' | 'collaborator' | 'press' = 'client') => {
    setGateContext(context);
    setGateOpen(true);
  };

  const handleGateSubmit = (data: { phoneNumber: string; intent: 'investor' | 'client' | 'collaborator' | 'press'; name: string; email: string }) => {
    authenticate(data.phoneNumber, data.intent);
    setTimeout(() => nav('/os'), 1200);
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
      </main>
      <Footer onOpenGate={handleOpenGate} />
      <GateModal
        isOpen={gateOpen}
        onClose={() => setGateOpen(false)}
        onSubmit={handleGateSubmit}
        context={gateContext}
      />
    </div>
  );
}
