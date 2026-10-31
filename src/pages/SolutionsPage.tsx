import {
  ShieldCheck,
  Server,
  Wifi,
  Lock,
  Video,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Headphones,
  Award,
  Layers,
  Wrench,
  FileCheck
} from 'lucide-react';

interface SolutionsPageProps {
  navigate: (route: string) => void;
  openQuoteModal: (requirement?: string) => void;
}

export function SolutionsPage({ navigate, openQuoteModal }: SolutionsPageProps) {
  const openWhatsApp = (topic: string) => {
    window.open(
      `https://wa.me/917796852335?text=${encodeURIComponent(
        `Hello LNK IT Infra! I would like to inquire about enterprise IT solution: ${topic}.`
      )}`,
      '_blank'
    );
  };

  const turnkeySolutions = [
    {
      id: 'turnkey-office',
      badge: 'END-TO-END TURNKEY',
      icon: Server,
      title: 'Complete New Office IT Setup',
      desc: 'Flawless day-one IT launch for new corporate branches, coworking hubs, and expanding offices. We handle layout blueprints, structured cabling, rack installations, firewall deployment, Wi-Fi 6 APs, biometric door access, and ISP coordination.',
      deliverables: [
        'Certified Cat6 / Cat6A cabling with Fluke test reports',
        'Floor-to-floor 10G OM3/OM4 fiber optic backbone',
        'Wall & floor server rack dressing with cable organizers',
        'Day-1 internet leased line handover & workstation testing'
      ],
      route: 'services/cabling'
    },
    {
      id: 'enterprise-wifi',
      badge: 'HIGH-DENSITY WIRELESS',
      icon: Wifi,
      title: 'Enterprise Wireless & Campus Wi-Fi 6',
      desc: 'Ultra-reliable wireless networks engineered for dense seating areas, conference rooms, and multi-floor buildings. Say goodbye to dropped calls during daily Google Meet / Teams standups.',
      deliverables: [
        'RF site survey & heatmaps using Ekahau / Fluke tools',
        'Isolated Guest Wi-Fi portal with SMS OTP authentication',
        'Seamless fast-roaming (802.11r/k/v) across all meeting rooms',
        'HPE Aruba Instant On & Sophos AP6 centralized cloud management'
      ],
      route: 'services/wifi'
    },
    {
      id: 'cyber-security',
      badge: 'ZERO-TRUST DEFENSE',
      icon: Lock,
      title: 'Perimeter Cyber Security & Next-Gen UTM',
      desc: 'Bank-grade defense shielding your corporate network against ransomware, data leakage, and unapproved web browsing. Includes secure remote-work VPN gateways for hybrid teams.',
      deliverables: [
        'Sophos XGS & Fortinet FortiGate hardware appliance setup',
        'SSL-VPN client configuration with Two-Factor Authentication',
        'Bandwidth throttling for YouTube/Netflix & social media filtering',
        'Automated dual-ISP WAN failover (zero-downtime internet)'
      ],
      route: 'services/firewall'
    },
    {
      id: 'server-room',
      badge: 'MISSION CRITICAL',
      icon: ShieldCheck,
      title: 'Server Room & Mini Datacenter Infrastructure',
      desc: 'Robust server room engineering with redundant power backup, organized cable management, precision environmental monitoring, and enterprise storage racks.',
      deliverables: [
        '24U / 42U heavy-duty floor standing server racks with PDU',
        'APC by Schneider Electric Online Smart-UPS with battery banks',
        'Temperature & humidity sensor integration with SMS alerts',
        'Synology & QNAP centralized NAS storage for automated backups'
      ],
      route: 'services/datacenter'
    },
    {
      id: 'surveillance-access',
      badge: 'PHYSICAL SECURITY',
      icon: Video,
      title: 'Smart Surveillance & Biometric Access Control',
      desc: 'Centralized 4K IP CCTV surveillance combined with AI face-recognition biometric time-attendance and electromagnetic door access control systems.',
      deliverables: [
        'Hikvision 4K IP dome & bullet cameras with 30-day NVR recording',
        'Biometric fingerprint + face reader access control systems',
        'Fire alarm integration with automatic fail-safe door unlocking',
        'Mobile app monitoring for authorized security & facility teams'
      ],
      route: 'services/biometrics'
    },
    {
      id: 'it-amc',
      badge: 'OUTSOURCED IT TEAM',
      icon: Headphones,
      title: 'Annual Maintenance Contracts (IT AMC) & SLAs',
      desc: 'Total peace of mind with our dedicated IT support team on speed dial. Guaranteed 1-hour emergency on-site dispatch in Pune & PCMC, routine maintenance, and standby replacement hardware.',
      deliverables: [
        'Unlimited remote support via AnyDesk / TeamViewer',
        'Scheduled weekly/monthly on-site engineer preventive audits',
        'Standby spare hardware during vendor warranty turnaround',
        'Dedicated account manager with transparent monthly ticketing reports'
      ],
      route: 'amc'
    }
  ];

  const deliverySteps = [
    {
      step: '01',
      title: 'Site Inspection & Requirement Audit',
      desc: 'Our senior network engineer visits your office premises in Pune, assesses architectural drawings, user counts, and current internet/cabling bottlenecks.'
    },
    {
      step: '02',
      title: 'Architectural Blueprint & Bill of Quantities',
      desc: 'We present a transparent, itemized BoQ with genuine hardware recommendations, network topology diagrams, and fixed project timelines.'
    },
    {
      step: '03',
      title: 'Certified Installation & Fluke Testing',
      desc: 'Our trained technicians pull cables through conduits, patch patch-panels, configure VLANs and firewalls, and certify every cable node with Fluke DSX.'
    },
    {
      step: '04',
      title: 'Day-1 Handover & Proactive AMC Support',
      desc: 'We train your office administrator, provide documentation and label maps, and transition into 24/7 monitoring and preventive AMC care.'
    }
  ];

  return (
    <div className="page-wrapper solutions-page">
      {/* 1. Page Hero Section */}
      <section className="page-hero-section">
        <div className="container">
          <div className="badge-glow">
            <Layers size={14} className="text-cyan" />
            <span>ENTERPRISE TURNKEY IT SOLUTIONS</span>
          </div>
          <h1 className="page-hero-title">
            Integrated <span className="gradient-text">IT Infrastructure Solutions</span> for Modern Workplaces
          </h1>
          <p className="page-hero-desc">
            From single-floor software startups to 500+ seat multi-acre corporate campuses, LNK IT Infra delivers complete, turnkey IT infrastructure with genuine enterprise hardware, certified cabling, and guaranteed SLA support.
          </p>

          <div className="hero-cta-group mt-6">
            <button
              className="btn-primary"
              onClick={() => openQuoteModal('Enterprise Turnkey IT Solution Consultation')}
            >
              <span>Schedule Free Site Survey</span>
              <ArrowRight size={16} />
            </button>
            <button
              className="btn-secondary"
              onClick={() => openWhatsApp('Enterprise IT Solutions')}
            >
              <span>Chat with Lead Architect</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Solutions Matrix Grid */}
      <section className="section-solutions py-8">
        <div className="container">
          <div className="section-header">
            <div className="badge-glow">OUR SOLUTION SUITE</div>
            <h2 className="section-title">
              Engineered for <span className="gradient-text">Zero Downtime & Growth</span>
            </h2>
            <p className="section-desc">
              Explore our turnkey solution packages tailored specifically for IT parks, manufacturing corporate hubs, co-working spaces, and corporate offices across India.
            </p>
          </div>

          <div className="solutions-grid">
            {turnkeySolutions.map((sol) => {
              const IconComp = sol.icon;
              return (
                <div key={sol.id} className="solution-card glass-card">
                  <div className="card-top-row">
                    <div className="solution-icon-box">
                      <IconComp size={24} />
                    </div>
                    <span className="solution-tag">{sol.badge}</span>
                  </div>

                  <h3 className="solution-card-title">{sol.title}</h3>
                  <p className="solution-card-desc">{sol.desc}</p>

                  <div className="solution-features-list">
                    {sol.deliverables.map((item, idx) => (
                      <div key={idx} className="feature-item">
                        <CheckCircle2 size={16} className="feature-check" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="card-bottom-meta">
                    <button
                      className="btn-card-action"
                      onClick={() => {
                        navigate(sol.route);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <span>Explore Technical Specs</span>
                      <ChevronRight size={16} />
                    </button>
                    <button
                      className="btn-link-simple"
                      onClick={() => openQuoteModal(`Quotation for ${sol.title}`)}
                    >
                      Request BoQ
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Delivery Framework */}
      <section className="section-process py-8 bg-subtle">
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-glow">HOW WE DELIVER</div>
            <h2 className="section-title">
              Our 4-Step <span className="gradient-text">Engineering Blueprint</span>
            </h2>
            <p className="section-desc">
              Every IT solution follows a rigorous engineering process designed to eliminate project delays, budget overruns, and network instability.
            </p>
          </div>

          <div className="process-steps-row">
            {deliverySteps.map((step) => (
              <div key={step.step} className="process-step-card glass-card">
                <div className="step-number-tag">{step.step}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose LNK IT Infra */}
      <section className="section-why py-8">
        <div className="container">
          <div className="glass-card p-8">
            <div className="section-header text-center">
              <div className="badge-glow">TRUSTED BY 250+ ENTERPRISES</div>
              <h2 className="section-title">
                The LNK IT Infra <span className="gradient-text">Advantage</span>
              </h2>
            </div>

            <div className="grid-3-col mt-6">
              <div className="advantage-box">
                <Award size={32} className="text-cyan mb-3" />
                <h4>Fluke-Certified Cabling</h4>
                <p>Every network point is tested and certified with printed Fluke DSX reports, assuring 25-year performance warranties.</p>
              </div>

              <div className="advantage-box">
                <Wrench size={32} className="text-emerald mb-3" />
                <h4>1-Hour On-Site SLA</h4>
                <p>Strategically located engineers across Pune, Hinjewadi, Kharadi, and PCMC ensure lightning-fast emergency response.</p>
              </div>

              <div className="advantage-box">
                <FileCheck size={32} className="text-purple mb-3" />
                <h4>100% Genuine Hardware</h4>
                <p>Official partner of Sophos, Fortinet, HPE Aruba, Cisco, Hikvision, and APC with direct manufacturer warranties.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Banner */}
      <section className="section-cta py-8">
        <div className="container">
          <div className="cta-banner-box">
            <h2 className="cta-heading">Ready to Upgrade or Setup Your Office IT Infrastructure?</h2>
            <p className="cta-subtext">
              Speak with a senior solutions architect today. We provide free on-site surveys, cable audits, and customized BoQ estimates in Pune.
            </p>
            <div className="cta-actions">
              <button
                className="btn-primary btn-large"
                onClick={() => openQuoteModal('Turnkey Office IT Infrastructure Solution')}
              >
                <span>Request Free Site Audit</span>
                <ChevronRight size={18} />
              </button>
              <button
                className="btn-whatsapp-large"
                onClick={() => openWhatsApp('Office IT Infrastructure')}
              >
                <span>WhatsApp: +91 7796852335</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
