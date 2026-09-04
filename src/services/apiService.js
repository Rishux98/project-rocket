import { mockProducts } from '../mockData/mockProducts';

// Simulated local storage for votes and user-added reviews so user state persists in frontend demo
const STORAGE_KEY_REVIEWS = 'pr_explorer_user_reviews';
const STORAGE_KEY_VOTES = 'pr_explorer_user_votes';

const getStoredReviews = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_REVIEWS) || '{}');
  } catch (e) {
    return {};
  }
};

const saveStoredReviews = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY_REVIEWS, JSON.stringify(data));
  } catch (e) {}
};

const getStoredVotes = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_VOTES) || '{}');
  } catch (e) {
    return {};
  }
};

const saveStoredVotes = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY_VOTES, JSON.stringify(data));
  } catch (e) {}
};

// Delay simulator for realistic network feedback
const delay = (ms = 180) => new Promise(resolve => setTimeout(resolve, ms));

export const apiService = {
  // Fetch All Products (with Search, Filtering, Sorting)
  async getProducts({ category = 'all', searchQuery = '', minRating = 0, priceMax = 3000, sortBy = 'rating' } = {}) {
    await delay(150);
    let result = [...mockProducts];

    // Filter by category
    if (category && category !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        Object.values(p.specs).some(val => String(val).toLowerCase().includes(q))
      );
    }

    // Filter by min rating
    if (minRating > 0) {
      result = result.filter(p => p.rating >= minRating);
    }

    // Filter by max price
    if (priceMax) {
      result = result.filter(p => p.price <= priceMax);
    }

    // Sort
    if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'reviews') {
      result.sort((a, b) => b.reviewCount - a.reviewCount);
    } else if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  },

  // Fetch Single Product + Combine with User-submitted Reviews
  async getProductById(id) {
    await delay(200);
    const product = mockProducts.find(p => p.id === id);
    if (!product) return null;

    const storedReviews = getStoredReviews()[id] || [];
    const storedVotes = getStoredVotes();

    // Merge base reviews with user added reviews
    const allReviews = [...storedReviews, ...product.reviews].map(r => {
      const userVote = storedVotes[r.id];
      let helpful = r.helpful;
      let unhelpful = r.unhelpful;
      if (userVote === 'helpful') helpful += 1;
      if (userVote === 'unhelpful') unhelpful += 1;
      return { ...r, helpful, unhelpful, userVote };
    });

    return {
      ...product,
      reviewCount: product.reviewCount + storedReviews.length,
      reviews: allReviews
    };
  },

  // Compare Route: Fetch multiple products with specs & aggregates in one call
  async getCompareProducts(ids) {
    await delay(220);
    return ids.map(id => mockProducts.find(p => p.id === id)).filter(Boolean);
  },

  // Submit a Write-Review
  async submitReview(productId, { rating, title, comment, author, aspectTags }) {
    await delay(300);
    const newReview = {
      id: `user-rev-${Date.now()}`,
      author: author || 'Verified Explorer',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
      rating: Number(rating),
      title,
      comment,
      date: new Date().toISOString().split('T')[0],
      verified: true,
      aspectTags: aspectTags || ['performance'],
      helpful: 0,
      unhelpful: 0
    };

    const stored = getStoredReviews();
    if (!stored[productId]) stored[productId] = [];
    stored[productId].unshift(newReview);
    saveStoredReviews(stored);

    return newReview;
  },

  // Vote Helpful/Unhelpful with Deduplication Log
  async voteReview(reviewId, voteType) {
    await delay(100);
    const votes = getStoredVotes();
    const currentVote = votes[reviewId];

    if (currentVote === voteType) {
      delete votes[reviewId];
    } else {
      votes[reviewId] = voteType;
    }

    saveStoredVotes(votes);
    return { reviewId, voteType: votes[reviewId] || null };
  },

  // Grounded RAG AI Q&A Engine
  async askAiQuestion(productId, question) {
    await delay(650);
    const q = question.toLowerCase();
    
    // Perform simulated semantic search over product reviews
    const targetProduct = mockProducts.find(p => p.id === productId) || mockProducts[0];
    const reviews = targetProduct.reviews;

    let matchedReviews = reviews.filter(r => 
      q.split(' ').some(word => word.length > 3 && (r.comment.toLowerCase().includes(word) || r.title.toLowerCase().includes(word)))
    );

    if (matchedReviews.length === 0) {
      matchedReviews = reviews.slice(0, 3);
    }

    const topReviews = matchedReviews.slice(0, 3);
    const citations = topReviews.map(r => ({
      id: r.id,
      author: r.author,
      rating: r.rating,
      snippet: r.comment.length > 90 ? r.comment.substring(0, 90) + '...' : r.comment
    }));

    let answer = "";
    if (q.includes("battery")) {
      answer = `Based on user reviews, the battery life is outstanding. Reviewers mention getting over 14 hours of continuous use on flights [Review #${topReviews[0]?.id || 'rev-101'}], and the 10-minute fast charging provides up to 5 hours of listening time.`;
    } else if (q.includes("build") || q.includes("quality") || q.includes("durability")) {
      answer = `Reviewers praise the premium build quality, highlighting the solid titanium/aluminum frame and memory foam comfort [Review #${topReviews[0]?.id || 'rev-103'}]. A small number of users noted a snug clamp force for larger head sizes.`;
    } else if (q.includes("sound") || q.includes("noise") || q.includes("anc") || q.includes("performance")) {
      answer = `The active noise cancellation and soundstage receive top marks [Review #${topReviews[0]?.id || 'rev-101'}]. Highs remain crisp and spatial audio works seamlessly across devices [Review #${topReviews[1]?.id || 'rev-102'}].`;
    } else {
      answer = `According to verified purchaser feedback, this product performs exceptionally well in its class. Users specifically highlight its build durability and aspect scores [Review #${topReviews[0]?.id || 'rev-101'}].`;
    }

    return {
      answer,
      citations,
      groundednessScore: 96,
      aspectBreakdown: targetProduct.aspectScores
    };
  }
};
