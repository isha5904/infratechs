import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  ChevronDown, 
  Code2, 
  HelpCircle,
  ExternalLink,
  Laptop,
  Lock,
  Key,
  Flame,
  Sparkles,
  Search
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SearchModal from './SearchModal';
import { founderData } from '../data/founderData';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [disclosurePopoverOpen, setDisclosurePopoverOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const popoverRef = useRef(null);

  // Close popover on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setDisclosurePopoverOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCategoriesOpen(false);
    setDisclosurePopoverOpen(false);
  }, [location.pathname]);

  const isAffiliateActive = location.pathname === '/affiliate-disclosure';

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/95 dark:bg-slate-950/95 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600 text-white text-xs py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-[11px] font-bold tracking-wide">
              INFRATECHS.ONLINE
            </span>
            <span>
              Custom SaaS Engineering, Full-Stack Solutions & Technical Tool Benchmarks
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-sky-100 text-xs">
            <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1">
              <Code2 className="w-3.5 h-3.5" /> Request Project Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-sky-400 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  InfraTechs
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 rounded border border-sky-300 dark:border-sky-800">
                  ONLINE
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-tight">
                infratechs.online &bull; SaaS Engineering
              </p>
            </div>
          </Link>

          {/* Desktop Nav Items matching screenshot 1 */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-semibold text-slate-700 dark:text-slate-200">
            <Link
              to="/services"
              className={`hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1 ${
                location.pathname === '/services' ? 'text-sky-600 dark:text-sky-400 font-bold' : ''
              }`}
            >
              SaaS Development
            </Link>

            <Link
              to="/category/vpn"
              className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1"
            >
              VPNs
            </Link>

            <Link
              to="/category/antivirus"
              className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1"
            >
              Antivirus
            </Link>

            <Link
              to="/category/passwords"
              className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1"
            >
              Password Managers
            </Link>

            {/* Categories dropdown */}
            <div className="relative group">
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="flex items-center gap-1 hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1"
              >
                Categories
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
              </button>

              <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-2.5 hidden group-hover:block transition-all z-30">
                <Link
                  to="/category/cleaner"
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                >
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                  <div>
                    <div className="font-semibold">Wise Cleaner & PC Utilities</div>
                    <div className="text-[10px] text-slate-400">Windows disk & startup tests</div>
                  </div>
                </Link>
                <Link
                  to="/category/vpn"
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                >
                  <Lock className="w-4 h-4 text-sky-500 shrink-0" />
                  <div>
                    <div className="font-semibold">VPNs & Privacy Tunnels</div>
                    <div className="text-[10px] text-slate-400">WireGuard & dedicated IPs</div>
                  </div>
                </Link>
                <Link
                  to="/category/antivirus"
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                >
                  <Shield className="w-4 h-4 text-emerald-500 shrink-0" />
                  <div>
                    <div className="font-semibold">Antivirus & Endpoint Security</div>
                    <div className="text-[10px] text-slate-400">Zero-day malware benchmarks</div>
                  </div>
                </Link>
                <Link
                  to="/category/passwords"
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                >
                  <Key className="w-4 h-4 text-purple-500 shrink-0" />
                  <div>
                    <div className="font-semibold">Password & Secret Vaults</div>
                    <div className="text-[10px] text-slate-400">Developer CLI & passkeys</div>
                  </div>
                </Link>
                <Link
                  to="/services"
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                >
                  <Code2 className="w-4 h-4 text-indigo-500 shrink-0" />
                  <div>
                    <div className="font-semibold">SaaS MVP Engineering</div>
                    <div className="text-[10px] text-slate-400">Custom web dev services</div>
                  </div>
                </Link>
              </div>
            </div>

            <Link
              to="/blog"
              className={`hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1 ${
                location.pathname.startsWith('/blog') ? 'text-sky-600 dark:text-sky-400 font-bold' : ''
              }`}
            >
              Blog
            </Link>

            {/* Affiliate Disclosure Item with EXACT POPOVER from Screenshot 1 */}
            <div 
              ref={popoverRef}
              className="relative"
              onMouseEnter={() => setDisclosurePopoverOpen(true)}
              onMouseLeave={() => setDisclosurePopoverOpen(false)}
            >
              <Link
                to="/affiliate-disclosure"
                className={`relative py-1 font-semibold transition-colors duration-150 ${
                  isAffiliateActive
                    ? 'text-slate-900 dark:text-white font-bold'
                    : 'text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400'
                }`}
              >
                Affiliate Disclosure
                {/* Active blue indicator line matching screenshot 1 */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 transition-all duration-200 ${
                    isAffiliateActive || disclosurePopoverOpen ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`}
                />
              </Link>

              {/* Tooltip / Popover Bubble matching Screenshot 1 */}
              {disclosurePopoverOpen && (
                <div 
                  className="absolute top-full right-0 mt-3 w-80 sm:w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-4 z-50 animate-fade-in popover-arrow-up"
                >
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Currently, InfraTechs does not use active affiliate tracking links. All vendor product links are direct. In the future, should we participate in affiliate programs, we ensure 100% transparency and editorial independence.
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-400">Audited by {founderData.name}</span>
                    <Link
                      to="/affiliate-disclosure"
                      className="text-sky-600 dark:text-sky-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      Read full policy <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right actions: Search + Theme Toggle + Contact CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Search Trigger Button */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search site"
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-xs font-medium"
            >
              <Search className="w-4 h-4 text-slate-400" />
              <span className="hidden md:inline">Search...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                Ctrl+K
              </kbd>
            </button>

            {/* Theme Toggle Button matching Screenshot 1 Moon Icon */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-sky-600 hover:bg-sky-500 text-white transition-all shadow-md shadow-sky-600/20 active:scale-95"
            >
              Contact Owner
            </Link>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-3 pb-6 space-y-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            SaaS Development & Architecture
          </Link>
          <Link
            to="/blog/wise-cleaner-review-2026"
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            ⭐ Wise Cleaner In-Depth Review (2026)
          </Link>
          <Link
            to="/blog"
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Blog & Comparisons
          </Link>
          <Link
            to="/affiliate-disclosure"
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50"
          >
            Affiliate Disclosure
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Contact & Founder Details
          </Link>
          <div className="pt-2">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center py-2.5 rounded-xl bg-sky-600 text-white font-semibold text-sm shadow-md"
            >
              Get Custom Dev Consultation
            </Link>
          </div>
        </div>
      )}

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
