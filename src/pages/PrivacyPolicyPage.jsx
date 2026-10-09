import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { siteConfig, founderData } from '../data/founderData';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200">Privacy Policy</span>
        </nav>

        {/* Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-3">
            <Lock className="w-4 h-4" /> Editorial Privacy & Data Standards
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Effective Date: October 2026 &bull; Publisher: {siteConfig.name} ({siteConfig.domain}) &bull; Editor: {founderData.name}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Introduction & Scope</h2>
            <p>
              Infratechs ({siteConfig.domain}), edited by {founderData.name}, operates as an independent technology publication providing software reviews, comparisons, and guides. This Privacy Policy outlines what information is collected when you visit our publication, interact with our content, submit inquiries through our contact forms, or navigate to third-party vendor sites.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Direct Communications:</strong> When you send a message via our Contact page or submit an editorial correction, we collect your name, email address, and message contents solely to respond to your request.
              </li>
              <li>
                <strong>Aggregated Usage Telemetry:</strong> Standard web server log data (such as browser type, general operating system, referring URL, and page load latency) may be logged to maintain site performance and security.
              </li>
              <li>
                <strong>Cookies & Local Preferences:</strong> We use local storage for your Dark/Light theme preferences and cookie consent status. We do not operate invasive behavioral advertising trackers.
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Affiliate Tracking & Third-Party Merchants</h2>
            <p>
              When you click on an external link to purchase software (such as EaseUS, CleverFiles Disk Drill, Acronis, PDFgear, or Wise Cleaner), you are redirected to the official third-party vendor or an affiliate network gateway (such as Partnerize, Avangate/2Checkout, CJ, or direct advertiser programs).
            </p>
            <p>
              These third-party platforms use their own cookies to attribute sales. Infratechs never receives, stores, or processes your credit card numbers, billing addresses, or passwords.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. User Rights (GDPR & CCPA)</h2>
            <p>
              Regardless of your physical location, you have the right to request confirmation of any personal information we hold (such as archived contact emails), request correction, or request permanent deletion. You may exercise these rights at any time by contacting our editorial desk.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. Contact Information</h2>
            <p>
              For privacy-related inquiries, requests, or questions regarding our data practices:
            </p>
            <div className="pt-2 text-xs space-y-1">
              <div><strong>Email:</strong> <a href={`mailto:${siteConfig.supportEmail}`} className="text-sky-600 underline">{siteConfig.supportEmail}</a></div>
              <div><strong>Postal Address:</strong> {siteConfig.address}</div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
