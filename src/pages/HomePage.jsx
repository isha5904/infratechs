import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Code2, 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Lock, 
  Cpu, 
  Database, 
  Rocket, 
  Search, 
  Calendar, 
  Clock, 
  Star, 
  TrendingUp, 
  Layers, 
  HardDrive, 
  Award, 
  ChevronRight,
  Mail,
  Check,
  Server,
  Zap
} from 'lucide-react';
import { featuredSoftware, softwareCategories } from '../data/softwareData';
import { blogPosts, blogCategories } from '../data/blogData';
import { founderData } from '../data/founderData';
import SoftwareQuizModal from '../components/SoftwareQuizModal';
import SaaSCalculator from '../components/SaaSCalculator';

export default function HomePage() {
  const [selectedSoftwareTab, setSelectedSoftwareTab] = useState('all');
  const [blogFilterTab, setBlogFilterTab] = useState('all');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 2000);
    }
  };

  const filteredSoftware = featuredSoftware.filter(
    (item) => selectedSoftwareTab === 'all' || item.category === selectedSoftwareTab
  );

  const filteredBlogPosts = blogPosts.filter(
    (post) => blogFilterTab === 'all' || post.category === blogFilterTab
  );

  const featuredWisePost = blogPosts.find((p) => p.slug === 'wise-cleaner-review-2026');

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION: SOFTWARE DEVELOPMENT AGENCY */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-white via-sky-50/20 to-slate-50 dark:from-slate-950 dark:via-slate-900/40 dark:to-slate-950">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/20 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 dark:bg-sky-950 border border-sky-300 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-bold tracking-tight">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                Custom SaaS Engineering & Software Development Agency
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                We Engineer Scalable SaaS Platforms &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600">
                  Custom Software
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Led by founder and principal architect <strong className="text-slate-900 dark:text-white">{founderData.name}</strong>, InfraTechs designs and builds production-grade web applications, multi-tenant cloud backends, and Stripe monetization systems—while sharing independent benchmarks of developer and PC tools.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/services"
                  className="px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm transition-all shadow-lg shadow-sky-600/25 flex items-center gap-2 active:scale-95"
                >
                  <Code2 className="w-4 h-4" />
                  Explore Development Services
                </Link>

                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
                >
                  Get Project Consultation
                </Link>
              </div>

              {/* Trust Bar */}
              <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>95+ Production Projects Shipped</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-sky-500" />
                  <span>Founder-Led Architecture</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-indigo-500" />
                  <span>100% Code Ownership</span>
                </div>
              </div>

            </div>

            {/* Right: Featured Technical Review Card (Wise Cleaner Workstation Analysis) */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-slate-900 border-2 border-sky-500/30 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-white text-[11px] font-bold px-3 py-1 rounded-bl-xl shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> FEATURED TECHNICAL GUIDE
                </div>

                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold text-lg border border-sky-200 dark:border-sky-800">
                    <HardDrive className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                      Wise Cleaner Workstation Audit
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Developer PC Maintenance & Storage Test
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-2 mb-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Storage Cleaned:</span>
                    <span className="font-extrabold text-emerald-600 dark:text-emerald-400">18.4 GB Build & System Junk</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Startup Time Improvement:</span>
                    <span className="font-extrabold text-sky-600 dark:text-sky-400">From 42s down to 22s</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">RAM Overhead:</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Under 15 MB (Ultra-Lightweight)</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Our engineering team evaluated Wise Care 365 on developer workstations running Windows 11. Read our full technical breakdown of disk optimization, cache clearing, and registry safety.
                  </p>

                  <div className="pt-1">
                    <Link
                      to="/blog/wise-cleaner-review-2026"
                      className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs text-center transition-all shadow-md flex items-center justify-center gap-1.5"
                    >
                      Read Technical Review & Buy Info <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE SAAS DEVELOPMENT CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
            <Code2 className="w-3.5 h-3.5" /> What We Build
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Custom Software & SaaS Development Services
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            From early-stage MVPs to high-concurrency microservices, we build reliable, secure, and beautiful digital products.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-3 hover:shadow-lg transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Full-Stack SaaS MVPs</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Rapid development with React 19, Next.js, and TypeScript. Shipped with clean component architecture and complete source code ownership.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-3 hover:shadow-lg transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Multi-Tenant Databases</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Rock-solid PostgreSQL with Row-Level Security (RLS) data isolation, Prisma/Drizzle models, and Redis caching layers.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-3 hover:shadow-lg transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Stripe Monetization</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Complete subscription billing setup: recurring tiers, seat upgrades, automated invoices, dunning webhooks, and customer portals.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-3 hover:shadow-lg transition-shadow">
            <div className="w-11 h-11 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Cloud Scale & DevOps</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Dockerized containers, automated GitHub Actions CI/CD pipelines, SSL automation, and low-latency edge deployment on AWS or Vultr.
            </p>
          </div>

        </div>

        {/* Interactive SaaS Timeline & Budget Estimator */}
        <SaaSCalculator />

        {/* Development Call to Action Box */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold">Have a custom SaaS project in development?</h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Schedule a 1-on-1 architecture review directly with founder {founderData.name}. We provide fixed-price milestone estimates with no hidden fees.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/services"
              className="px-5 py-3 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-sky-600/20"
            >
              Request Dev Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Solution & Software Finder Quiz */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SoftwareQuizModal />
      </section>

      {/* 3. VERIFIED SOFTWARE DEALS & COMPARISON GRID */}
      <section id="software-deals" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-24">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1">
              <ShieldCheck className="w-4 h-4" /> Workstation & Cloud Infrastructure Lab
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Tested Developer Utilities & Cloud Systems
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Evaluated by founder {founderData.name} and our engineering team for speed, security, and zero background telemetry bloat.
            </p>
          </div>

          {/* Software Category Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {softwareCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedSoftwareTab(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedSoftwareTab === cat.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Software Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8">
          {filteredSoftware.map((tool) => (
            <div
              key={tool.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 hover:shadow-xl hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                    {tool.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{tool.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {tool.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {tool.description}
                </p>

                {/* Highlights */}
                <div className="my-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  {tool.highlights.slice(0, 3).map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & Link */}
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

                <div className="flex items-center gap-2">
                  {tool.id === 'wise-care-365' ? (
                    <Link
                      to="/blog/wise-cleaner-review-2026"
                      className="flex-1 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs text-center transition-all shadow-md flex items-center justify-center gap-1.5"
                    >
                      Read Wise Cleaner Review & Buy &rarr;
                    </Link>
                  ) : (
                    <a
                      href={tool.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs text-center transition-all shadow-md flex items-center justify-center gap-1.5"
                    >
                      Get Software Deal / Official Site <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>Tested by InfraTechs</span>
                  <Link to="/affiliate-disclosure" className="hover:underline">
                    Disclosure notice
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 4. TECHNICAL BLOG SECTION WITH WISE CLEANER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1">
              <Sparkles className="w-4 h-4 text-amber-500" /> Technical Blog & Engineering Articles
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Latest Engineering Guides & System Audits
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Practical guides on software development, system maintenance, and cloud deployments.
            </p>
          </div>

          {/* Blog Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {blogCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setBlogFilterTab(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  blogFilterTab === cat.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Wise Cleaner Review Card on Homepage */}
        {featuredWisePost && (
          <div className="bg-gradient-to-r from-sky-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-0.5 rounded-full bg-amber-500 text-slate-950 text-xs font-extrabold tracking-wide">
                    FEATURED PC AUDIT
                  </span>
                  <span className="text-xs text-sky-200 font-medium">
                    Wise Disk Cleaner & Wise Care 365
                  </span>
                </div>

                <Link to={`/blog/${featuredWisePost.slug}`}>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-sky-300 transition-colors leading-tight">
                    {featuredWisePost.title}
                  </h3>
                </Link>

                <p className="text-sm text-sky-100 leading-relaxed">
                  {featuredWisePost.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-sky-200">
                  <span>Author: {featuredWisePost.author.name} (Founder)</span>
                  <span>&bull;</span>
                  <span>{featuredWisePost.readTime}</span>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to={`/blog/${featuredWisePost.slug}`}
                    className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
                  >
                    Read Technical Analysis & View Buy Option <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <Link to={`/blog/${featuredWisePost.slug}`}>
                  <img
                    src={featuredWisePost.coverImage}
                    alt={featuredWisePost.title}
                    className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500 ring-2 ring-white/10"
                  />
                </Link>
              </div>

            </div>
          </div>
        )}

        {/* Other Blog Grid on Home Page */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredBlogPosts.slice(0, 3).map((post) => (
            <div
              key={post.slug}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:shadow-lg hover:border-sky-500/40 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-sky-600 dark:text-sky-400">{post.categoryLabel}</span>
                  <span>{post.readTime}</span>
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500">{post.publishedAt}</span>
                <Link to={`/blog/${post.slug}`} className="font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1">
                  Read Article &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-bold transition-colors shadow-sm"
          >
            Browse All Blog Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </section>

      {/* Verified Deals & Engineering Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> Weekly Tech Dispatch
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Get Software Engineering Insights & Tested Tool Deals
            </h3>
            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
              We send one weekly email containing tested discounts (like 25% off Wise Cleaner), architecture case studies, and cloud optimizations.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {newsletterSubscribed ? (
              <div className="px-6 py-4 rounded-2xl bg-white/20 backdrop-blur-md text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/30">
                <Check className="w-5 h-5 text-emerald-300" /> You're subscribed! Welcome aboard.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="px-4 py-3.5 rounded-2xl bg-white/10 placeholder-sky-200 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-80 text-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm transition-all shadow-md shrink-0 active:scale-95"
                >
                  Join 12,000+ Engineers
                </button>
              </form>
            )}
            <p className="text-[11px] text-sky-200 mt-2 text-center lg:text-left">
              Unsubscribe anytime. We respect your privacy according to our <Link to="/privacy-policy" className="underline font-semibold">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* 5. TRANSPARENCY & FOUNDER PLEDGE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 text-center lg:text-left">
              <img
                src={founderData.avatarUrl}
                alt={founderData.name}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl object-cover ring-4 ring-sky-500/20 shadow-lg mx-auto lg:mx-0 mb-4"
              />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{founderData.name}</h3>
              <p className="text-xs font-semibold text-sky-600 dark:text-sky-400">{founderData.title}</p>
              <p className="text-xs text-slate-500 mt-1">Founder & Page Owner &bull; {founderData.company}</p>
            </div>

            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Founder's Technical Pledge
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Engineering Integrity in Software & Recommendations
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                "At InfraTechs, our core focus is delivering exceptional custom software and SaaS platforms to our clients. When we share our experiences with workstation tools like Wise Cleaner or cloud hosting providers, we evaluate them strictly from an engineer's perspective. We never accept payment for biased positive reviews."
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
                <Link to="/affiliate-disclosure" className="text-sky-600 dark:text-sky-400 hover:underline">
                  Read Full Affiliate Disclosure &rarr;
                </Link>
                <Link to="/contact" className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">
                  Contact Founder Directly &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
