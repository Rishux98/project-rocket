import React from 'react';
import { Rocket, Sparkles, ArrowRight, ShieldCheck, PieChart, MessageSquare, Layers, Star, ChevronRight, Mail, User as UserIcon } from 'lucide-react';
import { mockProducts, aspectLabels } from '../../mockData/mockProducts';
import heroBg from '../../assets/thumbnail.jpg';

export const LandingPage = ({ onExploreCatalog, onSelectProduct, onOpenSignUp, currentUser }) => {
  const featured = mockProducts.slice(0, 3);

  // 1. Scroll Position State (Thumbnail Fades Away while scrolling down)
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroBgOpacity = Math.max(0, 1 - scrollY / 420);
  const heroBgScale = 1 + (scrollY / 1000);

  // 2. Typewriter "Writing" Text Effect for Hero Headline
  const fullPart1 = "Product Reviews, ";
  const fullPart2 = "Instant AI Insights";
  const [typedLength, setTypedLength] = React.useState(0);

  React.useEffect(() => {
    const totalLength = fullPart1.length + fullPart2.length;
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setTypedLength(current);
      if (current >= totalLength) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const typedPart1 = fullPart1.slice(0, Math.min(typedLength, fullPart1.length));
  const typedPart2 = typedLength > fullPart1.length ? fullPart2.slice(0, typedLength - fullPart1.length) : "";
  const isTypingComplete = typedLength >= fullPart1.length + fullPart2.length;

  // 3. Scroll Pop-In Trigger for Feature Sections & Cards
  const [featuresVisible, setFeaturesVisible] = React.useState(false);
  const [showcaseVisible, setShowcaseVisible] = React.useState(false);
  const featuresRef = React.useRef(null);
  const showcaseRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === featuresRef.current && entry.isIntersecting) {
            setFeaturesVisible(true);
          }
          if (entry.target === showcaseRef.current && entry.isIntersecting) {
            setShowcaseVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (featuresRef.current) observer.observe(featuresRef.current);
    if (showcaseRef.current) observer.observe(showcaseRef.current);

    return () => observer.disconnect();
  }, []);

  // Dynamic metrics computed from dataset
  const totalReviews = mockProducts.reduce((sum, p) => sum + (p.reviewCount || p.reviews?.length || 0), 0);
  const avgRating = (mockProducts.reduce((sum, p) => sum + p.rating, 0) / mockProducts.length).toFixed(1);
  const allReviews = mockProducts.flatMap(p => p.reviews || []);
  const verifiedPercent = allReviews.length > 0 
    ? Math.round((allReviews.filter(r => r.verified).length / allReviews.length) * 100) 
    : 95;
  const totalProducts = mockProducts.length;

  // Animated counter state
  const [animatedCount, setAnimatedCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = totalReviews;
    const duration = 1000;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = Math.max(1, Math.ceil(end / steps));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setAnimatedCount(end);
        clearInterval(timer);
      } else {
        setAnimatedCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [totalReviews]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      
      {/* Top Navbar with Frosted Glass Blur Effect */}
      <header className="sticky top-0 z-50 bg-white/75 backdrop-blur-lg border-b border-slate-200/80 px-6 py-4 shadow-sm transition-all duration-200">
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
                AI Powered
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {currentUser ? (
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800">
                <UserIcon className="w-4 h-4 text-indigo-600" />
                <span>{currentUser.name}</span>
              </div>
            ) : (
              <button
                onClick={onOpenSignUp}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200/80 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <UserIcon className="w-4 h-4 text-indigo-600" />
                <span>Sign Up / Log In</span>
              </button>
            )}

            <button
              onClick={onExploreCatalog}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Explore Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Scroll Fade Away Background Thumbnail */}
      <section className="relative overflow-hidden py-24 px-6 min-h-[580px] flex items-center justify-center bg-slate-950">
        
        {/* Background Image Container (Fades Away as user scrolls down) */}
        <div 
          className="absolute inset-0 z-0 transition-opacity duration-100 ease-out"
          style={{ 
            opacity: heroBgOpacity,
            transform: `scale(${heroBgScale})`
          }}
        >
          <img
            src={heroBg}
            alt="Landing Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle Contrast Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900/60" />
        </div>

        {/* Hero Content Overlay */}
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-5">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 text-indigo-950 text-xs font-bold border border-white/50 shadow-md backdrop-blur-md animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>AI Product Review Intelligence</span>
          </div>

          {/* Main Title with Writing / Typewriter Effect */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md min-h-[1.25em]">
            {typedPart1} <br className="hidden sm:inline" />
            {typedPart2 && (
              <span className="bg-gradient-to-r from-amber-300 via-indigo-200 to-purple-200 bg-clip-text text-transparent">
                {typedPart2}
              </span>
            )}
            {!isTypingComplete && (
              <span className="inline-block w-1.5 h-8 md:h-12 ml-1 bg-amber-400 animate-pulse align-middle rounded-full" />
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-slate-100 max-w-xl mx-auto leading-normal font-medium drop-shadow-sm transition-all duration-700">
            Analyze thousands of customer reviews in seconds with grounded AI Q&A, aspect ratings, and side-by-side spec comparisons.
          </p>

          {/* CTA Group */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onExploreCatalog}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-xl shadow-indigo-600/40 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Explore Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onSelectProduct(featured[0].id)}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/90 hover:bg-white text-slate-900 font-bold text-xs border border-white/60 shadow-lg backdrop-blur-md flex items-center justify-center gap-2 transition-all hover:scale-105 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Try AI Demo</span>
            </button>
          </div>

          {/* Live Dynamic Metrics Bar (Pops in) */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="p-3.5 rounded-xl bg-white/90 border border-white/60 shadow-md backdrop-blur-md text-slate-900 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="text-xl md:text-2xl font-black text-indigo-600">
                {animatedCount.toLocaleString()}+
              </div>
              <div className="text-[11px] font-bold text-slate-600 mt-0.5">Total Reviews</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/90 border border-white/60 shadow-lg backdrop-blur-md text-slate-900 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="text-xl md:text-2xl font-black text-amber-600">
                {verifiedPercent}%
              </div>
              <div className="text-[11px] font-bold text-slate-600 mt-0.5">Verified Buyers</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/90 border border-white/60 shadow-lg backdrop-blur-md text-slate-900 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="text-xl md:text-2xl font-black text-emerald-600">
                {avgRating} ★
              </div>
              <div className="text-[11px] font-bold text-slate-600 mt-0.5">Avg Rating Score</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/90 border border-white/60 shadow-lg backdrop-blur-md text-slate-900 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="text-xl md:text-2xl font-black text-purple-600">
                {totalProducts} Items
              </div>
              <div className="text-[11px] font-bold text-slate-600 mt-0.5">Catalog Products</div>
            </div>
          </div>

        </div>
      </section>

      {/* Feature Spotlight Section (Pops in on scroll) */}
      <section 
        ref={featuresRef}
        className={`py-14 px-6 max-w-7xl mx-auto w-full space-y-10 transition-all duration-700 ease-out transform ${
          featuresVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-12 scale-95 opacity-0'
        }`}
      >
        
        <div className="text-center space-y-1.5 max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Powerful Review Tools
          </h2>
          <p className="text-xs md:text-sm text-slate-600">
            Built for speed, precision, and verified AI trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-indigo-400 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <PieChart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Aspect Sentiment Radar</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Real-time ratings for Battery, Build, Price, Support, and Performance powered by fast database aggregation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-indigo-400 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Grounded AI Q&A</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ask questions and get instant answers with direct citations that scroll straight to verified customer reviews.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-indigo-400 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Compare Matrix</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Compare up to 3 products side-by-side with specs, aspect radar scores, and automated AI buying advice.
            </p>
          </div>

        </div>

      </section>

      {/* Featured Products Showcase (Pops in on scroll) */}
      <section 
        ref={showcaseRef}
        className={`py-14 px-6 bg-slate-100 border-t border-b border-slate-200 transition-all duration-700 ease-out transform ${
          showcaseVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-12 scale-95 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto space-y-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-extrabold text-slate-900">Featured Products</h2>
              <p className="text-xs text-slate-600">Top items with rich review datasets & AI analysis</p>
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
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all cursor-pointer group space-y-3 p-4"
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
                  <div className="text-lg font-extrabold text-slate-900 mt-1">₹{Number(product.price).toLocaleString('en-IN')}</div>
                </div>

                <button className="w-full py-2 rounded-xl bg-slate-100 hover:bg-indigo-600 text-slate-700 hover:text-white font-bold text-xs transition-all cursor-pointer">
                  View AI Insights
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Premium Multi-Column Footer */}
      <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 mt-auto pt-14 pb-10 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Brand & Newsletter Column (Spans 2 columns) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
                  <Rocket className="w-4 h-4 animate-pulse" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-xl tracking-tight text-white">
                    ReviewPulse
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full">
                    AI Powered
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-medium">
                Next-generation product review intelligence powered by grounded RAG AI, aspect sentiment radar, and side-by-side spec comparison matrices.
              </p>

              {/* Newsletter Subscription Box */}
              <div className="pt-2 max-w-sm space-y-2">
                <div className="text-[11px] font-bold text-slate-200">Subscribe to Review Updates</div>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="email"
                      placeholder="Enter your email..."
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-800 focus:border-indigo-500 text-xs text-white placeholder-slate-500 focus:outline-none transition-all"
                    />
                  </div>
                  <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/30 transition-all cursor-pointer">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Column 2: Platform Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200">Platform Features</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={onExploreCatalog} className="hover:text-indigo-400 transition-colors cursor-pointer">Aspect Radar</button></li>
                <li><button onClick={onExploreCatalog} className="hover:text-indigo-400 transition-colors cursor-pointer">Grounded AI Q&A</button></li>
                <li><button onClick={onExploreCatalog} className="hover:text-indigo-400 transition-colors cursor-pointer">Side-by-Side Compare</button></li>
                <li><button onClick={onExploreCatalog} className="hover:text-indigo-400 transition-colors cursor-pointer">Spec Matrix</button></li>
                <li><button onClick={onExploreCatalog} className="hover:text-indigo-400 transition-colors cursor-pointer">Verified Citations</button></li>
              </ul>
            </div>

            {/* Column 3: Tech Categories */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200">Categories</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={onExploreCatalog} className="hover:text-indigo-400 transition-colors cursor-pointer">Wireless Audio</button></li>
                <li><button onClick={onExploreCatalog} className="hover:text-indigo-400 transition-colors cursor-pointer">OLED Laptops</button></li>
                <li><button onClick={onExploreCatalog} className="hover:text-indigo-400 transition-colors cursor-pointer">Fitness Wearables</button></li>
                <li><button onClick={onExploreCatalog} className="hover:text-indigo-400 transition-colors cursor-pointer">Gaming Keyboards</button></li>
                <li><button onClick={onExploreCatalog} className="hover:text-indigo-400 transition-colors cursor-pointer">4K Mirrorless Cameras</button></li>
              </ul>
            </div>

            {/* Column 4: Account & Legal */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-200">Account & Docs</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={onOpenSignUp} className="hover:text-indigo-400 transition-colors cursor-pointer">Sign Up Free</button></li>
                <li><button onClick={onOpenSignUp} className="hover:text-indigo-400 transition-colors cursor-pointer">Member Log In</button></li>
                <li><a href="#privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
                <li><a href="#api" className="hover:text-indigo-400 transition-colors">RAG API Docs</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar & Credits */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-semibold text-slate-300">All Systems Operational</span>
              <span className="text-slate-700">•</span>
              <span>© 2026 ReviewPulse. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-4">
              <span>Built with React 19, Tailwind CSS & Recharts</span>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer font-bold"
                title="Back to Top"
              >
                ↑ Top
              </button>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};
