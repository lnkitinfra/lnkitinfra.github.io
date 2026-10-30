import { useState, useEffect } from 'react';
import {
  Server,
  Shield,
  ShieldCheck,
  Cpu,
  Network,
  Wifi,
  PhoneCall,
  Video,
  Fingerprint,
  Cloud,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Star,
  MapPin,
  Mail,
  Phone,
  Clock,
  HelpCircle,
  Send,
  X,
  Menu,
  Sliders,
  FileText,
  Zap,
  Check,
  Radio
} from 'lucide-react';
import './App.css';

// Solutions Data (Simple, Clear & Professional)
interface SolutionItem {
  id: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  hardware: string[];
  icon: typeof Server;
  highlight: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    id: 'cabling',
    category: 'Core Infrastructure',
    title: 'Network Cabling & Server Racks',
    tagline: 'Neat, Tangle-Free Office Wiring',
    description: 'We install fast, organized network cables and optical fiber for computers, printers, and phones. All cables are hidden, neatly labeled, and tested for fast, uninterrupted internet.',
    features: [
      'Neat Cat6 and optical fiber cabling labeled at every desk',
      'Clean server racks with tidy patch panels (no loose wires)',
      'Certified testing to guarantee full internet speed',
      'Protective casing so cables stay hidden and safe',
      'Cleanup and reorganization of old, messy server rooms'
    ],
    hardware: ['Schneider Electric', 'Molex', 'CommScope', 'D-Link'],
    icon: Network,
    highlight: 'Neat & Tested Wiring'
  },
  {
    id: 'wifi',
    category: 'Core Infrastructure',
    title: 'Office Wi-Fi Solutions',
    tagline: 'Fast, Reliable Wi-Fi in Every Room',
    description: 'Commercial Wi-Fi designed to handle all your office devices. Walk anywhere in your office without losing connection or having your video calls drop.',
    features: [
      'Connects 100+ laptops and phones without slowing down',
      'No dropped Zoom or Teams calls when moving between rooms',
      'Separate, secure Wi-Fi login for office visitors',
      'Full coverage across all cabins, meeting rooms, and halls',
      'Password protection to keep unauthorized users out'
    ],
    hardware: ['HPE Aruba', 'Sophos AP6', 'Fortinet FortiAP', 'Ubiquiti'],
    icon: Wifi,
    highlight: 'Zero Dead-Zone Wi-Fi'
  },
  {
    id: 'firewall',
    category: 'Cyber Defense',
    title: 'Firewall & Network Security',
    tagline: 'Protect Your Business from Viruses & Hackers',
    description: 'Supply and setup of trusted Sophos, Fortinet, and SonicWall firewalls. Stop cyber threats, protect company data, and keep your office computers running safely.',
    features: [
      'Blocks viruses, ransomware, and cyber threats automatically',
      'Dual internet backup: auto-switches lines if one provider fails',
      'Secure remote VPN for staff working safely from home',
      'Filter unwanted websites to keep staff focused and productive',
      'Instant alerts if any suspicious activity is detected'
    ],
    hardware: ['Sophos XGS Series', 'Fortinet FortiGate', 'SonicWall TZ', 'Cisco'],
    icon: ShieldCheck,
    highlight: 'Active Cyber Defense'
  },
  {
    id: 'datacenter',
    category: 'Core Infrastructure',
    title: 'Server Rooms & Power Backup',
    tagline: 'Safe, Continuous Operation for Your Business',
    description: 'Complete setup of your office server room. We install lockable server racks, battery power backups (UPS), cooling, and central storage so your business software never shuts down.',
    features: [
      'Lockable server racks to keep expensive equipment safe',
      'Battery power backup (UPS) to prevent sudden power cuts',
      'Central network storage (NAS) to securely share company files',
      'Setup of accounting software (Tally), ERP, and databases',
      'Temperature monitoring to prevent equipment from overheating'
    ],
    hardware: ['Dell PowerEdge', 'HPE ProLiant', 'APC Schneider', 'QNAP Storage'],
    icon: Server,
    highlight: '24/7 Continuous Uptime'
  },
  {
    id: 'networking',
    category: 'Core Infrastructure',
    title: 'Network Switches & Routers',
    tagline: 'Fast, Stable Connections to Every Desk',
    description: 'High-speed network switches from HPE Aruba and Cisco that link all office computers, printers, intercom phones, and cameras together without lag.',
    features: [
      'Full gigabit speed delivered directly to every desk',
      'Powers security cameras and phones through the cable (PoE)',
      'Smooth Zoom and Teams calls with zero lag or stutter',
      'Separate networks for staff, guests, and accounts teams',
      'Reliable hardware that runs continuously without reboots'
    ],
    hardware: ['HPE Aruba Instant On', 'Cisco Catalyst', 'D-Link Managed Switches'],
    icon: Cpu,
    highlight: 'High-Speed Networking'
  },
  {
    id: 'cctv',
    category: 'Smart Surveillance',
    title: 'CCTV Security Cameras',
    tagline: 'Watch Live Video on Your Mobile Phone',
    description: 'High-definition security camera systems from Hikvision and CP Plus. View live video and past recordings of your office, reception, and warehouse directly from your smartphone.',
    features: [
      'Clear HD and 4K cameras with sharp day and night vision',
      'Watch live camera feeds on your mobile phone from anywhere',
      'Instant motion alerts sent to your phone after office hours',
      'Stores 30 to 90 days of continuous video recordings',
      'Weatherproof cameras for indoor offices, gates, and outdoor areas'
    ],
    hardware: ['Hikvision Pro', 'CP Plus', 'Dahua Technology', 'Honeywell'],
    icon: Video,
    highlight: 'Mobile Live View'
  },
  {
    id: 'biometrics',
    category: 'Smart Surveillance',
    title: 'Biometric Attendance & Door Access',
    tagline: 'Accurate Staff Attendance & Secure Entry',
    description: 'Touchless face recognition and fingerprint attendance machines connected to automatic glass door locks and video door phones for your office entrance.',
    features: [
      'Fast face and fingerprint scan in under one second',
      'Automatic daily attendance reports ready for HR payroll',
      'Smart door locks that unlock only for authorized staff',
      'Emergency exit button and auto-unlock during fire alarms',
      'Two-way video door phone to see and speak with office visitors'
    ],
    hardware: ['eSSL Security', 'ZKTeco', 'Hikvision Access Control', 'Realtime'],
    icon: Fingerprint,
    highlight: 'Automated Attendance'
  },
  {
    id: 'epabx',
    category: 'Voice & Telecom',
    title: 'Office Phone Systems (EPABX)',
    tagline: 'Clear Calling Between Desks & Clients',
    description: 'Easy-to-use office intercom and telephone systems from Syntel and NEC. Make quick calls to colleagues across desks and transfer customer calls smoothly.',
    features: [
      'Direct intercom dialing between 6 to 200+ employee desks',
      'Professional welcome greeting (Press 1 for Sales, 2 for Support)',
      'Forward incoming office calls directly to mobile phones',
      'Works with standard landlines and internet phone lines (VoIP)',
      'Optional call recording for customer service quality'
    ],
    hardware: ['Syntel NEO DX Series', 'NEC SL2100', 'Panasonic', 'Grandstream'],
    icon: PhoneCall,
    highlight: 'Easy Office Calling'
  },
  {
    id: 'ill-mpls',
    category: 'Voice & Telecom',
    title: 'Dedicated Internet (Leased Line)',
    tagline: 'Guaranteed 100% Symmetrical Internet Speed',
    description: 'Dedicated enterprise internet lines with equal upload and download speeds, backed by a 99.9% uptime guarantee from top telecom providers like Airtel, Tata, and Jio.',
    features: [
      'Dedicated 1:1 line never shared with other buildings or users',
      'Equal upload and download speeds for fast file transfers',
      '99.9% uptime guarantee with priority customer support',
      'Securely links multiple branch offices and warehouses together',
      'Continuous line monitoring to fix issues before you notice'
    ],
    hardware: ['Tata Teleservices', 'Airtel Business', 'Vodafone Idea', 'Jio Enterprise'],
    icon: Radio,
    highlight: '99.9% Uptime Guarantee'
  },
  {
    id: 'cloud-backup',
    category: 'Cloud & Data',
    title: 'Automatic Data Backup & Cloud Setup',
    tagline: 'Never Lose Your Important Business Files',
    description: 'Automatic daily data backups and official Microsoft 365 email setup. Keep your accounting files (Tally), customer databases, and emails safe from crashes and ransomware.',
    features: [
      'Automated daily backup of Tally, accounting files, and documents',
      'Safe backup copies that cannot be deleted or infected by viruses',
      'Microsoft 365 business email setup (yourname@yourcompany.com)',
      'Quick file recovery in minutes if any computer breaks down',
      'Secure access to company files from anywhere on any device'
    ],
    hardware: ['Veeam Backup', 'Acronis Cyber Protect', 'Microsoft 365', 'Amazon Web Services'],
    icon: Cloud,
    highlight: 'Safe File Protection'
  }
];

