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

  // Dynamic SEO Title & Meta Management per route
  useEffect(() => {
    const routeSeo: Record<string, { title: string; desc: string }> = {
      home: {
        title: 'LNK IT Infra | Office IT Infrastructure, Structured Cabling & Networking Solutions Pune',
        desc: 'Professional structured cabling, commercial Wi-Fi 6, Next-Gen firewalls, server rooms, CCTV, and reliable IT support services in Pune.'
      },
      about: {
        title: 'About Us | LNK IT Infra - Office IT Infrastructure Setup & Support in Pune',
        desc: 'Meet LNK IT Infra - newly launched and backed by 5+ years of practical experience in cabling, servers, cyber defense, and office IT setups.'
      },
      products: {
        title: 'Enterprise IT Hardware Products | Sophos, Fortinet, SonicWall & Syntel - LNK IT Infra',
        desc: 'Supplying, installing, and configuring genuine Sophos, Fortinet, SonicWall, Syntel, Dell, and Cisco hardware with official warranty.'
      },
      hardware: {
        title: 'Enterprise IT Hardware Products | Sophos, Fortinet, SonicWall & Syntel - LNK IT Infra',
        desc: 'Supplying, installing, and configuring genuine Sophos, Fortinet, SonicWall, Syntel, Dell, and Cisco hardware with official warranty.'
      },
      services: {
        title: 'Office IT Services & AMC | Infrastructure Setup, Audits & Support in Pune - LNK IT Infra',
        desc: 'Explore our 7 core IT services: Turnkey Infrastructure, Health Checkups & Cable Audits, Software Licensing, Project Management, Laptop Rentals, AMC & Support.'
      },
      solutions: {
        title: '8 Core Enterprise IT Solutions | Server, Security, Cabling & CCTV - LNK IT Infra',
        desc: '8 turnkey IT solutions: Server & Storage, IT Security, Networking, Structured Cabling, Server & Backup, CCTV, Biometric Attendance & Door Access in Pune.'
      },
      'our-clients': {
        title: 'Our Clients & Recent IT Installations | LNK IT Infra Pune',
        desc: 'Discover how LNK IT Infra engineers reliable office networks, Wi-Fi setups, and firewall defense for growing businesses.'
      },
      'case-studies': {
        title: 'Our Clients & Recent IT Installations | LNK IT Infra Pune',
        desc: 'Discover how LNK IT Infra engineers reliable office networks, Wi-Fi setups, and firewall defense for growing businesses.'
      },
      amc: {
        title: 'Annual Maintenance Contracts (IT AMC) | Technical Support & Maintenance in Pune - LNK IT Infra',
        desc: 'Comprehensive office IT AMC plans with dedicated engineers, prompt on-site dispatch in Pune, preventive maintenance, and standby parts.'
      },
      contact: {
        title: 'Contact LNK IT Infra | Pune Head Office & 24/7 Support Hotline',
        desc: 'Contact our senior IT engineers in Pune at +91 7796852335 or lnkitinfra@gmail.com for free site surveys, network audits, and quotes.'
      }
    };

    const baseRoute = currentRoute.split('?')[0].split('#')[0];
    if (baseRoute.startsWith('services/')) {
      const sId = baseRoute.replace('services/', '');
      const formatted = sId.replace('-', ' ').toUpperCase();
      document.title = `${formatted} Solutions & Services | LNK IT Infra Pune`;
    } else {
      const seo = routeSeo[baseRoute] || routeSeo.home;
      document.title = seo.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', seo.desc);
      }
    }
  }, [currentRoute]);

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
    const baseRoute = currentRoute.split('?')[0].split('#')[0];

    if (baseRoute === 'home' || baseRoute === '') {
      return <HomePage navigate={navigate} openQuoteModal={openQuoteModal} />;
    }

    if (baseRoute === 'about') {
      return <AboutPage navigate={navigate} openQuoteModal={openQuoteModal} />;
    }

    if (baseRoute === 'products' || baseRoute === 'hardware') {
      return <HardwarePage navigate={navigate} openQuoteModal={openQuoteModal} />;
    }

    if (baseRoute === 'services') {
      return <ServicesPage navigate={navigate} openQuoteModal={openQuoteModal} />;
    }

    if (baseRoute.startsWith('services/')) {
      const serviceId = baseRoute.replace('services/', '');
      return (
        <ServiceDetailPage
          serviceId={serviceId}
          navigate={navigate}
          openQuoteModal={openQuoteModal}
        />
      );
    }

    if (baseRoute === 'solutions') {
      return <SolutionsPage navigate={navigate} openQuoteModal={openQuoteModal} />;
    }

    if (baseRoute === 'our-clients' || baseRoute === 'case-studies') {
      return <CaseStudiesPage navigate={navigate} openQuoteModal={openQuoteModal} />;
    }

    if (baseRoute === 'amc') {
      return <AMCPage navigate={navigate} openQuoteModal={openQuoteModal} />;
    }

    if (baseRoute === 'contact') {
      return <ContactPage />;
    }

    // Default Fallback
    return <HomePage navigate={navigate} openQuoteModal={openQuoteModal} />;
  };

  return (
    <div className="site-canvas">
      {/* 1. Global Navigation Header */}
      <Header
        currentRoute={currentRoute}
        navigate={navigate}
        openQuoteModal={openQuoteModal}
      />

      {/* 2. Main Page Render Slot */}
      <main className="main-content-flow" role="main">
        {renderCurrentPage()}
      </main>

      {/* 3. Global Footer */}
      <Footer navigate={navigate} />

      {/* 4. Global Interactive Popups & Widgets */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={closeQuoteModal}
        defaultRequirement={quoteRequirement}
      />

      {/* 5. Sticky Direct WhatsApp Access Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
