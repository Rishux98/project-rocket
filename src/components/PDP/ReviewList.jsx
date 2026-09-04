import React, { useState } from 'react';
import { ReviewCard } from './ReviewCard';
import { AspectTabs } from './AspectTabs';
import { MessageSquare, Plus, ArrowUpDown, Loader2 } from 'lucide-react';

export const ReviewList = ({
  reviews,
  aspectScores,
  activeAspect,
  onSelectAspect,
  activeStar,
  onSelectStar,
  onVote,
  onOpenWriteReview,
  highlightedId
}) => {
  const [sortBy, setSortBy] = useState('recent'); // 'recent' | 'helpful' | 'rating-high'
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  let filtered = [...reviews];
  if (activeAspect !== 'all') {
    filtered = filtered.filter(r => r.aspectTags?.includes(activeAspect));
  }
  if (activeStar > 0) {
    filtered = filtered.filter(r => r.rating === activeStar);
  }

  if (sortBy === 'recent') {
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortBy === 'helpful') {
    filtered.sort((a, b) => b.helpful - a.helpful);
  } else if (sortBy === 'rating-high') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const visibleReviews = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 3);
      setIsLoadingMore(false);
    }, 350);
  };

  return (
    <div className="space-y-6">
      
      {/* Aspect Category Tabs */}
      <AspectTabs
        activeAspect={activeAspect}
        onSelectAspect={onSelectAspect}
        aspectScores={aspectScores}
      />

      {/* Review List Controls Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
        
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              Verified User Reviews
              <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-slate-100 text-slate-700">
                {filtered.length}
              </span>
            </h3>
            <p className="text-[11px] text-slate-500">
              {activeAspect !== 'all' || activeStar > 0 ? 'Filtered view active' : 'Showing all community feedback'}
            </p>
          </div>
        </div>

        {/* Actions: Sort & Write Review */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-300 rounded-xl px-2.5 py-1.5">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-xs text-slate-800 font-bold focus:outline-none cursor-pointer"
            >
              <option value="recent" className="bg-white text-slate-800">Most Recent</option>
              <option value="helpful" className="bg-white text-slate-800">Most Helpful</option>
              <option value="rating-high" className="bg-white text-slate-800">Highest Rating</option>
            </select>
          </div>

          <button
            onClick={onOpenWriteReview}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all active:scale-95 shrink-0 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Write a Review</span>
          </button>
        </div>

      </div>

      {/* Review List */}
      {visibleReviews.length === 0 ? (
        <div className="bg-white p-8 rounded-2xl text-center space-y-3 border border-slate-200 shadow-sm">
          <p className="text-sm font-semibold text-slate-700">No reviews found matching this filter.</p>
          <button
            onClick={() => {
              onSelectAspect('all');
              onSelectStar(0);
            }}
            className="text-xs text-indigo-600 hover:underline font-bold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {visibleReviews.map((rev) => (
            <ReviewCard
              key={rev.id}
              review={rev}
              onVote={onVote}
              highlightedId={highlightedId}
            />
          ))}
        </div>
      )}

      {/* Infinite Scroll / Load More */}
      {hasMore && (
        <div className="text-center pt-2">
          <button
            onClick={handleLoadMore}
            disabled={isLoadingMore}
            className="px-6 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-indigo-600 hover:text-indigo-700 font-bold text-xs border border-slate-300 shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            {isLoadingMore ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
                <span>Fetching More Reviews...</span>
              </>
            ) : (
              <span>Load More Reviews ({filtered.length - visibleCount} remaining)</span>
            )}
          </button>
        </div>
      )}

    </div>
  );
};
