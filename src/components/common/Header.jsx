import React, { useState, useRef, useEffect } from 'react';
import { Search, ShoppingCart, Layers, Sparkles, X, Home, User as UserIcon, LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const Header = ({ searchQuery, setSearchQuery, compareCount, onOpenCompare, onGoHome, onGoLanding, onOpenSignUp }) => {
  const { currentUser, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    setIsDropdownOpen(false);
    await logout();
  };

  return (
    <header className="sticky top-0 z-50 bg-white/75 backdrop-blur-lg border-b border-slate-200/80 px-4 lg:px-8 py-3.5 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand Logo & Navigation */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <button 
            onClick={onGoHome} 
            className="flex items-center gap-3 group focus:outline-none text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30 group-hover:scale-105 group-hover:shadow-indigo-600/40 transition-all duration-300">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <span className="font-black text-xl tracking-tight text-slate-900 leading-none">
              Query<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Cart</span>
            </span>
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
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
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
