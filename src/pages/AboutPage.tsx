import {
  Shield,
  CheckCircle2,
  Clock,
  Award,
  Target,
  ArrowRight
} from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';

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
            We are an office IT infrastructure installation and technical services company headquartered in Pune, backed by 5+ years of practical field experience across IT networking, hardware setups, and workplace support.
          </p>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="about-story-section py-8">
        <div className="container about-grid">
          <div className="about-text-col">
            <span className="section-eyebrow">OUR STORY & EXPERIENCE</span>
            <h2 className="about-heading">
              Built on Practical Experience, <span className="gradient-text">Clean Installation</span>, and Responsive Support.
            </h2>
            <p className="about-p">
              LNK IT Infra was launched with a clear mission: to provide businesses with neat, reliable IT setups without the confusion, inflated costs, or sloppy cable work often found in the market.
            </p>
            <p className="about-p">
              Backed by over 5 years of hands-on experience across diverse IT domains—including structured network cabling, server installations, Wi-Fi 6 deployments, firewalls, and daily desktop helpdesk—our team ensures your office technology runs smoothly from day one.
            </p>

            <div className="about-key-stats-row">
              <div className="stat-pill glass-card">
                <div className="stat-num">5+</div>
                <div className="stat-label">Years IT Experience</div>
              </div>
              <div className="stat-pill glass-card">
                <div className="stat-num">Setup</div>
                <div className="stat-label">Installation & Cabling</div>
              </div>
              <div className="stat-pill glass-card">
                <div className="stat-num">Support</div>
                <div className="stat-label">Technical Assistance</div>
              </div>
              <div className="stat-pill glass-card">
                <div className="stat-num">Pune</div>
                <div className="stat-label">Local On-Site Team</div>
              </div>
            </div>
          </div>

          <div className="about-visual-col">
            <div className="about-image-card glass-card">
              <img
                src="/images/office_it_setup.jpg"
                alt="LNK IT Infra Office Equipment Setup"
                className="about-feature-img"
              />
              <div className="about-img-caption">
                <h4>Practical Office IT Setups</h4>
                <p>Neat desk cabling, small office server racks, Wi-Fi access points, and reliable equipment setup.</p>
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
              <h3>Genuine Hardware & Equipment</h3>
              <p>
                We supply and install genuine IT hardware with standard manufacturer warranties. No refurbished grey-market units or duplicate cables.
              </p>
            </div>

            <div className="value-card glass-card">
              <div className="value-icon-box">
                <Shield size={24} className="text-emerald" />
              </div>
              <h3>Clean Cable Dressing & Testing</h3>
              <p>
                We take immense pride in cable dressing. No dangling wires, no spaghetti racks. Every single port is carefully tested and documented on your network blueprint.
              </p>
            </div>

            <div className="value-card glass-card">
              <div className="value-icon-box">
                <Clock size={24} className="text-cyan" />
              </div>
              <h3>Zero-Disruption Execution</h3>
              <p>
                We pull cables, cut over internet lines, and migrate servers during weekends and off-hours so your staff never experiences lost productivity.
              </p>
            </div>

            <div className="value-card glass-card">
              <div className="value-icon-box">
                <Target size={24} className="text-amber-500" />
              </div>
              <h3>Technical Support & Standby Spares</h3>
              <p>
                Under our AMC, our engineers provide prompt on-site support and replacement spares so your office operations run smoothly with minimal downtime.
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
                  <strong>ANSI/TIA-568 Structured Cabling Standards</strong>
                  <p>Full compliance with bend radius, separation from power lines, and proper grounding.</p>
                </div>
              </div>
              <div className="std-badge-item">
                <CheckCircle2 size={18} className="text-emerald shrink-0" />
                <div>
                  <strong>Firewall Installation & VPN Security Services</strong>
                  <p>Experienced setup for UTM firewall policies, secure remote VPN tunnels, and internet management.</p>
                </div>
              </div>
              <div className="std-badge-item">
                <CheckCircle2 size={18} className="text-emerald shrink-0" />
                <div>
                  <strong>Server & Cloud Migration Experience</strong>
                  <p>Smooth Windows Server deployment, Active Directory setup, and Microsoft 365 migrations.</p>
                </div>
              </div>
              <div className="std-badge-item">
                <CheckCircle2 size={18} className="text-emerald shrink-0" />
                <div>
                  <strong>Clean Network Cable Dressing & Testing</strong>
                  <p>Every cable line is properly combed, labeled, and continuity tested for zero packet drops.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-cta-banner">
        <div className="container">
          <div className="cta-banner-box">
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
                  <WhatsAppIcon size={18} />
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
