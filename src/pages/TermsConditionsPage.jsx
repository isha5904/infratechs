import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { founderData } from '../data/founderData';

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold mb-3">
            <FileText className="w-4 h-4" /> Legal Terms of Service
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Last Updated: June 2026 &bull; Published by {founderData.name} ({founderData.company})
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          
          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Agreement to Terms</h2>
            <p>
              By accessing {founderData.company} or engaging our engineering team for custom software development services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you should immediately cease browsing our resources or commissioning projects.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Referral Links & Editorial Independence</h2>
            <p>
              InfraTechs maintains strict editorial transparency. As detailed in our <Link to="/affiliate-disclosure" className="text-sky-600 dark:text-sky-400 underline font-semibold">Affiliate Disclosure</Link>, all vendor links are direct without tracking parameters. In the future, should affiliate partnerships be introduced to support our lab, clicking a buy or deal link may generate a referral fee at zero extra cost to you. All technical evaluations, software reviews, pros & cons, and verdicts represent the independent technical analysis of founder {founderData.name} and our testing team.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Third-Party Products & Software Vendors</h2>
            <p>
              Any software purchased through external or vendor links (including but not limited to Wise Cleaner, Wise Care 365, or cloud compute services) is supplied and licensed directly by those third-party vendors. InfraTechs does not host, distribute, or license these external applications. Your software license agreement, uptime guarantees, technical support, and renewal billing reside strictly between you and the software vendor.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. SaaS Development Engagements</h2>
            <p>
              Clients engaging our technical team for custom web applications, SaaS MVP architecture, API integrations, or cloud deployments are provided with a dedicated Statement of Work (SOW) outlining project milestones, source code deliverables, intellectual property transfers, and payment schedules.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. Disclaimer of Warranties & Limitation of Liability</h2>
            <p>
              All software benchmark data and reviews are provided on an "as is" and "as available" basis for educational and informational purposes. While we rigorously test every tool (including registry safety and disk I/O), system environments vary. In no event shall InfraTechs or {founderData.name} be liable for indirect, incidental, or consequential damages resulting from third-party software installations.
            </p>
          </section>

          <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">6. Inquiries & Contact</h2>
            <p>
              For legal inquiries regarding our terms:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 text-sm">
              Email: <a href={`mailto:${founderData.email}`} className="text-sky-600 dark:text-sky-400 font-semibold">{founderData.email}</a>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
