import React from 'react';
import { ShoppingCart, Sparkles, ShieldCheck, Cpu, ArrowUp, Layers } from 'lucide-react';

export const DashboardFooter = ({ onGoLanding, onOpenSignUp, onResetFilters }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-300 border-t border-slate-800/80 pt-12 pb-8 px-4 lg:px-8 shadow-2xl">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                <ShoppingCart className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  QueryCart
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full">
                  AI Dashboard
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Real-time product review intelligence, aspect-based sentiment matrix, and grounded AI specifications explorer.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-[11px] font-semibold text-indigo-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" /> Grounded RAG v2.4
              </span>
            </div>
          </div>

          {/* Quick Dashboard Controls */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200">Dashboard Controls</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={onResetFilters} className="hover:text-indigo-400 transition-colors cursor-pointer flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" /> Reset Catalog Filters
                </button>
              </li>
              <li>
                <button onClick={onGoLanding} className="hover:text-indigo-400 transition-colors cursor-pointer flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Back to Landing Page
                </button>
              </li>
            </ul>
          </div>

          {/* Data & Intelligence Metrics */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200">System Metrics</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex justify-between items-center bg-slate-800/50 p-2 rounded-lg border border-slate-800">
                <span>Products Catalog:</span>
                <span className="font-bold text-white">30 Tech Items</span>
              </div>
              <div className="flex justify-between items-center bg-slate-800/50 p-2 rounded-lg border border-slate-800">
                <span>Currency:</span>
                <span className="font-bold text-emerald-400">INR (₹)</span>
              </div>
              <div className="flex justify-between items-center bg-slate-800/50 p-2 rounded-lg border border-slate-800">
                <span>Aspect Sentiment:</span>
                <span className="font-bold text-indigo-400">Multi-Vector Radar</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={onGoLanding} className="hover:text-indigo-400 transition-colors cursor-pointer">Platform Overview</button></li>
              <li><a href="#privacy" className="hover:text-indigo-400 transition-colors">Privacy & Data Policy</a></li>
              <li><a href="#terms" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="font-medium text-slate-300">Dashboard Panel Operational</span>
            <span>•</span>
            <span>© 2026 QueryCart. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-400 font-medium">QueryCart Intelligence Suite</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer flex items-center gap-1 font-bold text-xs border border-slate-700"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" /> Top
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
