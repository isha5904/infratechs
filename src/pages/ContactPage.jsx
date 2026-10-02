import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  Code, 
  ShieldCheck, 
  Award, 
  Globe, 
  Share2, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { founderData } from '../data/founderData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'saas-development',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200">Contact & Page Owner Details</span>
        </nav>

        {/* Hero Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" /> Reach Founder & Technical Team
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact Us & Page Owner Details
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Have a custom SaaS development project in mind? Want to verify a software benchmark or discuss an affiliate partnership? Contact the founder directly below.
          </p>
        </div>

        {/* FOUNDER & PAGE OWNER SPOTLIGHT CARD */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Left: Founder Avatar & Quick Bio */}
            <div className="lg:col-span-4 text-center lg:text-left space-y-4">
              <div className="relative inline-block mx-auto lg:mx-0">
                <img 
                  src={founderData.avatarUrl} 
                  alt={founderData.name} 
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl object-cover ring-4 ring-sky-500/30 shadow-xl mx-auto"
                />
                <span className="absolute bottom-2 right-2 bg-emerald-500 text-white p-1.5 rounded-xl shadow" title="Verified Founder">
                  <ShieldCheck className="w-4 h-4" />
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {founderData.name}
                </h2>
                <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
                  {founderData.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Page Owner & Lead Engineer &bull; {founderData.company}
                </p>
              </div>

              {/* Founder Stats */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-center">
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                  <div className="font-bold text-slate-900 dark:text-white text-base">12+</div>
                  <div className="text-[10px] text-slate-500">Yrs Coding</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                  <div className="font-bold text-slate-900 dark:text-white text-base">85+</div>
                  <div className="text-[10px] text-slate-500">SaaS Built</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                  <div className="font-bold text-slate-900 dark:text-white text-base">240+</div>
                  <div className="text-[10px] text-slate-500">Tools Tested</div>
                </div>
              </div>

              {/* Direct Links */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-slate-400">
                <a href={founderData.social.github} target="_blank" rel="noreferrer" title="Founder GitHub" className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <Globe className="w-4 h-4" />
                </a>
                <a href={founderData.social.linkedin} target="_blank" rel="noreferrer" title="Founder LinkedIn" className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <Share2 className="w-4 h-4" />
                </a>
                <a href={founderData.social.twitter} target="_blank" rel="noreferrer" title="Founder Twitter / X" className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: The Founder's Story & Background Details */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                <Award className="w-3.5 h-3.5" /> Founder Background & Mission
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Why I Founded InfraTechs & Our Engineering Philosophy
              </h3>
              
              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Hello, I’m <strong>{founderData.name}</strong>. Over my career as a full-stack engineer and enterprise solutions architect, I built InfraTechs to provide high-caliber SaaS development and engineering services to businesses worldwide.
                </p>
                <p>
                  Alongside our custom development engagements, we believe in sharing our practical knowledge. When we test developer workstations, cloud hosting architectures, or system optimization tools (such as <em>Wise Cleaner</em>), we evaluate them through strict engineering metrics.
                </p>
                <p>
                  Whether you need custom software engineering or have questions about our technical evaluations, our engineering desk is always open.
                </p>
              </div>

              {/* Certifications & Tech stack */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Technical Certifications & Specializations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {founderData.certifications.map((cert, idx) => (
                    <span key={idx} className="text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* CONTACT FORM + BUSINESS INFORMATION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Company & Office Details
              </h3>
              
              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">Headquarters:</strong>
                    <span className="text-slate-600 dark:text-slate-300">{founderData.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">Founder Direct Email:</strong>
                    <a href={`mailto:${founderData.email}`} className="text-sky-600 dark:text-sky-400 hover:underline">
                      {founderData.email}
                    </a>
                    <div className="text-xs text-slate-400 mt-0.5">For partnerships & development quotes: {founderData.inquiryEmail}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">Direct Phone / WhatsApp:</strong>
                    <a href={`tel:${founderData.phone.replace(/\s+/g, '')}`} className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium">
                      {founderData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-semibold">Engineering & Lab Hours:</strong>
                    <span className="text-slate-600 dark:text-slate-300">Monday &ndash; Saturday: 9:30 AM &ndash; 6:30 PM IST</span>
                  </div>
                </div>
              </div>

              {/* Affiliate Discloser Reminder */}
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                <strong>Affiliate Transparency Note:</strong> If you represent a software vendor wishing to be benchmarked, please note that we do not sell guaranteed favorable ratings or delete negative test results. All software is evaluated impartially.
              </div>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Expected response time from founder or lead architect: under 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
                    Thank you for reaching out. Your inquiry has been routed directly to founder {founderData.name} and our senior engineering desk. We will respond to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        inquiryType: 'saas-development',
                        subject: '',
                        message: ''
                      });
                    }}
                    className="mt-4 px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-500 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="saas-development">🚀 Custom SaaS Development / MVP Project</option>
                      <option value="software-review">🔬 Request Software Review / Benchmark</option>
                      <option value="affiliate-partner">🤝 Affiliate Partnership / Special Deal Listing</option>
                      <option value="transparency">🛡️ Affiliate Disclosure & Ethics Question</option>
                      <option value="general">💬 General Support or Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. SaaS MVP architecture consultation"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Message & Details *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide project timeline, tech requirements, or software question..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all shadow-md shadow-sky-600/20 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message Directly to {founderData.name}
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    Your privacy is protected. We will never sell your information or spam your inbox.
                  </p>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
