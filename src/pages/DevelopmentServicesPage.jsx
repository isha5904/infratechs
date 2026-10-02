import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Layers, 
  Database, 
  CreditCard, 
  ShieldCheck, 
  Cpu, 
  Rocket, 
  CheckCircle2, 
  ArrowRight,
  Server,
  Cloud,
  Terminal,
  Zap
} from 'lucide-react';
import { founderData } from '../data/founderData';

export default function DevelopmentServicesPage() {
  const servicePillars = [
    {
      icon: <Layers className="w-6 h-6 text-sky-500" />,
      title: "Full-Stack SaaS MVP Engineering",
      desc: "Turn your software concept into a production-ready application in weeks. Built with modern React 19 / Next.js, Node.js, and TypeScript with zero technical debt.",
      features: [
        "Component-driven responsive UI & Tailwind CSS",
        "Multi-tenant database schema architecture",
        "OAuth2, magic links, & biometric passkey auth",
        "Clean, documented Git repositories"
      ]
    },
    {
      icon: <CreditCard className="w-6 h-6 text-emerald-500" />,
      title: "Stripe & Subscription Monetization",
      desc: "Flawless payment architectures that prevent churn and handle usage-based metering, tier upgrades, and automated invoice tax compliance.",
      features: [
        "Stripe Billing & Customer Portal integration",
        "Idempotent webhook handlers & event logs",
        "Seat-based and usage-based usage meters",
        "Dunning management & failed payment recovery"
      ]
    },
    {
      icon: <Database className="w-6 h-6 text-indigo-500" />,
      title: "Scalable Database & API Microservices",
      desc: "High-performance PostgreSQL, Supabase, and Redis caching layers designed for thousands of concurrent queries without bottlenecking.",
      features: [
        "Row-Level Security (RLS) tenant isolation",
        "RESTful & GraphQL API endpoint creation",
        "Redis caching & rate limiting middleware",
        "Automated continuous database backup pipelines"
      ]
    },
    {
      icon: <Cloud className="w-6 h-6 text-purple-500" />,
      title: "Cloud Infrastructure & DevOps CI/CD",
      desc: "Automated, scalable deployments on AWS, Google Cloud, Vultr, or Kubernetes with zero downtime and automatic rolling updates.",
      features: [
        "Docker containerization & Helm chart setups",
        "GitHub Actions CI/CD automated test runs",
        "SSL/TLS automation & Cloudflare DDoS shielding",
        "Real-time Sentry error logging and monitoring"
      ]
    }
  ];

  const devWorkflow = [
    {
      step: "01",
      title: "Architecture & Tech Discovery",
      desc: `Founder ${founderData.name} personally audits your requirements, system topology, database design, and third-party API dependencies.`
    },
    {
      step: "02",
      title: "Rapid Agile Sprints",
      desc: "Bi-weekly demo deployments on live staging servers, allowing you to click, test, and provide feedback on real working code."
    },
    {
      step: "03",
      title: "Security & Penetration Testing",
      desc: "We perform static code analysis, dependency vulnerability scans, and endpoint authentication checks before production."
    },
    {
      step: "04",
      title: "Launch & 30-Day Warranty",
      desc: "Full production rollout, domain setup, analytics configuration, and 30 days of comprehensive post-launch warranty support."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200">Custom SaaS Development</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold tracking-wide">
            <Code2 className="w-4 h-4" /> DevStack Labs Engineering Services
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            High-Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">SaaS Engineering</span> & Architecture
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From modern responsive frontends to multi-tenant backends and subscription billing. Architected with technical precision by veteran engineer {founderData.name}.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm transition-all shadow-lg shadow-sky-600/25 flex items-center gap-2"
            >
              Book Technical Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/blog/building-scalable-saas-architecture-blueprint"
              className="px-6 py-3.5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors"
            >
              Read Architecture Blueprint
            </Link>
          </div>
        </div>

        {/* Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicePillars.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:shadow-xl hover:border-sky-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {service.desc}
              </p>
              <ul className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {service.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Development Workflow */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Our Engineering Protocol</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1">
              How We Deliver Production-Ready SaaS
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Transparent agile sprints led by founder {founderData.name} with daily Git commits and live staging builds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {devWorkflow.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 relative">
                <span className="text-3xl font-extrabold text-sky-400/40 block mb-3 font-mono">
                  {item.step}
                </span>
                <h4 className="font-bold text-lg text-white mb-2">{item.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-sky-600 to-indigo-700 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to Architect Your SaaS Platform?</h3>
            <p className="text-sky-100 text-sm max-w-xl">
              Get an unvarnished technical assessment and transparent quote directly from our founder.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-7 py-3.5 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-100 transition-colors shadow-lg whitespace-nowrap"
          >
            Start Project Discussion &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
}
