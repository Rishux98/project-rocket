import React from 'react';
import { ProductCard } from './ProductCard';
import { SearchX, Sparkles } from 'lucide-react';

export const ProductGrid = ({ products, isLoading, onSelectProduct, comparedIds, onToggleCompare, onResetFilters }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {[1, 2, 3, 4, 5, 6].map((idx) => (
          <div key={idx} className="glass-card rounded-2xl h-[420px] animate-pulse p-4 space-y-4 border border-slate-800">
            <div className="bg-slate-800/60 rounded-xl h-48 w-full" />
            <div className="space-y-2">
              <div className="bg-slate-800/60 h-4 rounded w-1/3" />
              <div className="bg-slate-800/60 h-6 rounded w-3/4" />
              <div className="bg-slate-800/60 h-3 rounded w-full" />
            </div>
            <div className="flex gap-2">
              <div className="bg-slate-800/60 h-6 w-16 rounded-md" />
              <div className="bg-slate-800/60 h-6 w-16 rounded-md" />
            </div>
            <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
              <div className="bg-slate-800/60 h-6 w-20 rounded" />
              <div className="bg-slate-800/60 h-8 w-28 rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex-1 glass-panel rounded-2xl p-12 text-center flex flex-col items-center justify-center space-y-4 border border-slate-800 my-auto min-h-[400px]">
        <div className="w-16 h-16 rounded-2xl bg-slate-800/60 flex items-center justify-center text-slate-400">
          <SearchX className="w-8 h-8 text-indigo-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-200">No Matching Products Found</h3>
        <p className="text-sm text-slate-400 max-w-md">
          We couldn't find any products matching your active filters or search terms. Try loosening your price or rating parameters.
        </p>
        <button
          onClick={onResetFilters}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all"
        >
          Reset All Filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
      {products.map((prod) => (
        <ProductCard
          key={prod.id}
          product={prod}
          onSelectProduct={onSelectProduct}
          isCompared={comparedIds.includes(prod.id)}
          onToggleCompare={onToggleCompare}
          isCompareDisabled={comparedIds.length >= 3}
        />
      ))}
    </div>
  );
};
