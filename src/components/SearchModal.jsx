import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Sparkles, FileText, Shield, ArrowRight, Code } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { featuredSoftware } from '../data/softwareData';

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
    ? featuredSoftware.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.editorVerdict.toLowerCase().includes(q)
      )
    : [];

  const handleSelect = (url) => {
    onClose();
    if (url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      navigate(url);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
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
            placeholder="Search SaaS development, Wise Cleaner, cloud architecture..."
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
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-mono font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700">
              ESC
            </kbd>
          )}
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {!query ? (
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Popular Searches
              </div>
              <div className="flex flex-wrap gap-2">
                {['Wise Cleaner 2026', 'SaaS MVP Engineering', 'Full-Stack React', 'PostgreSQL Database', 'Stripe Billing', 'Founder Isha Patharia'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-sky-100 dark:hover:bg-sky-950/60 hover:text-sky-600 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {matchedPosts.length === 0 && matchedSoftware.length === 0 ? (
                <div className="text-center py-8 text-slate-400 text-sm">
                  No direct matches for "<span className="text-slate-900 dark:text-white font-medium">{query}</span>". Try another term like "Wise Cleaner" or "SaaS Development".
                </div>
              ) : (
                <>
                  {/* Matching Software Deals */}
                  {matchedSoftware.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5" /> Tested Software Deals
                      </div>
                      <div className="space-y-1.5">
                        {matchedSoftware.map((s) => (
                          <div
                            key={s.id}
                            onClick={() => handleSelect(s.affiliateUrl)}
                            className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-sky-50 dark:hover:bg-sky-950/40 border border-slate-100 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-800 cursor-pointer transition-all flex items-center justify-between"
                          >
                            <div>
                              <div className="font-bold text-sm text-slate-900 dark:text-white">{s.name}</div>
                              <div className="text-xs text-slate-500 line-clamp-1">{s.description}</div>
                            </div>
                            <span className="text-xs font-bold text-emerald-600 whitespace-nowrap ml-4">
                              {s.discount} &rarr;
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Matching Blog Articles */}
                  {matchedPosts.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" /> Benchmarks & Guides
                      </div>
                      <div className="space-y-1.5">
                        {matchedPosts.map((p) => (
                          <div
                            key={p.slug}
                            onClick={() => handleSelect(`/blog/${p.slug}`)}
                            className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-sky-50 dark:hover:bg-sky-950/40 border border-slate-100 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-800 cursor-pointer transition-all flex items-center justify-between"
                          >
                            <div>
                              <div className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">{p.title}</div>
                              <div className="text-xs text-slate-500 line-clamp-1">{p.excerpt}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 ml-4" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>InfraTechs Search</span>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-medium"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