// Hardware Showcase Data (Simple & Understandable Specs)
interface ProductModel {
  name: string;
  brand: string;
  category: string;
  specs: string[];
  bestFor: string;
  inStock: boolean;
}

const HARDWARE_SHOWCASE: Record<string, ProductModel[]> = {
  firewalls: [
    {
      name: 'Sophos XGS 116 / 126',
      brand: 'Sophos',
      category: 'Office Firewall',
      specs: [
        'Recommended for 20 to 120 employees',
        'Blocks viruses, malware & harmful websites',
        'Built-in secure VPN for work-from-home staff',
        'Connects 2 internet lines with automatic switch'
      ],
      bestFor: 'Small to medium business offices',
      inStock: true
    },
    {
      name: 'Sophos XGS 2100',
      brand: 'Sophos',
      category: 'Enterprise Firewall',
      specs: [
        'Recommended for 150 to 600 employees',
        'High-speed internet filtering with zero slowdowns',
        'Dual power supply for backup safety',
        'Detailed cyber security reports and instant alerts'
      ],
      bestFor: 'Head offices and multi-floor corporate buildings',
      inStock: true
    },
    {
      name: 'Fortinet FortiGate FG-60F / 80F',
      brand: 'Fortinet',
      category: 'Office Firewall',
      specs: [
        'Fast and smooth internet filtering',
        'Dual internet backup built-in',
        'Stops unauthorized external access and hacking',
        'Simple, easy-to-use management screen'
      ],
      bestFor: 'Growing companies and regional branch offices',
      inStock: true
    },
    {
      name: 'SonicWall TZ470',
      brand: 'SonicWall',
      category: 'Office Firewall',
      specs: [
        'Real-time virus and threat protection',
        'Fast multi-gigabit network ports',
        'Safe encrypted internet connections',
        'Simple remote office monitoring'
      ],
      bestFor: 'Modern corporate offices & technology teams',
      inStock: true
    }
  ],
  switches: [
    {
      name: 'Aruba Instant On 1930 (24-Port)',
      brand: 'HPE Aruba',
      category: 'Network Switch',
      specs: [
        '24 Gigabit ports for office computers and printers',
        'Powers cameras and desk phones through the cable (PoE)',
        'High-speed fiber ports for server connections',
        'Manage easily from mobile app or web'
      ],
      bestFor: 'Standard office floors and conference rooms',
      inStock: true
    },
    {
      name: 'Aruba Instant On 1960 (48-Port)',
      brand: 'HPE Aruba',
      category: 'High-Capacity Switch',
      specs: [
        '48 Gigabit ports for large office setups',
        'Strong power delivery for all cameras & phones',
        'Stack multiple switches together easily',
        'Built for continuous heavy business usage'
      ],
      bestFor: 'Large office floors and high-density computer teams',
      inStock: true
    },
    {
      name: 'Cisco Catalyst 1000 Series',
      brand: 'Cisco',
      category: 'Enterprise Switch',
      specs: [
        'World-famous Cisco enterprise reliability',
        'Runs non-stop without needing reboots or restarts',
        'Strict network security and access controls',
        'Long hardware lifespan with manufacturer support'
      ],
      bestFor: 'Banks, corporate offices & mission-critical setups',
      inStock: true
    }
  ],
  wireless: [
    {
      name: 'Aruba Instant On AP22 (Wi-Fi 6)',
      brand: 'HPE Aruba',
      category: 'Office Wi-Fi Access Point',
      specs: [
        'Modern Wi-Fi 6 for super-fast internet',
        'Supports 75+ connected devices smoothly',
        'Walk anywhere in the office without losing signal',
        'Clean, neat ceiling or wall mount design'
      ],
      bestFor: 'Offices, meeting rooms, clinics & studios',
      inStock: true
    },
    {
      name: 'Aruba AP505 Enterprise AP',
      brand: 'HPE Aruba',
      category: 'High-Density Wi-Fi',
      specs: [
        'Engineered for crowded office spaces',
        'Smart signal adjustment to prevent interference',
        'Handles heavy video call traffic with zero lag',
        'Wide coverage area across open floor plans'
      ],
      bestFor: 'Tech companies, co-working spaces & large teams',
      inStock: true
    },
    {
      name: 'Sophos AP6 420',
      brand: 'Sophos',
      category: 'Secure Wi-Fi Access Point',
      specs: [
        'Fast Wi-Fi 6 wireless connectivity',
        'Connects seamlessly with Sophos firewalls',
        'Easy remote management from the cloud',
        'Automatic security and firmware updates'
      ],
      bestFor: 'Companies using Sophos firewalls for all-in-one setup',
      inStock: true
    }
  ],
  telephony: [
    {
      name: 'Syntel NEO DX 206 / 308',
      brand: 'Syntel',
      category: 'Small Office Intercom (EPABX)',
      specs: [
        '2 to 3 external telephone lines',
        '6 to 8 desk extension phones',
        'Caller ID display on all phones',
        'Automatic welcome greeting message'
      ],
      bestFor: 'Small offices, clinics & consulting desks',
      inStock: true
    },
    {
      name: 'Syntel NEO DX 312 / 416',
      brand: 'Syntel',
      category: 'Expandable Office Intercom',
      specs: [
        'Up to 4 telephone lines and 16 desk extensions',
        'Multi-level voice menu (Press 1 for Sales, 2 for Support)',
        '3-party phone conference calling',
        'Forward incoming office calls to mobile phones'
      ],
      bestFor: 'Medium-sized offices and growing business teams',
      inStock: true
    },
    {
      name: 'NEC SL2100 Smart PBX',
      brand: 'NEC',
      category: 'Hybrid Telephone System',
      specs: [
        'Scalable from 8 to 120+ desk extensions',
        'Supports modern internet phone lines (VoIP)',
        'Built-in call recording capability',
        'Conference call bridge for team meetings'
      ],
      bestFor: 'Corporate companies, call centers & multi-floor offices',
      inStock: true
    }
  ]
};

