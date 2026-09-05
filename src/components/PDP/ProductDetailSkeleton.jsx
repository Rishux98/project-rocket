import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const ProductDetailSkeleton = ({ onBack }) => {
  return (
    <div className="space-y-8 animate-pulse max-w-7xl mx-auto px-4 py-4">
      
      {/* Breadcrumb Navigation Skeleton */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-800"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Catalog
        </button>

        <div className="h-8 w-32 bg-slate-200 rounded-xl" />
      </div>

      {/* Main Top Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Gallery & Specs Skeleton */}
        <div className="lg:col-span-5 space-y-6">
          <div className="h-80 bg-slate-200 rounded-2xl w-full" />
          <div className="h-48 bg-slate-200 rounded-2xl w-full" />
        </div>

        {/* Right Column: Details, Rating, AI Panel Skeleton */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="space-y-3">
            <div className="h-4 w-32 bg-slate-200 rounded-md" />
            <div className="h-8 w-3/4 bg-slate-200 rounded-xl" />
            <div className="h-6 w-44 bg-slate-200 rounded-lg" />
            <div className="h-10 w-36 bg-slate-200 rounded-xl" />
            <div className="h-16 w-full bg-slate-200 rounded-xl" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-56 bg-slate-200 rounded-2xl" />
            <div className="h-56 bg-slate-200 rounded-2xl" />
          </div>

          <div className="h-40 bg-slate-200 rounded-2xl" />

        </div>

      </div>

      {/* Bottom Review List Skeleton */}
      <div className="pt-8 border-t border-slate-200 space-y-4">
        <div className="h-6 w-48 bg-slate-200 rounded-lg" />
        <div className="h-32 bg-slate-200 rounded-2xl" />
        <div className="h-32 bg-slate-200 rounded-2xl" />
      </div>

    </div>
  );
};
