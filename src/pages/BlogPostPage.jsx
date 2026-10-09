import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ShieldCheck, 
  ExternalLink,
  Award,
  BookOpen,
  List,
  CheckCircle2,
  AlertTriangle,
  Info,
  Link as LinkIcon,
  User,
  Share2
} from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { founderData, siteConfig } from '../data/founderData';
import AffiliateNoticeBox from '../components/AffiliateNoticeBox';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  const relatedArticles = blogPosts
    .filter((p) => p.slug !== post.slug && (p.category === post.category || (post.relatedSlugs && post.relatedSlugs.includes(p.slug))))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
            <span>/</span>
            <Link to="/guides" className="hover:text-sky-600 dark:hover:text-sky-400">Guides & Reviews</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-slate-200 truncate max-w-xs">{post.title}</span>
          </div>
          <Link
            to="/guides"
            className="hidden sm:inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 font-semibold hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Guides
          </Link>
        </div>

        {/* Post Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold">
              {post.categoryLabel}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Independent Technology Review
            </span>
          </div>

          {/* 1. Clear H1 Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* 2. Subtitle / Problem Introduction */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {post.subtitle}
          </p>

          {/* Author & Verified Published Info */}
          <div className="pt-4 border-t border-b border-slate-200 dark:border-slate-800 py-3.5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-sky-500"
              />
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  {post.author.name}
                  <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-full font-medium">
                    Verified Author
                  </span>
                </div>
                <div className="text-xs text-sky-600 dark:text-sky-400">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1" title="Original Publication Date">
                <Calendar className="w-3.5 h-3.5" />
                <span>Published: {post.publishedAt}</span>
              </div>
              <div className="flex items-center gap-1" title="Last Updated Date">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                <span>Updated: {post.lastUpdated || post.publishedAt}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>&bull;</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full max-h-[460px] object-cover"
          />
        </div>

        {/* Mandatory In-Content Disclosure */}
        <AffiliateNoticeBox />

        {/* Key Takeaways Box */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
              <Award className="w-4 h-4 text-sky-500" />
              <span>Key Takeaways & Executive Summary</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {post.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 3. Table of Contents */}
        {post.tableOfContents && post.tableOfContents.length > 0 && (
          <nav className="p-6 rounded-3xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              <List className="w-4 h-4 text-sky-500" />
              <span>Table of Contents</span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {post.tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <span className="text-sky-500 font-bold">&rsaquo;</span>
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Article Body Content */}
        <article
          className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Optional Clean Buy / Direct Action Section (e.g. for Wise Cleaner review) */}
        {post.buySection && (
          <div className="my-10 p-8 rounded-3xl bg-gradient-to-br from-white to-sky-50/50 dark:from-slate-900 dark:to-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xl space-y-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  Direct Vendor Recommendation
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                  {post.buySection.title}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-slate-900 dark:text-white">
                  {post.buySection.price}
                </span>
                {post.buySection.originalPrice && (
                  <span className="ml-2 text-xs text-slate-400 line-through">
                    {post.buySection.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {post.buySection.desc}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={post.buySection.buyUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md shadow-sky-600/20 hover:shadow-lg transition-all"
              >
                <span>{post.buySection.buttonText || 'Visit Official Website'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                {post.buySection.guarantee}
              </span>
            </div>

            <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800/80">
              {post.buySection.affiliateNotice}
            </div>
          </div>
        )}

        {/* 15. Sources & Official Reference Links */}
        {post.sources && post.sources.length > 0 && (
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              <LinkIcon className="w-4 h-4 text-sky-500" />
              <span>Official Standards & Documentation Sources</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              {post.sources.map((s, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-slate-400">&bull;</span>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-600 dark:hover:text-sky-400 hover:underline flex items-center gap-1"
                  >
                    <span>{s.title}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 13. Author Information Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-sky-500 shrink-0"
          />
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {post.author.name}
              </h3>
              <span className="text-[11px] text-sky-600 dark:text-sky-400 font-semibold bg-sky-50 dark:bg-sky-950 px-2.5 py-0.5 rounded-full">
                {post.author.role}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              {founderData.bio}
            </p>
          </div>
        </div>

        {/* 12. Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Related Guides & Reviews
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/blog/${rel.slug}`}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase text-sky-600 dark:text-sky-400">
                      {rel.categoryLabel}
                    </span>
                    <h4 className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="text-[10px] text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800 mt-3 flex items-center justify-between">
                    <span>{rel.readTime}</span>
                    <span className="text-sky-600 font-semibold">Read &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
