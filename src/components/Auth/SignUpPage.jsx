import React, { useState } from 'react';
import { 
  ShoppingCart, Sparkles, CheckCircle2, AlertCircle, 
  ChevronLeft, Info
} from 'lucide-react';
import heroBg from '../../assets/thumbnail.jpg';
import { useAuth, formatAuthError } from '../../context/AuthContext';

export const SignUpPage = ({ onSignUpSuccess, onBackToLanding, onGoDashboard }) => {
  const { loginWithGoogle, isFirebaseConfigured } = useAuth();

  const [authError, setAuthError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleGoogleLogin = async () => {
    setAuthError('');
    setIsSubmitting(true);
    try {
      const user = await loginWithGoogle();
      setIsSuccess(true);
      setTimeout(() => {
        if (onSignUpSuccess) {
          onSignUpSuccess(user);
        } else {
          onGoDashboard();
        }
      }, 1200);
    } catch (err) {
      console.error("Google auth error:", err);
      setAuthError(formatAuthError(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between relative overflow-hidden font-sans">
      
      {/* Background Image with Light Clean Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-15 filter blur-xs scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/90 via-indigo-50/70 to-purple-50/80 backdrop-blur-xs" />
      </div>

      {/* Top Header */}
      <header className="relative z-10 px-6 py-5 max-w-7xl w-full mx-auto flex items-center justify-between">
        <button
          onClick={onBackToLanding}
          className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white/90 hover:bg-white border border-slate-200/80 px-4 py-2 rounded-xl backdrop-blur-md shadow-xs transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-indigo-600" />
          <span>Back to Landing</span>
        </button>

        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-xs">
            <ShoppingCart className="w-4 h-4" />
          </div>
          <span className="font-black text-lg tracking-tight text-slate-900">Query<span className="text-indigo-600">Cart</span></span>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-md w-full mx-auto px-4 py-8 my-auto">
        <div className="bg-white/90 border border-slate-200/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          
          {/* Secrets Config Banner when in demo mode */}
          {!isFirebaseConfigured && (
            <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 flex items-start gap-2.5 text-xs">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div className="leading-snug">
                <span className="font-bold">Firebase Notice:</span> Running with local test authentication. Add your Firebase keys to <code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-[11px] text-amber-950">.env</code> to enable production Google OAuth.
              </div>
            </div>
          )}

          {/* Card Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>QueryCart Account</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Sign in to QueryCart
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Access AI Q&A citations, side-by-side spec comparison, and saved products.
            </p>
          </div>

          {/* Auth Error Banner */}
          {authError && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-2 text-xs animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="font-semibold leading-relaxed">{authError}</div>
            </div>
          )}

          {/* Success Alert */}
          {isSuccess ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in zoom-in duration-300">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
              <h3 className="text-lg font-bold text-emerald-900">
                Authenticated successfully!
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                Redirecting you to the QueryCart intelligence dashboard...
              </p>
            </div>
          ) : (
            /* Google & Instant Guest Auth Action */
            <div className="space-y-3 pt-2">
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleGoogleLogin}
                className="w-full py-3.5 px-4 rounded-2xl bg-white hover:bg-slate-50 disabled:opacity-50 border border-slate-300/90 text-slate-800 font-bold text-xs flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:border-slate-400 active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-indigo-600/30 border-t-indigo-600 rounded-full animate-spin" />
                    <span>Connecting Google Account...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    <span className="text-sm tracking-tight text-slate-800">Continue with Google</span>
                  </>
                )}
              </button>

              <div className="text-center pt-2">
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                  By continuing, you agree to QueryCart's <a href="#terms" className="text-indigo-600 hover:underline">Terms of Service</a> and <a href="#privacy" className="text-indigo-600 hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-4 text-center text-xs text-slate-500">
        <p>© 2026 QueryCart. Firebase SSL Encrypted Authentication.</p>
      </footer>

    </div>
  );
};
