import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Laptop, 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  ShieldCheck, 
  Filter, 
  Scale, 
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { softwareTools, softwareCategories } from '../data/softwareData';
import { publishedCategories } from '../data/categoriesData';
import AffiliateNoticeBox from '../components/AffiliateNoticeBox';

export default function SoftwareDirectoryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = softwareTools.filter((tool) => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.primaryPurpose.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200">Software Directory</span>
        </nav>

        {/* Directory Header */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold">
            <Laptop className="w-3.5 h-3.5" /> Verified Digital Tools
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Software & Digital Tools Catalog
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Discover evaluated software across data recovery, backup, mobile management, document editing, and system utilities. Verified pricing, compatibility criteria, and objective limitations included for every product.
          </p>
        </div>

        {/* In-content Disclosure */}
        <AffiliateNoticeBox />

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {softwareCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-sky-500"
            />
          </div>

        </div>

        {/* Software Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header Info */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                      {publishedCategories.find((c) => c.id === tool.category)?.title || tool.category}
                    </span>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                      {tool.name}
                    </h2>
                  </div>
                  {tool.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 shrink-0">
                      {tool.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tool.tagline}
                </p>

                {/* Compatibility Badges */}
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs space-y-1">
                  <div className="text-[11px] font-bold text-slate-500">Supported OS:</div>
                  <div className="text-slate-800 dark:text-slate-200 font-medium">
                    {Array.isArray(tool.supportedOS) ? tool.supportedOS.join(' • ') : tool.supportedOS}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-1.5 text-xs">
                  <div className="font-semibold text-slate-800 dark:text-slate-200">Key Capabilities:</div>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                    {tool.keyFeatures.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limitations */}
                <div className="space-y-1 text-xs">
                  <div className="font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Important Limitation:</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                    {tool.limitations[0]}
                  </p>
                </div>

                {/* Verified Pricing */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{tool.pricing}</div>
                    <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" /> Checked {tool.pricingVerifiedDate}
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                    {tool.testedOrResearched}
                  </span>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4">
                <a
                  href={tool.affiliateUrl || tool.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-sm shadow-sky-600/20 transition-all"
                >
                  <span>{tool.buttonLabel || 'Visit Official Website'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <div className="text-[10px] text-center text-slate-400 mt-1.5">
                  Direct official link &bull; Standard manufacturer pricing
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Comparison Callout */}
        <div className="p-8 rounded-3xl bg-slate-100/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Need Side-by-Side Spec Comparisons?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Explore our head-to-head comparison tables to evaluate deep scans, restore speeds, and licensing models side-by-side.
            </p>
          </div>
          <Link
            to="/comparisons"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs shrink-0 hover:bg-slate-800 transition-colors"
          >
            <Scale className="w-4 h-4" />
            <span>View Comparison Tables</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
