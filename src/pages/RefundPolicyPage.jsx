import React from 'react';
import { Link } from 'react-router-dom';
import { RotateCcw, AlertCircle, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';
import { founderData } from '../data/founderData';

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-3">
            <RotateCcw className="w-4 h-4" /> Transparent Refund Guidelines
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Refund Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Last Updated: June 2026 &bull; Published by {founderData.name} ({founderData.company})
          </p>
        </div>

        {/* Notice on Two Types of Transactions */}
        <div className="p-6 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
          <h3 className="text-base font-bold text-sky-950 dark:text-sky-200 mb-2 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            Important Notice Regarding Two Distinct Transaction Types
          </h3>
          <p>
            Because {founderData.company} operates as a <strong>custom software engineering agency</strong> and also provides <strong>tested tool recommendations</strong>, refund policies are categorized based on whether you purchased third-party software or commissioned custom software engineering from us.
          </p>
        </div>

        {/* Section 1: Third-Party Affiliate Software Purchases */}
        <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Third-Party Software & Workstation Utilities
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                (e.g., Wise Cleaner, Wise Care 365, or cloud compute services)
              </p>
            </div>
          </div>

          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
            <p>
              When you click a buy or discounted link on our site and purchase third-party desktop utilities, developer tools, or cloud hosting, your financial transaction is processed directly by that vendor or their payment merchant (e.g. 2Checkout, Stripe, Paddle, or cleverbridge).
            </p>
            <p className="font-semibold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border-l-4 border-amber-500">
              InfraTechs does not process, hold, or bill credit cards for third-party software products. Consequently, refund requests must be directed to the respective vendor's official customer support department.
            </p>
            <p>
              Reputable vendors we review offer transparent money-back guarantees:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li><strong>WiseCleaner (Wise Care 365):</strong> Offers an official 60-day money-back guarantee. Contact support@wisecleaner.com.</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Custom SaaS Development & Engineering Services */}
        <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Custom SaaS Development & Consulting Services
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                (Contracts directly with {founderData.name} & InfraTechs)
              </p>
            </div>
          </div>

          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
            <p>
              For clients who contract us directly for custom web application engineering, microservice architectures, API integrations, or code security audits, terms are governed by your individual Statement of Work (SOW):
            </p>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span><strong>Discovery & Architecture Phase:</strong> If a project is cancelled before engineering sprints commence, deposits are refunded minus a 15% technical analysis fee.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span><strong>Milestone Delivery:</strong> Payments are tied to agreed deliverables (e.g. database schema, frontend UI, Stripe integration). Approved milestones are non-refundable once verified code is pushed to your Git repository.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                <span><strong>30-Day Bug Warranty:</strong> All custom code delivered by founder {founderData.name} and our senior team includes a complimentary 30-day post-launch warranty where any bugs in agreed specifications are fixed at no cost.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Support Section */}
        <section className="bg-slate-100 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-base">Have a Question About a Refund or Charge?</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Our support desk can help locate your vendor receipt or assist with dev project billing.</p>
          </div>
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-sky-600 text-white font-semibold text-xs sm:text-sm rounded-xl hover:bg-sky-500 transition-colors shrink-0"
          >
            Contact Billing Support
          </Link>
        </section>

      </div>
    </div>
  );
}
