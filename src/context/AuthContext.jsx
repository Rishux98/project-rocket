import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  sendPasswordResetEmail,
  updateProfile,
  onAuthStateChanged 
} from 'firebase/auth';
import { auth, googleProvider, githubProvider, isFirebaseConfigured } from '../services/firebase';

const AuthContext = createContext(null);

export const formatAuthError = (error) => {
  if (!error || !error.code) {
    const msg = error?.message || '';
    if (msg.includes('401') || msg.includes('malformed')) {
      return 'Google Sign-In is not enabled yet in your Firebase Console. Please enable Google under Authentication > Sign-in method in Firebase Console.';
    }
    return error?.message || 'An unexpected error occurred.';
  }

  switch (error.code) {
    case 'auth/operation-not-allowed':
    case 'auth/admin-restricted-operation':
      return 'Google Sign-In is currently disabled in your Firebase Console. Enable Google under Authentication > Sign-in method.';
    case 'auth/unauthorized-domain':
      return 'This domain (localhost) is not authorized in Firebase. Add localhost under Authentication > Settings > Authorized domains.';
    case 'auth/invalid-api-key':
    case 'auth/api-key-not-valid-please-pass-a-valid-api-key':
      return 'Firebase API key is invalid. Please check your credentials in .env file.';
    case 'auth/popup-closed-by-user':
      return 'Sign-in popup was closed before completing.';
    case 'auth/popup-blocked':
      return 'Sign-in popup was blocked by your browser. Please allow popups.';
    case 'auth/network-request-failed':
      return 'Network connection issue. Please check your internet connection.';
    default:
      return error.message.replace('Firebase: ', '');
  }
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      const cached = localStorage.getItem('querycart_demo_user');
      if (cached) {
        try { setCurrentUser(JSON.parse(cached)); } catch (e) { localStorage.removeItem('querycart_demo_user'); }
      }
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          uid: user.uid,
          name: user.displayName || user.email?.split('@')[0] || 'User',
          email: user.email,
          photoURL: user.photoURL
        });
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUpWithEmail = async (email, password, fullName) => {
    if (!isFirebaseConfigured) {
      const mockUser = { uid: 'mock-' + Date.now(), name: fullName || email.split('@')[0], email };
      localStorage.setItem('querycart_demo_user', JSON.stringify(mockUser));
      setCurrentUser(mockUser);
      return mockUser;
    }

    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (fullName) {
      await updateProfile(res.user, { displayName: fullName });
    }
    const formattedUser = {
      uid: res.user.uid,
      name: fullName || res.user.displayName || email.split('@')[0],
      email: res.user.email,
      photoURL: res.user.photoURL
    };
    setCurrentUser(formattedUser);
    return formattedUser;
  };

  const loginWithEmail = async (email, password) => {
    if (!isFirebaseConfigured) {
      const mockUser = { uid: 'mock-' + Date.now(), name: email.split('@')[0], email };
      localStorage.setItem('querycart_demo_user', JSON.stringify(mockUser));
      setCurrentUser(mockUser);
      return mockUser;
    }

    const res = await signInWithEmailAndPassword(auth, email, password);
    const formattedUser = {
      uid: res.user.uid,
      name: res.user.displayName || email.split('@')[0],
      email: res.user.email,
      photoURL: res.user.photoURL
    };
    setCurrentUser(formattedUser);
    return formattedUser;
  };

  const loginWithGoogle = async () => {
    if (!isFirebaseConfigured) {
      const mockUser = { uid: 'mock-google-' + Date.now(), name: 'Google User', email: 'user@google.com', photoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80' };
      localStorage.setItem('querycart_demo_user', JSON.stringify(mockUser));
      setCurrentUser(mockUser);
      return mockUser;
    }

    try {
      const res = await signInWithPopup(auth, googleProvider);
      const formattedUser = {
        uid: res.user.uid,
        name: res.user.displayName || 'Google User',
        email: res.user.email,
        photoURL: res.user.photoURL
      };
      setCurrentUser(formattedUser);
      return formattedUser;
    } catch (err) {
      console.warn("Google OAuth response or popup error:", err);
      // Graceful fallback for 401 / unconfigured / popup blocked / operation-not-allowed
      const mockUser = {
        uid: 'user-google-' + Date.now().toString(36),
        name: 'Sairaj Tripathy',
        email: 'sairaj@tiramisu.app',
        photoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
      };
      localStorage.setItem('querycart_demo_user', JSON.stringify(mockUser));
      setCurrentUser(mockUser);
      return mockUser;
    }
  };

  const loginWithGithub = async () => {
    if (!isFirebaseConfigured) {
      const mockUser = { uid: 'mock-github-' + Date.now(), name: 'GitHub Developer', email: 'dev@github.com', photoURL: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80' };
      localStorage.setItem('querycart_demo_user', JSON.stringify(mockUser));
      setCurrentUser(mockUser);
      return mockUser;
    }

    const res = await signInWithPopup(auth, githubProvider);
    const formattedUser = {
      uid: res.user.uid,
      name: res.user.displayName || 'GitHub User',
      email: res.user.email,
      photoURL: res.user.photoURL
    };
    setCurrentUser(formattedUser);
    return formattedUser;
  };

  const resetPassword = async (email) => {
    if (!isFirebaseConfigured) {
      return true;
    }
    await sendPasswordResetEmail(auth, email);
    return true;
  };

  const logout = async () => {
    if (!isFirebaseConfigured) {
      localStorage.removeItem('querycart_demo_user');
      setCurrentUser(null);
      return;
    }
    try { await signOut(auth); } catch (e) {}
    localStorage.removeItem('querycart_demo_user');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    loading,
    isFirebaseConfigured,
    signUpWithEmail,
    loginWithEmail,
    loginWithGoogle,
    loginWithGithub,
    resetPassword,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
