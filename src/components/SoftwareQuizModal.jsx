import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink, 
  RotateCcw, 
  ShieldCheck, 
  HardDrive, 
  Layers, 
  Database, 
  CreditCard, 
  Cloud,
  Code2 
} from 'lucide-react';
import { featuredSoftware } from '../data/softwareData';
import { founderData } from '../data/founderData';

export default function SoftwareQuizModal() {
  const [platform, setPlatform] = useState('saas-web');
  const [focus, setFocus] = useState('fullstack');

  const getRecommendation = () => {
    if (focus === 'fullstack') {
      return {
        title: 'Full-Stack SaaS MVP Engineering Sprint',
        subtitle: 'React 19, Next.js, TypeScript & Node.js',
        reason: `Founder ${founderData.name} and the InfraTechs engineering desk will architect and ship your production-ready SaaS MVP in 4 to 8 weeks with complete Git source code ownership and a 30-day post-launch warranty.`,
        badge: 'RECOMMENDED ARCHITECTURE',
        actionText: 'Book Architecture Review with Isha',
        actionLink: '/contact',
        isInternal: true
      };
    }
    if (focus === 'database') {
      return {
        title: 'Multi-Tenant Database & High-Throughput API',
        subtitle: 'PostgreSQL RLS, Prisma ORM & Redis Cache',
        reason: `Enterprise data isolation using PostgreSQL Row-Level Security (RLS) ensures bulletproof tenant separation, optimized SQL query plans, and sub-10ms response times.`,
        badge: 'DATABASE ARCHITECTURE',
        actionText: 'Consult on Database Design',
        actionLink: '/contact',
        isInternal: true
      };
    }
    if (focus === 'billing') {
      return {
        title: 'Stripe Monetization & Subscription Infrastructure',
        subtitle: 'Recurring Billing, Webhooks & Automated Invoicing',
        reason: `Turnkey Stripe integration with customer self-service billing portals, tier upgrade webhooks, automated tax collection, and dunning retry logic.`,
        badge: 'MONETIZATION SYSTEM',
        actionText: 'Plan Stripe Integration',
        actionLink: '/contact',
        isInternal: true
      };
    }
    if (focus === 'devops') {
      return {
        title: 'Cloud DevOps & High-Frequency Compute',
        subtitle: 'Docker, GitHub Actions CI/CD & Cloud Scaling',
        reason: `Containerized multi-stage deployments with automated GitHub Actions CI/CD pipelines, SSL automation, and ultra-fast NVMe cloud hosting on AWS or Vultr.`,
        badge: 'DEVOPS & CLOUD',
        actionText: 'Discuss Cloud Infrastructure',
        actionLink: '/contact',
        isInternal: true
      };
    }
    // pc-tune / Wise Cleaner
    return {
      title: 'Wise Care 365 & Developer Workstation Optimization',
      subtitle: 'Windows 11 / 10 Disk Cleaning & Build Cache Flush',
      reason: `For developers and power users experiencing workstation slowdowns: Wise Cleaner recovered 18.4GB of build artifacts and halved boot time with zero background telemetry overhead.`,
      badge: 'TESTED WORKSTATION UTILITY',
      actionText: 'Read 2026 Lab Review & Buy Info',
      actionLink: '/blog/wise-cleaner-review-2026',
      isInternal: true
    };
  };

  const rec = getRecommendation();

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-6">
        
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
              <Sparkles className="w-5 h-5 text-amber-500" />
            </span>
            <div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                Interactive SaaS Architecture & Project Matcher
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Select your engineering goals to match the optimal tech stack and delivery roadmap.
              </p>
            </div>
          </div>
          <button
            onClick={() => { setPlatform('saas-web'); setFocus('fullstack'); }}
            className="text-xs font-semibold text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Selection
          </button>
        </div>

        {/* Question 1: Platform Type */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            1. Select Your Target Project Scope
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { id: 'saas-web', label: '🚀 SaaS Web App' },
              { id: 'cloud-backend', label: '☁️ Cloud Backend & API' },
              { id: 'enterprise', label: '🏢 Enterprise Platform' },
              { id: 'workstation', label: '💻 Dev Workstation Tuning' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setPlatform(item.id)}
                className={`p-3 rounded-2xl text-xs font-bold border transition-all text-center ${
                  platform === item.id
                    ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 ring-2 ring-sky-500/20'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Question 2: Architectural Focus */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            2. What is Your Primary Technical Priority?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { 
                id: 'fullstack', 
                label: 'SaaS MVP Engineering', 
                icon: <Layers className="w-4 h-4 text-sky-500" />, 
                desc: 'React 19, Next.js & Node.js MVP shipped in weeks' 
              },
              { 
                id: 'database', 
                label: 'Multi-Tenant Databases', 
                icon: <Database className="w-4 h-4 text-emerald-500" />, 
                desc: 'PostgreSQL RLS, Prisma models & Redis caching' 
              },
              { 
                id: 'billing', 
                label: 'Stripe Monetization', 
                icon: <CreditCard className="w-4 h-4 text-indigo-500" />, 
                desc: 'Subscription billing, invoices & webhooks' 
              },
              { 
                id: 'devops', 
                label: 'Cloud & DevOps Scaling', 
                icon: <Cloud className="w-4 h-4 text-purple-500" />, 
                desc: 'Docker containers, CI/CD & cloud compute' 
              },
              { 
                id: 'pc-tune', 
                label: 'Workstation Optimization', 
                icon: <HardDrive className="w-4 h-4 text-amber-500" />, 
                desc: 'Wise Cleaner Windows 11 disk & startup test' 
              },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setFocus(item.id)}
                className={`p-3.5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  focus === item.id
                    ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/60 ring-2 ring-sky-500/20 text-slate-900 dark:text-white'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {item.icon}
                  <span className="font-bold text-xs">{item.label}</span>
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {item.desc}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Instant Recommendation Output */}
        <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-sky-500/5 border border-sky-300 dark:border-sky-800 space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-white text-[11px] font-bold">
              {rec.badge}
            </span>
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Audited by {founderData.name} ({founderData.title})
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
            <div>
              <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                {rec.title}
              </h4>
              <p className="text-xs font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                {rec.subtitle}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 max-w-xl leading-relaxed">
                {rec.reason}
              </p>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
              <Link
                to={rec.actionLink}
                className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-all shadow-md shadow-sky-600/20 flex items-center gap-1.5 whitespace-nowrap"
              >
                {rec.actionText} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              {focus === 'pc-tune' && (
                <span className="text-[11px] text-slate-400 font-medium">
                  Tested by InfraTechs Engineers
                </span>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
