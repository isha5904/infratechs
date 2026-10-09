import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { siteConfig, founderData } from '../data/founderData';

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200">Terms & Conditions</span>
        </nav>

        {/* Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-3">
            <FileText className="w-4 h-4" /> Publication Terms of Use
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Terms and Conditions
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Effective Date: October 2026 &bull; Publisher: {siteConfig.name} ({siteConfig.domain})
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and browsing Infratechs ({siteConfig.domain}), you agree to comply with and be bound by these Terms and Conditions. If you disagree with any part of these terms, please discontinue use of the publication immediately.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Informational & Editorial Purpose Only</h2>
            <p>
              The software reviews, comparison tables, hardware benchmarks, and how-to guides published on Infratechs are provided for educational and product discovery purposes only. While we verify software features and pricing against official sources, software specifications, operating system compatibility, and pricing are subject to unilateral changes by manufacturers.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Intellectual Property</h2>
            <p>
              All original written guides, comparison structures, benchmarks, and site design on Infratechs are the intellectual property of Infratechs and its founder, {founderData.name}. Third-party software brand names, logos, and trademarks (e.g., Windows, macOS, EaseUS, Disk Drill, Acronis, Adobe) remain the exclusive property of their respective trademark holders.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. External Links & Affiliate Relationships</h2>
            <p>
              Our website links to third-party vendor websites where software products may be purchased. As disclosed on our{' '}
              <Link to="/affiliate-disclosure" className="text-sky-600 underline font-semibold">
                Affiliate Disclosure
              </Link>{' '}
              page, we may earn an affiliate commission on qualifying purchases. Infratechs does not operate, control, or assume liability for third-party websites, their software security, billing practices, or customer support.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. Governing Law & Contact</h2>
            <p>
              These Terms shall be interpreted in accordance with applicable laws. Inquiries concerning these terms may be directed to <a href={`mailto:${siteConfig.supportEmail}`} className="text-sky-600 underline">{siteConfig.supportEmail}</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
