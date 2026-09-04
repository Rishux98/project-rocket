import React from 'react';
import { Star, Layers, Check, ChevronRight } from 'lucide-react';
import { aspectLabels } from '../../mockData/mockProducts';

export const ProductCard = ({ product, onSelectProduct, isCompared, onToggleCompare, isCompareDisabled }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden flex flex-col group relative border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300">
      
      {/* Image Banner */}
      <div 
        onClick={() => onSelectProduct(product.id)}
        className="relative h-52 overflow-hidden bg-slate-100 cursor-pointer"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category Pill */}
        <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase bg-white/90 backdrop-blur-md text-slate-900 border border-slate-200 rounded-lg shadow-sm">
          {product.category}
        </span>

        {/* Rating Badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
          <span className="text-xs font-extrabold text-slate-900">{product.rating}</span>
          <span className="text-[11px] text-slate-500 font-medium">({product.reviewCount})</span>
        </div>

        {/* Compare Toggle Button overlay */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleCompare(product.id);
          }}
          disabled={!isCompared && isCompareDisabled}
          title={isCompared ? "Remove from Compare" : isCompareDisabled ? "Max 3 items to compare" : "Add to Compare"}
          className={`absolute top-3 right-3 p-2 rounded-xl text-xs font-semibold backdrop-blur-md border transition-all duration-200 cursor-pointer ${
            isCompared
              ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/30'
              : isCompareDisabled
              ? 'bg-white/60 text-slate-400 border-slate-200 cursor-not-allowed'
              : 'bg-white/90 hover:bg-indigo-600 text-slate-700 hover:text-white border-slate-200 shadow-sm'
          }`}
        >
          {isCompared ? <Check className="w-4 h-4" /> : <Layers className="w-4 h-4" />}
        </button>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          <div className="text-xs text-indigo-600 font-bold tracking-wider uppercase mb-1">
            {product.brand}
          </div>
          <h3 
            onClick={() => onSelectProduct(product.id)}
            className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>
          <p className="text-xs text-slate-600 line-clamp-2 mt-1.5 leading-relaxed font-normal">
            {product.description}
          </p>
        </div>

        {/* Aspect Highlight Sentiment Pills */}
        <div className="flex flex-wrap gap-1.5">
          {product.aspectScores.slice(0, 3).map((asp) => {
            const info = aspectLabels[asp.aspect] || { icon: '⚡' };
            return (
              <span
                key={asp.aspect}
                className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1"
              >
                <span>{info.icon}</span>
                <span>{asp.score}★</span>
              </span>
            );
          })}
        </div>

        {/* Footer Price & Action */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="text-lg font-extrabold text-slate-900">
              ${product.price}
            </div>
            {product.originalPrice && (
              <div className="text-[11px] text-slate-400 line-through">
                ${product.originalPrice}
              </div>
            )}
          </div>

          <button
            onClick={() => onSelectProduct(product.id)}
            className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white border border-indigo-200 hover:border-indigo-600 transition-all duration-200 cursor-pointer"
          >
            <span>Explore Reviews</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};
