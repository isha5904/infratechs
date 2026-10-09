import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Sparkles, FileText, ArrowRight, Laptop, Scale, HardDrive } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { softwareTools } from '../data/softwareData';
import { comparisonsData } from '../data/comparisonData';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedPosts = q
    ? blogPosts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q)
      )
    : [];

  const matchedSoftware = q
    ? softwareTools.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          (s.tagline && s.tagline.toLowerCase().includes(q)) ||
          (s.primaryPurpose && s.primaryPurpose.toLowerCase().includes(q))
      )
    : [];

  const matchedComparisons = q
    ? comparisonsData.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.subtitle.toLowerCase().includes(q)
      )
    : [];

  const handleSelect = (url) => {
    onClose();
    navigate(url);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 sm:px-6 py-4 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search data recovery, backup, PDF editors, comparisons..."
            className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 text-base sm:text-lg focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs text-slate-400 bg-slate-100 dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700">
              ESC
            </kbd>
          )}
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {q === '' ? (
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Popular Guides & Comparisons
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  onClick={() => handleSelect('/blog/how-to-choose-data-recovery-software')}
                  className="text-left p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <HardDrive className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200 group-hover:text-sky-600">
                      How to Choose Data Recovery Software
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => handleSelect('/comparisons')}
                  className="text-left p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Scale className="w-4 h-4 text-sky-500" />
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200 group-hover:text-sky-600">
                      Side-by-Side Product Comparisons
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => handleSelect('/blog/backup-software-essential-features')}
                  className="text-left p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-indigo-500" />
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200 group-hover:text-sky-600">
                      Backup Software: The 3-2-1 Strategy
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => handleSelect('/blog/how-to-choose-pdf-editor')}
                  className="text-left p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-rose-500" />
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200 group-hover:text-sky-600">
                      How to Choose PDF Editing Software
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>
          ) : matchedPosts.length === 0 && matchedSoftware.length === 0 && matchedComparisons.length === 0 ? (
            <div className="py-12 text-center space-y-2">
              <Laptop className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto" />
              <div className="text-base font-semibold text-slate-700 dark:text-slate-300">
                No matching results found for "{query}"
              </div>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try searching for general keywords like "recovery", "backup", "transfer", "pdf", or "licensing".
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Matched Comparisons */}
              {matchedComparisons.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Product Comparisons ({matchedComparisons.length})
                  </div>
                  <div className="space-y-1.5">
                    {matchedComparisons.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => handleSelect('/comparisons')}
                        className="w-full text-left p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors flex items-start justify-between gap-3 group"
                      >
                        <div className="flex items-start gap-3">
                          <Scale className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600">
                              {c.title}
                            </div>
                            <div className="text-xs text-slate-500 line-clamp-1">{c.subtitle}</div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Software */}
              {matchedSoftware.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Software Profiles & Tools ({matchedSoftware.length})
                  </div>
                  <div className="space-y-1.5">
                    {matchedSoftware.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleSelect(`/category/${s.category}`)}
                        className="w-full text-left p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors flex items-start justify-between gap-3 group"
                      >
                        <div className="flex items-start gap-3">
                          <Laptop className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600">
                              {s.name}
                            </div>
                            <div className="text-xs text-slate-500 line-clamp-1">{s.tagline}</div>
                          </div>
                        </div>
                        <span className="text-[11px] text-slate-400 font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                          {s.pricingVerifiedDate}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Articles & Guides */}
              {matchedPosts.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Articles & Practical Guides ({matchedPosts.length})
                  </div>
                  <div className="space-y-1.5">
                    {matchedPosts.map((p) => (
                      <button
                        key={p.slug}
                        onClick={() => handleSelect(`/blog/${p.slug}`)}
                        className="w-full text-left p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors flex items-start justify-between gap-3 group"
                      >
                        <div className="flex items-start gap-3">
                          <FileText className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600">
                              {p.title}
                            </div>
                            <div className="text-xs text-slate-500 line-clamp-1">{p.subtitle}</div>
                          </div>
                        </div>
                        <span className="text-[11px] text-slate-400 font-medium whitespace-nowrap">
                          {p.readTime}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
