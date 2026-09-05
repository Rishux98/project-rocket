// Rainforest API Client & Data Mapper
const RAINFOREST_BASE_URL = 'https://api.rainforestapi.com/request';

export const isRainforestConfigured = Boolean(
  import.meta.env.VITE_RAINFOREST_API_KEY &&
  import.meta.env.VITE_RAINFOREST_API_KEY !== 'your_rainforest_api_key_here'
);

/**
 * Fetch products from Amazon via Rainforest API (Search Query)
 */
export async function fetchRainforestProducts(searchTerm = 'electronics') {
  const apiKey = import.meta.env.VITE_RAINFOREST_API_KEY;
  if (!apiKey || apiKey === 'your_rainforest_api_key_here') {
    console.warn("Rainforest API key missing in .env - returning default dataset");
    return null;
  }

  try {
    const params = new URLSearchParams({
      api_key: apiKey,
      type: 'search',
      amazon_domain: 'amazon.com',
      search_term: searchTerm
    });

    const response = await fetch(`${RAINFOREST_BASE_URL}?${params.toString()}`);
    if (!response.ok) {
      throw new Error(`Rainforest API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.search_results || [];
  } catch (error) {
    console.error("Failed to fetch search results from Rainforest API:", error);
    return null;
  }
}

/**
 * Fetch single product details by ASIN via Rainforest API (type=product)
 */
export async function fetchRainforestSingleProduct(asin = 'B073JYC4XM') {
  const apiKey = import.meta.env.VITE_RAINFOREST_API_KEY;
  if (!apiKey || apiKey === 'your_rainforest_api_key_here' || !asin) {
    return null;
  }

  try {
    const params = new URLSearchParams({
      api_key: apiKey,
      type: 'product',
      amazon_domain: 'amazon.com',
      asin: asin
    });

    const response = await fetch(`${RAINFOREST_BASE_URL}?${params.toString()}`);
    if (!response.ok) return null;

    const data = await response.json();
    const product = data.product;
    if (!product) return null;

    return {
      id: product.asin,
      asin: product.asin,
      name: product.title,
      brand: product.brand || product.title?.split(' ')[0] || 'Brand',
      category: 'audio',
      price: product.buybox_winner?.price?.value ? Math.round(product.buybox_winner.price.value * 80) : 25000,
      originalPrice: product.buybox_winner?.rrp?.value ? Math.round(product.buybox_winner.rrp.value * 80) : 30000,
      rating: product.rating || 4.6,
      reviewCount: product.ratings_total || 540,
      images: product.images?.map(img => img.link) || [product.main_image?.link],
      description: product.description || product.feature_bullets_flat || `${product.title} - High fidelity product sourced directly via Rainforest API.`,
      specs: {
        "Brand": product.brand || 'Premium',
        "ASIN": product.asin,
        "Model": product.model_number || 'N/A',
        "Rating": `${product.rating || 4.6} / 5.0`,
        "Availability": product.buybox_winner?.availability?.raw || "In Stock"
      },
      aspectScores: [
        { aspect: 'sound', score: 4.8 },
        { aspect: 'battery', score: 4.7 },
        { aspect: 'build', score: 4.6 },
        { aspect: 'price', score: 4.3 }
      ],
      reviews: []
    };
  } catch (error) {
    console.error("Failed to fetch single product from Rainforest API:", error);
    return null;
  }
}

/**
 * Fetch customer reviews for a specific ASIN via Rainforest API (type=reviews)
 */
export async function fetchRainforestReviews(asin) {
  const apiKey = import.meta.env.VITE_RAINFOREST_API_KEY;
  if (!apiKey || apiKey === 'your_rainforest_api_key_here' || !asin) {
    return [];
  }

  try {
    const params = new URLSearchParams({
      api_key: apiKey,
      type: 'reviews',
      amazon_domain: 'amazon.com',
      asin: asin
    });

    const response = await fetch(`${RAINFOREST_BASE_URL}?${params.toString()}`);
    if (!response.ok) return [];

    const data = await response.json();
    return (data.reviews || []).map(r => ({
      id: r.id || `rf-${r.asin}-${Math.random().toString(36).substr(2, 6)}`,
      author: r.profile?.name || 'Verified Amazon Buyer',
      avatar: r.profile?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      rating: r.rating || 5,
      title: r.title || 'Great Product',
      comment: r.body || r.snippet || '',
      date: r.date?.raw || new Date().toISOString().split('T')[0],
      verified: r.verified_purchase ?? true,
      aspectTags: ['performance', 'build quality'],
      helpful: r.helpful_votes || 0,
      unhelpful: 0
    }));
  } catch (error) {
    console.error("Failed to fetch Rainforest reviews:", error);
    return [];
  }
}

/**
 * Convert Rainforest search item into QueryCart product format
 */
export function mapRainforestItemToQueryCart(item, category = 'electronics') {
  return {
    id: item.asin || `rf-prod-${Math.random().toString(36).substr(2, 6)}`,
    asin: item.asin,
    name: item.title,
    brand: item.brand || item.title?.split(' ')[0] || 'Brand',
    category: category,
    price: item.price?.value ? Math.round(item.price.value * 80) : 15000,
    originalPrice: item.price?.raw ? Math.round(item.price.value * 95) : 18000,
    rating: item.rating || 4.5,
    reviewCount: item.ratings_total || 250,
    images: item.image ? [item.image] : ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80'],
    description: item.snippet || `${item.title} - Authentic high performance technology sourced from Rainforest Amazon API.`,
    specs: {
      "Brand": item.brand || 'Premium',
      "ASIN": item.asin || 'N/A',
      "Rating": `${item.rating || 4.5} / 5.0`,
      "Availability": item.availability?.raw || "In Stock",
      "Delivery": "Prime Express Shipping"
    },
    aspectScores: [
      { aspect: 'sound', score: 4.7 },
      { aspect: 'battery', score: 4.6 },
      { aspect: 'build', score: 4.5 },
      { aspect: 'price', score: 4.2 }
    ],
    reviews: []
  };
}
