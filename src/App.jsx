import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { FilterSidebar } from './components/PLP/FilterSidebar';
import { ProductGrid } from './components/PLP/ProductGrid';
import { ProductDetail } from './components/PDP/ProductDetail';
import { ProductDetailSkeleton } from './components/PDP/ProductDetailSkeleton';
import { LandingPage } from './components/Landing/LandingPage';
import { CompareTray } from './components/Compare/CompareTray';
import { CompareModal } from './components/Compare/CompareModal';
import { apiService } from './services/apiService';
import { DashboardFooter } from './components/common/DashboardFooter';

export function App() {
  // Main Navigation Mode: 'landing' | 'dashboard'
  const [currentView, setCurrentView] = useState('landing');

  // Product Selection & View State
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);

  // Filter & Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [minRating, setMinRating] = useState(0);
  const [priceMax, setPriceMax] = useState(200000);
  const [sortBy, setSortBy] = useState('rating');

  // Data State
  const [products, setProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  // Compare State (Active by default with 2 items)
  const [comparedIds, setComparedIds] = useState(['prod-1', 'prod-7']);
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
      setIsLoadingDetail(false);
      return;
    }

    setIsLoadingDetail(true);
    const loadSingleProduct = async () => {
      try {
        const data = await apiService.getProductById(selectedProductId);
        if (isMounted) {
          setSelectedProduct(data);
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (isMounted) setIsLoadingDetail(false);
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
    { id: 'all', label: 'All Products', count: products.length || 45 },
    { id: 'audio', label: 'Audio', count: 10 },
    { id: 'laptops', label: 'Laptops', count: 8 },
    { id: 'wearables', label: 'Wearables', count: 8 },
    { id: 'gaming', label: 'Gaming', count: 8 },
    { id: 'cameras', label: 'Cameras', count: 6 },
    { id: 'smartphones', label: 'Smartphones', count: 5 }
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

  // Render Landing Page first if currentView === 'landing'
  if (currentView === 'landing') {
    return (
      <div className="relative">
        <LandingPage
          onExploreCatalog={handleExploreDashboard}
          onSelectProduct={handleSelectProductFromLanding}
          onOpenCompare={() => setIsCompareModalOpen(true)}
          comparedIds={comparedIds}
          onToggleCompare={handleToggleCompare}
        />

        {/* Active Sticky Bottom Compare Tray */}
        <CompareTray
          comparedProducts={comparedProducts}
          onRemoveFromCompare={(id) => setComparedIds(comparedIds.filter(i => i !== id))}
          onClearCompare={() => setComparedIds([])}
          onOpenModal={() => setIsCompareModalOpen(true)}
          onSelectProduct={(id) => handleSelectProductFromLanding(id)}
        />

        {/* Side-by-Side Compare Modal */}
        <CompareModal
          isOpen={isCompareModalOpen}
          onClose={() => setIsCompareModalOpen(false)}
          products={comparedProducts}
          onExploreCatalog={handleExploreDashboard}
          onSelectProduct={(id) => {
            setIsCompareModalOpen(false);
            handleSelectProductFromLanding(id);
          }}
        />
      </div>
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
      />

      {/* Main Page Layout Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-8">
        {selectedProductId && isLoadingDetail ? (
          /* Instant Detail Loading Skeleton */
          <ProductDetailSkeleton onBack={() => setSelectedProductId(null)} />
        ) : selectedProduct ? (
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
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              minRating={minRating}
              setMinRating={setMinRating}
              priceMax={priceMax}
              setPriceMax={setPriceMax}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
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
        onSelectProduct={(id) => setSelectedProductId(id)}
      />

      {/* Side-by-Side Compare Modal */}
      <CompareModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        products={comparedProducts}
        onExploreCatalog={() => {
          setSelectedProductId(null);
        }}
        onSelectProduct={(id) => {
          setIsCompareModalOpen(false);
          setSelectedProductId(id);
        }}
      />

      {/* Dashboard Professional Footer */}
      <DashboardFooter
        onGoLanding={() => setCurrentView('landing')}
        onOpenSignUp={() => setCurrentView('signup')}
        onResetFilters={() => {
          setSelectedCategory('all');
          setSearchQuery('');
          setMinRating(0);
          setPriceMax(200000);
          setSortBy('rating');
        }}
      />

    </div>
  );
}

export default App;
