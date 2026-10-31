import { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Check,
  Star,
  MapPin,
  Shield,
  Award,
  Clock
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
      src: '/images/datacenter.jpg',
      label: 'Server Rooms & Cabling',
      title: 'Neat Server Racks & Certified Structured Cabling',
      desc: 'Fluke-tested Cat6 and fiber optic cabling installed with organized cable trays and patch panels.'
    },
    {
      src: '/images/noc.jpg',
      label: 'Firewalls & Cyber Security',
      title: 'Sophos & Fortinet Next-Gen Firewalls',
      desc: 'Shield your office network against viruses, block ransomware, and provide secure VPN access for remote employees.'
    },
    {
      src: '/images/access_control.jpg',
      label: 'Biometrics & CCTV',
      title: 'Biometric Access Control & 4K CCTV Cameras',
      desc: 'Touchless facial recognition attendance door locks and crystal-clear security cameras viewable on your mobile phone.'
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
              <span>CERTIFIED IT SYSTEM INTEGRATOR • PUNE, MAHARASHTRA</span>
            </div>

            <h1 className="hero-headline">
              Enterprise IT Infrastructure & Office Networking Services in Pune
            </h1>

            <p className="hero-subhead">
              We help businesses plan, install, and maintain reliable office IT systems. From Fluke-certified structured cabling and enterprise Wi-Fi 6 to Next-Gen firewalls and 24/7 IT AMC support, our local team handles everything from initial design to ongoing maintenance.
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
                <div className="metric-val">10+ Years</div>
                <div className="metric-lbl">Serving Indian Businesses</div>
              </div>
              <div className="metric-divider"></div>
              <div className="hero-metric-item">
                <div className="metric-val">Fluke DSX</div>
                <div className="metric-lbl">Certified Cable Testing</div>
              </div>
              <div className="metric-divider"></div>
              <div className="hero-metric-item">
                <div className="metric-val">1-Hour SLA</div>
                <div className="metric-lbl">Emergency On-Site Dispatch</div>
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
                <span className="window-badge">VERIFIED</span>
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

      {/* 2. PARTNERS STRIP */}
      <section className="partners-strip">
        <div className="container">
          <div className="partners-title">
            AUTHORIZED SYSTEM INTEGRATION & HARDWARE PARTNERS
          </div>
          <div className="partners-row">
            <div className="partner-chip">
              <span className="partner-name">SOPHOS</span>
              <span className="partner-level">Security Firewalls & AP6</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">FORTINET</span>
              <span className="partner-level">FortiGate SD-WAN Firewalls</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">HPE ARUBA</span>
              <span className="partner-level">Managed Switches & Wi-Fi 6</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">CISCO</span>
              <span className="partner-level">Enterprise Routing & Switching</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">SYNTEL & NEC</span>
              <span className="partner-level">Office Intercom & IP-PBX</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">HIKVISION</span>
              <span className="partner-level">4K IP Security Cameras</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">APC SCHNEIDER</span>
              <span className="partner-level">Online Smart-UPS & Racks</span>
            </div>
          </div>
          <p className="partners-guarantee-note">
            100% genuine enterprise hardware sourced through authorized Indian distributor channels with official manufacturer warranty.
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
            {DETAILED_SERVICES.slice(0, 6).map((sol) => {
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
                      className="btn-link-simple"
                      onClick={() => openQuoteModal(`Quotation inquiry for ${sol.title}`)}
                    >
                      Request BoQ
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
              <span>View All 10 IT Services & Solutions</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE LNK IT INFRA (GENUINE VALUE POINTS) */}
      <section className="section-why py-8 bg-subtle">
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-glow">TRUSTED IN PUNE & MAHARASHTRA</div>
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
              <h4>Fluke-Certified Cabling</h4>
              <p>Every single network point is terminated, tested, and certified using Fluke DSX cable analyzers. You receive full printed test documentation with 25-year performance assurance.</p>
            </div>

            <div className="advantage-box">
              <Shield size={28} className="text-emerald mb-2" />
              <h4>100% Genuine Hardware</h4>
              <p>Authorized partner of Sophos, Fortinet, Aruba, Cisco, Syntel, NEC, Hikvision, and APC. All equipment comes with official manufacturer warranties and authorized serial numbers.</p>
            </div>

            <div className="advantage-box">
              <Clock size={28} className="text-purple mb-2" />
              <h4>1-Hour On-Site SLA</h4>
              <p>When unexpected hardware failures or network cuts happen, our senior engineers arrive on-site within 60 minutes across Pune, PCMC, Magarpatta, and Hinjewadi.</p>
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
              <h3 className="step-title">Installation & Fluke Testing</h3>
              <p className="step-desc">Technicians run conduits, terminate patch panels, configure firewalls, align Wi-Fi antennas, and cert-test every network point.</p>
            </div>
            <div className="process-step-card glass-card">
              <div className="step-number-tag">04</div>
              <h3 className="step-title">Handover & AMC Support</h3>
              <p className="step-desc">We provide full port-label documentation, train your admin staff, and transition into proactive 24/7 AMC monitoring and maintenance.</p>
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
                <li><Check size={16} /> <strong>Guaranteed fast on-site arrival within 1 hour</strong></li>
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
              Here is how we solved critical IT headaches for finance firms, industrial plants, and software teams across India.
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
              <span className="rating-score">4.9 / 5.0 Rating Across 180+ Business Reviews in India</span>
            </div>
            <blockquote className="testi-quote">
              “LNK IT Infra re-cabled our entire office server room and set up strong Wi-Fi across 2 floors in BKC. Their team worked over the weekend so our staff arrived Monday morning to a clean, super-fast network with zero work disruption. Their firewall has kept our financial data completely safe.”
            </blockquote>
            <div className="testi-author">
              <strong>Kavita Iyer</strong> — Head of Operations, Apex Financial Advisors (Mumbai BKC)
            </div>
          </div>
        </div>
      </section>

      {/* 8. REGIONAL HUBS & HEAD OFFICE */}
      <section className="section-locations py-8 bg-subtle">
        <div className="container">
          <div className="section-header">
            <div className="badge-glow">LOCAL PRESENCE</div>
            <h2 className="section-title">
              Our Technology Centers Across India
            </h2>
            <p className="section-desc">
              With engineers and inventory hubs located in major cities, we dispatch technicians quickly for site surveys, emergency replacements, and cable testing.
            </p>
          </div>

          <div className="locations-grid">
            <div className="loc-card glass-card">
              <div className="loc-badge">PUNE HEAD OFFICE</div>
              <h3 className="loc-title">Pune (Magarpatta City)</h3>
              <div className="loc-address">
                <MapPin size={18} className="loc-pin" />
                <span>Tower 4, Level 5, Cybercity IT Park, Magarpatta City, Hadapsar, Pune, Maharashtra — 411028</span>
              </div>
              <div className="loc-contact-row">
                <span className="loc-phone">Phone: +91 7796852335</span>
                <span className="loc-email">Email: lnkitinfra@gmail.com</span>
              </div>
            </div>

            <div className="loc-card glass-card">
              <div className="loc-badge">MUMBAI REGION</div>
              <h3 className="loc-title">Mumbai (Bandra Kurla Complex)</h3>
              <div className="loc-address">
                <MapPin size={18} className="loc-pin" />
                <span>Platina Building, G-Block, BKC, Bandra East, Mumbai, Maharashtra — 400051</span>
              </div>
              <div className="loc-contact-row">
                <span className="loc-phone">Phone: +91 7796852335</span>
                <span className="loc-email">Email: lnkitinfra@gmail.com</span>
              </div>
            </div>

            <div className="loc-card glass-card">
              <div className="loc-badge">BENGALURU HUB</div>
              <h3 className="loc-title">Bengaluru (Outer Ring Road)</h3>
              <div className="loc-address">
                <MapPin size={18} className="loc-pin" />
                <span>Prestige Tech Park, Marathahalli-Sarjapur ORR, Bengaluru, Karnataka — 560103</span>
              </div>
              <div className="loc-contact-row">
                <span className="loc-phone">Phone: +91 7796852335</span>
                <span className="loc-email">Email: lnkitinfra@gmail.com</span>
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
