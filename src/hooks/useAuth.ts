import { useState, useCallback, useEffect } from 'react';
import type { AuthState } from '@/types';

const AUTH_KEY = 'jb_auth_state';
const OTP_KEY = 'jb_otp_pending';

function getInitialState(): AuthState {
  try {
    const stored = localStorage.getItem(AUTH_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return {
    isAuthenticated: false,
    hasAccess: false,
    phoneNumber: null,
    email: null,
    accessLevel: 'public',
  };
}

interface OtpPayload {
  email: string;
  name: string;
  intent: string;
  mode: string;
  code: string;
  expiresAt: number;
}

export function useAuth() {
  const [auth, setAuth] = useState<AuthState>(getInitialState);

  useEffect(() => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
  }, [auth]);

  const authenticate = useCallback((email: string, accessLevel: string) => {
    setAuth({
      isAuthenticated: true,
      hasAccess: true,
      phoneNumber: null,
      email,
      accessLevel: accessLevel as AuthState['accessLevel'],
    });
  }, []);

  const loginWithEmail = useCallback((email: string) => {
    setAuth({
      isAuthenticated: true,
      hasAccess: true,
      phoneNumber: null,
      email,
      accessLevel: 'client',
    });
  }, []);

  const logout = useCallback(() => {
    setAuth({
      isAuthenticated: false,
      hasAccess: false,
      phoneNumber: null,
      email: null,
      accessLevel: 'public',
    });
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(OTP_KEY);
  }, []);

  const requestOtp = useCallback((email: string, name: string, intent: string, mode: string): string => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const payload: OtpPayload = {
      email,
      name,
      intent,
      mode,
      code,
      expiresAt: Date.now() + 10 * 60 * 1000, // 10 min expiry
    };
    localStorage.setItem(OTP_KEY, JSON.stringify(payload));
    return code;
  }, []);

  const verifyOtp = useCallback((email: string, inputCode: string): { success: boolean; intent?: string; mode?: string } => {
    try {
      const stored = localStorage.getItem(OTP_KEY);
      if (!stored) return { success: false };
      const payload: OtpPayload = JSON.parse(stored);
      if (payload.email !== email) return { success: false };
      if (Date.now() > payload.expiresAt) return { success: false };
      if (payload.code !== inputCode) return { success: false };

      // Success — grant access
      const accessLevel = payload.mode === 'news' ? 'public' : (payload.intent as AuthState['accessLevel']);
      setAuth({
        isAuthenticated: true,
        hasAccess: payload.mode === 'access',
        phoneNumber: null,
        email: payload.email,
        accessLevel,
      });
      localStorage.removeItem(OTP_KEY);
      return { success: true, intent: payload.intent, mode: payload.mode };
    } catch {
      return { success: false };
    }
  }, []);

  return { auth, authenticate, loginWithEmail, logout, requestOtp, verifyOtp };
}
