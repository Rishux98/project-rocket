import React from 'react';
import { Rocket, Sparkles, ArrowRight, ShieldCheck, PieChart, MessageSquare, Layers, Star, ChevronRight } from 'lucide-react';
import { mockProducts } from '../../mockData/mockProducts';
import heroBg from '../../assets/thumbnail.jpg';

export const LandingPage = ({ onExploreCatalog, onSelectProduct }) => {
  const featured = mockProducts.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <Rocket className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-slate-900 to-indigo-900 bg-clip-text text-transparent">
                ReviewPulse
              </span>
              <span className="ml-2 px-2 py-0.5 text-[10px] font-bold bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-full">
                PS3 AI
              </span>
            </div>
          </div>

          <button
            onClick={onExploreCatalog}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Explore Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Hero Section with Clean Background Image */}
      <section className="relative overflow-hidden py-24 px-6 min-h-[580px] flex items-center justify-center">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Landing Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle Contrast Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900/60" />
        </div>

        {/* Hero Content Overlay */}
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 text-indigo-950 text-xs font-extrabold border border-white/50 shadow-md backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Next-Gen Product Review Intelligence & RAG Q&A</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-md">
            Explore Product Reviews with <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-300 via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Grounded AI & Aspect Sentiment
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-sm">
            Analyze thousands of buyer reviews in seconds. Interactive aspect radar charts, side-by-side spec comparison matrices, and grounded AI citations that scroll directly to verified reviews.
          </p>

          {/* CTA Group */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onExploreCatalog}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-sm shadow-xl shadow-indigo-600/40 flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Explore Product Catalogue</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => onSelectProduct(featured[0].id)}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/90 hover:bg-white text-slate-900 font-bold text-sm border border-white/60 shadow-lg backdrop-blur-md flex items-center justify-center gap-2 transition-all hover:scale-105 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Try AI Q&A Demo</span>
            </button>
          </div>

          {/* Live Metrics Bar */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/90 border border-white/60 shadow-lg backdrop-blur-md text-slate-900">
              <div className="text-2xl font-black text-indigo-600">10,000+</div>
              <div className="text-xs font-bold text-slate-600 mt-0.5">Reviews Ingested</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/90 border border-white/60 shadow-lg backdrop-blur-md text-slate-900">
              <div className="text-2xl font-black text-amber-600">99.2%</div>
              <div className="text-xs font-bold text-slate-600 mt-0.5">RAG Groundedness</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/90 border border-white/60 shadow-lg backdrop-blur-md text-slate-900">
              <div className="text-2xl font-black text-emerald-600">&lt;200ms</div>
              <div className="text-xs font-bold text-slate-600 mt-0.5">DB Aggregation Speed</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/90 border border-white/60 shadow-lg backdrop-blur-md text-slate-900">
              <div className="text-2xl font-black text-purple-600">100%</div>
              <div className="text-xs font-bold text-slate-600 mt-0.5">Vote Deduplication</div>
            </div>
          </div>

        </div>
      </section>

      {/* Feature Spotlight Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full space-y-12">
        
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Engineered for Modern Review Intelligence
          </h2>
          <p className="text-xs md:text-sm text-slate-600">
            Built from the ground up for speed, reliability, and grounded AI trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-4 hover:border-indigo-400 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <PieChart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Aspect Sentiment Radar</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Calculated 100% in MongoDB aggregation pipelines. View real-time ratings for Battery, Build, Price, Support, and Performance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-4 hover:border-indigo-400 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Grounded AI Q&A</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ask any question about a product. The AI quotes exact reviews with clickable citation badges that smooth-scroll to the source review.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-4 hover:border-indigo-400 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Side-by-Side Compare Tray</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Add up to 3 products to compare technical specs, aspect scores, and automated AI head-to-head buying advice in one view.
            </p>
          </div>

        </div>

      </section>

      {/* Featured Products Showcase */}
      <section className="py-16 px-6 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">Featured Products</h2>
              <p className="text-xs text-slate-600">Popular tech items with rich review datasets & AI analysis</p>
            </div>
            <button
              onClick={onExploreCatalog}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span>View Full Catalogue</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((product) => (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product.id)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-pointer group space-y-4 p-4"
              >
                <div className="h-44 rounded-xl overflow-hidden bg-slate-100 relative">
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-bold bg-white/90 backdrop-blur-md text-slate-800 rounded-md shadow-sm">
                    {product.category}
                  </span>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-indigo-600 font-bold uppercase">{product.brand}</span>
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-500" />
                      <span>{product.rating}</span>
                      <span className="text-slate-400 font-normal">({product.reviewCount})</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="text-lg font-extrabold text-slate-900 mt-2">${product.price}</div>
                </div>

                <button className="w-full py-2 rounded-xl bg-slate-100 hover:bg-indigo-600 text-slate-700 hover:text-white font-bold text-xs transition-all cursor-pointer">
                  Explore Reviews & AI Q&A
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-slate-200 text-center text-xs text-slate-500 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <Rocket className="w-4 h-4 text-indigo-600" />
            <span>ReviewPulse • PS3 Product Review Explorer</span>
          </div>
          <p>© 2026 Hackathon Edition. Built with React, Tailwind CSS & Recharts.</p>
        </div>
      </footer>

    </div>
  );
};
