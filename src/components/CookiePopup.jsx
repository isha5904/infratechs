import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ChevronUp, Check, ShieldCheck } from 'lucide-react';
import { useCookies } from '../context/CookieContext';

export default function CookiePopup() {
  const {
    showBanner,
    dismissBanner,
    acceptAll,
    acceptEssentialOnly,
    saveConsent,
    preferences,
  } = useCookies();

  const [isCustomizing, setIsCustomizing] = useState(false);
  const [localPrefs, setLocalPrefs] = useState({
    essential: true,
    analytics: preferences.analytics,
    marketing: preferences.marketing,
  });

  if (!showBanner) return null;

  const handleSaveCustom = () => {
    saveConsent(localPrefs);
    setIsCustomizing(false);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-lg w-[calc(100%-2rem)] sm:w-auto animate-fade-in-up">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-5 md:p-6 text-slate-800 dark:text-slate-100 transition-all duration-300">
        
        {/* Header row with Title and Close X */}
        <div className="flex items-center justify-between gap-4 mb-2">
          <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            We use cookies
          </h3>
          <button
            onClick={dismissBanner}
            aria-label="Close cookie notice"
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informative text exactly matching requirement */}
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          Essential cookies keep you signed in. Analytics help us improve. Marketing helps us recommend deals. You decide.{' '}
          <Link
            to="/privacy-policy"
            className="text-sky-600 dark:text-sky-400 font-medium underline underline-offset-2 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
          >
            Privacy policy
          </Link>
        </p>

        {/* Customization Accordion Drawer */}
        {isCustomizing && (
          <div className="mb-5 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3.5 bg-slate-50/70 dark:bg-slate-800/40 p-3.5 rounded-xl">
            {/* Essential */}
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-xs text-slate-900 dark:text-white uppercase tracking-wider">
                    Essential
                  </span>
                  <span className="text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-full font-medium">
                    Always active
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Core site operation, security & theme preferences.
                </p>
              </div>
              <input
                type="checkbox"
                checked={true}
                disabled
                className="w-4 h-4 text-sky-600 rounded border-slate-300 opacity-60 cursor-not-allowed"
              />
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-200/50 dark:border-slate-700/50">
              <div>
                <span className="font-semibold text-xs text-slate-900 dark:text-white uppercase tracking-wider">
                  Analytics
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Anonymous usage metrics to optimize guides & speed.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={localPrefs.analytics}
                  onChange={(e) =>
                    setLocalPrefs({ ...localPrefs, analytics: e.target.checked })
                  }
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-slate-600 peer-checked:bg-sky-600"></div>
              </label>
            </div>

            {/* Marketing & Affiliate Deals */}
            <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-200/50 dark:border-slate-700/50">
              <div>
                <span className="font-semibold text-xs text-slate-900 dark:text-white uppercase tracking-wider">
                  Marketing & Deals
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Enables discounted affiliate coupons & referral tracking.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={localPrefs.marketing}
                  onChange={(e) =>
                    setLocalPrefs({ ...localPrefs, marketing: e.target.checked })
                  }
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-slate-600 peer-checked:bg-sky-600"></div>
              </label>
            </div>

            <button
              onClick={handleSaveCustom}
              className="w-full mt-2 py-2 px-4 rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" /> Save Preferences
            </button>
          </div>
        )}

        {/* Action Buttons Row matching Screenshot 2 */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <button
            onClick={() => setIsCustomizing(!isCustomizing)}
            className="flex items-center gap-1 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1"
          >
            Customise
            {isCustomizing ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          <div className="flex items-center gap-2.5 ml-auto">
            <button
              onClick={acceptEssentialOnly}
              className="px-4 py-2 text-sm font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
            >
              Essential only
            </button>
            <button
              onClick={acceptAll}
              className="px-5 py-2 text-sm font-semibold bg-sky-600 hover:bg-sky-500 text-white rounded-xl transition-all shadow-md shadow-sky-600/20 active:scale-[0.98]"
            >
              Accept all
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
