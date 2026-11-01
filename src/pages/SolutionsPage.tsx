import { useEffect } from 'react';
import {
  FileSpreadsheet,
  ShieldCheck,
  Server,
Lock,
  Video,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
Award,
  Layers,
  Wrench,
  FileCheck,
  HardDrive,
  Fingerprint,
  Cpu
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

  useEffect(() => {
    const hash = window.location.hash;
    const match = hash.match(/#([a-zA-Z0-9_-]+)/g);
    if (match && match.length > 0) {
      const targetId = match[match.length - 1].replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

    // Exact 8 Solutions requested by user
  const turnkeySolutions = [
    {
      id: 'server-storage',
      badge: 'ENTERPRISE COMPUTE',
      icon: Server,
      title: 'Server & Storage Solutions',
      desc: 'High-performance Dell PowerEdge and HPE ProLiant rack/tower servers configured with hardware RAID, hot-swap SAS/NVMe drives, and centralized SAN/NAS enterprise storage systems for business virtualization, ERP, and databases.',
      deliverables: [
        'Dell PowerEdge & HPE ProLiant server sizing & deployment',
        'Hardware RAID 1/5/10 with hot-swap SAS/NVMe storage',
        'Synology & QNAP centralized NAS/SAN storage setup',
        'VMware ESXi & Microsoft Hyper-V virtualization architecture'
      ],
      route: 'services/server-installation'
    },
    {
      id: 'it-security',
      badge: 'ZERO-TRUST DEFENSE',
      icon: ShieldCheck,
      title: 'IT Security Solutions',
      desc: 'Comprehensive cybersecurity architecture featuring Next-Gen UTM firewalls (Sophos XGS, Fortinet FortiGate, SonicWall TZ), encrypted remote-work VPN gateways, endpoint protection, and ransomware mitigation.',
      deliverables: [
        'Sophos XGS, Fortinet FortiGate & SonicWall firewall deployment',
        'Automated dual-ISP WAN failover (<2 sec zero downtime)',
        'Encrypted SSL-VPN with Multi-Factor Authentication (MFA)',
        'Deep packet SSL inspection, application control & ransomware defense'
      ],
      route: 'services/firewall'
    },
    {
      id: 'networking',
      badge: 'ENTERPRISE NETWORKING',
      icon: Cpu,
      title: 'Networking Solutions',
      desc: 'High-speed office network switching, core routing, and high-density commercial Wi-Fi 6 mesh infrastructure engineered for zero latency, seamless roaming, and bandwidth priority for daily video calls.',
      deliverables: [
        'HPE Aruba Instant On & Cisco Catalyst managed PoE+ switches',
        'VLAN network segmentation for guest Wi-Fi, CCTV, and servers',
        'High-density Wi-Fi 6 access points with zero-drop fast roaming',
        'Bandwidth QoS prioritization for Microsoft Teams & Zoom meetings'
      ],
      route: 'services/networking'
    },
    {
      id: 'structured-cabling',
      badge: 'CERTIFIED CABLING',
      icon: Layers,
      title: 'Structured Cabling',
      desc: 'Certified Cat6, Cat6A, and multi-core optical fiber network cabling designed for maximum throughput, clean under-desk wire dressing, and labeled patch panel termination with Fluke DSX pass certification.',
      deliverables: [
        'CommScope Systimax & Schneider Cat6/Cat6A LSZH pure copper cables',
        'Floor-to-floor 10G OM3/OM4 optical fiber backbone pulling',
        'Floor-standing server rack dressing with neat cable organizers',
        'Printed Fluke DSX CableAnalyzer certification test reports'
      ],
      route: 'services/cabling'
    },
    {
      id: 'server-backup',
      badge: 'DISASTER RECOVERY',
      icon: HardDrive,
      title: 'Server & Backup Solutions',
      desc: 'Automated local and cloud 3-2-1 backup solutions safeguarding critical corporate files, accounting databases (Tally), and server virtual machines with rapid disaster recovery runbooks.',
      deliverables: [
        'Automated daily snapshots & encrypted off-site cloud replication',
        'Veeam Backup & Replication and Synology Active Backup setup',
        'Bare-metal system restore & quick VM failover runbooks',
        'APC by Schneider Electric Online Smart-UPS clean power integration'
      ],
      route: 'services/cloud-backup'
    },
    {
      id: 'cctv-solutions',
      badge: 'SMART SURVEILLANCE',
      icon: Video,
      title: 'CCTV Solutions',
      desc: 'High-definition 4K Ultra-HD IP security camera installations providing round-the-clock perimeter surveillance, infrared night vision, and centralized NVR recording for Pune corporate offices.',
      deliverables: [
        'Hikvision 4K Ultra-HD IP dome, bullet, and PTZ cameras',
        '24/7 continuous 30-day recording on WD Purple surveillance drives',
        'Secure mobile app live view & playback for management teams',
        'Neat Power-over-Ethernet (PoE) cabling with zero messy adapters'
      ],
      route: 'services/cctv'
    },
    {
      id: 'biometric-attendance',
      badge: 'SMART ATTENDANCE',
      icon: Fingerprint,
      title: 'Biometric Attendance Solutions',
      desc: 'Touchless AI facial recognition and optical fingerprint biometric time-attendance terminals equipped with anti-spoofing protection, real-time sync, and automated payroll software export.',
      deliverables: [
        'AI facial recognition & biometric fingerprint time-attendance devices',
        'Lightning-fast <0.3s recognition with photo anti-spoofing defense',
        'Centralized cloud management across multiple Pune office locations',
        'Automated shift roster management, overtime & payroll report exports'
      ],
      route: 'services/biometrics'
    },
    {
      id: 'door-access',
      badge: 'ACCESS CONTROL',
      icon: Lock,
      title: 'Door Access Solutions',
      desc: 'High-security electromagnetic (EM) door locks, RFID proximity cards, and biometric controllers securing server rooms, executive cabins, and main office reception entrances with fire alarm emergency release.',
      deliverables: [
        'Heavy-duty 600 lbs electromagnetic (EM) locks and drop bolts',
        'RFID smart cards, biometric reader & PIN keypad access controllers',
        'Emergency break-glass override switches and fire alarm integration',
        'Time-stamped server room access logs for compliance audits'
      ],
      route: 'services/biometrics'
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
      title: 'Installation & Network Testing',
      desc: 'Our trained technicians pull cables through conduits, patch patch-panels, configure VLANs and firewalls, and verify every cable node for maximum speed.'
    },
    {
      step: '04',
      title: 'Day-1 Handover & Proactive AMC Support',
      desc: 'We train your office administrator, provide documentation and label maps, and transition into proactive monitoring and preventive AMC care.'
    }
  ];

  return (
    <div className="page-wrapper solutions-page">
      {/* 1. Page Hero Section */}
      <section className="page-hero-section">
        <div className="container">
          <div className="badge-glow">
            <Layers size={14} className="text-cyan" />
            <span>ENTERPRISE TURNKEY IT SOLUTIONS • PUNE</span>
          </div>
          <h1 className="page-hero-title">
            Integrated <span className="gradient-text">IT Infrastructure Solutions</span> for Pune Offices
          </h1>
          <p className="page-hero-desc">
            From single-floor software startups to 500+ seat corporate offices across Pune, LNK IT Infra delivers complete, turnkey IT infrastructure with genuine enterprise hardware, certified cabling, and guaranteed local SLA support.
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
              Explore our turnkey solution packages tailored specifically for IT parks, manufacturing corporate hubs, co-working spaces, and corporate offices across Pune & PCMC.
            </p>
          </div>

          <div className="solutions-grid">
            {turnkeySolutions.map((sol) => {
              const IconComp = sol.icon;
              return (
                <div key={sol.id} id={sol.id} className="solution-card glass-card">
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
                      className="btn-card-boq"
                      onClick={() => openQuoteModal(`Quotation for ${sol.title}`)}
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
              <div className="badge-glow">BACKED BY 5+ YEARS IT EXPERIENCE</div>
              <h2 className="section-title">
                The LNK IT Infra <span className="gradient-text">Advantage</span>
              </h2>
            </div>

            <div className="grid-3-col mt-6">
              <div className="advantage-box">
                <Award size={32} className="text-cyan mb-3" />
                <h4>Installation</h4>
                <p>Neat under-desk cable management, rack dressing, patch panel termination, and clearly labeled network ports for every desk.</p>
              </div>

              <div className="advantage-box">
                <Wrench size={32} className="text-emerald mb-3" />
                <h4>Technical Support</h4>
                <p>Prompt remote troubleshooting and on-site technician visits across Pune, Hinjewadi, Kharadi, and PCMC whenever issues occur.</p>
              </div>

              <div className="advantage-box">
                <FileCheck size={32} className="text-purple mb-3" />
                <h4>5+ Years IT Experience</h4>
                <p>Hands-on installation and configuration experience across Cisco, Sophos, Fortinet, HPE Aruba, Dell, and Hikvision systems.</p>
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
