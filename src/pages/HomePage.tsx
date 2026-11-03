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
      label: 'Office Server Racks & Equipment',
      title: 'Office Server Racks & Hardware Installation',
      desc: 'Neatly dressed small office racks, patch panels, gigabit network switches, and reliable backup power.'
    },
    {
      src: '/images/datacenter.jpg',
      label: 'Enterprise Datacenter & Servers',
      title: 'Enterprise Server Room & High-Density Racks',
      desc: 'Precision server cabinets, high-speed optical fiber backbones, redundant UPS power, and 99.9% uptime.'
    },
    {
      src: '/images/noc.jpg',
      label: '24/7 IT Helpdesk & NOC Desk',
      title: 'Proactive Network Monitoring & Support Desk',
      desc: 'Round-the-clock IT health checks, automated dual-ISP failover, and rapid on-site technician dispatch in Pune.'
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
      {/* 1. HERO SECTION WITH DYNAMIC BACKGROUND PHOTOS */}
      <section className="hero-section hero-with-bg-photo">
        {/* Full-Bleed Background Photos with Smooth Fade Transition */}
        <div className="hero-bg-photo-wrapper" aria-hidden="true">
          {heroImages.map((img, i) => (
            <div
              key={i}
              className={`hero-bg-photo-slide ${heroImageIdx === i ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img.src})` }}
            />
          ))}
          <div className="hero-bg-gradient-overlay"></div>
          <div className="hero-bg-mesh-grid"></div>
        </div>

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
            <div className="badge-glow">GENUINE IT HARDWARE SUPPLY • PUNE ONLY</div>
            <h2 className="section-title">
              IT Hardware Supply, Servers, SSD, RAM &amp; Laptops
            </h2>
            <p className="section-desc">
              We supply 100% genuine enterprise servers, fast NVMe SSDs, ECC RAM, processors, commercial desktop CPUs, IPS monitors, and corporate laptops with official manufacturer warranty and turnkey Pune on-site setup.
            </p>
          </div>

          <div className="grid-3-col mt-6">
            {/* 1. Enterprise Servers */}
            <div className="hw-preview-card">
              <div className="hw-preview-thumb">
                <img
                  src="/images/products/server.jpg"
                  alt="Enterprise Rack and Tower Servers Dell PowerEdge and HPE ProLiant"
                  loading="lazy"
                />
                <span className="hw-preview-tag">DELL &amp; HPE SERVERS</span>
              </div>
              <div className="hw-preview-body">
                <h4>Enterprise Servers &amp; Storage</h4>
                <p>
                  Dell PowerEdge R750/R650 and HPE ProLiant Gen11 rack &amp; tower servers. Sized with hardware RAID controllers, hot-swap SAS/NVMe drives, and redundant PSUs.
                </p>
                <button
                  className="btn-card-boq mt-auto"
                  onClick={() => openQuoteModal('Enterprise Server Sizing & Quote (Dell / HPE)')}
                >
                  <FileSpreadsheet size={14} />
                  <span>Request Server Sizing</span>
                </button>
              </div>
            </div>

            {/* 2. Server Installation */}
            <div className="hw-preview-card">
              <div className="hw-preview-thumb">
                <img
                  src="/images/products/server_installation.jpg"
                  alt="Turnkey Server Installation and Rack Dressing"
                  loading="lazy"
                />
                <span className="hw-preview-tag">ON-SITE SETUP</span>
              </div>
              <div className="hw-preview-body">
                <h4>Server Installation &amp; Setup</h4>
                <p>
                  Turnkey 19-inch rack mounting, PDU power routing, hardware RAID 1/5/10 build, VMware ESXi / Hyper-V OS deployment, and clean cable dressing in Pune.
                </p>
                <button
                  className="btn-card-boq mt-auto"
                  onClick={() => openQuoteModal('Server Rack Installation & Hypervisor Setup')}
                >
                  <FileSpreadsheet size={14} />
                  <span>Inquire Server Setup</span>
                </button>
              </div>
            </div>

            {/* 3. Enterprise SSDs */}
            <div className="hw-preview-card">
              <div className="hw-preview-thumb">
                <img
                  src="/images/products/ssd.jpg"
                  alt="Solid State Drives NVMe M.2 and Enterprise SATA SSDs"
                  loading="lazy"
                />
                <span className="hw-preview-tag">NVMe &amp; SATA SSD</span>
              </div>
              <div className="hw-preview-body">
                <h4>Enterprise &amp; Desktop SSDs</h4>
                <p>
                  Samsung PM9A3 / 990 PRO &amp; Kingston Enterprise NVMe M.2 &amp; 2.5-inch SATA SSDs (500GB to 3.84TB) with power-loss protection and high write endurance.
                </p>
                <button
                  className="btn-card-boq mt-auto"
                  onClick={() => openQuoteModal('SSD Storage Inquiry (Samsung / Kingston / Crucial)')}
                >
                  <FileSpreadsheet size={14} />
                  <span>Request SSD Pricing</span>
                </button>
              </div>
            </div>

            {/* 4. RAM & Memory */}
            <div className="hw-preview-card">
              <div className="hw-preview-thumb">
                <img
                  src="/images/products/ram.jpg"
                  alt="Server ECC RAM and Desktop DDR4 DDR5 Memory"
                  loading="lazy"
                />
                <span className="hw-preview-tag">DDR4 &amp; DDR5 ECC</span>
              </div>
              <div className="hw-preview-body">
                <h4>RAM &amp; Server Memory</h4>
                <p>
                  Kingston &amp; Crucial/Micron 16GB, 32GB, 64GB DDR4 &amp; DDR5 4800/5600MHz ECC Registered RDIMMs for servers and high-speed UDIMMs for corporate workstations.
                </p>
                <button
                  className="btn-card-boq mt-auto"
                  onClick={() => openQuoteModal('RAM Memory Upgrade Inquiry (Server & Desktop)')}
                >
                  <FileSpreadsheet size={14} />
                  <span>Inquire RAM Upgrades</span>
                </button>
              </div>
            </div>

            {/* 5. Processors & CPUs */}
            <div className="hw-preview-card">
              <div className="hw-preview-thumb">
                <img
                  src="/images/products/processor.jpg"
                  alt="Intel Xeon Scalable and AMD EPYC Processors"
                  loading="lazy"
                />
                <span className="hw-preview-tag">INTEL &amp; AMD CPUs</span>
              </div>
              <div className="hw-preview-body">
                <h4>Processors &amp; CPUs</h4>
                <p>
                  Intel Xeon Silver/Gold Scalable, Intel Core i7/i9 14th Gen, and AMD EPYC 9004 series processors engineered for high-throughput virtualization and databases.
                </p>
                <button
                  className="btn-card-boq mt-auto"
                  onClick={() => openQuoteModal('Processors & CPU Sizing (Intel Xeon / AMD EPYC)')}
                >
                  <FileSpreadsheet size={14} />
                  <span>Request Processor Quote</span>
                </button>
              </div>
            </div>

            {/* 6. Desktop CPUs & Mini PCs */}
            <div className="hw-preview-card">
              <div className="hw-preview-thumb">
                <img
                  src="/images/products/desktop_cpu.jpg"
                  alt="Desktop CPU and Mini PCs Dell OptiPlex"
                  loading="lazy"
                />
                <span className="hw-preview-tag">WORKSTATIONS &amp; PCs</span>
              </div>
              <div className="hw-preview-body">
                <h4>Desktop CPUs &amp; Mini PCs</h4>
                <p>
                  Dell OptiPlex Micro/Small Form Factor PCs and HP EliteDesk workstations with Intel Core i5/i7, 16GB RAM, 512GB NVMe SSD, and Windows 11 Pro pre-activated.
                </p>
                <button
                  className="btn-card-boq mt-auto"
                  onClick={() => openQuoteModal('Desktop CPU & Workstation PCs Inquiry')}
                >
                  <FileSpreadsheet size={14} />
                  <span>Request Desktop BoQ</span>
                </button>
              </div>
            </div>

            {/* 7. Corporate Laptops & Rentals */}
            <div className="hw-preview-card">
              <div className="hw-preview-thumb">
                <img
                  src="/images/products/laptop.jpg"
                  alt="Corporate Laptops Dell Latitude Lenovo ThinkPad MacBook"
                  loading="lazy"
                />
                <span className="hw-preview-tag">SALES &amp; RENTALS</span>
              </div>
              <div className="hw-preview-body">
                <h4>Corporate Laptops (Rent &amp; Buy)</h4>
                <p>
                  Dell Latitude, Lenovo ThinkPad, and Apple MacBook Pro. Sourced for outright purchase or flexible corporate rentals with same-day standby replacement in Pune.
                </p>
                <button
                  className="btn-card-boq mt-auto"
                  onClick={() => openQuoteModal('Corporate Laptop Purchase & Rental Inquiry')}
                >
                  <FileSpreadsheet size={14} />
                  <span>Inquire Laptop Rentals</span>
                </button>
              </div>
            </div>

            {/* 8. Commercial IPS Monitors */}
            <div className="hw-preview-card">
              <div className="hw-preview-thumb">
                <img
                  src="/images/products/monitor.jpg"
                  alt="Dell and HP Commercial IPS Monitors"
                  loading="lazy"
                />
                <span className="hw-preview-tag">COMMERCIAL IPS</span>
              </div>
              <div className="hw-preview-body">
                <h4>Commercial IPS Monitors</h4>
                <p>
                  Dell 24" &amp; 27" Full HD and 4K IPS monitors with ergonomic height-adjust pivot stands, HDMI/DisplayPort/USB-C connectivity, and anti-glare flicker-free panels.
                </p>
                <button
                  className="btn-card-boq mt-auto"
                  onClick={() => openQuoteModal('Commercial IPS Monitors BoQ Inquiry')}
                >
                  <FileSpreadsheet size={14} />
                  <span>Request Monitor BoQ</span>
                </button>
              </div>
            </div>

            {/* 9. Next-Gen Firewalls & Network Switches */}
            <div className="hw-preview-card">
              <div className="hw-preview-thumb">
                <img
                  src="/images/products/firewall.jpg"
                  alt="Sophos XGS and Fortinet FortiGate Firewalls and Aruba Switches"
                  loading="lazy"
                />
                <span className="hw-preview-tag">SECURITY &amp; NETWORK</span>
              </div>
              <div className="hw-preview-body">
                <h4>Firewalls &amp; Network Switches</h4>
                <p>
                  Official supply and setup for Sophos XGS, Fortinet FortiGate UTM firewalls, and HPE Aruba Instant On 24/48-port Gigabit PoE+ switches for enterprise LANs.
                </p>
                <button
                  className="btn-card-boq mt-auto"
                  onClick={() => openQuoteModal('Firewall & Network Switch Quote')}
                >
                  <FileSpreadsheet size={14} />
                  <span>Request Network BoQ</span>
                </button>
              </div>
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
              <span>Explore Complete IT Hardware Catalog &amp; BoQ</span>
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
              “LNK IT Infra re-cabled our entire office server room and set up strong Wi-Fi across 2 floors in Pune. Their team worked over the weekend so our staff arrived Monday morning to a clean, super-fast network with zero work disruption. Their firewall setup has kept our financial data completely safe.”
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
              <h3 className="loc-title" style={{ fontSize: '1.4rem' }}>Pune Operations Hub</h3>
              <div className="loc-address" style={{ fontSize: '0.95rem' }}>
                <MapPin size={20} className="loc-pin" />
                <span>Central Operations Hub — Serving Hinjewadi, Kharadi, Baner, PCMC & All Pune Corridors, Maharashtra — 411028</span>
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
