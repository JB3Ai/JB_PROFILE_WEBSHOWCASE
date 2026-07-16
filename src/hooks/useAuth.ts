import { useState, useCallback, useEffect } from 'react';
import type { AuthState } from '@/types';

const AUTH_KEY = 'jb_auth_state';

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

export function useAuth() {
  const [auth, setAuth] = useState<AuthState>(getInitialState);

  useEffect(() => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
  }, [auth]);

  const authenticate = useCallback((phoneNumber: string, accessLevel: string) => {
    setAuth({
      isAuthenticated: true,
      hasAccess: true,
      phoneNumber,
      email: null,
      accessLevel: accessLevel as any,
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
  }, []);

  return { auth, authenticate, loginWithEmail, logout };
}
