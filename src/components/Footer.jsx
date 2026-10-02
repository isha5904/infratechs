import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, MapPin, Phone, Code, Lock, Heart, ExternalLink, Cookie } from 'lucide-react';
import { founderData } from '../data/founderData';
import { useCookies } from '../context/CookieContext';

export default function Footer() {
  const { openCookiePreferences } = useCookies();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      
      {/* Mandatory Affiliate Disclosure Bar in Footer */}
      <div className="bg-slate-950/80 border-b border-slate-800/80 py-4 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5 max-w-4xl">
            <Shield className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-slate-200">Affiliate & Transparency Disclosure:</strong> InfraTechs (infratechs.online) delivers bespoke SaaS engineering and client applications. We also test, benchmark, and recommend developer tools and PC optimization utilities (such as Wise Cleaner). Currently, no active affiliate tracking links are used on this site (all vendor links are direct). In the future, should we participate in affiliate programs to support research, we may receive a referral commission at zero extra cost to you.
            </p>
          </div>
          <Link
            to="/affiliate-disclosure"
            className="text-sky-400 hover:text-sky-300 font-semibold whitespace-nowrap underline underline-offset-2 flex items-center gap-1 shrink-0"
          >
            Read Full Disclosure &rarr;
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Founder Summary */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-sky-600 flex items-center justify-center text-white">
                <Code className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                InfraTechs <span className="text-sky-400 text-sm font-semibold">IT Solutions</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              A premier custom software development and cloud engineering firm founded by <span className="text-slate-200 font-medium">{founderData.name}</span>. We architect production web platforms and provide transparent technical tool benchmarks.
            </p>
            
            {/* Founder badge info in footer */}
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs space-y-1">
              <div className="text-slate-300 font-semibold flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-sky-400" />
                Led by {founderData.name} ({founderData.title})
              </div>
              <div className="text-slate-400 text-[11px]">
                {founderData.experienceYears}+ years in software engineering & cybersecurity audits.
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{founderData.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <a href={`mailto:${founderData.email}`} className="hover:text-white transition-colors">
                  {founderData.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>{founderData.phone}</span>
              </div>
            </div>
          </div>

          {/* SaaS Development Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              SaaS Development
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/services" className="hover:text-sky-400 transition-colors">
                  Custom SaaS Architecture
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-400 transition-colors">
                  Full-Stack React & Next.js
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-400 transition-colors">
                  Stripe & Billing Integrations
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-400 transition-colors">
                  API & Microservices
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-400 transition-colors">
                  Cloud Infrastructure (AWS/GCP)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sky-400 font-semibold hover:underline">
                  Request Dev Quote &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Software Reviews & Benchmarks */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Reviews & Benchmarks
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/blog/wise-cleaner-review-2026" className="text-sky-400 font-medium hover:underline flex items-center gap-1">
                  ⭐ Wise Cleaner 2026 Review
                </Link>
              </li>
              <li>
                <Link to="/blog/best-vpns-developers-remote-work-2026" className="hover:text-sky-400 transition-colors">
                  Best VPNs for Developers
                </Link>
              </li>
              <li>
                <Link to="/blog/antivirus-endpoint-protection-lab-test-2026" className="hover:text-sky-400 transition-colors">
                  Antivirus Lab Benchmark
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-sky-400 transition-colors">
                  Password Manager Shootout
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-sky-400 transition-colors">
                  Cloud Hosting Comparison
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-sky-400 transition-colors">
                  All Tech Blog Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Mandatory Legal & Policies */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Legal & Transparency
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/affiliate-disclosure" className="text-slate-200 font-semibold hover:text-sky-400 transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-sky-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-sky-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-sky-400 transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <button
                  onClick={openCookiePreferences}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <Cookie className="w-3.5 h-3.5" /> Cookie Settings
                </button>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-400 transition-colors">
                  Contact & Page Owner
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {founderData.company}. Founded by {founderData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy</Link>
            <Link to="/terms-conditions" className="hover:text-slate-400 transition-colors">Terms</Link>
            <Link to="/refund-policy" className="hover:text-slate-400 transition-colors">Refunds</Link>
            <Link to="/affiliate-disclosure" className="hover:text-slate-400 transition-colors">Affiliate</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
