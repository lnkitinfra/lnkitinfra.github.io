import {
  Shield,
  CheckCircle2,
  Clock,
  Award,
  Target,
  PhoneCall,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  navigate: (route: string) => void;
  openQuoteModal: (requirement?: string) => void;
}

export function AboutPage({ navigate, openQuoteModal }: AboutPageProps) {
  const openWhatsApp = () => {
    window.open('https://wa.me/917796852335?text=Hello%20LNK%20IT%20Infra!%20I%20would%20like%20to%20learn%20more%20about%20your%20company%20and%20services.', '_blank');
  };

  return (
    <div className="page-wrapper about-page">
      {/* Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="badge-glow">
            <Shield size={14} className="text-cyan" />
            <span>WHO WE ARE</span>
          </div>
          <h1 className="page-hero-title">
            About <span className="gradient-text">LNK IT Infra</span>
          </h1>
          <p className="page-hero-desc">
            We are a certified enterprise IT infrastructure and network system integration company headquartered in Pune, serving over 1,200+ corporate offices, manufacturing plants, and software facilities across India.
          </p>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="about-story-section py-8">
        <div className="container about-grid">
          <div className="about-text-col">
            <span className="section-eyebrow">OUR STORY & FOUNDATION</span>
            <h2 className="about-heading">
              Built on Precision, <span className="gradient-text">Clean Aesthetics</span>, and Uncompromising Reliability.
            </h2>
            <p className="about-p">
              LNK IT Infra was founded with a straightforward goal: to rescue Indian businesses from messy, tangled wiring, unreliable consumer Wi-Fi routers, unmanaged switches, and recurring network outages.
            </p>
            <p className="about-p">
              Over the last decade, we have grown into a trusted full-stack IT system integrator. From structured cabling certified with Fluke DSX certifiers, to enterprise firewall security from Sophos and Fortinet, our certified team handles the entire technical lifecycle so our clients can focus 100% on their core business operations.
            </p>

            <div className="about-key-stats-row">
              <div className="stat-pill glass-card">
                <div className="stat-num">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-pill glass-card">
                <div className="stat-num">650+</div>
                <div className="stat-label">Offices Set Up</div>
              </div>
              <div className="stat-pill glass-card">
                <div className="stat-num">1,200+</div>
                <div className="stat-label">Satisfied Clients</div>
              </div>
              <div className="stat-pill glass-card">
                <div className="stat-num">99.9%</div>
                <div className="stat-label">Uptime Delivered</div>
              </div>
            </div>
          </div>

          <div className="about-visual-col">
            <div className="about-image-card glass-card">
              <img
                src="/images/datacenter.jpg"
                alt="LNK IT Infra Server Room Setup"
                className="about-feature-img"
              />
              <div className="about-img-caption">
                <h4>Engineered for Longevity</h4>
                <p>Every cable line we install is laser-labeled, color-coded, and tested for full gigabit transmission.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="about-values-section py-8">
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-glow">OUR FOUNDATIONAL VALUES</div>
            <h2 className="section-title">
              What Sets <span className="gradient-text">LNK IT Infra</span> Apart
            </h2>
          </div>

          <div className="values-grid">
            <div className="value-card glass-card">
              <div className="value-icon-box">
                <Award size={24} className="text-cyan" />
              </div>
              <h3>100% Genuine Certified Hardware</h3>
              <p>
                We only source through authorized national distributors with official manufacturer warranties. No grey-market units or duplicate cables.
              </p>
            </div>

            <div className="value-card glass-card">
              <div className="value-icon-box">
                <Shield size={24} className="text-emerald" />
              </div>
              <h3>Clean, Fluke-Certified Wiring</h3>
              <p>
                We take immense pride in cable dressing. No dangling wires, no spaghetti racks. Every single port is tested and documented on your network blueprint.
              </p>
            </div>

            <div className="value-card glass-card">
              <div className="value-icon-box">
                <Clock size={24} className="text-cyan" />
              </div>
              <h3>Zero-Disruption Execution</h3>
              <p>
                We pull cables, cut over internet lines, and migrate servers during weekends and nights so your staff never experiences a single minute of lost productivity.
              </p>
            </div>

            <div className="value-card glass-card">
              <div className="value-icon-box">
                <Target size={24} className="text-amber-500" />
              </div>
              <h3>Guaranteed SLA & Standby Units</h3>
              <p>
                Under our AMC, our engineers arrive within 1 hour with spare hardware ready to deploy so your business operations never come to a standstill.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certified Partnerships & Standards */}
      <section className="about-standards-section py-8">
        <div className="container">
          <div className="standards-card glass-card">
            <div className="standards-header">
              <Award size={28} className="text-cyan" />
              <div>
                <h3>Quality Standards & Certifications</h3>
                <p>We strictly adhere to international cabling and enterprise security standards:</p>
              </div>
            </div>

            <div className="standards-badges-grid">
              <div className="std-badge-item">
                <CheckCircle2 size={18} className="text-emerald shrink-0" />
                <div>
                  <strong>ISO 9001:2015 Quality Management</strong>
                  <p>Certified operational procedures from initial site survey through post-handover support.</p>
                </div>
              </div>
              <div className="std-badge-item">
                <CheckCircle2 size={18} className="text-emerald shrink-0" />
                <div>
                  <strong>ANSI/TIA-568 Structured Cabling Standard</strong>
                  <p>Full compliance with bend radius, separation from electrical conduits, and attenuation limits.</p>
                </div>
              </div>
              <div className="std-badge-item">
                <CheckCircle2 size={18} className="text-emerald shrink-0" />
                <div>
                  <strong>Sophos & Fortinet Certified System Integrators</strong>
                  <p>Certified security engineers trained in UTM firewall policy configuration, IPS, and SD-WAN.</p>
                </div>
              </div>
              <div className="std-badge-item">
                <CheckCircle2 size={18} className="text-emerald shrink-0" />
                <div>
                  <strong>Fluke Networks DSX Certified Cable Testing</strong>
                  <p>Every copper and fiber installation comes with printed certification test reports.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-cta-banner">
        <div className="container">
          <div className="cta-banner-box glass-card">
            <div className="cta-banner-content">
              <div className="badge-glow">PARTNER WITH US</div>
              <h2 className="cta-headline">
                Let's Build a Rock-Solid <span className="gradient-text">IT Network</span> Together
              </h2>
              <p className="cta-subhead">
                Book a consultation with our senior systems engineer or request a free on-site survey for your new or existing office.
              </p>
              <div className="cta-buttons">
                <button
                  className="btn-primary"
                  onClick={() => openQuoteModal('Consultation request from About page')}
                >
                  Schedule Technical Consultation
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => navigate('services')}
                >
                  <span>Explore All Services</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  className="btn-whatsapp"
                  onClick={openWhatsApp}
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
