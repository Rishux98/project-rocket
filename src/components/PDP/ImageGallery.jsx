import React, { useState } from 'react';

export const ImageGallery = ({ images, productName }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image View */}
      <div className="relative h-[380px] lg:h-[440px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm group">
        <img
          src={images[activeIdx] || images[0]}
          alt={productName}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
        />
      </div>

      {/* Thumbnails Bar */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 bg-slate-100 cursor-pointer ${
                activeIdx === idx
                  ? 'border-indigo-600 ring-2 ring-indigo-500/20 scale-105'
                  : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-300'
              }`}
            >
              <img src={img} alt={`${productName} thumbnail ${idx}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
