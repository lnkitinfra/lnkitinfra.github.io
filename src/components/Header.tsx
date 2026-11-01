import { useState, useRef } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  Phone,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Shield,
  Server,
  Layers,
  Wrench,
  Lock,
  Wifi,
  HardDrive,
  Video,
  Fingerprint,
  Headphones,
  Laptop,
  FileCheck,
  FileSpreadsheet
} from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';

interface HeaderProps {
  currentRoute: string;
  navigate: (route: string) => void;
  openQuoteModal: (customRequirement?: string) => void;
}

export function Header({ currentRoute, navigate, openQuoteModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    products: false,
    solutions: false,
    services: false
  });

  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileAccordion = (key: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setMobileExpanded((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // 1. PRODUCTS (4 Authorized Product Lines)
  const productDropdownItems = [
    {
      id: 'sophos',
      name: 'SOPHOS',
      category: 'Next-Gen Firewalls & AP6',
      desc: 'XGS 116/126/2100 UTM firewalls, Wi-Fi 6 APs & Central EDR',
      route: 'products?brand=sophos'
    },
    {
      id: 'fortinet',
      name: 'FORTINET',
      category: 'FortiGate Security & SD-WAN',
      desc: 'FG-60F/80F/100F firewalls, secure SD-WAN & FortiSwitch',
      route: 'products?brand=fortinet'
    },
    {
      id: 'sonicwall',
      name: 'SONICWALL',
      category: 'Multi-Gig UTM Firewalls',
      desc: 'TZ470, TZ570 series & real-time deep packet inspection',
      route: 'products?brand=sonicwall'
    },
    {
      id: 'syntel',
      name: 'SYNTEL',
      category: 'EPABX & Office Intercom',
      desc: 'NEO DX 206/308, 312/416 & hybrid IP-PBX telecom systems',
      route: 'products?brand=syntel'
    }
  ];

  // 2. SOLUTIONS (8 Items)
  const solutionDropdownItems = [
    {
      id: 'server-storage',
      name: 'Server & Storage Solutions',
      desc: 'Dell PowerEdge, HPE ProLiant & enterprise SAN/NAS',
      icon: Server,
      route: 'solutions#server-storage'
    },
    {
      id: 'it-security',
      name: 'IT Security Solutions',
      desc: 'Perimeter firewalls, zero-trust & ransomware defense',
      icon: Lock,
      route: 'solutions#it-security'
    },
    {
      id: 'networking',
      name: 'Networking Solutions',
      desc: 'HPE Aruba & Cisco switches, Wi-Fi 6 & VLAN setup',
      icon: Wifi,
      route: 'solutions#networking'
    },
    {
      id: 'structured-cabling',
      name: 'Structured Cabling',
      desc: 'Cat6/Cat6A LSZH cabling, rack dressing & Fluke testing',
      icon: Layers,
      route: 'solutions#structured-cabling'
    },
    {
      id: 'server-backup',
      name: 'Server & Backup Solutions',
      desc: 'Automated daily snapshots, Veeam & off-site disaster recovery',
      icon: HardDrive,
      route: 'solutions#server-backup'
    },
    {
      id: 'cctv-solutions',
      name: 'CCTV Solutions',
      desc: 'Hikvision 4K IP cameras, 30-day NVR & mobile app monitoring',
      icon: Video,
      route: 'solutions#cctv-solutions'
    },
    {
      id: 'biometric-attendance',
      name: 'Biometric Attendance Solutions',
      desc: 'Touchless face recognition, fingerprint & payroll integration',
      icon: Fingerprint,
      route: 'solutions#biometric-attendance'
    },
    {
      id: 'door-access',
      name: 'Door Access Solutions',
      desc: 'Electromagnetic EM locks, RFID cards & fire alarm fail-safe',
      icon: Shield,
      route: 'solutions#door-access'
    }
  ];

  // 3. SERVICES (7 Items)
  const serviceDropdownItems = [
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure Solutions',
      desc: 'Complete turnkey office IT planning, layout & setup',
      icon: Layers,
      route: 'services#it-infrastructure'
    },
    {
      id: 'it-audit',
      name: 'IT Health Checkup & Auditing',
      desc: 'Cable Fluke audits, firewall security & thermal checkups',
      icon: FileCheck,
      route: 'services#it-audit'
    },
    {
      id: 'software-licensing',
      name: 'Software Licensing',
      desc: 'Microsoft 365, Windows Server CALs & Tally Prime licenses',
      icon: Shield,
      route: 'services#software-licensing'
    },
    {
      id: 'project-management',
      name: 'Project Management Tools',
      desc: 'IT setup scheduling, ISP coordination & timeline execution',
      icon: FileSpreadsheet,
      route: 'services#project-management'
    },
    {
      id: 'hardware-sales-rentals',
      name: 'Computer / Laptop Sales & Support',
      desc: 'Corporate laptop rentals, OptiPlex PCs & standby units',
      icon: Laptop,
      route: 'services#hardware-sales-rentals'
    },
    {
      id: 'amc',
      name: 'Annual Maintenance Contract',
      desc: 'Comprehensive Pune IT AMC with 1-hour emergency SLA',
      icon: Headphones,
      route: 'amc'
    },
    {
      id: 'remote-onsite-support',
      name: 'Remote Support & Onsite Support',
      desc: 'L1/L2 AnyDesk troubleshooting & same-day field engineers',
      icon: Wrench,
      route: 'services#remote-onsite-support'
    }
  ];

  const isLinkActive = (route: string) => {
    const cleanCurrent = currentRoute.split('?')[0].split('#')[0];
    if (route === 'home') {
      return cleanCurrent === 'home' || cleanCurrent === '';
    }
    if (route === 'products') {
      return cleanCurrent === 'products' || cleanCurrent === 'hardware';
    }
    if (route === 'our-clients') {
      return cleanCurrent === 'our-clients' || cleanCurrent === 'case-studies';
    }
    if (route === 'services') {
      return cleanCurrent === 'services' || cleanCurrent.startsWith('services/');
    }
    if (route === 'solutions') {
      return cleanCurrent === 'solutions';
    }
    if (route === 'about') {
      return cleanCurrent === 'about';
    }
    if (route === 'contact') {
      return cleanCurrent === 'contact';
    }
    return cleanCurrent === route;
  };

  const handleNavClick = (route: string) => {
    navigate(route);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/917796852335?text=Hello%20LNK%20IT%20Infra!%20I%20would%20like%20to%20inquire%20about%20office%20IT%20infrastructure%20services.',
      '_blank'
    );
  };

  return (
    <div className="header-wrapper">
      {/* 1. TOP INFORMATION BANNER */}
      <div className="top-banner">
        <div className="container top-banner-inner">
          <div className="top-info-group left">
            <span className="top-coverage-badge">
              <MapPin size={12} className="top-icon" />
              <span>ON-SITE IT SERVICES • PUNE &amp; PCMC</span>
            </span>
            <span className="top-separator">•</span>
            <span className="top-sla-pill">
              <span className="pulse-dot-green"></span>
              <span>1-Hour Emergency On-Site SLA</span>
            </span>
            <span className="top-separator">•</span>
            <a href="mailto:lnkitinfra@gmail.com" className="top-link top-mail-link" title="Email LNK IT Infra Support">
              <Mail size={13} className="top-icon text-cyan" />
              <span>lnkitinfra@gmail.com</span>
            </a>
          </div>

          <div className="top-info-group right">
            <span className="top-info-item top-hours-item">
              <Clock size={13} className="top-icon text-slate-400" />
              <span className="top-label-muted">Desk:</span>
              <span>Mon - Sat 9:00 AM - 8:00 PM</span>
            </span>
            <a href="tel:+917796852335" className="top-phone-direct" title="Call LNK IT Infra Directly">
              <Phone size={12} className="top-icon" />
              <span>+91 7796852335</span>
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
            title="LNK IT Infra - Connect | Secure | Grow Together"
          >
            <img
              src="/images/logo.png"
              alt="LNK IT Infra - Connect | Secure | Grow Together"
              className="main-header-logo"
            />
          </a>

          {/* Desktop Navigation Links with Rich Dropdowns */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {/* Home */}
            <a
              href="#/"
              className={isLinkActive('home') ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >
              Home
            </a>

            {/* About Us */}
            <a
              href="#/about"
              className={isLinkActive('about') ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
            >
              About Us
            </a>

            {/* PRODUCTS Dropdown (4 Authorized Products) */}
            <div
              className="nav-item-dropdown"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#/products"
                className={`nav-dropdown-trigger ${isLinkActive('products') ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('products');
                }}
              >
                <span>Products</span>
                <ChevronDown size={14} className="dropdown-arrow" />
              </a>

              {activeDropdown === 'products' && (
                <div className="nav-dropdown-menu dropdown-products">
                  <div className="dropdown-menu-header">
                    <span className="dm-badge">AUTHORIZED PRODUCTS</span>
                    <span className="dm-sub">Enterprise Equipment • Official Warranty</span>
                  </div>
                  <div className="dropdown-items-list">
                    {productDropdownItems.map((p) => (
                      <a
                        key={p.id}
                        href={`#/${p.route}`}
                        className="dropdown-item product-dm-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(p.route);
                        }}
                      >
                        <div className="product-dm-content">
                          <span className="product-dm-name">{p.name}</span>
                          <span className="product-dm-cat">{p.category}</span>
                          <span className="product-dm-desc">{p.desc}</span>
                        </div>
                        <ChevronRight size={14} className="dm-hover-arrow" />
                      </a>
                    ))}
                  </div>
                  <a
                    href="#/products"
                    className="dropdown-footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('products');
                    }}
                  >
                    View All Hardware Products & Rentals →
                  </a>
                </div>
              )}
            </div>

            {/* SOLUTIONS Dropdown (8 Solutions Mega-Menu) */}
            <div
              className="nav-item-dropdown"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#/solutions"
                className={`nav-dropdown-trigger ${isLinkActive('solutions') ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('solutions');
                }}
              >
                <span>Solutions</span>
                <ChevronDown size={14} className="dropdown-arrow" />
              </a>

              {activeDropdown === 'solutions' && (
                <div className="nav-dropdown-menu mega-menu-solutions">
                  <div className="dropdown-menu-header full-span">
                    <span className="dm-badge">8 CORE ENTERPRISE SOLUTIONS</span>
                    <span className="dm-sub">Turnkey Infrastructure Architectures for Pune Workplaces</span>
                  </div>
                  {solutionDropdownItems.map((sol) => {
                    const IconComp = sol.icon;
                    return (
                      <a
                        key={sol.id}
                        href={`#/${sol.route}`}
                        className="dropdown-item mega-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(sol.route);
                        }}
                      >
                        <div className="mega-icon-box">
                          <IconComp size={18} />
                        </div>
                        <div className="mega-content">
                          <span className="dropdown-item-title">{sol.name}</span>
                          <span className="dropdown-item-desc">{sol.desc}</span>
                        </div>
                      </a>
                    );
                  })}
                  <a
                    href="#/solutions"
                    className="dropdown-footer-link full-span"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('solutions');
                    }}
                  >
                    Explore Complete 8-Solution Suite & Blueprints →
                  </a>
                </div>
              )}
            </div>

            {/* SERVICES Dropdown (7 Services Mega-Menu) */}
            <div
              className="nav-item-dropdown"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#/services"
                className={`nav-dropdown-trigger ${isLinkActive('services') ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('services');
                }}
              >
                <span>Services</span>
                <ChevronDown size={14} className="dropdown-arrow" />
              </a>

              {activeDropdown === 'services' && (
                <div className="nav-dropdown-menu mega-menu-services">
                  <div className="dropdown-menu-header full-span">
                    <span className="dm-badge">7 LIFECYCLE IT SERVICES</span>
                    <span className="dm-sub">From Setup & Auditing to 24/7 Pune AMC & Support</span>
                  </div>
                  {serviceDropdownItems.map((srv) => {
                    const IconComp = srv.icon;
                    return (
                      <a
                        key={srv.id}
                        href={`#/${srv.route}`}
                        className="dropdown-item mega-item"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(srv.route);
                        }}
                      >
                        <div className="mega-icon-box">
                          <IconComp size={18} />
                        </div>
                        <div className="mega-content">
                          <span className="dropdown-item-title">{srv.name}</span>
                          <span className="dropdown-item-desc">{srv.desc}</span>
                        </div>
                      </a>
                    );
                  })}
                  <a
                    href="#/services"
                    className="dropdown-footer-link full-span"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('services');
                    }}
                  >
                    View All 7 Services & AMC Packages →
                  </a>
                </div>
              )}
            </div>

            {/* Our Clients */}
            <a
              href="#/our-clients"
              className={isLinkActive('our-clients') ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('our-clients');
              }}
            >
              Our Clients
            </a>

            {/* Contact Us */}
            <a
              href="#/contact"
              className={isLinkActive('contact') ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
            >
              Contact Us
            </a>
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

        {/* Mobile Dropdown Menu with Accordion Subsections */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown-menu">
            <a
              href="#/"
              className={isLinkActive('home') ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >
              <span>Home</span>
            </a>

            <a
              href="#/about"
              className={isLinkActive('about') ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
            >
              <span>About Us</span>
            </a>

            {/* Mobile Accordion: PRODUCTS */}
            <div className="mobile-accordion-section">
              <div
                className="mobile-accordion-header"
                onClick={() => toggleMobileAccordion('products')}
              >
                <span>Products (Sophos, Fortinet, SonicWall, Syntel)</span>
                <button
                  type="button"
                  className="mobile-expand-toggle"
                  onClick={(e) => toggleMobileAccordion('products', e)}
                  aria-label="Toggle Products"
                >
                  <ChevronDown
                    size={16}
                    className={`accordion-arrow ${mobileExpanded.products ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
              {mobileExpanded.products && (
                <div className="mobile-accordion-content">
                  {productDropdownItems.map((p) => (
                    <a
                      key={p.id}
                      href={`#/${p.route}`}
                      className="mobile-sublink"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(p.route);
                      }}
                    >
                      <strong>{p.name}</strong> — {p.category}
                    </a>
                  ))}
                  <a
                    href="#/products"
                    className="mobile-sublink view-all"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('products');
                    }}
                  >
                    View All Products & Rentals →
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Accordion: SOLUTIONS */}
            <div className="mobile-accordion-section">
              <div
                className="mobile-accordion-header"
                onClick={() => toggleMobileAccordion('solutions')}
              >
                <span>Solutions (8 Core Solutions)</span>
                <button
                  type="button"
                  className="mobile-expand-toggle"
                  onClick={(e) => toggleMobileAccordion('solutions', e)}
                  aria-label="Toggle Solutions"
                >
                  <ChevronDown
                    size={16}
                    className={`accordion-arrow ${mobileExpanded.solutions ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
              {mobileExpanded.solutions && (
                <div className="mobile-accordion-content">
                  {solutionDropdownItems.map((sol) => (
                    <a
                      key={sol.id}
                      href={`#/${sol.route}`}
                      className="mobile-sublink"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(sol.route);
                      }}
                    >
                      {sol.name}
                    </a>
                  ))}
                  <a
                    href="#/solutions"
                    className="mobile-sublink view-all"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('solutions');
                    }}
                  >
                    View All 8 Solutions →
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Accordion: SERVICES */}
            <div className="mobile-accordion-section">
              <div
                className="mobile-accordion-header"
                onClick={() => toggleMobileAccordion('services')}
              >
                <span>Services (7 Core Services)</span>
                <button
                  type="button"
                  className="mobile-expand-toggle"
                  onClick={(e) => toggleMobileAccordion('services', e)}
                  aria-label="Toggle Services"
                >
                  <ChevronDown
                    size={16}
                    className={`accordion-arrow ${mobileExpanded.services ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
              {mobileExpanded.services && (
                <div className="mobile-accordion-content">
                  {serviceDropdownItems.map((srv) => (
                    <a
                      key={srv.id}
                      href={`#/${srv.route}`}
                      className="mobile-sublink"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(srv.route);
                      }}
                    >
                      {srv.name}
                    </a>
                  ))}
                  <a
                    href="#/services"
                    className="mobile-sublink view-all"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('services');
                    }}
                  >
                    View All 7 Services →
                  </a>
                </div>
              )}
            </div>

            <a
              href="#/our-clients"
              className={isLinkActive('our-clients') ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('our-clients');
              }}
            >
              <span>Our Clients</span>
            </a>

            <a
              href="#/contact"
              className={isLinkActive('contact') ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
            >
              <span>Contact Us</span>
            </a>

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
    </div>
  );
}
