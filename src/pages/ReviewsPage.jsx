import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink, 
  Clock, 
  ArrowRight,
  BookOpen,
  Laptop
} from 'lucide-react';
import { softwareTools } from '../data/softwareData';
import { blogPosts } from '../data/blogData';
import AffiliateNoticeBox from '../components/AffiliateNoticeBox';

export default function ReviewsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const reviewsList = softwareTools.filter((tool) => {
    if (selectedFilter === 'tested') return tool.testedOrResearched.includes('Hands-on');
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200">Software Reviews</span>
        </nav>

        {/* Header */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold">
            <Award className="w-3.5 h-3.5" /> Objective Evaluations
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Independent Software Reviews
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Unbiased technical analyses of utilities, data recovery engines, backup suites, and workstation tools. We explicitly distinguish hands-on laboratory benchmarks from research evaluations.
          </p>
        </div>

        {/* Disclosure */}
        <AffiliateNoticeBox />

        {/* Filter bar */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              selectedFilter === 'all'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
            }`}
          >
            All Evaluated Tools ({softwareTools.length})
          </button>
          <button
            onClick={() => setSelectedFilter('tested')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              selectedFilter === 'tested'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
            }`}
          >
            Hands-on Lab Verified Only
          </button>
        </div>

        {/* Reviews Cards List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reviewsList.map((tool) => {
            const relatedReviewPost = blogPosts.find((p) => p.slug.includes(tool.id) || (tool.id === 'wise-care-365' && p.slug === 'wise-cleaner-review-2026'));

            return (
              <div
                key={tool.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold">
                        <ShieldCheck className="w-3 h-3 text-sky-500" />
                        <span>{tool.testedOrResearched}</span>
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1.5">
                        {tool.name}
                      </h2>
                      <div className="text-xs text-sky-600 dark:text-sky-400 font-medium">
                        {tool.badge}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {tool.pricing.split('/')[0]}
                      </div>
                      <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3" /> Checked {tool.pricingVerifiedDate}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {tool.tagline}
                  </p>

                  {/* Compatibility */}
                  <div className="text-xs space-y-1">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">OS Compatibility:</span>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                      {Array.isArray(tool.supportedOS) ? tool.supportedOS.join(', ') : tool.supportedOS}
                    </p>
                  </div>

                  {/* Pros & Cons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 text-xs space-y-1.5">
                      <div className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Advantages
                      </div>
                      <ul className="space-y-1 text-slate-600 dark:text-slate-400 text-[11px]">
                        {tool.pros ? (
                          tool.pros.map((p, i) => <li key={i}>&bull; {p}</li>)
                        ) : (
                          <li>&bull; Comprehensive feature set</li>
                        )}
                      </ul>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40 text-xs space-y-1.5">
                      <div className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" /> Disadvantages & Limits
                      </div>
                      <ul className="space-y-1 text-slate-600 dark:text-slate-400 text-[11px]">
                        {tool.cons ? (
                          tool.cons.map((c, i) => <li key={i}>&bull; {c}</li>)
                        ) : (
                          <li>&bull; {tool.limitations[0]}</li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Editorial Verdict */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs space-y-1">
                    <div className="font-bold text-slate-900 dark:text-white">Our Verdict:</div>
                    <p className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                      {tool.verdict}
                    </p>
                  </div>

                </div>

                {/* Bottom Actions */}
                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
                  {relatedReviewPost ? (
                    <Link
                      to={`/blog/${relatedReviewPost.slug}`}
                      className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
                    >
                      <BookOpen className="w-3.5 h-3.5" /> Read Full In-Depth Review &rarr;
                    </Link>
                  ) : (
                    <span className="text-[11px] text-slate-400">
                      Standard Research Review
                    </span>
                  )}

                  <a
                    href={tool.affiliateUrl || tool.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-sm transition-colors"
                  >
                    <span>{tool.buttonLabel || 'Visit Official Website'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
