import { useState } from 'react';
import {
  Shield,
  Network,
  Mail,
  MapPin,
  Clock,
  Phone,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';

interface HeaderProps {
  currentRoute: string;
  navigate: (route: string) => void;
  openQuoteModal: (customRequirement?: string) => void;
}

export function Header({ currentRoute, navigate, openQuoteModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact navigation items requested by the user
  const navLinks = [
    { route: 'home', label: 'Home' },
    { route: 'about', label: 'About Us' },
    { route: 'products', label: 'Products' },
    { route: 'services', label: 'Services' },
    { route: 'solutions', label: 'Solutions' },
    { route: 'our-clients', label: 'Our Clients' },
    { route: 'contact', label: 'Contact Us' }
  ];

  const isLinkActive = (route: string) => {
    if (route === 'home') {
      return currentRoute === 'home' || currentRoute === '';
    }
    if (route === 'products') {
      return currentRoute === 'products' || currentRoute === 'hardware';
    }
    if (route === 'our-clients') {
      return currentRoute === 'our-clients' || currentRoute === 'case-studies';
    }
    if (route === 'services') {
      return currentRoute === 'services' || currentRoute.startsWith('services/');
    }
    if (route === 'solutions') {
      return currentRoute === 'solutions';
    }
    if (route === 'about') {
      return currentRoute === 'about';
    }
    if (route === 'contact') {
      return currentRoute === 'contact';
    }
    return currentRoute.startsWith(route);
  };

  const handleNavClick = (route: string) => {
    navigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/917796852335?text=Hello%20LNK%20IT%20Infra!%20I%20would%20like%20to%20inquire%20about%20office%20IT%20services.',
      '_blank'
    );
  };

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT & CONTACT BAR */}
      {/* 1. TOP ANNOUNCEMENT & CONTACT BAR */}
      <div className="top-banner">
        <div className="container top-banner-inner">
          <div className="top-banner-left">
            <div className="top-info-item top-schedule-item">
              <Clock size={13} className="top-info-icon" />
              <span className="top-info-text">
                <span className="top-label-strong">MON TO SAT:</span> 9:30 AM TO 6:30 PM IST
              </span>
            </div>

            <span className="top-separator">•</span>

            <div className="top-info-item top-location-item">
              <MapPin size={13} className="top-info-icon text-cyan" />
              <span className="top-info-text">
                <span className="top-label-strong">PUNE</span>
              </span>
            </div>

            <span className="top-separator">•</span>

            <a
              href="mailto:lnkitinfra@gmail.com"
              className="top-info-item top-link top-mail-item"
              title="Email LNK IT Infra"
            >
              <Mail size={13} className="top-info-icon" />
              <span className="top-info-text">
                <span className="top-label-muted">MAIL ID:</span>{' '}
                <span className="top-label-email">lnkitinfra@gmail.com</span>
              </span>
            </a>
          </div>

          <div className="top-banner-right">
            <a
              href="tel:+917796852335"
              className="top-link top-phone-direct"
              title="Call LNK IT Infra"
            >
              <Phone size={13} className="top-info-icon text-cyan" />
              <span>
                <span className="top-label-muted">CALL:</span>{' '}
                <span className="top-label-strong">+91 7796852335</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. STICKY MAIN NAVIGATION */}
      <header className="main-header">
        <div className="container header-container">
          <a
            href="#/"
            className="company-logo-slot"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            title="LNK IT Infra - Home"
          >
            {/* Space reserved for Company Logo */}
            <div className="logo-placeholder-container">
              <div className="logo-symbol-mark">
                <Shield className="logo-shield" />
                <Network className="logo-network" />
              </div>
              <span className="logo-brand-heading">LNK IT INFRA</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.route}
                href={`#/${link.route === 'home' ? '' : link.route}`}
                className={isLinkActive(link.route) ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.route);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="header-actions">
            <button
              className="btn-primary btn-quote-nav"
              onClick={() => openQuoteModal()}
            >
              <span>Get Free Quote</span>
              <ChevronRight size={16} />
            </button>
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown-menu">
            {navLinks.map((link) => (
              <a
                key={link.route}
                href={`#/${link.route === 'home' ? '' : link.route}`}
                className={isLinkActive(link.route) ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.route);
                }}
              >
                <span>{link.label}</span>
                {isLinkActive(link.route) && <ChevronRight size={16} className="mobile-active-chevron" />}
              </a>
            ))}

            <div className="mobile-menu-actions">
              <button
                className="btn-whatsapp-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp();
                }}
              >
                <WhatsAppIcon size={16} />
                <span>Chat on WhatsApp (+91 7796852335)</span>
              </button>
              <button
                className="btn-primary w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
              >
                Request Free Site Survey
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
