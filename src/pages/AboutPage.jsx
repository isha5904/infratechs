import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Laptop, 
  ShieldCheck, 
  Target, 
  BookOpen, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  Scale, 
  ArrowRight,
  UserCheck
} from 'lucide-react';
import { siteConfig, founderData } from '../data/founderData';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200">About Us</span>
        </nav>

        {/* Page Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Independent Technology Publication</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Infratechs
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {siteConfig.description}
          </p>
        </header>

        {/* Core Mission */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3 text-sky-600 dark:text-sky-400 font-bold text-lg">
            <Target className="w-6 h-6" />
            <h2>What We Cover & Why We Exist</h2>
          </div>
          
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Infratechs (<span className="font-semibold text-slate-900 dark:text-white">infratechs.online</span>) was founded to solve a pervasive problem in the consumer software industry: marketing exaggeration and confusing subscription terms.
            </p>
            <p>
              When a hard drive fails, a phone needs migration, or an organization needs to choose a PDF editor, users are frequently confronted with misleading "100% Guaranteed" claims or hidden auto-renewing subscriptions. Infratechs exists to provide balanced, research-backed software reviews, direct side-by-side comparisons, and actionable troubleshooting guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
              <div className="font-bold text-xs text-slate-900 dark:text-white">What We Cover</div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Data recovery tools, backup and disk imaging suites, mobile transfer utilities, PDF software, system maintenance tools, and developer infrastructure.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
              <div className="font-bold text-xs text-slate-900 dark:text-white">Who Reads Infratechs</div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Individual consumers, freelancers, small business owners, and technical professionals looking for trustworthy software guidance before buying.
              </p>
            </div>
          </div>
        </section>

        {/* Editorial Independence & Commercial Transparency */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3 text-sky-600 dark:text-sky-400 font-bold text-lg">
            <Scale className="w-6 h-6" />
            <h2>Editorial Integrity & Transparency</h2>
          </div>
          
          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Our editorial standards are rooted in straightforward transparency:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>No Paid Reviews:</strong> We do not accept payment to write positive reviews or fabricate product ratings.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Explicit Testing Criteria:</strong> We clearly distinguish between hands-on benchmark tests (such as our Wise Cleaner workstation tests) and structured research evaluations based on verified documentation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Affiliate Funding Disclosure:</strong> To maintain our publication and keep guides accessible for free, we participate in affiliate programs (including Partnerize, Avangate/2Checkout, and others). When you buy through our links, we may receive a referral fee at zero additional cost to you.</span>
              </li>
            </ul>
          </div>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
            <Link to="/editorial-policy" className="text-sky-600 dark:text-sky-400 hover:underline">
              Read Our Full Editorial Policy &rarr;
            </Link>
            <Link to="/affiliate-disclosure" className="text-sky-600 dark:text-sky-400 hover:underline">
              Read Affiliate Disclosure &rarr;
            </Link>
          </div>
        </section>

        {/* Editorial Leadership & Contact Details */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3 text-sky-600 dark:text-sky-400 font-bold text-lg">
            <UserCheck className="w-6 h-6" />
            <h2>Editorial Leadership & Contact</h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <img
              src={founderData.avatarUrl}
              alt={founderData.name}
              className="w-20 h-20 rounded-2xl object-cover ring-2 ring-sky-500 shrink-0 shadow-md"
            />
            <div className="space-y-1.5">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                {founderData.name}
              </h3>
              <p className="text-xs text-sky-600 dark:text-sky-400 font-semibold">
                {founderData.title}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                {founderData.bio}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>{siteConfig.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-400 shrink-0" />
              <a href={`mailto:${siteConfig.supportEmail}`} className="hover:text-sky-600 underline">
                {siteConfig.supportEmail}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{siteConfig.phone}</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
