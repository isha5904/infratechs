import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookiePopup from './components/CookiePopup';
import HomePage from './pages/HomePage';
import SoftwareDirectoryPage from './pages/SoftwareDirectoryPage';
import ReviewsPage from './pages/ReviewsPage';
import ComparisonsPage from './pages/ComparisonsPage';
import GuidesPage from './pages/GuidesPage';
import CategoryPage from './pages/CategoryPage';
import BlogPostPage from './pages/BlogPostPage';
import AboutPage from './pages/AboutPage';
import EditorialPolicyPage from './pages/EditorialPolicyPage';
import AffiliateDisclosurePage from './pages/AffiliateDisclosurePage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import DevelopmentServicesPage from './pages/DevelopmentServicesPage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
      <ScrollToTop />
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/software" element={<SoftwareDirectoryPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/comparisons" element={<ComparisonsPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/blog" element={<GuidesPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          
          <Route path="/about" element={<AboutPage />} />
          <Route path="/editorial-policy" element={<EditorialPolicyPage />} />
          <Route path="/affiliate-disclosure" element={<AffiliateDisclosurePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />

          {/* Preserved legacy developer services route */}
          <Route path="/services" element={<DevelopmentServicesPage />} />
        </Routes>
      </main>

      <Footer />
      <CookiePopup />
    </div>
  );
}
