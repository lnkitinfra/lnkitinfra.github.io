import { useState } from 'react';
import {
  Shield,
  Network,
  Mail,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { YouTubeIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';

interface HeaderProps {
  currentRoute: string;
  navigate: (route: string) => void;
  openQuoteModal: (customRequirement?: string) => void;
}

export function Header({ currentRoute, navigate, openQuoteModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { route: 'home', label: 'Home' },
    { route: 'services', label: 'Services & Solutions' },
    { route: 'hardware', label: 'Hardware Products' },
    { route: 'amc', label: 'IT AMC Plans' },
    { route: 'case-studies', label: 'Case Studies' },
    { route: 'about', label: 'About Us' },
    { route: 'contact', label: 'Contact & Offices' }
  ];

  const handleNavClick = (route: string) => {
    navigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/917796852335?text=Hello%20LNK%20IT%20Infra!%20I%20would%20like%20to%20inquire%20about%20office%20IT%20services.', '_blank');
  };

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT & CONTACT BAR */}
      <div className="top-banner">
        <div className="container top-banner-inner">
          <div className="top-banner-left">
            <span className="live-status-pill">
              <span className="pulse-dot"></span>
              All Systems Operational • 99.9% Uptime Support
            </span>
            <span className="separator">|</span>
            <span className="cert-text">Certified IT Hardware & Structured Cabling Specialists</span>
          </div>
          <div className="top-banner-right">
            <div className="top-social-links">
              <a
                href="https://www.youtube.com/@LNKITInfra"
                target="_blank"
                rel="noopener noreferrer"
                className="top-social-link top-youtube"
                title="Follow LNK IT Infra on YouTube"
              >
                <YouTubeIcon size={13} />
                <span>YouTube</span>
              </a>
              <a
                href="https://www.instagram.com/lnk_it_infra/"
                target="_blank"
                rel="noopener noreferrer"
                className="top-social-link top-instagram"
                title="Follow LNK IT Infra on Instagram"
              >
                <InstagramIcon size={13} />
                <span>Instagram</span>
              </a>
            </div>
            <span className="separator">|</span>
            <a
              href="https://wa.me/917796852335?text=Hello%20LNK%20IT%20Infra!%20I%20would%20like%20to%20inquire%20about%20office%20IT%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="top-link top-whatsapp-link"
            >
              <WhatsAppIcon size={13} />
              <span>WhatsApp: +91 7796852335</span>
            </a>
            <span className="separator">|</span>
            <a href="mailto:lnkitinfra@gmail.com" className="top-link">
              <Mail size={13} />
              <span>lnkitinfra@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. STICKY MAIN NAVIGATION */}
      <header className="main-header">
        <div className="container header-container">
          <a
            href="#/"
            className="logo-group"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            <div className="logo-mark">
              <Shield className="logo-shield" />
              <Network className="logo-network" />
            </div>
            <div className="logo-text">
              <div className="brand-name">
                LNK<span className="brand-accent">IT</span> INFRA
              </div>
              <div className="brand-subtitle">ENTERPRISE IT SOLUTIONS & SERVICES</div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.route}
                href={`#/${link.route === 'home' ? '' : link.route}`}
                className={currentRoute.startsWith(link.route) ? 'active' : ''}
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
              className="btn-whatsapp-header"
              onClick={openWhatsApp}
              title="Chat with Engineer on WhatsApp (+91 7796852335)"
            >
              <WhatsAppIcon size={16} />
              <span>+91 7796852335</span>
            </button>
            <button
              className="btn-primary"
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
                className={currentRoute.startsWith(link.route) ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.route);
                }}
              >
                {link.label}
              </a>
            ))}

            <div className="mobile-social-row">
              <a
                href="https://www.youtube.com/@LNKITInfra"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-btn youtube"
              >
                <YouTubeIcon size={16} />
                <span>YouTube @LNKITInfra</span>
              </a>
              <a
                href="https://www.instagram.com/lnk_it_infra/"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-btn instagram"
              >
                <InstagramIcon size={16} />
                <span>Instagram @lnk_it_infra</span>
              </a>
            </div>

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
