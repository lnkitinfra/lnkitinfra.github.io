import {
  CheckCircle2,
  MapPin,
  Clock,
  Layers,
  Star,
  PhoneCall,
  ArrowRight
} from 'lucide-react';
import { CASE_STUDIES_DETAILED } from '../data/caseStudiesData';

interface CaseStudiesPageProps {
  navigate: (route: string) => void;
  openQuoteModal: (requirement?: string) => void;
}

export function CaseStudiesPage({ navigate, openQuoteModal }: CaseStudiesPageProps) {
  const openWhatsApp = () => {
    window.open('https://wa.me/917796852335?text=Hello%20LNK%20IT%20Infra!%20I%20reviewed%20your%20case%20studies%20and%20would%20like%20to%20discuss%20a%20similar%20project.', '_blank');
  };

  return (
    <div className="page-wrapper case-studies-page">
      {/* Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="badge-glow">
            <Layers size={14} className="text-cyan" />
            <span>REAL RESULTS FOR INDIAN BUSINESSES</span>
          </div>
          <h1 className="page-hero-title">
            Client Projects & <span className="gradient-text">Case Studies</span>
          </h1>
          <p className="page-hero-desc">
            Explore how we solved real-world networking, cabling, and cyber security challenges for financial offices, manufacturing campuses, and software engineering teams across India.
          </p>
        </div>
      </section>

      {/* Case Studies Detailed List */}
      <section className="section-case-studies-list py-8">
        <div className="container">
          <div className="cases-full-list">
            {CASE_STUDIES_DETAILED.map((cs) => (
              <div key={cs.id} className="case-detail-card glass-card mb-8">
                <div className="case-detail-header">
                  <div>
                    <span className="industry-pill">{cs.industry}</span>
                    <h2 className="case-title-large">{cs.client}</h2>
                    <div className="case-meta-tags">
                      <span className="meta-tag">
                        <MapPin size={14} className="text-cyan" /> {cs.city}
                      </span>
                      <span className="meta-tag">
                        <Layers size={14} className="text-cyan" /> {cs.scale}
                      </span>
                      <span className="meta-tag">
                        <Clock size={14} className="text-emerald" /> {cs.timeline}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="case-detail-grid mt-6">
                  <div className="case-section-box">
                    <h3 className="section-label-red">The Challenge</h3>
                    <p>{cs.challenge}</p>
                  </div>

                  <div className="case-section-box">
                    <h3 className="section-label-blue">Our Engineering Solution</h3>
                    <p>{cs.solution}</p>
                  </div>
                </div>

                <div className="case-results-box mt-6">
                  <h3 className="section-label-green">Measurable Business Outcomes</h3>
                  <div className="results-grid">
                    {cs.results.map((res, rIdx) => (
                      <div key={rIdx} className="result-chip">
                        <CheckCircle2 size={16} className="text-emerald shrink-0" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="case-equipment-box mt-6">
                  <h4>Key Equipment & Hardware Installed:</h4>
                  <div className="equipment-chips-row">
                    {cs.equipmentInstalled.map((eq, eIdx) => (
                      <span key={eIdx} className="equip-chip">{eq}</span>
                    ))}
                  </div>
                </div>

                {cs.quote && (
                  <div className="case-quote-box mt-6 glass-card">
                    <div className="quote-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                    <blockquote>“{cs.quote.text}”</blockquote>
                    <div className="quote-by">
                      <strong>{cs.quote.author}</strong> — <span>{cs.quote.designation}</span>
                    </div>
                  </div>
                )}

                <div className="case-card-action-bar mt-6">
                  <button
                    className="btn-primary"
                    onClick={() =>
                      openQuoteModal(`I am interested in a setup similar to: ${cs.client} (${cs.industry})`)
                    }
                  >
                    Request Similar Setup for Your Office
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-cta-banner">
        <div className="container">
          <div className="cta-banner-box glass-card">
            <div className="cta-banner-content">
              <div className="badge-glow">GET STARTED</div>
              <h2 className="cta-headline">
                Have a Complex <span className="gradient-text">IT Challenge?</span>
              </h2>
              <p className="cta-subhead">
                Our senior network architects are ready to evaluate your site and provide tailored infrastructure recommendations.
              </p>
              <div className="cta-buttons">
                <button
                  className="btn-primary"
                  onClick={() => openQuoteModal('Case study inquiry - custom site consultation')}
                >
                  Book Free On-Site Inspection
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => navigate('services')}
                >
                  <span>Explore Our Services</span>
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
