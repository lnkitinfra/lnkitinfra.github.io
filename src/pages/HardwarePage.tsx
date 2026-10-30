import { useState } from 'react';
import {
  Check,
  ChevronRight,
  Shield,
  Layers,
  Search,
  PhoneCall,
  ArrowRight
} from 'lucide-react';
import { HARDWARE_CATALOG } from '../data/hardwareData';

interface HardwarePageProps {
  navigate: (route: string) => void;
  openQuoteModal: (requirement?: string) => void;
}

export function HardwarePage({ navigate, openQuoteModal }: HardwarePageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Hardware Models' },
    { id: 'firewalls', label: 'Security Firewalls (Sophos / Fortinet)' },
    { id: 'switches', label: 'Network Switches (Aruba / Cisco)' },
    { id: 'wireless', label: 'Commercial Wi-Fi (Wi-Fi 6)' },
    { id: 'telephony', label: 'Office Intercom (Syntel / NEC)' },
    { id: 'surveillance', label: 'CCTV & Recorders (Hikvision)' }
  ];

  const filtered = HARDWARE_CATALOG.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.categorySlug === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.bestFor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="badge-glow">
            <Layers size={14} className="text-cyan" />
            <span>GENUINE HARDWARE DISTRIBUTION & INSTALLATION</span>
          </div>
          <h1 className="page-hero-title">
            Enterprise <span className="gradient-text">Hardware & Equipment</span>
          </h1>
          <p className="page-hero-desc">
            We supply genuine enterprise IT equipment directly through authorized Indian distributor channels, complete with official manufacturer warranties, on-site commissioning, and AMC spare parts support.
          </p>

          {/* Search & Category Filter Bar */}
          <div className="hardware-search-bar glass-card">
            <div className="search-input-box">
              <Search size={18} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search models (e.g. Sophos XGS, Aruba Instant On, Syntel, Cisco)..."
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

      {/* Catalog Grid */}
      <section className="section-hardware py-8">
        <div className="container">
          <div className="hardware-results-summary">
            <span>Showing <strong>{filtered.length}</strong> enterprise models</span>
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                Clear search
              </button>
            )}
          </div>

          <div className="hardware-cards-grid">
            {filtered.map((item) => (
              <div key={item.id} className="hw-card glass-card">
                <div className="hw-card-header">
                  <div>
                    <span className="hw-brand-badge">{item.brand}</span>
                    <h3 className="hw-model-name">{item.name}</h3>
                  </div>
                  {item.inStock && (
                    <span className="stock-badge">
                      <Check size={12} /> Genuine Stock Available
                    </span>
                  )}
                </div>

                <div className="hw-category-label">{item.category}</div>
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

                <div className="hw-card-footer">
                  <button
                    className="btn-primary w-full"
                    onClick={() =>
                      openQuoteModal(`Price & availability inquiry for ${item.name} (${item.brand})`)
                    }
                  >
                    Get Pricing & Availability
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Certification Banner */}
      <section className="section-brand-certs">
        <div className="container">
          <div className="brand-certs-box glass-card">
            <h3>Why Source Hardware Through LNK IT Infra?</h3>
            <div className="certs-grid">
              <div className="cert-item">
                <div className="cert-icon-dot">✓</div>
                <div>
                  <h4>100% Genuine Indian Warranty</h4>
                  <p>Every serial number is registered with official national distributor records for hassle-free warranty replacements.</p>
                </div>
              </div>
              <div className="cert-item">
                <div className="cert-icon-dot">✓</div>
                <div>
                  <h4>Turnkey On-Site Commissioning</h4>
                  <p>Our engineers do not just drop boxes at your door. We mount, configure, test, and integrate everything into your network.</p>
                </div>
              </div>
              <div className="cert-item">
                <div className="cert-icon-dot">✓</div>
                <div>
                  <h4>Standby Replacement Spares</h4>
                  <p>Under our Comprehensive AMC, we provide temporary backup units from our local warehouse during hardware repairs.</p>
                </div>
              </div>
              <div className="cert-item">
                <div className="cert-icon-dot">✓</div>
                <div>
                  <h4>Transparent Commercial Invoicing</h4>
                  <p>Clear GST tax invoices with explicit breakdown of hardware costs, licensing periods, and installation labor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta-banner">
        <div className="container">
          <div className="cta-banner-box glass-card">
            <div className="cta-banner-content">
              <div className="badge-glow">OFFICIAL ENTERPRISE HARDWARE</div>
              <h2 className="cta-headline">
                Need a Custom <span className="gradient-text">Hardware BOM?</span>
              </h2>
              <p className="cta-subhead">
                Send us your floor plan or user count. Our certified network engineers will calculate port counts, PoE budgets, and bandwidth requirements with full brand warranty.
              </p>
              <div className="cta-buttons">
                <button
                  className="btn-primary"
                  onClick={() => openQuoteModal('Custom Hardware BOM and Price Request')}
                >
                  Request Official Quotation
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => navigate('amc')}
                >
                  <span>Explore IT AMC Plans</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  className="btn-whatsapp"
                  onClick={() => window.open('https://wa.me/917796852335?text=Hello%20LNK%20IT%20Infra!%20I%20need%20pricing%20for%20enterprise%20hardware.', '_blank')}
                >
                  <PhoneCall size={18} />
                  <span>WhatsApp (+91 7796852335)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
