import React, { useState } from 'react';
import { Layers, X, ArrowRight, Trash2, Sparkles, ChevronUp, ChevronDown, Star, Award, TrendingDown } from 'lucide-react';

export const CompareTray = ({ comparedProducts, onRemoveFromCompare, onClearCompare, onOpenModal, onSelectProduct }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  if (!comparedProducts || comparedProducts.length === 0) return null;

  const maxSlots = 3;
  const isFull = comparedProducts.length >= maxSlots;
  const count = comparedProducts.length;

  // Calculate quick insights if 2+ products are present
  let priceDeltaText = null;
  let winnerProduct = null;

  if (count >= 2) {
    const prices = comparedProducts.map(p => Number(p.price) || 0);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const cheapestProduct = comparedProducts.find(p => Number(p.price) === minPrice);
    const highestRated = [...comparedProducts].sort((a, b) => (b.rating || 0) - (a.rating || 0))[0];

    if (maxPrice > minPrice && cheapestProduct) {
      const delta = maxPrice - minPrice;
      priceDeltaText = `Save ₹${delta.toLocaleString('en-IN')} with ${cheapestProduct.name.split(' ')[0]}`;
    }
    if (highestRated) {
      winnerProduct = highestRated;
    }
  }

  // Minimized Floating Pill View - Clean White Theme
  if (isMinimized) {
    return (
      <div className="fixed bottom-5 right-6 z-50 animate-bounceIn">
        <button
          onClick={() => setIsMinimized(false)}
          className="group relative flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 text-slate-900 shadow-2xl shadow-slate-300/60 hover:bg-slate-50 hover:border-indigo-300 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
          </span>

          <div className="w-7.5 h-7.5 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-600/30">
            <Layers className="w-4 h-4" />
          </div>
          <div className="text-left">
            <div className="text-[10px] font-black uppercase tracking-wider text-indigo-600">Compare Tray</div>
            <div className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
              <span>{count} / {maxSlots} Items</span>
            </div>
          </div>
          <ChevronUp className="w-4 h-4 text-slate-400 group-hover:-translate-y-0.5 group-hover:text-indigo-600 transition-all ml-1" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl animate-slideUp">
      {/* Outer Gradient Light Glow Wrapper */}
      <div className="p-[1px] rounded-2xl bg-gradient-to-r from-indigo-200 via-purple-100 to-indigo-200 shadow-2xl shadow-slate-300/60 backdrop-blur-2xl">
        <div className="bg-white/95 text-slate-900 rounded-2xl p-3 sm:p-4 border border-slate-200/90 space-y-2.5 shadow-inner">
          
          {/* Top Bar: Insights & Quick Status (If 2+ items) */}
          {count >= 2 && (
            <div className="flex items-center justify-between text-[11px] px-3 py-1.5 bg-indigo-50/90 rounded-xl border border-indigo-100 text-indigo-950 font-medium">
              <div className="flex items-center gap-2 text-indigo-900 font-bold truncate">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 shrink-0 animate-pulse" />
                <span className="truncate">
                  {priceDeltaText ? priceDeltaText : `Top Rated: ${winnerProduct?.name} (${winnerProduct?.rating}★)`}
                </span>
              </div>
              <span className="text-[10px] text-indigo-600 font-mono font-bold hidden sm:inline-block">
                ⚡ Side-by-side spec match ready
              </span>
            </div>
          )}

          {/* Main Content Bar */}
          <div className="flex items-center justify-between gap-3">
            
            {/* Left Section: Brand Badge & Products List */}
            <div className="flex items-center gap-3 overflow-x-auto py-0.5 scrollbar-none">
              
              {/* Compare Brand Icon */}
              <div className="hidden sm:flex items-center gap-2 pr-3 border-r border-slate-200 shrink-0">
                <div className="w-8.5 h-8.5 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-black tracking-tight text-slate-900 flex items-center gap-1.5">
                    <span>Compare</span>
                    <span className={`px-1.5 py-0.5 text-[10px] font-bold rounded-full ${isFull ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-indigo-100 text-indigo-700 border border-indigo-200'}`}>
                      {count}/{maxSlots}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold">Max 3 products</div>
                </div>
              </div>

              {/* Active Product Cards */}
              <div className="flex items-center gap-2.5">
                {comparedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="relative flex items-center gap-2.5 p-1.5 pr-2.5 rounded-xl bg-slate-50 border border-slate-200/90 group shrink-0 shadow-2xs hover:border-indigo-400 hover:bg-indigo-50/50 transition-all cursor-pointer"
                    onClick={() => onSelectProduct && onSelectProduct(product.id)}
                    title={`Click to view ${product.name}`}
                  >
                    <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-white shrink-0 border border-slate-200">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col max-w-[110px] sm:max-w-[130px]">
                      <span className="text-[11px] font-extrabold text-slate-900 truncate group-hover:text-indigo-600 transition-colors">
                        {product.name}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-indigo-600 font-extrabold font-mono">
                          ₹{Number(product.price).toLocaleString('en-IN')}
                        </span>
                        {product.rating && (
                          <span className="text-[9px] text-amber-600 font-bold flex items-center gap-0.5">
                            <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-500" /> {product.rating}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveFromCompare(product.id);
                      }}
                      className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-slate-200/70 transition-colors cursor-pointer ml-0.5"
                      title="Remove product"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}

                {/* Empty Slot Placeholders */}
                {Array.from({ length: maxSlots - count }).map((_, idx) => (
                  <div
                    key={`slot-${idx}`}
                    className="h-12 px-3.5 rounded-xl border border-dashed border-slate-300 bg-slate-50/70 text-slate-400 flex items-center justify-center gap-1.5 text-[11px] font-semibold shrink-0 hover:border-slate-400 transition-all"
                  >
                    <span className="text-slate-400 font-bold">+ Add Item</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Section: Action Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              
              <button
                onClick={onClearCompare}
                className="p-2.5 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-slate-100 transition-colors cursor-pointer"
                title="Clear All Items"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsMinimized(true)}
                className="p-2.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                title="Minimize Tray"
              >
                <ChevronDown className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenModal}
                className="relative group px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-xs shadow-md shadow-indigo-600/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-indigo-200 group-hover:rotate-12 transition-transform" />
                <span className="whitespace-nowrap">Compare Matrix</span>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-200 group-hover:translate-x-0.5 transition-transform" />
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

