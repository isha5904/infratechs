import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Star, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  HardDrive,
  Lock,
  Shield,
  Key,
  Cpu
} from 'lucide-react';
import { featuredSoftware, softwareCategories } from '../data/softwareData';
import { blogPosts } from '../data/blogData';
import { founderData } from '../data/founderData';

export default function CategoryPage() {
  const { categoryId } = useParams();

  const currentCategory = softwareCategories.find((c) => c.id === categoryId) || softwareCategories[1];

  const tools = featuredSoftware.filter((s) => s.category === categoryId);
  const relatedPosts = blogPosts.filter((p) => p.category === categoryId);

  const getIcon = () => {
    switch (categoryId) {
      case 'cleaner':
        return <HardDrive className="w-8 h-8 text-amber-500" />;
      case 'dev-cloud':
        return <Cpu className="w-8 h-8 text-indigo-500" />;
      default:
        return <Sparkles className="w-8 h-8 text-sky-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200">{currentCategory.label}</span>
        </nav>

        {/* Header */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 shrink-0">
            {getIcon()}
          </div>
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" /> 2026 Laboratory Tested
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Best {currentCategory.label} & Verified Deals
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Compare top tested tools, disk benchmarks, detection ratios, and performance metrics evaluated by founder {founderData.name}.
            </p>
          </div>
        </div>

        {/* Featured Software in Category */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Top Rated Software in {currentCategory.label}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                      {tool.badge}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{tool.rating} / 5.0</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {tool.name}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {tool.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-2 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Laboratory Highlights
                    </div>
                    {tool.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs mb-6">
                    <div className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-800/40">
                      <div className="font-bold text-emerald-700 dark:text-emerald-300 mb-1">Pros:</div>
                      <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                        {tool.pros.map((p, idx) => (
                          <li key={idx}>+ {p}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/50 dark:border-rose-800/40">
                      <div className="font-bold text-rose-700 dark:text-rose-300 mb-1">Cons:</div>
                      <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                        {tool.cons.map((c, idx) => (
                          <li key={idx}>- {c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                        {tool.price}
                      </span>
                      <span className="text-xs text-slate-400 line-through ml-2">
                        {tool.originalPrice}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {tool.discount}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={tool.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs text-center transition-all shadow-md flex items-center justify-center gap-1.5"
                    >
                      Claim Discount / Official Site <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="text-[11px] text-slate-400 text-center">
                    Tested by {founderData.name} &bull; Transparent editorial standards
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Related In-Depth Guides */}
        {relatedPosts.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              In-Depth Benchmark Articles & Lab Tests
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <div
                  key={post.slug}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:shadow-lg transition-all"
                >
                  <div className="space-y-3">
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                      {post.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">{post.readTime}</span>
                    <Link to={`/blog/${post.slug}`} className="font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1">
                      Read Full Article &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
