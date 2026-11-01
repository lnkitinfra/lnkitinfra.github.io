import { useState, useEffect } from 'react';
import {
  FileSpreadsheet,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Check,
  Star,
  MapPin,
  Shield,
  Award,
  Clock,
  Laptop,
  Server,
  Monitor,
  HardDrive,
  Phone,
  Mail
} from 'lucide-react';
import { DETAILED_SERVICES } from '../data/solutionsData';
import { CASE_STUDIES_DETAILED } from '../data/caseStudiesData';
import { WhatsAppIcon } from '../components/SocialIcons';

interface HomePageProps {
  navigate: (route: string) => void;
  openQuoteModal: (requirement?: string) => void;
}

export function HomePage({ navigate, openQuoteModal }: HomePageProps) {
  const [heroImageIdx, setHeroImageIdx] = useState(0);

  const heroImages = [
    {
      src: '/images/office_network_cabling.jpg',
      label: 'Office Cabling & Desks',
      title: 'Neat Workstation Cabling & Wi-Fi Setup',
      desc: 'Tangle-free under-desk Cat6 networking, workstation points, ceiling Wi-Fi 6, and security cameras.'
    },
    {
      src: '/images/office_it_setup.jpg',
      label: 'Office Racks & Equipment',
      title: 'Office Server Racks & Hardware Installation',
      desc: 'Neatly dressed small office racks, patch panels, gigabit network switches, and reliable backup power.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const openWhatsApp = (customMsg?: string) => {
    const text = customMsg || encodeURIComponent(
      'Hello LNK IT Infra! I would like to inquire about office IT infrastructure setup and networking services.'
    );
    window.open(`https://wa.me/917796852335?text=${text}`, '_blank');
  };

  return (
    <div className="home-page-container">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-content-grid">
          <div className="hero-copy">
            <div className="hero-trust-badge">
              <span className="trust-dot"></span>
              <span>OFFICE IT INFRASTRUCTURE & SERVICES • PUNE ONLY</span>
            </div>

            <h1 className="hero-headline">
              Office IT Infrastructure Setup, Installation & Technical Support in Pune
            </h1>

            <p className="hero-subhead">
              We help businesses set up and maintain their office IT. Whether you need structured network cabling, corporate laptops on rent, server installation, Wi-Fi 6 setup, firewalls, or ongoing computer support, our local team handles everything with 5+ years of practical IT experience.
            </p>

            <div className="hero-ctas">
              <button
                className="btn-primary hero-btn"
                onClick={() => openQuoteModal('Free On-Site Inspection & IT Assessment')}
              >
                <span>Book Free On-Site Inspection</span>
                <ArrowRight size={18} />
              </button>
              <button
                className="btn-whatsapp-hero hero-btn"
                onClick={() => openWhatsApp()}
              >
                <WhatsAppIcon size={18} />
                <span>Chat on WhatsApp (+91 7796852335)</span>
              </button>
            </div>

            {/* Core Trust Pillars */}
            <div className="hero-metric-strip">
              <div className="hero-metric-item">
                <div className="metric-val">5+ Years</div>
                <div className="metric-lbl">Experience in IT Domains</div>
              </div>
              <div className="metric-divider"></div>
              <div className="hero-metric-item">
                <div className="metric-val">Installation</div>
                <div className="metric-lbl">Office IT & Hardware Setup</div>
              </div>
              <div className="metric-divider"></div>
              <div className="hero-metric-item">
                <div className="metric-val">Technical Support</div>
                <div className="metric-lbl">On-Site & Remote Assistance</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="hero-visual-col">
            <div className="hero-image-frame glass-card">
              <div className="hero-image-header">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="window-title">
                  LNK-INFRA // {heroImages[heroImageIdx].label}
                </div>
                <span className="window-badge">ACTIVE</span>
              </div>

              <div className="hero-image-wrapper">
                <img
                  src={heroImages[heroImageIdx].src}
                  alt={heroImages[heroImageIdx].title}
                  className="hero-active-img"
                />
                <div className="hero-image-caption">
                  <h4>{heroImages[heroImageIdx].title}</h4>
                  <p>{heroImages[heroImageIdx].desc}</p>
                </div>
              </div>

              {/* Slide controls */}
              <div className="hero-slide-nav">
                {heroImages.map((img, i) => (
                  <button
                    key={i}
                    className={`slide-nav-pill ${heroImageIdx === i ? 'active' : ''}`}
                    onClick={() => setHeroImageIdx(i)}
                  >
                    0{i + 1} {img.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRANDS WE INSTALL & CONFIGURE */}
      <section className="partners-strip">
        <div className="container">
          <div className="partners-title">
            IT INFRASTRUCTURE & HARDWARE BRANDS WE INSTALL & CONFIGURE
          </div>
          <div className="partners-row">
            <div className="partner-chip">
              <span className="partner-name">SOPHOS & FORTINET</span>
              <span className="partner-level">Firewalls & Secure VPN Setup</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">HPE ARUBA & CISCO</span>
              <span className="partner-level">Managed Switches & Wi-Fi 6</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">DELL & HPE</span>
              <span className="partner-level">Rack & Tower Server Setup</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">HIKVISION & CP PLUS</span>
              <span className="partner-level">CCTV Surveillance & NVR Setup</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">SCHNEIDER & MOLEX</span>
              <span className="partner-level">Cat6 Structured Cabling</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">MICROSOFT 365</span>
              <span className="partner-level">Business Email & Cloud Migration</span>
            </div>
          </div>
          <p className="partners-guarantee-note">
            We provide professional installation, structured cabling, configuration, and maintenance services for leading IT hardware brands.
          </p>
        </div>
      </section>

      {/* 3. CORE SERVICES (HUMAN-WRITTEN, SEO-FOCUSED) */}
      <section className="section-solutions py-8">
        <div className="container">
          <div className="section-header">
            <div className="badge-glow">OUR CORE CAPABILITIES</div>
            <h2 className="section-title">
              Complete IT Services for Modern Workplaces
            </h2>
            <p className="section-desc">
              Whether you are setting up a brand-new office, expanding floors, or upgrading an aging network, our certified engineers handle planning, hardware supply, wiring, and ongoing support.
            </p>
          </div>

          <div className="solutions-grid">
            {DETAILED_SERVICES.slice(0, 8).map((sol) => {
              const IconComp = sol.icon;
              return (
                <div key={sol.id} className="solution-card glass-card">
                  <div className="card-top-row">
                    <div className="solution-icon-box">
                      <IconComp size={24} />
                    </div>
                    <span className="solution-tag">{sol.highlight}</span>
                  </div>

                  <h3 className="solution-card-title">{sol.title}</h3>
                  <div className="solution-tagline">{sol.tagline}</div>
                  <p className="solution-card-desc">{sol.summary}</p>

                  <div className="solution-features-list">
                    {sol.whatWeDo.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="feature-item">
                        <CheckCircle2 size={16} className="feature-check" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="card-bottom-meta">
                    <button
                      className="btn-card-action"
                      onClick={() => {
                        navigate(`services/${sol.id}`);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <span>Explore Technical Specs</span>
                      <ChevronRight size={16} />
                    </button>
                    <button
                      className="btn-card-boq"
                      onClick={() => openQuoteModal(`Quotation inquiry for ${sol.title}`)}
                      title="Request itemized Bill of Quantities"
                    >
                      <FileSpreadsheet size={15} />
                      <span>Request BoQ</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="view-all-services-bar mt-6 text-center">
            <button
              className="btn-secondary"
              onClick={() => {
                navigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>View All {DETAILED_SERVICES.length} IT Services & Solutions</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. IT HARDWARE PRODUCTS & LAPTOP RENTALS */}
      <section className="section-hardware-preview py-8 bg-subtle">
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-glow">GENUINE HARDWARE & RENTAL SERVICES</div>
            <h2 className="section-title">
              IT Hardware Supply, Servers & Laptops on Rent
            </h2>
            <p className="section-desc">
              From corporate laptop rentals with instant replacement to enterprise rack servers, commercial IPS monitors, silent keyboard-mouse combos, and certified Cat6 LAN cabling.
            </p>
          </div>

          <div className="grid-3-col mt-6">
            <div className="advantage-box glass-card">
              <Laptop size={32} className="text-cyan mb-2" />
              <h4>Laptops on Rent (Corporate)</h4>
              <p>Dell Latitude, Lenovo ThinkPad, and Apple MacBook Pro on flexible monthly/annual rentals in Pune. Includes free hardware maintenance and same-day standby replacement.</p>
              <button
                className="btn-link-simple mt-3"
                onClick={() => openQuoteModal('Corporate Laptop Rental Inquiry')}
              >
                Inquire Laptop Rentals →
              </button>
            </div>

            <div className="advantage-box glass-card">
              <Server size={32} className="text-emerald mb-2" />
              <h4>Enterprise Servers & Storage</h4>
              <p>Dell PowerEdge R750/R650 and HPE ProLiant Gen11 rack & tower servers. Configured with hardware RAID, hot-swap SAS/NVMe drives, redundant PSUs, and iDRAC/iLO.</p>
              <button
                className="btn-link-simple mt-3"
                onClick={() => openQuoteModal('Enterprise Server Sizing & Quote')}
              >
                Request Server Sizing →
              </button>
            </div>

            <div className="advantage-box glass-card">
              <Monitor size={32} className="text-purple mb-2" />
              <h4>Monitors, Mouse & Desktops</h4>
              <p>Dell 24" & 27" IPS commercial monitors with pivot stands, OptiPlex desktop PCs, Logitech MK295 silent wireless combos, and precision optical mouse sets.</p>
              <button
                className="btn-link-simple mt-3"
                onClick={() => openQuoteModal('Commercial Desktops & Monitors Inquiry')}
              >
                Request Peripheral Quote →
              </button>
            </div>

            <div className="advantage-box glass-card">
              <HardDrive size={32} className="text-cyan mb-2" />
              <h4>LAN & Structured Cabling</h4>
              <p>CommScope Systimax and Schneider Cat6/Cat6A LSZH pure copper drums (305m), 24/48-port loaded patch panels, snagless molded patch cords, and dual I/O boxes.</p>
              <button
                className="btn-link-simple mt-3"
                onClick={() => openQuoteModal('LAN Cabling Materials BoQ Inquiry')}
              >
                Get LAN Cabling BoQ →
              </button>
            </div>

            <div className="advantage-box glass-card">
              <Shield size={32} className="text-emerald mb-2" />
              <h4>Firewalls & Network Switches</h4>
              <p>Professional configuration and installation of Sophos XGS, Fortinet FortiGate, HPE Aruba Instant On PoE+ switches, and Cisco Catalyst managed switches.</p>
              <button
                className="btn-link-simple mt-3"
                onClick={() => openQuoteModal('Firewall & Switch Quotation')}
              >
                Request Network Quote →
              </button>
            </div>

            <div className="advantage-box glass-card">
              <Award size={32} className="text-purple mb-2" />
              <h4>CCTV Cameras & Biometrics</h4>
              <p>Hikvision 4K ColorVu IP security cameras, Western Digital Purple NVR storage, touchless facial recognition biometric locks, and surveillance AMC.</p>
              <button
                className="btn-link-simple mt-3"
                onClick={() => openQuoteModal('CCTV Surveillance & Biometrics Inquiry')}
              >
                Inquire CCTV Setup →
              </button>
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              className="btn-primary"
              onClick={() => {
                navigate('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>Explore All Hardware Models & Rentals</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE LNK IT INFRA (GENUINE VALUE POINTS) */}
      <section className="section-why py-8 bg-subtle">
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-glow">TRUSTED IT PARTNER IN PUNE & PCMC</div>
            <h2 className="section-title">
              Why Corporate Offices Rely on LNK IT Infra
            </h2>
            <p className="section-desc">
              We take pride in clean craftsmanship, transparent pricing, and dependable engineering.
            </p>
          </div>

          <div className="grid-3-col mt-6">
            <div className="advantage-box">
              <Award size={28} className="text-cyan mb-2" />
              <h4>Installation & Setup</h4>
              <p>Clean under-desk cable management, server rack assembly, patch panel punching, Wi-Fi access point mounting, and labeled port documentation for every desk.</p>
            </div>

            <div className="advantage-box">
              <Shield size={28} className="text-emerald mb-2" />
              <h4>5+ Years IT Experience</h4>
              <p>Hands-on practical experience in network installation, server OS configuration, multi-user Tally Prime setups, and smooth Microsoft 365 cloud migrations.</p>
            </div>

            <div className="advantage-box">
              <Clock size={28} className="text-purple mb-2" />
              <h4>Technical Support</h4>
              <p>Quick remote desktop troubleshooting and dependable on-site technician visits across Pune, Hinjewadi, Kharadi, Baner, and PCMC whenever computer issues arise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW WE DELIVER (4 STEP PROCESS) */}
      <section className="section-process py-8">
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-glow">OUR DELIVERY PROCESS</div>
            <h2 className="section-title">
              How We Deliver Your IT Infrastructure
            </h2>
            <p className="section-desc">
              A transparent, well-organized engineering process that eliminates project delays and hidden costs.
            </p>
          </div>

          <div className="process-steps-row">
            <div className="process-step-card glass-card">
              <div className="step-number-tag">01</div>
              <h3 className="step-title">Free On-Site Survey</h3>
              <p className="step-desc">Our engineer visits your office to inspect the floor plan, count cable drops, assess server room power, and test Wi-Fi dead zones.</p>
            </div>
            <div className="process-step-card glass-card">
              <div className="step-number-tag">02</div>
              <h3 className="step-title">Itemized BoQ & Blueprint</h3>
              <p className="step-desc">We deliver a transparent Bill of Quantities with hardware models, cable quantities, and fixed project milestones—no surprise costs.</p>
            </div>
            <div className="process-step-card glass-card">
              <div className="step-number-tag">03</div>
              <h3 className="step-title">Installation & Technical Testing</h3>
              <p className="step-desc">Technicians run conduits, terminate patch panels, configure firewalls, align Wi-Fi antennas, and test every network point for peak speed and stability.</p>
            </div>
            <div className="process-step-card glass-card">
              <div className="step-number-tag">04</div>
              <h3 className="step-title">Handover & Support</h3>
              <p className="step-desc">We provide full port-label documentation, train your admin staff, and transition into proactive AMC monitoring and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ANNUAL MAINTENANCE CONTRACTS (IT AMC) */}
      <section className="section-amc py-8 bg-subtle">
        <div className="container">
          <div className="section-header">
            <div className="badge-glow">PEACE OF MIND FOR YOUR IT</div>
            <h2 className="section-title">
              Annual Maintenance Contracts (IT AMC)
            </h2>
            <p className="section-desc">
              Consider LNK IT Infra as your outsourced, dedicated IT department on speed dial. Whenever your computers, printer, Wi-Fi, or server has an issue, our engineers resolve it quickly.
            </p>
          </div>

          <div className="amc-tiers-grid">
            <div className="amc-card glass-card">
              <div className="amc-badge">STANDARD PLAN</div>
              <h3 className="amc-title">Basic IT Support</h3>
              <div className="amc-price">Best for small offices (10 to 30 computers)</div>
              <ul className="amc-perks">
                <li><Check size={16} /> Monthly scheduled checkup of all office computers</li>
                <li><Check size={16} /> Quick phone and remote desktop help whenever needed</li>
                <li><Check size={16} /> Antivirus updates and computer speed tune-ups</li>
                <li><Check size={16} /> Regular verification that file backups are working</li>
                <li><Check size={16} /> On-site engineer visits for computer and printer repairs</li>
              </ul>
              <button
                className="btn-secondary w-full"
                onClick={() => {
                  navigate('amc');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                View Full AMC Details
              </button>
            </div>

            <div className="amc-card glass-card featured">
              <div className="amc-badge highlight">MOST POPULAR</div>
              <h3 className="amc-title">Comprehensive AMC</h3>
              <div className="amc-price">Ideal for growing companies (30 to 150 computers)</div>
              <ul className="amc-perks">
                <li><Check size={16} /> <strong>Everything in Basic Plan included</strong></li>
                <li><Check size={16} /> <strong>Priority on-site technical support dispatch</strong></li>
                <li><Check size={16} /> Full maintenance for Wi-Fi, switches, routers & firewalls</li>
                <li><Check size={16} /> Temporary replacement equipment provided during repairs</li>
                <li><Check size={16} /> Server room and UPS battery backup checks</li>
                <li><Check size={16} /> <strong>Priority 24/7 emergency support desk</strong></li>
              </ul>
              <button
                className="btn-primary w-full"
                onClick={() => openQuoteModal('Inquiry for Comprehensive AMC Plan')}
              >
                Choose Comprehensive AMC
              </button>
            </div>

            <div className="amc-card glass-card">
              <div className="amc-badge">DEDICATED STAFF</div>
              <h3 className="amc-title">Resident IT Engineer</h3>
              <div className="amc-price">For large offices, schools & factories (100+ computers)</div>
              <ul className="amc-perks">
                <li><Check size={16} /> Full-time IT engineer stationed right inside your office</li>
                <li><Check size={16} /> Immediate desk-side help for employee computer issues</li>
                <li><Check size={16} /> Daily check of servers, office Wi-Fi, and attendance</li>
                <li><Check size={16} /> Laptop setups, password resets, and email management</li>
                <li><Check size={16} /> Backed by senior network architects for complex tasks</li>
              </ul>
              <button
                className="btn-secondary w-full"
                onClick={() => {
                  navigate('amc');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Inquire Resident Engineer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REAL CLIENT RESULTS */}
      <section className="section-cases py-8">
        <div className="container">
          <div className="section-header">
            <div className="badge-glow">PROVEN TRACK RECORD</div>
            <h2 className="section-title">
              Recent Client Installations
            </h2>
            <p className="section-desc">
              Here is how we solved critical IT headaches for finance firms, industrial plants, and software teams across Pune & PCMC.
            </p>
          </div>

          <div className="cases-grid">
            {CASE_STUDIES_DETAILED.slice(0, 3).map((cs) => (
              <div key={cs.id} className="case-card glass-card">
                <div className="case-header">
                  <div className="industry-pill">{cs.industry}</div>
                  <h3 className="client-name">{cs.client}</h3>
                  <div className="case-city-sub">{cs.city}</div>
                </div>

                <div className="case-body">
                  <div className="case-row">
                    <span className="case-label">The Challenge:</span>
                    <p className="case-desc">{cs.challenge}</p>
                  </div>
                  <div className="case-row">
                    <span className="case-label">Our Solution:</span>
                    <p className="case-desc">{cs.solution}</p>
                  </div>
                  <div className="case-row highlight-box">
                    <span className="case-label text-emerald">Key Result:</span>
                    <p className="case-desc">{cs.results[0]}</p>
                  </div>
                </div>

                <div className="case-footer-action">
                  <button
                    className="btn-card-action"
                    onClick={() => {
                      navigate('our-clients');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <span>Read Full Case Study</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Banner */}
          <div className="testimonial-banner glass-card mt-6">
            <div className="testi-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
              <span className="rating-score">4.9 / 5.0 Rating Across 180+ Business Reviews in Pune & PCMC</span>
            </div>
            <blockquote className="testi-quote">
              “LNK IT Infra re-cabled our entire office server room and set up strong Wi-Fi across 2 floors in Magarpatta. Their team worked over the weekend so our staff arrived Monday morning to a clean, super-fast network with zero work disruption. Their firewall setup has kept our financial data completely safe.”
            </blockquote>
            <div className="testi-author">
              <strong>Kavita Iyer</strong> — Head of Operations, Apex Financial Advisors (Pune)
            </div>
          </div>
        </div>
      </section>

      {/* 8. PUNE HEAD OFFICE */}
      <section className="section-locations py-8 bg-subtle">
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-glow">OUR OFFICE LOCATION • PUNE ONLY</div>
            <h2 className="section-title">
              Our Pune Head Office
            </h2>
            <p className="section-desc">
              Headquartered in Pune, our central engineering team is directly dispatched for on-site cabling, emergency troubleshooting, computer maintenance, and site surveys across Pune & PCMC.
            </p>
          </div>

          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div className="loc-card glass-card" style={{ padding: '32px' }}>
              <div className="loc-badge">PUNE HEAD OFFICE</div>
              <h3 className="loc-title" style={{ fontSize: '1.4rem' }}>Pune (Magarpatta City)</h3>
              <div className="loc-address" style={{ fontSize: '0.95rem' }}>
                <MapPin size={20} className="loc-pin" />
                <span>Tower 4, Level 5, Cybercity IT Park, Magarpatta City, Hadapsar, Pune, Maharashtra — 411028</span>
              </div>
              <div className="loc-status" style={{ marginBottom: '16px' }}>
                <span className="pulse-dot"></span> Central Dispatch & Operations Hub (Serving Pune & PCMC)
              </div>
              <div className="loc-contact-row" style={{ fontSize: '0.95rem', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Phone size={15} className="text-cyan" />
                  <a href="tel:+917796852335" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 700 }}>+91 7796852335</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={15} className="text-cyan" />
                  <a href="mailto:lnkitinfra@gmail.com" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: 600 }}>lnkitinfra@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION BANNER */}
      <section className="section-cta py-8">
        <div className="container">
          <div className="cta-banner-box">
            <h2 className="cta-heading">Ready to Setup or Upgrade Your Office IT Infrastructure?</h2>
            <p className="cta-subtext">
              Speak with a senior network engineer today. We provide free on-site surveys, cable audits, and customized BoQ estimates in Pune.
            </p>
            <div className="cta-actions">
              <button
                className="btn-primary btn-large"
                onClick={() => openQuoteModal('Office IT Infrastructure Consultation')}
              >
                <span>Request Free Site Audit</span>
                <ChevronRight size={18} />
              </button>
              <button
                className="btn-whatsapp-large"
                onClick={() => openWhatsApp()}
              >
                <WhatsAppIcon size={18} />
                <span>Chat on WhatsApp (+91 7796852335)</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
