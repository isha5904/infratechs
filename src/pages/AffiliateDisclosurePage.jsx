import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink, 
  Scale, 
  DollarSign, 
  Mail,
  Award
} from 'lucide-react';
import { siteConfig, founderData } from '../data/founderData';

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200">Affiliate Disclosure</span>
        </nav>

        {/* Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Transparency & Compliance Statement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Affiliate Disclosure & Transparency Policy
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Transparency is central to everything we publish. This page explains how Infratechs funds its independent research, software reviews, comparison tables, and practical guides.
          </p>
          <div className="text-xs text-slate-400">
            Last Updated: October 2026 &bull; Published by Infratechs Editorial Desk
          </div>
        </header>

        {/* 1. Core Summary Statement */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-lg">
            <Scale className="w-6 h-6" />
            <h2>The Short Version</h2>
          </div>
          
          <div className="p-6 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-slate-800 dark:text-slate-200 text-sm leading-relaxed space-y-3 font-medium">
            <p>
              “Infratechs may earn a commission when you purchase a product or service through certain links on this website. This does not necessarily increase the price you pay. Affiliate relationships do not replace our commitment to providing clear and useful information. Our recommendations are based on relevant product information and suitability, and any sponsored relationships are explicitly disclosed.”
            </p>
          </div>
        </section>

        {/* 2. Our Commitment to Honesty */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-sky-500" />
            <span>Our Commitment to Editorial Honesty</span>
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Our primary goal is to provide helpful, practical, and research-based content for consumers, developers, and professionals choosing software tools—including data recovery utilities, backup suites, mobile transfer apps, and PDF editors.
            </p>
            <p>
              Products and services mentioned on our website are evaluated based on features, compatibility, verified pricing, performance benchmarks, and real limitations.
            </p>
            <p className="font-semibold text-slate-900 dark:text-white">
              We do not accept payment to write fake positive reviews. Affiliate commissions do not dictate our editorial opinions, comparison matrices, or product conclusions.
            </p>
          </div>
        </section>

        {/* 3. How Affiliate Links Work */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-indigo-500" />
            <span>How Affiliate Links Function</span>
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              When you click an outbound link on our website to a third-party software provider, an authorized tracking identifier supplied by the affiliate network (such as Partnerize, Avangate/2Checkout, CJ, or direct advertiser programs) may be used. This informs the merchant that you arrived from Infratechs.
            </p>
            <p>
              If you decide to complete a purchase, Infratechs may receive a referral fee or commission. This funding covers web hosting, laboratory hardware testing rigs, research hours, and website maintenance.
            </p>
            <ul className="space-y-2 pt-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>No Price Markup:</strong> Using an affiliate link never increases the purchase price you pay.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Exclusive Discounts:</strong> In certain instances, affiliate links connect you to special vendor introductory discounts or seasonal promotional rates.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>SEO Attributes:</strong> All commercial affiliate links on Infratechs utilize <code>rel="sponsored"</code> or <code>rel="nofollow"</code> attributes to comply with Google search guidelines.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 4. Third-Party Products & Liability */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <span>Third-Party Services & Limitation of Liability</span>
          </h2>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Any software or service you purchase is sold and fulfilled by that third-party vendor, not by Infratechs. Your purchase contract, license keys, customer support, billing, refunds, and terms of service are governed exclusively by the third-party merchant's own policies.
            </p>
            <p>
              We strive to keep software specifications, compatibility lists, and pricing up to date, but vendors may alter features or prices without prior notice. Always verify final checkout pricing, system requirements, and return terms directly on the merchant's official website before completing a transaction.
            </p>
          </div>
        </section>

        {/* 5. Contact Section */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Mail className="w-5 h-5 text-sky-500" />
            <span>Questions Regarding Our Affiliate Relationships?</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            If you have questions about our affiliate partnerships, editorial independence, or would like to submit a software product for objective evaluation, please reach out directly:
          </p>
          <div className="pt-2 text-xs space-y-1">
            <div><strong>Email:</strong> <a href={`mailto:${siteConfig.supportEmail}`} className="text-sky-600 hover:underline">{siteConfig.supportEmail}</a></div>
            <div><strong>Postal Address:</strong> {siteConfig.address}</div>
            <div><strong>Publisher:</strong> {founderData.name} ({siteConfig.domain})</div>
          </div>
        </section>

      </div>
    </div>
  );
}
