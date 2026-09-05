import { collection, doc, setDoc, getDocs, limit, query } from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';
import { mockProducts } from '../mockData/mockProducts';
import { fetchRainforestProducts, mapRainforestItemToQueryCart, isRainforestConfigured } from './rainforestService';

export const seedProductsToFirestore = async (forceReSeed = false) => {
  if (!isFirebaseConfigured) {
    console.log("Firebase is not configured in .env - skipping Firestore seeding.");
    return false;
  }

  try {
    const productsRef = collection(db, 'products');
    const existingSnap = await getDocs(query(productsRef, limit(1)));

    if (!existingSnap.empty && !forceReSeed) {
      console.log("Firestore products collection already contains data.");
      return true;
    }

    console.log("Seeding Firestore products collection...");

    let productsToSeed = [];

    // If Rainforest API key is active, fetch live Amazon items
    if (isRainforestConfigured) {
      const categories = [
        { name: 'audio', query: 'wireless headphones' },
        { name: 'laptops', query: 'macbook laptop' },
        { name: 'wearables', query: 'smartwatch' },
        { name: 'gaming', query: 'gaming console headset' }
      ];

      for (const cat of categories) {
        const rawResults = await fetchRainforestProducts(cat.query);
        if (rawResults && rawResults.length > 0) {
          const mapped = rawResults.slice(0, 3).map(item => mapRainforestItemToQueryCart(item, cat.name));
          productsToSeed.push(...mapped);
        }
      }
    }

    // Fallback to enriched mockProducts if Rainforest API results are empty
    if (productsToSeed.length === 0) {
      productsToSeed = mockProducts;
    }

    // Write documents to Firestore
    for (const product of productsToSeed) {
      const docRef = doc(db, 'products', product.id);
      await setDoc(docRef, {
        ...product,
        updatedAt: new Date().toISOString()
      }, { merge: true });
    }

    console.log(`Successfully seeded ${productsToSeed.length} products to Firestore.`);
    return true;
  } catch (error) {
    console.error("Error seeding Firestore:", error);
    return false;
  }
};
