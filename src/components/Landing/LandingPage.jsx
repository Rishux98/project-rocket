import React from 'react';
import { ShoppingCart, Sparkles, ArrowRight, ShieldCheck, PieChart, MessageSquare, Layers, Star, ChevronRight, User as UserIcon, Check, Award, TrendingUp } from 'lucide-react';
import { mockProducts } from '../../mockData/mockProducts';
import heroBg from '../../assets/thumbnail.jpg';

export const LandingPage = ({ onExploreCatalog, onSelectProduct, onOpenSignUp, currentUser, onOpenCompare, comparedIds = [], onToggleCompare }) => {
  const featured = mockProducts.slice(0, 3);

  // Dynamic metrics computed from dataset
  const totalReviews = mockProducts.reduce((sum, p) => sum + (p.reviewCount || p.reviews?.length || 0), 0);
  const avgRating = (mockProducts.reduce((sum, p) => sum + p.rating, 0) / mockProducts.length).toFixed(1);
  const totalProducts = mockProducts.length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Navbar Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={onExploreCatalog}>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30 group-hover:scale-105 transition-transform duration-300">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <span className="font-black text-xl tracking-tight text-slate-900 leading-none">
              Query<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Cart</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {onOpenCompare && (
              <button
                onClick={onOpenCompare}
                className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200 shadow-2xs flex items-center gap-2 transition-all cursor-pointer hover:border-slate-300"
              >
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>Compare Tray ({comparedIds.length})</span>
              </button>
            )}

            <button
              onClick={onExploreCatalog}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-xs shadow-md shadow-indigo-600/25 flex items-center gap-2 transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>Browse Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Photo as Background with 100% Clarity & Light Aesthetic */}
      <section className="relative overflow-hidden py-20 lg:py-28 px-6 border-b border-slate-200/80">
        
        {/* Full Background Photo Layer - Sharp, Crisp, Vivid */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Shopping Intelligence Background"
            className="w-full h-full object-cover brightness-105 contrast-105 scale-105 hover:scale-100 transition-transform duration-1000"
          />
          {/* Subtle Light Glass Overlay for Legibility without Darkening/Obscuring Photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Left Column: Hero Content Card with Light Glassmorphism */}
          <div className="lg:col-span-7 space-y-6 text-left scroll-pop-in">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900 drop-shadow-xs">
              Product Reviews, <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Instant AI Insights
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 max-w-xl leading-relaxed font-semibold">
              Analyze thousands of customer reviews in seconds with grounded RAG AI Q&A, aspect sentiment ratings, and side-by-side spec comparison matrices.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onExploreCatalog}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2.5 transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onOpenCompare}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/90 hover:bg-white text-slate-900 font-extrabold text-xs border border-slate-300 shadow-lg backdrop-blur-md flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-105"
              >
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>Launch Compare Matrix</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Feature Cards Section - Clean Light Aesthetics */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full space-y-10">
        
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Core Intelligence Tools
          </h2>
          <p className="text-xs md:text-sm text-slate-600 font-medium">
            Designed for speed, evidence-backed citations, and clear decision making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3">
            <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 shadow-2xs">
              <PieChart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900">Aspect Sentiment Radar</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Real-time rating breakdowns for Battery, Build Quality, Price, and Performance based on verified buyer feedback.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3">
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100 shadow-2xs">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900">Grounded AI Q&A</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Ask questions about any product and receive answers backed by direct citations that scroll directly to verified customer reviews.
            </p>
          </div>

          {/* Card 3 */}
          <div 
            onClick={onOpenCompare}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 cursor-pointer group hover:border-indigo-300"
          >
            <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100 shadow-2xs">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900 flex items-center justify-between">
              <span>Compare Matrix</span>
              <span className="text-xs text-indigo-600 font-bold group-hover:translate-x-1 transition-transform">Open →</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Compare up to 3 products side-by-side with dynamic spec matrices, aspect scores, and automated winner medals.
            </p>
          </div>

        </div>

      </section>

      {/* Featured Catalog Section */}
      <section className="py-14 px-6 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-6">
          
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-slate-900">Top Rated Products</h2>
              <p className="text-xs text-slate-500 font-medium">Popular tech items with customer review data</p>
            </div>
            <button
              onClick={onExploreCatalog}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
            >
              <span>Full Catalog</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((product) => (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product.id)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer p-4 space-y-3 hover:border-indigo-300"
              >
                <div className="h-48 rounded-xl overflow-hidden bg-slate-100 relative border border-slate-100">
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-1 text-[10px] font-bold bg-white/95 text-slate-800 rounded-md border border-slate-200 shadow-xs">
                    {product.category}
                  </span>
                  {onToggleCompare && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleCompare(product.id);
                      }}
                      className={`absolute top-2.5 right-2.5 p-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer shadow-xs ${
                        comparedIds.includes(product.id)
                          ? 'bg-indigo-600 text-white border-indigo-500'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {comparedIds.includes(product.id) ? <Check className="w-3.5 h-3.5" /> : <Layers className="w-3.5 h-3.5" />}
                    </button>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-indigo-600 font-bold uppercase tracking-wider text-[11px]">{product.brand}</span>
                    <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{product.rating}</span>
                      <span className="text-slate-400 font-normal">({product.reviewCount})</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900 line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="text-base font-extrabold text-slate-900 mt-1">₹{Number(product.price).toLocaleString('en-IN')}</div>
                </div>

                <button className="w-full py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white font-extrabold text-xs transition-colors cursor-pointer">
                  View Product & AI Q&A
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Light Clean Footer */}
      <footer className="bg-white text-slate-600 text-xs border-t border-slate-200 mt-auto py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-xs shadow-sm">
              Q
            </div>
            <span className="font-extrabold text-slate-900 text-sm">QueryCart</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500 font-medium">© 2026 QueryCart. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 font-semibold">
            <button onClick={onExploreCatalog} className="hover:text-indigo-600 transition-colors cursor-pointer">Products</button>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-indigo-600 transition-colors cursor-pointer">Back to Top ↑</button>
          </div>
        </div>
      </footer>

    </div>
  );
};

