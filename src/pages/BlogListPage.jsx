import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Sparkles, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Tag, 
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Flame
} from 'lucide-react';
import { blogPosts, blogCategories } from '../data/blogData';

export default function BlogListPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        post.title.toLowerCase().includes(query) ||
        post.subtitle.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header & Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold">
            <Flame className="w-3.5 h-3.5 text-amber-500" /> Research & Hardware Benchmarks
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Insights & Software Reviews
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Unfiltered performance benchmarks, disk cleanup audits, cloud architecture guides, and custom SaaS engineering.
          </p>
        </div>

        {/* FEATURED BLOG BANNER: WISE CLEANER (Requested by user) */}
        {featuredPost && (
          <div className="relative bg-gradient-to-br from-white via-slate-50 to-sky-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-sky-950/20 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold tracking-wide shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> LATEST BENCHMARK POST
                  </span>
                  <span className="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-semibold">
                    {featuredPost.categoryLabel}
                  </span>
                </div>

                <Link to={`/blog/${featuredPost.slug}`}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                {/* Author & Meta */}
                <div className="flex items-center gap-4 pt-2 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <img 
                      src={featuredPost.author.avatar} 
                      alt={featuredPost.author.name} 
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-sky-500"
                    />
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">{featuredPost.author.name}</div>
                      <div className="text-[10px] text-sky-600 dark:text-sky-400">{featuredPost.author.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{featuredPost.publishedAt}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm transition-all shadow-md shadow-sky-600/25 flex items-center gap-2"
                  >
                    Read Full Benchmark & Verdict <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={featuredPost.affiliateSnippet?.affiliateUrl || "https://store.wisecleaner.com/order/checkout.php?PRODS=4570741&QTY=1&AFFILIATE=258532&CART=1"}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
                  >
                    Get 25% Off Wise Cleaner (Affiliate Link) <ExternalLink className="w-3.5 h-3.5 text-sky-500" />
                  </a>
                </div>

              </div>

              <div className="lg:col-span-5">
                <Link to={`/blog/${featuredPost.slug}`} className="block relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg border border-white/10 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified Safe & Tested
                  </div>
                </Link>
              </div>

            </div>
          </div>
        )}

        {/* Search & Category Filter Controls */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, Wise Cleaner, SaaS architecture..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* Total Articles Counter */}
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
              Showing <strong className="text-slate-900 dark:text-white">{filteredPosts.length}</strong> verified technical guides
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
            {blogCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
            <Tag className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No matching reviews found</h3>
            <p className="text-sm text-slate-500 mt-1">Try clearing your search query or selecting "All Articles".</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-sky-600 text-white rounded-xl text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:shadow-xl hover:border-sky-500/40 transition-all duration-300 flex flex-col group"
              >
                <Link to={`/blog/${post.slug}`} className="relative block overflow-hidden h-48">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                    {post.categoryLabel}
                  </div>
                </Link>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {post.publishedAt}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {post.readTime}
                      </span>
                    </div>

                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="w-6 h-6 rounded-full object-cover ring-1 ring-sky-500"
                      />
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {post.author.name}
                      </span>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 flex items-center gap-1"
                    >
                      Read Guide &rarr;
                    </Link>
                  </div>

                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
