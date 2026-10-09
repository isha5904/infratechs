import React from 'react';
import { ShieldAlert, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AffiliateNoticeBox({ className = '' }) {
  return (
    <div className={`p-4 rounded-2xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200/80 dark:border-sky-800/80 text-xs text-slate-700 dark:text-slate-300 ${className}`}>
      <div className="flex items-start gap-2.5">
        <Info className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-slate-900 dark:text-white">
            Editorial Disclosure:
          </p>
          <p className="leading-relaxed text-slate-600 dark:text-slate-400">
            Infratechs maintains strict editorial independence. When you purchase products through links on this page, we may earn an affiliate commission at zero additional cost to you. We evaluate software on features, limitations, and user value, never paid placement.{' '}
            <Link to="/affiliate-disclosure" className="text-sky-600 dark:text-sky-400 font-medium underline">
              Learn how we fund our site.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