// Case Studies (Simple, Practical Results)
const CASE_STUDIES = [
  {
    client: 'Financial Services Firm (Mumbai BKC)',
    industry: 'Finance & Consulting',
    challenge: 'Frequent internet disconnects and tangled server cables caused delays during client calls and financial tasks.',
    solution: 'Installed neat Cat6A cabling, dual-internet backup, and a Sophos security firewall.',
    result: '100% stable internet with zero downtime for over a year, crystal-clear video calls, and safe financial data.'
  },
  {
    client: 'Automotive Parts Manufacturing Plant (Pune)',
    industry: 'Industrial & Manufacturing',
    challenge: 'A 15-acre factory had Wi-Fi dead zones, broken cables from forklifts, and blind spots around storage sheds.',
    solution: 'Laid protected fiber optic cables, installed 120 HD CCTV cameras, and added rugged outdoor Wi-Fi.',
    result: 'Complete camera visibility on mobile phones, zero broken cables, and smooth barcode scanning everywhere.'
  },
  {
    client: 'Software & Technology Office (Bengaluru)',
    industry: 'IT & Software',
    challenge: '400 software engineers faced slow downloads and frequent Wi-Fi drops during video meetings.',
    solution: 'Installed high-capacity Aruba network switches, Wi-Fi 6 access points, and a dedicated 500Mbps leased line.',
    result: 'Zero Wi-Fi dropouts, fast file downloads, and smooth Zoom conferences for all staff.'
  }
];

