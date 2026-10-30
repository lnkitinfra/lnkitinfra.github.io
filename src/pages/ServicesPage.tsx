import { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Layers
} from 'lucide-react';
import { DETAILED_SERVICES } from '../data/solutionsData';

interface ServicesPageProps {
  navigate: (route: string) => void;
  openQuoteModal: (requirement?: string) => void;
}

export function ServicesPage({ navigate, openQuoteModal }: ServicesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services (10)' },
    { id: 'Core Infrastructure', label: 'Cabling, Wi-Fi & Servers' },
    { id: 'Cyber Defense', label: 'Firewalls & Cyber Security' },
    { id: 'Smart Surveillance', label: 'CCTV & Biometrics' },
    { id: 'Voice & Telecom', label: 'Intercom & Leased Line' },
    { id: 'Cloud & Data', label: 'Backup & Cloud' }
  ];

  const filtered = selectedCategory === 'all'
    ? DETAILED_SERVICES
    : DETAILED_SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <div className="page-wrapper">
      {/* Page Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="badge-glow">
            <Layers size={14} className="text-cyan" />
            <span>ENTERPRISE SOLUTIONS CATALOG</span>
          </div>
          <h1 className="page-hero-title">
            Office IT Infrastructure & <span className="gradient-text">Networking Services</span>
          </h1>
          <p className="page-hero-desc">
            From single-floor startup offices to multi-acre industrial campuses, we supply genuine hardware, pull certified structured cabling, deploy enterprise firewalls, and provide complete lifecycle support across India.
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
                <div key={service.id} className="service-catalog-card glass-card">
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
                    <h4>Problems We Fix:</h4>
                    <ul className="service-problems-list">
                      {service.problemsSolved.slice(0, 3).map((prob, pIdx) => (
                        <li key={pIdx}>
                          <span className="bullet-cross">✕</span>
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-card-section">
                    <h4>What We Do:</h4>
                    <ul className="service-what-list">
                      {service.whatWeDo.slice(0, 3).map((what, wIdx) => (
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
                        navigate(`services/${service.id}`);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <span>Read Technical Guide & Pricing</span>
                      <ArrowRight size={16} />
                    </button>
                    <button
                      className="btn-secondary w-full"
                      onClick={() => openQuoteModal(`Quotation inquiry for ${service.title}`)}
                    >
                      Inquire / Request Quote
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Strip */}
      <section className="section-process-strip">
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-glow">OUR IMPLEMENTATION METHODOLOGY</div>
            <h2 className="section-title">
              How We Execute <span className="gradient-text">Your IT Setup</span>
            </h2>
            <p className="section-desc mx-auto">
              We eliminate guesswork with a standardized 4-stage engineering process developed over 650+ enterprise installations.
            </p>
          </div>

          <div className="process-steps-row">
            <div className="process-step-item glass-card">
              <div className="step-num">01</div>
              <h3>Site Survey & CAD Plan</h3>
              <p>We measure cable paths, count desk points, evaluate electrical earthing, and test RF Wi-Fi signal interference.</p>
            </div>
            <div className="process-step-item glass-card">
              <div className="step-num">02</div>
              <h3>Supply Genuine Hardware</h3>
              <p>Direct procurement from authorized distributors with full manufacturer warranties and serial tracking.</p>
            </div>
            <div className="process-step-item glass-card">
              <div className="step-num">03</div>
              <h3>Neat Wiring & Dressing</h3>
              <p>Cables are pulled through conduits, neatly laced to racks, and labeled with industrial heat-shrink tags.</p>
            </div>
            <div className="process-step-item glass-card">
              <div className="step-num">04</div>
              <h3>Testing, SLA & AMC</h3>
              <p>Every port is certified using Fluke DSX testers. Handover includes network diagrams and 24/7 AMC support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-cta-banner">
        <div className="container">
          <div className="cta-banner-box glass-card">
            <div className="cta-banner-content">
              <div className="badge-glow">SCHEDULE A SITE VISIT</div>
              <h2 className="cta-headline">
                Need Help Planning Your <span className="gradient-text">Office Network?</span>
              </h2>
              <p className="cta-subhead">
                Our senior network engineer will visit your office in Pune, Mumbai, Bengaluru, or Delhi NCR to provide a comprehensive floor evaluation and cost estimate.
              </p>
              <div className="cta-buttons">
                <button
                  className="btn-primary"
                  onClick={() => openQuoteModal('Site survey booking from Services page')}
                >
                  Book Free On-Site Inspection
                </button>
                <button
                  className="btn-whatsapp"
                  onClick={() => window.open('https://wa.me/917796852335?text=Hello%20LNK%20IT%20Infra!%20I%20am%20viewing%20your%20services%20and%20would%20like%20to%20discuss%20a%20project.', '_blank')}
                >
                  Chat with Engineer on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
