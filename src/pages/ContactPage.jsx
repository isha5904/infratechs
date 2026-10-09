import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Laptop, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { siteConfig, founderData } from '../data/founderData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'editorial-feedback',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please provide a detailed message (at least 15 characters).';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate secure form handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        inquiryType: 'editorial-feedback',
        subject: '',
        message: ''
      });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200">Contact Us</span>
        </nav>

        {/* Hero Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" /> Editorial Contact & Business Inquiries
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact Infratechs
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Have a question regarding our software comparisons? Want to submit an editorial correction, suggest a tool for review, or discuss an affiliate partnership? We welcome your message.
          </p>
        </div>

        {/* Main Grid: Form on Left, Contact Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-sky-500" />
                <span>Send a Message to the Editorial Team</span>
              </h2>
              <p className="text-xs text-slate-500">
                We typically respond within 24–48 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out to Infratechs. Our editorial team will review your inquiry and follow up at your email address shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 text-xs font-semibold rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 ${
                        errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-500">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 ${
                        errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                    >
                      <option value="editorial-feedback">Editorial Feedback & Corrections</option>
                      <option value="software-review">Software Review Submission</option>
                      <option value="affiliate-partnership">Affiliate Program / Advertiser Inquiry</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Correction regarding Disk Drill pricing"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 ${
                        errors.subject ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                      }`}
                    />
                    {errors.subject && <p className="text-[11px] text-red-500">{errors.subject}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your question, correction, or proposal..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 resize-none ${
                      errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md shadow-sky-600/20 transition-all disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  Your email is strictly protected in accordance with our{' '}
                  <Link to="/privacy-policy" className="underline hover:text-sky-500">
                    Privacy Policy
                  </Link>. We never sell or share contact details.
                </p>
              </form>
            )}
          </div>

          {/* Publisher & Owner Information Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
                <img
                  src={founderData.avatarUrl}
                  alt={founderData.name}
                  className="w-16 h-16 rounded-2xl object-cover ring-2 ring-sky-500 shrink-0"
                />
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    {founderData.name}
                  </h3>
                  <p className="text-xs text-sky-600 dark:text-sky-400 font-semibold">
                    {founderData.title}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Infratechs Editorial Desk
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sky-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Editorial Office:</div>
                    <div className="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {siteConfig.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sky-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Support & Editorial Email:</div>
                    <a
                      href={`mailto:${siteConfig.supportEmail}`}
                      className="text-sky-600 dark:text-sky-400 font-semibold hover:underline block mt-0.5"
                    >
                      {siteConfig.supportEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sky-600 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Telephone / WhatsApp:</div>
                    <a
                      href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-slate-700 dark:text-slate-300 hover:text-sky-600 block mt-0.5"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sky-600 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">Editorial Operating Hours:</div>
                    <div className="text-slate-600 dark:text-slate-400 mt-0.5">
                      Monday – Saturday: 9:30 AM – 6:30 PM IST (GMT+5:30)
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 space-y-2">
                <div className="font-bold text-slate-800 dark:text-slate-200">
                  Affiliate Network & Publisher Audits:
                </div>
                <p className="leading-relaxed text-[11px]">
                  Representatives from Partnerize, Avangate/2Checkout, CJ, or advertiser compliance teams may contact us directly at <span className="font-semibold text-slate-700 dark:text-slate-300">{siteConfig.supportEmail}</span> for priority validation.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
