import { useState, useEffect } from 'react';
import {
  Zap,
  ArrowRight,
  Sliders,
  ChevronRight,
  CheckCircle2,
  Check,
  Star,
  MapPin,
  Phone,
  HelpCircle,
  FileText
} from 'lucide-react';
import { DETAILED_SERVICES } from '../data/solutionsData';
import { CASE_STUDIES_DETAILED } from '../data/caseStudiesData';
import { WhatsAppIcon, InstagramIcon, YouTubeIcon } from '../components/SocialIcons';

interface HomePageProps {
  navigate: (route: string) => void;
  openQuoteModal: (requirement?: string) => void;
}

export function HomePage({ navigate, openQuoteModal }: HomePageProps) {
  const [heroImageIdx, setHeroImageIdx] = useState(0);

  // Estimator State
  const [officeUsers, setOfficeUsers] = useState(50);
  const [branchCount, setBranchCount] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'cabling',
    'firewall',
    'wifi',
    'cctv'
  ]);

  // Health Audit State
  const [auditScores, setAuditScores] = useState({
    networkAge: 2,
    backupFrequency: 2,
    firewallType: 2,
    outageFrequency: 2
  });

  const heroImages = [
    {
      src: '/images/datacenter.jpg',
      label: 'Server Rooms',
      title: 'Neat Server Rooms & Clean Network Cabling',
      desc: 'Organized server racks, optical fiber backbones, and certified cabling for offices, factories, and schools.'
    },
    {
      src: '/images/noc.jpg',
      label: 'Cyber Defense',
      title: '24/7 Network Monitoring & Cyber Protection',
      desc: 'Active defense that blocks ransomware, stops viruses, and prevents internet downtime with dual-line failover.'
    },
    {
      src: '/images/access_control.jpg',
      label: 'CCTV & Access',
      title: 'Touchless Attendance & Clear CCTV Security',
      desc: 'Instant facial recognition door locks and crystal-clear security cameras viewable live on your mobile phone.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateEstimatedBudget = () => {
    let base = officeUsers * 1100;
    if (selectedServices.includes('cabling')) base += officeUsers * 900;
    if (selectedServices.includes('firewall')) base += officeUsers > 120 ? 115000 : 60000;
    if (selectedServices.includes('wifi')) base += Math.ceil(officeUsers / 25) * 15000;
    if (selectedServices.includes('cctv')) base += Math.max(8, Math.ceil(officeUsers / 10)) * 4200;
    if (selectedServices.includes('biometrics')) base += branchCount * 26000;
    if (selectedServices.includes('epabx')) base += 32000 + officeUsers * 350;
    if (selectedServices.includes('datacenter')) base += 165000;
    if (selectedServices.includes('cloud-backup')) base += 40000;
    return Math.round(base * (branchCount > 1 ? 1 + (branchCount - 1) * 0.75 : 1));
  };

  const calculateHealthScore = () => {
    const total = auditScores.networkAge + auditScores.backupFrequency + auditScores.firewallType + auditScores.outageFrequency;
    return Math.round((total / 12) * 100);
  };

  const openWhatsApp = (customMsg?: string) => {
    const text = customMsg || encodeURIComponent(
      `Hello LNK IT Infra! I would like to inquire about office IT infrastructure setup for our office (${officeUsers} users, ${branchCount} location).`
    );
    window.open(`https://wa.me/917796852335?text=${text}`, '_blank');
  };

  return (
    <div className="home-page-container">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-grid-lines"></div>

        <div className="container hero-content-grid">
          <div className="hero-copy">
            <div className="badge-glow">
              <Zap size={14} className="text-cyan" />
              <span>OFFICE IT INFRASTRUCTURE & NETWORK INTEGRATION</span>
            </div>

            <h1 className="hero-headline">
              Reliable <span className="gradient-text">Office Networks</span>, Cyber Security & <span className="gradient-text-alt">IT Infrastructure</span>.
            </h1>

            <p className="hero-subhead">
              We design, install, and support office networks, commercial Wi-Fi, security firewalls, CCTV cameras, and server rooms across India. Simple, dependable, and hassle-free IT for your business.
            </p>

            <div className="hero-ctas">
              <button
                className="btn-primary hero-btn"
                onClick={() => {
                  navigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span>Explore All Services</span>
                <ArrowRight size={18} />
              </button>
              <a href="#estimator" className="btn-secondary hero-btn">
                <Sliders size={18} />
                <span>Estimate Setup Cost</span>
              </a>
            </div>

            {/* Quick Connect & Official Channels with icons */}
            <div className="hero-social-channels">
              <span className="hero-social-label">Connect & Follow:</span>
              <div className="hero-social-pills">
                <a
                  href="https://wa.me/917796852335?text=Hello%20LNK%20IT%20Infra!%20I%20would%20like%20to%20discuss%20our%20office%20IT%20requirements."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-pill pill-wa"
                  title="Direct WhatsApp Support: +91 7796852335"
                >
                  <WhatsAppIcon size={17} />
                  <span>WhatsApp 7796852335</span>
                </a>
                <a
                  href="https://www.instagram.com/lnk_it_infra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-pill pill-ig"
                  title="Follow on Instagram @lnk_it_infra"
                >
                  <InstagramIcon size={17} />
                  <span>Instagram @lnk_it_infra</span>
                </a>
                <a
                  href="https://www.youtube.com/@LNKITInfra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-pill pill-yt"
                  title="Subscribe on YouTube @LNKITInfra"
                >
                  <YouTubeIcon size={17} />
                  <span>YouTube @LNKITInfra</span>
                </a>
              </div>
            </div>

            {/* Live Trust Metrics row */}
            <div className="hero-metric-strip">
              <div className="hero-metric-item">
                <div className="metric-val">650+</div>
                <div className="metric-lbl">Offices & Plants Set Up</div>
              </div>
              <div className="metric-divider"></div>
              <div className="hero-metric-item">
                <div className="metric-val">1,200+</div>
                <div className="metric-lbl">Happy Business Clients</div>
              </div>
              <div className="metric-divider"></div>
              <div className="hero-metric-item">
                <div className="metric-val">10+ Yrs</div>
                <div className="metric-lbl">Experience in India</div>
              </div>
              <div className="metric-divider"></div>
              <div className="hero-metric-item">
                <div className="metric-val">&lt;45 Min</div>
                <div className="metric-lbl">Quick Support Response</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Carousel Preview */}
          <div className="hero-visual-col">
            <div className="hero-image-frame glass-card">
              <div className="hero-image-header">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="window-title">
                  LNK-INFRA // {heroImages[heroImageIdx].title}
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

      {/* 2. PARTNERS STRIP */}
      <section className="partners-strip">
        <div className="container">
          <div className="partners-title">
            AUTHORIZED SYSTEM INTEGRATION & HARDWARE PARTNERS
          </div>
          <div className="partners-row">
            <div className="partner-chip">
              <span className="partner-name">SOPHOS</span>
              <span className="partner-level">Security Firewalls & Wi-Fi</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">FORTINET</span>
              <span className="partner-level">FortiGate SD-WAN</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">HPE ARUBA</span>
              <span className="partner-level">Commercial Switches & APs</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">CISCO</span>
              <span className="partner-level">Enterprise Networking</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">SYNTEL & NEC</span>
              <span className="partner-level">Intercom & EPABX Systems</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">HIKVISION</span>
              <span className="partner-level">4K Security Cameras & NVR</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">APC SCHNEIDER</span>
              <span className="partner-level">Online UPS & Server Racks</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES PREVIEW */}
      <section className="section-solutions">
        <div className="container">
          <div className="section-header">
            <div className="badge-glow">OUR CORE CAPABILITIES</div>
            <h2 className="section-title">
              Complete <span className="gradient-text">IT Solutions</span> for Modern Offices
            </h2>
            <p className="section-desc">
              Whether you are setting up a brand-new office, expanding across floors, or upgrading an old network, our certified engineers handle planning, hardware supply, wiring, and ongoing support.
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
                      <span>Read Full Guide & Pricing</span>
                      <ChevronRight size={16} />
                    </button>
                    <button
                      className="btn-link-simple"
                      onClick={() => openQuoteModal(`Quotation inquiry for ${sol.title}`)}
                    >
                      Quick Quote
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="view-all-services-bar">
            <button
              className="btn-secondary"
              onClick={() => {
                navigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>View All 10 Services & Technical Guides</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. EASY COST ESTIMATOR */}
      <section id="estimator" className="section-estimator">
        <div className="container">
          <div className="estimator-wrapper glass-card">
            <div className="estimator-header">
              <div className="badge-glow">INSTANT SIZING & ESTIMATE</div>
              <h2 className="section-title">
                Estimate Your <span className="gradient-text">Office IT Setup Cost</span>
              </h2>
              <p className="section-desc">
                Select your team size and the equipment you need to calculate an estimated budget and recommended hardware package for your office.
              </p>
            </div>

            <div className="estimator-body-grid">
              {/* Controls Column */}
              <div className="estimator-controls">
                <div className="control-group">
                  <div className="control-label-row">
                    <label>Number of Employees / Computers:</label>
                    <span className="control-val">{officeUsers} Staff</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="10"
                    value={officeUsers}
                    onChange={(e) => setOfficeUsers(Number(e.target.value))}
                    className="custom-range-slider"
                  />
                  <div className="range-hints">
                    <span>10 (Small Office)</span>
                    <span>50 (Medium Office)</span>
                    <span>150 (Large Office)</span>
                    <span>500+ (Headquarters)</span>
                  </div>
                </div>

                <div className="control-group">
                  <div className="control-label-row">
                    <label>Number of Office Locations:</label>
                    <span className="control-val">{branchCount} {branchCount === 1 ? 'Location' : 'Locations'}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={branchCount}
                    onChange={(e) => setBranchCount(Number(e.target.value))}
                    className="custom-range-slider"
                  />
                  <div className="range-hints">
                    <span>1 Location (Single Office)</span>
                    <span>3 to 5 (Regional Branches)</span>
                    <span>10 (Pan-India)</span>
                  </div>
                </div>

                <div className="control-group">
                  <label className="mb-2 block">Choose What You Need:</label>
                  <div className="services-toggle-grid">
                    {[
                      { id: 'cabling', label: 'Network Cabling (Cables to every desk)' },
                      { id: 'firewall', label: 'Security Firewall (Sophos or Fortinet)' },
                      { id: 'wifi', label: 'Office Wi-Fi (Fast Wi-Fi in every room)' },
                      { id: 'cctv', label: 'CCTV Security Cameras (HD video & mobile view)' },
                      { id: 'biometrics', label: 'Biometric Attendance & Smart Door Locks' },
                      { id: 'epabx', label: 'Office Intercom & Desk Phones (EPABX)' },
                      { id: 'datacenter', label: 'Server Rack & Battery Backup (UPS)' },
                      { id: 'cloud-backup', label: 'Automated Daily Cloud Backup' }
                    ].map((srv) => (
                      <button
                        key={srv.id}
                        type="button"
                        className={`service-toggle-btn ${selectedServices.includes(srv.id) ? 'selected' : ''}`}
                        onClick={() => toggleService(srv.id)}
                      >
                        <div className="toggle-checkbox">
                          {selectedServices.includes(srv.id) && <Check size={14} />}
                        </div>
                        <span>{srv.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output Summary Card */}
              <div className="estimator-output-card">
                <div className="output-card-header">
                  <div className="rec-badge">RECOMMENDED SETUP SUMMARY</div>
                  <h3 className="rec-tier">
                    {officeUsers <= 40
                      ? 'Small Business Package'
                      : officeUsers <= 150
                      ? 'Standard Corporate Setup'
                      : 'Enterprise Multi-Floor Infrastructure'}
                  </h3>
                </div>

                <div className="output-specs-grid">
                  <div className="spec-stat">
                    <span className="spec-lbl">Recommended Firewall</span>
                    <span className="spec-ans">
                      {officeUsers <= 40 ? 'Sophos XGS 116 or Fortinet 60F' : officeUsers <= 150 ? 'Sophos XGS 126 or Fortinet 80F' : 'Sophos XGS 2100 Enterprise'}
                    </span>
                  </div>
                  <div className="spec-stat">
                    <span className="spec-lbl">Network Switches</span>
                    <span className="spec-ans">
                      {Math.ceil(officeUsers / 24)}x Aruba Instant On 24-Port Switches
                    </span>
                  </div>
                  <div className="spec-stat">
                    <span className="spec-lbl">Wi-Fi Access Points</span>
                    <span className="spec-ans">
                      {Math.ceil(officeUsers / 25)}x High-Speed Wi-Fi 6 Access Points
                    </span>
                  </div>
                  <div className="spec-stat">
                    <span className="spec-lbl">Cable Points to Desks</span>
                    <span className="spec-ans">
                      ~{officeUsers * 2} Connection Points (PC + Phone + Wi-Fi)
                    </span>
                  </div>
                  <div className="spec-stat">
                    <span className="spec-lbl">Estimated Installation Time</span>
                    <span className="spec-ans">
                      {officeUsers <= 40 ? '3 to 5 Days' : officeUsers <= 150 ? '7 to 10 Days' : '12 to 18 Days'}
                    </span>
                  </div>
                </div>

                <div className="budget-box">
                  <div className="budget-label">Estimated Turnkey Equipment & Wiring Cost:</div>
                  <div className="budget-value">
                    ₹{calculateEstimatedBudget().toLocaleString('en-IN')}
                    <span className="budget-sub"> (Approximate)</span>
                  </div>
                  <p className="budget-note">
                    *Includes all hardware, genuine cables, testing, setup, configuration, and 1 year of support.
                  </p>
                </div>

                <div className="estimator-actions">
                  <button
                    className="btn-primary w-full"
                    onClick={() => {
                      openQuoteModal(
                        `Estimate for ${officeUsers} users in ${branchCount} location(s). Needed: ${selectedServices.join(', ')}. Est Budget: ₹${calculateEstimatedBudget().toLocaleString('en-IN')}`
                      );
                    }}
                  >
                    Request an Official Quotation & Site Visit
                  </button>
                  <button
                    className="btn-whatsapp-full"
                    onClick={() =>
                      openWhatsApp(
                        `Hi LNK IT Infra! I calculated an estimate on your website for ${officeUsers} users, ${branchCount} office(s). Estimated cost is ~₹${calculateEstimatedBudget().toLocaleString('en-IN')}. Please share a formal quote.`
                      )
                    }
                  >
                    Send to WhatsApp (+91 7796852335)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 2-MINUTE IT HEALTH CHECKUP */}
      <section className="section-audit">
        <div className="container">
          <div className="audit-card glass-card">
            <div className="audit-header">
              <div className="badge-glow">QUICK 2-MINUTE TEST</div>
              <h2 className="section-title">
                Check Your Office's <span className="gradient-text">IT Health Score</span>
              </h2>
              <p className="section-desc">
                Answer 4 simple questions about your current office setup to find out if your business data, computers, and internet are safe or at risk.
              </p>
            </div>

            <div className="audit-questions-grid">
              <div className="audit-q-box">
                <span className="q-number">Question 1</span>
                <h4>How are your office cables and server wires arranged?</h4>
                <div className="q-options">
                  <label className={`q-opt ${auditScores.networkAge === 3 ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="q1"
                      checked={auditScores.networkAge === 3}
                      onChange={() => setAuditScores({ ...auditScores, networkAge: 3 })}
                    />
                    <span>Neat and labeled inside a proper server rack</span>
                  </label>
                  <label className={`q-opt ${auditScores.networkAge === 2 ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="q1"
                      checked={auditScores.networkAge === 2}
                      onChange={() => setAuditScores({ ...auditScores, networkAge: 2 })}
                    />
                    <span>Fairly clean, but some loose wires under desks</span>
                  </label>
                  <label className={`q-opt ${auditScores.networkAge === 1 ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="q1"
                      checked={auditScores.networkAge === 1}
                      onChange={() => setAuditScores({ ...auditScores, networkAge: 1 })}
                    />
                    <span>Very messy tangled wiring, cables disconnect easily</span>
                  </label>
                </div>
              </div>

              <div className="audit-q-box">
                <span className="q-number">Question 2</span>
                <h4>How does your company back up important files & accounts?</h4>
                <div className="q-options">
                  <label className={`q-opt ${auditScores.backupFrequency === 3 ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="q2"
                      checked={auditScores.backupFrequency === 3}
                      onChange={() => setAuditScores({ ...auditScores, backupFrequency: 3 })}
                    />
                    <span>Automatic daily backup to secure cloud storage</span>
                  </label>
                  <label className={`q-opt ${auditScores.backupFrequency === 2 ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="q2"
                      checked={auditScores.backupFrequency === 2}
                      onChange={() => setAuditScores({ ...auditScores, backupFrequency: 2 })}
                    />
                    <span>Saved manually on an external hard drive weekly</span>
                  </label>
                  <label className={`q-opt ${auditScores.backupFrequency === 1 ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="q2"
                      checked={auditScores.backupFrequency === 1}
                      onChange={() => setAuditScores({ ...auditScores, backupFrequency: 1 })}
                    />
                    <span>No regular backup; files stay on individual laptops</span>
                  </label>
                </div>
              </div>

              <div className="audit-q-box">
                <span className="q-number">Question 3</span>
                <h4>Do you have a dedicated security firewall installed?</h4>
                <div className="q-options">
                  <label className={`q-opt ${auditScores.firewallType === 3 ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="q3"
                      checked={auditScores.firewallType === 3}
                      onChange={() => setAuditScores({ ...auditScores, firewallType: 3 })}
                    />
                    <span>Yes, modern firewall (Sophos, Fortinet, or SonicWall)</span>
                  </label>
                  <label className={`q-opt ${auditScores.firewallType === 2 ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="q3"
                      checked={auditScores.firewallType === 2}
                      onChange={() => setAuditScores({ ...auditScores, firewallType: 2 })}
                    />
                    <span>Have a hardware box, but licenses are expired</span>
                  </label>
                  <label className={`q-opt ${auditScores.firewallType === 1 ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="q3"
                      checked={auditScores.firewallType === 1}
                      onChange={() => setAuditScores({ ...auditScores, firewallType: 1 })}
                    />
                    <span>No firewall; using only standard internet Wi-Fi router</span>
                  </label>
                </div>
              </div>

              <div className="audit-q-box">
                <span className="q-number">Question 4</span>
                <h4>How often does your office face internet or network problems?</h4>
                <div className="q-options">
                  <label className={`q-opt ${auditScores.outageFrequency === 3 ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="q4"
                      checked={auditScores.outageFrequency === 3}
                      onChange={() => setAuditScores({ ...auditScores, outageFrequency: 3 })}
                    />
                    <span>Almost never (dual internet lines with auto-switch)</span>
                  </label>
                  <label className={`q-opt ${auditScores.outageFrequency === 2 ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="q4"
                      checked={auditScores.outageFrequency === 2}
                      onChange={() => setAuditScores({ ...auditScores, outageFrequency: 2 })}
                    />
                    <span>Once or twice a month during peak working hours</span>
                  </label>
                  <label className={`q-opt ${auditScores.outageFrequency === 1 ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="q4"
                      checked={auditScores.outageFrequency === 1}
                      onChange={() => setAuditScores({ ...auditScores, outageFrequency: 1 })}
                    />
                    <span>Frequent slowdowns, call drops, or disconnections every week</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="audit-result-banner">
              <div className="audit-score-dial">
                <div className="dial-num">{calculateHealthScore()}</div>
                <div className="dial-max">/ 100</div>
              </div>

              <div className="audit-score-text">
                <div className="score-status">
                  {calculateHealthScore() >= 80 ? (
                    <span className="status-good">✓ Good Condition (Low Risk)</span>
                  ) : calculateHealthScore() >= 55 ? (
                    <span className="status-warning">⚠️ Needs Attention (Moderate Risk)</span>
                  ) : (
                    <span className="status-critical">🚨 Critical Risk (Immediate Action Needed)</span>
                  )}
                </div>
                <p>
                  {calculateHealthScore() >= 80
                    ? 'Your office IT setup is in good shape. Regular preventive checkups will keep your network fast and secure.'
                    : calculateHealthScore() >= 55
                    ? 'Your business has notable risks—such as lack of automatic backup or missing firewall protection that could cause file loss or downtime.'
                    : 'Your office is at high risk of data loss, ransomware attacks, or sudden work disruption. We strongly recommend a free on-site inspection.'}
                </p>
              </div>

              <div className="audit-cta-col">
                <button
                  className="btn-primary"
                  onClick={() => {
                    openQuoteModal(`Requesting Free Onsite IT Health Checkup (Health Score: ${calculateHealthScore()}/100)`);
                  }}
                >
                  Book Free On-Site Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ANNUAL MAINTENANCE CONTRACT (AMC) OVERVIEW */}
      <section className="section-amc">
        <div className="container">
          <div className="section-header">
            <div className="badge-glow">PEACE OF MIND FOR YOUR IT</div>
            <h2 className="section-title">
              Annual Maintenance Contracts <span className="gradient-text">(IT AMC)</span>
            </h2>
            <p className="section-desc">
              Think of an AMC like having your own dedicated IT department on speed dial. Whenever your computers, printer, Wi-Fi, or server has an issue, our engineers resolve it quickly.
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
      <section className="section-cases">
        <div className="container">
          <div className="section-header">
            <div className="badge-glow">PROVEN TRACK RECORD</div>
            <h2 className="section-title">
              Real Work for <span className="gradient-text">Indian Businesses</span>
            </h2>
            <p className="section-desc">
              Here is how we solved critical IT headaches for finance firms, industrial plants, and software teams across India.
            </p>
          </div>

          <div className="cases-grid">
            {CASE_STUDIES_DETAILED.map((cs) => (
              <div key={cs.id} className="case-card glass-card">
                <div className="case-header">
                  <div className="industry-pill">{cs.industry}</div>
                  <h3 className="client-name">{cs.client}</h3>
                  <div className="case-city-sub">{cs.city}</div>
                </div>

                <div className="case-body">
                  <div className="case-row">
                    <span className="case-label">The Problem:</span>
                    <p className="case-desc">{cs.challenge}</p>
                  </div>
                  <div className="case-row">
                    <span className="case-label">What We Did:</span>
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
                      navigate('case-studies');
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
          <div className="testimonial-banner glass-card">
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

      {/* 8. REGIONAL HUBS */}
      <section className="section-locations">
        <div className="container">
          <div className="section-header">
            <div className="badge-glow">LOCAL PRESENCE</div>
            <h2 className="section-title">
              Our Technology Centers Across <span className="gradient-text">India</span>
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
                <span>Tower 4, Level 5, Cybercity IT Park, Magarpatta City, Pune, Maharashtra — 411028</span>
              </div>
              <div className="loc-phone">
                <Phone size={16} /> +91 7796852335 / +91 20 6790 3300
              </div>
              <div className="loc-status">
                <span className="pulse-dot"></span> Serving Magarpatta, Hinjawadi, Kharadi, Bhosari & Chakan
              </div>
            </div>

            <div className="loc-card glass-card">
              <div className="loc-badge">MUMBAI REGIONAL CENTER</div>
              <h3 className="loc-title">Mumbai (BKC Platina)</h3>
              <div className="loc-address">
                <MapPin size={18} className="loc-pin" />
                <span>Level 11, Platina Tech Tower, G-Block, Bandra Kurla Complex (BKC), Mumbai — 400051</span>
              </div>
              <div className="loc-phone">
                <Phone size={16} /> +91 7796852335 / +91 22 6900 4400
              </div>
              <div className="loc-status">
                <span className="pulse-dot"></span> Serving BKC, Andheri, Lower Parel, Navi Mumbai & Thane
              </div>
            </div>

            <div className="loc-card glass-card">
              <div className="loc-badge">BENGALURU TECH HUB</div>
              <h3 className="loc-title">Bengaluru (Outer Ring Road)</h3>
              <div className="loc-address">
                <MapPin size={18} className="loc-pin" />
                <span>EcoSpace Business Park, Campus 2B, Outer Ring Road, Bellandur, Bengaluru — 560103</span>
              </div>
              <div className="loc-phone">
                <Phone size={16} /> +91 7796852335 / +91 80 4430 8800
              </div>
              <div className="loc-status">
                <span className="pulse-dot"></span> Serving ORR Corridor, Whitefield & Electronic City
              </div>
            </div>

            <div className="loc-card glass-card">
              <div className="loc-badge">DELHI NCR REGIONAL HUB</div>
              <h3 className="loc-title">Delhi NCR (DLF Cyber City)</h3>
              <div className="loc-address">
                <MapPin size={18} className="loc-pin" />
                <span>Building 9B, Level 6, DLF Cyber City, Phase 3, Gurugram, Haryana — 122002</span>
              </div>
              <div className="loc-phone">
                <Phone size={16} /> +91 7796852335 / +91 124 4560 900
              </div>
              <div className="loc-status">
                <span className="pulse-dot"></span> Serving Gurugram, Noida, Delhi & Faridabad
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="section-faq">
        <div className="container">
          <div className="section-header">
            <div className="badge-glow">COMMON QUESTIONS</div>
            <h2 className="section-title">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="faq-grid">
            {[
              {
                q: 'Will our office work be interrupted during cable installation or server setup?',
                a: 'No. We plan major cable pulling, server work, and internet cutovers during evenings or over the weekend. When your employees arrive on Monday morning, all computers will be connected to a fast, working network without any lost work hours.'
              },
              {
                q: 'Which firewall model is right for our office?',
                a: 'For offices with 20 to 80 users, the Sophos XGS 116 or Fortinet 60F is typically the most reliable and cost-effective choice. For larger teams (100+ users), we recommend higher models like the Sophos XGS 126 or Fortinet 80F. We assess your exact needs before recommending any device.'
              },
              {
                q: 'How fast do your engineers arrive if we have an emergency?',
                a: 'Under our Comprehensive AMC, our remote team connects within 15 minutes to diagnose the issue. If an engineer is needed in person at your office in Pune, Mumbai, Bengaluru, or Delhi NCR, our local technician arrives within 1 hour with spare replacement parts.'
              },
              {
                q: 'Can you fix and organize our old, messy server rack cables?',
                a: 'Yes, this is one of our most popular services. We trace, test, and neatly comb every cable, install proper patch panels, remove dead wires, and clearly label every line with color-coded cables so your server room looks clean and professional.'
              },
              {
                q: 'Do you help with genuine Microsoft Office & email licenses?',
                a: 'Yes, we provide official Microsoft 365 business email licenses, set up Outlook for your domain (yourname@yourcompany.com), migrate your old emails safely, and set up two-factor security for your staff.'
              }
            ].map((faq, fIdx) => (
              <div key={fIdx} className="faq-item glass-card">
                <div className="faq-q">
                  <HelpCircle size={20} className="text-cyan shrink-0" />
                  <h4>{faq.q}</h4>
                </div>
                <p className="faq-a">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BOTTOM CALL-TO-ACTION BANNER */}
      <section className="section-cta-banner">
        <div className="container">
          <div className="cta-banner-box glass-card">
            <div className="cta-banner-content">
              <div className="badge-glow">GET STARTED TODAY</div>
              <h2 className="cta-headline">
                Ready to Upgrade Your <span className="gradient-text">Office Network?</span>
              </h2>
              <p className="cta-subhead">
                Get in touch for a free on-site survey and customized quotation. Our senior engineers will visit your office, check your current setup, and provide clear recommendations.
              </p>
              <div className="cta-buttons">
                <button
                  className="btn-primary"
                  onClick={() => openQuoteModal('Book Free On-Site Inspection & Survey')}
                >
                  <FileText size={18} />
                  <span>Book Free On-Site Survey</span>
                </button>
                <button
                  className="btn-whatsapp"
                  onClick={() => openWhatsApp()}
                >
                  <WhatsAppIcon size={18} />
                  <span>Chat on WhatsApp (+91 7796852335)</span>
                </button>
              </div>

              <div className="cta-social-strip">
                <span>Follow our latest project installations:</span>
                <a
                  href="https://www.youtube.com/@LNKITInfra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-social-link yt"
                >
                  <YouTubeIcon size={15} />
                  <span>YouTube</span>
                </a>
                <a
                  href="https://www.instagram.com/lnk_it_infra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-social-link ig"
                >
                  <InstagramIcon size={15} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
