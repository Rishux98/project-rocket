import React, { useState } from 'react';
import { X, Star, Sparkles, Check, AlertCircle, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { aspectLabels } from '../../mockData/mockProducts';

export const WriteReviewModal = ({ isOpen, onClose, onSubmit, productName }) => {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');
  const [selectedAspects, setSelectedAspects] = useState(['performance']);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const starLabels = {
    1: '1 ★ Poor - Disappointed',
    2: '2 ★ Fair - Subpar experience',
    3: '3 ★ Average - Meets basic specs',
    4: '4 ★ Very Good - Highly recommended',
    5: '5 ★ Excellent - Outstanding product!'
  };

  const toggleAspect = (key) => {
    if (selectedAspects.includes(key)) {
      if (selectedAspects.length > 1) {
        setSelectedAspects(selectedAspects.filter(a => a !== key));
      }
    } else {
      setSelectedAspects([...selectedAspects, key]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Please provide a review title.');
      return;
    }
    if (comment.trim().length < 15) {
      setError('Please write at least 15 characters describing your experience.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      await onSubmit({
        rating,
        title,
        comment,
        author: author.trim() || 'Verified Explorer',
        aspectTags: selectedAspects
      });

      try {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {}

      onClose();
    } catch (e) {
      setError('Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-2xl border border-slate-200 shadow-2xl p-6 relative overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              Write a Review
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Share your feedback for <span className="text-indigo-600 font-bold">{productName}</span></p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mt-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2 font-medium">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          
          {/* Star Rating Picker */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Overall Rating
            </label>
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400 cursor-pointer">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 focus:outline-none transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-7 h-7 ${
                        star <= (hoverRating || rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-slate-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <span className="text-xs font-bold text-amber-700 ml-2">
                {starLabels[hoverRating || rating]}
              </span>
            </div>
          </div>

          {/* Aspect Tag Selection */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Which Aspects Does Your Review Address?
            </label>
            <div className="flex flex-wrap gap-2">
              {Object.entries(aspectLabels).map(([key, info]) => {
                const isSelected = selectedAspects.includes(key);
                return (
                  <button
                    type="button"
                    key={key}
                    onClick={() => toggleAspect(key)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 border border-slate-200 hover:text-slate-900'
                    }`}
                  >
                    <span>{info.icon}</span>
                    <span>{info.name}</span>
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Your Name */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Your Name / Alias
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="e.g. Alex Tech Enthusiast"
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white"
            />
          </div>

          {/* Review Title */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
              Review Headline
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Incredible battery life & top tier ANC!"
              className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white"
            />
          </div>

          {/* Review Comment + Character Counter */}
          <div>
            <div className="flex justify-between items-center mb-1 text-xs">
              <label className="font-bold uppercase tracking-wider text-slate-500 text-[11px]">
                Detailed Review
              </label>
              <span className={`font-mono text-[11px] ${comment.length < 15 ? 'text-amber-600 font-bold' : 'text-slate-400'}`}>
                {comment.length} / 500 chars
              </span>
            </div>
            <textarea
              rows={4}
              maxLength={500}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Explain what you liked or disliked, aspect performance, and overall value..."
              className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 focus:bg-white leading-relaxed"
            />
          </div>

          {/* Submit Buttons */}
          <div className="pt-3 border-t border-slate-200 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/30 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? 'Posting Review...' : 'Submit Review'}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
