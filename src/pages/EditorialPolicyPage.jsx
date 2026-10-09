import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  RefreshCw, 
  DollarSign, 
  Mail,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '../data/founderData';

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200">Editorial Policy</span>
        </nav>

        {/* Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Editorial Standards & Verification Protocol</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Editorial Policy & Methodology
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            How Infratechs researches software, verifies technical claims, evaluates limitations, and handles affiliate relationships.
          </p>
          <div className="text-xs text-slate-400">
            Last Updated: October 2026 &bull; Published by Infratechs Editorial Desk
          </div>
        </header>

        {/* 1. Topic Selection */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-sky-500" />
            <span>1. Topic Selection Criteria</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            We select guide topics and software categories based on real consumer search intent, technical friction points, and product decision challenges. We prioritize topics where users risk wasting money or losing data—such as partition loss, backup planning, cross-platform mobile switching, and subscription contract gotchas. We do not create thin placeholder articles merely to target search keywords.
          </p>
        </section>

        {/* 2. Research & Claim Verification */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span>2. Source Research & Verification</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            All software claims, system requirements, and supported operating systems are verified against:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Official Manufacturer Documentation:</strong> User manuals, API docs, changelogs, and published release notes.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Standards Bodies:</strong> RFC specifications, file system technical standards (e.g., APFS, NTFS, ISO 32000 for PDF), and cybersecurity best practice frameworks (CISA, NIST).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Live Pricing Audits:</strong> We periodically check checkout pages to record accurate plan costs, renewal rates, and trial limits, documenting the exact verification month.</span>
            </li>
          </ul>
        </section>

        {/* 3. Testing vs. Research Transparency */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <span>3. Hands-on Testing vs. Research-Based Reviews</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            We adhere strictly to honesty in testing disclosures:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
              <div className="font-bold text-slate-900 dark:text-white">Hands-on Laboratory Testing</div>
              <p className="text-slate-500 dark:text-slate-400">
                Applied only when our editorial staff physically installed, benchmarked, and measured performance (e.g., our Wise Cleaner Windows 11 workstation test).
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
              <div className="font-bold text-slate-900 dark:text-white">Research-Based Evaluations</div>
              <p className="text-slate-500 dark:text-slate-400">
                Applied when software features, limitations, and OS compatibility are aggregated and verified from official vendor documentation and technical specifications.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Limitations and Drawbacks */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <HelpCircle className="w-5 h-5 text-indigo-500" />
            <span>4. Limitations & Disadvantages Are Mandatory</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            No software product is perfect. Every review and comparison table published on Infratechs must feature an explicit <strong>Important Limitations</strong> section. We highlight recurring subscription traps, hardware incompatibilities (such as ARM64 translation issues), SSD TRIM constraints, and free-tier volume caps.
          </p>
        </section>

        {/* 5. Corrections Policy */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <RefreshCw className="w-5 h-5 text-cyan-500" />
            <span>5. Fact-Checking & Corrections Handling</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            When software vendors update pricing, alter features, or deprecate operating system support, or if a reader identifies an inaccuracy, we promptly verify and update the content. Corrected articles feature an updated timestamp.
          </p>
          <div className="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-xs text-slate-700 dark:text-slate-300 flex items-center justify-between">
            <span>Found an outdated price or factual error? Let our editorial team know:</span>
            <a href={`mailto:${siteConfig.supportEmail}?subject=Editorial Correction`} className="font-bold text-sky-600 dark:text-sky-400 underline">
              Submit Correction &rarr;
            </a>
          </div>
        </section>

        {/* 6. Commercial Relationships & Sponsored Content */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <DollarSign className="w-5 h-5 text-amber-500" />
            <span>6. Commercial Affiliate Independence & Sponsored Content</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Infratechs participates in affiliate programs (including Partnerize, Avangate/2Checkout, CJ, and others). Affiliate commissions support our server and operational expenses without charging readers. However:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>We never alter review verdicts, comparison data, or star ratings based on commercial payouts.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>If any sponsored content or paid placement is ever featured, it will be conspicuously marked as <strong>"Sponsored"</strong> or <strong>"Advertisement"</strong> at the very top of the page.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>All affiliate links apply appropriate search engine attributes (<code>rel="sponsored"</code> or <code>rel="nofollow"</code>).</span>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
