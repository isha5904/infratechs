import React from 'react';
import { ExternalLink, CheckCircle2, AlertTriangle, ShieldCheck, Clock } from 'lucide-react';
import AffiliateNoticeBox from './AffiliateNoticeBox';

export default function ComparisonTable({ tools, title, categoryLabel, showDisclosure = true }) {
  if (!tools || tools.length === 0) return null;

  return (
    <div className="space-y-6">
      {showDisclosure && <AffiliateNoticeBox />}

      {/* Desktop / Tablet Table View */}
      <div className="hidden lg:block overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
              <th className="py-4 px-5 font-bold uppercase tracking-wider text-[11px]">Software / Purpose</th>
              <th className="py-4 px-4 font-bold uppercase tracking-wider text-[11px]">Supported OS</th>
              <th className="py-4 px-4 font-bold uppercase tracking-wider text-[11px]">Key Features</th>
              <th className="py-4 px-4 font-bold uppercase tracking-wider text-[11px]">Pricing (Verified)</th>
              <th className="py-4 px-4 font-bold uppercase tracking-wider text-[11px]">Important Limitations</th>
              <th className="py-4 px-4 font-bold uppercase tracking-wider text-[11px]">Best Suited For</th>
              <th className="py-4 px-5 text-right font-bold uppercase tracking-wider text-[11px]">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {tools.map((tool) => (
              <tr key={tool.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                
                {/* Product Name & Purpose */}
                <td className="py-4 px-5 align-top max-w-[200px]">
                  <div className="space-y-1">
                    <div className="font-bold text-sm text-slate-900 dark:text-white">
                      {tool.name}
                    </div>
                    {tool.badge && (
                      <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                        {tool.badge}
                      </span>
                    )}
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                      {tool.primaryPurpose}
                    </p>
                  </div>
                </td>

                {/* Supported OS */}
                <td className="py-4 px-4 align-top text-slate-600 dark:text-slate-300 font-medium">
                  <div className="space-y-0.5">
                    {Array.isArray(tool.supportedOS) ? (
                      tool.supportedOS.map((os, i) => (
                        <div key={i} className="text-[11px]">{os}</div>
                      ))
                    ) : (
                      <span className="text-[11px]">{tool.supportedOS}</span>
                    )}
                  </div>
                </td>

                {/* Key Features */}
                <td className="py-4 px-4 align-top max-w-[240px]">
                  <ul className="space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
                    {tool.keyFeatures.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </td>

                {/* Pricing & Verified Date */}
                <td className="py-4 px-4 align-top min-w-[150px]">
                  <div className="space-y-1">
                    <div className="font-semibold text-slate-900 dark:text-white text-xs">
                      {tool.pricing}
                    </div>
                    <div className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>Verified: {tool.pricingVerifiedDate}</span>
                    </div>
                  </div>
                </td>

                {/* Limitations */}
                <td className="py-4 px-4 align-top max-w-[220px]">
                  <ul className="space-y-1 text-[11px] text-slate-500 dark:text-slate-400">
                    {tool.limitations.slice(0, 2).map((lim, i) => (
                      <li key={i} className="flex items-start gap-1 leading-snug">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{lim}</span>
                      </li>
                    ))}
                  </ul>
                </td>

                {/* Best Suited For */}
                <td className="py-4 px-4 align-top text-[11px] text-slate-600 dark:text-slate-300 max-w-[180px]">
                  {tool.bestSuitedFor}
                </td>

                {/* Action Link */}
                <td className="py-4 px-5 align-top text-right whitespace-nowrap">
                  <a
                    href={tool.affiliateUrl || tool.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-sm shadow-sky-600/20 transition-all"
                  >
                    <span>{tool.buttonLabel || 'Visit Official Website'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <div className="text-[10px] text-slate-400 mt-1">
                    Direct Official Link
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card-Based Comparison Layout */}
      <div className="lg:hidden space-y-4">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-bold text-base text-slate-900 dark:text-white">
                  {tool.name}
                </div>
                {tool.badge && (
                  <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                    {tool.badge}
                  </span>
                )}
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {tool.pricing.split('/')[0]}
                </div>
                <div className="text-[10px] text-slate-400">
                  Checked: {tool.pricingVerifiedDate}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300">
              <strong>Purpose:</strong> {tool.primaryPurpose}
            </p>

            <div className="text-xs space-y-1">
              <div className="font-semibold text-slate-800 dark:text-slate-200">OS Compatibility:</div>
              <div className="text-slate-600 dark:text-slate-400">
                {Array.isArray(tool.supportedOS) ? tool.supportedOS.join(', ') : tool.supportedOS}
              </div>
            </div>

            <div className="text-xs space-y-1.5">
              <div className="font-semibold text-slate-800 dark:text-slate-200">Key Features:</div>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                {tool.keyFeatures.slice(0, 3).map((f, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-xs space-y-1.5">
              <div className="font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" /> Important Limitations:
              </div>
              <ul className="space-y-1 text-slate-500 dark:text-slate-400">
                {tool.limitations.slice(0, 2).map((l, i) => (
                  <li key={i}>&bull; {l}</li>
                ))}
              </ul>
            </div>

            <div className="text-xs bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl text-slate-600 dark:text-slate-300">
              <strong>Best suited for:</strong> {tool.bestSuitedFor}
            </div>

            <div className="pt-2">
              <a
                href={tool.affiliateUrl || tool.officialUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-sm transition-colors"
              >
                <span>{tool.buttonLabel || 'Visit Official Website'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <div className="text-[10px] text-center text-slate-400 mt-1.5">
                Official product site &bull; Verified pricing
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
