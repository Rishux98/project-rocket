import React, { useState, useEffect } from 'react';
import { ArrowLeft, Star, Layers, ShieldCheck, Check } from 'lucide-react';
import { ImageGallery } from './ImageGallery';
import { SpecTable } from './SpecTable';
import { RatingBreakdown } from './RatingBreakdown';
import { AspectRadarChart } from './AspectRadarChart';
import { AiQAPanel } from '../AI/AiQAPanel';
import { ReviewList } from './ReviewList';
import { WriteReviewModal } from './WriteReviewModal';

export const ProductDetail = ({
  product,
  onBack,
  onVote,
  onSubmitReview,
  isCompared,
  onToggleCompare,
  isCompareDisabled
}) => {
  const [activeAspect, setActiveAspect] = useState('all');
  const [activeStar, setActiveStar] = useState(0);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [highlightedCitationId, setHighlightedCitationId] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.id]);

  const handleSelectCitation = (reviewId) => {
    setHighlightedCitationId(reviewId);
    setTimeout(() => {
      const el = document.getElementById(`review-${reviewId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Breadcrumb Navigation & Compare Button */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-800 hover:underline transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Product Catalog
        </button>

        <button
          onClick={() => onToggleCompare(product.id)}
          disabled={!isCompared && isCompareDisabled}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            isCompared
              ? 'bg-indigo-600 text-white border border-indigo-500 shadow-md shadow-indigo-600/20'
              : isCompareDisabled
              ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 shadow-2xs'
          }`}
        >
          {isCompared ? <Check className="w-3.5 h-3.5" /> : <Layers className="w-3.5 h-3.5" />}
          <span>{isCompared ? 'Added to Compare' : 'Add to Compare'}</span>
        </button>
      </div>

      {/* Main Top Grid: Left Gallery/Specs | Right Purchase/Aggregates/AI */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (5 Cols): Gallery & Specs */}
        <div className="lg:col-span-5 space-y-6">
          <ImageGallery images={product.images} productName={product.name} />
          <SpecTable specs={product.specs} />
        </div>

        {/* Right Column (7 Cols): Product Header, Rating Breakdown, Radar, AI Q&A */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Header Info */}
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 mb-1">
              {product.brand} • {product.category}
            </div>
            <h1 className="text-2xl lg:text-3xl font-black text-slate-900 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-1 text-sm font-extrabold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                <span>{product.rating}</span>
                <span className="text-slate-500 font-normal">({product.reviewCount} reviews)</span>
              </div>
              <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Verified In Stock
              </span>
            </div>

            <div className="flex items-baseline gap-3 mt-4">
              <span className="text-3xl font-black text-slate-900">₹{Number(product.price).toLocaleString('en-IN')}</span>
              {product.originalPrice && (
                <span className="text-sm text-slate-400 line-through">₹{Number(product.originalPrice).toLocaleString('en-IN')}</span>
              )}
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mt-3 font-normal">
              {product.description}
            </p>
          </div>

          {/* Aggregates Section: Star Breakdown & Aspect Radar side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RatingBreakdown
              rating={product.rating}
              reviewCount={product.reviewCount}
              breakdown={product.ratingBreakdown}
              activeStar={activeStar}
              onSelectStar={setActiveStar}
            />

            <AspectRadarChart
              aspectScores={product.aspectScores}
              activeAspect={activeAspect}
              onSelectAspect={setActiveAspect}
            />
          </div>

          {/* AI Q&A Panel */}
          <AiQAPanel
            productId={product.id}
            onSelectCitation={handleSelectCitation}
          />

        </div>

      </div>

      {/* Bottom Section: Full Review List */}
      <div className="pt-8 border-t border-slate-200">
        <ReviewList
          reviews={product.reviews}
          aspectScores={product.aspectScores}
          activeAspect={activeAspect}
          onSelectAspect={setActiveAspect}
          activeStar={activeStar}
          onSelectStar={setActiveStar}
          onVote={onVote}
          onOpenWriteReview={() => setIsWriteModalOpen(true)}
          highlightedId={highlightedCitationId}
        />
      </div>

      {/* Write a Review Modal */}
      <WriteReviewModal
        isOpen={isWriteModalOpen}
        onClose={() => setIsWriteModalOpen(false)}
        onSubmit={onSubmitReview}
        productName={product.name}
      />

    </div>
  );
};
