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
  Lock, 
  Key, 
  Shield, 
  Code2 
} from 'lucide-react';
import { featuredSoftware } from '../data/softwareData';
import { founderData } from '../data/founderData';

export default function SoftwareQuizModal() {
  const [step, setStep] = useState(1);
  const [system, setSystem] = useState('windows');
  const [priority, setPriority] = useState('cleaner');

  const getRecommendation = () => {
    if (priority === 'cleaner') {
      return {
        tool: featuredSoftware.find((s) => s.id === 'wise-care-365'),
        reason: 'Because you selected Windows cleanup & performance, Wise Care 365 is our #1 lab-verified disk optimizer. It recovered 18.42 GB of clutter with safe registry safeguards.',
        actionType: 'software'
      };
    }
    if (priority === 'vpn') {
      return {
        tool: featuredSoftware.find((s) => s.id === 'nordvpn'),
        reason: 'For private networking and remote developer staging, NordVPN’s WireGuard protocol retained 94.2% bandwidth retention in our lab speed tests.',
        actionType: 'software'
      };
    }
    if (priority === 'security') {
      return {
        tool: featuredSoftware.find((s) => s.id === 'bitdefender'),
        reason: 'Bitdefender caught 100% of our 500 zero-day malware samples with zero false positives and zero gaming/coding interruptions.',
        actionType: 'software'
      };
    }
    if (priority === 'passwords') {
      return {
        tool: featuredSoftware.find((s) => s.id === 'onepassword'),
        reason: '1Password features a native developer CLI (`op`), SSH key management, and dual-layer zero-knowledge encryption.',
        actionType: 'software'
      };
    }
    return {
      tool: null,
      reason: `You need custom software built from scratch. Founder ${founderData.name} and our InfraTechs engineering team specialize in full-stack SaaS MVPs, Stripe monetization, and multi-tenant cloud backends.`,
      actionType: 'custom-dev'
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
                Interactive Software & Solution Finder
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Answer 2 quick questions to get our lab’s verified recommendation.
              </p>
            </div>
          </div>
          <button
            onClick={() => { setStep(1); setPriority('cleaner'); }}
            className="text-xs font-semibold text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Quiz
          </button>
        </div>

        {/* Question 1: System */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            1. Select Your Workstation Operating System
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { id: 'windows', label: 'Windows 11 / 10' },
              { id: 'mac', label: 'macOS (Apple)' },
              { id: 'linux', label: 'Linux (Ubuntu/Debian)' },
              { id: 'cloud', label: 'Web / Cloud SaaS' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setSystem(item.id)}
                className={`p-3 rounded-2xl text-xs font-bold border transition-all text-center ${
                  system === item.id
                    ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 ring-2 ring-sky-500/20'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Question 2: Priority */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            2. What is Your Main Requirement?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'cleaner', label: '⭐ Disk Cleanup & PC Speed', icon: <HardDrive className="w-4 h-4 text-amber-500" />, desc: 'Recover storage & boost boot' },
              { id: 'vpn', label: '🔒 VPN & Encrypted Tunnels', icon: <Lock className="w-4 h-4 text-sky-500" />, desc: 'WireGuard & remote dev privacy' },
              { id: 'security', label: '🛡️ Antivirus & Zero-Day Defense', icon: <Shield className="w-4 h-4 text-emerald-500" />, desc: '100% ransomware catch rate' },
              { id: 'passwords', label: '🔑 Passwords & SSH Keys Vault', icon: <Key className="w-4 h-4 text-purple-500" />, desc: 'Zero-knowledge dev vaults' },
              { id: 'custom-dev', label: '🚀 Build a Custom SaaS MVP', icon: <Code2 className="w-4 h-4 text-indigo-500" />, desc: 'Hire founder for web engineering' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setPriority(item.id)}
                className={`p-3.5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  priority === item.id
                    ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/60 ring-2 ring-sky-500/20 text-slate-900 dark:text-white'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {item.icon}
                  <span className="font-bold text-xs">{item.label}</span>
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">{item.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Instant Recommendation Output */}
        <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-sky-500/5 border border-sky-300 dark:border-sky-800 space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-white text-[11px] font-bold">
              VERIFIED MATCH
            </span>
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Evaluated by {founderData.name} (Founder)
            </span>
          </div>

          {rec.actionType === 'software' && rec.tool && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
              <div>
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {rec.tool.name}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-xl leading-relaxed">
                  {rec.reason}
                </p>
                <div className="flex items-center gap-3 mt-2 text-xs">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                    {rec.tool.price}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold text-[11px]">
                    {rec.tool.discount}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                <a
                  href={rec.tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-all shadow-md shadow-sky-600/20 flex items-center gap-1.5"
                >
                  Claim Discount Deal <ExternalLink className="w-3.5 h-3.5" />
                </a>
                {rec.tool.id === 'wise-care-365' && (
                  <Link
                    to="/blog/wise-cleaner-review-2026"
                    className="text-[11px] font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    Read 2026 Lab Review &rarr;
                  </Link>
                )}
              </div>
            </div>
          )}

          {rec.actionType === 'custom-dev' && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
              <div>
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  InfraTechs Labs & Custom SaaS Architecture
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-xl leading-relaxed">
                  {rec.reason}
                </p>
              </div>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-all shadow-md flex items-center gap-1.5 shrink-0"
              >
                Discuss Project with {founderData.name} &rarr;
              </Link>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
