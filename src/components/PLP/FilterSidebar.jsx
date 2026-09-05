import React from 'react';
import { Filter, Star, SlidersHorizontal, RotateCcw } from 'lucide-react';

export const FilterSidebar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  minRating,
  setMinRating,
  priceMax,
  setPriceMax,
  sortBy,
  setSortBy,
  onResetFilters
}) => {
  return (
    <aside className="w-full lg:w-64 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-6 shrink-0 h-fit">
      
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
          <SlidersHorizontal className="w-4 h-4 text-indigo-600" />
          <span>Filter Products</span>
        </div>
        <button
          onClick={onResetFilters}
          className="text-xs text-indigo-600 hover:text-indigo-800 flex items-center gap-1 font-semibold hover:underline transition-colors"
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      {/* Sort By Dropdown */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
          Sort By
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:border-indigo-600 focus:bg-white"
        >
          <option value="rating">Highest Rating ★</option>
          <option value="reviews">Most Reviews</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* Categories */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5">
          Category
        </label>
        <div className="space-y-1.5">
          {categories.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  active
                    ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent'
                }`}
              >
                <span className="capitalize">{cat.label}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${active ? 'bg-indigo-200 text-indigo-800' : 'bg-slate-100 text-slate-500'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Minimum Rating */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2.5">
          Minimum Rating
        </label>
        <div className="space-y-1.5">
          {[4.5, 4.0, 3.5, 0].map((ratingVal) => (
            <button
              key={ratingVal}
              onClick={() => setMinRating(ratingVal)}
              className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                minRating === ratingVal
                  ? 'bg-amber-50 text-amber-800 border border-amber-200'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent'
              }`}
            >
              <div className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
              </div>
              <span>{ratingVal === 0 ? 'All Ratings' : `${ratingVal} Stars & Up`}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Slider */}
      <div>
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-bold uppercase tracking-wider text-slate-500 text-[11px]">Max Price</span>
          <span className="text-indigo-600 font-extrabold">₹{Number(priceMax).toLocaleString('en-IN')}</span>
        </div>
        <input
          type="range"
          min="2000"
          max="200000"
          step="2000"
          value={priceMax}
          onChange={(e) => setPriceMax(Number(e.target.value))}
          className="w-full accent-indigo-600 bg-slate-200 h-1.5 rounded-lg cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
          <span>₹2,000</span>
          <span>₹2,00,000</span>
        </div>
      </div>

    </aside>
  );
};
