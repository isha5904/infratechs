import React from 'react';
import { Link } from 'react-router-dom';
import { RefreshCcw, ShieldCheck, AlertCircle, ExternalLink, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/founderData';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200">Refund Policy</span>
        </nav>

        {/* Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-3">
            <RefreshCcw className="w-4 h-4" /> Third-Party Purchases & Returns Policy
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Refund & Cancellation Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Effective Date: October 2026 &bull; Publisher: {siteConfig.name} ({siteConfig.domain})
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Important Clarification: Infratechs Is a Publisher</h2>
            <p>
              Infratechs (<span className="font-semibold text-slate-900 dark:text-white">infratechs.online</span>) is an independent technology review and product discovery publication. <strong>We do not directly sell, license, bill, or distribute software keys ourselves.</strong>
            </p>
            <p>
              All software products evaluated on our platform (including EaseUS Data Recovery, CleverFiles Disk Drill, Acronis Cyber Protect, Macrium Reflect, PDFgear, Adobe Acrobat, and Wise Cleaner) are sold and fulfilled directly by the respective software companies or their authorized merchant payment gateways (such as 2Checkout/Verifone/Avangate, Cleverbridge, FastSpring, or Digital River).
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. How to Request a Refund for Third-Party Software</h2>
            <p>
              If you purchased a software utility via an affiliate link on our site and wish to request a refund, cancel an auto-renewal subscription, or seek technical assistance:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm">
              <li>
                <strong>Locate Your Order Confirmation Email:</strong> Search your inbox for your purchase invoice from the merchant (e.g., 2Checkout, Cleverbridge, or the vendor's direct billing team).
              </li>
              <li>
                <strong>Check the Vendor's Guarantee Window:</strong> Most major utility developers provide a <strong>14-day to 30-day money-back guarantee</strong> (some offer up to 60 days).
              </li>
              <li>
                <strong>Submit Your Request Directly to the Vendor:</strong> Click the support or refund link within your confirmation email or log into the vendor's customer account dashboard.
              </li>
            </ol>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Typical Vendor Refund Windows</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                <div className="font-bold text-slate-900 dark:text-white">WiseCleaner (Wise Care 365)</div>
                <p className="text-slate-500">Offers a 60-day money-back guarantee via official store.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                <div className="font-bold text-slate-900 dark:text-white">EaseUS Software</div>
                <p className="text-slate-500">Offers a 30-day money-back guarantee for technical failure.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                <div className="font-bold text-slate-900 dark:text-white">CleverFiles (Disk Drill)</div>
                <p className="text-slate-500">Provides refund evaluations through their official support desk.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1">
                <div className="font-bold text-slate-900 dark:text-white">Acronis Cyber Protect</div>
                <p className="text-slate-500">Offers a 30-day cancellation window on consumer home plans.</p>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Infratechs Assistance</h2>
            <p>
              While we cannot process refunds directly on behalf of third-party vendors because we do not hold your payment credentials, our editorial team is happy to help point you toward the correct vendor support channel if you are having difficulty reaching them.
            </p>
            <p className="text-xs text-slate-500">
              Reach out to us at: <a href={`mailto:${siteConfig.supportEmail}`} className="text-sky-600 underline">{siteConfig.supportEmail}</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
