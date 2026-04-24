import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/services/firebase';
import { useNavigate, Navigate } from 'react-router-dom';
import { Anchor, AlertCircle } from 'lucide-react';
import { useAuthState } from '@/hooks/useAuthState';

export const Login = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();
  const { user, loading } = useAuthState();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-natural-text-muted">Loading...</div>;
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleGoogleLogin = async () => {
    setIsLoggingIn(true);
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/dashboard');
    } catch (err: any) {
      console.error("Login error: ", err);
      setError(err.message || "Failed to log in.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="py-20 px-4 max-w-lg mx-auto min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="w-full bg-white p-10 rounded-[40px] shadow-sm border border-natural-border/30">
        <SEO title="Partner Login - Gulf Shores Life" description="Login to manage leads." />
        
        <div className="flex flex-col items-center mb-10">
          <div className="w-12 h-12 bg-natural-accent rounded-full flex items-center justify-center mb-6">
            <div className="w-4 h-4 bg-natural-bg rounded-sm rotate-45"></div>
          </div>
          <h1 className="text-3xl font-serif text-natural-text-dark mb-2 text-center">Partner Login</h1>
          <p className="text-sm text-natural-text-sub font-light text-center">
            Sign in to manage your Gulf Shores Life leads.
          </p>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 text-red-800 p-4 rounded-2xl text-sm flex items-start gap-3">
            <AlertCircle className="shrink-0 w-5 h-5" />
            <p>{error}</p>
          </div>
        )}

        <button
          onClick={handleGoogleLogin}
          disabled={isLoggingIn}
          className="w-full bg-natural-text text-white px-8 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-natural-text-sub transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoggingIn ? "Signing in..." : "Continue with Google"}
        </button>
      </div>
    </div>
  );
};
