import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { FilterSidebar } from './components/PLP/FilterSidebar';
import { ProductGrid } from './components/PLP/ProductGrid';
import { ProductDetail } from './components/PDP/ProductDetail';
import { LandingPage } from './components/Landing/LandingPage';
import { SignUpPage } from './components/Auth/SignUpPage';
import { CompareTray } from './components/Compare/CompareTray';
import { CompareModal } from './components/Compare/CompareModal';
import { apiService } from './services/apiService';
import { Sparkles } from 'lucide-react';

export function App() {
  // Main Navigation Mode: 'landing' | 'dashboard' | 'signup'
  const [currentView, setCurrentView] = useState('landing');
  const [currentUser, setCurrentUser] = useState(null);

  // Product Selection & View State
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter & Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [minRating, setMinRating] = useState(0);
  const [priceMax, setPriceMax] = useState(200000);
  const [sortBy, setSortBy] = useState('rating');

  // Data State
  const [products, setProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  // Compare State
  const [comparedIds, setComparedIds] = useState([]);
  const [comparedProducts, setComparedProducts] = useState([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Initial Load & Filter Fetching
  useEffect(() => {
    let isMounted = true;
    const loadProducts = async () => {
      setIsLoadingProducts(true);
      try {
        const data = await apiService.getProducts({
          category: selectedCategory,
          searchQuery,
          minRating,
          priceMax,
          sortBy
        });
        if (isMounted) {
          setProducts(data);
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (isMounted) setIsLoadingProducts(false);
      }
    };

    loadProducts();
    return () => { isMounted = false; };
  }, [selectedCategory, searchQuery, minRating, priceMax, sortBy]);

  // Load Single Product Detail when selected
  useEffect(() => {
    let isMounted = true;
    if (!selectedProductId) {
      setSelectedProduct(null);
      return;
    }

    const loadSingleProduct = async () => {
      try {
        const data = await apiService.getProductById(selectedProductId);
        if (isMounted) {
          setSelectedProduct(data);
        }
      } catch (e) {
        console.error(e);
      }
    };

    loadSingleProduct();
    return () => { isMounted = false; };
  }, [selectedProductId]);

  // Load Compare Products details when IDs change
  useEffect(() => {
    let isMounted = true;
    if (comparedIds.length === 0) {
      setComparedProducts([]);
      return;
    }

    const loadCompareData = async () => {
      try {
        const data = await apiService.getCompareProducts(comparedIds);
        if (isMounted) setComparedProducts(data);
      } catch (e) {
        console.error(e);
      }
    };

    loadCompareData();
    return () => { isMounted = false; };
  }, [comparedIds]);

  // Categories list for FilterSidebar
  const categories = [
    { id: 'all', label: 'All Products', count: 30 },
    { id: 'audio', label: 'Audio', count: 6 },
    { id: 'laptops', label: 'Laptops', count: 5 },
    { id: 'wearables', label: 'Wearables', count: 5 },
    { id: 'gaming', label: 'Gaming', count: 5 },
    { id: 'cameras', label: 'Cameras', count: 5 },
    { id: 'smartphones', label: 'Smartphones', count: 4 }
  ];

  // Compare Toggle Handler
  const handleToggleCompare = (id) => {
    if (comparedIds.includes(id)) {
      setComparedIds(comparedIds.filter(i => i !== id));
    } else {
      if (comparedIds.length < 3) {
        setComparedIds([...comparedIds, id]);
      }
    }
  };

  // Vote Handler for PDP Reviews
  const handleVote = async (reviewId, voteType) => {
    if (!selectedProduct) return;

    setSelectedProduct(prev => {
      if (!prev) return null;
      const updatedReviews = prev.reviews.map(r => {
        if (r.id === reviewId) {
          const isSameVote = r.userVote === voteType;
          let helpful = r.helpful;
          let unhelpful = r.unhelpful;

          if (r.userVote === 'helpful') helpful -= 1;
          if (r.userVote === 'unhelpful') unhelpful -= 1;

          if (!isSameVote) {
            if (voteType === 'helpful') helpful += 1;
            if (voteType === 'unhelpful') unhelpful += 1;
          }

          return {
            ...r,
            helpful: Math.max(0, helpful),
            unhelpful: Math.max(0, unhelpful),
            userVote: isSameVote ? null : voteType
          };
        }
        return r;
      });
      return { ...prev, reviews: updatedReviews };
    });

    try {
      await apiService.voteReview(reviewId, voteType);
    } catch (e) {
      console.error(e);
    }
  };

  // Submit Review Handler
  const handleSubmitReview = async (reviewData) => {
    if (!selectedProductId) return;
    await apiService.submitReview(selectedProductId, reviewData);
    const updated = await apiService.getProductById(selectedProductId);
    setSelectedProduct(updated);
  };

  // Reset Filters
  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setMinRating(0);
    setPriceMax(200000);
    setSortBy('rating');
  };

  // Navigation triggers
  const handleExploreDashboard = () => {
    setCurrentView('dashboard');
    setSelectedProductId(null);
  };

  const handleSelectProductFromLanding = (id) => {
    setCurrentView('dashboard');
    setSelectedProductId(id);
  };

  // Render Sign Up Page
  if (currentView === 'signup') {
    return (
      <SignUpPage
        currentUser={currentUser}
        onSignUpSuccess={(user) => {
          setCurrentUser(user);
          setCurrentView('dashboard');
        }}
        onBackToLanding={() => setCurrentView('landing')}
        onGoDashboard={() => setCurrentView('dashboard')}
      />
    );
  }

  // Render Landing Page first if currentView === 'landing'
  if (currentView === 'landing') {
    return (
      <LandingPage
        currentUser={currentUser}
        onOpenSignUp={() => setCurrentView('signup')}
        onExploreCatalog={handleExploreDashboard}
        onSelectProduct={handleSelectProductFromLanding}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Global Navbar Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        compareCount={comparedIds.length}
        onOpenCompare={() => setIsCompareModalOpen(true)}
        onGoHome={() => setSelectedProductId(null)}
        onGoLanding={() => setCurrentView('landing')}
        currentUser={currentUser}
        onOpenSignUp={() => setCurrentView('signup')}
      />

      {/* Main Page Layout Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-8">
        {selectedProduct ? (
          /* Product Detail View (PDP) */
          <ProductDetail
            product={selectedProduct}
            onBack={() => setSelectedProductId(null)}
            onVote={handleVote}
            onSubmitReview={handleSubmitReview}
            isCompared={comparedIds.includes(selectedProduct.id)}
            onToggleCompare={handleToggleCompare}
            isCompareDisabled={comparedIds.length >= 3}
          />
        ) : (
          /* Product Listing View (PLP) */
          <div className="flex flex-col lg:flex-row gap-8">
            <FilterSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              minRating={minRating}
              setMinRating={setMinRating}
              priceMax={priceMax}
              setPriceMax={setPriceMax}
              sortBy={sortBy}
              setSortBy={setSortBy}
              onResetFilters={handleResetFilters}
            />

            <ProductGrid
              products={products}
              isLoading={isLoadingProducts}
              onSelectProduct={(id) => setSelectedProductId(id)}
              comparedIds={comparedIds}
              onToggleCompare={handleToggleCompare}
              onResetFilters={handleResetFilters}
            />
          </div>
        )}
      </main>

      {/* Sticky Bottom Compare Tray */}
      <CompareTray
        comparedProducts={comparedProducts}
        onRemoveFromCompare={(id) => setComparedIds(comparedIds.filter(i => i !== id))}
        onClearCompare={() => setComparedIds([])}
        onOpenModal={() => setIsCompareModalOpen(true)}
      />

      {/* Side-by-Side Compare Modal */}
      <CompareModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        products={comparedProducts}
        onSelectProduct={(id) => {
          setIsCompareModalOpen(false);
          setSelectedProductId(id);
        }}
      />

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 px-4 text-center text-xs text-slate-500 space-y-2 mt-12 bg-white shadow-xs">
        <div className="flex items-center justify-center gap-2 font-bold text-slate-700">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>PS3 Product Review Explorer & Q&A Platform</span>
        </div>
        <p>Built with React 19, Tailwind CSS, Recharts & Abstracted API Layer.</p>
      </footer>

    </div>
  );
}

export default App;
