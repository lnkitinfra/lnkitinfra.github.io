import { useState, useEffect } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Layers,
  FileCheck,
  ShieldCheck,
  FileSpreadsheet,
  Laptop,
  Headphones,
  Wrench
} from 'lucide-react';

interface ServicesPageProps {
  navigate: (route: string) => void;
  openQuoteModal: (requirement?: string) => void;
}

export function ServicesPage({ navigate, openQuoteModal }: ServicesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Exact 7 Services requested by user
  const serviceOfferings = [
    {
      id: 'it-infrastructure',
      category: 'Infrastructure Engineering',
      title: 'IT Infrastructure Solutions',
      tagline: 'Complete Turnkey Day-1 Office Setup & Scalable Architecture',
      summary: 'End-to-end planning, hardware sourcing, network cabling, server room deployment, and active directory commissioning for corporate offices, IT parks, and factories in Pune.',
      icon: Layers,
      problemsSolved: [
        'Disorganized vendor coordination across wiring, ISP, firewalls, and hardware suppliers',
        'Project launch delays causing office opening dates to be pushed back',
        'Lack of scalable server room blueprints and future expansion headroom'
      ],
      whatWeDo: [
        'Turnkey office IT layout planning, CAD blueprints, and server rack elevations',
        'Structured Cat6/Cat6A cabling, fiber optic backbone, and floor-to-floor trunks',
        'Day-1 ISP leased line termination, failover testing, and workstation verification'
      ],
      route: 'services/cabling'
    },
    {
      id: 'it-audit',
      category: 'Auditing & Compliance',
      title: 'IT Health Checkup & Auditing',
      tagline: 'Fluke DSX Certifications, Thermal Scans & Cyber Vulnerability Assessments',
      summary: 'Comprehensive on-site technical inspection identifying hidden cable faults, network bottlenecks, thermal hot-spots in server racks, and firewall security vulnerabilities.',
      icon: FileCheck,
      problemsSolved: [
        'Intermittent disconnections and network drops without known root causes',
        'Overheating server racks leading to unexpected hardware crashes and disk failures',
        'Unpatched firewall firmware and unsecured open ports exposed to hackers'
      ],
      whatWeDo: [
        'Fluke DSX CableAnalyzer certification testing on all network RJ45 ports',
        'Server room thermal imaging, UPS battery run-time verification, and power checks',
        'Comprehensive firewall policy audit, open-port scanning, and vulnerability reporting'
      ],
      route: 'services/datacenter'
    },
    {
      id: 'software-licensing',
      category: 'Enterprise Software',
      title: 'Software Licensing',
      tagline: 'Genuine Microsoft 365, Windows Server CALs, Tally Prime & Antivirus',
      summary: 'Authorized procurement, renewal, and license lifecycle management for Microsoft 365 Business, Windows Server CALs, Sophos Endpoint, and Tally Prime multi-user ERP.',
      icon: ShieldCheck,
      problemsSolved: [
        'Using pirated or expired licenses that expose the enterprise to legal penalties and malware',
        'Overpaying for redundant user licenses and mismanaged cloud subscriptions',
        'Lack of technical support when migrating email or activating volume licenses'
      ],
      whatWeDo: [
        'Official Microsoft 365 Business Basic, Standard & Premium procurement and setup',
        'Windows Server 2022/2025 Standard licenses and User/Device Client Access Licenses (CALs)',
        'Tally Prime Gold (Multi-User) server licensing, remote data access, and annual TSS renewals'
      ],
      route: 'services/mail-domain-migration'
    },
    {
      id: 'project-management',
      category: 'Planning & Governance',
      title: 'Project Management Tools',
      tagline: 'IT Setup Scheduling, Office Shift Governance & ISP Coordination',
      summary: 'Structured IT engineering management for office relocations, floor expansions, and network overhauls. We handle timelines, vendor deliverables, and zero-downtime execution.',
      icon: FileSpreadsheet,
      problemsSolved: [
        'Cost overruns and unexpected project timeline delays during office moving',
        'Uncoordinated ISP broadband and leased line handovers stalling business operations',
        'Absence of finalized network topology blueprints and rack elevation documentation'
      ],
      whatWeDo: [
        'Dedicated project manager with Gantt charts, delivery milestones, and daily status reports',
        'Liaison and coordination with ISP telecom providers (Tata, Airtel, Jio) for zero-delay fiber handover',
        'Complete final documentation handover: network topology diagrams, port maps & warranty tracker'
      ],
      route: 'services/cabling'
    },
    {
      id: 'hardware-sales-rentals',
      category: 'Hardware & Workstations',
      title: 'Computer / Laptop Sales & Support',
      tagline: 'Flexible Corporate Laptop Rentals, Commercial Desktops & Standby Spares',
      summary: 'Monthly and annual corporate laptop rentals (Dell Latitude, ThinkPad, MacBook Pro), commercial desktop PCs, IPS monitors, and genuine hardware supply with same-day standby replacement.',
      icon: Laptop,
      problemsSolved: [
        'Huge capital expenditure (CapEx) blocking cash flow when hiring new staff',
        'Employee downtime of 1-2 weeks when employee laptops break down for warranty repair',
        'Slow and outdated dual-core desktops frustrating team productivity'
      ],
      whatWeDo: [
        'Commercial laptop rentals with flexible 1 to 36-month terms and zero capital lockup',
        'Pre-configured laptops with Windows Pro, MS Office, Antivirus, and VPN ready for day-1 work',
        'Free hardware maintenance, battery replacements, and guaranteed same-day standby replacement in Pune'
      ],
      route: 'products'
    },
    {
      id: 'amc',
      category: 'Managed IT Support',
      title: 'Annual Maintenance Contract',
      tagline: 'Proactive Office IT Support with Guaranteed 1-Hour Pune Emergency SLA',
      summary: 'Comprehensive and non-comprehensive Annual Maintenance Contracts for corporate offices across Pune & PCMC. Covers computers, servers, firewalls, switches, printers, and LAN cables.',
      icon: Headphones,
      problemsSolved: [
        'High cost of hiring, training, and retaining an in-house full-time IT admin team',
        'Recurring network outages disrupting billing, accounting, and client communications',
        'Slow vendor response times when critical firewalls or server RAID disks fail'
      ],
      whatWeDo: [
        'Guaranteed 1-hour on-site emergency response SLA across Hinjewadi, Baner, Kharadi, and PCMC',
        'Weekly or monthly scheduled preventive maintenance audits, cable checks, and server cleaning',
        'Unlimited remote support tickets via AnyDesk and dedicated resident engineers for larger offices'
      ],
      route: 'amc'
    },
    {
      id: 'remote-onsite-support',
      category: 'Helpdesk & Engineering',
      title: 'Remote Support & Onsite Support',
      tagline: 'Instant AnyDesk Troubleshooting & Same-Day Field Engineer Dispatch',
      summary: 'Dual-tier IT support providing instantaneous remote assistance for software, email, and VPN issues, backed by prompt field engineers for physical hardware and network troubleshooting.',
      icon: Wrench,
      problemsSolved: [
        'Employees waiting hours for simple email configuration, printer sharing, or VPN fixes',
        'Physical cable cuts, loose switch ports, or fried power supplies that remote teams cannot fix',
        'Work-from-home hybrid employees unable to access office ERP and files securely'
      ],
      whatWeDo: [
        'Instant remote assistance via AnyDesk / TeamViewer for desktop, OS, and application issues',
        'Same-day physical on-site engineer dispatch across Pune and PCMC industrial belts',
        'L1/L2/L3 escalation hierarchy with senior solutions architects on call for complex outages'
      ],
      route: 'services/desktop-support'
    }
  ];

  const categories = [
    { id: 'all', label: `All Services (${serviceOfferings.length})` },
    { id: 'it-infrastructure', label: '1. IT Infrastructure' },
    { id: 'it-audit', label: '2. Health Check & Audit' },
    { id: 'software-licensing', label: '3. Software Licensing' },
    { id: 'project-management', label: '4. Project Management' },
    { id: 'hardware-sales-rentals', label: '5. Laptop Sales & Support' },
    { id: 'amc', label: '6. Annual Maintenance (AMC)' },
    { id: 'remote-onsite-support', label: '7. Remote & Onsite Support' }
  ];

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

  const filtered = selectedCategory === 'all'
    ? serviceOfferings
    : serviceOfferings.filter((s) => s.id === selectedCategory);

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="badge-glow">
            <Layers size={14} className="text-cyan" />
            <span>CORE IT SERVICES SUITE • PUNE & PCMC ONLY</span>
          </div>
          <h1 className="page-hero-title">
            Enterprise IT Services & <span className="gradient-text">Lifecycle Support in Pune</span>
          </h1>
          <p className="page-hero-desc">
            We provide Pune enterprises with complete IT engineering services: from turnkey office infrastructure setup, Fluke health checkups, software licensing, and laptop rentals to 24/7 AMC and rapid onsite support.
          </p>

          <div className="category-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-solutions py-8">
        <div className="container">
          <div className="services-catalog-grid">
            {filtered.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div key={service.id} id={service.id} className="service-catalog-card glass-card">
                  <div className="card-top-row">
                    <div className="solution-icon-box">
                      <IconComp size={26} />
                    </div>
                    <div className="service-number-pill">0{idx + 1}</div>
                  </div>

                  <div className="service-category-tag">{service.category}</div>
                  <h2 className="service-catalog-title">{service.title}</h2>
                  <div className="service-tagline-text">{service.tagline}</div>
                  <p className="service-summary-text">{service.summary}</p>

                  <div className="service-card-section">
                    <h4>Problems We Solve:</h4>
                    <ul className="service-problems-list">
                      {service.problemsSolved.map((prob, pIdx) => (
                        <li key={pIdx}>
                          <span className="bullet-cross">✕</span>
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-card-section">
                    <h4>What We Deliver:</h4>
                    <ul className="service-what-list">
                      {service.whatWeDo.map((what, wIdx) => (
                        <li key={wIdx}>
                          <CheckCircle2 size={16} className="text-cyan shrink-0" />
                          <span>{what}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-card-footer">
                    <button
                      className="btn-primary w-full"
                      onClick={() => {
                        navigate(service.route);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <span>Explore Technical Guide</span>
                      <ArrowRight size={16} />
                    </button>
                    <button
                      className="btn-secondary w-full"
                      onClick={() => openQuoteModal(`Quotation inquiry for ${service.title}`)}
                    >
                      Inquire / Request BoQ Quote
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pune Process Strip */}
      <section className="section-process-strip">
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-glow">DEPENDABLE SLAs</div>
            <h2 className="section-title">
              How We Deliver IT Services Across Pune
            </h2>
          </div>

          <div className="process-steps-row mt-6">
            <div className="process-step-item glass-card">
              <span className="step-num text-cyan">01</span>
              <h4>Free On-Site Inspection</h4>
              <p>Our senior engineer conducts a detailed walkthrough of your office to audit cables, power, and rack space.</p>
            </div>
            <div className="process-step-item glass-card">
              <span className="step-num text-emerald">02</span>
              <h4>Itemized BoQ & Blueprint</h4>
              <p>You receive a transparent Bill of Quantities with genuine brand pricing, architecture diagrams, and fixed timelines.</p>
            </div>
            <div className="process-step-item glass-card">
              <span className="step-num text-purple">03</span>
              <h4>Professional Execution</h4>
              <p>Certified engineers lay conduits, terminate patch panels, configure firewalls, and document every network port.</p>
            </div>
            <div className="process-step-item glass-card">
              <span className="step-num text-amber">04</span>
              <h4>Ongoing Pune AMC Support</h4>
              <p>Emergency 1-hour SLA across Hinjewadi, Baner, Kharadi & PCMC with dedicated standby replacement hardware.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
