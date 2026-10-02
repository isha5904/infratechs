import React, { createContext, useContext, useState, useEffect } from 'react';

const CookieContext = createContext();

const COOKIE_STORAGE_KEY = 'sv_cookie_consent_v1';

export function CookieProvider({ children }) {
  const [hasConsented, setHasConsented] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setPreferences(parsed);
        setHasConsented(true);
        setShowBanner(false);
      } else {
        // Small delay so it animates in smoothly
        const timer = setTimeout(() => {
          setShowBanner(true);
        }, 600);
        return () => clearTimeout(timer);
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (prefs) => {
    const finalPrefs = { ...prefs, essential: true };
    setPreferences(finalPrefs);
    setHasConsented(true);
    setShowBanner(false);
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(finalPrefs));
    } catch (e) {
      console.error(e);
    }
  };

  const acceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const acceptEssentialOnly = () => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const dismissBanner = () => {
    setShowBanner(false);
  };

  const openCookiePreferences = () => {
    setShowBanner(true);
  };

  return (
    <CookieContext.Provider
      value={{
        showBanner,
        setShowBanner,
        hasConsented,
        preferences,
        acceptAll,
        acceptEssentialOnly,
        saveConsent,
        dismissBanner,
        openCookiePreferences,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
}

export function useCookies() {
  const context = useContext(CookieContext);
  if (!context) throw new Error('useCookies must be used within CookieProvider');
  return context;
}
