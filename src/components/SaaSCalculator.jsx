import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  Clock, 
  Layers, 
  CreditCard, 
  Database, 
  Cloud, 
  Sparkles,
  ShieldCheck 
} from 'lucide-react';
import { founderData } from '../data/founderData';

export default function SaaSCalculator() {
  const [selectedFeatures, setSelectedFeatures] = useState([
    'auth',
    'database',
    'stripe'
  ]);

  const features = [
    {
      id: 'auth',
      name: 'Multi-Tenant Auth & Role Permissions',
      desc: 'OAuth, Magic Links, Passkeys, and secure tenant boundaries',
      price: 1200,
      days: 3
    },
    {
      id: 'stripe',
      name: 'Stripe Billing & Recurring Subscriptions',
      desc: 'Tier pricing, usage billing, checkout sessions, and webhook handlers',
      price: 1500,
      days: 4
    },
    {
      id: 'database',
      name: 'PostgreSQL + RLS + Redis Cache',
      desc: 'Row-level security, Prisma/Drizzle models, and fast caching',
      price: 1400,
      days: 4
    },
    {
      id: 'dashboard',
      name: 'Custom Interactive Admin Dashboard',
      desc: 'Metrics charts, user management, and CSV data export',
      price: 1600,
      days: 5
    },
    {
      id: 'apis',
      name: 'Third-Party REST / Webhook Integration',
      desc: 'Connect to external CRM, payment gateways, or custom APIs',
      price: 1100,
      days: 3
    },
    {
      id: 'ai',
      name: 'AI / LLM Streaming Integration',
      desc: 'OpenAI/Gemini agent workflows, vector embeddings, and streaming UI',
      price: 1800,
      days: 5
    },
    {
      id: 'devops',
      name: 'Automated CI/CD & AWS/Vultr Deployment',
      desc: 'Docker containerization, staging pipelines, and SSL setup',
      price: 1300,
      days: 3
    }
  ];

  const toggleFeature = (id) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalPrice = selectedFeatures.reduce((sum, id) => {
    const f = features.find((item) => item.id === id);
    return sum + (f ? f.price : 0);
  }, 1000); // base project architecture fee

  const totalDays = selectedFeatures.reduce((sum, id) => {
    const f = features.find((item) => item.id === id);
    return sum + (f ? f.days : 0);
  }, 5); // base setup days

  const weeks = Math.ceil(totalDays / 5);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2">
            <Calculator className="w-3.5 h-3.5" /> Interactive SaaS Estimator
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Custom SaaS MVP Timeline & Investment Calculator
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Toggle the modules you need for your platform to estimate delivery speed and milestone costs.
          </p>
        </div>

        <div className="text-right flex items-center gap-4">
          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="text-[11px] font-semibold text-slate-400 uppercase">Estimated Sprint</div>
            <div className="text-lg font-extrabold text-sky-600 dark:text-sky-400 flex items-center justify-end gap-1">
              <Clock className="w-4 h-4" /> ~{weeks} Weeks
            </div>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="text-[11px] font-semibold text-slate-400 uppercase">Estimated Budget</div>
            <div className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
              ${totalPrice.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Feature Selector Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feat) => {
          const isSelected = selectedFeatures.includes(feat.id);
          return (
            <div
              key={feat.id}
              onClick={() => toggleFeature(feat.id)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex items-start gap-3.5 ${
                isSelected
                  ? 'border-sky-500 bg-sky-50/50 dark:bg-sky-950/30 ring-1 ring-sky-500/30'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/30 dark:bg-slate-800/20'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-lg flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                  isSelected
                    ? 'bg-sky-600 text-white'
                    : 'border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900'
                }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {feat.name}
                  </h4>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    +${feat.price}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Output Summary & Call to Action */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-sky-300 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Fixed-price milestones &bull; 30-day bug warranty included
          </div>
          <h4 className="text-xl font-bold">
            Selected: {selectedFeatures.length} Core SaaS Architecture Modules
          </h4>
          <p className="text-xs text-slate-400">
            Sprint lead by founder {founderData.name} with full Git source code handover.
          </p>
        </div>

        <Link
          to="/contact"
          className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm transition-all shadow-md flex items-center gap-2 whitespace-nowrap active:scale-95"
        >
          Book Technical Review with {founderData.name} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
