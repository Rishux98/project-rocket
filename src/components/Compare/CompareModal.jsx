import React from 'react';
import { X, Star, Layers, Sparkles, Plus, AlertCircle, Award, TrendingDown } from 'lucide-react';
import { aspectLabels } from '../../mockData/mockProducts';

export const CompareModal = ({ isOpen, onClose, products = [], onSelectProduct, onExploreCatalog }) => {
  if (!isOpen) return null;

  // Empty state if 0 products selected
  if (!products || products.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
        <div className="bg-white w-full max-w-lg rounded-3xl border border-slate-200 shadow-2xl p-8 text-center space-y-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mx-auto shadow-inner">
            <Layers className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-extrabold text-slate-900">Your Compare Tray is Empty</h2>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto font-medium">
              You haven't selected any products to compare yet. Click the <strong>Compare</strong> button on any product card in the catalog to add up to 3 items side-by-side.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all cursor-pointer"
            >
              Close Window
            </button>
            {onExploreCatalog && (
              <button
                onClick={() => {
                  onClose();
                  onExploreCatalog();
                }}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/30 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Browse Products</span>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  const maxSlots = 3;
  const emptySlotsCount = maxSlots - products.length;

  // Calculate dynamic winners
  const highestRatingValue = Math.max(...products.map(p => p.rating || 0));
  const lowestPriceValue = Math.min(...products.map(p => p.price || Infinity));

  const allSpecKeys = Array.from(
    new Set(products.flatMap((p) => Object.keys(p.specs || {})))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="bg-white w-full max-w-6xl max-h-[92vh] flex flex-col rounded-3xl border border-slate-200 shadow-2xl p-5 sm:p-7 relative">
        
        {/* Fixed Pinned Header */}
        <div className="shrink-0 flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-xs">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">Side-by-Side Product Comparison</h2>
                <span className="px-2.5 py-0.5 text-[10px] font-bold bg-indigo-100 text-indigo-700 rounded-full border border-indigo-200">
                  {products.length}/3 Selected
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Comparing technical specs, overall ratings, and aggregate aspect sentiment</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto overflow-x-auto mt-4 pr-1">
          <div className="min-w-[720px] divide-y divide-slate-200 space-y-6">
            
            {/* Header Row: Products Info */}
            <div className="grid grid-cols-4 gap-4 pb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 my-auto">
                Product Overview
              </div>

              {/* Render Selected Products */}
              {products.map((prod) => {
                const isTopRated = prod.rating === highestRatingValue && products.length > 1;
                const isBestPrice = prod.price === lowestPriceValue && products.length > 1;

                return (
                  <div key={prod.id} className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center flex flex-col justify-between shadow-2xs hover:border-indigo-300 transition-all relative">
                    
                    {/* Winner Medals Badges */}
                    <div className="flex flex-wrap gap-1 justify-center absolute -top-2.5 inset-x-0">
                      {isTopRated && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500 text-white shadow-sm flex items-center gap-1">
                          <Award className="w-3 h-3" /> Top Rated
                        </span>
                      )}
                      {isBestPrice && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-600 text-white shadow-sm flex items-center gap-1">
                          <TrendingDown className="w-3 h-3" /> Best Price
                        </span>
                      )}
                    </div>

                    <div className="relative h-32 rounded-xl overflow-hidden bg-slate-100 mt-2">
                      <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-[11px] text-indigo-600 font-bold uppercase tracking-wider">{prod.brand}</div>
                      <h4 className="text-sm font-extrabold text-slate-900 line-clamp-1">{prod.name}</h4>
                      <div className="flex items-center justify-center gap-1 text-xs font-bold text-amber-600 mt-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                        <span>{prod.rating}</span>
                        <span className="text-slate-400 font-normal">({prod.reviewCount})</span>
                      </div>
                      <div className="text-lg font-extrabold text-slate-900 mt-1">₹{Number(prod.price).toLocaleString('en-IN')}</div>
                    </div>

                    <button
                      onClick={() => {
                        onClose();
                        onSelectProduct(prod.id);
                      }}
                      className="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
                    >
                      View Details
                    </button>
                  </div>
                );
              })}

              {/* Render Empty Slots */}
              {Array.from({ length: emptySlotsCount }).map((_, idx) => (
                <div
                  key={`empty-${idx}`}
                  className="p-4 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 text-center flex flex-col items-center justify-center space-y-2 min-h-[220px]"
                >
                  <div className="w-9 h-9 rounded-full bg-slate-200/70 flex items-center justify-center text-slate-400">
                    <Plus className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-500">Empty Slot</span>
                  <p className="text-[11px] text-slate-400 max-w-[140px] leading-tight">
                    Add another product from the catalog to compare specs.
                  </p>
                </div>
              ))}
            </div>

            {/* AI Comparison Quick Verdict */}
            <div className="py-4 grid grid-cols-4 gap-4 items-center">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> AI Verdict
              </div>
              <div className="col-span-3 p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200 text-xs text-indigo-950 leading-relaxed font-sans shadow-2xs">
                {products.length === 1 ? (
                  <div className="flex items-center gap-2 text-indigo-800">
                    <AlertCircle className="w-4 h-4 shrink-0 text-indigo-600" />
                    <span>Select at least 1 more product using the Compare button on cards to generate head-to-head AI verdict recommendations.</span>
                  </div>
                ) : (
                  <>
                    💡 <strong>Head-to-Head AI Summary:</strong> For highest customer satisfaction and overall rating, <span className="text-indigo-700 font-bold">{products.find(p => p.rating === highestRatingValue)?.name || products[0]?.name}</span> leads the matrix. For budget efficiency, <span className="text-indigo-700 font-bold">{products.find(p => p.price === lowestPriceValue)?.name || products[0]?.name}</span> offers the best value per rupee.
                  </>
                )}
              </div>
            </div>

            {/* Aspect Scores Section */}
            <div className="py-4 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Aspect Sentiment Scores
              </div>

              {['battery', 'build', 'price', 'performance'].map((aspKey) => {
                const info = aspectLabels[aspKey] || { name: aspKey, icon: '⚡' };
                return (
                  <div key={aspKey} className="grid grid-cols-4 gap-4 items-center text-xs py-1.5 hover:bg-slate-50 px-2 rounded-xl">
                    <div className="font-semibold text-slate-700 flex items-center gap-1.5">
                      <span>{info.icon}</span>
                      <span>{info.name}</span>
                    </div>
                    
                    {/* Selected Products Aspect Scores */}
                    {products.map((prod) => {
                      const asp = prod.aspectScores?.find(a => a.aspect === aspKey);
                      const score = asp ? asp.score : 'N/A';
                      return (
                        <div key={prod.id} className="text-center font-extrabold font-mono text-amber-600 text-sm">
                          {score !== 'N/A' ? `${score} ★` : '—'}
                        </div>
                      );
                    })}

                    {/* Empty Slot cells */}
                    {Array.from({ length: emptySlotsCount }).map((_, idx) => (
                      <div key={`asp-empty-${idx}`} className="text-center text-slate-300">
                        —
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

            {/* Specifications Matrix */}
            <div className="py-4 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Technical Specifications
              </div>

              {allSpecKeys.length === 0 ? (
                <div className="text-xs text-slate-400 italic py-2">No specs available for selection.</div>
              ) : (
                allSpecKeys.map((specKey) => (
                  <div key={specKey} className="grid grid-cols-4 gap-4 items-center text-xs py-2 hover:bg-slate-50 px-2 rounded-xl">
                    <div className="font-semibold text-slate-500">{specKey}</div>
                    
                    {products.map((prod) => (
                      <div key={prod.id} className="text-center text-slate-800 font-semibold">
                        {prod.specs?.[specKey] || '—'}
                      </div>
                    ))}

                    {/* Empty Slot cells */}
                    {Array.from({ length: emptySlotsCount }).map((_, idx) => (
                      <div key={`spec-empty-${idx}`} className="text-center text-slate-300">
                        —
                      </div>
                    ))}
                  </div>
                ))
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
