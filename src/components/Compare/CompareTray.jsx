import React from 'react';
import { Layers, X, ChevronRight, Trash2 } from 'lucide-react';

export const CompareTray = ({ comparedProducts, onRemoveFromCompare, onClearCompare, onOpenModal }) => {
  if (!comparedProducts || comparedProducts.length === 0) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-3xl bg-white/95 border border-slate-300 rounded-2xl p-3 shadow-2xl backdrop-blur-xl animate-slideUp">
      <div className="flex items-center justify-between gap-4">
        
        {/* Left Info & Items */}
        <div className="flex items-center gap-3 overflow-x-auto py-1">
          <div className="hidden sm:flex items-center gap-2 pr-3 border-r border-slate-200 text-xs font-bold text-slate-800 shrink-0">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>Compare</span>
          </div>

          <div className="flex items-center gap-2">
            {comparedProducts.map((product) => (
              <div
                key={product.id}
                className="relative flex items-center gap-2 p-1.5 rounded-xl bg-slate-50 border border-slate-200 group shrink-0 shadow-2xs"
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-8 h-8 rounded-lg object-cover"
                />
                <span className="text-xs font-bold text-slate-800 max-w-[100px] truncate hidden md:inline">
                  {product.name}
                </span>
                <button
                  onClick={() => onRemoveFromCompare(product.id)}
                  className="p-1 rounded-full text-slate-400 hover:text-rose-600 hover:bg-slate-200 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}

            {/* Empty Slots Indicator */}
            {Array.from({ length: 3 - comparedProducts.length }).map((_, idx) => (
              <div
                key={idx}
                className="w-9 h-9 rounded-xl border border-dashed border-slate-300 flex items-center justify-center text-[10px] text-slate-400 font-mono"
              >
                +
              </div>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onClearCompare}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors text-xs"
            title="Clear Tray"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenModal}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/30 flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer"
          >
            <span>Compare Now</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
