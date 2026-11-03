import { useState, useEffect } from 'react';
import {
  Check,
  ChevronRight,
  Shield,
  Layers,
  Search,
  FileSpreadsheet,
  ArrowRight
} from 'lucide-react';
import { HARDWARE_CATALOG } from '../data/hardwareData';
import { WhatsAppIcon } from '../components/SocialIcons';

interface HardwarePageProps {
  navigate?: (route: string) => void;
  openQuoteModal: (requirement?: string) => void;
}

export function HardwarePage({ openQuoteModal }: HardwarePageProps) {
  const getBrandFromUrl = () => {
    const hash = window.location.hash;
    const match = hash.match(/brand=([a-zA-Z0-9_-]+)/);
    return match ? match[1].toLowerCase() : 'all';
  };

  const [activeBrand, setActiveBrand] = useState<string>(getBrandFromUrl);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const handleHash = () => {
      const brand = getBrandFromUrl();
      setActiveBrand(brand);
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const officialBrands = [
    { id: 'all', label: 'All Products & Brands', tag: 'Complete IT Hardware Catalog' },
    { id: 'dell', label: 'DELL', tag: 'PowerEdge, Latitude, OptiPlex' },
    { id: 'hpe', label: 'HPE', tag: 'ProLiant & Aruba Networking' },
    { id: 'samsung', label: 'SAMSUNG', tag: 'Enterprise NVMe & SATA SSDs' },
    { id: 'intel', label: 'INTEL', tag: 'Xeon Scalable & Core CPUs' },
    { id: 'kingston', label: 'KINGSTON', tag: 'Server ECC RAM & Enterprise SSD' },
    { id: 'crucial', label: 'CRUCIAL / MICRON', tag: 'DDR4/DDR5 RAM & NVMe SSD' },
    { id: 'amd', label: 'AMD', tag: 'EPYC & Ryzen Pro Processors' },
    { id: 'sophos', label: 'SOPHOS', tag: 'Next-Gen Firewalls & AP6' },
    { id: 'fortinet', label: 'FORTINET', tag: 'FortiGate UTM & SD-WAN' },
    { id: 'sonicwall', label: 'SONICWALL', tag: 'Multi-Gig Firewalls' },
    { id: 'syntel', label: 'SYNTEL', tag: 'EPABX & Office Intercom' }
  ];

  const categories = [
    { id: 'all', label: 'All IT Hardware' },
    { id: 'servers', label: 'Enterprise Servers (Dell / HPE)' },
    { id: 'server-installation', label: 'Server Installation & Setup' },
    { id: 'ssd', label: 'Solid State Drives (SSD)' },
    { id: 'ram', label: 'RAM & Memory (Server & Desktop)' },
    { id: 'processor', label: 'Processors & CPUs (Intel / AMD)' },
    { id: 'cpu', label: 'Desktop CPU & Mini PCs' },
    { id: 'laptops', label: 'Laptops (Sales & Rentals)' },
    { id: 'monitors', label: 'Commercial IPS Monitors' },
    { id: 'firewalls', label: 'Firewalls (Sophos / Fortinet / SonicWall)' },
    { id: 'switches', label: 'Network Switches (Aruba / Cisco)' },
    { id: 'wireless', label: 'Commercial Wi-Fi (Wi-Fi 6)' },
    { id: 'telephony', label: 'Office Intercom (Syntel NEO DX)' },
    { id: 'lan', label: 'LAN & Structured Cabling' },
    { id: 'surveillance', label: 'CCTV & Recorders (Hikvision)' }
  ];

  const filtered = HARDWARE_CATALOG.filter((item) => {
    const matchesBrand =
      activeBrand === 'all' ||
      item.brand.toLowerCase().includes(activeBrand.toLowerCase());
    const matchesCategory =
      activeCategory === 'all' || item.categorySlug === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.bestFor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBrand && matchesCategory && matchesSearch;
  });

  const openWhatsAppDirect = (modelName: string) => {
    const text = encodeURIComponent(
      `Hello LNK IT Infra! I would like to inquire about price and availability for: ${modelName}. Please share an official quote.`
    );
    window.open(`https://wa.me/917796852335?text=${text}`, '_blank');
  };

  return (
    <div className="page-wrapper hardware-page">
      {/* 1. Page Hero Section with Background Photo */}
      <section className="page-hero-section">
        <div className="container">
          <div className="badge-glow">
            <Layers size={14} className="text-cyan" />
            <span>GENUINE IT HARDWARE SUPPLY, SERVERS &amp; COMPONENTS • PUNE ONLY</span>
          </div>
          <h1 className="page-hero-title">
            Enterprise <span className="gradient-text">IT Hardware, Servers &amp; Components</span>
          </h1>
          <p className="page-hero-desc">
            We supply, install, and configure genuine enterprise servers, high-speed NVMe SSDs, server ECC RAM, processors, commercial laptops, IPS monitors, firewalls, and network switches with official warranty and rapid Pune on-site support.
          </p>

          {/* Official Product Brands Bar */}
          <div className="product-brands-shelf glass-card mb-4 mt-6">
            <div className="brand-shelf-header">
              <span className="brand-shelf-tag">AUTHORIZED OEM BRANDS</span>
              <span className="brand-shelf-hint">100% Genuine Equipment • Official Warranty • Direct Pune Supply</span>
            </div>
            <div className="brand-pills-row">
              {officialBrands.map((b) => (
                <button
                  key={b.id}
                  className={`brand-filter-pill ${activeBrand === b.id ? 'active' : ''}`}
                  onClick={() => {
                    setActiveBrand(b.id);
                    if (b.id !== 'all') {
                      setActiveCategory('all');
                    }
                  }}
                >
                  <span className="brand-pill-name">{b.label}</span>
                  <span className="brand-pill-desc">{b.tag}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="hardware-search-bar glass-card">
            <div className="search-input-box">
              <Search size={18} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search products (e.g. Dell Server, Samsung SSD, Kingston RAM, Intel Xeon, Laptop, Monitor)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="category-scroll-pills">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hardware Catalog Grid with Product Images */}
      <section className="section-hardware py-8">
        <div className="container">
          <div className="hardware-results-summary">
            <span>
              Showing <strong>{filtered.length}</strong> genuine IT hardware products
              {activeCategory !== 'all' && ` in ${categories.find((c) => c.id === activeCategory)?.label}`}
            </span>
            {(searchQuery || activeBrand !== 'all' || activeCategory !== 'all') && (
              <button
                className="clear-search-btn"
                onClick={() => {
                  setSearchQuery('');
                  setActiveBrand('all');
                  setActiveCategory('all');
                }}
              >
                Reset all filters
              </button>
            )}
          </div>

          <div className="hardware-cards-grid">
            {filtered.map((item) => (
              <div key={item.id} className="hw-card glass-card">
                {/* Product Image Header with Badges */}
                <div className="hw-card-image-box">
                  <img
                    src={item.image}
                    alt={`${item.name} - ${item.brand}`}
                    className="hw-product-img"
                    loading="lazy"
                  />
                  <span className="hw-brand-pill-overlay">{item.brand}</span>
                  {item.inStock && (
                    <span className="stock-badge-overlay">
                      <Check size={12} /> Genuine Stock
                    </span>
                  )}
                </div>

                {/* Product Details Body */}
                <div className="hw-card-body">
                  <div className="hw-category-label">{item.category}</div>
                  <h3 className="hw-model-name">{item.name}</h3>
                  <p className="hw-short-desc">{item.shortDesc}</p>

                  <div className="hw-specs-block">
                    <div className="hw-specs-heading">Key Specifications:</div>
                    <ul className="hw-specs-list">
                      {item.specs.map((sp, sIdx) => (
                        <li key={sIdx}>
                          <ChevronRight size={14} className="text-cyan shrink-0" />
                          <span>{sp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="hw-best-for">
                    <strong>Recommended For:</strong>
                    <p>{item.bestFor}</p>
                  </div>

                  <div className="hw-warranty-box">
                    <Shield size={14} className="text-emerald shrink-0" />
                    <span>{item.warranty}</span>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="card-bottom-meta mt-auto">
                    <button
                      className="btn-card-boq"
                      onClick={() =>
                        openQuoteModal(`Bill of Quantities inquiry for ${item.name} (${item.brand})`)
                      }
                      title="Request itemized Bill of Quantities"
                    >
                      <FileSpreadsheet size={15} />
                      <span>Request BoQ Quote</span>
                    </button>
                    <button
                      className="btn-whatsapp-sm"
                      onClick={() => openWhatsAppDirect(item.name)}
                      title="Inquire stock on WhatsApp"
                    >
                      <WhatsAppIcon size={14} />
                      <span>Inquire on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Source Hardware Through LNK IT Infra */}
      <section className="section-brand-certs py-8 bg-subtle">
        <div className="container">
          <div className="brand-certs-box glass-card">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '20px', color: '#0f172a' }}>
              Why Source IT Hardware &amp; Servers Through LNK IT Infra?
            </h3>
            <div className="certs-grid">
              <div className="cert-item">
                <div className="cert-icon-dot">✓</div>
                <div>
                  <h4>100% Genuine Manufacturer Warranty</h4>
                  <p>Every server, SSD, RAM module, and processor comes with verified serial numbers and direct OEM India warranty.</p>
                </div>
              </div>
              <div className="cert-item">
                <div className="cert-icon-dot">✓</div>
                <div>
                  <h4>Turnkey On-Site Server Installation</h4>
                  <p>We don't just drop boxes. Our certified engineers mount racks, build RAID arrays, configure ESXi/Hyper-V, and dress cables.</p>
                </div>
              </div>
              <div className="cert-item">
                <div className="cert-icon-dot">✓</div>
                <div>
                  <h4>Same-Day Standby Replacement Spares</h4>
                  <p>Under our Comprehensive AMC, we provide temporary standby laptops, RAM, SSDs, and switches during hardware repairs in Pune.</p>
                </div>
              </div>
              <div className="cert-item">
                <div className="cert-icon-dot">✓</div>
                <div>
                  <h4>Transparent Commercial GST Invoicing</h4>
                  <p>Clear, itemized tax invoices with explicit breakdown of hardware models, component serials, and installation milestones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Call To Action Banner */}
      <section className="section-cta-banner py-8">
        <div className="container">
          <div className="cta-banner-box">
            <span className="badge-glow">DIRECT PUNE SUPPLY &amp; INSTALLATION</span>
            <h2 className="cta-heading">Need a Customized Hardware Bill of Quantities?</h2>
            <p className="cta-subtext">
              Share your server sizing, laptop counts, SSD/RAM specs, or networking requirements. Our senior hardware engineers will prepare an itemized quote within 2 hours.
            </p>
            <div className="cta-actions">
              <button
                className="btn-primary"
                onClick={() => openQuoteModal('Customized Hardware & Server BoQ Request')}
              >
                <span>Request Custom Hardware BoQ</span>
                <ArrowRight size={16} />
              </button>
              <button
                className="btn-whatsapp-large"
                onClick={() =>
                  window.open(
                    'https://wa.me/917796852335?text=Hello%20LNK%20IT%20Infra!%20I%20need%20a%20hardware%20quote%20for%20servers,%20SSD,%20RAM,%20laptops,%20and%20IT%20equipment.',
                    '_blank'
                  )
                }
              >
                <WhatsAppIcon size={18} />
                <span>Chat with Hardware Engineer (+91 7796852335)</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
