import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  ChevronDown, 
  Laptop, 
  Search,
  Database,
  HardDrive,
  Smartphone,
  FileText,
  Lock,
  Sparkles,
  Cpu,
  Terminal,
  ExternalLink,
  BookOpen,
  Scale,
  Award
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SearchModal from './SearchModal';
import { siteConfig } from '../data/founderData';
import { publishedCategories } from '../data/categoriesData';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [softwareDropdownOpen, setSoftwareDropdownOpen] = useState(false);
  const [disclosurePopoverOpen, setDisclosurePopoverOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const popoverRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSoftwareDropdownOpen(false);
    setDisclosurePopoverOpen(false);
  }, [location.pathname]);

  // Click outside to close popover
  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setDisclosurePopoverOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Database': return <Database className="w-4 h-4 text-emerald-500" />;
      case 'HardDrive': return <HardDrive className="w-4 h-4 text-sky-500" />;
      case 'Smartphone': return <Smartphone className="w-4 h-4 text-indigo-500" />;
      case 'FileText': return <FileText className="w-4 h-4 text-rose-500" />;
      case 'Shield': return <Lock className="w-4 h-4 text-amber-500" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-purple-500" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-cyan-500" />;
      case 'Terminal': return <Terminal className="w-4 h-4 text-blue-500" />;
      default: return <Laptop className="w-4 h-4 text-slate-500" />;
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/95 dark:bg-slate-950/95 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          
          {/* Logo & Editorial Identity */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Infratechs
              </span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-tight">
                Technology Reviews & Software Guides
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Items */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-semibold text-slate-700 dark:text-slate-200">
            <Link
              to="/"
              className={`hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1 ${
                isActive('/') ? 'text-sky-600 dark:text-sky-400 font-bold' : ''
              }`}
            >
              Home
            </Link>

            {/* Software Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSoftwareDropdownOpen(true)}
              onMouseLeave={() => setSoftwareDropdownOpen(false)}
            >
              <Link
                to="/software"
                className={`flex items-center gap-1 hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1 ${
                  location.pathname.startsWith('/software') || location.pathname.startsWith('/category')
                    ? 'text-sky-600 dark:text-sky-400 font-bold'
                    : ''
                }`}
              >
                Software
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
              </Link>

              {softwareDropdownOpen && (
                <div className="absolute top-full -left-4 pt-2 w-80 transition-all z-30">
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-2.5 space-y-1">
                    <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800">
                      Published Software Categories
                    </div>
                    {publishedCategories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/category/${cat.id}`}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-medium rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
                      >
                        {getCategoryIcon(cat.iconName)}
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-white">{cat.title}</div>
                          <div className="text-[10px] text-slate-400">{cat.count}</div>
                        </div>
                      </Link>
                    ))}
                    <div className="pt-1 border-t border-slate-100 dark:border-slate-800">
                      <Link
                        to="/software"
                        className="block text-center py-2 text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline"
                      >
                        View All Software Tools &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/reviews"
              className={`hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1 ${
                isActive('/reviews') ? 'text-sky-600 dark:text-sky-400 font-bold' : ''
              }`}
            >
              Reviews
            </Link>

            <Link
              to="/comparisons"
              className={`hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1 ${
                isActive('/comparisons') ? 'text-sky-600 dark:text-sky-400 font-bold' : ''
              }`}
            >
              Comparisons
            </Link>

            <Link
              to="/guides"
              className={`hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1 ${
                isActive('/guides') || isActive('/blog') ? 'text-sky-600 dark:text-sky-400 font-bold' : ''
              }`}
            >
              How-to Guides
            </Link>

            <Link
              to="/about"
              className={`hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1 ${
                isActive('/about') ? 'text-sky-600 dark:text-sky-400 font-bold' : ''
              }`}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className={`hover:text-sky-600 dark:hover:text-sky-400 transition-colors py-1 ${
                isActive('/contact') ? 'text-sky-600 dark:text-sky-400 font-bold' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Header Action Tools */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Search Modal Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              title="Search guides and reviews"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Quick Affiliate Transparency Pill */}
            <div className="relative" ref={popoverRef}>
              <button
                onClick={() => setDisclosurePopoverOpen(!disclosurePopoverOpen)}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                title="Affiliate & Editorial Transparency Notice"
              >
                <Shield className="w-3.5 h-3.5 text-sky-500" />
                <span>Affiliate Disclosure</span>
              </button>

              {disclosurePopoverOpen && (
                <div className="absolute right-0 mt-2 w-80 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-50 text-xs text-slate-600 dark:text-slate-300 space-y-2">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-sky-500" />
                    How Infratechs Operates
                  </div>
                  <p className="leading-relaxed text-[11px]">
                    Infratechs is an independent technology publication. When you purchase software through links on our site, we may earn an affiliate commission at zero additional cost to you.
                  </p>
                  <p className="leading-relaxed text-[11px] text-slate-500 dark:text-slate-400">
                    Our evaluations and comparisons are conducted independently without vendor payment control.
                  </p>
                  <div className="pt-1 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                    <Link
                      to="/affiliate-disclosure"
                      className="text-sky-600 dark:text-sky-400 font-bold hover:underline"
                    >
                      Read Full Policy &rarr;
                    </Link>
                    <Link
                      to="/editorial-policy"
                      className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 underline"
                    >
                      Editorial Standards
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Dark / Light Mode Switch */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              Home
            </Link>
            <Link
              to="/software"
              className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              All Software Tools
            </Link>
            
            {/* Mobile Categories Accordion */}
            <div className="pl-3 pr-2 py-1 space-y-1">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Categories:</div>
              {publishedCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/category/${cat.id}`}
                  className="flex items-center gap-2 px-2 py-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-sky-600 rounded-md"
                >
                  {getCategoryIcon(cat.iconName)}
                  <span>{cat.title}</span>
                </Link>
              ))}
            </div>

            <Link
              to="/reviews"
              className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              Software Reviews
            </Link>
            <Link
              to="/comparisons"
              className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              Product Comparisons
            </Link>
            <Link
              to="/guides"
              className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              How-to Guides
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
            >
              Contact Us
            </Link>
            <Link
              to="/affiliate-disclosure"
              className="block px-3 py-2 text-sm font-semibold rounded-lg text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/40"
            >
              Affiliate Disclosure
            </Link>
            <Link
              to="/editorial-policy"
              className="block px-3 py-2 text-sm font-semibold rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Editorial Policy
            </Link>
          </div>
        </div>
      )}

      {/* Global Search Dialog Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
