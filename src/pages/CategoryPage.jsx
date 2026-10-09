import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  HardDrive,
  Database,
  Smartphone,
  FileText,
  Lock,
  Cpu,
  Terminal,
  Laptop,
  AlertTriangle,
  Clock,
  BookOpen
} from 'lucide-react';
import { softwareTools } from '../data/softwareData';
import { blogPosts } from '../data/blogData';
import { publishedCategories } from '../data/categoriesData';
import { comparisonsData } from '../data/comparisonData';
import ComparisonTable from '../components/ComparisonTable';
import AffiliateNoticeBox from '../components/AffiliateNoticeBox';

export default function CategoryPage() {
  const { categoryId } = useParams();

  const currentCategory = publishedCategories.find((c) => c.id === categoryId) || publishedCategories[0];
  const tools = softwareTools.filter((s) => s.category === categoryId);
  const relatedPosts = blogPosts.filter((p) => p.category === categoryId);
  const relatedComparison = comparisonsData.find((c) => c.category === categoryId);

  const getIcon = () => {
    switch (currentCategory.iconName) {
      case 'Database': return <Database className="w-8 h-8 text-emerald-500" />;
      case 'HardDrive': return <HardDrive className="w-8 h-8 text-sky-500" />;
      case 'Smartphone': return <Smartphone className="w-8 h-8 text-indigo-500" />;
      case 'FileText': return <FileText className="w-8 h-8 text-rose-500" />;
      case 'Shield': return <Lock className="w-8 h-8 text-amber-500" />;
      case 'Sparkles': return <Sparkles className="w-8 h-8 text-purple-500" />;
      case 'Cpu': return <Cpu className="w-8 h-8 text-cyan-500" />;
      case 'Terminal': return <Terminal className="w-8 h-8 text-blue-500" />;
      default: return <Laptop className="w-8 h-8 text-slate-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Link to="/" className="hover:text-sky-600 dark:hover:text-sky-400">Home</Link>
          <span>/</span>
          <Link to="/software" className="hover:text-sky-600 dark:hover:text-sky-400">Software</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200">{currentCategory.title}</span>
        </nav>

        {/* Category Header */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-200 dark:border-slate-700 shrink-0">
            {getIcon()}
          </div>
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5" /> Published Category Review
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {currentCategory.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
              {currentCategory.shortDescription}
            </p>
          </div>
        </div>

        {/* Disclosure */}
        <AffiliateNoticeBox />

        {/* Featured Software in Category */}
        {tools.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Evaluated Software in {currentCategory.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool) => (
                <div
                  key={tool.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                          {tool.name}
                        </h3>
                        {tool.badge && (
                          <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                            {tool.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {tool.tagline}
                    </p>

                    <div className="text-xs space-y-1">
                      <div className="font-semibold text-slate-800 dark:text-slate-200">OS Compatibility:</div>
                      <div className="text-slate-600 dark:text-slate-400 text-[11px]">
                        {Array.isArray(tool.supportedOS) ? tool.supportedOS.join(' • ') : tool.supportedOS}
                      </div>
                    </div>

                    <div className="space-y-1 text-xs">
                      <div className="font-semibold text-slate-800 dark:text-slate-200">Key Capabilities:</div>
                      <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                        {tool.keyFeatures.slice(0, 3).map((f, i) => (
                          <li key={i} className="flex items-start gap-1.5 leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-1 text-xs">
                      <div className="font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" /> Limitation:
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                        {tool.limitations[0]}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {tool.pricing.split('/')[0]}
                      </div>
                      <span className="text-[10px] text-slate-400">
                        Checked {tool.pricingVerifiedDate}
                      </span>
                    </div>
                  </div>

                  <div className="pt-6 mt-4">
                    <a
                      href={tool.affiliateUrl || tool.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs shadow-sm transition-colors"
                    >
                      <span>{tool.buttonLabel || 'Visit Official Website'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Side-by-Side Comparison Matrix for this Category */}
        {relatedComparison && (
          <div className="space-y-6 pt-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Detailed Spec Comparison
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {relatedComparison.title}
              </h2>
            </div>
            <ComparisonTable
              tools={relatedComparison.products.map((p) => ({
                id: p.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
                name: p.name,
                badge: p.badge,
                primaryPurpose: p.bestSuitedFor,
                supportedOS: p.supportedOS,
                keyFeatures: Object.entries(p)
                  .filter(([k]) => !['name', 'badge', 'supportedOS', 'pricingModel', 'bestSuitedFor', 'keyLimitation', 'actionLabel', 'actionUrl', 'testedScore'].includes(k))
                  .map(([k, v]) => `${k.replace(/([A-Z])/g, ' $1')}: ${v}`),
                pricing: p.pricingModel,
                pricingVerifiedDate: relatedComparison.lastUpdated,
                limitations: [p.keyLimitation],
                bestSuitedFor: p.bestSuitedFor,
                officialUrl: p.actionUrl,
                affiliateUrl: p.actionUrl,
                buttonLabel: p.actionLabel
              }))}
              title={relatedComparison.title}
              showDisclosure={false}
            />
          </div>
        )}

        {/* Related Guides & Tutorials in this Category */}
        {relatedPosts.length > 0 && (
          <div className="space-y-6 pt-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Practical Guides & Tutorials in {currentCategory.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <div
                  key={post.slug}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 hover:shadow-xl hover:border-sky-500/50 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase text-sky-600 dark:text-sky-400">
                      {post.readTime}
                    </span>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-sky-600 transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400">{post.publishedAt}</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
