import React from 'react';
import { Star } from 'lucide-react';

export const RatingBreakdown = ({ rating, reviewCount, breakdown, activeStar, onSelectStar }) => {
  const totalVotes = Object.values(breakdown || {}).reduce((acc, curr) => acc + curr, 0) || reviewCount || 1;

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
      
      {/* Overall Score Banner */}
      <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
        <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-indigo-50 border border-indigo-200 w-24 h-24 shrink-0 shadow-sm">
          <span className="text-3xl font-black text-indigo-950">{rating}</span>
          <div className="flex text-amber-500 mt-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className={`w-3 h-3 ${s <= Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-slate-900">Overall Rating</h3>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            Based on <span className="font-semibold text-slate-800">{reviewCount} verified buyer reviews</span> across all channels.
          </p>
          {activeStar > 0 && (
            <button
              onClick={() => onSelectStar(0)}
              className="mt-2 text-xs text-indigo-600 hover:underline font-bold"
            >
              Clear Star Filter ({activeStar}★ Active)
            </button>
          )}
        </div>
      </div>

      {/* 5 Star to 1 Star Breakdown List */}
      <div className="space-y-2">
        {[5, 4, 3, 2, 1].map((starNum) => {
          const count = breakdown?.[starNum] || 0;
          const pct = Math.round((count / totalVotes) * 100);
          const isSelected = activeStar === starNum;

          return (
            <button
              key={starNum}
              onClick={() => onSelectStar(isSelected ? 0 : starNum)}
              className={`w-full flex items-center gap-3 p-1.5 rounded-xl transition-all cursor-pointer ${
                isSelected
                  ? 'bg-amber-50 border border-amber-300 text-amber-900'
                  : 'hover:bg-slate-50 border border-transparent text-slate-700'
              }`}
            >
              <div className="flex items-center gap-1 w-12 text-xs font-semibold shrink-0">
                <span>{starNum}</span>
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              </div>

              {/* Progress Bar */}
              <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>

              <div className="w-14 text-right text-xs text-slate-500 font-mono shrink-0">
                {count} ({pct}%)
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
};
