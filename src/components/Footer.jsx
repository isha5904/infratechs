import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Mail, 
  MapPin, 
  Phone, 
  Laptop, 
  FileText, 
  Scale, 
  BookOpen, 
  CheckCircle2, 
  ExternalLink,
  Cookie
} from 'lucide-react';
import { siteConfig, founderData } from '../data/founderData';
import { publishedCategories } from '../data/categoriesData';
import { useCookies } from '../context/CookieContext';

export default function Footer() {
  const { openCookiePreferences } = useCookies();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      
      {/* Mandatory Affiliate & Editorial Transparency Bar */}
      <div className="bg-slate-950/90 border-b border-slate-800/80 py-4 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5 max-w-4xl">
            <Shield className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-slate-200">Affiliate & Editorial Transparency Disclosure:</strong> Infratechs (infratechs.online) is an independent technology publication. We may earn an affiliate commission when you purchase products or services through certain links on this website. This does not increase the price you pay. Our recommendations are based on research, feature evaluations, and hands-on utility benchmarks.
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

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Editorial Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white">
                <Laptop className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Infratechs
              </span>
            </Link>
            
            <p className="text-xs text-sky-400 font-medium">
              {siteConfig.tagline}
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            
            {/* Publisher Contact Credentials */}
            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <a href={`mailto:${siteConfig.supportEmail}`} className="hover:text-white transition-colors">
                  {siteConfig.supportEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Software Categories */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Software Categories
            </h3>
            <ul className="space-y-2 text-xs">
              {publishedCategories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/category/${cat.id}`}
                    className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{cat.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/software" className="text-sky-400 hover:underline font-semibold">
                  Browse All Categories &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Editorial & Guides */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Editorial & Guides
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/reviews" className="hover:text-sky-400 transition-colors">
                  Software Reviews
                </Link>
              </li>
              <li>
                <Link to="/comparisons" className="hover:text-sky-400 transition-colors">
                  Product Comparisons
                </Link>
              </li>
              <li>
                <Link to="/guides" className="hover:text-sky-400 transition-colors">
                  Practical How-To Guides
                </Link>
              </li>
              <li>
                <Link to="/editorial-policy" className="hover:text-sky-400 transition-colors font-medium text-slate-200">
                  Editorial Policy & Standards
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-400 transition-colors">
                  About Infratechs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-400 transition-colors">
                  Contact Editorial Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance & Legal */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Policies & Compliance
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/affiliate-disclosure" className="text-sky-400 hover:text-sky-300 font-semibold transition-colors">
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
                  Third-Party Refund Policy
                </Link>
              </li>
              <li>
                <button
                  onClick={openCookiePreferences}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1 text-slate-400"
                >
                  <Cookie className="w-3.5 h-3.5 text-amber-400" />
                  <span>Cookie Preferences</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {new Date().getFullYear()} Infratechs ({siteConfig.domain}). All rights reserved. Independent Technology Publication.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link to="/editorial-policy" className="hover:underline">Editorial Guidelines</Link>
            <span>&bull;</span>
            <Link to="/affiliate-disclosure" className="hover:underline">Transparency Statement</Link>
            <span>&bull;</span>
            <Link to="/contact" className="hover:underline">Corrections & Feedback</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
