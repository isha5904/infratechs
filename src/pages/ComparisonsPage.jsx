import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scale, CheckCircle2, AlertTriangle, ExternalLink, ShieldCheck, Database, HardDrive, FileText, ArrowRight } from 'lucide-react';
import { comparisonsData } from '../data/comparisonData';
import ComparisonTable from '../components/ComparisonTable';
import AffiliateNoticeBox from '../components/AffiliateNoticeBox';

export default function ComparisonsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredComparisons = activeTab === 'all'
    ? comparisonsData
    : comparisonsData.filter((c) => c.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200">Product Comparisons</span>
        </nav>

        {/* Header */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold">
            <Scale className="w-3.5 h-3.5" /> Side-by-Side Spec Breakdowns
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Software Head-to-Head Comparisons
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Side-by-side technical evaluations comparing data recovery rates, backup imaging speed, PDF text fidelity, supported operating systems, verified pricing, and real limitations.
          </p>
        </div>

        {/* Global Disclosure */}
        <AffiliateNoticeBox />

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
            }`}
          >
            All Comparisons
          </button>
          <button
            onClick={() => setActiveTab('data-recovery')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
              activeTab === 'data-recovery'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
            }`}
          >
            Data Recovery
          </button>
          <button
            onClick={() => setActiveTab('backup')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
              activeTab === 'backup'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
            }`}
          >
            Backup & Data Protection
          </button>
          <button
            onClick={() => setActiveTab('pdf')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
              activeTab === 'pdf'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
            }`}
          >
            PDF & Document Tools
          </button>
        </div>

        {/* Comparison Sections */}
        <div className="space-y-16">
          {filteredComparisons.map((comp) => (
            <section
              key={comp.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                    Category: {comp.category.replace('-', ' ')}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    Verified: {comp.lastUpdated}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {comp.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                  {comp.subtitle}
                </p>
              </div>

              {/* Render Comparison Table Matrix */}
              <ComparisonTable
                tools={comp.products.map((p) => ({
                  id: p.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
                  name: p.name,
                  badge: p.badge,
                  primaryPurpose: p.bestSuitedFor,
                  supportedOS: p.supportedOS,
                  keyFeatures: Object.entries(p)
                    .filter(([k]) => !['name', 'badge', 'supportedOS', 'pricingModel', 'bestSuitedFor', 'keyLimitation', 'actionLabel', 'actionUrl', 'testedScore'].includes(k))
                    .map(([k, v]) => `${k.replace(/([A-Z])/g, ' $1')}: ${v}`),
                  pricing: p.pricingModel,
                  pricingVerifiedDate: comp.lastUpdated,
                  limitations: [p.keyLimitation],
                  bestSuitedFor: p.bestSuitedFor,
                  officialUrl: p.actionUrl,
                  affiliateUrl: p.actionUrl,
                  buttonLabel: p.actionLabel
                }))}
                title={comp.title}
                showDisclosure={false}
              />

              {/* Editorial Verdict Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Infratechs Editorial Verdict & Summary</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {comp.editorialSummary}
                </p>
              </div>
            </section>
          ))}
        </div>

      </div>
    </div>
  );
}
