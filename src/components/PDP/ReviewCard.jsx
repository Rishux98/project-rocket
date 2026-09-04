import React from 'react';
import { Star, ThumbsUp, ThumbsDown, CheckCircle2 } from 'lucide-react';
import { aspectLabels } from '../../mockData/mockProducts';

export const ReviewCard = ({ review, onVote, highlightedId }) => {
  const isHighlighted = highlightedId === review.id;

  return (
    <div
      id={`review-${review.id}`}
      className={`bg-white rounded-2xl p-5 border transition-all duration-300 ${
        isHighlighted
          ? 'highlight-citation border-indigo-500 shadow-xl'
          : 'border-slate-200 shadow-sm hover:border-slate-300'
      }`}
    >
      {/* Header: Author + Rating */}
      <div className="flex items-start justify-between gap-4 mb-3">
        
        <div className="flex items-center gap-3">
          <img
            src={review.avatar}
            alt={review.author}
            className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-sm"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-900">{review.author}</span>
              {review.verified && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 font-bold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified Buyer
                </span>
              )}
            </div>
            <div className="text-[11px] text-slate-400 font-mono mt-0.5">{review.date}</div>
          </div>
        </div>

        {/* Rating Stars Badge */}
        <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
          <span className="text-xs font-extrabold text-amber-800">{review.rating}.0</span>
        </div>

      </div>

      {/* Title & Comment */}
      <div className="space-y-1.5">
        <h4 className="text-sm font-bold text-slate-900">{review.title}</h4>
        <p className="text-xs text-slate-700 leading-relaxed font-normal">{review.comment}</p>
      </div>

      {/* Aspect Tags */}
      {review.aspectTags && review.aspectTags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100">
          {review.aspectTags.map((tag) => {
            const info = aspectLabels[tag] || { name: tag, icon: '🏷️' };
            return (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1"
              >
                <span>{info.icon}</span>
                <span>{info.name}</span>
              </span>
            );
          })}
        </div>
      )}

      {/* Helpful / Unhelpful Votes */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>Was this review helpful?</span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onVote(review.id, 'helpful')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border transition-all text-xs font-bold cursor-pointer ${
              review.userVote === 'helpful'
                ? 'bg-emerald-50 text-emerald-700 border-emerald-300 shadow-2xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Helpful ({review.helpful})</span>
          </button>

          <button
            onClick={() => onVote(review.id, 'unhelpful')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border transition-all text-xs font-bold cursor-pointer ${
              review.userVote === 'unhelpful'
                ? 'bg-rose-50 text-rose-700 border-rose-300 shadow-2xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            <ThumbsDown className="w-3.5 h-3.5 text-rose-600" />
            <span>({review.unhelpful})</span>
          </button>
        </div>
      </div>

    </div>
  );
};
