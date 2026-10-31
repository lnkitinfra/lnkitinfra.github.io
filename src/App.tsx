import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { HardwarePage } from './pages/HardwarePage';
import { AMCPage } from './pages/AMCPage';
import { AboutPage } from './pages/AboutPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { ContactPage } from './pages/ContactPage';
import './App.css';

export function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    return hash || 'home';
  });

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteRequirement, setQuoteRequirement] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      setCurrentRoute(hash || 'home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route: string) => {
    const clean = route.replace(/^#\/?/, '');
    window.location.hash = `#/${clean === 'home' ? '' : clean}`;
    setCurrentRoute(clean || 'home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openQuoteModal = (requirement?: string) => {
    setQuoteRequirement(requirement);
    setQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setQuoteModalOpen(false);
    setQuoteRequirement(undefined);
  };

  // Render active page based on route
  const renderCurrentPage = () => {
    if (currentRoute === 'home' || currentRoute === '') {
      return <HomePage navigate={navigate} openQuoteModal={openQuoteModal} />;
    }

    if (currentRoute === 'about') {
      return <AboutPage navigate={navigate} openQuoteModal={openQuoteModal} />;
    }

    if (currentRoute === 'products' || currentRoute === 'hardware') {
      return <HardwarePage navigate={navigate} openQuoteModal={openQuoteModal} />;
    }

    if (currentRoute === 'services') {
      return <ServicesPage navigate={navigate} openQuoteModal={openQuoteModal} />;
    }

    if (currentRoute.startsWith('services/')) {
      const serviceId = currentRoute.replace('services/', '');
      return (
        <ServiceDetailPage
          serviceId={serviceId}
          navigate={navigate}
          openQuoteModal={openQuoteModal}
        />
      );
    }

    if (currentRoute === 'solutions') {
      return <SolutionsPage navigate={navigate} openQuoteModal={openQuoteModal} />;
    }

    if (currentRoute === 'our-clients' || currentRoute === 'case-studies') {
      return <CaseStudiesPage navigate={navigate} openQuoteModal={openQuoteModal} />;
    }

    if (currentRoute === 'amc') {
      return <AMCPage navigate={navigate} openQuoteModal={openQuoteModal} />;
    }

    if (currentRoute === 'contact') {
      return <ContactPage />;
    }

    // Default Fallback
    return <HomePage navigate={navigate} openQuoteModal={openQuoteModal} />;
  };

  return (
    <div className="site-wrapper">
      <Header
        currentRoute={currentRoute}
        navigate={navigate}
        openQuoteModal={openQuoteModal}
      />

      <main className="main-content-area">
        {renderCurrentPage()}
      </main>

      <Footer navigate={navigate} />

      <FloatingWhatsApp />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={closeQuoteModal}
        defaultRequirement={quoteRequirement}
      />
    </div>
  );
}

export default App;
