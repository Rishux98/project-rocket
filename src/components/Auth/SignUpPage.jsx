import React, { useState } from 'react';
import { 
  ShoppingCart, Sparkles, Mail, Lock, User, Eye, EyeOff, 
  ArrowRight, CheckCircle2, ShieldCheck, 
  X, ChevronLeft 
} from 'lucide-react';
import heroBg from '../../assets/thumbnail.jpg';

export const SignUpPage = ({ onSignUpSuccess, onNavigateToLogin, onBackToLanding, onGoDashboard }) => {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: true
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!isLoginMode && !formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email address is required';
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!isLoginMode && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!isLoginMode && !formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the Terms of Service';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate auth latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const user = {
        name: isLoginMode ? formData.email.split('@')[0] : formData.fullName,
        email: formData.email
      };
      
      setTimeout(() => {
        if (onSignUpSuccess) {
          onSignUpSuccess(user);
        } else {
          onGoDashboard();
        }
      }, 1200);
    }, 900);
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

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/20">
            <ShoppingCart className="w-4 h-4" />
          </div>
          <span className="font-extrabold text-lg tracking-tight text-slate-900">QueryCart</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-md w-full mx-auto px-4 py-8 my-auto">
        <div className="bg-white/90 border border-slate-200/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          
          {/* Card Title & Mode Selector */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isLoginMode ? 'Welcome Back' : 'Get Started Free'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {isLoginMode ? 'Sign in to QueryCart' : 'Create your account'}
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              {isLoginMode 
                ? 'Access AI Q&A citations, spec comparison, and saved products.' 
                : 'Join thousands of shoppers making smarter buying decisions with AI.'}
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex p-1 bg-slate-100 border border-slate-200 rounded-xl">
            <button
              type="button"
              onClick={() => { setIsLoginMode(false); setErrors({}); }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                !isLoginMode 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => { setIsLoginMode(true); setErrors({}); }}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                isLoginMode 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Log In
            </button>
          </div>

          {/* Success Celebration Alert */}
          {isSuccess ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in zoom-in duration-300">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
              <h3 className="text-lg font-bold text-emerald-900">
                {isLoginMode ? 'Logged in successfully!' : 'Account created successfully!'}
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                Redirecting you to the QueryCart intelligence dashboard...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name field (Sign Up mode only) */}
              {!isLoginMode && (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                    <span>Full Name</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 focus:bg-white border ${
                        errors.fullName ? 'border-rose-500 focus:ring-rose-500/20' : 'border-slate-300 focus:border-indigo-600'
                      } text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all`}
                    />
                  </div>
                  {errors.fullName && <p className="text-[11px] text-rose-600 font-semibold">{errors.fullName}</p>}
                </div>
              )}

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 focus:bg-white border ${
                      errors.email ? 'border-rose-500 focus:ring-rose-500/20' : 'border-slate-300 focus:border-indigo-600'
                    } text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all`}
                  />
                </div>
                {errors.email && <p className="text-[11px] text-rose-600 font-semibold">{errors.email}</p>}
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className={`w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-50 focus:bg-white border ${
                      errors.password ? 'border-rose-500 focus:ring-rose-500/20' : 'border-slate-300 focus:border-indigo-600'
                    } text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-[11px] text-rose-600 font-semibold">{errors.password}</p>}
              </div>

              {/* Confirm Password (Sign Up mode only) */}
              {!isLoginMode && (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Confirm Password</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 focus:bg-white border ${
                        errors.confirmPassword ? 'border-rose-500 focus:ring-rose-500/20' : 'border-slate-300 focus:border-indigo-600'
                      } text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all`}
                    />
                  </div>
                  {errors.confirmPassword && <p className="text-[11px] text-rose-600 font-semibold">{errors.confirmPassword}</p>}
                </div>
              )}

              {/* Terms Checkbox (Sign Up mode only) */}
              {!isLoginMode && (
                <div className="space-y-1 pt-1">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="mt-0.5 rounded border-slate-300 bg-slate-50 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-[11px] text-slate-600 leading-snug">
                      I agree to the <a href="#terms" className="text-indigo-600 hover:underline font-semibold">Terms of Service</a> & <a href="#privacy" className="text-indigo-600 hover:underline font-semibold">Privacy Policy</a>
                    </span>
                  </label>
                  {errors.agreeTerms && <p className="text-[11px] text-rose-600 font-semibold">{errors.agreeTerms}</p>}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer mt-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>{isLoginMode ? 'Authenticating...' : 'Creating Account...'}</span>
                  </>
                ) : (
                  <>
                    <span>{isLoginMode ? 'Sign In to Account' : 'Create Free Account'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Social Auth Divider */}
          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-bold text-slate-400">
              <span className="bg-white px-3">Or continue with</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                const user = { name: 'Google User', email: 'user@google.com' };
                setIsSuccess(true);
                setTimeout(() => onSignUpSuccess ? onSignUpSuccess(user) : onGoDashboard(), 1000);
              }}
              className="py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Google</span>
            </button>

            <button
              type="button"
              onClick={() => {
                const user = { name: 'GitHub Developer', email: 'dev@github.com' };
                setIsSuccess(true);
                setTimeout(() => onSignUpSuccess ? onSignUpSuccess(user) : onGoDashboard(), 1000);
              }}
              className="py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <svg className="w-4 h-4 fill-current text-slate-900" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>GitHub</span>
            </button>
          </div>

          {/* Footer toggle */}
          <div className="text-center pt-2">
            <p className="text-xs text-slate-500 font-medium">
              {isLoginMode ? "Don't have an account?" : "Already have an account?"}{' '}
              <button
                type="button"
                onClick={() => { setIsLoginMode(!isLoginMode); setErrors({}); }}
                className="font-bold text-indigo-600 hover:text-indigo-700 underline cursor-pointer"
              >
                {isLoginMode ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-4 text-center text-xs text-slate-500">
        <p>© 2026 QueryCart. Secure SSL Encrypted Authentication.</p>
      </footer>

    </div>
  );
};
