import React from 'react';
import { Search, ShoppingCart, Layers, Sparkles, X, Home, User as UserIcon } from 'lucide-react';

export const Header = ({ searchQuery, setSearchQuery, compareCount, onOpenCompare, onGoHome, onGoLanding, currentUser, onOpenSignUp }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/75 backdrop-blur-lg border-b border-slate-200/80 px-4 lg:px-8 py-3.5 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand Logo & Navigation */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <button 
            onClick={onGoHome} 
            className="flex items-center gap-3 group focus:outline-none text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">
                  QueryCart
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-full flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" /> AI Powered
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Next-Gen Product Intelligence Dashboard</p>
            </div>
          </button>

          {/* Landing Link & Compare Button Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onGoLanding}
              className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 text-xs font-semibold"
              title="Landing Page"
            >
              <Home className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCompare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-medium text-xs shadow-md shadow-indigo-600/30 active:scale-95 transition-all cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5" />
              Compare ({compareCount})
            </button>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products, specs (e.g. 40mm, M3, ANC, battery)..."
            className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-100 focus:bg-white border border-slate-300 focus:border-indigo-600 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-inner"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Action Controls & Landing Link Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onGoLanding}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-indigo-600 bg-slate-100 hover:bg-indigo-50 border border-slate-200 transition-all cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>

          {currentUser ? (
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-indigo-50 border border-indigo-100 text-xs font-bold text-indigo-900">
              <UserIcon className="w-4 h-4 text-indigo-600" />
              <span>{currentUser.name}</span>
            </div>
          ) : (
            <button
              onClick={onOpenSignUp}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-indigo-600 bg-slate-100 hover:bg-indigo-50 border border-slate-200 transition-all cursor-pointer"
            >
              <UserIcon className="w-4 h-4 text-indigo-600" />
              <span>Sign Up</span>
            </button>
          )}

          <button
            onClick={onOpenCompare}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 cursor-pointer active:scale-95 transition-all duration-200"
          >
            <Layers className="w-4 h-4" />
            <span>Compare Tray</span>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-white/20 text-white">
              {compareCount}/3
            </span>
          </button>
        </div>

      </div>
    </header>
  );
};
