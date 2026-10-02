import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ShieldCheck, 
  ExternalLink,
  Award
} from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { founderData } from '../data/founderData';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-sky-600 dark:hover:text-sky-400">Blog</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-slate-200 truncate max-w-xs">{post.title}</span>
          </div>
          <Link
            to="/blog"
            className="hidden sm:inline-flex items-center gap-1 text-sky-600 dark:text-sky-400 font-semibold hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
          </Link>
        </div>

        {/* Post Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold">
              {post.categoryLabel}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5" /> Tested by InfraTechs Engineers
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {post.subtitle}
          </p>

          {/* Author & Published Info */}
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
                    Owner & Author
                  </span>
                </div>
                <div className="text-xs text-sky-600 dark:text-sky-400">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.publishedAt}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full max-h-[460px] object-cover"
          />
        </div>

        {/* Clean Post Content Body (No mid-article disruptive links) */}
        <article
          className="prose prose-slate dark:prose-invert max-w-none text-slate-800 dark:text-slate-200 leading-relaxed 
            [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:dark:text-white [&>h2]:mt-10 [&>h2]:mb-4
            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:dark:text-white [&>h3]:mt-6 [&>h3]:mb-3
            [&>p]:text-base [&>p]:leading-relaxed [&>p]:mb-5
            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:mb-6
            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>ol]:mb-6"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* CLEAN BUY SECTION STRICTLY AT END OF POST */}
        {post.buySection && (
          <div className="my-10 bg-gradient-to-r from-sky-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-900/90 dark:to-sky-950/40 border-2 border-sky-400/60 dark:border-sky-500/40 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="inline-block text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/80 px-2.5 py-0.5 rounded-full mb-1">
                  {post.buySection.discount} EXCLUSIVE
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {post.buySection.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-lg">
                  {post.buySection.desc}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                    {post.buySection.price}
                  </span>
                  <span className="text-sm line-through text-slate-400">
                    {post.buySection.originalPrice}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-2.5 shrink-0">
                <a
                  href={post.buySection.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-base transition-all shadow-xl shadow-sky-600/30 flex items-center gap-2 hover:scale-105 active:scale-95"
                >
                  {post.buySection.buttonText} <ExternalLink className="w-5 h-5" />
                </a>
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> {post.buySection.guarantee}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 pt-3 border-t border-slate-200 dark:border-slate-800">
              {post.buySection.affiliateNotice} Read our <Link to="/affiliate-disclosure" className="underline text-sky-600 dark:text-sky-400">Affiliate Disclosure</Link>.
            </p>
          </div>
        )}

        {/* Author Bio Box */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-sm">
          <img
            src={founderData.avatarUrl}
            alt={founderData.name}
            className="w-20 h-20 rounded-2xl object-cover ring-4 ring-sky-500/20 shadow-md shrink-0"
          />
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">{founderData.name}</h4>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                Founder & Lead Architect
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {founderData.bio}
            </p>
            <div className="pt-1 flex items-center gap-4 text-xs font-medium">
              <Link to="/contact" className="text-sky-600 dark:text-sky-400 hover:underline">
                Contact Author Directly &rarr;
              </Link>
              <Link to="/affiliate-disclosure" className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">
                Affiliate & Editorial Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center pt-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Browse More Engineering Articles
          </Link>
        </div>

      </div>
    </div>
  );
}
