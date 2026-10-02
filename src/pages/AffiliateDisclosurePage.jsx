import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle, 
  AlertCircle, 
  DollarSign, 
  Tag, 
  Users, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  Award,
  Code2
} from 'lucide-react';
import { founderData } from '../data/founderData';

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200">Affiliate Disclosure</span>
        </nav>

        {/* Page Title & Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-xs font-semibold mb-3">
            <ShieldCheck className="w-4 h-4" /> 100% Transparency Commitment
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Affiliate Disclosure & Transparency Statement
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
            Last updated: <span className="text-slate-700 dark:text-slate-300 font-semibold">June 2026</span> &bull; {founderData.company}
          </p>
        </div>

        {/* Founder & Page Owner Verified Identity Box */}
        <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <img 
              src={founderData.avatarUrl} 
              alt={founderData.name} 
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-4 ring-sky-500/20 shadow-md"
            />
            <div className="space-y-1.5 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {founderData.name}
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" /> Verified Page Owner & Founder
                </span>
              </div>
              <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
                {founderData.title} &bull; {founderData.company}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                "At InfraTechs (infratechs.online), our primary business is custom software engineering and SaaS product development. In addition to delivering client platforms, our technical team tests and reviews software tools like Wise Cleaner and developer utilities. At present, we do not utilize active affiliate tracking links (all links are direct). We believe in complete transparency about our editorial standards and future referral policies."
              </p>
            </div>
          </div>
          
          <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
            <div>
              <strong>Founder Direct Contact:</strong>{' '}
              <a href={`mailto:${founderData.email}`} className="text-sky-600 dark:text-sky-400 hover:underline">
                {founderData.email}
              </a>
            </div>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-1 font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700"
            >
              Contact Founder & Engineering Desk <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Overview Callout */}
        <div className="bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 rounded-2xl p-6 text-slate-800 dark:text-slate-200">
          <h3 className="text-base font-bold text-sky-900 dark:text-sky-200 flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            Current Status & The Short Version:
          </h3>
          <p className="text-sm leading-relaxed text-sky-950 dark:text-sky-100">
            Transparency is central to everything we do. This page explains how <strong>{founderData.company}</strong> operates. <strong>Current Status:</strong> As of now, InfraTechs does not use active affiliate tracking links. All software links on our site (such as the Wise Cleaner purchase link) are direct vendor links without referral tracking codes. In the future, should we participate in affiliate programmes to support our research lab, we may earn a referral commission at zero extra cost to you.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">

          {/* Section: Our Commitment to Technical Honesty */}
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              Our Commitment to Technical Honesty
            </h2>
            <p>
              As a dedicated software development and cloud engineering firm, our recommendations are grounded in practical utility, code hygiene, and real hardware testing. Whether evaluating PC maintenance utilities such as Wise Cleaner, cloud compute providers, or security solutions, tools are selected based on security, speed, and real-world usefulness.
            </p>
            <p className="font-medium text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border-l-4 border-emerald-500">
              We never accept payments to write fake or altered positive reviews. Prospective affiliate relationships will never influence our technical evaluations or performance metrics.
            </p>
          </section>

          {/* Section: How Referral & Buy Links Work */}
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <Tag className="w-6 h-6 text-sky-500" />
              How Product & Future Affiliate Links Work
            </h2>
            <p>
              Currently, all outbound product and software links across our site are direct official vendor links with no tracking codes attached. In the future, should affiliate partnerships be introduced, clicking a designated "Buy" or deal button may pass a secure referral code to the merchant informing them the referral came from InfraTechs.
            </p>
            <p>
              If you proceed to purchase software in that future scenario, the vendor may provide our company with a small referral fee. This helps support our technical writing and engineering benchmarks.
            </p>
          </section>

          {/* Section: No Extra Cost to You */}
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <DollarSign className="w-6 h-6 text-emerald-500" />
              Zero Additional Cost to You
            </h2>
            <p>
              Affiliate links, when implemented, will never increase the price you pay. In many instances, partnership arrangements allow publishers to pass on promotional discounts (such as coupons or seasonal deals) directly to readers.
            </p>
          </section>

          {/* Section: Third-Party Services Disclaimer */}
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <Users className="w-6 h-6 text-indigo-500" />
              Third-Party Services & Merchant Responsibility
            </h2>
            <p>
              Any third-party utility or application you purchase is provided and supported by that external company, not directly by InfraTechs. Your billing, license key issuance, customer support, and money-back guarantee terms are managed directly by the vendor.
            </p>
          </section>

          {/* Section: Questions? */}
          <section className="bg-gradient-to-r from-sky-900 to-indigo-950 text-white p-6 sm:p-8 rounded-2xl space-y-4 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2.5">
              <HelpCircle className="w-6 h-6 text-sky-400" />
              Have Questions?
            </h2>
            <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
              If you have any questions about how our software development agency manages prospective affiliate relationships or curates recommendations, feel free to reach out directly to founder {founderData.name}.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-sm">
              <a
                href={`mailto:${founderData.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-all shadow-md"
              >
                <Mail className="w-4 h-4" /> Email: {founderData.email}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-colors border border-white/20"
              >
                Go to Contact Page &rarr;
              </Link>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
