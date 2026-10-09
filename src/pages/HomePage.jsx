import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Laptop, 
  ArrowRight, 
  ShieldCheck, 
  Scale, 
  BookOpen, 
  Database, 
  HardDrive, 
  Smartphone, 
  FileText, 
  Lock, 
  Sparkles, 
  Cpu, 
  Terminal,
  Calendar, 
  Clock, 
  CheckCircle2, 
  Search,
  ExternalLink,
  Shield,
  Info
} from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { softwareTools } from '../data/softwareData';
import { comparisonsData } from '../data/comparisonData';
import { publishedCategories } from '../data/categoriesData';
import { siteConfig } from '../data/founderData';
import ComparisonTable from '../components/ComparisonTable';
import AffiliateNoticeBox from '../components/AffiliateNoticeBox';

export default function HomePage() {
  const latestGuides = blogPosts.filter((p) => p.articleType === 'guide').slice(0, 4);
  const featuredArticles = blogPosts.slice(0, 6);
  const dataRecoveryComparison = comparisonsData.find((c) => c.id === 'data-recovery-comparison');
  const backupComparison = comparisonsData.find((c) => c.id === 'backup-software-comparison');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Database': return <Database className="w-5 h-5 text-emerald-500" />;
      case 'HardDrive': return <HardDrive className="w-5 h-5 text-sky-500" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-indigo-500" />;
      case 'FileText': return <FileText className="w-5 h-5 text-rose-500" />;
      case 'Shield': return <Lock className="w-5 h-5 text-amber-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-500" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-500" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-blue-500" />;
      default: return <Laptop className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* A. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-b from-white via-sky-50/20 to-slate-50 dark:from-slate-950 dark:via-slate-900/40 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 dark:bg-sky-950 border border-sky-300 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-bold tracking-tight">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>Independent Editorial Technology Publication</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                Find the Right Software and{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-600">
                  Technology Tools
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Explore practical software reviews, side-by-side comparisons, and step-by-step guides to help you make informed technology decisions.
              </p>

              <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 max-w-2xl text-left">
                <span className="font-semibold text-slate-900 dark:text-white">Our Editorial Promise:</span> {siteConfig.description} We clearly distinguish hands-on testing from research-based evaluations, and avoid inflated marketing claims.
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  to="/software"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-md shadow-sky-600/20 hover:shadow-lg transition-all"
                >
                  <Laptop className="w-4 h-4" />
                  <span>Explore Software</span>
                </Link>

                <Link
                  to="/guides"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 font-semibold text-sm transition-all"
                >
                  <BookOpen className="w-4 h-4 text-sky-500" />
                  <span>Read Latest Guides</span>
                </Link>
              </div>
            </div>

            {/* Hero Quick Highlights Card */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
                    <Scale className="w-4 h-4 text-sky-500" />
                    <span>Featured Comparison Matrix</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                    Verified Oct 2026
                  </span>
                </div>

                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 flex items-start justify-between gap-3">
                    <div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white">Data Recovery: EaseUS vs. Disk Drill vs. Recuva</div>
                      <div className="text-[11px] text-slate-500">Comparing deep scans, file carving, and SSD TRIM limits</div>
                    </div>
                    <Link to="/comparisons" className="text-sky-600 text-xs font-bold hover:underline shrink-0">
                      Compare &rarr;
                    </Link>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 flex items-start justify-between gap-3">
                    <div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white">Backup: Acronis vs. Macrium Reflect</div>
                      <div className="text-[11px] text-slate-500">Bare-metal disaster recovery and anti-ransomware tests</div>
                    </div>
                    <Link to="/comparisons" className="text-sky-600 text-xs font-bold hover:underline shrink-0">
                      Compare &rarr;
                    </Link>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 flex items-start justify-between gap-3">
                    <div>
                      <div className="font-bold text-xs text-slate-900 dark:text-white">PDF Tools: PDFgear (Free) vs. Acrobat Pro</div>
                      <div className="text-[11px] text-slate-500">Free offline document editing vs. $240/yr subscriptions</div>
                    </div>
                    <Link to="/comparisons" className="text-sky-600 text-xs font-bold hover:underline shrink-0">
                      Compare &rarr;
                    </Link>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 dark:border-slate-800">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Transparent Disclosures
                  </span>
                  <Link to="/editorial-policy" className="text-sky-600 dark:text-sky-400 font-semibold hover:underline">
                    Editorial Standards &rarr;
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* B. FEATURED CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Browse by Software Domain
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Published Categories
            </h2>
          </div>
          <Link
            to="/software"
            className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
          >
            <span>View All Software Tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {publishedCategories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500/60 dark:hover:border-sky-500/60 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getCategoryIcon(cat.iconName)}
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {cat.shortDescription}
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-medium text-slate-600 dark:text-slate-300">{cat.count}</span>
                <span className="text-sky-600 dark:text-sky-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                  Explore &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* C. LATEST ARTICLES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Fresh Technology Insights
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Latest Published Articles
            </h2>
          </div>
          <Link
            to="/guides"
            className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
          >
            <span>View All Guides & Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <article
              key={article.slug}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold">
                      {article.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.publishedAt}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors leading-snug">
                    <Link to={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {article.author.name}
                  </span>
                </div>
                <Link
                  to={`/blog/${article.slug}`}
                  className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline"
                >
                  Read Article &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* D. FEATURED COMPARISONS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Objective Feature Breakdowns
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Software Comparisons
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Side-by-side matrices evaluating compatibility, pricing transparency, and important technical limitations.
            </p>
          </div>
          <Link
            to="/comparisons"
            className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
          >
            <span>All Comparison Tables</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Data Recovery Comparison Matrix */}
        {dataRecoveryComparison && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-emerald-500" />
                <span>{dataRecoveryComparison.title}</span>
              </h3>
              <span className="text-xs text-slate-500">Updated {dataRecoveryComparison.lastUpdated}</span>
            </div>
            <ComparisonTable 
              tools={dataRecoveryComparison.products.map(p => {
                const fullTool = softwareTools.find(t => t.name.includes(p.name.split(' ')[0]));
                return {
                  id: p.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
                  name: p.name,
                  badge: p.badge,
                  primaryPurpose: p.bestSuitedFor,
                  supportedOS: p.supportedOS,
                  keyFeatures: [p.deepScanQuality, p.previewCapability, p.freeAllowance],
                  pricing: p.pricingModel,
                  pricingVerifiedDate: dataRecoveryComparison.lastUpdated,
                  limitations: [p.keyLimitation],
                  bestSuitedFor: p.bestSuitedFor,
                  officialUrl: p.actionUrl,
                  affiliateUrl: p.actionUrl,
                  buttonLabel: p.actionLabel
                };
              })}
              title={dataRecoveryComparison.title}
              showDisclosure={true}
            />
          </div>
        )}
      </section>

      {/* E. PRACTICAL GUIDES (PROBLEM-SOLVING TUTORIALS) */}
      <section className="bg-slate-100/70 dark:bg-slate-900/40 py-16 border-y border-slate-200/80 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Hands-on Problem Solving
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Practical Technology Guides
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Step-by-step tutorials designed to help you avoid software pitfalls, protect your storage, and optimize workstation performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestGuides.map((guide) => (
              <div
                key={guide.slug}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:border-sky-500/50 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-bold">
                      {guide.categoryLabel}
                    </span>
                    <span>{guide.readTime}</span>
                  </div>

                  <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                    <Link to={`/blog/${guide.slug}`}>
                      {guide.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {guide.excerpt}
                  </p>

                  {guide.keyTakeaways && (
                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
                      <div className="font-bold text-[11px] uppercase tracking-wider text-slate-500">Key Takeaway:</div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{guide.keyTakeaways[0]}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">By {guide.author.name}</span>
                  <Link
                    to={`/blog/${guide.slug}`}
                    className="text-xs font-bold text-sky-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F. EDITORIAL TRUST & METHODOLOGY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Editorial Transparency & Standards</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Why Readers Trust Infratechs
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Infratechs publishes practical, research-backed software reviews and technology guides. We never accept payment to write fake positive reviews or boost software rankings. Our software evaluations are driven by real technical criteria, compatibility standards, and pricing transparency.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">Independent Research</div>
                  <p className="text-slate-500 dark:text-slate-400">Specifications, OS compatibility, and pricing checked against official sources.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">Balanced Limitations</div>
                  <p className="text-slate-500 dark:text-slate-400">We openly document software downsides, recurring billing gotchas, and hardware limits.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white">Clear Disclosures</div>
                  <p className="text-slate-500 dark:text-slate-400">All affiliate relationships are disclosed clearly near every outbound link.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center gap-3 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 pt-6 lg:pt-0 lg:pl-8">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Publication Policies:
              </div>
              <Link
                to="/about"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-slate-700 transition-colors text-xs font-semibold text-slate-800 dark:text-slate-200 group"
              >
                <span>About Infratechs</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 transition-colors" />
              </Link>
              <Link
                to="/editorial-policy"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-slate-700 transition-colors text-xs font-semibold text-slate-800 dark:text-slate-200 group"
              >
                <span>Editorial Policy & Standards</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 transition-colors" />
              </Link>
              <Link
                to="/affiliate-disclosure"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-slate-700 transition-colors text-xs font-semibold text-slate-800 dark:text-slate-200 group"
              >
                <span>Affiliate Transparency Statement</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 transition-colors" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-slate-700 transition-colors text-xs font-semibold text-slate-800 dark:text-slate-200 group"
              >
                <span>Contact & Editorial Corrections</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-600 transition-colors" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
