import React from 'react';
import { X, Star, Layers, Sparkles } from 'lucide-react';
import { aspectLabels } from '../../mockData/mockProducts';

export const CompareModal = ({ isOpen, onClose, products, onSelectProduct }) => {
  if (!isOpen || !products || products.length === 0) return null;

  const allSpecKeys = Array.from(
    new Set(products.flatMap((p) => Object.keys(p.specs || {})))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-white w-full max-w-6xl rounded-2xl border border-slate-200 shadow-2xl p-6 relative my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-600">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-slate-900">Side-by-Side Product Comparison</h2>
              <p className="text-xs text-slate-500">Comparing technical specs, overall ratings, and aggregate aspect sentiment</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Comparison Matrix Table */}
        <div className="mt-6 overflow-x-auto">
          <div className="min-w-[700px] divide-y divide-slate-200">
            
            {/* Header Row: Products Info */}
            <div className="grid grid-cols-4 gap-4 pb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 my-auto">
                Product Overview
              </div>

              {products.map((prod) => (
                <div key={prod.id} className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-center flex flex-col justify-between shadow-2xs">
                  <div className="relative h-32 rounded-lg overflow-hidden bg-slate-100">
                    <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-[11px] text-indigo-600 font-bold uppercase">{prod.brand}</div>
                    <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{prod.name}</h4>
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
                    className="w-full py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                  >
                    View Product Page
                  </button>
                </div>
              ))}
            </div>

            {/* AI Comparison Quick Verdict */}
            <div className="py-4 grid grid-cols-4 gap-4 items-center">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> AI Verdict
              </div>
              <div className="col-span-3 p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-900 leading-relaxed font-sans">
                💡 <strong>Head-to-Head Insights:</strong> If battery longevity is your top requirement, choose <span className="text-indigo-700 font-bold">{products[0]?.name}</span>. For soundstage accuracy and display clarity, <span className="text-indigo-700 font-bold">{products[1]?.name || products[0]?.name}</span> holds higher aspect scores.
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
                  <div key={aspKey} className="grid grid-cols-4 gap-4 items-center text-xs py-1">
                    <div className="font-semibold text-slate-700 flex items-center gap-1.5">
                      <span>{info.icon}</span>
                      <span>{info.name}</span>
                    </div>
                    {products.map((prod) => {
                      const asp = prod.aspectScores.find(a => a.aspect === aspKey);
                      const score = asp ? asp.score : 'N/A';
                      return (
                        <div key={prod.id} className="text-center font-extrabold font-mono text-amber-600">
                          {score !== 'N/A' ? `${score} ★` : '—'}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            {/* Specifications Matrix */}
            <div className="py-4 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Technical Specifications
              </div>

              {allSpecKeys.map((specKey) => (
                <div key={specKey} className="grid grid-cols-4 gap-4 items-center text-xs py-2 hover:bg-slate-50 px-1 rounded-lg">
                  <div className="font-semibold text-slate-500">{specKey}</div>
                  {products.map((prod) => (
                    <div key={prod.id} className="text-center text-slate-800 font-semibold">
                      {prod.specs[specKey] || '—'}
                    </div>
                  ))}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
