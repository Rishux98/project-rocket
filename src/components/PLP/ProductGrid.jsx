import React from 'react';
import { ProductCard } from './ProductCard';
import { SearchX, Sparkles, X, Filter } from 'lucide-react';

export const ProductGrid = ({ 
  products, 
  isLoading, 
  onSelectProduct, 
  comparedIds, 
  onToggleCompare, 
  onResetFilters,
  selectedCategory,
  setSelectedCategory,
  minRating,
  setMinRating,
  priceMax,
  setPriceMax,
  searchQuery,
  setSearchQuery
}) => {
  const hasActiveFilters = 
    (selectedCategory && selectedCategory !== 'all') || 
    minRating > 0 || 
    (priceMax && priceMax < 200000) || 
    (searchQuery && searchQuery.trim().length > 0);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {[1, 2, 3, 4, 5, 6].map((idx) => (
          <div key={idx} className="bg-white rounded-2xl h-[420px] animate-pulse p-4 space-y-4 border border-slate-200 shadow-xs">
            <div className="bg-slate-100 rounded-xl h-48 w-full" />
            <div className="space-y-2">
              <div className="bg-slate-100 h-4 rounded w-1/3" />
              <div className="bg-slate-100 h-6 rounded w-3/4" />
              <div className="bg-slate-100 h-3 rounded w-full" />
            </div>
            <div className="flex gap-2">
              <div className="bg-slate-100 h-6 w-16 rounded-md" />
              <div className="bg-slate-100 h-6 w-16 rounded-md" />
            </div>
            <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
              <div className="bg-slate-100 h-6 w-20 rounded" />
              <div className="bg-slate-100 h-8 w-28 rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-5">
      
      {/* Active Filter Chips Bar & Count */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-white rounded-2xl border border-slate-200 shadow-2xs">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-extrabold text-slate-900 flex items-center gap-1.5 mr-1">
            <Filter className="w-3.5 h-3.5 text-indigo-600" />
            <span>Products</span>
            <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-mono text-[11px]">
              {products.length}
            </span>
          </span>

          {selectedCategory && selectedCategory !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-800 font-bold text-[11px]">
              Category: <span className="capitalize">{selectedCategory}</span>
              <button 
                onClick={() => setSelectedCategory && setSelectedCategory('all')} 
                className="hover:text-indigo-950 p-0.5 cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {minRating > 0 && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold text-[11px]">
              Rating: {minRating}★+
              <button 
                onClick={() => setMinRating && setMinRating(0)} 
                className="hover:text-amber-950 p-0.5 cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {priceMax && priceMax < 200000 && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 font-bold text-[11px]">
              Max: ₹{Number(priceMax).toLocaleString('en-IN')}
              <button 
                onClick={() => setPriceMax && setPriceMax(200000)} 
                className="hover:text-purple-950 p-0.5 cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {searchQuery && searchQuery.trim() && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 font-bold text-[11px]">
              Query: "{searchQuery}"
              <button 
                onClick={() => setSearchQuery && setSearchQuery('')} 
                className="hover:text-slate-950 p-0.5 cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
        </div>

        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 hover:underline cursor-pointer ml-auto"
          >
            Clear All Filters
          </button>
        )}
      </div>

      {/* Grid List or Empty State */}
      {products.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center flex flex-col items-center justify-center space-y-4 border border-slate-200 shadow-sm min-h-[380px]">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
            <SearchX className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-extrabold text-slate-900">No Matching Products Found</h3>
          <p className="text-xs text-slate-500 max-w-md font-medium">
            We couldn't find any products matching your active filter choices or search term.
          </p>
          <button
            onClick={onResetFilters}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      )}

    </div>
  );
};