export function App() {
  const [activeNav, setActiveNav] = useState<string>('home');
  const [selectedSolutionCategory, setSelectedSolutionCategory] = useState<string>('all');
  const [activeHardwareTab, setActiveHardwareTab] = useState<'firewalls' | 'switches' | 'wireless' | 'telephony'>('firewalls');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [heroImageIdx, setHeroImageIdx] = useState<number>(0);

  // Estimator State
  const [officeUsers, setOfficeUsers] = useState<number>(50);
  const [branchCount, setBranchCount] = useState<number>(1);
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

  // Quote Form State
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    city: 'Mumbai',
    requirements: 'Need quotation for office network setup and firewall security',
    submitted: false
  });

  // Hero carousel images
  const heroImages = [
    {
      src: '/images/datacenter.jpg',
      label: 'Server Rooms',
      title: 'Neat Server Rooms & Clean Network Cabling',
      desc: 'Organized server racks, optical fiber, and professional cabling for offices and factories.'
    },
    {
      src: '/images/noc.jpg',
      label: 'Cyber Defense',
      title: '24/7 Network Monitoring & Cyber Protection',
      desc: 'Proactive support that stops network crashes, virus attacks, and slow internet before they affect your work.'
    },
    {
      src: '/images/access_control.jpg',
      label: 'CCTV & Access',
      title: 'Touchless Attendance & Clear CCTV Security',
      desc: 'Smart facial recognition door locks and crystal-clear security cameras viewable on your mobile phone.'
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

  // Estimator Calculations
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

  const filteredSolutions = selectedSolutionCategory === 'all'
    ? SOLUTIONS
    : SOLUTIONS.filter((s) => s.category === selectedSolutionCategory);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteForm((prev) => ({ ...prev, submitted: true }));
  };

  const openWhatsApp = (customMsg?: string) => {
    const text = customMsg || encodeURIComponent(
      `Hello LNK IT Infra! I would like to inquire about office IT infrastructure and network setup for our company (${officeUsers} employees, ${branchCount} office location).`
    );
    window.open(`https://wa.me/919820011223?text=${text}`, '_blank');
  };

  return (
    <div className="site-wrapper">
      {/* 1. TOP ANNOUNCEMENT & CONTACT BAR */}
      <div className="top-banner">
        <div className="container top-banner-inner">
          <div className="top-banner-left">
            <span className="live-status-pill">
              <span className="pulse-dot"></span>
              All Systems Operational • 99.9% Uptime Support
            </span>
            <span className="separator">|</span>
            <span className="cert-text">Certified IT Hardware & Installation Specialists</span>
          </div>
          <div className="top-banner-right">
            <a href="tel:+919820011223" className="top-link">
              <Phone size={13} />
              <span>Support Desk: +91 98200 11223</span>
            </a>
            <span className="separator">|</span>
            <a href="mailto:contact@lnkitinfra.com" className="top-link">
              <Mail size={13} />
              <span>contact@lnkitinfra.com</span>
            </a>
            <span className="separator">|</span>
            <span className="location-tag">
              <MapPin size={13} /> Mumbai • Pune • Bengaluru • Delhi NCR
            </span>
          </div>
        </div>
      </div>

      {/* 2. STICKY MAIN NAVIGATION */}
      <header className="main-header">
        <div className="container header-container">
          <a href="#home" className="logo-group" onClick={() => setActiveNav('home')}>
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
            <a
              href="#solutions"
              className={activeNav === 'solutions' ? 'active' : ''}
              onClick={() => setActiveNav('solutions')}
            >
              Services & Solutions
            </a>
            <a
              href="#hardware"
              className={activeNav === 'hardware' ? 'active' : ''}
              onClick={() => setActiveNav('hardware')}
            >
              Hardware & Products
            </a>
            <a
              href="#estimator"
              className={activeNav === 'estimator' ? 'active' : ''}
              onClick={() => setActiveNav('estimator')}
            >
              Cost Estimator
            </a>
            <a
              href="#audit"
              className={activeNav === 'audit' ? 'active' : ''}
              onClick={() => setActiveNav('audit')}
            >
              Free Health Check
            </a>
            <a
              href="#case-studies"
              className={activeNav === 'case-studies' ? 'active' : ''}
              onClick={() => setActiveNav('case-studies')}
            >
              Client Results
            </a>
            <a
              href="#locations"
              className={activeNav === 'locations' ? 'active' : ''}
              onClick={() => setActiveNav('locations')}
            >
              Our Offices
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="header-actions">
            <button
              className="btn-whatsapp-header"
              onClick={() => openWhatsApp()}
              title="Chat on WhatsApp"
            >
              <PhoneCall size={16} />
              <span>WhatsApp Chat</span>
            </button>
            <button
              className="btn-primary"
              onClick={() => setIsQuoteModalOpen(true)}
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
            <a href="#solutions" onClick={() => setMobileMenuOpen(false)}>Services & Solutions</a>
            <a href="#hardware" onClick={() => setMobileMenuOpen(false)}>Hardware & Products</a>
            <a href="#estimator" onClick={() => setMobileMenuOpen(false)}>Cost Estimator</a>
            <a href="#audit" onClick={() => setMobileMenuOpen(false)}>Free Health Check</a>
            <a href="#case-studies" onClick={() => setMobileMenuOpen(false)}>Client Results</a>
            <a href="#locations" onClick={() => setMobileMenuOpen(false)}>Technology Centers</a>
            <button
              className="btn-primary w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsQuoteModalOpen(true);
              }}
            >
              Get Free Quote
            </button>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (Simple, Direct & Professional) */}
      <section id="home" className="hero-section">
        <div className="hero-grid-lines"></div>

        <div className="container hero-content-grid">
          <div className="hero-copy">
            <div className="badge-glow">
              <Zap size={14} className="text-cyan" />
              <span>OFFICE IT INFRASTRUCTURE & NETWORK SOLUTIONS</span>
            </div>

            <h1 className="hero-headline">
              Reliable <span className="gradient-text">Office Networks</span>, Cyber Security & <span className="gradient-text-alt">IT Infrastructure</span>.
            </h1>

            <p className="hero-subhead">
              We design, install, and support office networks, commercial Wi-Fi, firewalls, and security cameras across India. Simple, dependable, and hassle-free IT for your business.
            </p>

            <div className="hero-ctas">
              <a href="#solutions" className="btn-primary hero-btn">
                <span>View Our Services</span>
                <ArrowRight size={18} />
              </a>
              <a href="#estimator" className="btn-secondary hero-btn">
                <Sliders size={18} />
                <span>Estimate Setup Cost</span>
              </a>
            </div>

            {/* Live Trust Metrics row */}
            <div className="hero-metric-strip">
              <div className="hero-metric-item">
                <div className="metric-val">650+</div>
                <div className="metric-lbl">Offices & Facilities Set Up</div>
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
                <div className="metric-lbl">Quick Support Dispatch</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Interactive Carousel Preview */}
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

      {/* 4. PARTNER BRANDS STRIP */}
      <section className="partners-strip">
        <div className="container">
          <div className="partners-title">
            AUTHORIZED SYSTEM INTEGRATION & HARDWARE PARTNERS
          </div>
          <div className="partners-row">
            <div className="partner-chip">
              <span className="partner-name">SOPHOS</span>
              <span className="partner-level">Security Partner</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">FORTINET</span>
              <span className="partner-level">Network Security</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">HPE ARUBA</span>
              <span className="partner-level">Office Switches & Wi-Fi</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">SONICWALL</span>
              <span className="partner-level">Firewall Appliances</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">SYNTEL & NEC</span>
              <span className="partner-level">Intercom & EPABX Phones</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">HIKVISION</span>
              <span className="partner-level">Security Cameras & CCTV</span>
            </div>
            <div className="partner-chip">
              <span className="partner-name">VEEAM</span>
              <span className="partner-level">Data Backup & Recovery</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOLUTIONS SECTION (Simple & Clear Business Services) */}
      <section id="solutions" className="section-solutions">
        <div className="container">
          <div className="section-header">
            <div className="badge-glow">WHAT WE DO</div>
            <h2 className="section-title">
              Complete <span className="gradient-text">IT Solutions</span> for Growing Businesses
            </h2>
            <p className="section-desc">
              Whether setting up a new office, upgrading an old network, or securing your data, our team handles the entire process from planning and hardware supply to wiring and ongoing support.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="solution-filter-tabs">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'Core Infrastructure', label: 'Cabling, Wi-Fi & Servers' },
              { id: 'Cyber Defense', label: 'Firewalls & Cyber Security' },
              { id: 'Voice & Telecom', label: 'Intercom, EPABX & Internet' },
              { id: 'Smart Surveillance', label: 'CCTV & Biometric Attendance' },
              { id: 'Cloud & Data', label: 'Data Backup & Cloud' }
            ].map((tab) => (
              <button
                key={tab.id}
                className={`filter-pill ${selectedSolutionCategory === tab.id ? 'active' : ''}`}
                onClick={() => setSelectedSolutionCategory(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Solutions Cards Grid */}
          <div className="solutions-grid">
            {filteredSolutions.map((sol) => {
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
                  <p className="solution-card-desc">{sol.description}</p>

                  <div className="solution-features-list">
                    {sol.features.map((feat, fIdx) => (
                      <div key={fIdx} className="feature-item">
                        <CheckCircle2 size={16} className="feature-check" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="card-bottom-meta">
                    <div className="hardware-tags">
                      <span className="hw-label">Trusted Brands Used:</span>
                      <div className="hw-chips">
                        {sol.hardware.map((hw, hIdx) => (
                          <span key={hIdx} className="hw-chip">{hw}</span>
                        ))}
                      </div>
                    </div>
                    <button
                      className="btn-card-action"
                      onClick={() => {
                        setQuoteForm((prev) => ({
                          ...prev,
                          requirements: `I would like to inquire about ${sol.title}`
                        }));
                        setIsQuoteModalOpen(true);
                      }}
                    >
                      <span>Inquire Now</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. HARDWARE & PRODUCT SHOWCASE (Plain English Specs) */}
      <section id="hardware" className="section-hardware">
        <div className="container">
          <div className="section-header">
            <div className="badge-glow">GENUINE PRODUCTS & EQUIPMENT</div>
            <h2 className="section-title">
              Trusted Enterprise <span className="gradient-text">Hardware & Models</span>
            </h2>
            <p className="section-desc">
              We supply genuine hardware directly from leading brands with official manufacturer warranties, professional installation, and local maintenance support.
            </p>
          </div>

          {/* Hardware Selector Tabs */}
          <div className="hardware-tabs-bar">
            {[
              { id: 'firewalls', label: 'Security Firewalls', count: 'Sophos • Fortinet • SonicWall' },
              { id: 'switches', label: 'Network Switches', count: 'Aruba • Cisco • D-Link' },
              { id: 'wireless', label: 'Office Wi-Fi', count: 'Aruba AP22 • Sophos AP6' },
              { id: 'telephony', label: 'Intercom & Phones', count: 'Syntel NEO DX • NEC SL2100' }
            ].map((tab) => (
              <button
                key={tab.id}
                className={`hw-tab-btn ${activeHardwareTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveHardwareTab(tab.id as any)}
              >
                <div className="hw-tab-title">{tab.label}</div>
                <div className="hw-tab-sub">{tab.count}</div>
              </button>
            ))}
          </div>

          {/* Hardware Products Display */}
          <div className="hardware-cards-grid">
            {HARDWARE_SHOWCASE[activeHardwareTab].map((product, idx) => (
              <div key={idx} className="hw-card glass-card">
                <div className="hw-card-header">
                  <div>
                    <span className="hw-brand-badge">{product.brand}</span>
                    <h3 className="hw-model-name">{product.name}</h3>
                  </div>
                  {product.inStock && (
                    <span className="stock-badge">
                      <Check size={12} /> In Stock
                    </span>
                  )}
                </div>

                <div className="hw-category-label">{product.category}</div>

                <div className="hw-specs-block">
                  <div className="hw-specs-heading">Key Features:</div>
                  <ul className="hw-specs-list">
                    {product.specs.map((sp, sIdx) => (
                      <li key={sIdx}>
                        <ChevronRight size={14} className="text-cyan" />
                        <span>{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="hw-best-for">
                  <strong>Recommended For:</strong>
                  <p>{product.bestFor}</p>
                </div>

                <div className="hw-card-footer">
                  <button
                    className="btn-primary w-full"
                    onClick={() => {
                      setQuoteForm((prev) => ({
                        ...prev,
                        requirements: `Pricing inquiry for model: ${product.name} (${product.brand})`
                      }));
                      setIsQuoteModalOpen(true);
                    }}
                  >
                    Get Pricing & Availability
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EASY COST ESTIMATOR */}
      <section id="estimator" className="section-estimator">
        <div className="container">
          <div className="estimator-wrapper glass-card">
            <div className="estimator-header">
              <div className="badge-glow">INSTANT ESTIMATE</div>
              <h2 className="section-title">
                Estimate Your <span className="gradient-text">Office IT Setup Cost</span>
              </h2>
              <p className="section-desc">
                Select your team size and the equipment you need to see an estimated budget and recommended hardware for your office setup.
              </p>
            </div>

            <div className="estimator-body-grid">
              {/* Controls Column */}
              <div className="estimator-controls">
                {/* Office Users Slider */}
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
                    <span>50 (Medium Team)</span>
                    <span>150 (Large Office)</span>
                    <span>500+ (Corporate)</span>
                  </div>
                </div>

                {/* Branches Slider */}
                <div className="control-group">
                  <div className="control-label-row">
                    <label>Number of Office Locations:</label>
                    <span className="control-val">{branchCount} {branchCount === 1 ? 'Office' : 'Offices'}</span>
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
                    <span>1 (Single Building)</span>
                    <span>3 to 5 (Regional Branches)</span>
                    <span>10 (Pan-India)</span>
                  </div>
                </div>

                {/* Required Modules Toggle */}
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
                      setQuoteForm((prev) => ({
                        ...prev,
                        requirements: `Estimate for ${officeUsers} users in ${branchCount} location(s). Needed: ${selectedServices.join(', ')}. Est Budget: ₹${calculateEstimatedBudget().toLocaleString('en-IN')}`
                      }));
                      setIsQuoteModalOpen(true);
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
                    Send to WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SIMPLE IT HEALTH CHECKUP */}
      <section id="audit" className="section-audit">
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
              {/* Question 1 */}
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

              {/* Question 2 */}
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

              {/* Question 3 */}
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

              {/* Question 4 */}
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
                    setQuoteForm((prev) => ({
                      ...prev,
                      requirements: `Requesting Free Onsite IT Health Checkup (Health Score: ${calculateHealthScore()}/100)`
                    }));
                    setIsQuoteModalOpen(true);
                  }}
                >
                  Book Free On-Site Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ANNUAL MAINTENANCE CONTRACTS (AMC) */}
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
                  setQuoteForm((prev) => ({ ...prev, requirements: 'Inquiry for Basic IT Support AMC' }));
                  setIsQuoteModalOpen(true);
                }}
              >
                Inquire Basic Plan
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
                onClick={() => {
                  setQuoteForm((prev) => ({ ...prev, requirements: 'Inquiry for Comprehensive AMC Plan' }));
                  setIsQuoteModalOpen(true);
                }}
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
                  setQuoteForm((prev) => ({ ...prev, requirements: 'Inquiry for Resident IT Engineer AMC' }));
                  setIsQuoteModalOpen(true);
                }}
              >
                Inquire Resident Engineer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. REAL CLIENT RESULTS */}
      <section id="case-studies" className="section-cases">
        <div className="container">
          <div className="section-header">
            <div className="badge-glow">PROVEN RESULTS</div>
            <h2 className="section-title">
              Real Work for <span className="gradient-text">Real Indian Businesses</span>
            </h2>
            <p className="section-desc">
              Here is how we solved common IT headaches for corporate offices, warehouses, and software teams across India.
            </p>
          </div>

          <div className="cases-grid">
            {CASE_STUDIES.map((cs, cIdx) => (
              <div key={cIdx} className="case-card glass-card">
                <div className="case-header">
                  <div className="industry-pill">{cs.industry}</div>
                  <h3 className="client-name">{cs.client}</h3>
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
                    <span className="case-label text-emerald">The Result:</span>
                    <p className="case-desc">{cs.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Quote strip */}
          <div className="testimonial-banner glass-card">
            <div className="testi-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
              <span className="rating-score">4.9 / 5.0 Rating Across 180+ Business Reviews</span>
            </div>
            <blockquote className="testi-quote">
              “LNK IT Infra re-cabled our entire office server room and set up strong Wi-Fi across 4 floors in Mumbai BKC. Their team worked over the weekend so our staff came in Monday morning to a clean, fast network with zero work disruption. Their firewall has kept our company safe from all threats.”
            </blockquote>
            <div className="testi-author">
              <strong>Kavita Iyer</strong> — Head of Operations, Omniverse Cloud Technologies (Mumbai & Bengaluru)
            </div>
          </div>
        </div>
      </section>

      {/* 11. REGIONAL LOCATIONS */}
      <section id="locations" className="section-locations">
        <div className="container">
          <div className="section-header">
            <div className="badge-glow">LOCAL PRESENCE</div>
            <h2 className="section-title">
              Our Offices Across <span className="gradient-text">India</span>
            </h2>
            <p className="section-desc">
              With engineers located across major business centers, we arrive at your office quickly for urgent hardware dispatch, cable testing, or repairs.
            </p>
          </div>

          <div className="locations-grid">
            <div className="loc-card glass-card">
              <div className="loc-badge">MUMBAI HEAD OFFICE</div>
              <h3 className="loc-title">Mumbai (Bandra Kurla Complex)</h3>
              <div className="loc-address">
                <MapPin size={18} className="loc-pin" />
                <span>
                  Level 11, Platina Tech Tower, G-Block, Bandra Kurla Complex (BKC), Mumbai, Maharashtra — 400051
                </span>
              </div>
              <div className="loc-phone">
                <Phone size={16} /> +91 98200 11223 / +91 22 6900 4400
              </div>
              <div className="loc-status">
                <span className="pulse-dot"></span> Central Support Desk & Spares Inventory
              </div>
            </div>

            <div className="loc-card glass-card">
              <div className="loc-badge">PUNE REGIONAL OFFICE</div>
              <h3 className="loc-title">Pune (Magarpatta City)</h3>
              <div className="loc-address">
                <MapPin size={18} className="loc-pin" />
                <span>
                  Tower 4, Level 5, Cybercity IT Park, Magarpatta City, Pune, Maharashtra — 411028
                </span>
              </div>
              <div className="loc-phone">
                <Phone size={16} /> +91 98200 11223 / +91 20 6790 3300
              </div>
              <div className="loc-status">
                <span className="pulse-dot"></span> Serving Hinjawadi, Magarpatta, Kharadi & Bhosari
              </div>
            </div>

            <div className="loc-card glass-card">
              <div className="loc-badge">BENGALURU TECH CENTER</div>
              <h3 className="loc-title">Bengaluru (Outer Ring Road)</h3>
              <div className="loc-address">
                <MapPin size={18} className="loc-pin" />
                <span>
                  EcoSpace Business Park, Campus 2B, Outer Ring Road, Bellandur, Bengaluru, Karnataka — 560103
                </span>
              </div>
              <div className="loc-phone">
                <Phone size={16} /> +91 98200 11223 / +91 80 4430 8800
              </div>
              <div className="loc-status">
                <span className="pulse-dot"></span> Serving Electronic City, Whitefield & ORR Corridor
              </div>
            </div>

            <div className="loc-card glass-card">
              <div className="loc-badge">DELHI NCR REGIONAL HUB</div>
              <h3 className="loc-title">Delhi NCR (Gurugram)</h3>
              <div className="loc-address">
                <MapPin size={18} className="loc-pin" />
                <span>
                  Building 9B, Level 6, DLF Cyber City, Phase 3, Gurugram, Haryana — 122002
                </span>
              </div>
              <div className="loc-phone">
                <Phone size={16} /> +91 98200 11223 / +91 124 4560 900
              </div>
              <div className="loc-status">
                <span className="pulse-dot"></span> Serving Delhi, Gurugram, Noida & Faridabad
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ SECTION */}
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
                q: 'Which firewall is right for our office size?',
                a: 'It depends on your employee count and internet speed. For offices with 20 to 80 users, the Sophos XGS 116 or Fortinet 60F is typically the most reliable and cost-effective choice. For larger teams (100+ users), we recommend higher models like the Sophos XGS 126 or Fortinet 80F. We assess your exact needs before recommending any device.'
              },
              {
                q: 'How fast do your engineers arrive if we have an emergency?',
                a: 'Under our Comprehensive AMC, our remote team connects within 15 minutes to diagnose the issue. If an engineer is needed in person at your office in Mumbai, Pune, Bengaluru, or Delhi NCR, our local technician arrives within 1 hour with spare replacement parts.'
              },
              {
                q: 'Can you fix and organize our old, messy server rack cables?',
                a: 'Yes, this is one of our most popular services. We trace, test, and neatly comb every cable, install proper patch panels, remove dead wires, and clearly label every line with color-coded cables so your server room looks clean and professional.'
              },
              {
                q: 'Do you help with genuine Microsoft Office & email licenses?',
                a: 'Yes, we provide official Microsoft 365 business email licenses, setup Outlook for your domain (yourname@yourcompany.com), migrate your old emails safely, and set up two-factor security for your staff.'
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

      {/* 13. BOTTOM CALL-TO-ACTION BANNER */}
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
                  onClick={() => setIsQuoteModalOpen(true)}
                >
                  <FileText size={18} />
                  <span>Book Free On-Site Survey</span>
                </button>
                <button
                  className="btn-whatsapp"
                  onClick={() => openWhatsApp()}
                >
                  <PhoneCall size={18} />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. COMPREHENSIVE FOOTER */}
      <footer className="main-footer">
        <div className="container footer-grid">
          <div className="footer-col brand-col">
            <div className="logo-group mb-3">
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
            </div>
            <p className="footer-about">
              LNK IT Infra provides end-to-end IT infrastructure services across India, including structured network cabling, commercial Wi-Fi, firewalls, EPABX intercoms, CCTV security, and comprehensive annual maintenance (AMC).
            </p>
            <div className="footer-contacts">
              <div className="fc-item">
                <Phone size={14} className="text-cyan" />
                <span>+91 98200 11223 / +91 22 6900 4400</span>
              </div>
              <div className="fc-item">
                <Mail size={14} className="text-cyan" />
                <span>contact@lnkitinfra.com</span>
              </div>
              <div className="fc-item">
                <Clock size={14} className="text-cyan" />
                <span>Support Hours: Monday - Saturday, 9am - 8pm (24/7 for AMC)</span>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#solutions">Network Cabling & Fiber</a></li>
              <li><a href="#solutions">Commercial Office Wi-Fi</a></li>
              <li><a href="#solutions">Firewalls & Cyber Security</a></li>
              <li><a href="#solutions">Office Switches & Routers</a></li>
              <li><a href="#solutions">CCTV Security Cameras</a></li>
              <li><a href="#solutions">Biometrics & Attendance</a></li>
              <li><a href="#solutions">Office Phone Systems (EPABX)</a></li>
              <li><a href="#solutions">Automatic Data Backup</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Hardware Brands</h4>
            <ul className="footer-links">
              <li><a href="#hardware">Sophos Firewalls & Wi-Fi</a></li>
              <li><a href="#hardware">Fortinet FortiGate Firewalls</a></li>
              <li><a href="#hardware">HPE Aruba Switches & APs</a></li>
              <li><a href="#hardware">SonicWall Security</a></li>
              <li><a href="#hardware">Syntel Office Intercoms</a></li>
              <li><a href="#hardware">NEC Smart PBX Systems</a></li>
              <li><a href="#hardware">Hikvision Security Cameras</a></li>
              <li><a href="#hardware">Microsoft 365 Cloud Setup</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Service Hubs</h4>
            <ul className="footer-links">
              <li><a href="#locations">Mumbai BKC (Head Office)</a></li>
              <li><a href="#locations">Pune Magarpatta Hub</a></li>
              <li><a href="#locations">Bengaluru EcoSpace Hub</a></li>
              <li><a href="#locations">Delhi NCR Gurugram Center</a></li>
              <li><a href="#locations">Thane & Navi Mumbai Support</a></li>
              <li><a href="#locations">Hyderabad Tech Hub</a></li>
              <li><a href="#audit">Free IT Health Check Tool</a></li>
              <li><a href="#estimator">Cost & Sizing Calculator</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="container footer-bottom-inner">
            <div className="copyright-text">
              © 2026 LNK IT Infra Pvt. Ltd. All Rights Reserved. Professional IT & Network Infrastructure Services.
            </div>
            <div className="footer-cert-tags">
              <span>ISO 9001:2015 Quality Certified</span>
              <span>•</span>
              <span>Authorized System Integrator</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 15. FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919820011223?text=Hello%20LNK%20IT%20Infra,%20I%20would%20like%20to%20inquire%20about%20office%20IT%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        title="Chat with our engineer on WhatsApp"
      >
        <div className="whatsapp-pulse"></div>
        <PhoneCall size={26} />
        <span className="whatsapp-tooltip">Chat with Engineer on WhatsApp</span>
      </a>

      {/* 16. CONSULTATION & QUOTATION MODAL */}
      {isQuoteModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsQuoteModalOpen(false)}>
          <div className="modal-window glass-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setIsQuoteModalOpen(false)}
            >
              <X size={20} />
            </button>

            {quoteForm.submitted ? (
              <div className="modal-success-state">
                <div className="success-icon-box">
                  <CheckCircle2 size={48} className="text-emerald" />
                </div>
                <h3>Inquiry Received!</h3>
                <p>
                  Thank you, <strong>{quoteForm.name}</strong>. Our senior IT engineer will review your requirement and call you within <strong>30 minutes</strong> at <strong>{quoteForm.phone}</strong>.
                </p>
                <div className="modal-success-actions">
                  <button
                    className="btn-primary"
                    onClick={() => {
                      setQuoteForm({ ...quoteForm, submitted: false });
                      setIsQuoteModalOpen(false);
                    }}
                  >
                    Done
                  </button>
                  <button
                    className="btn-whatsapp"
                    onClick={() => openWhatsApp(`Hello, I submitted an inquiry for ${quoteForm.company} (${quoteForm.phone}).`)}
                  >
                    Send Direct on WhatsApp
                  </button>
                </div>
              </div>
            ) : (
              <div className="modal-form-content">
                <div className="modal-header">
                  <div className="badge-glow">FREE QUOTE & SITE VISIT</div>
                  <h3>Request a Free Quotation & Site Inspection</h3>
                  <p>
                    Tell us what you need, and our team will prepare a transparent quotation and schedule a visit to your office.
                  </p>
                </div>

                <form onSubmit={handleQuoteSubmit} className="quote-form-grid">
                  <div className="form-field">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Global Tech"
                      value={quoteForm.company}
                      onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98200 12345"
                      value={quoteForm.phone}
                      onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>City / Location</label>
                    <select
                      value={quoteForm.city}
                      onChange={(e) => setQuoteForm({ ...quoteForm, city: e.target.value })}
                    >
                      <option value="Mumbai">Mumbai (MMR)</option>
                      <option value="Pune">Pune</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Delhi NCR">Delhi NCR (Gurugram/Noida)</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Other">Other City</option>
                    </select>
                  </div>

                  <div className="form-field full-width">
                    <label>What do you need help with?</label>
                    <textarea
                      rows={3}
                      value={quoteForm.requirements}
                      onChange={(e) => setQuoteForm({ ...quoteForm, requirements: e.target.value })}
                      placeholder="Tell us about your office size, number of computers, or specific requirements..."
                    />
                  </div>

                  <div className="modal-form-actions full-width">
                    <button type="submit" className="btn-primary w-full">
                      <Send size={16} />
                      <span>Send Quote Request</span>
                    </button>
                    <p className="privacy-guarantee">
                      🔒 We respect your privacy. No spam or unwanted calls.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
