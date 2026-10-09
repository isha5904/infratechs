import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Filter,
  ShieldCheck
} from 'lucide-react';
import { blogPosts, blogCategories } from '../data/blogData';
import AffiliateNoticeBox from '../components/AffiliateNoticeBox';

export default function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const guides = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200">How-to Guides & Tutorials</span>
        </nav>

        {/* Header */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5" /> Practical Problem Solving
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How-To Guides & Technical Tutorials
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Practical, step-by-step guidance solving specific computer dilemmas: data recovery precautions, backup planning, cross-platform phone transfers, PDF editing options, and software subscription evaluations.
          </p>
        </div>

        {/* In-content Disclosure */}
        <AffiliateNoticeBox />

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {blogCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-sky-500"
            />
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((post) => (
            <article
              key={post.slug}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold">
                      {post.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.publishedAt}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors leading-snug">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
                      <div className="font-bold text-slate-500 uppercase text-[10px]">Key Takeaway:</div>
                      <div className="line-clamp-2">{post.keyTakeaways[0]}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {post.author.name}
                  </span>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline"
                >
                  Read Guide &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
