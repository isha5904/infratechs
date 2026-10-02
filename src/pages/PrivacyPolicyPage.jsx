import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { founderData } from '../data/founderData';

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
            <Lock className="w-4 h-4" /> GDPR & CCPA Compliant
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Effective Date: June 2026 &bull; Page Owner: {founderData.name} ({founderData.company})
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Introduction & Scope</h2>
            <p>
              {founderData.company} ("we," "our," or "us"), operated under the leadership of founder {founderData.name}, is committed to protecting your privacy. This Privacy Policy details how we collect, use, and safeguard your personal information when visiting our website, reading our software benchmarks, engaging our custom SaaS development services, or clicking outbound affiliate links.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Direct Communications:</strong> When you submit an inquiry through our Contact page, request a custom SaaS architecture quote, or email us, we collect your name, email address, company details, and project notes.
              </li>
              <li>
                <strong>Anonymous Usage Data:</strong> We collect aggregate, anonymized technical telemetry (browser type, operating system, page response time, referrer URL) to optimize reading speed and ensure our responsive design renders cleanly.
              </li>
              <li>
                <strong>Cookies & Referral Tracking:</strong> As outlined in our cookie banner and affiliate disclosure, third-party vendor platforms may drop standard web cookies when navigating to their respective services (such as Wise Cleaner or cloud hosting providers).
              </li>
            </ul>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. How We Handle Vendor & External Links</h2>
            <p>
              We do not sell, rent, or trade your personal data to data brokers. Currently, all software links on InfraTechs are direct links without referral tracking codes. In the future, should affiliate partnerships be activated, merchant platforms may register an encrypted referral identifier confirming that the referral originated from InfraTechs (infratechs.online). No personal banking credentials, credit card details, or passwords ever cross our servers.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Your Cookie Controls & Opt-Outs</h2>
            <p>
              You maintain total autonomy over your cookie preferences. Through our bottom Cookie Banner, you can choose to enable "Essential Only" or customize granular categories (Analytics vs Marketing & Deals). You can adjust your consent at any time via the "Cookie Settings" link in our website footer.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. Data Retention & Security Protocols</h2>
            <p>
              All client communications submitted through our contact channels are encrypted in transit via TLS 1.3. We retain contact inquiries only as long as necessary to fulfill project quotes or customer support obligations.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">6. Contact Data Privacy Officer</h2>
            <p>
              For questions regarding privacy, data deletion requests under GDPR/CCPA, or affiliate tracking questions:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 text-sm space-y-1">
              <div><strong>Owner & Compliance Lead:</strong> {founderData.name}</div>
              <div><strong>Email:</strong> <a href={`mailto:${founderData.email}`} className="text-sky-600 dark:text-sky-400">{founderData.email}</a></div>
              <div><strong>Address:</strong> {founderData.address}</div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
